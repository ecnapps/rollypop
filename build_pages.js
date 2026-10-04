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

// 2. Read clean base HTML (index.base.html)
let baseHtml = fs.readFileSync('index.base.html', 'utf8');

// Ensure asset URLs are absolute root paths
baseHtml = baseHtml.replace(/href="styles\.css"/g, 'href="/styles.css"');
baseHtml = baseHtml.replace(/src="main\.js"/g, 'src="/main.js"');
baseHtml = baseHtml.replace(/href="favicon\.svg"/g, 'href="/favicon.svg"');
baseHtml = baseHtml.replace(/href="favicon\.ico"/g, 'href="/favicon.ico"');
baseHtml = baseHtml.replace(/href="site\.webmanifest"/g, 'href="/site.webmanifest"');
baseHtml = baseHtml.replace(/href="icons\//g, 'href="/icons/');
baseHtml = baseHtml.replace(/src="icons\//g, 'src="/icons/');

// Ensure directories exist
['es', 'fr'].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const urlFor = l => l === 'en' ? 'https://rollypop.ecn-apps.com/' : `https://rollypop.ecn-apps.com/${l}/`;

function generateSchemaJsonLd(lang) {
  const dict = I18N[lang];
  const url = urlFor(lang);
  const isEs = lang === 'es';
  const isFr = lang === 'fr';

  const inLanguage = isEs ? ['es-ES', 'es-MX', 'es-419'] : (isFr ? ['fr-FR', 'fr-CA'] : ['en-US', 'en-CA', 'en-GB']);

  const siteName = isEs ? 'RollyPop — Ruleta de la Suerte y Decisiones' : (isFr ? 'RollyPop — Roue de la Fortune et de Décision' : 'RollyPop');
  const appName = isEs ? 'RollyPop — Ruleta Aleatoria de Decisiones y Sorteos' : (isFr ? 'RollyPop — Roue de la Fortune & Roulette de Décision' : 'RollyPop Decision Wheel');

  const featureList = isEs ? [
    "Generación de números aleatorios criptográficos seguros (window.crypto)",
    "Efectos de sonido de engranaje mecánico y fanfarria de victoria sintetizados",
    "Animaciones festivas de confeti en alta resolución",
    "Soporte multi-idioma instantáneo (Español, Inglés, Francés)",
    "Enlaces URL compartibles con lista de opciones y colores personalizados",
    "Eliminación de ganadores en un clic para sorteos, rifas y dinámicas",
    "Modo pantalla completa para presentaciones en vivo y streaming"
  ] : (isFr ? [
    "Tirage au sort cryptographique ultra-équitable avec window.crypto",
    "Effets sonores de cliquet mécanique et fanfare de célébration",
    "Animations de confettis festifs haute résolution",
    "Support multilingue instantané (Français, Anglais, Espagnol)",
    "Partage par lien URL direct avec tranches et couleurs personnalisées",
    "Retrait du gagnant en un clic pour concours, tombolas et tirages",
    "Mode plein écran immersif pour présentations et diffusions en direct"
  ] : [
    "Cryptographically secure randomness with window.crypto",
    "Synthesized audio ticking and victory fanfare",
    "Confetti celebration animations",
    "Instant multi-language support (English, Spanish, French)",
    "Shareable URL wheels with custom slice options",
    "One-click winner elimination for raffles and giveaways",
    "Fullscreen distraction-free presentation mode"
  ]);

  const breadcrumbs = isEs ? [
    { "@type": "ListItem", "position": 1, "name": "Inicio ecn-apps", "item": "https://ecn-apps.com/" },
    { "@type": "ListItem", "position": 2, "name": "Ruleta de Decisiones RollyPop", "item": url }
  ] : (isFr ? [
    { "@type": "ListItem", "position": 1, "name": "Accueil ecn-apps", "item": "https://ecn-apps.com/" },
    { "@type": "ListItem", "position": 2, "name": "Roue de Décision RollyPop", "item": url }
  ] : [
    { "@type": "ListItem", "position": 1, "name": "ecn-apps Home", "item": "https://ecn-apps.com/" },
    { "@type": "ListItem", "position": 2, "name": "RollyPop Decision Wheel", "item": url }
  ]);

  const faqs = [
    { q: dict.faq1Q, a: dict.faq1A },
    { q: dict.faq2Q, a: dict.faq2A },
    { q: dict.faq3Q, a: dict.faq3A },
    { q: dict.faq4Q, a: dict.faq4A },
    { q: dict.faq5Q, a: dict.faq5A },
    { q: dict.faq6Q, a: dict.faq6A }
  ].filter(f => f.q && f.a);

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        "url": url,
        "name": siteName,
        "alternateName": ["Ruleta de la Suerte", "Roue de la Fortune", "Decision Roulette", "Spin The Wheel"],
        "description": dict.siteDesc,
        "inLanguage": inLanguage,
        "publisher": {
          "@type": "Organization",
          "name": "ecn-apps",
          "url": "https://ecn-apps.com/"
        }
      },
      {
        "@type": "WebApplication",
        "@id": `${url}#webapp`,
        "name": appName,
        "url": url,
        "applicationCategory": "UtilitiesApplication, EntertainmentApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
        "description": dict.siteDesc,
        "inLanguage": inLanguage,
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1420"
        },
        "featureList": featureList,
        "publisher": {
          "@type": "Organization",
          "name": "ecn-apps",
          "url": "https://ecn-apps.com/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": breadcrumbs
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  }, null, 2);
}

function generateRssFeed(lang) {
  const dict = I18N[lang];
  const url = urlFor(lang);
  const feedUrl = lang === 'en' ? 'https://rollypop.ecn-apps.com/feed.xml' : `https://rollypop.ecn-apps.com/${lang}/feed.xml`;
  const localeLang = lang === 'es' ? 'es-ES' : (lang === 'fr' ? 'fr-FR' : 'en-US');
  const now = new Date().toUTCString();

  const item1Title = lang === 'es'
    ? 'RollyPop — Ruleta Aleatoria para Decidir lo que Sea'
    : (lang === 'fr' ? 'RollyPop — Faites Tourner la Roue pour Tout Décider' : 'RollyPop — Spin the Wheel to Decide Anything');
  const item1Desc = dict.heroSubtitle || dict.siteDesc;

  const item2Title = lang === 'es'
    ? 'Física con Azar Criptográfico y Efectos de Sonido Realistas'
    : (lang === 'fr' ? 'Hasard Cryptographique Équitable et Bruitages Réalistes' : 'Cryptographic RNG Physics & Realistic Sound FX');
  const item2Desc = lang === 'es'
    ? 'Generación de números verdaderamente aleatorios con el API criptográfico nativo de tu navegador, fanfarria y confeti.'
    : (lang === 'fr' ? 'Génération de nombres purement aléatoires avec Web Crypto API, cliquet mécanique et pluie de confettis.' : 'Mathematically fair and unbiased spins using window.crypto, ratchet sound synthesis, and confetti celebrations.');

  const item3Title = lang === 'es'
    ? 'Plantillas Predefinidas y Soporte Multilenguaje Instantáneo'
    : (lang === 'fr' ? 'Modèles Prêts à l\'Emploi et Support Multilingue' : 'Custom Slice Presets & Instant Multi-Language Support');
  const item3Desc = lang === 'es'
    ? 'Opciones para comida, dados, números, asignación de equipos, verdad o reto y ruedas para compartir por enlace directo.'
    : (lang === 'fr' ? 'Modèles pour repas, dés, tirages au sort de prénoms, oui ou non et partage direct par lien URL.' : 'Ready presets for food, dice rolls, classroom raffles, yes/no decisions, and shareable wheel links.');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${dict.siteTitle}</title>
    <link>${url}</link>
    <description>${dict.siteDesc}</description>
    <language>${localeLang}</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <item>
      <title>${item1Title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${now}</pubDate>
      <description>${item1Desc}</description>
    </item>
    <item>
      <title>${item2Title}</title>
      <link>${url}#features</link>
      <guid isPermaLink="true">${url}#features</guid>
      <pubDate>${now}</pubDate>
      <description>${item2Desc}</description>
    </item>
    <item>
      <title>${item3Title}</title>
      <link>${url}#presets</link>
      <guid isPermaLink="true">${url}#presets</guid>
      <pubDate>${now}</pubDate>
      <description>${item3Desc}</description>
    </item>
  </channel>
</rss>
`;
}

// Function to replace i18n placeholders in HTML
function renderHtmlForLang(template, lang) {
  const dict = I18N[lang];
  let html = template;

  // Replace <html lang="...">
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);

  // Canonical and comprehensive regional hreflangs & RSS
  const rssHref = lang === 'en' ? 'https://rollypop.ecn-apps.com/feed.xml' : `https://rollypop.ecn-apps.com/${lang}/feed.xml`;
  const rssTitle = lang === 'es' ? 'RollyPop RSS (Español)' : (lang === 'fr' ? 'RollyPop RSS (Français)' : 'RollyPop RSS');

  const hreflangs = `  <link rel="canonical" href="${urlFor(lang)}">
  <link rel="alternate" type="application/rss+xml" title="${rssTitle}" href="${rssHref}">
  <link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/">
  <link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/">
  <link rel="alternate" hreflang="en-US" href="https://rollypop.ecn-apps.com/">
  <link rel="alternate" hreflang="en-CA" href="https://rollypop.ecn-apps.com/">
  <link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/">
  <link rel="alternate" hreflang="es-ES" href="https://rollypop.ecn-apps.com/es/">
  <link rel="alternate" hreflang="es-MX" href="https://rollypop.ecn-apps.com/es/">
  <link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/">
  <link rel="alternate" hreflang="fr-FR" href="https://rollypop.ecn-apps.com/fr/">
  <link rel="alternate" hreflang="fr-CA" href="https://rollypop.ecn-apps.com/fr/">`;

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

  // Meta Keywords localized
  if (dict.metaKeywords) {
    html = html.replace(/<meta name="keywords" content="[^"]*">/, `<meta name="keywords" content="${dict.metaKeywords}">`);
  }

  // Open Graph URL & Locales per country/region
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${urlFor(lang)}">`);
  
  let ogLocales = '';
  if (lang === 'es') {
    ogLocales = `  <meta property="og:locale" content="es_ES">
  <meta property="og:locale:alternate" content="es_MX">
  <meta property="og:locale:alternate" content="es_LA">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:locale:alternate" content="fr_FR">`;
  } else if (lang === 'fr') {
    ogLocales = `  <meta property="og:locale" content="fr_FR">
  <meta property="og:locale:alternate" content="fr_CA">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:locale:alternate" content="es_ES">`;
  } else {
    ogLocales = `  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="en_CA">
  <meta property="og:locale:alternate" content="es_ES">
  <meta property="og:locale:alternate" content="es_MX">
  <meta property="og:locale:alternate" content="fr_FR">
  <meta property="og:locale:alternate" content="fr_CA">`;
  }
  html = html.replace(/<meta property="og:locale" content="[^"]*">[\s\S]*?<meta property="og:locale:alternate" content="fr_CA">/, ogLocales.trim());

  // Replace Schema.org JSON-LD with dedicated localized graph
  const localizedSchema = generateSchemaJsonLd(lang);
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n${localizedSchema}\n  </script>`);

  // Update current language label in the dropdown
  const langName = lang === 'es' ? 'Español' : (lang === 'fr' ? 'Français' : 'English');
  html = html.replace(/<span id="currentLangLabel">[^<]*<\/span>/, `<span id="currentLangLabel">${langName}</span>`);

  // Update active class on dropdown options
  html = html.replace(/class="lang-option active"/g, 'class="lang-option"');
  html = html.replace(new RegExp(`class="lang-option"(\\s+data-lang="${lang}")`), 'class="lang-option active"$1');

  // Update footer RSS Feed link URL
  html = html.replace(/href="[^"]*"\s+id="footerRssLink"/, `href="${rssHref}" id="footerRssLink"`);

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

    // 3. Tooltips with data-i18n-title="key"
    const regexTitle = new RegExp(`(\\bdata-i18n-title="${key}"[^>]*?title=")[^"]*(")`, 'g');
    html = html.replace(regexTitle, `$1${val.replace(/"/g, '&quot;')}$2`);
    const regexTitle2 = new RegExp(`(title=")[^"]*("[^>]*?\\bdata-i18n-title="${key}")`, 'g');
    html = html.replace(regexTitle2, `$1${val.replace(/"/g, '&quot;')}$2`);

    // 4. Accessibility aria-label with data-i18n-aria="key"
    const regexAria = new RegExp(`(\\bdata-i18n-aria="${key}"[^>]*?aria-label=")[^"]*(")`, 'g');
    html = html.replace(regexAria, `$1${val.replace(/"/g, '&quot;')}$2`);
    const regexAria2 = new RegExp(`(aria-label=")[^"]*("[^>]*?\\bdata-i18n-aria="${key}")`, 'g');
    html = html.replace(regexAria2, `$1${val.replace(/"/g, '&quot;')}$2`);
  }

  return html;
}

// 3. Render es/index.html and fr/index.html (no redirect script)
['es', 'fr'].forEach(lang => {
  const langHtml = renderHtmlForLang(baseHtml, lang);
  fs.writeFileSync(path.join(lang, 'index.html'), langHtml, 'utf8');
  console.log(`Generated ${lang}/index.html (${langHtml.length} bytes)`);
});

// 4. Root index.html = default ENGLISH page (indexable, canonical "/").
// Script detects browser language and routes automatically to /es/ or /fr/ if preferred.
const routingScript = `  <!-- Browser Language Routing (English is default) -->
  <script>
    (function() {
      try {
        var p = window.location.pathname;
        if (p !== '/' && p !== '/index.html' && p !== '') return;
        var q = new URLSearchParams(window.location.search).get('lang');
        var ok = { en: 1, es: 1, fr: 1 };
        var target = null;
        if (q && ok[q]) {
          try { localStorage.setItem('rollypop_lang', q); } catch (e) {}
          target = q;
          if (q === 'en' && window.history && history.replaceState) {
            history.replaceState(null, '', '/' + window.location.hash);
          }
        } else {
          var stored = null;
          try { stored = localStorage.getItem('rollypop_lang'); } catch (e) {}
          if (stored && ok[stored]) {
            target = stored;
          } else {
            var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
            for (var i = 0; i < langs.length; i++) {
              var c = String(langs[i] || '').toLowerCase().slice(0, 2);
              if (ok[c]) { target = c; break; }
            }
          }
        }
        if (target === 'es' || target === 'fr') {
          window.location.replace('/' + target + '/' + window.location.hash);
        }
      } catch (e) {}
    })();
  </script>
`;

let rootHtml = renderHtmlForLang(baseHtml, 'en');
rootHtml = rootHtml.replace('<head>', '<head>\n' + routingScript);
fs.writeFileSync('index.html', rootHtml, 'utf8');
console.log(`Updated root index.html (English default + router) (${rootHtml.length} bytes)`);

// 5. Generate localized RSS feeds (feed.xml, es/feed.xml, fr/feed.xml)
fs.writeFileSync('feed.xml', generateRssFeed('en'), 'utf8');
fs.writeFileSync(path.join('es', 'feed.xml'), generateRssFeed('es'), 'utf8');
fs.writeFileSync(path.join('fr', 'feed.xml'), generateRssFeed('fr'), 'utf8');
console.log('Generated localized RSS feeds: feed.xml, es/feed.xml, fr/feed.xml');

// 6. Update sitemap.xml with xhtml:link annotations for all regional alternatives & feeds
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://rollypop.ecn-apps.com/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en-US" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en-CA" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="es-ES" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="es-MX" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://rollypop.ecn-apps.com/fr/" />
    <xhtml:link rel="alternate" hreflang="fr-CA" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/es/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en-US" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en-CA" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="es-ES" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="es-MX" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://rollypop.ecn-apps.com/fr/" />
    <xhtml:link rel="alternate" hreflang="fr-CA" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/fr/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en-US" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en-CA" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="es-ES" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="es-MX" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://rollypop.ecn-apps.com/fr/" />
    <xhtml:link rel="alternate" hreflang="fr-CA" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/feed.xml</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/es/feed.xml</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/fr/feed.xml</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
`;
fs.writeFileSync('sitemap.xml', sitemapContent, 'utf8');
console.log('Updated sitemap.xml with dedicated language & regional URLs and RSS feeds');

console.log('Multilanguage build complete!');
