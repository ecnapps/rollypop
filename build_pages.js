const fs = require('fs');
const path = require('path');

// 1. Extract I18N dictionary from main.js
const mainJsContent = fs.readFileSync('main.js', 'utf8');
const startIdx = mainJsContent.indexOf('const I18N = {');
const endIdx = mainJsContent.indexOf('const COLOR_PALETTES = [');
if (startIdx === -1 || endIdx === -1) {
  throw new Error('Could not find I18N dictionary boundaries in main.js');
}
const snippet = mainJsContent.substring(startIdx, endIdx).replace('const I18N =', 'global.I18N =');
eval(snippet);
const I18N = global.I18N;

// 2. Read base index.html
let baseHtml = fs.readFileSync('index.html', 'utf8');

// Remove existing lang dropdown
baseHtml = baseHtml.replace(/<!-- Language Selector -->[\s\S]*?<\/div>\s*<\/div>/, '');

// Clean up any remaining lang-selector block if present
baseHtml = baseHtml.replace(/<div class="lang-selector">[\s\S]*?<\/div>\s*<\/div>/, '');

// Add clean Language links into footer if not present
if (!baseHtml.includes('href="/es/"')) {
  const footerLangs = `
        <div>
          <h4 class="footer__col-title">Languages</h4>
          <ul class="footer__links">
            <li><a href="/en/" class="footer__link">English (US/CA)</a></li>
            <li><a href="/es/" class="footer__link">Español (ES/LATAM)</a></li>
            <li><a href="/fr/" class="footer__link">Français (FR/CA)</a></li>
          </ul>
        </div>`;
  baseHtml = baseHtml.replace(/<div>\s*<h4 class="footer__col-title">Platform<\/h4>/, footerLangs + '\n\n        <div>\n          <h4 class="footer__col-title">Platform</h4>');
}

// Ensure asset URLs are absolute root paths
baseHtml = baseHtml.replace(/href="styles\.css"/g, 'href="/styles.css"');
baseHtml = baseHtml.replace(/src="main\.js"/g, 'src="/main.js"');
baseHtml = baseHtml.replace(/href="favicon\.svg"/g, 'href="/favicon.svg"');
baseHtml = baseHtml.replace(/href="favicon\.ico"/g, 'href="/favicon.ico"');
baseHtml = baseHtml.replace(/href="site\.webmanifest"/g, 'href="/site.webmanifest"');
baseHtml = baseHtml.replace(/href="icons\//g, 'href="/icons/');
baseHtml = baseHtml.replace(/src="icons\//g, 'src="/icons/');

// Clean up any old routing script from baseHtml before generating language files
baseHtml = baseHtml.replace(/<!-- Instant Browser Language Detection & Auto-Routing -->[\s\S]*?<\/noscript>\s*/, '');

// Ensure directories exist
['en', 'es', 'fr'].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Function to replace i18n placeholders in HTML
function renderHtmlForLang(template, lang) {
  const dict = I18N[lang];
  let html = template;

  // Replace <html lang="...">
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);

  // Canonical and hreflangs
  const canonicalTag = `<link rel="canonical" href="https://rollypop.ecn-apps.com/${lang}/">`;
  const hreflangs = `  <link rel="canonical" href="https://rollypop.ecn-apps.com/${lang}/">
  <link rel="alternate" type="application/rss+xml" title="RollyPop RSS" href="https://rollypop.ecn-apps.com/feed.xml">
  <link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/">
  <link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/en/">
  <link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/">
  <link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/">`;

  html = html.replace(/<link rel="canonical"[\s\S]*?<link rel="alternate" hreflang="fr"[^>]*>/, hreflangs);

  // Meta Title & Description
  if (dict.siteTitle) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${dict.siteTitle}</title>`);
    html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${dict.siteTitle}">`);
    html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${dict.siteTitle}">`);
  }
  if (dict.siteDesc) {
    html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${dict.siteDesc}">`);
    html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${dict.siteDesc}">`);
    html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${dict.siteDesc}">`);
  }

  // Open Graph URL & Locale
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="https://rollypop.ecn-apps.com/${lang}/">`);
  const ogLocale = lang === 'es' ? 'es_ES' : (lang === 'fr' ? 'fr_FR' : 'en_US');
  html = html.replace(/<meta property="og:locale" content="[^"]*">/, `<meta property="og:locale" content="${ogLocale}">`);

  // Translate all elements with data-i18n
  for (const [key, val] of Object.entries(dict)) {
    // 1. Tag contents with data-i18n="key"
    const regexTag = new RegExp(`(<([a-zA-Z0-9]+)[^>]*\\bdata-i18n="${key}"[^>]*>)[\\s\\S]*?(<\\/\\2>)`, 'g');
    html = html.replace(regexTag, `$1${val}$3`);

    // 2. Input placeholders with data-i18n-ph="key"
    const regexPh = new RegExp(`(\\bdata-i18n-ph="${key}"[^>]*?placeholder=")[^"]*(")`, 'g');
    html = html.replace(regexPh, `$1${val.replace(/"/g, '&quot;')}$2`);
    const regexPh2 = new RegExp(`(placeholder=")[^"]*("[^>]*?\\bdata-i18n-ph="${key}")`, 'g');
    html = html.replace(regexPh2, `$1${val.replace(/"/g, '&quot;')}$2`);
  }

  return html;
}

// 3. Render en/index.html, es/index.html, fr/index.html
['en', 'es', 'fr'].forEach(lang => {
  const langHtml = renderHtmlForLang(baseHtml, lang);
  fs.writeFileSync(path.join(lang, 'index.html'), langHtml, 'utf8');
  console.log(`Generated ${lang}/index.html (${langHtml.length} bytes)`);
});

// 4. Render root index.html with language detection script
const routingScript = `  <!-- Instant Browser Language Detection & Auto-Routing -->
  <script>
    (function() {
      // Only execute redirect on the root homepage
      var pathname = window.location.pathname;
      if (pathname !== '/' && pathname !== '/index.html' && pathname !== '') {
        return;
      }
      try {
        var params = new URLSearchParams(window.location.search);
        var qLang = params.get('lang');
        var stored = localStorage.getItem('rollypop_lang');
        var navLangs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
        var target = 'en';

        if (qLang && (qLang === 'es' || qLang === 'fr' || qLang === 'en')) {
          target = qLang;
        } else if (stored && (stored === 'es' || stored === 'fr' || stored === 'en')) {
          target = stored;
        } else {
          for (var i = 0; i < navLangs.length; i++) {
            var l = (navLangs[i] || '').toLowerCase();
            if (l.startsWith('es')) { target = 'es'; break; }
            if (l.startsWith('fr')) { target = 'fr'; break; }
            if (l.startsWith('en')) { target = 'en'; break; }
          }
        }

        var search = window.location.search || '';
        var hash = window.location.hash || '';
        window.location.replace('/' + target + '/' + search + hash);
      } catch (e) {
        window.location.replace('/en/');
      }
    })();
  </script>
  <noscript>
    <meta http-equiv="refresh" content="0; url=/en/">
  </noscript>
`;

let rootHtml = renderHtmlForLang(baseHtml, 'en');
rootHtml = rootHtml.replace(/<link rel="canonical" href="https:\/\/rollypop\.ecn-apps\.com\/en\/">/, '<link rel="canonical" href="https://rollypop.ecn-apps.com/">');
rootHtml = rootHtml.replace('<head>', '<head>\n' + routingScript);

fs.writeFileSync('index.html', rootHtml, 'utf8');
console.log(`Updated root index.html with automatic language router (${rootHtml.length} bytes)`);

// 5. Update sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://rollypop.ecn-apps.com/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/en/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/en/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/en/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/es/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/en/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/fr/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/en/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/feed.xml</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
`;
fs.writeFileSync('sitemap.xml', sitemapContent, 'utf8');
console.log('Updated sitemap.xml with dedicated language URLs');

// 6. Update sw.js to precache new language routes
let swContent = fs.readFileSync('sw.js', 'utf8');
if (!swContent.includes("'/es/'")) {
  swContent = swContent.replace(
    /const PRECACHE_ASSETS = \[[\s\S]*?\];/,
    `const PRECACHE_ASSETS = [
  '/',
  '/en/',
  '/es/',
  '/fr/',
  '/styles.css',
  '/main.js',
  '/site.webmanifest',
  '/favicon.svg',
  '/favicon.ico',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-maskable-192x192.png',
  '/icons/icon-maskable-512x512.png',
  '/icons/apple-touch-icon.png'
];`
  );
  fs.writeFileSync('sw.js', swContent, 'utf8');
  console.log('Updated sw.js precache list');
}

console.log('Multilanguage build complete!');
