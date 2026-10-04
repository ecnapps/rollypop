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

const ALL_LANGS = ['es', 'fr', 'de', 'pt', 'it', 'nl', 'ja', 'ko', 'zh', 'ru'];

// Ensure all language directories exist
ALL_LANGS.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const urlFor = l => l === 'en' ? 'https://rollypop.ecn-apps.com/' : `https://rollypop.ecn-apps.com/${l}/`;

const LANG_NAMES = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  it: 'Italiano',
  nl: 'Nederlands',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
  ru: 'Русский'
};

const REGION_INFO = {
  en: { inLanguage: ['en-US', 'en-CA', 'en-GB'], localeLang: 'en-US', ogLocale: 'en_US', ogAlts: ['es_ES', 'fr_FR', 'de_DE', 'pt_BR', 'it_IT', 'nl_NL', 'ja_JP', 'ko_KR', 'zh_CN', 'ru_RU'] },
  es: { inLanguage: ['es-ES', 'es-MX', 'es-419'], localeLang: 'es-ES', ogLocale: 'es_ES', ogAlts: ['es_MX', 'es_LA', 'en_US', 'fr_FR', 'pt_BR'] },
  fr: { inLanguage: ['fr-FR', 'fr-CA'], localeLang: 'fr-FR', ogLocale: 'fr_FR', ogAlts: ['fr_CA', 'en_US', 'es_ES', 'de_DE', 'it_IT'] },
  de: { inLanguage: ['de-DE', 'de-AT', 'de-CH'], localeLang: 'de-DE', ogLocale: 'de_DE', ogAlts: ['de_AT', 'de_CH', 'en_US', 'fr_FR'] },
  pt: { inLanguage: ['pt-BR', 'pt-PT'], localeLang: 'pt-BR', ogLocale: 'pt_BR', ogAlts: ['pt_PT', 'en_US', 'es_ES'] },
  it: { inLanguage: ['it-IT', 'it-CH'], localeLang: 'it-IT', ogLocale: 'it_IT', ogAlts: ['it_CH', 'en_US', 'fr_FR', 'es_ES'] },
  nl: { inLanguage: ['nl-NL', 'nl-BE'], localeLang: 'nl-NL', ogLocale: 'nl_NL', ogAlts: ['nl_BE', 'en_US', 'de_DE'] },
  ja: { inLanguage: ['ja-JP'], localeLang: 'ja-JP', ogLocale: 'ja_JP', ogAlts: ['en_US'] },
  ko: { inLanguage: ['ko-KR'], localeLang: 'ko-KR', ogLocale: 'ko_KR', ogAlts: ['en_US'] },
  zh: { inLanguage: ['zh-CN', 'zh-TW', 'zh-HK'], localeLang: 'zh-CN', ogLocale: 'zh_CN', ogAlts: ['zh_TW', 'en_US'] },
  ru: { inLanguage: ['ru-RU'], localeLang: 'ru-RU', ogLocale: 'ru_RU', ogAlts: ['en_US'] }
};

const SCHEMA_NAMES = {
  en: { site: 'RollyPop — Free Interactive Decision Wheel', app: 'RollyPop Decision Wheel' },
  es: { site: 'RollyPop — Ruleta de la Suerte y Decisiones', app: 'RollyPop — Ruleta Aleatoria de Decisiones y Sorteos' },
  fr: { site: 'RollyPop — Roue de la Fortune et de Décision', app: 'RollyPop — Roue de la Fortune & Roulette de Décision' },
  de: { site: 'RollyPop — Glücksrad & Entscheidungs-Roulette', app: 'RollyPop — Zufallsentscheidungsrad & Online-Glücksrad' },
  pt: { site: 'RollyPop — Roleta da Sorte e Decisões Aleatórias', app: 'RollyPop — Roleta Aleatória de Decisões e Sorteios' },
  it: { site: 'RollyPop — Ruota della Fortuna e Decisioni Casuali', app: 'RollyPop — Ruota della Fortuna & Decisioni Online' },
  nl: { site: 'RollyPop — Rad van Fortuin & Beslissingsrad', app: 'RollyPop — Online Rad van Fortuin & Beslissingsrad' },
  ja: { site: 'RollyPop — ルーレット・名前抽選＆意思決定ツール', app: 'RollyPop 意思決定ルーレット＆抽選' },
  ko: { site: 'RollyPop — 돌림판 & 랜덤 결정 룰렛', app: 'RollyPop 랜덤 돌림판 & 결정 룰렛' },
  zh: { site: 'RollyPop — 幸运大转盘与随机决定轮盘', app: 'RollyPop 随机决定转盘与抽奖轮盘' },
  ru: { site: 'RollyPop — Колесо Фортуны и Случайный Выбор', app: 'RollyPop — Онлайн Колесо Фортуны и Рулетка Решений' }
};

const FEATURES_PER_LANG = {
  en: [
    "Cryptographically secure randomness with window.crypto",
    "Synthesized audio ticking and victory fanfare",
    "Confetti celebration animations",
    "Instant multi-language support (11 languages)",
    "Shareable URL wheels with custom slice options",
    "One-click winner elimination for raffles and giveaways",
    "Fullscreen distraction-free presentation mode"
  ],
  es: [
    "Generación de números aleatorios criptográficos seguros (window.crypto)",
    "Efectos de sonido de engranaje mecánico y fanfarria de victoria sintetizados",
    "Animaciones festivas de confeti en alta resolución",
    "Soporte multi-idioma instantáneo (11 idiomas)",
    "Enlaces URL compartibles con lista de opciones y colores personalizados",
    "Eliminación de ganadores en un clic para sorteos, rifas y dinámicas",
    "Modo pantalla completa para presentaciones en vivo y streaming"
  ],
  fr: [
    "Tirage au sort cryptographique ultra-équitable avec window.crypto",
    "Effets sonores de cliquet mécanique et fanfare de célébration",
    "Animations de confettis festifs haute résolution",
    "Support multilingue instantané (11 langues)",
    "Partage par lien URL direct avec tranches et couleurs personnalisées",
    "Retrait du gagnant en un clic pour concours, tombolas et tirages",
    "Mode plein écran immersif pour présentations et diffusions en direct"
  ],
  de: [
    "Kryptografisch sichere Zufallsauswahl mit window.crypto",
    "Synthetisierte mechanische Soundeffekte und Siegesfanfare",
    "Hochauflösende Festkonfetti-Animationen",
    "Sofortige Unterstützung für 11 Sprachen",
    "Teilbare URL-Räder mit benutzerdefinierten Optionen und Farben",
    "Gewinner-Entfernung mit einem Klick für Verlosungen und Tombolas",
    "Ablenkungsfreier Vollbildmodus für Präsentationen und Streams"
  ],
  pt: [
    "Geração criptográfica segura de números aleatórios com window.crypto",
    "Efeitos sonoros mecânicos sintetizados e fanfarra de vitória",
    "Animações festivas de confetes em alta resolução",
    "Suporte instantâneo para 11 idiomas",
    "Links URL compartilháveis com opções e cores personalizadas",
    "Remoção de vencedores em um clique para sorteios e rifas",
    "Modo tela cheia sem distrações para apresentações e streams"
  ],
  it: [
    "Estrazione crittografica ultra-equa con window.crypto",
    "Effetti sonori meccanici sintetizzati e fanfara di vittoria",
    "Animazioni festose di coriandoli in alta definizione",
    "Supporto multilingue istantaneo (11 lingue)",
    "Condivisione tramite link URL diretto con spicchi e colori personalizzati",
    "Rimozione vincitore in un clic per sorteggi e concorsi",
    "Modalità a schermo intero immersiva per eventi e dirette"
  ],
  nl: [
    "Cryptografisch veilige willekeur met window.crypto",
    "Gesynthetiseerde mechanische tikgeluiden en overwinningsfanfare",
    "Feestelijke confettianimaties in hoge resolutie",
    "Directe ondersteuning voor 11 talen",
    "Deelbare URL-wielen met aangepaste opties en kleuren",
    "Winnaar verwijderen in één klik voor verlotingen en winacties",
    "Afleidingsvrije modus voor volledig scherm tijdens presentaties"
  ],
  ja: [
    "window.crypto による暗号論的に公平な乱数生成アルゴリズム",
    "回転速度に連動するリアルな歯車音とファンファーレ",
    "高解像度のお祝い紙吹雪アニメーション",
    "11言語に対応した即時多言語切り替え",
    "項目と配色を保存・共有できる専用URLリンク生成",
    "抽選会・プレゼント企画向け ワンクリック当選者除外機能",
    "配信やプレゼンに最適な没入型全画面モード"
  ],
  ko: [
    "window.crypto 기반 암호학적으로 안전한 무작위 난수 생성",
    "기계식 래칫 음향 효과 및 승리 축하 팡파르 합성음",
    "고화질 축하 꽃가루 폭죽 애니메이션",
    "11개 언어 즉각 지원 다국어 시스템",
    "항목과 색상이 보존되는 맞춤형 돌림판 URL 링크 공유",
    "이벤트 추첨을 위한 원클릭 당첨자 제외 기능",
    "발표 및 라이브 방송을 위한 몰입형 전체화면 모드"
  ],
  zh: [
    "基于 window.crypto 密码学安全的无偏随机数算法",
    "真实机械齿轮阻尼音效与欢呼胜利号角",
    "高清彩色礼花纸屑庆祝动画",
    "即时支持全球 11 种主要语言",
    "可通过专属 URL 链接分享自定义选项与配色",
    "一键剔除中奖者，方便多轮连续抽奖",
    "专为现场演示与网络直播设计的全屏无干扰模式"
  ],
  ru: [
    "Криптографически безопасная случайность с window.crypto",
    "Синтезированные механические звуки трещотки и победная фанфара",
    "Анимации праздничного конфетти высокого разрешения",
    "Мгновенная поддержка 11 языков",
    "Прямые ссылки для отправки колеса с индивидуальными вариантами",
    "Удаление победителя в один клик для конкурсов и розыгрышей",
    "Полноэкранный режим для прямых эфиров и презентаций"
  ]
};

function generateSchemaJsonLd(lang) {
  const dict = I18N[lang];
  const url = urlFor(lang);
  const reg = REGION_INFO[lang] || REGION_INFO.en;
  const names = SCHEMA_NAMES[lang] || SCHEMA_NAMES.en;
  const features = FEATURES_PER_LANG[lang] || FEATURES_PER_LANG.en;

  const breadcrumbs = [
    { "@type": "ListItem", "position": 1, "name": "ecn-apps", "item": "https://ecn-apps.com/" },
    { "@type": "ListItem", "position": 2, "name": names.site, "item": url }
  ];

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
        "name": names.site,
        "alternateName": ["RollyPop", "Decision Wheel", "Ruleta de la Suerte", "Roue de la Fortune", "Glücksrad", "Roleta da Sorte", "ルーレット", "돌림판", "幸运转盘", "Колесо Фортуны"],
        "description": dict.siteDesc,
        "inLanguage": reg.inLanguage,
        "publisher": {
          "@type": "Organization",
          "name": "ecn-apps",
          "url": "https://ecn-apps.com/"
        }
      },
      {
        "@type": "WebApplication",
        "@id": `${url}#webapp`,
        "name": names.app,
        "url": url,
        "applicationCategory": "UtilitiesApplication, EntertainmentApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
        "description": dict.siteDesc,
        "inLanguage": reg.inLanguage,
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
        "featureList": features,
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
  const reg = REGION_INFO[lang] || REGION_INFO.en;
  const now = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${dict.siteTitle}</title>
    <link>${url}</link>
    <description>${dict.siteDesc}</description>
    <language>${reg.localeLang}</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <item>
      <title>${dict.siteTitle}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${now}</pubDate>
      <description>${dict.heroSubtitle || dict.siteDesc}</description>
    </item>
    <item>
      <title>${dict.feature2Title} — ${dict.feature3Title}</title>
      <link>${url}#features</link>
      <guid isPermaLink="true">${url}#features</guid>
      <pubDate>${now}</pubDate>
      <description>${dict.feature2Desc} ${dict.feature3Desc}</description>
    </item>
    <item>
      <title>${dict.tabPresets} &amp; ${dict.tabShare}</title>
      <link>${url}#presets</link>
      <guid isPermaLink="true">${url}#presets</guid>
      <pubDate>${now}</pubDate>
      <description>${dict.howStep1Desc}</description>
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
  const rssTitle = `RollyPop RSS (${LANG_NAMES[lang] || 'English'})`;

  let hreflangsList = [
    `  <link rel="canonical" href="${urlFor(lang)}">`,
    `  <link rel="alternate" type="application/rss+xml" title="${rssTitle}" href="${rssHref}">`,
    `  <link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/">`,
    `  <link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/">`
  ];
  ALL_LANGS.forEach(l => {
    hreflangsList.push(`  <link rel="alternate" hreflang="${l}" href="https://rollypop.ecn-apps.com/${l}/">`);
  });
  const hreflangs = hreflangsList.join('\n');

  // Replace canonical through last hreflang
  html = html.replace(/<link rel="canonical"[\s\S]*?<link rel="alternate" hreflang="ru"[^>]*>/, hreflangs);

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

  // Open Graph URL & Locales
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${urlFor(lang)}">`);
  
  const reg = REGION_INFO[lang] || REGION_INFO.en;
  let ogLocales = `  <meta property="og:locale" content="${reg.ogLocale}">\n` +
    reg.ogAlts.map(alt => `  <meta property="og:locale:alternate" content="${alt}">`).join('\n');
  html = html.replace(/<meta property="og:locale" content="[^"]*">[\s\S]*?<meta property="og:locale:alternate" content="[^"]*">/, ogLocales.trim());

  // Replace Schema.org JSON-LD with dedicated localized graph
  const localizedSchema = generateSchemaJsonLd(lang);
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n${localizedSchema}\n  </script>`);

  // Update current language label in the dropdown
  const langName = LANG_NAMES[lang] || 'English';
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

// 3. Render each language's own index.html
ALL_LANGS.forEach(lang => {
  const langHtml = renderHtmlForLang(baseHtml, lang);
  fs.writeFileSync(path.join(lang, 'index.html'), langHtml, 'utf8');
  console.log(`Generated ${lang}/index.html (${langHtml.length} bytes)`);
});

// 4. Root index.html = default ENGLISH page (indexable, canonical "/").
// Script detects browser language and routes automatically to /<lang>/ if preferred.
const okLangsObj = `{ en: 1, es: 1, fr: 1, de: 1, pt: 1, it: 1, nl: 1, ja: 1, ko: 1, zh: 1, ru: 1 }`;
const routingScript = `  <!-- Browser Language Routing (English is default) -->
  <script>
    (function() {
      try {
        var p = window.location.pathname;
        if (p !== '/' && p !== '/index.html' && p !== '') return;
        var q = new URLSearchParams(window.location.search).get('lang');
        var ok = ${okLangsObj};
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
        if (target && target !== 'en') {
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

// 5. Generate localized RSS feeds (feed.xml and <lang>/feed.xml)
fs.writeFileSync('feed.xml', generateRssFeed('en'), 'utf8');
ALL_LANGS.forEach(lang => {
  fs.writeFileSync(path.join(lang, 'feed.xml'), generateRssFeed(lang), 'utf8');
});
console.log('Generated localized RSS feeds for all languages');

// 6. Update sitemap.xml with xhtml:link annotations for all regional alternatives & feeds
const sitemapUrls = [];

function makeXhtmlLinks() {
  let links = [
    `    <xhtml:link rel="alternate" hreflang="x-default" href="https://rollypop.ecn-apps.com/" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="https://rollypop.ecn-apps.com/" />`
  ];
  ALL_LANGS.forEach(l => {
    links.push(`    <xhtml:link rel="alternate" hreflang="${l}" href="https://rollypop.ecn-apps.com/${l}/" />`);
  });
  return links.join('\n');
}

// Root URL entry
sitemapUrls.push(`  <url>
    <loc>https://rollypop.ecn-apps.com/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
${makeXhtmlLinks()}
  </url>`);

// Each language directory entry
ALL_LANGS.forEach(l => {
  sitemapUrls.push(`  <url>
    <loc>https://rollypop.ecn-apps.com/${l}/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
${makeXhtmlLinks()}
  </url>`);
});

// Feeds
sitemapUrls.push(`  <url>
    <loc>https://rollypop.ecn-apps.com/feed.xml</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>`);

ALL_LANGS.forEach(l => {
  sitemapUrls.push(`  <url>
    <loc>https://rollypop.ecn-apps.com/${l}/feed.xml</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>`);
});

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls.join('\n')}
</urlset>
`;
fs.writeFileSync('sitemap.xml', sitemapContent, 'utf8');
console.log('Updated sitemap.xml with all 11 languages and RSS feeds');

console.log('Multilanguage build complete for all 11 languages!');
