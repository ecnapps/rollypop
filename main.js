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
      faq6A: "No. All your wheel entries, presets, and settings remain 100% private in your local browser storage. We never upload or track your lists."
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
      faq6A: "No. Todas tus listas, plantillas y configuraciones se guardan exclusivamente en la memoria de tu navegador de forma 100% privada."
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
      faq6A: "Non. Toutes vos options et réglages restent 100% privés dans le stockage local de votre navigateur."
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
      fr: ['Oui', 'Non', 'Peut-être', 'Rejouer']
    },
    food: {
      en: ['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Tacos', '🥗 Salad', '🍝 Pasta', '🍜 Ramen', '🥩 BBQ'],
      es: ['🍕 Pizza', '🍔 Hamburguesa', '🍣 Sushi', '🌮 Tacos', '🥗 Ensalada', '🍝 Pasta', '🍜 Ramen', '🥩 Carnita Asada'],
      fr: ['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Tacos', '🥗 Salade', '🍝 Pâtes', '🍜 Ramen', '🥩 Grillades']
    },
    numbers: {
      en: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      es: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      fr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    truthdare: {
      en: ['Truth', 'Dare', 'Truth', 'Dare', 'Double Dare', 'Pass'],
      es: ['Verdad', 'Reto', 'Verdad', 'Reto', 'Doble Reto', 'Pasa el turno'],
      fr: ['Vérité', 'Action', 'Vérité', 'Action', 'Double Action', 'Passe ton tour']
    },
    magic8: {
      en: ['Yes definitely', 'Ask again later', 'Cannot predict now', 'Do not count on it', 'Most likely', 'Very doubtful'],
      es: ['Sí definitivamente', 'Pregunta más tarde', 'No puedo predecir', 'No cuentes con ello', 'Muy probable', 'Muy dudoso'],
      fr: ['Certainement', 'Demande plus tard', 'Impossible de prédire', 'Ne compte pas dessus', 'Très probable', 'Peu probable']
    },
    dice: {
      en: ['🎲 1', '🎲 2', '🎲 3', '🎲 4', '🎲 5', '🎲 6'],
      es: ['🎲 1', '🎲 2', '🎲 3', '🎲 4', '🎲 5', '🎲 6'],
      fr: ['🎲 1', '🎲 2', '🎲 3', '🎲 4', '🎲 5', '🎲 6']
    },
    team: {
      en: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      es: ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4', 'Jugador 5', 'Jugador 6', 'Jugador 7', 'Jugador 8'],
      fr: ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4', 'Joueur 5', 'Joueur 6', 'Joueur 7', 'Joueur 8']
    },
    rainbow: {
      en: ['Red', 'Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Purple', 'Pink'],
      es: ['Rojo', 'Naranja', 'Amarillo', 'Verde', 'Cian', 'Azul', 'Púrpura', 'Rosa'],
      fr: ['Rouge', 'Orange', 'Jaune', 'Vert', 'Cyan', 'Bleu', 'Violet', 'Rose']
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
      row.innerHTML = `
        <input type="color" class="entry-color-picker" value="${slice.color}" data-id="${slice.id}" title="Change color">
        <input type="text" class="entry-text-input" value="${escapeHtml(slice.text)}" data-id="${slice.id}" maxlength="60">
        <div class="entry-actions">
          <button type="button" class="entry-btn clone" data-id="${slice.id}" title="Duplicate">📋</button>
          <button type="button" class="entry-btn delete" data-id="${slice.id}" title="Delete">✕</button>
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
      alert("You need at least 1 entry on the wheel.");
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
    document.documentElement.lang = lang === 'es' ? 'es' : (lang === 'fr' ? 'fr' : 'en');

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    const currentFlag = lang === 'es' ? '🌎/🇲🇽 ES' : (lang === 'fr' ? '🇨🇦/🇫🇷 FR' : '🇺🇸/🇨🇦 EN');
    const currentLabel = document.getElementById('currentLangLabel');
    if (currentLabel) currentLabel.textContent = currentFlag;

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

    if (dict.siteTitle) document.title = dict.siteTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.siteDesc) metaDesc.setAttribute('content', dict.siteDesc);

    checkAndTranslateDefaultPreset(lang);
    trackEvent('language_changed', { lang: lang });
  }

  function checkAndTranslateDefaultPreset(lang) {
    const prevItems = state.slices.map(s => s.text);
    for (const [key, data] of Object.entries(PRESET_DATA)) {
      for (const [l, items] of Object.entries(data)) {
        if (JSON.stringify(prevItems) === JSON.stringify(items)) {
          setSlices(data[lang] || data['en']);
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
          prompt("Copy this URL:", link);
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
          setLanguage(lang);
          langDropdown.classList.remove('active');
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

    // Remember explicit language choice made through footer language links
    document.querySelectorAll('a[data-set-lang]').forEach(a => {
      a.addEventListener('click', () => {
        try { localStorage.setItem('rollypop_lang', a.dataset.setLang); } catch (e) {}
      });
    });

    setupEventListeners();
    setLanguage(initialLang);
    loadFromStorageOrURL();
    resizeWheelCanvas();
    validateAffiliateAds();
    initPWA();
  }

  // Validate Amazon affiliate product cards: omit any card whose product is 404 or missing
  function validateAffiliateAds() {
    const cards = document.querySelectorAll('#amazonProducts .product-card');
    if (!cards.length) return;

    cards.forEach(card => {
      const link = card.querySelector('a.product-cta');
      if (!link || !link.href) return;

      const checkUrl = 'https://ecn-apps.com/api/og-image?url=' + encodeURIComponent(link.href) + '&validate=1';
      fetch(checkUrl, { method: 'GET' })
        .then(res => {
          if (res.status === 404) {
            card.remove();
            const grid = document.querySelector('#amazonProducts .products-grid');
            if (grid && grid.querySelectorAll('.product-card').length === 0) {
              document.getElementById('amazonProducts')?.remove();
            }
          }
        })
        .catch(() => {});
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
