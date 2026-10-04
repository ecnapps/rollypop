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

// Ensure NO languages column in footer (user specifically asked to remove languages from footer)
baseHtml = baseHtml.replace(/<!-- Language Selector -->[\s\S]*?<\/div>\s*<\/div>/, '');
baseHtml = baseHtml.replace(/<div class="lang-selector">[\s\S]*?<\/div>\s*<\/div>/, '');

// Re-read index.base.html fresh: it has the header dropdown and clean footer without language links
baseHtml = fs.readFileSync('index.base.html', 'utf8');

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

// Function to replace i18n placeholders in HTML
function renderHtmlForLang(template, lang) {
  const dict = I18N[lang];
  let html = template;

  // Replace <html lang="...">
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);

  // Canonical and hreflangs
  const hreflangs = `  <link rel="canonical" href="${urlFor(lang)}">
  <link rel="alternate" type="application/rss+xml" title="RollyPop RSS" href="https://rollypop.ecn-apps.com/feed.xml">
  <link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/">
  <link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/">
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
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${urlFor(lang)}">`);
  const ogLocale = lang === 'es' ? 'es_ES' : (lang === 'fr' ? 'fr_FR' : 'en_US');
  html = html.replace(/<meta property="og:locale" content="[^"]*">/, `<meta property="og:locale" content="${ogLocale}">`);

  // Update current language label in the dropdown
  const flagLabel = lang === 'es' ? '\u{1F30E}/\u{1F1F2}\u{1F1FD} ES' : (lang === 'fr' ? '\u{1F1E8}\u{1F1E6}/\u{1F1EB}\u{1F1F7} FR' : '\u{1F1FA}\u{1F1F8}/\u{1F1E8}\u{1F1E6} EN');
  html = html.replace(/<span id="currentLangLabel">[^<]*<\/span>/, `<span id="currentLangLabel">${flagLabel}</span>`);

  // Update active class on dropdown options
  html = html.replace(/class="lang-option active"/g, 'class="lang-option"');
  html = html.replace(new RegExp(`class="lang-option"(\\s+data-lang="${lang}")`), 'class="lang-option active"$1');

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

  // SEO FAQ & Content blocks translation for es and fr
  if (lang === 'es') {
    html = html.replace(/Why Choose RollyPop Decisions\?/g, '¿Por qué elegir RollyPop?');
    html = html.replace(/Frequently Asked Questions/g, 'Preguntas Frecuentes');
    html = html.replace(/How to use RollyPop decision wheel\?/g, '¿Cómo usar la ruleta de decisiones RollyPop?');
    html = html.replace(/Enter your choices, names, or options in the list, then click the central SPIN button or press Spacebar\. The realistic wheel spins with friction physics, ticking sound effects, and announces a fair random winner with celebratory confetti\./g,
      'Ingresa tus opciones o nombres en la lista y haz clic en el botón central GIRAR o presiona la barra espaciadora. La ruleta gira con física realista, efectos de sonido y anuncia un ganador justo con confeti.');
    html = html.replace(/Is RollyPop truly random and fair\?/g, '¿Es RollyPop realmente aleatorio y justo?');
    html = html.replace(/Yes\. RollyPop utilizes cryptographic pseudo-random number generation \(Web Crypto API\) where each slice has a mathematically uniform probability proportional to its arc size\. No bias, no rigged outcomes\./g,
      'Sí. RollyPop utiliza generación de números pseudoaleatorios criptográficos (Web Crypto API) donde cada opción tiene una probabilidad matemáticamente uniforme.');
    html = html.replace(/Can I share or save my custom wheel\?/g, '¿Puedo compartir o guardar mi ruleta personalizada?');
    html = html.replace(/Yes! Click the Share tab to copy a custom URL containing your exact slices and configuration\. You can share it via WhatsApp, classroom portals, or social media with no account needed\./g,
      '¡Sí! Haz clic en la pestaña Compartir para copiar un enlace con tus opciones y configuración exactas para compartir por WhatsApp o redes.');
    html = html.replace(/How many choices can I put on the wheel\?/g, '¿Cuántas opciones puedo agregar a la ruleta?');
    html = html.replace(/You can add from 2 up to 100 choices! The wheel dynamically adjusts label sizes, colors, and font rendering for maximum readability\./g,
      '¡Puedes agregar desde 2 hasta 100 opciones! La ruleta adapta automáticamente el tamaño de fuente y colores.');
    html = html.replace(/Explore More From ecn-apps/g, 'Explora más herramientas de ecn-apps');
    html = html.replace(/Step-by-Step Instructions/g, 'Instrucciones paso a paso');
    html = html.replace(/Step 1: Customize Choices/g, 'Paso 1: Personaliza tus opciones');
    html = html.replace(/Type choices individually or use the Import tab to paste bulk lists\./g, 'Escribe las opciones o usa la pestaña Importar para pegar listas completas.');
    html = html.replace(/Step 2: Spin the Wheel/g, 'Paso 2: Gira la ruleta');
    html = html.replace(/Hit the SPIN button or press Spacebar to trigger the physics-based wheel\./g, 'Haz clic en GIRAR o pulsa la barra espaciadora para girar la ruleta.');
    html = html.replace(/Step 3: Celebrate the Winner/g, 'Paso 3: Celebra al ganador');
    html = html.replace(/Enjoy winner fanfare, confetti, and optionally remove the winner for elimination rounds\./g, 'Disfruta la fanfarria, el confeti y elimina al ganador si juegas por rondas.');
  } else if (lang === 'fr') {
    html = html.replace(/Why Choose RollyPop Decisions\?/g, 'Pourquoi choisir RollyPop ?');
    html = html.replace(/Frequently Asked Questions/g, 'Foire aux Questions (FAQ)');
    html = html.replace(/How to use RollyPop decision wheel\?/g, 'Comment utiliser la roue de décision RollyPop ?');
    html = html.replace(/Enter your choices, names, or options in the list, then click the central SPIN button or press Spacebar\. The realistic wheel spins with friction physics, ticking sound effects, and announces a fair random winner with celebratory confetti\./g,
      'Entrez vos choix ou noms dans la liste, puis cliquez sur TOURNER ou appuyez sur Espace. La roue tourne avec une physique réaliste, des effets sonores et annonce un gagnant aléatoire équitable avec des confettis.');
    html = html.replace(/Is RollyPop truly random and fair\?/g, 'RollyPop est-il vraiment aléatoire et équitable ?');
    html = html.replace(/Yes\. RollyPop utilizes cryptographic pseudo-random number generation \(Web Crypto API\) where each slice has a mathematically uniform probability proportional to its arc size\. No bias, no rigged outcomes\./g,
      'Oui. RollyPop utilise une génération cryptographique de nombres pseudo-aléatoires (Web Crypto API) garantissant un tirage équitable et sans biais.');
    html = html.replace(/Can I share or save my custom wheel\?/g, 'Puis-je partager ou enregistrer ma roue personnalisée ?');
    html = html.replace(/Yes! Click the Share tab to copy a custom URL containing your exact slices and configuration\. You can share it via WhatsApp, classroom portals, or social media with no account needed\./g,
      'Oui ! Cliquez sur l\'onglet Partager pour copier une URL personnalisée contenant exactement vos choix.');
    html = html.replace(/How many choices can I put on the wheel\?/g, 'Combien de choix puis-je ajouter sur la roue ?');
    html = html.replace(/You can add from 2 up to 100 choices! The wheel dynamically adjusts label sizes, colors, and font rendering for maximum readability\./g,
      'Vous pouvez ajouter de 2 à 100 choix ! La roue ajuste dynamiquement la taille du texte et les couleurs.');
    html = html.replace(/Explore More From ecn-apps/g, 'Découvrez d\'autres outils ecn-apps');
    html = html.replace(/Step-by-Step Instructions/g, 'Instructions étape par étape');
    html = html.replace(/Step 1: Customize Choices/g, 'Étape 1 : Personnalisez vos choix');
    html = html.replace(/Type choices individually or use the Import tab to paste bulk lists\./g, 'Saisissez vos options ou utilisez l\'onglet Importer pour coller des listes complètes.');
    html = html.replace(/Step 2: Spin the Wheel/g, 'Étape 2 : Lancez la roue');
    html = html.replace(/Hit the SPIN button or press Spacebar to trigger the physics-based wheel\./g, 'Cliquez sur TOURNER ou appuyez sur Espace pour lancer la roue.');
    html = html.replace(/Step 3: Celebrate the Winner/g, 'Étape 3 : Célébrez le gagnant');
    html = html.replace(/Enjoy winner fanfare, confetti, and optionally remove the winner for elimination rounds\./g, 'Profitez de la fanfare, des confettis et éliminez le gagnant si nécessaire.');
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
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/es/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://rollypop.ecn-apps.com/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://rollypop.ecn-apps.com/fr/" />
  </url>
  <url>
    <loc>https://rollypop.ecn-apps.com/fr/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/" />
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

console.log('Multilanguage build complete!');
