/**
 * ROLLYPOP - The Ultimate Interactive Decision Roulette & Lucky Wheel
 * Author: ecn-apps.com
 * License: MIT
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Internationalization (i18n) & Dictionaries
  // -------------------------------------------------------------------------
  const I18N = {
    en: {
      siteTitle: "RollyPop — Free Interactive Decision Wheel & Lucky Roulette",
      siteDesc: "Make random choices, pick names, decide what to eat, and run giveaways with the most responsive, animated online decision wheel.",
      brandSub: "Decision Wheel",
      heroTitle: "Spin the Wheel to <span>Decide Anything</span>",
      heroSubtitle: "High-precision random decision maker. Customize slices, import lists, enjoy realistic sound effects and confetti celebrations.",
      btnSpin: "Spin Wheel",
      btnSpinShort: "SPIN",
      btnShuffle: "Shuffle",
      btnSort: "Sort A-Z",
      btnReset: "Reset",
      btnSoundOn: "Sound On",
      btnSoundOff: "Sound Muted",
      btnFullscreen: "Fullscreen",
      btnExitFullscreen: "Exit Fullscreen",
      tabEntries: "Entries",
      tabImport: "Import",
      tabPresets: "Presets",
      tabSettings: "Settings",
      tabShare: "Share",
      addPlaceholder: "Enter choice / name...",
      btnAdd: "Add",
      entriesCount: "Total Choices:",
      spaceHint: "Press Spacebar to spin",
      bulkPlaceholder: "Paste choices here...\nOne item per line or separated by commas.\n\nExample:\nPizza\nBurgers\nSushi\nTacos",
      bulkBtn: "Apply to Wheel",
      bulkNote: "Pasting will replace current wheel entries.",
      winnerAnnounce: "WINNER!",
      winnerTitle: "The wheel has decided:",
      btnSpinAgain: "Spin Again",
      btnRemoveWinner: "Remove Winner",
      copiedNotice: "Link copied to clipboard!",
      shareTitle: "Share this Wheel",
      shareDesc: "Send this customized wheel link to your friends, students, or coworkers:",
      btnCopyLink: "Copy Link",
      presetYesNo: "Yes or No",
      presetFood: "What to Eat?",
      presetNumbers: "Lucky Numbers 1-10",
      presetTruthDare: "Truth or Dare",
      presetMagic8: "Magic 8-Ball",
      presetDice: "Dice Roll (1-6)",
      presetTeam: "Team Assign (1-8)",
      presetRainbow: "Rainbow Colors",
      settingSound: "Sound Effects",
      settingSoundDesc: "Synthesized ratchet tick and victory fanfare",
      settingEliminate: "Eliminate on Win",
      settingEliminateDesc: "Automatically prompt to remove the winner slice",
      settingConfetti: "Celebration Confetti",
      settingConfettiDesc: "Blast colorful particles upon wheel stop",
      settingDuration: "Spin Duration",
      settingDurationDesc: "Time the wheel spins before landing",
      durationSlow: "Dramatic (8s)",
      durationNormal: "Standard (5s)",
      durationFast: "Quick (3s)",
      affiliateTitle: "Trending Gaming & Decision Gear",
      affiliateSubtitle: "Handpicked board games, fidget dice, and streaming accessories from our Amazon Associates network.",
      btnViewAmazon: "View on Amazon",
      affiliateDisclaimer: "As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.",
      feature1Title: "100% Client-Side Privacy",
      feature1Desc: "Your entries and lists stay securely in your browser. No account required, no server tracking.",
      feature2Title: "Cryptographic RNG Physics",
      feature2Desc: "Built with window.crypto random values for mathematically fair and unbiased spins every time.",
      feature3Title: "Web Audio & Confetti FX",
      feature3Desc: "Realistic mechanical ticking sounds that slow down dynamically, followed by a grand confetti blast.",
      faq1Q: "Is RollyPop completely free to use?",
      faq1A: "Yes, RollyPop is 100% free with unlimited spins and no signup required.",
      faq2Q: "How fair is the wheel spin?",
      faq2A: "RollyPop utilizes native browser cryptographic random numbers (Crypto.getRandomValues) to compute the final landing angle, guaranteeing true mathematical randomness.",
      faq3Q: "Can I save or share my customized wheel?",
      faq3A: "Yes! Use the Share tab to generate a direct URL that encodes your exact list of slices and colors. You can send this link to anyone or bookmark it.",
      faq4Q: "Can I remove winners for giveaways or raffles?",
      faq4A: "Absolutely. When the wheel lands on a winner, simply click 'Remove Winner' in the celebration modal to take it off the wheel for the next round.",
      btnInstallApp: "Install App",
      pwaBannerTitle: "Install RollyPop App",
      pwaBannerDesc: "Install on your home screen for full-screen & offline spins!",
      pwaBannerBtn: "Install",
      iosModalTitle: "Install RollyPop on iPhone / iPad",
      iosModalSubtitle: "Follow these 3 simple steps in Safari to add RollyPop to your Home Screen:",
      iosStep1: "Tap the Share button in Safari's bottom toolbar.",
      iosStep2: "Scroll down and select 'Add to Home Screen'.",
      iosStep3: "Tap 'Add' in the top-right corner to finish.",
      iosModalGotIt: "Got it!",
      pwaInstalledSuccess: "RollyPop installed successfully! Open it from your home screen.",
      howToTitle: "How to Use the RollyPop Decision Wheel",
      howToSubtitle: "Pick random winners, make unbiased decisions, or randomize names in three easy steps:",
      howStep1Title: "Add Your Choices",
      howStep1Desc: "Type choices individually, bulk-paste lists in the Entries tab, or pick from ready presets like Food, Yes/No, and Numbers.",
      howStep2Title: "Spin the Wheel",
      howStep2Desc: "Click the central SPIN button, hit the toolbar button, or simply press the spacebar to watch the realistic physics in action.",
      howStep3Title: "Celebrate or Eliminate",
      howStep3Desc: "Enjoy confetti animations and realistic sound. For raffles and drawings, click \"Remove Winner\" to continue to the next round.",
      useCasesTitle: "Popular Ways to Spin & Decide",
      useCasesSubtitle: "From daily choices to classroom activities and live stream raffles:",
      useCaseClassroomTitle: "Classroom Random Name Picker",
      useCaseClassroomDesc: "Teachers paste student lists to choose volunteers, assign speaking turns, and maintain unbiased classroom participation.",
      useCaseGiveawayTitle: "Giveaways & Stream Raffles",
      useCaseGiveawayDesc: "Twitch, YouTube, and TikTok creators host live prize giveaways using distraction-free fullscreen mode with realistic ratchet audio.",
      useCaseFoodTitle: "Food & Restaurant Roulette",
      useCaseFoodDesc: "Solve meal indecision with friends or coworkers. Spin between takeout, sushi, pizza, tacos, and burgers in seconds.",
      useCasePartyTitle: "Party Games: Truth or Dare",
      useCasePartyDesc: "Spice up game nights, party challenges, icebreakers, and social gatherings with customizable prompts and dice alternatives.",
      useCaseTeamTitle: "Team & Group Assignment",
      useCaseTeamDesc: "Divide students or colleagues into balanced groups for hackathons, agile sprints, class projects, and workshops.",
      useCaseYesNoTitle: "Yes or No Decision Maker",
      useCaseYesNoDesc: "Need a rapid, impartial binary choice? Spin the Yes/No preset with equal odds and sound synthesis for instant resolution.",
      faq5Q: "Can I install RollyPop on my mobile phone?",
      faq5A: "Yes! RollyPop is a Progressive Web App (PWA). You can install it on Android and iOS (iPhone/iPad) to spin offline and enjoy an immersive full-screen experience.",
      faq6Q: "Does RollyPop store my entries or private lists on a server?",
      faq6A: "No. All your wheel entries, presets, and settings remain 100% private in your local browser storage. We never upload or track your lists.",
      footerBrandDesc: "Free, privacy-focused interactive decision roulette and wheel spinner. Part of the ecn-apps suite of modern browser utilities.",
      footerColEcosystem: "Ecosystem Tools",
      footerToolBgRemover: "Background Remover",
      footerToolColorPicker: "Color Picker & Palette",
      footerToolPassGen: "Password Generator",
      footerToolWordCounter: "Word & Character Counter",
      footerToolQrGen: "QR Code Generator",
      footerColPlatform: "Platform",
      footerPlatformSitemap: "Sitemap",
      footerPlatformRss: "RSS Feed",
      footerCopyright: "© 2026 ecn-apps. All rights reserved. RollyPop is a registered product of ecn-apps.com.",
      footerPoweredBy: "Powered by",
      affiliateBadge: "🛍️ Amazon Associates Picks",
      seoBadge: "⚡ Why Choose RollyPop",
      seoSectionTitle: "The Fastest, Fairest Decision Roulette on the Web",
      seoSectionSubtitle: "Engineered specifically for creators, educators, gaming streams, and indecisive groups who demand smooth animation, realistic audio, and privacy.",
      adLabel: "Advertisement",
      presetCount4: "4 items",
      presetCount6: "6 items",
      presetCount8: "8 items",
      presetCount10: "10 items",
      prod1Category: "Gaming & Typing",
      prod1Title: "Keychron K2 Wireless Bluetooth/USB Mechanical Keyboard",
      prod1Desc: "Tactile typing feedback, compact 75% layout, seamless Bluetooth switching, and long-lasting battery for marathon gaming and work sessions.",
      prod2Category: "Retro Gaming & Tech",
      prod2Title: "Raspberry Pi 5 (8GB RAM) Complete Starter Kit",
      prod2Desc: "Fast 64-bit quad-core mini PC powerhouse for retro arcade emulation, home decision servers, and automated Discord bots.",
      prod3Category: "Workstation",
      prod3Title: "Logitech MX Master 3S Wireless Performance Mouse",
      prod3Desc: "Ultra-quiet clicks, 8K DPI glass tracking, and MagSpeed electromagnetic scroll wheel for peak workstation productivity.",
      prod4Category: "Gaming Network",
      prod4Title: "TP-Link 8-Port Gigabit Easy Smart Managed Switch",
      prod4Desc: "Low-latency hardware QoS traffic prioritization and VLAN traffic management to eliminate lag for competitive gaming and streaming.",
      minEntryAlert: "You need at least 1 entry on the wheel.",
      copyUrlPrompt: "Copy this URL:",
      entryChangeColor: "Change color",
      entryDuplicate: "Duplicate",
      entryDelete: "Delete",
      metaKeywords: "spin the wheel, decision roulette, random picker, lucky wheel, random choice generator, giveaways wheel, classroom picker, decision maker, random name picker, raffle wheel, ecn-apps",
      titleShuffle: "Shuffle Slices",
      titleSort: "Sort Alphabetically",
      ariaBrandHome: "RollyPop Home",
      ariaCloseModal: "Close modal",
      btnToggleFullscreen: "Toggle Fullscreen"
    },
    es: {
      siteTitle: "RollyPop — Ruleta Aleatoria de Decisiones y Sorteos Online",
      siteDesc: "Toma decisiones al azar, sortea nombres, decide qué comer y haz sorteos con la ruleta virtual más interactiva, rápida y responsive.",
      brandSub: "Ruleta de la Suerte",
      heroTitle: "Gira la Ruleta para <span>Decidir lo que Sea</span>",
      heroSubtitle: "El selector aleatorio más justo y divertido. Personaliza opciones, importa listas, disfruta de sonidos realistas y lluvia de confeti.",
      btnSpin: "Girar Ruleta",
      btnSpinShort: "GIRAR",
      btnShuffle: "Mezclar",
      btnSort: "Ordenar A-Z",
      btnReset: "Reiniciar",
      btnSoundOn: "Sonido Activado",
      btnSoundOff: "Sonido Silenciado",
      btnFullscreen: "Pantalla Completa",
      btnExitFullscreen: "Salir de Pantalla Completa",
      tabEntries: "Opciones",
      tabImport: "Importar",
      tabPresets: "Plantillas",
      tabSettings: "Ajustes",
      tabShare: "Compartir",
      addPlaceholder: "Escribe una opción o nombre...",
      btnAdd: "Agregar",
      entriesCount: "Opciones totales:",
      spaceHint: "Presiona Espacio para girar",
      bulkPlaceholder: "Pega tus opciones aquí...\nUna por línea o separadas por comas.\n\nEjemplo:\nPizza\nHamburguesas\nSushi\nTacos",
      bulkBtn: "Aplicar a la Ruleta",
      bulkNote: "Al aplicar, se reemplazarán las opciones actuales.",
      winnerAnnounce: "¡GANADOR!",
      winnerTitle: "La ruleta ha decidido:",
      btnSpinAgain: "Girar de Nuevo",
      btnRemoveWinner: "Eliminar Ganador",
      copiedNotice: "¡Enlace copiado al portapapeles!",
      shareTitle: "Comparte esta Ruleta",
      shareDesc: "Envía este enlace con tu ruleta personalizada a tus amigos, alumnos o compañeros:",
      btnCopyLink: "Copiar Enlace",
      presetYesNo: "Sí o No",
      presetFood: "¿Qué comemos hoy?",
      presetNumbers: "Números de la Suerte 1-10",
      presetTruthDare: "Verdad o Reto",
      presetMagic8: "Bola 8 Mágica",
      presetDice: "Dado Virtual (1-6)",
      presetTeam: "Asignar Equipos (1-8)",
      presetRainbow: "Colores del Arcoíris",
      settingSound: "Efectos de Sonido",
      settingSoundDesc: "Sonido de engranaje mecánico y fanfarria de victoria",
      settingEliminate: "Eliminar al Ganar",
      settingEliminateDesc: "Opción de remover la tajada ganadora automáticamente",
      settingConfetti: "Confeti de Celebración",
      settingConfettiDesc: "Explosión de partículas de colores al detenerse",
      settingDuration: "Duración del Giro",
      settingDurationDesc: "Tiempo que tarda la ruleta antes de frenar",
      durationSlow: "Dramático (8s)",
      durationNormal: "Estándar (5s)",
      durationFast: "Rápido (3s)",
      affiliateTitle: "Accesorios Recomendados & Juegos de Mesa",
      affiliateSubtitle: "Selección especial de juegos de fiesta, dados de decisión y periféricos desde nuestra red de afiliados Amazon.",
      btnViewAmazon: "Ver en Amazon",
      affiliateDisclaimer: "Como afiliados de Amazon, obtenemos ingresos por las compras que califican sin costo adicional para ti.",
      feature1Title: "100% Privado en tu Navegador",
      feature1Desc: "Tus datos nunca salen de tu dispositivo. Sin registro, sin descargas y sin servidores intermedios.",
      feature2Title: "Física y Azar Criptográfico",
      feature2Desc: "Generación de números verdaderamente aleatorios con el API criptográfico nativo de tu navegador.",
      feature3Title: "Sonido Realista y Confeti",
      feature3Desc: "Efecto de matraca sintetizado en tiempo real que disminuye de velocidad y explosión de confeti HD.",
      faq1Q: "¿Es RollyPop gratis?",
      faq1A: "Sí, RollyPop es 100% gratuita, sin límites de giros y sin necesidad de crear cuenta.",
      faq2Q: "¿Qué tan justo es el giro de la ruleta?",
      faq2A: "RollyPop emplea números aleatorios seguros mediante crypto.getRandomValues, lo que garantiza resultados sin sesgos matemáticos.",
      faq3Q: "¿Puedo guardar o compartir mi ruleta creada?",
      faq3A: "¡Claro! En la pestaña 'Compartir' puedes generar un enlace único con tu lista y colores para enviarlo o guardarlo en favoritos.",
      faq4Q: "¿Cómo elimino a los ganadores en sorteos?",
      faq4A: "Cuando la ruleta se detenga, haz clic en el botón 'Eliminar Ganador' del cuadro de diálogo para sacarlo de la lista para el siguiente sorteo.",
      btnInstallApp: "Instalar App",
      pwaBannerTitle: "Instala RollyPop en tu teléfono",
      pwaBannerDesc: "Añádela a tu pantalla de inicio para jugar a pantalla completa y sin conexión.",
      pwaBannerBtn: "Instalar",
      iosModalTitle: "Instalar RollyPop en iPhone / iPad",
      iosModalSubtitle: "Sigue estos 3 sencillos pasos en Safari para agregar RollyPop a tu pantalla de inicio:",
      iosStep1: "Toca el botón Compartir en la barra inferior de Safari.",
      iosStep2: "Desplázate hacia abajo y elige 'Añadir a pantalla de inicio'.",
      iosStep3: "Toca 'Añadir' en la esquina superior derecha para finalizar.",
      iosModalGotIt: "¡Entendido!",
      pwaInstalledSuccess: "¡RollyPop se instaló correctamente! Ábrela desde tu pantalla de inicio.",
      howToTitle: "Cómo usar la Ruleta de Decisiones RollyPop",
      howToSubtitle: "Elige ganadores al azar, toma decisiones imparciales o sortea nombres en 3 simples pasos:",
      howStep1Title: "Agrega tus opciones",
      howStep1Desc: "Escribe tus opciones una a una, pega listas completas en la pestaña Opciones o elige plantillas listas como Comida o Sí/No.",
      howStep2Title: "Gira la ruleta",
      howStep2Desc: "Haz clic en el botón central GIRAR, en la barra inferior o presiona la barra espaciadora para ver la física realista en acción.",
      howStep3Title: "Celebra o elimina al ganador",
      howStep3Desc: "Disfruta de la lluvia de confeti y efectos de sonido. En sorteos o rifas, pulsa 'Eliminar Ganador' para continuar la ronda.",
      useCasesTitle: "Usos Populares de la Ruleta",
      useCasesSubtitle: "Desde decisiones cotidianas hasta actividades escolares y sorteos en vivo:",
      useCaseClassroomTitle: "Selector de Alumnos al Azar",
      useCaseClassroomDesc: "Profesores y maestros pegan listas de alumnos para elegir turnos de participación justa y sin preferencias.",
      useCaseGiveawayTitle: "Sorteos y Rifas en Vivo",
      useCaseGiveawayDesc: "Creadores de Twitch, YouTube y TikTok realizan sorteos en directo con modo pantalla completa y sonido realista.",
      useCaseFoodTitle: "Ruleta de Comida y Restaurantes",
      useCaseFoodDesc: "Resuelve el dilema de qué comer con amigos o en la oficina entre tacos, pizza, sushi o hamburguesas en segundos.",
      useCasePartyTitle: "Juegos de Fiesta: Verdad o Reto",
      useCasePartyDesc: "Anima reuniones con amigos y dinámicas de grupo con retos divertidos o simulando tiradas de dados.",
      useCaseTeamTitle: "División y Asignación de Equipos",
      useCaseTeamDesc: "Organiza equipos equilibrados para proyectos de trabajo, torneos deportivos, hackatones o dinámicas grupales.",
      useCaseYesNoTitle: "Ruleta de Sí o No",
      useCaseYesNoDesc: "¿Necesitas una respuesta rápida e imparcial? Gira con probabilidades iguales y resuelve cualquier duda al instante.",
      faq5Q: "¿Puedo instalar RollyPop como aplicación en mi teléfono móvil?",
      faq5A: "¡Sí! RollyPop es una Progressive Web App (PWA). Puedes instalarla en Android y iPhone/iPad para usarla sin conexión y a pantalla completa.",
      faq6Q: "¿RollyPop almacena mis listas o datos en algún servidor?",
      faq6A: "No. Todas tus listas, plantillas y configuraciones se guardan exclusivamente en la memoria de tu navegador de forma 100% privada.",
      footerBrandDesc: "Ruleta de decisiones y sorteos interactiva, gratuita y privada. Parte de la suite de utilidades web de ecn-apps.",
      footerColEcosystem: "Herramientas del Ecosistema",
      footerToolBgRemover: "Eliminar Fondo de Imágenes",
      footerToolColorPicker: "Selector de Color y Paletas",
      footerToolPassGen: "Generador de Contraseñas",
      footerToolWordCounter: "Contador de Palabras y Caracteres",
      footerToolQrGen: "Generador de Códigos QR",
      footerColPlatform: "Plataforma",
      footerPlatformSitemap: "Mapa del Sitio (Sitemap)",
      footerPlatformRss: "Canal RSS",
      footerCopyright: "© 2026 ecn-apps. Todos los derechos reservados. RollyPop es un producto registrado de ecn-apps.com.",
      footerPoweredBy: "Desarrollado por",
      affiliateBadge: "🛍️ Destacados de Amazon Afiliados",
      seoBadge: "⚡ ¿Por qué elegir RollyPop?",
      seoSectionTitle: "La ruleta de decisiones más rápida, justa y divertida de la web",
      seoSectionSubtitle: "Diseñada especialmente para creadores de contenido, educadores, transmisiones en vivo y grupos indecisos que buscan animaciones fluidas, sonido realista y total privacidad.",
      adLabel: "Publicidad",
      presetCount4: "4 opciones",
      presetCount6: "6 opciones",
      presetCount8: "8 opciones",
      presetCount10: "10 opciones",
      prod1Category: "Juegos y Teclados",
      prod1Title: "Teclado Mecánico Inalámbrico Keychron K2 Bluetooth/USB",
      prod1Desc: "Respuesta táctil precisa, formato compacto al 75%, cambio rápido por Bluetooth y batería duradera para jugar y trabajar.",
      prod2Category: "Gaming Retro y Tecnología",
      prod2Title: "Kit de Inicio Completo Raspberry Pi 5 (8GB RAM)",
      prod2Desc: "Mini PC de cuatro núcleos y 64 bits para emuladores arcade retro, servidores locales de decisiones y bots automatizados.",
      prod3Category: "Productividad y Oficina",
      prod3Title: "Ratón Inalámbrico de Rendimiento Logitech MX Master 3S",
      prod3Desc: "Clics ultrasilenciosos, sensor 8K DPI sobre cristal y rueda electromagnética MagSpeed para máxima productividad.",
      prod4Category: "Redes y Conexión Gaming",
      prod4Title: "Switch Gestionable Gigabit de 8 Puertos TP-Link",
      prod4Desc: "Priorización de tráfico QoS por hardware y soporte de VLAN para eliminar el retardo en juegos competitivos y streaming.",
      minEntryAlert: "Necesitas al menos 1 opción en la ruleta.",
      copyUrlPrompt: "Copia este enlace:",
      entryChangeColor: "Cambiar color",
      entryDuplicate: "Duplicar",
      entryDelete: "Eliminar",
      metaKeywords: "ruleta de la suerte, ruleta aleatoria, ruleta de decisiones, tomar decisiones, sorteos online, generador de opciones al azar, ruleta personalizada, sorteo de nombres, ruleta si o no, rifas online, ecn-apps",
      titleShuffle: "Mezclar opciones",
      titleSort: "Ordenar alfabéticamente",
      ariaBrandHome: "Inicio de RollyPop",
      ariaCloseModal: "Cerrar ventana emergente",
      btnToggleFullscreen: "Pantalla Completa"
    },
    fr: {
      siteTitle: "RollyPop — Roue de la Fortune & Roulette de Décision en Ligne",
      siteDesc: "Prenez des décisions aléatoires, tirez au sort des noms, choisissez un repas et animez vos tirages avec la roue la plus fluide et moderne.",
      brandSub: "Roue de Décision",
      heroTitle: "Faites Tourner la Roue pour <span>Tout Décider</span>",
      heroSubtitle: "Générateur de choix aléatoires ultra-précis. Personnalisez vos options, profitez d'effets sonores réalistes et de pluie de confettis.",
      btnSpin: "Tourner la Roue",
      btnSpinShort: "TOURNER",
      btnShuffle: "Mélanger",
      btnSort: "Trier A-Z",
      btnReset: "Réinitialiser",
      btnSoundOn: "Son Activé",
      btnSoundOff: "Son Coupé",
      btnFullscreen: "Plein Écran",
      btnExitFullscreen: "Quitter Plein Écran",
      tabEntries: "Options",
      tabImport: "Importer",
      tabPresets: "Modèles",
      tabSettings: "Options",
      tabShare: "Partager",
      addPlaceholder: "Entrez un choix ou nom...",
      btnAdd: "Ajouter",
      entriesCount: "Total d'options :",
      spaceHint: "Appuyez sur Espace pour tourner",
      bulkPlaceholder: "Collez vos options ici...\nUne par ligne ou séparées par des virgules.\n\nExemple :\nPizza\nBurgers\nSushi\nTacos",
      bulkBtn: "Appliquer à la Roue",
      bulkNote: "L'application remplacera les options actuelles.",
      winnerAnnounce: "GAGNANT !",
      winnerTitle: "La roue a désigné :",
      btnSpinAgain: "Rejouer",
      btnRemoveWinner: "Retirer Gagnant",
      copiedNotice: "Lien copié dans le presse-papiers !",
      shareTitle: "Partager cette Roue",
      shareDesc: "Envoyez ce lien personnalisé à vos amis, élèves ou collègues :",
      btnCopyLink: "Copier le Lien",
      presetYesNo: "Oui ou Non",
      presetFood: "Que mange-t-on ?",
      presetNumbers: "Chiffres Chanceux 1-10",
      presetTruthDare: "Action ou Vérité",
      presetMagic8: "Boule Magique 8",
      presetDice: "Lancer de Dé (1-6)",
      presetTeam: "Assigner Équipes (1-8)",
      presetRainbow: "Couleurs de l'Arc-en-ciel",
      settingSound: "Effets Sonores",
      settingSoundDesc: "Cliquet mécanique et fanfare de victoire",
      settingEliminate: "Éliminer à la Victoire",
      settingEliminateDesc: "Proposer de retirer la tranche gagnante automatiquement",
      settingConfetti: "Confettis de Célébration",
      settingConfettiDesc: "Jet de particules festives à l'arrêt",
      settingDuration: "Durée du Tour",
      settingDurationDesc: "Temps de rotation avant l'arrêt complet",
      durationSlow: "Dramatique (8s)",
      durationNormal: "Standard (5s)",
      durationFast: "Rapide (3s)",
      affiliateTitle: "Jeux de Société & Accessoires Tendance",
      affiliateSubtitle: "Sélection d'accessoires de streaming et de jeux amusants via notre réseau Amazon Partenaires.",
      btnViewAmazon: "Voir sur Amazon",
      affiliateDisclaimer: "En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.",
      feature1Title: "100% Local et Privé",
      feature1Desc: "Vos choix restent strictement dans votre navigateur web sans compte ni stockage distant.",
      feature2Title: "Physique et Hasard Cryptographique",
      feature2Desc: "Utilise crypto.getRandomValues pour garantir une équité absolue et un tirage impartial.",
      feature3Title: "Son Réaliste et Confettis",
      feature3Desc: "Effet de cliquet mécanique fluide et fanfare festive avec confettis animés haute définition.",
      faq1Q: "RollyPop est-il entièrement gratuit ?",
      faq1A: "Oui, RollyPop est 100% gratuit, sans inscription et sans limitation de tours.",
      faq2Q: "Le tirage est-il équitable ?",
      faq2A: "RollyPop utilise l'algorithme cryptographique natif du navigateur garantissant une distribution purement aléatoire.",
      faq3Q: "Puis-je enregistrer ou partager ma roue ?",
      faq3A: "Oui ! Utilisez l'onglet Partager pour obtenir une URL unique contenant vos tranches et couleurs.",
      faq4Q: "Comment éliminer les gagnants au fur et à mesure ?",
      faq4A: "Dès que la roue s'arrête, cliquez sur 'Retirer Gagnant' dans la boîte de dialogue pour préparer le prochain tour.",
      btnInstallApp: "Installer l'app",
      pwaBannerTitle: "Installer RollyPop sur votre téléphone",
      pwaBannerDesc: "Ajoutez à l'écran d'accueil pour jouer en plein écran et sans connexion.",
      pwaBannerBtn: "Installer",
      iosModalTitle: "Installer RollyPop sur iPhone / iPad",
      iosModalSubtitle: "Suivez ces 3 étapes simples dans Safari pour ajouter RollyPop à votre écran d'accueil :",
      iosStep1: "Touchez le bouton Partager en bas dans Safari.",
      iosStep2: "Faites défiler et sélectionnez 'Sur l'écran d'accueil'.",
      iosStep3: "Touchez 'Ajouter' en haut à droite pour terminer.",
      iosModalGotIt: "Compris !",
      pwaInstalledSuccess: "RollyPop a été installée avec succès ! Ouvrez-la depuis votre écran d'accueil.",
      howToTitle: "Comment utiliser la Roue de Décision RollyPop",
      howToSubtitle: "Tirez au sort des gagnants, prenez des décisions impartiales ou choisissez des noms en 3 étapes simples :",
      howStep1Title: "Ajoutez vos options",
      howStep1Desc: "Saisissez vos options une à une, collez une liste complète ou choisissez parmi nos modèles prêts à l'emploi (Repas, Oui/Non, etc.).",
      howStep2Title: "Faites tourner la roue",
      howStep2Desc: "Cliquez sur le bouton central TOURNER, la barre d'outils ou appuyez sur la barre d'espace pour admirer la rotation fluide.",
      howStep3Title: "Célébrez ou éliminez le gagnant",
      howStep3Desc: "Profitez des confettis et des bruitages réalistes. Pour les tirages au sort, cliquez sur 'Retirer Gagnant' pour enchaîner.",
      useCasesTitle: "Utilisations Populaires de la Roue",
      useCasesSubtitle: "Des choix quotidiens aux animations en classe et tirages en direct :",
      useCaseClassroomTitle: "Tirage au Sort d'Élèves en Classe",
      useCaseClassroomDesc: "Les enseignants collent la liste de leurs élèves pour interroger au hasard de manière ludique et équitable.",
      useCaseGiveawayTitle: "Jeux-Concours et Tirages en Live",
      useCaseGiveawayDesc: "Les créateurs sur Twitch, YouTube et TikTok animent des tirages au sort immersifs en plein écran avec cliquet sonore.",
      useCaseFoodTitle: "Que Mange-t-on ce Soir ?",
      useCaseFoodDesc: "Mettez fin aux hésitations entre amis : pizza, sushi, burgers ou cuisine maison en un tour de roue.",
      useCasePartyTitle: "Jeux de Soirée : Action ou Vérité",
      useCasePartyDesc: "Pimentez vos soirées entre amis avec des gages personnalisés, défis ou lancers de dés virtuels.",
      useCaseTeamTitle: "Création et Répartition d'Équipes",
      useCaseTeamDesc: "Répartissez facilement étudiants et collègues en groupes équilibrés pour des projets, ateliers ou tournois.",
      useCaseYesNoTitle: "Roue Oui ou Non",
      useCaseYesNoDesc: "Besoin d'un arbitrage neutre et instantané ? Faites tourner la roue avec chances égales pour trancher sans hésiter.",
      faq5Q: "Puis-je installer RollyPop sur mon téléphone portable ?",
      faq5A: "Oui ! RollyPop est une PWA. Vous pouvez l'installer sur Android et iOS (iPhone/iPad) pour l'utiliser hors ligne et en plein écran.",
      faq6Q: "RollyPop enregistre-t-il mes données sur un serveur distant ?",
      faq6A: "Non. Toutes vos options et réglages restent 100% privés dans le stockage local de votre navigateur.",
      footerBrandDesc: "Roue de décision et tirage au sort interactive, gratuite et respectueuse de la vie privée. Fait partie des outils en ligne ecn-apps.",
      footerColEcosystem: "Outils de l'Écosystème",
      footerToolBgRemover: "Suppression d'Arrière-Plan",
      footerToolColorPicker: "Sélecteur de Couleurs & Palette",
      footerToolPassGen: "Générateur de Mots de Passe",
      footerToolWordCounter: "Compteur de Mots et Caractères",
      footerToolQrGen: "Générateur de QR Code",
      footerColPlatform: "Plateforme",
      footerPlatformSitemap: "Plan du Site (Sitemap)",
      footerPlatformRss: "Flux RSS",
      footerCopyright: "© 2026 ecn-apps. Tous droits réservés. RollyPop est une marque déposée d'ecn-apps.com.",
      footerPoweredBy: "Propulsé par",
      affiliateBadge: "🛍️ Sélection Partenaires Amazon",
      seoBadge: "⚡ Pourquoi Choisir RollyPop",
      seoSectionTitle: "La Roulette de Décision la Plus Rapide et Équitable du Web",
      seoSectionSubtitle: "Spécialement conçue pour les créateurs, enseignants, streamers et groupes indécis exigeant fluidité, bruitages réalistes et respect de la vie privée.",
      adLabel: "Publicité",
      presetCount4: "4 options",
      presetCount6: "6 options",
      presetCount8: "8 options",
      presetCount10: "10 options",
      prod1Category: "Gaming & Clavier",
      prod1Title: "Clavier Mécanique Sans Fil Keychron K2 Bluetooth/USB",
      prod1Desc: "Frappe tactile agréable, format compact 75%, connexion Bluetooth rapide et batterie longue durée pour le travail et le jeu.",
      prod2Category: "Rétrogaming & Tech",
      prod2Title: "Kit de Démarrage Complet Raspberry Pi 5 (8 Go RAM)",
      prod2Desc: "Mini PC 64 bits quatre cœurs idéal pour émulation de bornes arcade, serveurs maison et bots automatisés.",
      prod3Category: "Bureautique & Ergonomie",
      prod3Title: "Souris Sans Fil Haute Performance Logitech MX Master 3S",
      prod3Desc: "Clics ultra-silencieux, capteur 8K DPI sur verre et molette électromagnétique MagSpeed pour une productivité maximale.",
      prod4Category: "Réseau & Gaming",
      prod4Title: "Switch Gigabit Intelligent 8 Ports TP-Link",
      prod4Desc: "Priorisation du trafic QoS matériel à faible latence et gestion VLAN pour éliminer le lag en jeu et streaming.",
      minEntryAlert: "Il vous faut au moins 1 élément sur la roue.",
      copyUrlPrompt: "Copiez cette URL :",
      entryChangeColor: "Changer la couleur",
      entryDuplicate: "Dupliquer",
      entryDelete: "Supprimer",
      metaKeywords: "roue de la fortune, roulette de decision, tirage au sort en ligne, choix aleatoire, roue personnalisee, generateur aleatoire, tirage au sort prenom, roue oui ou non, roulette hasard, ecn-apps",
      titleShuffle: "Mélanger les options",
      titleSort: "Trier par ordre alphabétique",
      ariaBrandHome: "Accueil RollyPop",
      ariaCloseModal: "Fermer la boîte de dialogue",
      btnToggleFullscreen: "Plein Écran"
    },
    de: {
          "siteTitle": "RollyPop — Kostenloses Online-Glücksrad & Entscheidungs-Roulette",
          "siteDesc": "Treffen Sie zufällige Entscheidungen, losen Sie Namen aus und veranstalten Sie Verlosungen mit dem interaktiven Online-Glücksrad.",
          "brandSub": "Entscheidungsrad",
          "heroTitle": "Drehen Sie das Rad, um <span>alles zu entscheiden</span>",
          "heroSubtitle": "Hochpräziser Zufallsentscheider. Passen Sie Felder an, importieren Sie Listen, genießen Sie Soundeffekte und Konfetti.",
          "btnSpin": "Rad drehen",
          "btnSpinShort": "DREHEN",
          "btnShuffle": "Mischen",
          "btnSort": "Sortieren A-Z",
          "btnReset": "Zurücksetzen",
          "btnSoundOn": "Ton an",
          "btnSoundOff": "Ton aus",
          "btnFullscreen": "Vollbild",
          "btnExitFullscreen": "Vollbild beenden",
          "tabEntries": "Einträge",
          "tabImport": "Importieren",
          "tabPresets": "Vorlagen",
          "tabSettings": "Einstellungen",
          "tabShare": "Teilen",
          "addPlaceholder": "Option / Name eingeben...",
          "btnAdd": "Hinzufügen",
          "entriesCount": "Einträge gesamt:",
          "spaceHint": "Leertaste drücken zum Drehen",
          "bulkPlaceholder": "Optionen hier einfügen...\nEine pro Zeile oder durch Kommas getrennt.\n\nBeispiel:\nPizza\nBurger\nSushi\nTacos",
          "bulkBtn": "Auf Rad anwenden",
          "bulkNote": "Ersetzt die aktuellen Einträge des Rads.",
          "winnerAnnounce": "GEWINNER!",
          "winnerTitle": "Das Rad hat entschieden:",
          "btnSpinAgain": "Nochmal drehen",
          "btnRemoveWinner": "Gewinner entfernen",
          "copiedNotice": "Link in die Zwischenablage kopiert!",
          "shareTitle": "Dieses Rad teilen",
          "shareDesc": "Senden Sie diesen Link mit Ihrem individuellen Rad an Freunde, Schüler oder Kollegen:",
          "btnCopyLink": "Link kopieren",
          "presetYesNo": "Ja oder Nein",
          "presetFood": "Was essen wir?",
          "presetNumbers": "Glückszahlen 1-10",
          "presetTruthDare": "Wahrheit oder Pflicht",
          "presetMagic8": "Magische 8er-Kugel",
          "presetDice": "Würfelwurf (1-6)",
          "presetTeam": "Team-Einteilung (1-8)",
          "presetRainbow": "Regenbogenfarben",
          "settingSound": "Soundeffekte",
          "settingSoundDesc": "Mechanisches Ticken und Siegesfanfare",
          "settingEliminate": "Bei Gewinn entfernen",
          "settingEliminateDesc": "Automatisch vorschlagen, das Gewinnerfeld zu entfernen",
          "settingConfetti": "Feier-Konfetti",
          "settingConfettiDesc": "Bunte Partikel beim Anhalten des Rads",
          "settingDuration": "Drehdauer",
          "settingDurationDesc": "Zeit, die sich das Rad vor dem Anhalten dreht",
          "durationSlow": "Dramatisch (8s)",
          "durationNormal": "Standard (5s)",
          "durationFast": "Schnell (3s)",
          "affiliateTitle": "Empfohlene Spiele & Gadgets",
          "affiliateSubtitle": "Ausgewählte Partyspiele, Entscheidungswürfel und Zubehör aus unserem Amazon-Partnernetzwerk.",
          "btnViewAmazon": "Auf Amazon ansehen",
          "affiliateDisclaimer": "Als Amazon-Partner verdienen wir an qualifizierten Verkäufen ohne zusätzliche Kosten für Sie.",
          "feature1Title": "100% Datenschutz im Browser",
          "feature1Desc": "Ihre Eingaben bleiben sicher in Ihrem Browser. Keine Registrierung nötig, kein Server-Tracking.",
          "feature2Title": "Kryptografischer Zufall",
          "feature2Desc": "Echtes mathematisches Zufallsprinzip mit window.crypto für faire und unvoreingenommene Drehungen.",
          "feature3Title": "Realistischer Sound & Konfetti",
          "feature3Desc": "Dynamischer Ratschensound mit Verlangsamung und farbenfrohe Konfettiexplosion.",
          "faq1Q": "Ist RollyPop komplett kostenlos?",
          "faq1A": "Ja, RollyPop ist zu 100% kostenlos mit unbegrenzten Drehungen und ohne Registrierung.",
          "faq2Q": "Wie fair ist die Raddrehung?",
          "faq2A": "RollyPop nutzt kryptografische Zufallszahlen (Crypto.getRandomValues) des Browsers, was echte mathematische Zufälligkeit garantiert.",
          "faq3Q": "Kann ich mein individuelles Rad speichern oder teilen?",
          "faq3A": "Ja! Nutzen Sie den Tab 'Teilen', um einen direkten Link zu erstellen, der Ihre genauen Einträge und Farben codiert.",
          "faq4Q": "Kann ich Gewinner für Verlosungen entfernen?",
          "faq4A": "Absolut. Wenn das Rad einen Gewinner ermittelt, klicken Sie im Dialog einfach auf 'Gewinner entfernen'.",
          "btnInstallApp": "App installieren",
          "pwaBannerTitle": "RollyPop App installieren",
          "pwaBannerDesc": "Auf dem Startbildschirm installieren für Vollbild und Offline-Nutzung!",
          "pwaBannerBtn": "Installieren",
          "iosModalTitle": "RollyPop auf iPhone / iPad installieren",
          "iosModalSubtitle": "Befolgen Sie diese 3 einfachen Schritte in Safari, um RollyPop zum Startbildschirm hinzuzufügen:",
          "iosStep1": "Tippen Sie in der unteren Safari-Leiste auf Teilen.",
          "iosStep2": "Scrollen Sie nach unten und wählen Sie 'Zum Home-Bildschirm'.",
          "iosStep3": "Tippen Sie oben rechts auf 'Hinzufügen'.",
          "iosModalGotIt": "Verstanden!",
          "pwaInstalledSuccess": "RollyPop erfolgreich installiert! Öffnen Sie es von Ihrem Startbildschirm.",
          "howToTitle": "So nutzen Sie das RollyPop Entscheidungsrad",
          "howToSubtitle": "Zufallsgewinner wählen, faire Entscheidungen treffen oder Namen auslosen in 3 einfachen Schritten:",
          "howStep1Title": "Optionen hinzufügen",
          "howStep1Desc": "Geben Sie Optionen einzeln ein, fügen Sie Listen im Tab Einträge ein oder wählen Sie fertige Vorlagen wie Essen oder Ja/Nein.",
          "howStep2Title": "Das Rad drehen",
          "howStep2Desc": "Klicken Sie auf den DREHEN-Button, die Symbolleiste oder drücken Sie die Leertaste, um die realistische Physik zu sehen.",
          "howStep3Title": "Feiern oder entfernen",
          "howStep3Desc": "Genießen Sie Konfetti und Sound. Bei Verlosungen klicken Sie auf 'Gewinner entfernen', um die nächste Runde zu starten.",
          "useCasesTitle": "Beliebte Einsatzmöglichkeiten",
          "useCasesSubtitle": "Von Alltagsentscheidungen über Schulaktivitäten bis hin zu Live-Stream-Verlosungen:",
          "useCaseClassroomTitle": "Zufälliger Namenswähler für den Unterricht",
          "useCaseClassroomDesc": "Lehrkräfte fügen Schülerlisten ein, um Freiwillige auszuwählen und faire Beteiligung sicherzustellen.",
          "useCaseGiveawayTitle": "Gewinnspiele & Stream-Verlosungen",
          "useCaseGiveawayDesc": "Twitch-, YouTube- und TikTok-Streamer veranstalten Live-Verlosungen im ablenkungsfreien Vollbildmodus mit realistischem Sound.",
          "useCaseFoodTitle": "Essens- & Restaurant-Roulette",
          "useCaseFoodDesc": "Lösen Sie die Frage, was gegessen werden soll, in Sekundenschnelle zwischen Pizza, Sushi, Burgern und Tacos.",
          "useCasePartyTitle": "Partyspiele: Wahrheit oder Pflicht",
          "useCasePartyDesc": "Bringen Sie Schwung in Spieleabende, Partys und Treffen mit anpassbaren Aufgaben und Würfelalternativen.",
          "useCaseTeamTitle": "Team- & Gruppeneinteilung",
          "useCaseTeamDesc": "Teilen Sie Schüler oder Kollegen in ausgeglichene Teams für Workshops, Projekte und Hackathons ein.",
          "useCaseYesNoTitle": "Ja-oder-Nein-Entscheidungshilfe",
          "useCaseYesNoDesc": "Brauchen Sie eine schnelle Entscheidung? Drehen Sie die Ja/Nein-Vorlage für eine sofortige neutrale Antwort.",
          "faq5Q": "Kann ich RollyPop auf dem Smartphone installieren?",
          "faq5A": "Ja! RollyPop ist eine PWA. Sie können es auf Android und iOS installieren, um es offline und im Vollbildmodus zu nutzen.",
          "faq6Q": "Speichert RollyPop meine Daten auf einem Server?",
          "faq6A": "Nein. Alle Einträge und Einstellungen bleiben zu 100% privat im lokalen Speicher Ihres Browsers.",
          "footerBrandDesc": "Kostenloses, datenschutzfreundliches Entscheidungsrad und Zufallsroulette. Teil der modernen Online-Tools von ecn-apps.",
          "footerColEcosystem": "Ökosystem-Tools",
          "footerToolBgRemover": "Hintergrund-Entferner",
          "footerToolColorPicker": "Farbwähler & Palette",
          "footerToolPassGen": "Passwort-Generator",
          "footerToolWordCounter": "Wort- & Zeichenzähler",
          "footerToolQrGen": "QR-Code-Generator",
          "footerColPlatform": "Plattform",
          "footerPlatformSitemap": "Sitemap",
          "footerPlatformRss": "RSS-Feed",
          "footerCopyright": "© 2026 ecn-apps. Alle Rechte vorbehalten. RollyPop ist ein Produkt von ecn-apps.com.",
          "footerPoweredBy": "Bereitgestellt von",
          "affiliateBadge": "🛍️ Amazon-Partner-Empfehlungen",
          "seoBadge": "⚡ Warum RollyPop wählen",
          "seoSectionTitle": "Das schnellste und fairste Entscheidungsrad im Web",
          "seoSectionSubtitle": "Entwickelt für Creator, Lehrkräfte, Gaming-Streams und unentschlossene Gruppen mit flüssiger Animation, Sound und Datenschutz.",
          "adLabel": "Anzeige",
          "presetCount4": "4 Optionen",
          "presetCount6": "6 Optionen",
          "presetCount8": "8 Optionen",
          "presetCount10": "10 Optionen",
          "prod1Category": "Gaming & Tastaturen",
          "prod1Title": "Keychron K2 Kabellose Mechanische Tastatur Bluetooth/USB",
          "prod1Desc": "Taktiles Tippgefühl, kompaktes 75%-Layout, nahtloser Bluetooth-Wechsel und langlebiger Akku für Gaming und Büro.",
          "prod2Category": "Retro-Gaming & Tech",
          "prod2Title": "Raspberry Pi 5 (8GB RAM) Komplettes Starter-Kit",
          "prod2Desc": "Leistungsstarker 64-Bit-Quad-Core-Mini-PC für Retro-Arcade-Emulation, lokale Server und Discord-Bots.",
          "prod3Category": "Arbeitsplatz & Ergonomie",
          "prod3Title": "Logitech MX Master 3S Kabellose Performance-Maus",
          "prod3Desc": "Leise Klicks, 8K-DPI-Glastracking und elektromagnetisches MagSpeed-Scrollrad für maximale Produktivität.",
          "prod4Category": "Netzwerk & Gaming",
          "prod4Title": "TP-Link 8-Port Gigabit Smart Managed Switch",
          "prod4Desc": "Hardware-QoS-Priorisierung mit geringer Latenz und VLAN-Unterstützung für verzögerungsfreies Gaming und Streaming.",
          "minEntryAlert": "Sie benötigen mindestens 1 Eintrag auf dem Rad.",
          "copyUrlPrompt": "Diesen Link kopieren:",
          "entryChangeColor": "Farbe ändern",
          "entryDuplicate": "Duplizieren",
          "entryDelete": "Löschen",
          "metaKeywords": "glücksrad, entscheidungsrad, zufallsgenerator, namen auslosen, zufallsauswahl, verlosung online, rad drehen, ja oder nein rad, ecn-apps",
          "titleShuffle": "Optionen mischen",
          "titleSort": "Alphabetisch sortieren",
          "ariaBrandHome": "RollyPop Startseite",
          "ariaCloseModal": "Dialog schließen",
          "btnToggleFullscreen": "Vollbild umschalten"
    },
    pt: {
          "siteTitle": "RollyPop — Roleta da Sorte & Decisões Aleatórias Online Grátis",
          "siteDesc": "Tome decisões aleatórias, sorteie nomes, decida o que comer e faça sorteios com a roleta virtual mais interativa, rápida e divertida.",
          "brandSub": "Roleta da Sorte",
          "heroTitle": "Gire a Roleta para <span>Decidir Qualquer Coisa</span>",
          "heroSubtitle": "O tomador de decisões aleatórias mais justo. Personalize opções, importe listas, desfrute de efeitos sonoros e chuva de confetes.",
          "btnSpin": "Girar Roleta",
          "btnSpinShort": "GIRAR",
          "btnShuffle": "Embaralhar",
          "btnSort": "Ordenar A-Z",
          "btnReset": "Redefinir",
          "btnSoundOn": "Som Ativado",
          "btnSoundOff": "Som Mudo",
          "btnFullscreen": "Tela Cheia",
          "btnExitFullscreen": "Sair da Tela Cheia",
          "tabEntries": "Opções",
          "tabImport": "Importar",
          "tabPresets": "Modelos",
          "tabSettings": "Ajustes",
          "tabShare": "Compartilhar",
          "addPlaceholder": "Digite uma opção ou nome...",
          "btnAdd": "Adicionar",
          "entriesCount": "Total de opções:",
          "spaceHint": "Pressione Barra de Espaço para girar",
          "bulkPlaceholder": "Cole opções aqui...\nUma por linha ou separadas por vírgulas.\n\nExemplo:\nPizza\nHambúrguer\nSushi\nTacos",
          "bulkBtn": "Aplicar à Roleta",
          "bulkNote": "Ao aplicar, substituirá as opções atuais da roleta.",
          "winnerAnnounce": "VENCEDOR!",
          "winnerTitle": "A roleta decidiu:",
          "btnSpinAgain": "Girar Novamente",
          "btnRemoveWinner": "Remover Vencedor",
          "copiedNotice": "Link copiado para a área de transferência!",
          "shareTitle": "Compartilhar esta Roleta",
          "shareDesc": "Envie este link com sua roleta personalizada para amigos, alunos ou colegas:",
          "btnCopyLink": "Copiar Link",
          "presetYesNo": "Sim ou Não",
          "presetFood": "O que Comer?",
          "presetNumbers": "Números da Sorte 1-10",
          "presetTruthDare": "Verdade ou Desafio",
          "presetMagic8": "Bola 8 Mágica",
          "presetDice": "Dado Virtual (1-6)",
          "presetTeam": "Dividir Times (1-8)",
          "presetRainbow": "Cores do Arco-íris",
          "settingSound": "Efeitos Sonoros",
          "settingSoundDesc": "Clique mecânico e fanfarra de vitória",
          "settingEliminate": "Eliminar ao Vencer",
          "settingEliminateDesc": "Sugerir automaticamente remover a fatia vencedora",
          "settingConfetti": "Confetes de Celebração",
          "settingConfettiDesc": "Explosão de partículas coloridas ao parar",
          "settingDuration": "Duração do Giro",
          "settingDurationDesc": "Tempo que a roleta gira antes de parar",
          "durationSlow": "Dramático (8s)",
          "durationNormal": "Padrão (5s)",
          "durationFast": "Rápido (3s)",
          "affiliateTitle": "Jogos e Acessórios Recomendados",
          "affiliateSubtitle": "Seleção especial de jogos de tabuleiro, dados de decisão e periféricos da nossa rede de Associados Amazon.",
          "btnViewAmazon": "Ver na Amazon",
          "affiliateDisclaimer": "Como Associados Amazon, recebemos comissões por compras qualificadas sem nenhum custo extra para você.",
          "feature1Title": "100% Privado no Navegador",
          "feature1Desc": "Suas opções ficam seguras no seu navegador. Sem cadastro e sem rastreamento por servidores.",
          "feature2Title": "Física e Aleatoriedade Criptográfica",
          "feature2Desc": "Construído com window.crypto para giros matematicamente justos e imparciais todas as vezes.",
          "feature3Title": "Áudio Realista e Confetes",
          "feature3Desc": "Som mecânico de catraca com desaceleração dinâmica e explosão de confetes vibrantes.",
          "faq1Q": "O RollyPop é totalmente gratuito?",
          "faq1A": "Sim, o RollyPop é 100% gratuito com giros ilimitados e sem necessidade de cadastro.",
          "faq2Q": "Quão justo é o giro da roleta?",
          "faq2A": "O RollyPop utiliza números aleatórios criptográficos nativos do navegador (Crypto.getRandomValues), garantindo aleatoriedade matemática real.",
          "faq3Q": "Posso salvar ou compartilhar minha roleta personalizada?",
          "faq3A": "Sim! Use a aba Compartilhar para gerar uma URL direta codificando sua lista exata de opções e cores.",
          "faq4Q": "Posso remover os vencedores para sorteios e rifas?",
          "faq4A": "Com certeza. Quando a roleta parar no vencedor, basta clicar em 'Remover Vencedor' para tirá-lo da próxima rodada.",
          "btnInstallApp": "Instalar App",
          "pwaBannerTitle": "Instalar o App RollyPop",
          "pwaBannerDesc": "Instale na tela inicial para giros em tela cheia e offline!",
          "pwaBannerBtn": "Instalar",
          "iosModalTitle": "Instalar RollyPop no iPhone / iPad",
          "iosModalSubtitle": "Siga estes 3 passos simples no Safari para adicionar o RollyPop à sua Tela de Início:",
          "iosStep1": "Toque no botão Compartilhar na barra inferior do Safari.",
          "iosStep2": "Role para baixo e selecione 'Adicionar à Tela de Início'.",
          "iosStep3": "Toque em 'Adicionar' no canto superior direito para finalizar.",
          "iosModalGotIt": "Entendi!",
          "pwaInstalledSuccess": "RollyPop instalado com sucesso! Abra-o a partir da sua tela de início.",
          "howToTitle": "Como Usar a Roleta de Decisões RollyPop",
          "howToSubtitle": "Escolha vencedores aleatórios, tome decisões imparciais ou sorteie nomes em três passos fáceis:",
          "howStep1Title": "Adicione suas Opções",
          "howStep1Desc": "Digite opções individualmente, cole listas na aba Opções ou escolha modelos prontos como Comida ou Sim/Não.",
          "howStep2Title": "Gire a Roleta",
          "howStep2Desc": "Clique no botão central GIRAR, na barra de ferramentas ou pressione a barra de espaço para ver a física realista.",
          "howStep3Title": "Comemore ou Elimine",
          "howStep3Desc": "Curta a animação de confetes e efeitos sonoros. Para sorteios, clique em 'Remover Vencedor' para a próxima rodada.",
          "useCasesTitle": "Maneiras Populares de Usar a Roleta",
          "useCasesSubtitle": "De decisões do dia a dia a atividades escolares e sorteios em transmissões ao vivo:",
          "useCaseClassroomTitle": "Sorteador de Alunos na Sala de Aula",
          "useCaseClassroomDesc": "Professores colam listas de alunos para escolher voluntários e manter uma participação justa e sem preferências.",
          "useCaseGiveawayTitle": "Sorteios e Rifas em Lives",
          "useCaseGiveawayDesc": "Criadores no Twitch, YouTube e TikTok realizam sorteios com tela cheia sem distrações e áudio realista de catraca.",
          "useCaseFoodTitle": "Roleta de Comida e Restaurantes",
          "useCaseFoodDesc": "Resolva a dúvida do que comer com amigos ou colegas. Gire entre pizza, hambúrguer, sushi ou comida caseira em segundos.",
          "useCasePartyTitle": "Jogos de Festa: Verdade ou Desafio",
          "useCasePartyDesc": "Anime noites de jogos, desafios de festas e dinâmicas sociais com opções personalizadas e alternativas a dados.",
          "useCaseTeamTitle": "Divisão e Atribuição de Equipes",
          "useCaseTeamDesc": "Divida alunos ou colegas em equipes equilibradas para projetos, hackathons e oficinas.",
          "useCaseYesNoTitle": "Tomador de Decisões Sim ou Não",
          "useCaseYesNoDesc": "Precisa de uma resposta rápida e imparcial? Gire o modelo Sim/Não com probabilidades iguais para resolver na hora.",
          "faq5Q": "Posso instalar o RollyPop no meu celular?",
          "faq5A": "Sim! O RollyPop é um Aplicativo Web Progressivo (PWA). Você pode instalá-lo no Android e iOS para usar offline e em tela cheia.",
          "faq6Q": "O RollyPop armazena minhas opções em algum servidor?",
          "faq6A": "Não. Todas as suas opções e configurações permanecem 100% privadas no armazenamento local do seu navegador.",
          "footerBrandDesc": "Roleta de decisões e sorteios interativa, gratuita e focada em privacidade. Parte da suíte de utilitários web da ecn-apps.",
          "footerColEcosystem": "Ferramentas do Ecossistema",
          "footerToolBgRemover": "Removedor de Fundo",
          "footerToolColorPicker": "Seletor de Cores & Paletas",
          "footerToolPassGen": "Gerador de Senhas",
          "footerToolWordCounter": "Contador de Palavras e Caracteres",
          "footerToolQrGen": "Gerador de QR Code",
          "footerColPlatform": "Plataforma",
          "footerPlatformSitemap": "Mapa do Site",
          "footerPlatformRss": "Feed RSS",
          "footerCopyright": "© 2026 ecn-apps. Todos os direitos reservados. RollyPop é um produto registrado de ecn-apps.com.",
          "footerPoweredBy": "Desenvolvido por",
          "affiliateBadge": "🛍️ Escolhas dos Associados Amazon",
          "seoBadge": "⚡ Por que Escolher o RollyPop",
          "seoSectionTitle": "A Roleta de Decisões Mais Rápida e Justa da Web",
          "seoSectionSubtitle": "Projetada para criadores, educadores, transmissões ao vivo e grupos indecisos que exigem animação fluida, som realista e privacidade.",
          "adLabel": "Publicidade",
          "presetCount4": "4 opções",
          "presetCount6": "6 opções",
          "presetCount8": "8 opções",
          "presetCount10": "10 opções",
          "prod1Category": "Gaming & Teclados",
          "prod1Title": "Teclado Mecânico Sem Fio Keychron K2 Bluetooth/USB",
          "prod1Desc": "Resposta tátil precisa, layout compacto de 75%, alternância rápida por Bluetooth e bateria de longa duração.",
          "prod2Category": "Retrogaming & Tecnologia",
          "prod2Title": "Kit Inicial Completo Raspberry Pi 5 (8GB RAM)",
          "prod2Desc": "Mini PC potente quad-core de 64 bits para emulação de arcade retrô, servidores domésticos e bots automatizados.",
          "prod3Category": "Produtividade & Escritório",
          "prod3Title": "Mouse Sem Fio de Alta Performance Logitech MX Master 3S",
          "prod3Desc": "Cliques ultrassilenciosos, rastreamento 8K DPI em vidro e roda de rolagem eletromagnética MagSpeed.",
          "prod4Category": "Redes & Conexão Gamer",
          "prod4Title": "Switch Gerenciável Gigabit de 8 Portas TP-Link",
          "prod4Desc": "Priorização de tráfego QoS por hardware e gerenciamento VLAN para eliminar o lag em jogos e streaming.",
          "minEntryAlert": "Você precisa de pelo menos 1 opção na roleta.",
          "copyUrlPrompt": "Copie esta URL:",
          "entryChangeColor": "Alterar cor",
          "entryDuplicate": "Duplicar",
          "entryDelete": "Excluir",
          "metaKeywords": "roleta da sorte, roleta de decisoes, girar a roleta, sorteio de nomes, sorteador online, roleta aleatoria, roleta sim ou nao, rifa online, ecn-apps",
          "titleShuffle": "Embaralhar Opções",
          "titleSort": "Ordenar Alfabeticamente",
          "ariaBrandHome": "Página Inicial do RollyPop",
          "ariaCloseModal": "Fechar modal",
          "btnToggleFullscreen": "Alternar Tela Cheia"
    },
    it: {
          "siteTitle": "RollyPop — Ruota della Fortuna & Decisioni Casuali Online Gratis",
          "siteDesc": "Prendi decisioni casuali, estrai nomi, scegli cosa mangiare e organizza sorteggi con la ruota della fortuna più reattiva e divertente del web.",
          "brandSub": "Ruota delle Decisioni",
          "heroTitle": "Gira la Ruota per <span>Decidere Qualsiasi Cosa</span>",
          "heroSubtitle": "Generatore di decisioni casuali ad alta precisione. Personalizza spicchi, importa liste, goditi effetti sonori realistici e coriandoli festosi.",
          "btnSpin": "Gira Ruota",
          "btnSpinShort": "GIRA",
          "btnShuffle": "Mescola",
          "btnSort": "Ordina A-Z",
          "btnReset": "Reimposta",
          "btnSoundOn": "Audio Attivo",
          "btnSoundOff": "Audio Disattivato",
          "btnFullscreen": "Schermo Intero",
          "btnExitFullscreen": "Esci da Schermo Intero",
          "tabEntries": "Opzioni",
          "tabImport": "Importa",
          "tabPresets": "Modelli",
          "tabSettings": "Impostazioni",
          "tabShare": "Condividi",
          "addPlaceholder": "Inserisci scelta o nome...",
          "btnAdd": "Aggiungi",
          "entriesCount": "Totale scelte:",
          "spaceHint": "Premi Spazio per girare",
          "bulkPlaceholder": "Incolla scelte qui...\nUna per riga o separate da virgole.\n\nEsempio:\nPizza\nBurger\nSushi\nTacos",
          "bulkBtn": "Applica alla Ruota",
          "bulkNote": "L'applicazione sostituirà le opzioni attuali della ruota.",
          "winnerAnnounce": "VINCITORE!",
          "winnerTitle": "La ruota ha deciso:",
          "btnSpinAgain": "Gira di Nuovo",
          "btnRemoveWinner": "Rimuovi Vincitore",
          "copiedNotice": "Link copiato negli appunti!",
          "shareTitle": "Condividi questa Ruota",
          "shareDesc": "Invia questo link con la tua ruota personalizzata ad amici, studenti o colleghi:",
          "btnCopyLink": "Copia Link",
          "presetYesNo": "Sì o No",
          "presetFood": "Cosa Mangiamo?",
          "presetNumbers": "Numeri Fortunati 1-10",
          "presetTruthDare": "Obbligo o Verità",
          "presetMagic8": "Palla 8 Magica",
          "presetDice": "Lancio del Dado (1-6)",
          "presetTeam": "Assegna Squadre (1-8)",
          "presetRainbow": "Colori dell'Arcobaleno",
          "settingSound": "Effetti Sonori",
          "settingSoundDesc": "Ticchettio meccanico e fanfara di vittoria",
          "settingEliminate": "Elimina alla Vittoria",
          "settingEliminateDesc": "Proponi automaticamente di rimuovere lo spicchio vincente",
          "settingConfetti": "Coriandoli di Festa",
          "settingConfettiDesc": "Esplosione di particelle colorate all'arresto",
          "settingDuration": "Durata del Giro",
          "settingDurationDesc": "Tempo di rotazione della ruota prima di fermarsi",
          "durationSlow": "Drammatico (8s)",
          "durationNormal": "Standard (5s)",
          "durationFast": "Veloce (3s)",
          "affiliateTitle": "Giochi da Tavolo & Accessori Consigliati",
          "affiliateSubtitle": "Selezione speciale di giochi, dadi decisionali e periferiche dalla nostra rete di Affiliati Amazon.",
          "btnViewAmazon": "Vedi su Amazon",
          "affiliateDisclaimer": "In qualità di Affiliato Amazon, guadagniamo dagli acquisti idonei senza alcun costo aggiuntivo per te.",
          "feature1Title": "Privacy 100% nel Browser",
          "feature1Desc": "I tuoi dati rimangono al sicuro nel tuo browser. Nessun account richiesto, nessun tracciamento su server.",
          "feature2Title": "Fisica e Casuale Crittografico",
          "feature2Desc": "Sviluppato con window.crypto per estrazioni matematicamente eque e imparziali a ogni giro.",
          "feature3Title": "Audio Realistico e Coriandoli",
          "feature3Desc": "Effetto sonoro a cricchetto dinamico con rallentamento graduale e pioggia festosa di coriandoli HD.",
          "faq1Q": "RollyPop è completamente gratuito?",
          "faq1A": "Sì, RollyPop è gratuito al 100% con giri illimitati e senza obbligo di registrazione.",
          "faq2Q": "Quanto è equo il giro della ruota?",
          "faq2A": "RollyPop usa numeri casuali crittografici nativi del browser (Crypto.getRandomValues) per garantire un'autentica casualità matematica.",
          "faq3Q": "Posso salvare o condividere la mia ruota personalizzata?",
          "faq3A": "Certamente! Usa la scheda Condividi per generare un link diretto che codifica la tua lista esatta di opzioni e colori.",
          "faq4Q": "Posso rimuovere i vincitori per estrazioni e lotterie?",
          "faq4A": "Assolutamente. Quando la ruota si ferma su un vincitore, clicca su 'Rimuovi Vincitore' per escluderlo dal giro successivo.",
          "btnInstallApp": "Installa App",
          "pwaBannerTitle": "Installa l'App RollyPop",
          "pwaBannerDesc": "Aggiungila alla schermata iniziale per giri a schermo intero e offline!",
          "pwaBannerBtn": "Installa",
          "iosModalTitle": "Installa RollyPop su iPhone / iPad",
          "iosModalSubtitle": "Segui questi 3 semplici passaggi in Safari per aggiungere RollyPop alla Schermata Home:",
          "iosStep1": "Tocca il pulsante Condividi nella barra inferiore di Safari.",
          "iosStep2": "Scorri verso il basso e seleziona 'Aggiungi alla schermata Home'.",
          "iosStep3": "Tocca 'Aggiungi' in alto a destra per completare.",
          "iosModalGotIt": "Ho capito!",
          "pwaInstalledSuccess": "RollyPop installata con successo! Aprila dalla schermata iniziale.",
          "howToTitle": "Come Usare la Ruota delle Decisioni RollyPop",
          "howToSubtitle": "Estrai vincitori casuali, prendi decisioni imparziali o sorteggia nomi in 3 semplici passaggi:",
          "howStep1Title": "Aggiungi le tue Scelte",
          "howStep1Desc": "Inserisci le opzioni una per una, incolla elenchi completi o scegli tra modelli pronti come Cibo o Sì/No.",
          "howStep2Title": "Gira la Ruota",
          "howStep2Desc": "Clicca sul pulsante centrale GIRA, sulla barra strumenti o premi la barra spaziatrice per osservare la fisica realistica.",
          "howStep3Title": "Festeggia o Elimina",
          "howStep3Desc": "Goditi coriandoli ed effetti sonori. Per estrazioni a turni, clicca su 'Rimuovi Vincitore' per continuare il round.",
          "useCasesTitle": "Usi Popolari della Ruota",
          "useCasesSubtitle": "Dalle scelte quotidiane alle attività in classe e sorteggi in diretta streaming:",
          "useCaseClassroomTitle": "Estrazione Casuale di Nomi in Classe",
          "useCaseClassroomDesc": "Gli insegnanti incollano le liste degli studenti per scegliere chi interrogare in modo equo e imparziale.",
          "useCaseGiveawayTitle": "Giveaway & Lotterie in Live Streaming",
          "useCaseGiveawayDesc": "I creator di Twitch, YouTube e TikTok animano sorteggi a schermo intero senza distrazioni con audio realistico.",
          "useCaseFoodTitle": "Ruleta per Scegliere Cosa Mangiare",
          "useCaseFoodDesc": "Risolvi l'indecisione sul pranzo con amici o colleghi: pizza, sushi, hamburger o pasta in pochi secondi.",
          "useCasePartyTitle": "Giochi per Feste: Obbligo o Verità",
          "useCasePartyDesc": "Accendi le serate con gli amici grazie a sfide divertenti, penitenze personalizzate o simulando lanci di dadi.",
          "useCaseTeamTitle": "Suddivisione in Squadre e Gruppi",
          "useCaseTeamDesc": "Dividi colleghi o studenti in team equilibrati per hackathon, progetti scolastici e workshop.",
          "useCaseYesNoTitle": "Ruota Decisionale Sì o No",
          "useCaseYesNoDesc": "Hai bisogno di una risposta neutra e immediata? Gira il modello Sì/No con probabilità uguali per chiarire ogni dubbio.",
          "faq5Q": "Posso installare RollyPop sul mio smartphone?",
          "faq5A": "Sì! RollyPop è una PWA. Puoi installarla su Android e iOS per utilizzarla offline e a schermo intero.",
          "faq6Q": "RollyPop memorizza le mie liste su un server?",
          "faq6A": "No. Tutte le tue liste e preferenze rimangono al 100% private nella memoria locale del tuo browser.",
          "footerBrandDesc": "Ruota della fortuna e generatore di decisioni casuali gratuito e orientato alla privacy. Parte degli strumenti web ecn-apps.",
          "footerColEcosystem": "Strumenti dell'Ecosistema",
          "footerToolBgRemover": "Rimozione Sfondo Immagini",
          "footerToolColorPicker": "Selettore Colori & Palette",
          "footerToolPassGen": "Generatore di Password",
          "footerToolWordCounter": "Contatore di Parole e Caratteri",
          "footerToolQrGen": "Generatore di Codici QR",
          "footerColPlatform": "Piattaforma",
          "footerPlatformSitemap": "Mappa del Sito (Sitemap)",
          "footerPlatformRss": "Feed RSS",
          "footerCopyright": "© 2026 ecn-apps. Tutti i diritti riservati. RollyPop è un marchio registrato di ecn-apps.com.",
          "footerPoweredBy": "Offerto da",
          "affiliateBadge": "🛍️ Scelte Affiliati Amazon",
          "seoBadge": "⚡ Perché Scegliere RollyPop",
          "seoSectionTitle": "La Ruota delle Decisioni Più Veloce ed Equa del Web",
          "seoSectionSubtitle": "Progettata appositamente per creator, docenti, streamer e gruppi indecisi che cercano animazioni fluide, suoni realistici e privacy.",
          "adLabel": "Pubblicità",
          "presetCount4": "4 opzioni",
          "presetCount6": "6 opzioni",
          "presetCount8": "8 opzioni",
          "presetCount10": "10 opzioni",
          "prod1Category": "Gaming & Tastiere",
          "prod1Title": "Tastiera Meccanica Wireless Keychron K2 Bluetooth/USB",
          "prod1Desc": "Feedback tattile preciso, layout compatto al 75%, commutazione Bluetooth veloce e batteria a lunga durata.",
          "prod2Category": "Retrogaming & Tech",
          "prod2Title": "Starter Kit Completo Raspberry Pi 5 (8GB RAM)",
          "prod2Desc": "Mini PC quad-core a 64 bit per emulazione arcade retrò, server domestici e bot automatizzati.",
          "prod3Category": "Produttività & Ufficio",
          "prod3Title": "Mouse Wireless ad Alte Prestazioni Logitech MX Master 3S",
          "prod3Desc": "Click ultrasilenziosi, tracciamento 8K DPI su vetro e rotella elettromagnetica MagSpeed per la massima efficienza.",
          "prod4Category": "Rete & Gaming",
          "prod4Title": "Switch Gigabit Gestito a 8 Porte TP-Link",
          "prod4Desc": "Prioritizzazione traffico QoS hardware a bassa latenza e gestione VLAN per eliminare il lag in gioco e streaming.",
          "minEntryAlert": "Devi avere almeno 1 opzione sulla ruota.",
          "copyUrlPrompt": "Copia questo URL:",
          "entryChangeColor": "Cambia colore",
          "entryDuplicate": "Duplica",
          "entryDelete": "Elimina",
          "metaKeywords": "ruota della fortuna, ruota delle decisioni, sorteggio online, estrazione nomi, girare la ruota, scelta casuale, ruota si o no, decisione casuale, lotteria online, ecn-apps",
          "titleShuffle": "Mescola Opzioni",
          "titleSort": "Ordina Alfabeticamente",
          "ariaBrandHome": "Home di RollyPop",
          "ariaCloseModal": "Chiudi finestra",
          "btnToggleFullscreen": "Schermo Intero"
    },
    nl: {
          "siteTitle": "RollyPop — Gratis Rad van Fortuin & Beslissingsrad Online",
          "siteDesc": "Maak willekeurige keuzes, loot namen, kies wat te eten en organiseer winacties met het soepelste en snelste online beslissingsrad.",
          "brandSub": "Beslissingsrad",
          "heroTitle": "Draai aan het Rad om <span>Alles te Beslissen</span>",
          "heroSubtitle": "Uiterst nauwkeurige willekeurige beslisser. Pas vakken aan, importeer lijsten, geniet van realistische geluidseffecten en confetti.",
          "btnSpin": "Draai Rad",
          "btnSpinShort": "DRAAI",
          "btnShuffle": "Schudden",
          "btnSort": "Sorteer A-Z",
          "btnReset": "Herstellen",
          "btnSoundOn": "Geluid Aan",
          "btnSoundOff": "Geluid Gedempt",
          "btnFullscreen": "Volledig Scherm",
          "btnExitFullscreen": "Volledig Scherm Sluiten",
          "tabEntries": "Opties",
          "tabImport": "Importeren",
          "tabPresets": "Sjablonen",
          "tabSettings": "Instellingen",
          "tabShare": "Delen",
          "addPlaceholder": "Voer keuze / naam in...",
          "btnAdd": "Toevoegen",
          "entriesCount": "Aantal keuzes:",
          "spaceHint": "Druk op Spatiebalk om te draaien",
          "bulkPlaceholder": "Plak opties hier...\nEén per regel of gescheiden door komma's.\n\nVoorbeeld:\nPizza\nBurgers\nSushi\nTacos",
          "bulkBtn": "Toepassen op Rad",
          "bulkNote": "Toepassen vervangt de huidige opties op het rad.",
          "winnerAnnounce": "WINNAAR!",
          "winnerTitle": "Het rad heeft beslist:",
          "btnSpinAgain": "Opnieuw Draaien",
          "btnRemoveWinner": "Winnaar Verwijderen",
          "copiedNotice": "Link gekopieerd naar klembord!",
          "shareTitle": "Deel dit Rad",
          "shareDesc": "Stuur deze link met jouw aangepaste rad naar vrienden, leerlingen of collega's:",
          "btnCopyLink": "Kopieer Link",
          "presetYesNo": "Ja of Nee",
          "presetFood": "Wat Gaan We Eten?",
          "presetNumbers": "Geluksnummers 1-10",
          "presetTruthDare": "Doen of Durf",
          "presetMagic8": "Magische 8-Bal",
          "presetDice": "Dobbelsteen (1-6)",
          "presetTeam": "Teamindeling (1-8)",
          "presetRainbow": "Regenboogkleuren",
          "settingSound": "Geluidseffecten",
          "settingSoundDesc": "Mechanisch tikgeluid en overwinningsfanfare",
          "settingEliminate": "Verwijder bij Winst",
          "settingEliminateDesc": "Stel automatisch voor om het winnende vak te verwijderen",
          "settingConfetti": "Feestelijke Confetti",
          "settingConfettiDesc": "Kleurrijke partikels wanneer het rad stopt",
          "settingDuration": "Draaiduur",
          "settingDurationDesc": "Tijd dat het rad draait voor het stopt",
          "durationSlow": "Dramatisch (8s)",
          "durationNormal": "Standaard (5s)",
          "durationFast": "Snel (3s)",
          "affiliateTitle": "Aanbevolen Bordspellen & Gadgets",
          "affiliateSubtitle": "Geselecteerde partyspellen, beslissingsdobbelstenen en accessoires uit ons Amazon Partnernetwerk.",
          "btnViewAmazon": "Bekijk op Amazon",
          "affiliateDisclaimer": "Als Amazon Partner verdienen we aan in aanmerking komende aankopen zonder extra kosten voor jou.",
          "feature1Title": "100% Privacy in de Browser",
          "feature1Desc": "Je invoer blijft veilig in je browser. Geen account vereist en geen servertracking.",
          "feature2Title": "Cryptografische RNG-Fysica",
          "feature2Desc": "Gebouwd met window.crypto voor wiskundig eerlijke en onbevooroordeelde draaibeurten.",
          "feature3Title": "Web Audio & Confetti FX",
          "feature3Desc": "Realistisch mechanisch tikgeluid dat geleidelijk vertraagt, gevolgd door een feestelijke confettiexplosie.",
          "faq1Q": "Is RollyPop helemaal gratis te gebruiken?",
          "faq1A": "Ja, RollyPop is 100% gratis met onbeperkt draaien en zonder registratie.",
          "faq2Q": "Hoe eerlijk is het rad?",
          "faq2A": "RollyPop maakt gebruik van native cryptografische willekeurige getallen (Crypto.getRandomValues) voor absolute wiskundige willekeur.",
          "faq3Q": "Kan ik mijn aangepaste rad opslaan of delen?",
          "faq3A": "Ja! Gebruik het tabblad Delen om een directe link te genereren met al je opties en kleuren.",
          "faq4Q": "Kan ik winnaars verwijderen voor loterijen en winacties?",
          "faq4A": "Zeker. Wanneer het rad op een winnaar landt, klik je eenvoudig op 'Winnaar Verwijderen' in het pop-upvenster.",
          "btnInstallApp": "App Installeren",
          "pwaBannerTitle": "Installeer de RollyPop App",
          "pwaBannerDesc": "Installeer op je startscherm voor volledig scherm en offline gebruik!",
          "pwaBannerBtn": "Installeren",
          "iosModalTitle": "RollyPop installeren op iPhone / iPad",
          "iosModalSubtitle": "Volg deze 3 eenvoudige stappen in Safari om RollyPop toe te voegen aan je beginscherm:",
          "iosStep1": "Tik op de knop Delen in de onderste balk van Safari.",
          "iosStep2": "Scrol naar beneden en selecteer 'Zet op beginscherm'.",
          "iosStep3": "Tik rechtsboven op 'Voeg toe' om te voltooien.",
          "iosModalGotIt": "Begrepen!",
          "pwaInstalledSuccess": "RollyPop succesvol geïnstalleerd! Open het vanaf je startscherm.",
          "howToTitle": "Hoe het RollyPop Beslissingsrad te Gebruiken",
          "howToSubtitle": "Kies willekeurige winnaars, maak eerlijke keuzes of loot namen in 3 eenvoudige stappen:",
          "howStep1Title": "Voeg je Opties Toe",
          "howStep1Desc": "Typ opties één voor één, plak hele lijsten in het tabblad Opties of kies uit kant-en-klare sjablonen zoals Eten of Ja/Nee.",
          "howStep2Title": "Draai aan het Rad",
          "howStep2Desc": "Klik op de centrale DRAAI-knop, de knop in de werkbalk of druk op de spatiebalk voor realistische animaties.",
          "howStep3Title": "Vier of Verwijder",
          "howStep3Desc": "Geniet van confetti en realistische audio. Voor verlotingen klik je op 'Winnaar Verwijderen' om door te gaan.",
          "useCasesTitle": "Populaire Toepassingen van het Rad",
          "useCasesSubtitle": "Van dagelijkse keuzes tot schoolactiviteiten en livestreams:",
          "useCaseClassroomTitle": "Willekeurige Namenkiezer voor de Klas",
          "useCaseClassroomDesc": "Docenten plakken namenlijsten om eerlijk en onpartijdig beurten te verdelen onder leerlingen.",
          "useCaseGiveawayTitle": "Winacties & Livestream Verlotingen",
          "useCaseGiveawayDesc": "Makers op Twitch, YouTube en TikTok organiseren live verlotingen in volledig scherm met authentiek geluid.",
          "useCaseFoodTitle": "Wat Gaan We Eten Roulette",
          "useCaseFoodDesc": "Los de maaltijdkeuze op met vrienden of collega's: pizza, sushi, burgers of pasta binnen enkele seconden.",
          "useCasePartyTitle": "Feestspellen: Doen of Durf",
          "useCasePartyDesc": "Maak feestjes en spelavonden interactief met leuke opdrachten en virtuele dobbelsteenworpen.",
          "useCaseTeamTitle": "Groeps- & Teamindeling",
          "useCaseTeamDesc": "Verdeel studenten of collega's in evenwichtige teams voor hackathons, projecten en workshops.",
          "useCaseYesNoTitle": "Ja of Nee Beslissingshulp",
          "useCaseYesNoDesc": "Snelle, onpartijdige keuze nodig? Draai het Ja/Nee sjabloon met gelijke kansen voor direct uitsluitsel.",
          "faq5Q": "Kan ik RollyPop op mijn smartphone installeren?",
          "faq5A": "Ja! RollyPop is een Progressive Web App (PWA). Je kunt het installeren op Android en iOS voor offline gebruik en volledig scherm.",
          "faq6Q": "Slaat RollyPop gegevens op een server op?",
          "faq6A": "Nee. Al je opties en instellingen blijven 100% privé in de lokale opslag van je eigen browser.",
          "footerBrandDesc": "Gratis, privacygericht interactief beslissingsrad en rad van fortuin. Onderdeel van de ecn-apps tools.",
          "footerColEcosystem": "Ecosysteem Tools",
          "footerToolBgRemover": "Achtergrond Verwijderaar",
          "footerToolColorPicker": "Kleurkiezer & Palet",
          "footerToolPassGen": "Wachtwoordgenerator",
          "footerToolWordCounter": "Woorden- en Tekenteller",
          "footerToolQrGen": "QR-Code Generator",
          "footerColPlatform": "Platform",
          "footerPlatformSitemap": "Sitemap",
          "footerPlatformRss": "RSS-Feed",
          "footerCopyright": "© 2026 ecn-apps. Alle rechten voorbehouden. RollyPop is een product van ecn-apps.com.",
          "footerPoweredBy": "Mogelijk gemaakt door",
          "affiliateBadge": "🛍️ Aanbevelingen van Amazon Partners",
          "seoBadge": "⚡ Waarom Kiezen voor RollyPop",
          "seoSectionTitle": "Het Snelste en Eerlijkste Beslissingsrad op het Web",
          "seoSectionSubtitle": "Ontworpen voor creators, docenten, streamers en besluiteloze groepen die soepele animaties, realistisch geluid en privacy wensen.",
          "adLabel": "Advertentie",
          "presetCount4": "4 opties",
          "presetCount6": "6 opties",
          "presetCount8": "8 opties",
          "presetCount10": "10 opties",
          "prod1Category": "Gaming & Toetsenborden",
          "prod1Title": "Keychron K2 Draadloos Mechanisch Toetsenbord Bluetooth/USB",
          "prod1Desc": "Precieze tactiele aanslag, compacte 75%-indeling, snelle Bluetooth-koppeling en lange batterijduur.",
          "prod2Category": "Retrogaming & Tech",
          "prod2Title": "Raspberry Pi 5 (8GB RAM) Complete Starterkit",
          "prod2Desc": "Krachtige 64-bit quad-core mini-pc voor retro arcade-emulatie, thuisservers en geautomatiseerde bots.",
          "prod3Category": "Werkplek & Ergonomie",
          "prod3Title": "Logitech MX Master 3S Draadloze Prestatiemuis",
          "prod3Desc": "Geluidsarme klikken, 8K DPI-tracking op glas en elektromagnetisch MagSpeed-scrollwiel.",
          "prod4Category": "Netwerk & Gaming",
          "prod4Title": "TP-Link 8-Poorts Gigabit Smart Managed Switch",
          "prod4Desc": "Hardwarematige QoS-prioritering en VLAN-beheer om vertraging tijdens gaming en streaming te elimineren.",
          "minEntryAlert": "Je hebt minimaal 1 optie op het rad nodig.",
          "copyUrlPrompt": "Kopieer deze URL:",
          "entryChangeColor": "Kleur wijzigen",
          "entryDuplicate": "Dupliceren",
          "entryDelete": "Verwijderen",
          "metaKeywords": "rad van fortuin, beslissingsrad, willekeurige kiezer, namen loten, rad draaien, loterij online, ja of nee rad, keuzemaker, ecn-apps",
          "titleShuffle": "Opties Schudden",
          "titleSort": "Alfabetisch Sorteren",
          "ariaBrandHome": "RollyPop Home",
          "ariaCloseModal": "Venster sluiten",
          "btnToggleFullscreen": "Volledig Scherm Schakelen"
    },
    ja: {
          "siteTitle": "RollyPop — 無料オンラインルーレット＆名前抽選・意思決定ホイール",
          "siteDesc": "ランダムに選ぶ、名前の抽選、今日の献立決め、プレゼント企画に最適。滑らかなアニメーションとリアルな音響のオンラインルーレット。",
          "brandSub": "意思決定ルーレット",
          "heroTitle": "ルーレットを回して <span>何でも決めよう</span>",
          "heroSubtitle": "高精度なランダム決定ツール。項目のカスタマイズ、リストの一括入力、リアルな回転音と紙吹雪の演出を楽しめます。",
          "btnSpin": "ルーレットを回す",
          "btnSpinShort": "スタート",
          "btnShuffle": "シャッフル",
          "btnSort": "五十音順・A-Z",
          "btnReset": "リセット",
          "btnSoundOn": "サウンド ON",
          "btnSoundOff": "消音",
          "btnFullscreen": "全画面表示",
          "btnExitFullscreen": "全画面を解除",
          "tabEntries": "項目一覧",
          "tabImport": "一括入力",
          "tabPresets": "プリセット",
          "tabSettings": "設定",
          "tabShare": "共有",
          "addPlaceholder": "選択肢や名前を入力...",
          "btnAdd": "追加",
          "entriesCount": "項目の合計数:",
          "spaceHint": "スペースキーでスタート",
          "bulkPlaceholder": "ここに項目を貼り付け...\n1行に1項目、またはカンマ区切り。\n\n例:\nピザ\nハンバーガー\n寿司\nラーメン",
          "bulkBtn": "ホイールに反映",
          "bulkNote": "反映すると現在のホイール項目が上書きされます。",
          "winnerAnnounce": "当選・決定！",
          "winnerTitle": "ルーレットの結果:",
          "btnSpinAgain": "もう一度回す",
          "btnRemoveWinner": "当選項目を削除",
          "copiedNotice": "リンクをクリップボードにコピーしました！",
          "shareTitle": "このホイールを共有",
          "shareDesc": "カスタマイズしたホイールのリンクを友達、同僚、生徒に送信:",
          "btnCopyLink": "リンクをコピー",
          "presetYesNo": "YES または NO",
          "presetFood": "何食べる？",
          "presetNumbers": "ラッキーナンバー 1〜10",
          "presetTruthDare": "真実か挑戦か",
          "presetMagic8": "マジック8ボール",
          "presetDice": "サイコロの目 (1〜6)",
          "presetTeam": "チーム分け (1〜8)",
          "presetRainbow": "レインボーカラー",
          "settingSound": "効果音",
          "settingSoundDesc": "回転クリック音と勝利のファンファーレ",
          "settingEliminate": "当選時に除外",
          "settingEliminateDesc": "当選した項目を自動的に削除するか確認",
          "settingConfetti": "お祝いの紙吹雪",
          "settingConfettiDesc": "停止時にカラフルな紙吹雪を打ち上げ",
          "settingDuration": "回転時間",
          "settingDurationDesc": "ルーレットが停止するまでの回転時間",
          "durationSlow": "じっくり (8秒)",
          "durationNormal": "標準 (5秒)",
          "durationFast": "すばやく (3秒)",
          "affiliateTitle": "おすすめのゲーム＆デスクグッズ",
          "affiliateSubtitle": "Amazonアソシエイトから厳選したボードゲーム、意思決定サイコロ、配信向けアイテム。",
          "btnViewAmazon": "Amazonで見る",
          "affiliateDisclaimer": "Amazonアソシエイトプログラム参加者として、適格販売により収入を得ています。",
          "feature1Title": "ブラウザ完結のプライバシー",
          "feature1Desc": "入力内容は端末内でのみ処理されます。会員登録不要でサーバー送信もありません。",
          "feature2Title": "暗号論的乱数アルゴリズム",
          "feature2Desc": "ブラウザ標準の window.crypto を使用し、偏りのない完全に公平な抽選を実現。",
          "feature3Title": "リアルな音響と紙吹雪演出",
          "feature3Desc": "速度に合わせて変化するリアルな歯車音と、高解像度の紙吹雪アニメーション。",
          "faq1Q": "RollyPopは無料で使えますか？",
          "faq1A": "はい、登録不要で回数制限なく完全無料でご利用いただけます。",
          "faq2Q": "抽選は本当に公平ですか？",
          "faq2A": "RollyPopはブラウザの暗号論的疑似乱数生成器 (Crypto.getRandomValues) を使用しており、数学的に公平です。",
          "faq3Q": "作成したルーレットを保存・共有できますか？",
          "faq3A": "はい。「共有」タブから固有のURLを生成し、項目や色をそのまま共有またはブックマークできます。",
          "faq4Q": "抽選会で当選者を順番に除外できますか？",
          "faq4A": "可能です。当選画面の「当選項目を削除」をクリックすると、次回からその項目を除いて回せます。",
          "btnInstallApp": "アプリをインストール",
          "pwaBannerTitle": "RollyPop アプリをインストール",
          "pwaBannerDesc": "ホーム画面に追加して全画面＆オフラインで快適に使えます！",
          "pwaBannerBtn": "インストール",
          "iosModalTitle": "iPhone / iPad に RollyPop をインストール",
          "iosModalSubtitle": "Safariで以下の3ステップに従ってホーム画面に追加してください:",
          "iosStep1": "Safari下部ツールバーの共有ボタンをタップします。",
          "iosStep2": "下にスクロールして「ホーム画面に追加」を選択します。",
          "iosStep3": "右上の「追加」をタップして完了です。",
          "iosModalGotIt": "了解しました！",
          "pwaInstalledSuccess": "RollyPopがインストールされました！ホーム画面から起動できます。",
          "howToTitle": "RollyPop ルーレットの使い方",
          "howToSubtitle": "3つの簡単なステップで、名前の抽選や公平な意思決定を行えます:",
          "howStep1Title": "項目を追加",
          "howStep1Desc": "項目を1つずつ入力するか、一括入力タブで貼り付けるか、食事やYES/NOなどのプリセットを選択します。",
          "howStep2Title": "ホイールを回す",
          "howStep2Desc": "中央の「スタート」ボタン、ツールバー、またはスペースキーを押して回転させます。",
          "howStep3Title": "結果確認と除外",
          "howStep3Desc": "紙吹雪と効果音で結果をお祝い。抽選会の場合は「当選項目を削除」して次へ進めます。",
          "useCasesTitle": "よくある活用シーン",
          "useCasesSubtitle": "毎日の日常的な選択から学校の授業、ライブ配信の抽選まで:",
          "useCaseClassroomTitle": "学校・授業での生徒指名ツール",
          "useCaseClassroomDesc": "先生が生徒名簿を入力し、偏りなく公平に発表者を指名するために活用されています。",
          "useCaseGiveawayTitle": "プレゼント企画＆ライブ配信の抽選",
          "useCaseGiveawayDesc": "Twitch、YouTube、TikTok配信者が、リアルな回転音と全画面表示で視聴者プレゼント抽選を実施。",
          "useCaseFoodTitle": "ランチや晩ご飯の献立ルーレット",
          "useCaseFoodDesc": "友達や同僚と「今日何食べる？」と迷ったとき、ラーメン、寿司、焼肉などを瞬時に決定。",
          "useCasePartyTitle": "パーティーゲーム・真実か挑戦か",
          "useCasePartyDesc": "飲み会、合コン、パーティーの罰ゲームやサイコロ代わりとして盛り上がります。",
          "useCaseTeamTitle": "チーム分け＆グループ編成",
          "useCaseTeamDesc": "ワークショップ、ハッカソン、グループワークのチームを公平にバランスよく編成。",
          "useCaseYesNoTitle": "YES / NO 意思決定ツール",
          "useCaseYesNoDesc": "やるかやらないか迷ったとき、同確率のYES/NOルーレットで即決。",
          "faq5Q": "スマートフォンのホーム画面に追加できますか？",
          "faq5A": "はい、RollyPopはPWAに対応しており、AndroidやiOSにインストールして全画面で快適に使えます。",
          "faq6Q": "入力した項目がサーバーに送信・保存されますか？",
          "faq6A": "いいえ。すべてのデータはお使いのブラウザ内部にのみ保存され、外部に送信されることはありません。",
          "footerBrandDesc": "プライバシーに配慮した無料のインタラクティブ抽選ルーレット。ecn-apps Webユーティリティスイート製品。",
          "footerColEcosystem": "関連ツール一覧",
          "footerToolBgRemover": "画像背景透過ツール",
          "footerToolColorPicker": "カラーピッカー＆パレット",
          "footerToolPassGen": "パスワード自動生成",
          "footerToolWordCounter": "文字数・単語数カウント",
          "footerToolQrGen": "QRコード作成ツール",
          "footerColPlatform": "プラットフォーム",
          "footerPlatformSitemap": "サイトマップ",
          "footerPlatformRss": "RSSフィード",
          "footerCopyright": "© 2026 ecn-apps. 無断転載を禁じます。RollyPopはecn-apps.comの登録製品です。",
          "footerPoweredBy": "提供:",
          "affiliateBadge": "🛍️ Amazonアソシエイトおすすめ",
          "seoBadge": "⚡ RollyPopが選ばれる理由",
          "seoSectionTitle": "Webで最も速く、公正で使いやすい意思決定ルーレット",
          "seoSectionSubtitle": "配信者、教育関係者、ゲームストリーマー、そして迷いやすいすべての人のために開発されました。",
          "adLabel": "広告",
          "presetCount4": "4項目",
          "presetCount6": "6項目",
          "presetCount8": "8項目",
          "presetCount10": "10項目",
          "prod1Category": "ゲーミング＆キーボード",
          "prod1Title": "Keychron K2 ワイヤレスメカニカルキーボード Bluetooth/USB",
          "prod1Desc": "心地よい打鍵感、コンパクトな75%レイアウト、高速Bluetooth切り替えと大容量バッテリー。",
          "prod2Category": "レトロゲーム＆テクノロジー",
          "prod2Title": "Raspberry Pi 5 (8GB RAM) 完全スターターキット",
          "prod2Desc": "高速64ビットクアッドコア小型PC。レトロゲームのエミュレーションや自動化サーバーに最適。",
          "prod3Category": "ワークステーション＆効率化",
          "prod3Title": "Logicool MX Master 3S ワイヤレスパフォーマンスマウス",
          "prod3Desc": "静音クリック、ガラス対応の8K DPIセンサー、高速MagSpeedスクロールホイール。",
          "prod4Category": "ネットワーク＆配信機器",
          "prod4Title": "TP-Link 8ポート ギガビット スマートスイッチ",
          "prod4Desc": "低遅延のハードウェアQoS優先制御とVLAN機能で、ゲームや配信のラグを解消。",
          "minEntryAlert": "ホイールには少なくとも1つの項目が必要です。",
          "copyUrlPrompt": "このURLをコピー:",
          "entryChangeColor": "色を変更",
          "entryDuplicate": "複製",
          "entryDelete": "削除",
          "metaKeywords": "ルーレット, 名前抽選, ルーレット 無料, くじ引き, ランダム 決定, 献立 ルーレット, 当番決め, プレゼント企画 抽選, yes no ルーレット, ecn-apps",
          "titleShuffle": "項目をシャッフル",
          "titleSort": "五十音順に並べ替え",
          "ariaBrandHome": "RollyPop ホーム",
          "ariaCloseModal": "モーダルを閉じる",
          "btnToggleFullscreen": "全画面表示の切り替え"
    },
    ko: {
          "siteTitle": "RollyPop — 무료 온라인 돌림판 & 랜덤 결정 룰렛 추첨기",
          "siteDesc": "랜덤 추첨, 이름 뽑기, 오늘 뭐 먹지 결정, 이벤트 당첨자 선정을 가장 빠르고 부드러운 온라인 결정 룰렛으로 경험하세요.",
          "brandSub": "결정 룰렛",
          "heroTitle": "돌림판을 돌려 <span>무엇이든 결정하세요</span>",
          "heroSubtitle": "고정밀 랜덤 결정 도구. 항목 맞춤 설정, 목록 가져오기, 실감 나는 음향 효과와 축하 꽃가루 연출을 즐겨보세요.",
          "btnSpin": "돌림판 돌리기",
          "btnSpinShort": "돌리기",
          "btnShuffle": "섞기",
          "btnSort": "가나다순 정렬",
          "btnReset": "초기화",
          "btnSoundOn": "소리 켜기",
          "btnSoundOff": "음소거",
          "btnFullscreen": "전체화면",
          "btnExitFullscreen": "전체화면 종료",
          "tabEntries": "항목",
          "tabImport": "가져오기",
          "tabPresets": "템플릿",
          "tabSettings": "설정",
          "tabShare": "공유",
          "addPlaceholder": "선택지 또는 이름 입력...",
          "btnAdd": "추가",
          "entriesCount": "전체 항목 수:",
          "spaceHint": "스페이스바를 눌러 돌리기",
          "bulkPlaceholder": "여기에 항목을 붙여넣으세요...\n한 줄에 하나씩 또는 쉼표로 구분.\n\n예시:\n피자\n햄버거\n초밥\n라면",
          "bulkBtn": "돌림판에 적용",
          "bulkNote": "적용하면 현재 돌림판의 항목이 대체됩니다.",
          "winnerAnnounce": "당첨!",
          "winnerTitle": "돌림판의 결정:",
          "btnSpinAgain": "다시 돌리기",
          "btnRemoveWinner": "당첨자 제외",
          "copiedNotice": "링크가 클립보드에 복사되었습니다!",
          "shareTitle": "이 돌림판 공유하기",
          "shareDesc": "맞춤 설정한 돌림판 링크를 친구, 동료, 학생들에게 공유하세요:",
          "btnCopyLink": "링크 복사",
          "presetYesNo": "예 또는 아니오",
          "presetFood": "오늘 뭐 먹지?",
          "presetNumbers": "행운의 번호 1-10",
          "presetTruthDare": "진실 혹은 도전",
          "presetMagic8": "매직 8볼",
          "presetDice": "주사위 던지기 (1-6)",
          "presetTeam": "팀 배정 (1-8)",
          "presetRainbow": "무지개 색상",
          "settingSound": "음향 효과",
          "settingSoundDesc": "기계식 톱니 소리와 승리 축하 팡파르",
          "settingEliminate": "당첨 시 제외",
          "settingEliminateDesc": "당첨된 항목을 자동으로 제거할지 확인",
          "settingConfetti": "축하 꽃가루",
          "settingConfettiDesc": "돌림판 정지 시 화려한 꽃가루 폭죽 연출",
          "settingDuration": "회전 시간",
          "settingDurationDesc": "돌림판이 멈출 때까지 회전하는 시간",
          "durationSlow": "긴장감 넘치게 (8초)",
          "durationNormal": "표준 (5초)",
          "durationFast": "빠르게 (3초)",
          "affiliateTitle": "추천 게임 및 데스크 용품",
          "affiliateSubtitle": "Amazon Associates 네트워크에서 엄선한 보드게임, 결정 주사위 및 스트리밍 액세서리.",
          "btnViewAmazon": "Amazon에서 보기",
          "affiliateDisclaimer": "Amazon 어소시에이트로서 적격 구매를 통해 수수료를 제공받을 수 있습니다.",
          "feature1Title": "100% 브라우저 기반 개인정보 보호",
          "feature1Desc": "입력한 목록은 기기 브라우저에만 안전하게 보관됩니다. 회원가입이나 서버 추적이 없습니다.",
          "feature2Title": "암호학적 무작위 물리학",
          "feature2Desc": "브라우저 표준 window.crypto 난수를 활용하여 수학적으로 편향 없는 공정한 결과를 보장합니다.",
          "feature3Title": "실감 나는 사운드와 꽃가루 효과",
          "feature3Desc": "속도에 따라 변하는 기계식 래칫 음향과 고화질 축하 꽃가루 애니메이션.",
          "faq1Q": "RollyPop은 무료로 사용할 수 있나요?",
          "faq1A": "네, RollyPop은 회원가입 없이 무제한으로 100% 무료입니다.",
          "faq2Q": "돌림판 추첨은 얼마나 공정한가요?",
          "faq2A": "RollyPop은 브라우저 내장 암호학적 난수 생성기(Crypto.getRandomValues)를 사용하여 수학적으로 완벽한 공정성을 제공합니다.",
          "faq3Q": "내가 만든 돌림판을 저장하거나 공유할 수 있나요?",
          "faq3A": "네! '공유' 탭에서 항목과 색상이 그대로 담긴 고유 링크를 생성하여 친구에게 보내거나 북마크할 수 있습니다.",
          "faq4Q": "경품 추첨 시 당첨자를 하나씩 제외할 수 있나요?",
          "faq4A": "물론입니다. 결과 화면에서 '당첨자 제외'를 누르면 다음 회차에서 해당 항목이 자동으로 빠집니다.",
          "btnInstallApp": "앱 설치",
          "pwaBannerTitle": "RollyPop 앱 설치",
          "pwaBannerDesc": "홈 화면에 설치하여 전체 화면 및 오프라인에서 편리하게 돌려보세요!",
          "pwaBannerBtn": "설치",
          "iosModalTitle": "iPhone / iPad에 RollyPop 설치하기",
          "iosModalSubtitle": "Safari에서 다음 3단계에 따라 RollyPop을 홈 화면에 추가하세요:",
          "iosStep1": "Safari 하단 도구 모음에서 공유 버튼을 탭합니다.",
          "iosStep2": "아래로 스크롤하여 '홈 화면에 추가'를 선택합니다.",
          "iosStep3": "오른쪽 상단의 '추가'를 탭하여 완료합니다.",
          "iosModalGotIt": "확인!",
          "pwaInstalledSuccess": "RollyPop이 성공적으로 설치되었습니다! 홈 화면에서 실행하세요.",
          "howToTitle": "RollyPop 결정 룰렛 사용법",
          "howToSubtitle": "간단한 3단계로 무작위 당첨자를 뽑거나 공정한 결정을 내리세요:",
          "howStep1Title": "항목 추가하기",
          "howStep1Desc": "선택지를 하나씩 입력하거나 가져오기 탭에서 한꺼번에 붙여넣고, 음식이나 예/아니오 같은 템플릿을 선택하세요.",
          "howStep2Title": "돌림판 돌리기",
          "howStep2Desc": "중앙의 돌리기 버튼이나 하단 도구 모음, 또는 스페이스바를 눌러 생생한 회전 애니메이션을 감상하세요.",
          "howStep3Title": "결과 확인 및 제외",
          "howStep3Desc": "꽃가루와 사운드로 당첨을 축하하세요. 연속 추첨 시 '당첨자 제외'를 클릭하여 다음 라운드를 진행합니다.",
          "useCasesTitle": "돌림판의 다양한 활용법",
          "useCasesSubtitle": "일상의 소소한 고민부터 학교 수업, 라이브 방송 이벤트까지:",
          "useCaseClassroomTitle": "학교 수업 랜덤 발표자 뽑기",
          "useCaseClassroomDesc": "선생님이 학생 명단을 입력해 발표 순서를 정하고 편견 없이 공평한 수업 참여를 유도합니다.",
          "useCaseGiveawayTitle": "라이브 스트리밍 경품 추첨",
          "useCaseGiveawayDesc": "트위치, 유튜브, 틱톡 크리에이터가 몰입감 넘치는 전체 화면과 실감 나는 소리로 시청자 이벤트를 진행합니다.",
          "useCaseFoodTitle": "점심 메뉴 & 맛집 추천 룰렛",
          "useCaseFoodDesc": "친구, 직장 동료와 메뉴 고르기 힘들 때 피자, 햄버거, 초밥, 국밥 중 몇 초 만에 결정하세요.",
          "useCasePartyTitle": "파티 게임: 진실 혹은 도전",
          "useCasePartyDesc": "술자리나 모임에서 흥미진진한 벌칙을 정하거나 주사위 대신 간편하게 사용할 수 있습니다.",
          "useCaseTeamTitle": "팀 및 조 편성 도구",
          "useCaseTeamDesc": "워크숍, 해커톤, 조별 과제에서 학생이나 동료들을 균형 잡힌 팀으로 신속하게 배정합니다.",
          "useCaseYesNoTitle": "예 / 아니오 결정기",
          "useCaseYesNoDesc": "망설여질 때 동등한 확률의 예/아니오 템플릿을 돌려 신속하게 마음을 정하세요.",
          "faq5Q": "스마트폰에 앱처럼 설치할 수 있나요?",
          "faq5A": "네! RollyPop은 PWA를 지원하므로 Android와 iOS에서 홈 화면에 추가하여 오프라인에서도 전체 화면으로 즐길 수 있습니다.",
          "faq6Q": "내가 입력한 목록이 서버에 저장되나요?",
          "faq6A": "아닙니다. 모든 데이터는 사용자의 로컬 브라우저에만 100% 비공개로 안전하게 저장됩니다.",
          "footerBrandDesc": "무료, 프라이버시 중심 인터랙티브 결정 룰렛 및 랜덤 돌림판. ecn-apps 웹 도구 제품군.",
          "footerColEcosystem": "패밀리 도구",
          "footerToolBgRemover": "이미지 배경 제거",
          "footerToolColorPicker": "컬러 피커 & 팔레트",
          "footerToolPassGen": "비밀번호 생성기",
          "footerToolWordCounter": "글자 수 & 단어 수 세기",
          "footerToolQrGen": "QR 코드 생성기",
          "footerColPlatform": "플랫폼",
          "footerPlatformSitemap": "사이트맵",
          "footerPlatformRss": "RSS 피드",
          "footerCopyright": "© 2026 ecn-apps. All rights reserved. RollyPop is a product of ecn-apps.com.",
          "footerPoweredBy": "제공:",
          "affiliateBadge": "🛍️ Amazon 제휴 추천 상품",
          "seoBadge": "⚡ RollyPop을 선택해야 하는 이유",
          "seoSectionTitle": "웹에서 가장 빠르고 공정한 결정 룰렛",
          "seoSectionSubtitle": "부드러운 모션, 실감 나는 음향, 프라이버시 보호를 원하는 크리에이터, 교사, 게이머를 위해 제작되었습니다.",
          "adLabel": "광고",
          "presetCount4": "4개 항목",
          "presetCount6": "6개 항목",
          "presetCount8": "8개 항목",
          "presetCount10": "10개 항목",
          "prod1Category": "게이밍 & 키보드",
          "prod1Title": "Keychron K2 무선 블루투스/USB 기계식 키보드",
          "prod1Desc": "기분 좋은 타건감, 컴팩트한 75% 배열, 빠른 블루투스 기기 전환 및 대용량 배터리 탑재.",
          "prod2Category": "레트로 게이밍 & 테크",
          "prod2Title": "Raspberry Pi 5 (8GB RAM) 풀 스타터 키트",
          "prod2Desc": "레트로 게임 에뮬레이션, 홈 서버 구축 및 봇 운영을 위한 고성능 64비트 쿼드코어 미니 PC.",
          "prod3Category": "생산성 & 오피스",
          "prod3Title": "로지텍 MX Master 3S 무선 퍼포먼스 마우스",
          "prod3Desc": "무소음 클릭, 유리면에서도 작동하는 8K DPI 센서와 MagSpeed 초고속 전자기 스크롤 휠.",
          "prod4Category": "네트워크 & 스트리밍",
          "prod4Title": "TP-Link 8포트 기가비트 스마트 관리형 스위치",
          "prod4Desc": "게임 및 방송 환경에서 렉을 없애주는 하드웨어 QoS 대역폭 우선 처리 및 VLAN 기능.",
          "minEntryAlert": "돌림판에 최소 1개 이상의 항목이 필요합니다.",
          "copyUrlPrompt": "이 링크 복사:",
          "entryChangeColor": "색상 변경",
          "entryDuplicate": "복제",
          "entryDelete": "삭제",
          "metaKeywords": "돌림판, 룰렛 돌리기, 랜덤 추첨, 결정 룰렛, 이름 뽑기, 경품 추첨기, 메뉴 룰렛, 예 아니오 룰렛, 무료 돌림판, ecn-apps",
          "titleShuffle": "항목 섞기",
          "titleSort": "가나다순 정렬",
          "ariaBrandHome": "RollyPop 홈",
          "ariaCloseModal": "팝업 닫기",
          "btnToggleFullscreen": "전체화면 전환"
    },
    zh: {
          "siteTitle": "RollyPop — 免费在线幸运大转盘 & 随机决定抽奖轮盘",
          "siteDesc": "做随机决定、名字抽奖、今天吃什么、活动抽奖，体验反应最灵敏、动画最流畅的在线随机转盘工具。",
          "brandSub": "决策转盘",
          "heroTitle": "转动轮盘，<span>决定任何事情</span>",
          "heroSubtitle": "高精度随机决定工具。支持自定义扇区、批量导入、逼真音效与礼花庆祝特效。",
          "btnSpin": "转动转盘",
          "btnSpinShort": "开始",
          "btnShuffle": "打乱顺序",
          "btnSort": "按字母/拼音排序",
          "btnReset": "重置",
          "btnSoundOn": "声音开启",
          "btnSoundOff": "静音",
          "btnFullscreen": "全屏模式",
          "btnExitFullscreen": "退出全屏",
          "tabEntries": "选项",
          "tabImport": "导入",
          "tabPresets": "预设模板",
          "tabSettings": "设置",
          "tabShare": "分享",
          "addPlaceholder": "输入选项或名称...",
          "btnAdd": "添加",
          "entriesCount": "总选项数:",
          "spaceHint": "按空格键转动",
          "bulkPlaceholder": "在此粘贴选项...\n每行一项或用逗号隔开。\n\n例如:\n披萨\n汉堡\n寿司\n拉面",
          "bulkBtn": "应用到转盘",
          "bulkNote": "应用后将替换当前转盘的所有选项。",
          "winnerAnnounce": "中奖啦！",
          "winnerTitle": "转盘决定的结果:",
          "btnSpinAgain": "再转一次",
          "btnRemoveWinner": "移除中奖项",
          "copiedNotice": "链接已复制到剪贴板！",
          "shareTitle": "分享此转盘",
          "shareDesc": "将自定义转盘链接发送给好友、同学或同事:",
          "btnCopyLink": "复制链接",
          "presetYesNo": "是 或 否",
          "presetFood": "今天吃什么？",
          "presetNumbers": "幸运数字 1-10",
          "presetTruthDare": "真心话大冒险",
          "presetMagic8": "神奇八号球",
          "presetDice": "掷骰子 (1-6)",
          "presetTeam": "团队分组 (1-8)",
          "presetRainbow": "彩虹颜色",
          "settingSound": "音效",
          "settingSoundDesc": "机械咔哒声与胜利号角声",
          "settingEliminate": "中奖后移除",
          "settingEliminateDesc": "中奖后自动提示移除该选项",
          "settingConfetti": "礼花庆祝特效",
          "settingConfettiDesc": "转盘停止时喷射彩色纸屑",
          "settingDuration": "旋转时长",
          "settingDurationDesc": "转盘从开始到完全停止的时间",
          "durationSlow": "悬念拉满 (8秒)",
          "durationNormal": "标准 (5秒)",
          "durationFast": "快速 (3秒)",
          "affiliateTitle": "精选游戏与桌面装备",
          "affiliateSubtitle": "来自亚马逊联盟网络精选的桌游、决策骰子和直播配件。",
          "btnViewAmazon": "在亚马逊上查看",
          "affiliateDisclaimer": "作为亚马逊联盟成员，我们通过符合条件的购买赚取佣金，您无需支付任何额外费用。",
          "feature1Title": "100% 本地浏览器隐私保护",
          "feature1Desc": "您的输入内容安全保存在本地浏览器中。无需注册账号，绝无服务器跟踪。",
          "feature2Title": "密码学安全随机算法",
          "feature2Desc": "采用浏览器原生 window.crypto 随机值，确保每次旋转数学上完全公正无偏。",
          "feature3Title": "逼真物理音效与礼花",
          "feature3Desc": "随速度平滑减速的机械棘轮音效，以及绚丽的高清纸屑爆炸动画。",
          "faq1Q": "RollyPop 是完全免费的吗？",
          "faq1A": "是的，RollyPop 100% 免费，无次数限制，无需注册。",
          "faq2Q": "转盘的抽奖结果是否公正？",
          "faq2A": "RollyPop 使用浏览器内置密码学安全随机数 (Crypto.getRandomValues)，确保结果完全随机无偏见。",
          "faq3Q": "我可以保存或分享制作好的转盘吗？",
          "faq3A": "可以！使用“分享”选项卡可生成专属链接，包含您设置的所有选项和颜色，可直接发送或加入收藏。",
          "faq4Q": "抽奖时可以逐一剔除中奖者吗？",
          "faq4A": "当然可以。转盘停下后，在弹出的窗口中点击“移除中奖项”即可从下一轮中排除。",
          "btnInstallApp": "安装应用",
          "pwaBannerTitle": "安装 RollyPop 应用",
          "pwaBannerDesc": "安装到主屏幕，支持全屏展示与离线旋转！",
          "pwaBannerBtn": "安装",
          "iosModalTitle": "在 iPhone / iPad 上安装 RollyPop",
          "iosModalSubtitle": "在 Safari 浏览器中按照以下 3 个简单步骤添加到主屏幕:",
          "iosStep1": "点击 Safari 底部工具栏中的分享按钮。",
          "iosStep2": "向下滑动并选择“添加到主屏幕”。",
          "iosStep3": "点击右上角的“添加”即可完成。",
          "iosModalGotIt": "我知道了！",
          "pwaInstalledSuccess": "RollyPop 安装成功！您可以从主屏幕打开它。",
          "howToTitle": "如何使用 RollyPop 决策转盘",
          "howToSubtitle": "只需简单三步，即可随机选出幸运儿或做出公正决定:",
          "howStep1Title": "添加您的选项",
          "howStep1Desc": "逐个输入选项，或在导入选项卡中批量粘贴，也可直接选择美食、是/否等预设模板。",
          "howStep2Title": "转动转盘",
          "howStep2Desc": "点击中央的开始按钮、底部工具栏或按下空格键，观看流畅逼真的旋转动画。",
          "howStep3Title": "庆祝或剔除中奖项",
          "howStep3Desc": "欣赏彩色纸屑和欢呼音效。多轮抽奖时点击“移除中奖项”继续下一轮。",
          "useCasesTitle": "转盘的热门应用场景",
          "useCasesSubtitle": "从日常选择到课堂教学和直播抽奖:",
          "useCaseClassroomTitle": "课堂随机点名与提问",
          "useCaseClassroomDesc": "教师粘贴学生名单，随机抽取回答问题的学生，保证课堂参与的绝对公正。",
          "useCaseGiveawayTitle": "直播间观众抽奖与互动",
          "useCaseGiveawayDesc": "Twitch、B站、抖音主播使用无干扰全屏模式和逼真音效进行现场奖品抽奖。",
          "useCaseFoodTitle": "美食餐厅决策大转盘",
          "useCaseFoodDesc": "解决和同事、朋友“今天吃什么”的难题：火锅、披萨、烧烤、拉面几秒内轻松决定。",
          "useCasePartyTitle": "派对聚会游戏：真心话大冒险",
          "useCasePartyDesc": "聚会破冰、派对挑战与惩罚，用可自定义的轮盘代替实体骰子更具趣味。",
          "useCaseTeamTitle": "团队与项目分组",
          "useCaseTeamDesc": "在黑客松、敏捷冲刺和课堂项目中将成员公平划分为实力均衡的小组。",
          "useCaseYesNoTitle": "是与否二选一决定器",
          "useCaseYesNoDesc": "纠结不定？转动均等概率的是/否轮盘，瞬间获得客观决断。",
          "faq5Q": "可以把它安装在手机上吗？",
          "faq5A": "可以！RollyPop 是渐进式 Web 应用 (PWA)，支持在 Android 和 iOS 上安装到主屏幕并支持离线全屏使用。",
          "faq6Q": "RollyPop 会在服务器上存储我的名单吗？",
          "faq6A": "不会。所有选项和设置均保存在您本地浏览器的存储中，完全私密安全。",
          "footerBrandDesc": "免费、注重隐私的在线互动决策转盘与幸运抽奖工具。属于 ecn-apps Web 工具套件。",
          "footerColEcosystem": "生态工具",
          "footerToolBgRemover": "图片背景消除",
          "footerToolColorPicker": "颜色选择器与调色板",
          "footerToolPassGen": "强密码生成器",
          "footerToolWordCounter": "字数与字符统计",
          "footerToolQrGen": "二维码生成器",
          "footerColPlatform": "平台",
          "footerPlatformSitemap": "网站地图",
          "footerPlatformRss": "RSS 订阅源",
          "footerCopyright": "© 2026 ecn-apps. 保留所有权利。RollyPop 是 ecn-apps.com 旗下产品。",
          "footerPoweredBy": "技术支持:",
          "affiliateBadge": "🛍️ 亚马逊精选推荐",
          "seoBadge": "⚡ 为什么选择 RollyPop",
          "seoSectionTitle": "网络上最快、最公平的决策轮盘",
          "seoSectionSubtitle": "专为创作者、教育工作者、游戏主播和选择困难症患者量身打造，兼具流畅动画、逼真音效与隐私保护。",
          "adLabel": "广告",
          "presetCount4": "4 项",
          "presetCount6": "6 项",
          "presetCount8": "8 项",
          "presetCount10": "10 项",
          "prod1Category": "游戏与键盘",
          "prod1Title": "Keychron K2 无线蓝牙/Type-C 机械键盘",
          "prod1Desc": "手感绝佳的机械轴体、紧凑 75% 布局、无缝多设备蓝牙切换与长续航电池。",
          "prod2Category": "复古游戏与极客硬件",
          "prod2Title": "Raspberry Pi 5 (8GB RAM) 完整入门套件",
          "prod2Desc": "强大的 64 位四核迷你电脑，适合街机模拟器、家庭决策服务器与自动化机器人。",
          "prod3Category": "办公生产力",
          "prod3Title": "罗技 MX Master 3S 无线高性能鼠标",
          "prod3Desc": "静音微动按键、8K DPI 玻璃追踪传感器与 MagSpeed 电磁疾速滚轮。",
          "prod4Category": "网络与电竞设备",
          "prod4Title": "TP-Link 8口千兆简单网管交换机",
          "prod4Desc": "低延迟硬件 QoS 流量优先级排序与 VLAN 支持，告别游戏与直播卡顿。",
          "minEntryAlert": "转盘上至少需要 1 个选项。",
          "copyUrlPrompt": "复制此链接:",
          "entryChangeColor": "更改颜色",
          "entryDuplicate": "复制",
          "entryDelete": "删除",
          "metaKeywords": "幸运转盘, 抽奖轮盘, 随机决定, 决策转盘, 名字抽奖, 转盘抽奖, 今天吃什么转盘, 是否轮盘, 免费大转盘, ecn-apps",
          "titleShuffle": "打乱选项",
          "titleSort": "按字母排序",
          "ariaBrandHome": "RollyPop 首页",
          "ariaCloseModal": "关闭弹窗",
          "btnToggleFullscreen": "切换全屏模式"
    },
    ru: {
          "siteTitle": "RollyPop — Бесплатное Онлайн Колесо Фортуны & Рулетка Решений",
          "siteDesc": "Случайный выбор, жеребьевка имен, выбор еды и розыгрыши призов с самым быстрым и плавным онлайн колесом решений.",
          "brandSub": "Колесо Решений",
          "heroTitle": "Крутите Колесо, чтобы <span>Решить Что Угодно</span>",
          "heroSubtitle": "Высокоточный генератор случайных решений. Настраивайте секторы, импортируйте списки, наслаждайтесь реалистичным звуком и конфетти.",
          "btnSpin": "Крутить Колесо",
          "btnSpinShort": "КРУТИТЬ",
          "btnShuffle": "Перемешать",
          "btnSort": "Сортировка А-Я",
          "btnReset": "Сброс",
          "btnSoundOn": "Звук Вкл",
          "btnSoundOff": "Без Звука",
          "btnFullscreen": "На Весь Экран",
          "btnExitFullscreen": "Выйти из Полноэкранного",
          "tabEntries": "Варианты",
          "tabImport": "Импорт",
          "tabPresets": "Шаблоны",
          "tabSettings": "Настройки",
          "tabShare": "Поделиться",
          "addPlaceholder": "Введите вариант или имя...",
          "btnAdd": "Добавить",
          "entriesCount": "Всего вариантов:",
          "spaceHint": "Нажмите Пробел, чтобы крутить",
          "bulkPlaceholder": "Вставьте варианты сюда...\nПо одному в строке или через запятую.\n\nПример:\nПицца\nБургеры\nСуши\nШашлык",
          "bulkBtn": "Применить к Колесу",
          "bulkNote": "Применение заменит текущие варианты колеса.",
          "winnerAnnounce": "ПОБЕДИТЕЛЬ!",
          "winnerTitle": "Колесо выбрало:",
          "btnSpinAgain": "Крутить Снова",
          "btnRemoveWinner": "Удалить Победителя",
          "copiedNotice": "Ссылка скопирована в буфер обмена!",
          "shareTitle": "Поделиться Колесом",
          "shareDesc": "Отправьте ссылку на ваше колесо друзьям, ученикам или коллегам:",
          "btnCopyLink": "Скопировать Ссылку",
          "presetYesNo": "Да или Нет",
          "presetFood": "Что Поесть?",
          "presetNumbers": "Счастливые Числа 1-10",
          "presetTruthDare": "Правда или Действие",
          "presetMagic8": "Магический Шар 8",
          "presetDice": "Бросок Кубика (1-6)",
          "presetTeam": "Разделение на Команды (1-8)",
          "presetRainbow": "Цвета Радуги",
          "settingSound": "Звуковые Эффекты",
          "settingSoundDesc": "Механический треск трещотки и победная фанфара",
          "settingEliminate": "Удалять при Победе",
          "settingEliminateDesc": "Автоматически предлагать удалить сектор победителя",
          "settingConfetti": "Праздничное Конфетти",
          "settingConfettiDesc": "Салют из цветных частиц при остановке",
          "settingDuration": "Длительность Вращения",
          "settingDurationDesc": "Время вращения колеса до остановки",
          "durationSlow": "Драматично (8 сек)",
          "durationNormal": "Стандартно (5 сек)",
          "durationFast": "Быстро (3 сек)",
          "affiliateTitle": "Рекомендуемые Игры и Гаджеты",
          "affiliateSubtitle": "Подборка настольных игр, кубиков для решений и стриминговых аксессуаров партнерской сети Amazon.",
          "btnViewAmazon": "Посмотреть на Amazon",
          "affiliateDisclaimer": "Как партнер Amazon, мы получаем доход от квалифицированных покупок без дополнительных затрат для вас.",
          "feature1Title": "100% Конфиденциальность в Браузере",
          "feature1Desc": "Ваши данные остаются строго в вашем браузере. Без регистрации и без отслеживания серверами.",
          "feature2Title": "Криптографический Случайный Выбор",
          "feature2Desc": "Построено на криптографическом API window.crypto для математически честного и непредвзятого вращения.",
          "feature3Title": "Реалистичный Звук и Конфетти",
          "feature3Desc": "Динамический звук трещотки с реалистичным замедлением и яркий взрыв конфетти HD.",
          "faq1Q": "RollyPop полностью бесплатен?",
          "faq1A": "Да, RollyPop на 100% бесплатен, без ограничений по вращениям и без регистрации.",
          "faq2Q": "Насколько честно вращается колесо?",
          "faq2A": "RollyPop использует криптографически стойкие случайные числа браузера (Crypto.getRandomValues), гарантируя абсолютную случайность.",
          "faq3Q": "Могу ли я сохранить или поделиться своим колесом?",
          "faq3A": "Да! На вкладке «Поделиться» можно сгенерировать прямую ссылку, кодирующую ваш точный список вариантов и цветов.",
          "faq4Q": "Можно ли удалять победителей во время розыгрышей?",
          "faq4A": "Конечно. Когда колесо определит победителя, просто нажмите «Удалить Победителя» во всплывающем окне.",
          "btnInstallApp": "Установить Приложение",
          "pwaBannerTitle": "Установить RollyPop",
          "pwaBannerDesc": "Установите на главный экран для полноэкранного режима и работы офлайн!",
          "pwaBannerBtn": "Установить",
          "iosModalTitle": "Установка RollyPop на iPhone / iPad",
          "iosModalSubtitle": "Выполните 3 простых шага в Safari, чтобы добавить RollyPop на экран Домой:",
          "iosStep1": "Нажмите кнопку «Поделиться» на нижней панели Safari.",
          "iosStep2": "Прокрутите вниз и выберите «На экран „Домой“».",
          "iosStep3": "Нажмите «Добавить» в правом верхнем углу.",
          "iosModalGotIt": "Понятно!",
          "pwaInstalledSuccess": "RollyPop успешно установлено! Откройте его с главного экрана.",
          "howToTitle": "Как Пользоваться Колесом Решений RollyPop",
          "howToSubtitle": "Выбирайте победителей, принимайте беспристрастные решения или разыгрывайте имена за 3 простых шага:",
          "howStep1Title": "Добавьте Варианты",
          "howStep1Desc": "Вводите варианты по одному, вставляйте целые списки на вкладке «Варианты» или выбирайте готовые шаблоны (Еда, Да/Нет).",
          "howStep2Title": "Вращайте Колесо",
          "howStep2Desc": "Нажмите центральную кнопку КРУТИТЬ, кнопку на панели или нажмите пробел, чтобы наблюдать реалистичную физику.",
          "howStep3Title": "Празднуйте или Удаляйте",
          "howStep3Desc": "Наслаждайтесь конфетти и звуком. Для розыгрышей нажмите «Удалить Победителя», чтобы перейти к следующему раунду.",
          "useCasesTitle": "Популярные Способы Использования",
          "useCasesSubtitle": "От повседневных решений до школьных уроков и розыгрышей в прямом эфире:",
          "useCaseClassroomTitle": "Случайный Выбор Учеников в Классе",
          "useCaseClassroomDesc": "Учителя вставляют списки учеников для справедливого и непредвзятого вызова к доске.",
          "useCaseGiveawayTitle": "Розыгрыши на Стримах и Конкурсы",
          "useCaseGiveawayDesc": "Стримеры Twitch, YouTube и TikTok проводят конкурсы в полноэкранном режиме с реалистичным звуком трещотки.",
          "useCaseFoodTitle": "Рулетка Выбора Еды и Ресторанов",
          "useCaseFoodDesc": "Решите вечный спор, что заказать с друзьями или коллегами: пиццу, бургеры, суши или шашлык за секунды.",
          "useCasePartyTitle": "Игры для Вечеринок: Правда или Действие",
          "useCasePartyDesc": "Оживите посиделки с друзьями веселыми заданиями, фантами или виртуальными бросками кубика.",
          "useCaseTeamTitle": "Разделение на Команды и Группы",
          "useCaseTeamDesc": "Делите студентов или коллег на сбалансированные группы для хакатонов, проектов и воркшопов.",
          "useCaseYesNoTitle": "Колесо Решений Да или Нет",
          "useCaseYesNoDesc": "Нужен быстрый и непредвзятый ответ? Крутите шаблон «Да/Нет» с равными шансами для мгновенного решения.",
          "faq5Q": "Можно ли установить RollyPop на смартфон?",
          "faq5A": "Да! RollyPop — это прогрессивное веб-приложение (PWA). Вы можете установить его на Android и iOS для игры офлайн и на весь экран.",
          "faq6Q": "Сохраняются ли мои списки на сервере?",
          "faq6A": "Нет. Все ваши варианты и настройки хранятся исключительно в локальной памяти вашего браузера на 100% конфиденциально.",
          "footerBrandDesc": "Бесплатное, конфиденциальное интерактивное колесо фортуны и рулетка решений. Входит в набор веб-утилит ecn-apps.",
          "footerColEcosystem": "Инструменты Экосистемы",
          "footerToolBgRemover": "Удаление Фона с Фото",
          "footerToolColorPicker": "Палитра & Выбор Цвета",
          "footerToolPassGen": "Генератор Паролей",
          "footerToolWordCounter": "Счетчик Слов и Символов",
          "footerToolQrGen": "Генератор QR-кодов",
          "footerColPlatform": "Платформа",
          "footerPlatformSitemap": "Карта Сайта",
          "footerPlatformRss": "RSS Лента",
          "footerCopyright": "© 2026 ecn-apps. Все права защищены. RollyPop является зарегистрированным продуктом ecn-apps.com.",
          "footerPoweredBy": "Работает на базе",
          "affiliateBadge": "🛍️ Рекомендации Amazon Partners",
          "seoBadge": "⚡ Почему Выбирают RollyPop",
          "seoSectionTitle": "Самое Быстрое и Честное Колесо Решений в Сети",
          "seoSectionSubtitle": "Создано для авторов контента, учителей, стримеров и сомневающихся компаний, ценящих плавную анимацию, звук и приватность.",
          "adLabel": "Реклама",
          "presetCount4": "4 варианта",
          "presetCount6": "6 вариантов",
          "presetCount8": "8 вариантов",
          "presetCount10": "10 вариантов",
          "prod1Category": "Гейминг и Клавиатуры",
          "prod1Title": "Беспроводная Механическая Клавиатура Keychron K2 Bluetooth/USB",
          "prod1Desc": "Тактильный отклик, компактный формат 75%, быстрое переключение по Bluetooth и емкий аккумулятор.",
          "prod2Category": "Ретрогейминг и Технологии",
          "prod2Title": "Полный Стартовый Комплект Raspberry Pi 5 (8GB RAM)",
          "prod2Desc": "Мощный 64-битный четырехъядерный мини-ПК для ретро-аркад, домашних серверов и ботов.",
          "prod3Category": "Рабочее Место и Офис",
          "prod3Title": "Беспроводная Мышь Logitech MX Master 3S",
          "prod3Desc": "Бесшумные клики, датчик 8K DPI на стекле и электромагнитное колесико MagSpeed для максимальной продуктивности.",
          "prod4Category": "Сеть и Гейминг",
          "prod4Title": "8-портовый Гигабитный Настраиваемый Коммутатор TP-Link",
          "prod4Desc": "Аппаратная приоритезация QoS с низкой задержкой и поддержка VLAN для устранения лагов в играх и стримах.",
          "minEntryAlert": "На колесе должен быть хотя бы 1 вариант.",
          "copyUrlPrompt": "Скопируйте эту ссылку:",
          "entryChangeColor": "Изменить цвет",
          "entryDuplicate": "Дублировать",
          "entryDelete": "Удалить",
          "metaKeywords": "колесо фортуны, колесо решений, рандомайзер, случайный выбор, рулетка решений, жеребьевка имен, рулетка да нет, крутить колесо, ecn-apps",
          "titleShuffle": "Перемешать варианты",
          "titleSort": "Сортировать по алфавиту",
          "ariaBrandHome": "Главная RollyPop",
          "ariaCloseModal": "Закрыть окно",
          "btnToggleFullscreen": "Переключить Полноэкранный Режим"
    }
  };

  const COLOR_PALETTES = [
    '#f43f5e', '#f97316', '#eab308', '#10b981', 
    '#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef', 
    '#ec4899', '#14b8a6', '#6366f1', '#f43f5e'
  ];

  const PRESET_DATA = {
    yesno: {
      en: ['Yes', 'No', 'Maybe', 'Spin Again'],
      es: ['Sí', 'No', 'Tal vez', 'Gira de nuevo'],
      fr: ['Oui', 'Non', 'Peut-être', 'Rejouer'],
      ru: ["Да","Нет","Возможно","Крутить снова"],
      zh: ["是","否","也许","再转一次"],
      ko: ["예","아니오","아마도","다시 돌리기"],
      ja: ["はい","いいえ","たぶん","もう一度回す"],
      nl: ["Ja","Nee","Misschien","Draai opnieuw"],
      it: ["Sì","No","Forse","Gira di nuovo"],
      pt: ["Sim","Não","Talvez","Girar de novo"],
      de: ["Ja","Nein","Vielleicht","Nochmal drehen"]
    },
    food: {
      en: ['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Tacos', '🥗 Salad', '🍝 Pasta', '🍜 Ramen', '🥩 BBQ'],
      es: ['🍕 Pizza', '🍔 Hamburguesa', '🍣 Sushi', '🌮 Tacos', '🥗 Ensalada', '🍝 Pasta', '🍜 Ramen', '🥩 Carnita Asada'],
      fr: ['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Tacos', '🥗 Salade', '🍝 Pâtes', '🍜 Ramen', '🥩 Grillades'],
      de: ['🍕 Pizza', '🍔 Burger', '🍣 Sushi', '🥙 Döner Kebab', '🥗 Salat', '🍝 Pasta', '🍜 Ramen', '🥩 Schnitzel'],
      pt: ['🍕 Pizza', '🍔 Hambúrguer', '🍣 Sushi', '🌮 Pastel', '🥗 Salada', '🍝 Massa', '🍲 Feijoada', '🥩 Churrasco'],
      it: ['🍕 Pizza', '🍔 Hamburger', '🍣 Sushi', '🥪 Panino', '🥗 Insalata', '🍝 Pasta', '🍚 Risotto', '🥩 Bistecca'],
      nl: ['🍕 Pizza', '🍔 Hamburger', '🍣 Sushi', '🍟 Friet', '🥗 Salade', '🥞 Pannenkoeken', '🍜 Noedels', '🥩 Biefstuk'],
      ja: ['🍕 ピザ', '🍔 ハンバーガー', '🍣 寿司', '🍛 カレー', '🥗 サラダ', '🍝 パスタ', '🍜 ラーメン', '🥩 焼肉'],
      ko: ['🍕 피자', '🍔 햄버거', '🍣 초밥', '🍗 치킨', '🥗 샐러드', '🍝 파스타', '🍜 라면', '🥩 삼겹살'],
      zh: ['🍕 披萨', '🍔 汉堡', '🍣 寿司', '🍲 火锅', '🥗 沙拉', '🍝 意面', '🍜 拉面', '🥩 烤肉'],
      ru: ['🍕 Пицца', '🍔 Бургеры', '🍣 Суши', '🥟 Пельмени', '🥗 Салат', '🍝 Паста', '🍜 Борщ', '🥩 Шашлык']
    },
    numbers: {
      en: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      es: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      fr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      ru: ["1","2","3","4","5","6","7","8","9","10"],
      zh: ["1","2","3","4","5","6","7","8","9","10"],
      ko: ["1","2","3","4","5","6","7","8","9","10"],
      ja: ["1","2","3","4","5","6","7","8","9","10"],
      nl: ["1","2","3","4","5","6","7","8","9","10"],
      it: ["1","2","3","4","5","6","7","8","9","10"],
      pt: ["1","2","3","4","5","6","7","8","9","10"],
      de: ["1","2","3","4","5","6","7","8","9","10"]
    },
    truthdare: {
      en: ['Truth', 'Dare', 'Truth', 'Dare', 'Double Dare', 'Pass'],
      es: ['Verdad', 'Reto', 'Verdad', 'Reto', 'Doble Reto', 'Pasa el turno'],
      fr: ['Vérité', 'Action', 'Vérité', 'Action', 'Double Action', 'Passe ton tour'],
      ru: ["Правда","Действие","Правда","Действие","Супер действие","Пропуск"],
      zh: ["真心话","大冒险","真心话","大冒险","超级大冒险","跳过"],
      ko: ["진실","도전","진실","도전","더블 도전","패스"],
      ja: ["真実","挑戦","真実","挑戦","ダブル挑戦","パス"],
      nl: ["Doen","Durf","Doen","Durf","Dubbel Durf","Pas"],
      it: ["Verità","Obbligo","Verità","Obbligo","Doppio Obbligo","Passa"],
      pt: ["Verdade","Desafio","Verdade","Desafio","Super Desafio","Passa a vez"],
      de: ["Wahrheit","Pflicht","Wahrheit","Pflicht","Doppelte Pflicht","Aussetzen"]
    },
    magic8: {
      en: ['Yes definitely', 'Ask again later', 'Cannot predict now', 'Do not count on it', 'Most likely', 'Very doubtful'],
      es: ['Sí definitivamente', 'Pregunta más tarde', 'No puedo predecir', 'No cuentes con ello', 'Muy probable', 'Muy dudoso'],
      fr: ['Certainement', 'Demande plus tard', 'Impossible de prédire', 'Ne compte pas dessus', 'Très probable', 'Peu probable'],
      ru: ["Определенно да","Спроси позже","Не могу предсказать","Не рассчитывай на это","Весьма вероятно","Весьма сомнительно"],
      zh: ["毫无疑问","稍后再问","现在无法预测","不要抱太大希望","极有可能","非常值得怀疑"],
      ko: ["확실합니다","나중에 다시 물어보세요","지금은 예측 불가","기대하지 마세요","가능성이 높습니다","매우 의심스럽습니다"],
      ja: ["間違いなくそう","後でもう一度聞いて","今は予測できない","期待しないで","可能性が高い","極めて疑わしい"],
      nl: ["Zeker weten","Vraag later opnieuw","Nu niet te voorspellen","Reken er niet op","Hoogstwaarschijnlijk","Zeer twijfelachtig"],
      it: ["Certamente","Chiedi più tardi","Impossibile prevedere","Non contarci","Molto probabile","Molto dubbioso"],
      pt: ["Com certeza","Pergunte mais tarde","Não posso prever agora","Não conte com isso","Muito provável","Muito duvidoso"],
      de: ["Ganz sicher","Frag später nochmal","Nicht vorhersehbar","Verlass dich nicht darauf","Sehr wahrscheinlich","Sehr zweifelhaft"]
    },
    dice: {
      en: ['🎲 1', '🎲 2', '🎲 3', '🎲 4', '🎲 5', '🎲 6'],
      es: ['🎲 1', '🎲 2', '🎲 3', '🎲 4', '🎲 5', '🎲 6'],
      fr: ['🎲 1', '🎲 2', '🎲 3', '🎲 4', '🎲 5', '🎲 6'],
      ru: ["🎲 1","🎲 2","🎲 3","🎲 4","🎲 5","🎲 6"],
      zh: ["🎲 1","🎲 2","🎲 3","🎲 4","🎲 5","🎲 6"],
      ko: ["🎲 1","🎲 2","🎲 3","🎲 4","🎲 5","🎲 6"],
      ja: ["🎲 1","🎲 2","🎲 3","🎲 4","🎲 5","🎲 6"],
      nl: ["🎲 1","🎲 2","🎲 3","🎲 4","🎲 5","🎲 6"],
      it: ["🎲 1","🎲 2","🎲 3","🎲 4","🎲 5","🎲 6"],
      pt: ["🎲 1","🎲 2","🎲 3","🎲 4","🎲 5","🎲 6"],
      de: ["🎲 1","🎲 2","🎲 3","🎲 4","🎲 5","🎲 6"]
    },
    team: {
      en: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      es: ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4', 'Jugador 5', 'Jugador 6', 'Jugador 7', 'Jugador 8'],
      fr: ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4', 'Joueur 5', 'Joueur 6', 'Joueur 7', 'Joueur 8'],
      ru: ["Игрок 1","Игрок 2","Игрок 3","Игрок 4","Игрок 5","Игрок 6","Игрок 7","Игрок 8"],
      zh: ["玩家 1","玩家 2","玩家 3","玩家 4","玩家 5","玩家 6","玩家 7","玩家 8"],
      ko: ["플레이어 1","플레이어 2","플레이어 3","플레이어 4","플레이어 5","플레이어 6","플레이어 7","플레이어 8"],
      ja: ["プレイヤー 1","プレイヤー 2","プレイヤー 3","プレイヤー 4","プレイヤー 5","プレイヤー 6","プレイヤー 7","プレイヤー 8"],
      nl: ["Speler 1","Speler 2","Speler 3","Speler 4","Speler 5","Speler 6","Speler 7","Speler 8"],
      it: ["Giocatore 1","Giocatore 2","Giocatore 3","Giocatore 4","Giocatore 5","Giocatore 6","Giocatore 7","Giocatore 8"],
      pt: ["Jogador 1","Jogador 2","Jogador 3","Jogador 4","Jogador 5","Jogador 6","Jogador 7","Jogador 8"],
      de: ["Spieler 1","Spieler 2","Spieler 3","Spieler 4","Spieler 5","Spieler 6","Spieler 7","Spieler 8"]
    },
    rainbow: {
      en: ['Red', 'Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Purple', 'Pink'],
      es: ['Rojo', 'Naranja', 'Amarillo', 'Verde', 'Cian', 'Azul', 'Púrpura', 'Rosa'],
      fr: ['Rouge', 'Orange', 'Jaune', 'Vert', 'Cyan', 'Bleu', 'Violet', 'Rose'],
      ru: ["Красный","Оранжевый","Желтый","Зеленый","Голубой","Синий","Фиолетовый","Розовый"],
      zh: ["红色","橙色","黄色","绿色","青色","蓝色","紫色","粉色"],
      ko: ["빨강","주황","노랑","초록","시안","파랑","보라","분홍"],
      ja: ["赤","オレンジ","黄色","緑","シアン","青","紫","ピンク"],
      nl: ["Rood","Oranje","Geel","Groen","Cyaan","Blauw","Paars","Roze"],
      it: ["Rosso","Arancione","Giallo","Verde","Ciano","Blu","Viola","Rosa"],
      pt: ["Vermelho","Laranja","Amarelo","Verde","Ciano","Azul","Roxo","Rosa"],
      de: ["Rot","Orange","Gelb","Grün","Cyan","Blau","Lila","Rosa"]
    }
  };

  const state = {
    lang: 'en',
    slices: [],
    isSpinning: false,
    currentAngle: 0,
    spinDurationMs: 5000,
    soundEnabled: true,
    confettiEnabled: true,
    eliminateWinner: false,
    lastWinnerIndex: -1,
    audioCtx: null
  };

  function getAudioContext() {
    if (!state.soundEnabled) return null;
    if (!state.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        state.audioCtx = new AudioCtx();
      }
    }
    if (state.audioCtx && state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
    return state.audioCtx;
  }

  function playTickSound(frequencyMultiplier = 1) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(550 * frequencyMultiplier, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch (e) {}
  }

  function playCelebrationFanfare() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const chord = [523.25, 659.25, 783.99, 1046.50];
      const now = ctx.currentTime;

      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + (idx * 0.08);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.22, startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 1.25);
      });
    } catch (e) {}
  }

  const confettiCanvas = document.getElementById('confettiCanvas');
  const confettiCtx = confettiCanvas ? confettiCanvas.getContext('2d') : null;
  let confettiParticles = [];
  let confettiAnimFrame = null;

  function resizeConfettiCanvas() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeConfettiCanvas);
  resizeConfettiCanvas();

  function triggerConfetti() {
    if (!state.confettiEnabled || !confettiCtx) return;

    confettiParticles = [];
    const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#3b82f6', '#f43f5e'];
    const particleCount = 140;

    for (let i = 0; i < particleCount; i++) {
      confettiParticles.push({
        x: confettiCanvas.width / 2 + (Math.random() - 0.5) * 100,
        y: confettiCanvas.height / 2 + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 18,
        vy: -Math.random() * 16 - 4,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        tilt: Math.random() * 10,
        tiltSpeed: Math.random() * 0.1 + 0.05,
        opacity: 1
      });
    }

    if (confettiAnimFrame) cancelAnimationFrame(confettiAnimFrame);
    renderConfetti();
  }

  function renderConfetti() {
    if (!confettiCtx || confettiParticles.length === 0) return;

    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.tilt += p.tiltSpeed;
      p.opacity -= 0.007;

      if (p.opacity <= 0 || p.y > confettiCanvas.height + 50) {
        confettiParticles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.globalAlpha = Math.max(0, p.opacity);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * Math.cos(p.tilt));
      confettiCtx.restore();
    }

    if (confettiParticles.length > 0) {
      confettiAnimFrame = requestAnimationFrame(renderConfetti);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  const wheelCanvas = document.getElementById('wheelCanvas');
  const wheelCtx = wheelCanvas ? wheelCanvas.getContext('2d') : null;
  const wheelPointer = document.getElementById('wheelPointer');

  function resizeWheelCanvas() {
    if (!wheelCanvas) return;
    const rect = wheelCanvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const size = Math.min(rect.width, 520);

    wheelCanvas.width = size * dpr;
    wheelCanvas.height = size * dpr;
    wheelCtx.scale(dpr, dpr);

    drawWheel();
  }
  window.addEventListener('resize', resizeWheelCanvas);

  function drawWheel() {
    if (!wheelCtx || !wheelCanvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = wheelCanvas.width / dpr;
    const height = wheelCanvas.height / dpr;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 8;

    wheelCtx.clearRect(0, 0, width, height);

    const slices = state.slices;
    const count = slices.length;
    if (count === 0) return;

    const arcStep = (2 * Math.PI) / count;

    wheelCtx.save();
    wheelCtx.translate(centerX, centerY);
    wheelCtx.rotate(state.currentAngle);

    // Rim
    wheelCtx.save();
    wheelCtx.beginPath();
    wheelCtx.arc(0, 0, radius, 0, 2 * Math.PI);
    wheelCtx.lineWidth = 14;
    wheelCtx.strokeStyle = '#1e293b';
    wheelCtx.stroke();
    wheelCtx.restore();

    // Slices
    for (let i = 0; i < count; i++) {
      const slice = slices[i];
      const startAngle = i * arcStep;
      const endAngle = startAngle + arcStep;

      wheelCtx.beginPath();
      wheelCtx.moveTo(0, 0);
      wheelCtx.arc(0, 0, radius - 6, startAngle, endAngle);
      wheelCtx.closePath();

      wheelCtx.fillStyle = slice.color;
      wheelCtx.fill();

      wheelCtx.lineWidth = 1.5;
      wheelCtx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      wheelCtx.stroke();

      // Text
      wheelCtx.save();
      const textAngle = startAngle + arcStep / 2;
      wheelCtx.rotate(textAngle);

      wheelCtx.fillStyle = getContrastColor(slice.color);
      wheelCtx.textAlign = 'right';
      wheelCtx.textBaseline = 'middle';

      const fontSize = count > 24 ? 11 : count > 16 ? 13 : count > 10 ? 15 : 17;
      wheelCtx.font = `bold ${fontSize}px "Outfit", "Inter", sans-serif`;

      let displayText = slice.text;
      const maxTextWidth = radius * 0.65;
      if (wheelCtx.measureText(displayText).width > maxTextWidth) {
        while (displayText.length > 3 && wheelCtx.measureText(displayText + '…').width > maxTextWidth) {
          displayText = displayText.slice(0, -1);
        }
        displayText += '…';
      }

      wheelCtx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      wheelCtx.shadowBlur = 4;
      wheelCtx.shadowOffsetX = 1;
      wheelCtx.shadowOffsetY = 1;

      wheelCtx.fillText(displayText, radius - 24, 0);
      wheelCtx.restore();
    }

    // Outer rim LED pegs
    for (let i = 0; i < count; i++) {
      const pegAngle = i * arcStep;
      const px = Math.cos(pegAngle) * (radius - 5);
      const py = Math.sin(pegAngle) * (radius - 5);

      wheelCtx.beginPath();
      wheelCtx.arc(px, py, 4, 0, 2 * Math.PI);
      wheelCtx.fillStyle = '#fbbf24';
      wheelCtx.shadowColor = '#f59e0b';
      wheelCtx.shadowBlur = 6;
      wheelCtx.fill();

      wheelCtx.beginPath();
      wheelCtx.arc(px, py, 2, 0, 2 * Math.PI);
      wheelCtx.fillStyle = '#ffffff';
      wheelCtx.fill();
    }

    wheelCtx.restore();

    // Center metallic ring
    wheelCtx.save();
    wheelCtx.translate(centerX, centerY);
    wheelCtx.beginPath();
    wheelCtx.arc(0, 0, 48, 0, 2 * Math.PI);
    wheelCtx.fillStyle = '#0f172a';
    wheelCtx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    wheelCtx.shadowBlur = 12;
    wheelCtx.fill();
    wheelCtx.restore();
  }

  function getContrastColor(hexColor) {
    if (!hexColor || hexColor.charAt(0) !== '#') return '#ffffff';
    let hex = hexColor.substring(1);
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 155 ? '#0f172a' : '#ffffff';
  }

  let spinAnimation = null;
  let lastTickSlice = -1;

  function spinWheel() {
    if (state.isSpinning || state.slices.length < 2) return;

    state.isSpinning = true;
    updateButtonStates();

    trackEvent('spin_start', {
      slice_count: state.slices.length,
      duration_ms: state.spinDurationMs,
      lang: state.lang
    });

    const randArr = new Uint32Array(1);
    window.crypto.getRandomValues(randArr);
    const randomFraction = randArr[0] / (0xffffffff + 1);

    const count = state.slices.length;
    const arcStep = (2 * Math.PI) / count;

    const winningIndex = Math.floor(randomFraction * count);
    state.lastWinnerIndex = winningIndex;

    const sliceCenter = winningIndex * arcStep + (arcStep / 2);
    const pointerAngle = (3 * Math.PI) / 2;
    let targetRelativeAngle = pointerAngle - sliceCenter;
    while (targetRelativeAngle < 0) targetRelativeAngle += 2 * Math.PI;

    const fullSpins = (Math.floor(Math.random() * 4) + 6) * (2 * Math.PI);
    const startAngle = state.currentAngle % (2 * Math.PI);
    const totalRotation = fullSpins + targetRelativeAngle - startAngle;

    const startTime = performance.now();
    const duration = state.spinDurationMs;

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4.5);
      state.currentAngle = startAngle + totalRotation * ease;

      const currentNorm = (state.currentAngle + Math.PI / 2) % (2 * Math.PI);
      const currentSliceIdx = Math.floor(((2 * Math.PI - currentNorm) % (2 * Math.PI)) / arcStep);

      if (currentSliceIdx !== lastTickSlice) {
        lastTickSlice = currentSliceIdx;
        animatePointerTick();
        const speedRatio = 1 - progress;
        playTickSound(0.9 + speedRatio * 0.4);
      }

      drawWheel();

      if (progress < 1) {
        spinAnimation = requestAnimationFrame(animate);
      } else {
        state.isSpinning = false;
        state.currentAngle = startAngle + totalRotation;
        drawWheel();
        updateButtonStates();
        onSpinComplete(winningIndex);
      }
    }

    lastTickSlice = -1;
    spinAnimation = requestAnimationFrame(animate);
  }

  function animatePointerTick() {
    if (!wheelPointer) return;
    wheelPointer.classList.remove('tick');
    void wheelPointer.offsetWidth;
    wheelPointer.classList.add('tick');
  }

  function onSpinComplete(winnerIndex) {
    const winner = state.slices[winnerIndex];
    if (!winner) return;

    playCelebrationFanfare();
    triggerConfetti();

    trackEvent('spin_complete', {
      winner_text: winner.text,
      slice_index: winnerIndex,
      total_slices: state.slices.length,
      lang: state.lang
    });

    const modal = document.getElementById('winnerModal');
    const winnerText = document.getElementById('winnerResultText');
    if (modal && winnerText) {
      winnerText.textContent = winner.text;
      winnerText.style.borderColor = winner.color;
      winnerText.style.boxShadow = `0 0 30px ${winner.color}66`;

      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }
    }
  }

  function updateButtonStates() {
    const spinCenterBtn = document.getElementById('wheelCenterBtn');
    const spinBarBtn = document.getElementById('spinBarBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const sortBtn = document.getElementById('sortBtn');

    const disabled = state.isSpinning || state.slices.length < 2;

    if (spinCenterBtn) spinCenterBtn.disabled = disabled;
    if (spinBarBtn) spinBarBtn.disabled = disabled;
    if (shuffleBtn) shuffleBtn.disabled = state.isSpinning;
    if (sortBtn) sortBtn.disabled = state.isSpinning;
  }

  function setSlices(items) {
    state.slices = items.map((item, index) => {
      if (typeof item === 'string') {
        return {
          id: 'slice_' + Date.now() + '_' + index,
          text: item.trim(),
          color: COLOR_PALETTES[index % COLOR_PALETTES.length]
        };
      }
      return {
        id: item.id || ('slice_' + Date.now() + '_' + index),
        text: item.text.trim(),
        color: item.color || COLOR_PALETTES[index % COLOR_PALETTES.length]
      };
    }).filter(s => s.text.length > 0);

    renderEntriesList();
    drawWheel();
    updateButtonStates();
    saveToStorage();
  }

  function renderEntriesList() {
    const list = document.getElementById('entriesList');
    const countEl = document.getElementById('entriesCountNum');
    if (!list) return;

    list.innerHTML = '';
    if (countEl) countEl.textContent = state.slices.length;

    state.slices.forEach((slice, idx) => {
      const row = document.createElement('div');
      row.className = 'entry-row';
      const tColor = (I18N[state.lang] && I18N[state.lang].entryChangeColor) || "Change color";
      const tClone = (I18N[state.lang] && I18N[state.lang].entryDuplicate) || "Duplicate";
      const tDelete = (I18N[state.lang] && I18N[state.lang].entryDelete) || "Delete";
      row.innerHTML = `
        <input type="color" class="entry-color-picker" value="${slice.color}" data-id="${slice.id}" title="${tColor}">
        <input type="text" class="entry-text-input" value="${escapeHtml(slice.text)}" data-id="${slice.id}" maxlength="60">
        <div class="entry-actions">
          <button type="button" class="entry-btn clone" data-id="${slice.id}" title="${tClone}">📋</button>
          <button type="button" class="entry-btn delete" data-id="${slice.id}" title="${tDelete}">✕</button>
        </div>
      `;

      row.querySelector('.entry-color-picker').addEventListener('input', (e) => {
        slice.color = e.target.value;
        drawWheel();
        saveToStorage();
      });

      row.querySelector('.entry-text-input').addEventListener('change', (e) => {
        const val = e.target.value.trim();
        if (val) {
          slice.text = val;
          drawWheel();
          saveToStorage();
        } else {
          deleteSlice(slice.id);
        }
      });

      row.querySelector('.clone').addEventListener('click', () => {
        duplicateSlice(slice.id);
      });

      row.querySelector('.delete').addEventListener('click', () => {
        deleteSlice(slice.id);
      });

      list.appendChild(row);
    });
  }

  function addSlice(text) {
    if (!text || !text.trim()) return;
    const color = COLOR_PALETTES[state.slices.length % COLOR_PALETTES.length];
    state.slices.push({
      id: 'slice_' + Date.now(),
      text: text.trim(),
      color: color
    });
    renderEntriesList();
    drawWheel();
    updateButtonStates();
    saveToStorage();
    trackEvent('entry_added', { total: state.slices.length });
  }

  function duplicateSlice(id) {
    const idx = state.slices.findIndex(s => s.id === id);
    if (idx !== -1) {
      const target = state.slices[idx];
      const newSlice = {
        id: 'slice_' + Date.now(),
        text: target.text,
        color: COLOR_PALETTES[(idx + 1) % COLOR_PALETTES.length]
      };
      state.slices.splice(idx + 1, 0, newSlice);
      renderEntriesList();
      drawWheel();
      updateButtonStates();
      saveToStorage();
    }
  }

  function deleteSlice(id) {
    if (state.slices.length <= 1) {
      const msg = (I18N[state.lang] && I18N[state.lang].minEntryAlert) || "You need at least 1 entry on the wheel.";
      alert(msg);
      return;
    }
    state.slices = state.slices.filter(s => s.id !== id);
    renderEntriesList();
    drawWheel();
    updateButtonStates();
    saveToStorage();
  }

  function shuffleSlices() {
    if (state.isSpinning || state.slices.length < 2) return;
    for (let i = state.slices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.slices[i], state.slices[j]] = [state.slices[j], state.slices[i]];
    }
    renderEntriesList();
    drawWheel();
    saveToStorage();
    trackEvent('wheel_shuffled', { count: state.slices.length });
  }

  function sortSlices() {
    if (state.isSpinning || state.slices.length < 2) return;
    state.slices.sort((a, b) => a.text.localeCompare(b.text));
    renderEntriesList();
    drawWheel();
    saveToStorage();
  }

  function removeLastWinner() {
    if (state.lastWinnerIndex >= 0 && state.lastWinnerIndex < state.slices.length) {
      state.slices.splice(state.lastWinnerIndex, 1);
      state.lastWinnerIndex = -1;
      renderEntriesList();
      drawWheel();
      updateButtonStates();
      saveToStorage();
      closeWinnerModal();
      trackEvent('winner_removed', { remaining: state.slices.length });
    }
  }

  function closeWinnerModal() {
    const modal = document.getElementById('winnerModal');
    if (modal) {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
    }
  }

  function loadPreset(key) {
    const preset = PRESET_DATA[key];
    if (!preset) return;
    const items = preset[state.lang] || preset['en'];
    setSlices(items);
    trackEvent('preset_selected', { preset_key: key, lang: state.lang });
  }

  function setLanguage(lang) {
    if (!I18N[lang]) lang = 'en';
    state.lang = lang;
    try { localStorage.setItem('rollypop_lang', lang); } catch (e) {}
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    const langNames = {
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
    const langName = langNames[lang] || 'English';
    const currentLabel = document.getElementById('currentLangLabel');
    if (currentLabel) currentLabel.textContent = langName;

    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (key === 'heroTitle') {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    if (dict.siteTitle) document.title = dict.siteTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.siteDesc) metaDesc.setAttribute('content', dict.siteDesc);
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && dict.metaKeywords) metaKeywords.setAttribute('content', dict.metaKeywords);

    renderEntriesList();
    checkAndTranslateDefaultPreset(lang);

    // Amazon ads are only displayed for English language
    const amazonSection = document.getElementById('amazonProducts');
    if (amazonSection) {
      amazonSection.style.display = (lang === 'en') ? '' : 'none';
    }

    trackEvent('language_changed', { lang: lang });
  }

  function normalizeForCompare(str) {
    return String(str || '')
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function checkAndTranslateDefaultPreset(lang) {
    if (!state.slices || state.slices.length === 0) return;
    const currentNorm = state.slices.map(s => normalizeForCompare(s.text)).join('|||');

    // Known legacy food lists from previous builds so returning visitors get instant localization
    const legacyVariants = [
      ['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Tacos', '🥗 Salad', '🍝 Pasta', '🍜 Ramen', '🥩 BBQ'],
      ['🍕 Pizza', '🍔 Hamburguesa', '🍣 Sushi', '🌮 Tacos', '🥗 Ensalada', '🍝 Pasta', '🍜 Ramen', '🥩 Carnita Asada'],
      ['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Tacos', '🥗 Salade', '🍝 Pâtes', '🍜 Ramen', '🥩 Grillades'],
      ['🍕 Pizza', '🍔 Burger', '🍣 Sushi', '🌮 Tacos', '🥗 Salat', '🍝 Pasta', '🍜 Ramen', '🥩 Grillfleisch'],
      ['🍕 Pizza', '🍔 Burger', '🍣 Sushi', '🌮 Tacos', '🥗 Insalata', '🍝 Pasta', '🍜 Ramen', '🥩 Bistecca'],
      ['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Tacos', '🥗 Salade', '🍝 Pasta', '🍜 Ramen', '🥩 BBQ']
    ];

    for (const legacyList of legacyVariants) {
      if (currentNorm === legacyList.map(s => normalizeForCompare(s)).join('|||')) {
        const targetItems = PRESET_DATA.food[lang] || PRESET_DATA.food['en'];
        const updatedSlices = state.slices.map((slice, idx) => ({
          ...slice,
          text: targetItems[idx] !== undefined ? targetItems[idx] : slice.text
        }));
        setSlices(updatedSlices);
        return;
      }
    }

    for (const [key, data] of Object.entries(PRESET_DATA)) {
      for (const [presetLang, items] of Object.entries(data)) {
        const presetNorm = items.map(s => normalizeForCompare(s)).join('|||');
        if (currentNorm === presetNorm) {
          const targetItems = data[lang] || data['en'];
          const updatedSlices = state.slices.map((slice, idx) => ({
            ...slice,
            text: targetItems[idx] !== undefined ? targetItems[idx] : slice.text
          }));
          setSlices(updatedSlices);
          return;
        }
      }
    }
  }

  function saveToStorage() {
    try {
      const payload = {
        slices: state.slices,
        soundEnabled: state.soundEnabled,
        spinDurationMs: state.spinDurationMs,
        confettiEnabled: state.confettiEnabled
      };
      localStorage.setItem('rollypop_data', JSON.stringify(payload));
    } catch (e) {}
  }

  function loadFromStorageOrURL() {
    try {
      if (window.location.hash && window.location.hash.startsWith('#wheel=')) {
        const encoded = window.location.hash.substring(7);
        const json = decodeURIComponent(atob(encoded));
        const items = JSON.parse(json);
        if (Array.isArray(items) && items.length > 0) {
          setSlices(items);
          return;
        }
      }
    } catch (e) {
      console.warn("Could not parse shared wheel from URL hash", e);
    }

    try {
      const saved = localStorage.getItem('rollypop_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.slices) && parsed.slices.length > 0) {
          state.soundEnabled = parsed.soundEnabled !== false;
          state.confettiEnabled = parsed.confettiEnabled !== false;
          state.spinDurationMs = parsed.spinDurationMs || 5000;
          setSlices(parsed.slices);
          checkAndTranslateDefaultPreset(state.lang);
          return;
        }
      }
    } catch (e) {}

    const defaultItems = PRESET_DATA.food[state.lang] || PRESET_DATA.food['en'];
    setSlices(defaultItems);
  }

  function generateShareLink() {
    try {
      const simpleSlices = state.slices.map(s => ({ text: s.text, color: s.color }));
      const base64 = btoa(encodeURIComponent(JSON.stringify(simpleSlices)));
      const url = new URL(window.location.href);
      url.hash = `wheel=${base64}`;
      return url.href;
    } catch (e) {
      return window.location.href;
    }
  }

  function trackEvent(name, params = {}) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function setupEventListeners() {
    const spinCenterBtn = document.getElementById('wheelCenterBtn');
    const spinBarBtn = document.getElementById('spinBarBtn');
    if (spinCenterBtn) spinCenterBtn.addEventListener('click', spinWheel);
    if (spinBarBtn) spinBarBtn.addEventListener('click', spinWheel);

    const shuffleBtn = document.getElementById('shuffleBtn');
    const sortBtn = document.getElementById('sortBtn');
    if (shuffleBtn) shuffleBtn.addEventListener('click', shuffleSlices);
    if (sortBtn) sortBtn.addEventListener('click', sortSlices);

    const addItemForm = document.getElementById('addItemForm');
    const newItemInput = document.getElementById('newItemInput');
    if (addItemForm) {
      addItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (newItemInput && newItemInput.value.trim()) {
          addSlice(newItemInput.value.trim());
          newItemInput.value = '';
          newItemInput.focus();
        }
      });
    }

    const bulkImportBtn = document.getElementById('bulkImportBtn');
    const bulkInput = document.getElementById('bulkInput');
    if (bulkImportBtn && bulkInput) {
      bulkImportBtn.addEventListener('click', () => {
        const text = bulkInput.value.trim();
        if (!text) return;
        const items = text
          .split(/[\n,]+/)
          .map(t => t.trim())
          .filter(t => t.length > 0);

        if (items.length > 0) {
          setSlices(items);
          bulkInput.value = '';
          document.querySelector('[data-tab="entries"]').click();
          trackEvent('bulk_import_applied', { count: items.length });
        }
      });
    }

    document.querySelectorAll('.preset-card').forEach(card => {
      card.addEventListener('click', () => {
        const key = card.dataset.preset;
        if (key) {
          loadPreset(key);
          document.querySelector('[data-tab="entries"]').click();
        }
      });
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const pane = document.getElementById(`tab-${targetTab}`);
        if (pane) pane.classList.add('active');

        if (targetTab === 'share') {
          const shareInput = document.getElementById('shareUrlInput');
          if (shareInput) shareInput.value = generateShareLink();
        }
      });
    });

    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
      soundToggle.checked = state.soundEnabled;
      soundToggle.addEventListener('change', (e) => {
        state.soundEnabled = e.target.checked;
        saveToStorage();
        trackEvent('sound_toggle', { enabled: state.soundEnabled });
      });
    }

    const confettiToggle = document.getElementById('confettiToggle');
    if (confettiToggle) {
      confettiToggle.checked = state.confettiEnabled;
      confettiToggle.addEventListener('change', (e) => {
        state.confettiEnabled = e.target.checked;
        saveToStorage();
      });
    }

    const durationSelect = document.getElementById('durationSelect');
    if (durationSelect) {
      durationSelect.value = state.spinDurationMs;
      durationSelect.addEventListener('change', (e) => {
        state.spinDurationMs = parseInt(e.target.value, 10);
        saveToStorage();
      });
    }

    const copyLinkBtn = document.getElementById('copyLinkBtn');
    if (copyLinkBtn) {
      copyLinkBtn.addEventListener('click', async () => {
        const link = generateShareLink();
        try {
          await navigator.clipboard.writeText(link);
          const orig = copyLinkBtn.textContent;
          copyLinkBtn.textContent = I18N[state.lang].copiedNotice || "Copied!";
          setTimeout(() => { copyLinkBtn.textContent = orig; }, 2500);
          trackEvent('share_link_copied');
        } catch (err) {
          const promptMsg = (I18N[state.lang] && I18N[state.lang].copyUrlPrompt) || "Copy this URL:";
          prompt(promptMsg, link);
        }
      });
    }

    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const exitFullscreenBtn = document.getElementById('exitFullscreenBtn');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    if (exitFullscreenBtn) {
      exitFullscreenBtn.addEventListener('click', toggleFullscreen);
    }

    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const spinAgainBtn = document.getElementById('modalSpinAgainBtn');
    const removeWinnerBtn = document.getElementById('modalRemoveWinnerBtn');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeWinnerModal);
    if (spinAgainBtn) {
      spinAgainBtn.addEventListener('click', () => {
        closeWinnerModal();
        setTimeout(spinWheel, 300);
      });
    }
    if (removeWinnerBtn) {
      removeWinnerBtn.addEventListener('click', removeLastWinner);
    }

    const winnerModal = document.getElementById('winnerModal');
    if (winnerModal) {
      winnerModal.addEventListener('click', (e) => {
        const rect = winnerModal.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          closeWinnerModal();
        }
      });
    }

    const langBtn = document.getElementById('langDropdownBtn');
    const langDropdown = document.getElementById('langDropdown');
    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
      });

      document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
      });

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const lang = opt.dataset.lang;
          try { localStorage.setItem('rollypop_lang', lang); } catch (e) {}
          langDropdown.classList.remove('active');
          const targetUrl = lang === 'en' ? '/' : ('/' + lang + '/');
          if (window.location.pathname !== targetUrl) {
            window.location.href = targetUrl + (window.location.hash || '');
          }
        });
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        spinWheel();
      }
    });
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) docEl.requestFullscreen();
      else if (docEl.webkitRequestFullscreen) docEl.webkitRequestFullscreen();
      document.body.classList.add('is-fullscreen');
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      document.body.classList.remove('is-fullscreen');
    }
    setTimeout(resizeWheelCanvas, 200);
  }

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      document.body.classList.remove('is-fullscreen');
    }
  });

  // -------------------------------------------------------------------------
  // Progressive Web App (PWA) Management
  // -------------------------------------------------------------------------
  let deferredInstallPrompt = null;

  function initPWA() {
    // 1. Register Service Worker with relative path
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
          .then((reg) => {
            console.log('[PWA] Service Worker registered with scope:', reg.scope);
            reg.addEventListener('updatefound', () => {
              const newWorker = reg.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('[PWA] New version ready.');
                  }
                });
              }
            });
          })
          .catch((err) => {
            console.warn('[PWA] Service Worker registration failed:', err);
          });
      });
    }

    // 2. Check if running in standalone mode (already installed app)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                         window.navigator.standalone === true ||
                         document.referrer.includes('android-app://');

    if (isStandalone) {
      document.body.classList.add('is-pwa-standalone');
      console.log('[PWA] Running in standalone mode.');
      return;
    }

    const installAppBtn = document.getElementById('installAppBtn');
    const pwaBanner = document.getElementById('pwaInstallBanner');
    const pwaBannerInstallBtn = document.getElementById('pwaBannerInstallBtn');
    const pwaBannerDismissBtn = document.getElementById('pwaBannerDismissBtn');
    const iosModal = document.getElementById('iosInstallModal');
    const iosModalCloseBtn = document.getElementById('iosModalCloseBtn');
    const iosModalGotItBtn = document.getElementById('iosModalGotItBtn');

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    function handleInstallTrigger() {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('[PWA] User accepted install');
            trackEvent('pwa_installed', { outcome: 'accepted' });
          } else {
            console.log('[PWA] User dismissed install prompt');
            trackEvent('pwa_install_dismissed', { outcome: 'dismissed' });
          }
          deferredInstallPrompt = null;
          if (installAppBtn) installAppBtn.style.display = 'none';
          if (pwaBanner) pwaBanner.style.display = 'none';
        });
      } else if (isIOS) {
        if (iosModal && typeof iosModal.showModal === 'function') {
          iosModal.showModal();
        }
      } else {
        const currentLang = state.lang || 'en';
        const msg = currentLang === 'es'
          ? 'Para instalar la app, busca el ícono de "Instalar" en la barra de tu navegador o pulsa en el menú (⋮) > "Instalar RollyPop".'
          : (currentLang === 'fr'
            ? 'Pour installer l\'application, recherchez l\'icône "Installer" dans la barre du navigateur ou le menu (⋮) > "Installer RollyPop".'
            : 'To install the app, look for the "Install" icon in your browser address bar or menu (⋮) > "Install RollyPop".');
        alert(msg);
      }
    }

    if (installAppBtn) {
      installAppBtn.addEventListener('click', handleInstallTrigger);
    }
    if (pwaBannerInstallBtn) {
      pwaBannerInstallBtn.addEventListener('click', handleInstallTrigger);
    }

    if (pwaBannerDismissBtn) {
      pwaBannerDismissBtn.addEventListener('click', () => {
        if (pwaBanner) pwaBanner.style.display = 'none';
        localStorage.setItem('rollypop_pwa_dismissed', Date.now().toString());
      });
    }

    if (iosModalCloseBtn) {
      iosModalCloseBtn.addEventListener('click', () => iosModal.close());
    }
    if (iosModalGotItBtn) {
      iosModalGotItBtn.addEventListener('click', () => iosModal.close());
    }
    if (iosModal) {
      iosModal.addEventListener('click', (e) => {
        const rect = iosModal.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) iosModal.close();
      });
    }

    // Android & Chrome beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      console.log('[PWA] beforeinstallprompt captured');

      if (installAppBtn) {
        installAppBtn.style.display = 'inline-flex';
      }

      const lastDismissed = localStorage.getItem('rollypop_pwa_dismissed');
      const now = Date.now();
      const fiveDaysMs = 5 * 24 * 60 * 60 * 1000;
      const isMobile = window.innerWidth <= 768;

      if (pwaBanner && isMobile && (!lastDismissed || (now - parseInt(lastDismissed, 10)) > fiveDaysMs)) {
        setTimeout(() => {
          if (!isStandalone && deferredInstallPrompt && pwaBanner) {
            pwaBanner.style.display = 'flex';
          }
        }, 2000);
      }
    });

    // iOS Safari: show install button in header & banner
    if (isIOS && !isStandalone) {
      if (installAppBtn) {
        installAppBtn.style.display = 'inline-flex';
      }
      const lastDismissed = localStorage.getItem('rollypop_pwa_dismissed');
      const now = Date.now();
      const fiveDaysMs = 5 * 24 * 60 * 60 * 1000;
      if (pwaBanner && (!lastDismissed || (now - parseInt(lastDismissed, 10)) > fiveDaysMs)) {
        setTimeout(() => {
          if (!isStandalone && pwaBanner) {
            pwaBanner.style.display = 'flex';
          }
        }, 2500);
      }
    }

    // App installed event
    window.addEventListener('appinstalled', () => {
      console.log('[PWA] App successfully installed');
      deferredInstallPrompt = null;
      if (installAppBtn) installAppBtn.style.display = 'none';
      if (pwaBanner) pwaBanner.style.display = 'none';
      document.body.classList.add('is-pwa-standalone');
      trackEvent('pwa_installed_success', {});
    });
  }

  function init() {
    // Language is dictated by the URL (/ = en, /es/, /fr/) via <html lang>.
    const pageLang = (document.documentElement.lang || 'en').toLowerCase().slice(0, 2);
    const initialLang = I18N[pageLang] ? pageLang : 'en';
    state.lang = initialLang;

    setupEventListeners();
    setLanguage(initialLang);
    loadFromStorageOrURL();
    checkAndTranslateDefaultPreset(initialLang);
    resizeWheelCanvas();
    monitorAdSlots();
    initPWA();
  }

  function monitorAdSlots() {
    const topAd = document.getElementById('topAdSlot');
    if (!topAd) return;
    const checkFilled = () => {
      const ins = topAd.querySelector('ins.adsbygoogle');
      if (ins && (ins.getAttribute('data-ad-status') === 'filled' || ins.querySelector('iframe'))) {
        topAd.closest('.ad-slot-wrapper')?.classList.add('is-filled');
      }
    };
    checkFilled();
    try {
      const observer = new MutationObserver(checkFilled);
      observer.observe(topAd, { childList: true, subtree: true, attributes: true });
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
