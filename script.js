'use strict';

/* ──────────────────────────────────────────────
   BASE DE DONNÉES DES 15 VILLES
────────────────────────────────────────────── */

const CITIES = {

  tanger:{
    name:'Tanger',eyebrow:'Nord du Maroc',subtitle:'Détroit de Gibraltar · Fondée ~Xe s. av. J.-C.',
   gradient: "url('https://trendeviajes.com/wp-content/uploads/2025/11/panoramica-de-tanger.webp?w=1024') center/cover no-repeat",
    histoire:{
      texte:`Tanger est l'une des plus anciennes cités d'Afrique du Nord, fondée par les Phéniciens vers le Xe siècle avant J.-C. sous le nom d'Ingletha. Carrefour stratégique entre l'Atlantique et la Méditerranée, elle fut successivement romaine (Tingis), vandale, byzantine, arabe, portugaise, puis ville internationale de 1923 à 1956.\n\nCe cosmopolitisme unique a inspiré des génies : Matisse y peint ses nus lumineux, Delacroix y découvre l'Orient, et des écrivains de la Beat Generation — Burroughs, Kerouac, Ginsberg — y séjournent. Aujourd'hui, Tanger est en plein essor grâce au port Tanger Med, premier port d'Afrique.`,
      timeline:[
        {yr:'~950 av. J.-C.',tx:'Fondation phénicienne sous le nom d\'Ingletha'},
        {yr:'42 ap. J.-C.',tx:'Tanger devient Tingis, capitale de la Maurétanie Tingitane sous Claude'},
        {yr:'1471',tx:'Prise par les Portugais, début du comptoir européen'},
        {yr:'1923–1956',tx:'Zone internationale sous administration multinationale'},
        {yr:'1956',tx:'Réunification avec le Maroc indépendant'},
      ],
      photos:[
        {bg:"url('https://i.pinimg.com/1200x/86/1f/93/861f935e42ac12e831cd8b5e94b4ad24.jpg') center/cover no-repeat",label:'Médina & Kasbah'},
        {bg:"url('https://i.pinimg.com/736x/fa/66/7e/fa667ec3c7b022da3f815b0713eee81e.jpg') center/cover no-repeat",label:'Cap Spartel'},
        {bg:"url('https://img-4.linternaute.com/5-gYy3mcPLReXXeJOylYqZEDNUI=/620x415/smart/80bd31113e8b4a33830c066536e4e97e/ccmcms-linternaute/10198032-30-sites-naturels-etonnants-et-meconnus-en-europe.jpg') center/cover no-repeat",label:'Détroit de Gibraltar'},
        {bg:"url('https://mnarcastle.ma/wp-content/uploads/2025/09/La-corniche-de-Tanger-Maroc.jpg') center/cover no-repeat",label:'Corniche'},
      ]
    },
    sites:[
      {type:'Médina',name:'Kasbah de Tanger',desc:'Forteresse dominant le détroit, musée archéologique avec bronzes et mosaïques romaines. Vue imprenable sur Gibraltar par beau temps.'},
      {type:'Nature',name:'Cap Spartel',desc:'Pointe la plus septentrionale de l\'Afrique, là où Atlantique et Méditerranée se rencontrent. Phare du XIXe siècle et couchers de soleil spectaculaires.'},
      {type:'Site naturel',name:'Grottes d\'Hercule',desc:'Grottes préhistoriques creusées par la mer à 14 km de Tanger, liées au mythe d\'Hercule qui y aurait séparé Europe et Afrique.'},
      {type:'Musée',name:'Légation américaine',desc:'Premier bien américain en dehors des États-Unis (1821), classé monument historique national américain. Musée de la relation maroco-américaine.'},
      {type:'Marché',name:'Souk Petit Socco',desc:'Cœur historique de la médina, ancien marché de change et de contrebande, aujourd\'hui animé de cafés et d\'artisans.'},
      {type:'Plage',name:'Plage Malabata',desc:'Grande plage à l\'est de la ville avec vue sur le port Tanger Med, station balnéaire moderne avec hôtels et restaurants.'},
    ],
    hotels:[
      {name:'Hôtel El Minzah',stars:'★ ★ ★ ★ ★',desc:'Palace historique de 1930, favori des diplomates et artistes. Jardins d\'orangers, hammam et vue sur le détroit.',price:'950 MAD',gradient:"url('https://static.verychic.com/images/48148/fr/desktop/1.jpg') center/cover",link:'https://www.booking.com'},
      {name:'Hilton Tanger City Center',stars:'★ ★ ★ ★ ★',desc:'Tour moderne au centre-ville, piscine panoramique, spa et vue à 360° sur la baie et le détroit de Gibraltar.',price:'1 200 MAD',gradient:"url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/73/7f/d6/exterior.jpg?w=700&h=-1&s=1') center/cover",link:'https://www.hilton.com'},
      {name:'Rembrandt Hotel & Spa',stars:'★ ★ ★ ★',desc:'Hôtel historique dans le quartier diplomatique, ambiance coloniale chic, terrasse panoramique sur le détroit.',price:'550 MAD',gradient:"url('https://cdn.quehoteles.com/hotel-Hotel-Rembrandt-Taacutenger-F30915_13.jpg') center/cover",link:'https://www.booking.com'},
    ],
    restaurants:[
      {name:'El Morocco Club',stars:'★★★★★',cuisine:'Marocain raffiné',desc:'Dîner dans un riad du XVIIe siècle. Cuisine marocaine gastronomique, cave à vins, musique andalouse en soirée.',phone:'+212 539-948-139',insta:'elmoroccoclub'},
      {name:'Saveur de Poisson',stars:'★★★★',cuisine:'Fruits de mer',desc:'Institution incontournable de Tanger. Pas de menu — le chef choisit selon la pêche du jour. File d\'attente garantie.',phone:'+212 539-936-326',insta:'saveurdepoisson_tanger'},
      {name:'Hammadi',stars:'★★★',cuisine:'Traditionnel marocain',desc:'Au cœur de la médina depuis 1955. Décor berbère authentique, tagines généreux et thé à la menthe cérémoniel.',phone:'+212 539-934-514',insta:'hammadi_tanger'},
      {name:'Le Nabab',stars:'★★★★',cuisine:'Fusion méditerranéen',desc:'Vue panoramique sur la baie, cuisine franco-marocaine créative, terrasse idéale pour le coucher de soleil.',phone:'+212 539-322-885',insta:'lenabab_tanger'},
    ],
    activites:[
      {type:'Excursion',name:'Asilah & ses fresques',desc:'Village côtier aux remparts portugaises du XVe siècle, célèbre pour son festival de peintures murales (août). À 45 km au sud de Tanger.',contact:'+212 539-417-282'},
      {type:'Sport nautique',name:'Surf & kitesurf',desc:'Les plages de la Corniche offrent de bonnes conditions pour les débutants. École de surf avec matériel à louer.',contact:'+212 661-234-567'},
      {type:'Culturel',name:'Visite guidée médina',desc:'Guide officiel pour explorer la kasbah, le palais du sultan, la mosquée de la Kasbah et les souks authentiques.',contact:'+212 539-940-100'},
      {type:'Nature',name:'Randonnée Cap Malabata',desc:'Sentier côtier entre la plage Malabata et le cap, avec vue sur le détroit et les côtes espagnoles par temps clair.',contact:'+212 661-789-012'},
    ]
  },

  tetouan:{
    name:'Tétouan',eyebrow:'Nord du Maroc',subtitle:'Rif — La Colombe Blanche · Fondée IIIe s. av. J.-C.',
    gradient: "url('https://mnarcastle.ma/wp-content/uploads/2025/09/tetouan-maroc.jpg') center/cover no-repeat",
    histoire:{
      texte:`Tétouan fut fondée au IIIe siècle avant J.-C. par les Berbères Maurétaniens. Détruite par les Romains en 148 av. J.-C., elle est reconstruite en 1484 par les Wattassides et les réfugiés andalous chassés d'Espagne après la Reconquista, qui lui donnent son architecture hispano-mauresqe unique.\n\nSa médina, surnommée "la Blanche" ou "la Colombe", est classée au patrimoine mondial de l'UNESCO depuis 1997. Capitale du Protectorat espagnol de 1912 à 1956, elle conserve de nombreux bâtiments de style néo-mauresque de cette époque.`,
      timeline:[
        {yr:'IIIe s. av. J.-C.',tx:'Fondation berbère de Tamuda sur la rivière Martil'},
        {yr:'148 av. J.-C.',tx:'Destruction par Rome lors de la guerre jugurthine'},
        {yr:'1484',tx:'Reconstruction par des réfugiés andalous de Grenade et Ronda'},
        {yr:'1912–1956',tx:'Capitale du Protectorat espagnol du Maroc'},
        {yr:'1997',tx:'Médina classée Patrimoine mondial UNESCO'},
      ],
      photos:[
        {bg:"url('https://i.pinimg.com/736x/06/27/b7/0627b714ceaeee97197f87a009211607.jpg') center/cover no-repeat",label:'Médina UNESCO'},
        {bg:"url('https://i.pinimg.com/736x/c3/02/03/c30203336be2bc5080975ced95d4a514.jpg') center/cover no-repeat",label:'Place Moulay El Mehdi'},
        {bg:"url('https://i.pinimg.com/1200x/81/6d/4e/816d4e562ed026a0909a105029c5ea55.jpg') center/cover no-repeat",label:'Artisanat'},
        {bg:"url('https://i.pinimg.com/736x/3a/f6/18/3af6180d398a38f69dc489202e45b7bf.jpg') center/cover no-repeat",label:'Architecture andalouse'},
      ]
    },
    sites:[
      {type:'Médina UNESCO',name:'Médina de Tétouan',desc:'Labyrinthe de ruelles blanches aux influences hispano-mauresques. Souks d\'artisanat (broderies, zelliges, cuir), fondouks du XVIIe siècle.'},
      {type:'Musée',name:'Musée Archéologique',desc:'Collections romaines de Tamuda, monnaies phéniciennes, céramiques berbères et objets islamiques médiévaux.'},
      {type:'Musée',name:'Musée d\'Art et d\'Histoire',desc:'Dans l\'ancienne résidence du pacha, art populaire marocain, costumes andalous, instruments de musique traditionnels.'},
      {type:'Culture',name:'École des Beaux-Arts',desc:'Fondée en 1945, l\'une des premières écoles d\'arts plastiques du Maroc. Galerie permanente ouverte au public.'},
      {type:'Plage',name:'Plage Martil',desc:'Station balnéaire à 5 km, très animée en été, eau chaude et claire, restaurants de poissons frais sur la plage.'},
      {type:'Nature',name:'Parc Naturel Bouhachem',desc:'Forêts de chênes-lièges et de cèdres dans les montagnes du Rif, randonnées et faune sauvage exceptionnelle.'},
    ],
    hotels:[
      {name:'Sofitel Tamuda Bay',stars:'★ ★ ★ ★ ★',desc:'Resort 5 étoiles sur la baie de Tamuda, plage privée, thalasso, 4 restaurants et accès direct à la mer.',price:'2 100 MAD',gradient:"url('https://www.ahstatic.com/photos/8216_ho_00_p_1024x768.jpg') center/cover",link:'https://www.sofitel.com'},
      {name:'Hôtel Chams',stars:'★ ★ ★ ★',desc:'Hôtel central avec piscine, vue sur le Rif, ambiance familiale et restaurant de cuisine marocaine traditionnelle.',price:'480 MAD',gradient:"url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/102105035.jpg?k=c0cd1e0ccb947dc84d548f8471fd24e2fabe5b47dbce08f40fb7bf2a4016002a&o=&hp=1') center/cover",link:'https://www.booking.com'},
      {name:'Riad Dalia',stars:'★ ★ ★',desc:'Riad en pleine médina, chambres décorées d\'artisanat local, patio fleuri, petit-déjeuner marocain traditionnel.',price:'320 MAD',gradient:"url('https://www.maghrebtourism.com/riaddalia/riad-dalia-1.jpg') center/cover",link:'https://www.airbnb.com'},
    ],
    restaurants:[
      {name:'Blanco Riad',stars:'★★★★★',cuisine:'Fusion méditerranéen',desc:'Dans un riad du XVIIe siècle, cuisine créative mêlant influences marocaines et andalouses. Cave à vins sélectionnée.',phone:'+212 539-704-202',insta:'blancoriad'},
      {name:'Restaurant Saigon',stars:'★★★',cuisine:'Fusion marocain-asiatique',desc:'Surprise gastronomique à Tétouan — fusion unique entre tajines marocains et recettes vietnamiennes du chef.',phone:'+212 539-963-777',insta:'saigon_tetouan'},
      {name:'Café M\'siyar',stars:'★★★',cuisine:'Traditionnel marocain',desc:'Café-restaurant au cœur de la médina, réputé pour ses harira, ses brioches sfenj et son thé à la menthe.',phone:'+212 539-960-000',insta:'cafe_msiyar'},
      {name:'La Marina Tamuda',stars:'★★★★',cuisine:'Fruits de mer',desc:'Sur la plage de Tamuda Bay, poissons grillés ultra-frais, paëlla et fruits de mer en bord de Méditerranée.',phone:'+212 539-978-200',insta:'marina_tamuda'},
    ],
    activites:[
      {type:'Randonnée',name:'Montagnes du Rif',desc:'Sentiers de randonnée dans les massifs du Rif dominant Tétouan, villages berbères traditionnels et panoramas exceptionnels.',contact:'+212 661-456-789'},
      {type:'Artisanat',name:'Cours de poterie & zelliges',desc:'Atelier chez les artisans de la médina pour apprendre le tournage et la peinture de la céramique traditionnelle.',contact:'+212 539-700-120'},
      {type:'Sport',name:'Kitesurf Tamuda Bay',desc:'La baie de Tamuda offre des conditions parfaites pour le kitesurf, avec écoles et locations de matériel.',contact:'+212 661-987-654'},
      {type:'Culturel',name:'Visite guidée médina UNESCO',desc:'Guide officiel bilingue pour découvrir les coins cachés de la médina, les fondouks et l\'histoire andalouse.',contact:'+212 539-960-500'},
    ]
  },

  chefchaouen:{
    name:'Chefchaouen',eyebrow:'Nord du Maroc',subtitle:'Rif — La Ville Bleue · Fondée en 1471',
   gradient: "url('https://puertaazulchaouen.com/wp-content/uploads/2025/12/Things-to-do-in-Chefchaouen-18-1.jpg') center/cover no-repeat",
    histoire:{
      texte:`Fondée en 1471 par Moulay Ali ibn Rachid pour protéger les musulmans et les Juifs chassés d'Espagne après la Reconquista, Chefchaouen est célèbre dans le monde entier pour ses bâtiments teints en nuances infinies de bleu et de blanc. Cette tradition de peinture en bleu aurait été introduite par les réfugiés juifs séfarades au XVe siècle, qui considèrent cette couleur comme sacrée.\n\nNichée dans les montagnes du Rif à 600 m d'altitude, la "Ville Bleue" reste l'une des destinations les plus photographiées au monde, mêlant architecture hispano-marocaine et ambiance mystique unique.`,
      timeline:[
        {yr:'1471',tx:'Fondation par Moulay Ali ibn Rachid comme forteresse défensive'},
        {yr:'1492',tx:'Arrivée des réfugiés juifs séfarades fuyant l\'Inquisition espagnole'},
        {yr:'XVIIe s.',tx:'Généralisation de la peinture bleue sur les façades et les ruelles'},
        {yr:'1920',tx:'Prise par les Espagnols lors de la Guerre du Rif'},
        {yr:'1956',tx:'Intégration au Maroc indépendant'},
      ],
      photos:[
        {bg:"url('https://i.pinimg.com/736x/45/ff/b3/45ffb3ac450141d8c43da16798c56f73.jpg') center/cover no-repeat",label:'Ruelles bleues'},
        {bg:"url('https://i.pinimg.com/1200x/2a/51/39/2a51391b209445208b0a0acb4604c641.jpg') center/cover no-repeat",label:'Place Uta el-Hammam'},
        {bg:"url('https://i.pinimg.com/1200x/0b/85/0c/0b850c0c779310fd2990e0c957a1a0c3.jpg') center/cover no-repeat",label:'Fontaine bleue'},
        {bg:"url('https://i.pinimg.com/1200x/85/26/e5/8526e5b94ba36092692f8df63ae20dae.jpg') center/cover no-repeat",label:'Kasbah'},
      ]
    },
    sites:[
      {type:'Place',name:'Place Uta el-Hammam',desc:'Cœur battant de la vieille ville entourée de cafés, restaurants et de la Grande Mosquée du XVe siècle. Idéale au coucher du soleil.'},
      {type:'Musée',name:'Kasbah & Musée ethnographique',desc:'Forteresse du XVe siècle restaurée, avec jardin andalou et musée d\'art populaire rifain : costumes, armes et instruments de musique.'},
      {type:'Nature',name:'Cascade Ras el Ma',desc:'Source naturelle d\'eau fraîche à l\'entrée de la ville, point de départ de randonnées vers le Jbel el Kelaa (1 616 m).'},
      {type:'Médina',name:'Quartier bleu labyrinthique',desc:'Des dizaines de ruelles bleues et blanches, chacune différente, avec portes sculptées, pots de fleurs et passages secrets.'},
      {type:'Artisanat',name:'Coopérative des tisserands',desc:'Ateliers de tissage de tapis berbères et de djellabas, avec possibilité d\'observer les artisans au travail et d\'acheter directement.'},
      {type:'Panorama',name:'Mosquée espagnole',desc:'Ancienne mosquée construite à l\'époque du protectorat, vue panoramique unique sur Chefchaouen et ses toits bleus.'},
    ],
    hotels:[
      {name:'Riad Dar Echchaouen',stars:'★ ★ ★ ★',desc:'Riad au cœur de la médina bleue, terrasse panoramique, décor artisanal chefchaouni, cuisine marocaine maison.',price:'650 MAD',gradient:"url('https://cdn.kimkim.com/files/a/images/490d89c9c80b6805a26728c152f9f1bd77452bd9/original-fed6d1da38653c304b3d451076d6a970.jpg') center/cover",link:'https://www.booking.com'},
      {name:'Hotel Parador',stars:'★ ★ ★ ★',desc:'Vue imprenable sur la ville bleue depuis la piscine, jardins andalous, restaurant renommé et spa traditionnel.',price:'800 MAD',gradient:"url('https://tse2.mm.bing.net/th/id/OIP.WM8-MF7C3DX156Bt_Yd-kAHaFl?rs=1&pid=ImgDetMain&o=7&rm=3') center/cover",link:'https://www.booking.com'},
      {name:'Casa Perleta',stars:'★ ★ ★',desc:'Maison d\'hôtes dans la médina, chambres aux carreaux de zellige bleus, petit-déjeuner berbère sur la terrasse.',price:'400 MAD',gradient:"url('https://tse4.mm.bing.net/th/id/OIP.NIIOkAiyYXGxYfvAzuhqDgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3') center/cover",link:'https://www.airbnb.com'},
    ],
    restaurants:[
      {name:'Restaurant Tissemlal',stars:'★★★★',cuisine:'Marocain traditionnel',desc:'Toit-terrasse avec vue sur les montagnes du Rif. Spécialité de chèvre grillé local et couscous berbère aux 7 légumes.',phone:'+212 539-986-153',insta:'tissemlal_chef'},
      {name:'Chez Hicham',stars:'★★★',cuisine:'Tajine & Couscous',desc:'Table familiale authentique au bord de la source Ras el Ma. Tajine de chèvre montagnard et harira maison.',phone:'+212 539-987-020',insta:'chezhicham_chaouen'},
      {name:'Aladdin Restaurant',stars:'★★★',cuisine:'Méditerranéen',desc:'Terrasse fleurie avec vue sur les remparts. Grillades, salades fraîches et cuisine végétarienne inspirée du Rif.',phone:'+212 539-986-092',insta:'aladdin_chaouen'},
      {name:'Café Clock Chefchaouen',stars:'★★★',cuisine:'Fusion créative',desc:'Antenne du célèbre Café Clock de Fès. Camel burger, smoothies aux épices du Rif et concerts de musique live.',phone:'+212 539-870-200',insta:'cafeclock_chaouen'},
    ],
    activites:[
      {type:'Randonnée',name:'Ascension Jbel el Kelaa',desc:'Sommet à 1 616 m, panorama à 360° sur Chefchaouen, la mer Méditerranée et les montagnes du Rif. 3h aller-retour.',contact:'+212 661-567-890'},
      {type:'Artisanat',name:'Atelier tapis berbères',desc:'Apprenez le tissage traditionnel dans les coopératives de femmes de la médina, et repartez avec votre création.',contact:'+212 539-985-100'},
      {type:'Culturel',name:'Visite guidée nocturne',desc:'La médina bleue prend une dimension magique la nuit, avec ses ruelles illuminées et ses jardins parfumés.',contact:'+212 661-234-567'},
      {type:'Nature',name:'Cascade Akchour',desc:'À 28 km de Chefchaouen, cascades spectaculaires dans les gorges du Rif, baignade possible en été.',contact:'+212 661-345-678'},
    ]
  },

  houceima:{
    name:'Al Hoceima',eyebrow:'Nord du Maroc',subtitle:'Méditerranée — Baie de lumière · Fondée en 1925',
    gradient: "url('https://i.pinimg.com/1200x/5f/45/51/5f45517eff51367699993d1e7a657252.jpg') center/cover no-repeat",
    histoire:{
      texte:`Al Hoceima, anciennement Villa Sanjurjo sous le protectorat espagnol, est une ville côtière fondée en 1925 au bord de la Méditerranée dans la région du Rif. Sa baie en croissant aux eaux turquoise est considérée comme l'une des plus belles de toute la Méditerranée.\n\nLa ville est au cœur de la résistance rifaine : Abd el-Krim el-Khattabi, "l'émir du Rif", y mena la Guerre du Rif (1921-1926), infligeant une défaite historique à l'Espagne à la bataille d'Anoual. Cette épopée est aujourd'hui un symbole de fierté nationale pour les Marocains.`,
      timeline:[
        {yr:'1921',tx:'Bataille d\'Anoual : victoire d\'Abd el-Krim contre l\'armée espagnole'},
        {yr:'1925',tx:'Fondation de Villa Sanjurjo par le protectorat espagnol'},
        {yr:'1926',tx:'Capitulation d\'Abd el-Krim après l\'intervention française'},
        {yr:'1956',tx:'Intégration au Maroc indépendant, renommée Al Hoceima'},
        {yr:'2004',tx:'Tremblement de terre : reconstruction et développement touristique'},
      ],
      photos:[
        {bg:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOY5yytj3XCvsOHQtFJB4BhunOmcQh37j37A&s') center/cover no-repeat",label:'Baie d\'Al Hoceima'},
        {bg:"url('https://i.pinimg.com/1200x/c4/f3/25/c4f325b8211f0b6af5852ea90aaef4e1.jpg') center/cover no-repeat",label:'Plage Quemado'},
        {bg:"url('https://i.pinimg.com/1200x/06/66/40/066640d12348e9fbd7a910bed5b04e28.jpg') center/cover no-repeat",label:'Parc national marin'},
        {bg:"url('https://i.pinimg.com/736x/4e/1d/fe/4e1dfe5816c059ad81627b2d11a2d4ae.jpg') center/cover no-repeat",label:'Falaises du Rif'},
      ]
    },
    sites:[
      {type:'Parc national',name:'Parc National d\'Al Hoceima',desc:'Premier parc national marin du Maroc, créé en 2004 : falaises vertigineuses, criques secrètes et fonds sous-marins parmi les plus préservés de Méditerranée.'},
      {type:'Plage',name:'Plage Quemado',desc:'Plage en forme de fer à cheval au pied de la ville, eaux cristallines turquoise, idéale pour la baignade et la plongée.'},
      {type:'Site historique',name:'Mémorial Abd el-Krim',desc:'Monument dédié au héros rifain, symbole de la résistance marocaine contre le colonialisme espagnol en 1921.'},
      {type:'Nature',name:'Criques de Torres de Alcalá',desc:'Criques sauvages accessibles en bateau ou à pied, eaux transparentes et snorkeling extraordinaire.'},
      {type:'Site historique',name:'Îlot Peñón de Alhucemas',desc:'Enclave espagnole visible depuis la baie, lieu de la célèbre invasion amphibie de 1925, chargé d\'histoire.'},
      {type:'Plage',name:'Plage Cala Iris',desc:'Plage isolée à 35 km d\'Al Hoceima, village de pêcheurs authentique avec poissons grillés frais sur la plage.'},
    ],
    hotels:[
      {name:'Hôtel Quemado Resort',stars:'★ ★ ★ ★',desc:'Resort sur la baie avec accès direct à la plage Quemado, piscine, terrasse panoramique et restaurant de fruits de mer.',price:'750 MAD',gradient:"url('https://tse2.mm.bing.net/th/id/OIP.XBa5KdN5fgTB2CLIJPzvjwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3') center/cover",link:'https://www.booking.com'},
      {name:'Mohammed V Hotel',stars:'★ ★ ★',desc:'Hôtel historique du centre-ville, vue sur la baie, restaurant marocain et ambiance familiale authentique.',price:'380 MAD',gradient:"url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/23/f8/a4/capti_r.jpg?w=1200&h=-1&s=1') center/cover",link:'https://www.booking.com'},
      {name:'Riad Baie de Lumière',stars:'★ ★ ★',desc:'Petite maison d\'hôtes avec terrasse vue mer, décor berbère, petit-déjeuner avec produits du Rif.',price:'290 MAD',gradient:"url('https://tse4.mm.bing.net/th/id/OIP.JKh6_hgkIePZxfas1YBVzwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3') center/cover",link:'https://www.airbnb.com'},
    ],
    restaurants:[
      {name:'Club Nautique',stars:'★★★★',cuisine:'Fruits de mer',desc:'Sur le port de pêche, poissons et fruits de mer ultra-frais débarqués le matin même. Vue directe sur la baie.',phone:'+212 539-982-100',insta:'clubnautique_hoceima'},
      {name:'Restaurant Méditerranée',stars:'★★★',cuisine:'Poissons grillés',desc:'Spécialité de dorade et loup de mer grillés au feu de bois, servis avec chermoula maison et citron confit.',phone:'+212 539-981-020',insta:'mediterranee_hoceima'},
      {name:'Café du Port',stars:'★★',cuisine:'Snack marocain',desc:'Terrasse directement sur la promenade du port, sandwichs au poisson frit, mlawi et jus d\'orange frais.',phone:'+212 539-981-500',insta:'cafe_port_hoceima'},
      {name:'Riad Zitoun',stars:'★★★',cuisine:'Marocain traditionnel',desc:'Cuisine rifaine authentique dans un cadre traditionnel : mechui d\'agneau, msemen et pastilla au lait.',phone:'+212 661-456-789',insta:'riadzitoun_hoceima'},
    ],
    activites:[
      {type:'Plongée',name:'Plongée sous-marine',desc:'Le parc national offre des spots de plongée parmi les 10 meilleurs de Méditerranée : posidonies, mérous et épaves.',contact:'+212 661-789-456'},
      {type:'Randonnée',name:'Sentier des falaises',desc:'Randonnée côtière entre Torres de Alcalá et Cala Iris, vues à couper le souffle sur la Méditerranée.',contact:'+212 539-840-100'},
      {type:'Sport nautique',name:'Kayak de mer',desc:'Location et excursions guidées en kayak pour explorer les criques secrètes du parc national marin.',contact:'+212 661-123-456'},
      {type:'Excursion',name:'Massif du Rif',desc:'Circuit en 4x4 dans les villages berbères des montagnes du Rif, rencontre des artisans et paysages sauvages.', contact:'+212 661-789-123'},
    ]
  },

  fes:{
    name:'Fès',eyebrow:'Centre-Nord du Maroc',subtitle:'Capitale spirituelle · Fondée en 789',
    gradient:'linear-gradient(160deg,#2d1500,#7b3f00)',gradient: "url('https://img-4.linternaute.com/s5tz5DEpq-nAqqk54okS4ePhClU=/660x366/smart/e0b057f33de6453f981a7215ffbea132/ccmcms-linternaute/14804748.jpg') center/cover no-repeat",
    histoire:{
      texte:`Fès est la première des villes impériales du Maroc, fondée en 789 par Idriss Ier, fondateur de la première dynastie arabe du Maroc. Elle atteignit son apogée sous les Mérinides (XIIIe-XIVe siècles) qui y bâtirent de splendides médersas. La ville abrite la plus vieille université du monde encore en activité : la Mosquée-Université Al Quaraouiyine, fondée en 859 par Fatima al-Fihri.\n\nSa médina, Fès el-Bali, classée au patrimoine mondial de l'UNESCO depuis 1981, est la plus grande zone piétonne médiévale du monde avec plus de 9 400 ruelles. C'est le centre spirituel, culturel et artisanal incontesté du Maroc.`,
      timeline:[
        {yr:'789',tx:'Fondation par Moulay Idriss Ier sur la rive droite du Fez'},
        {yr:'809',tx:'Fondation de la rive gauche par Idriss II, unification de la ville'},
        {yr:'859',tx:'Création de l\'université Al Quaraouiyine par Fatima al-Fihri'},
        {yr:'XIIIe–XIVe s.',tx:'Apogée mérinide : médersas, fondouks et palais monumentaux'},
        {yr:'1981',tx:'Médina Fès el-Bali classée Patrimoine mondial UNESCO'},
      ],
      photos:[
        {bg:"url('https://i.pinimg.com/736x/76/c6/2a/76c62a18861f8912f57ae1647947cb66.jpg') center/cover no-repeat",label:'Tanneries Chouara'},
        {bg:"url('https://i.pinimg.com/736x/e3/49/01/e34901a67a594915ef6f2c147ab614f2.jpg') center/cover no-repeat",label:'Médersa Bou Inania'},
        {bg:"url('https://i.pinimg.com/1200x/e3/85/3f/e3853ff9815e00bc53450b04b97c35cd.jpg') center/cover no-repeat",label:'Al Quaraouiyine'},
        {bg:"url('https://i.pinimg.com/736x/f8/17/cc/f817cc3c6d2cafaedb156f35c95ad955.jpg') center/cover no-repeat",label:'Médina el-Bali'},
      ]
    },
    sites:[
      {type:'Médina UNESCO',name:'Fès el-Bali',desc:'Plus grande médina médiévale du monde, 9 400 ruelles piétonnes, classée UNESCO en 1981. Un labyrinthe vivant hors du temps.'},
      {type:'Université',name:'Al Quaraouiyine',desc:'Plus ancienne université du monde encore en activité, fondée en 859 par Fatima al-Fihri. Ouverte aux visiteurs non-musulmans (extérieur).'},
      {type:'Artisanat',name:'Tanneries Chouara',desc:'Célèbres tanneries médiévales où le cuir est traité dans des cuves de teinture selon des méthodes millénaires. Vue depuis les terrasses des maroquineries.'},
      {type:'Monument',name:'Médersa Bou Inania',desc:'Chef-d\'œuvre de l\'architecture mérinide (1351), avec ses zelliges multicolores, ses boiseries sculptées et son minaret élancé.'},
      {type:'Musée',name:'Musée Batha',desc:'Arts décoratifs marocains dans un palais andalou du XIXe siècle : zellige, broderies, poteries bleues de Fès et instruments de musique.'},
      {type:'Monument',name:'Borj Nord — Musée des Armes',desc:'Forteresse du XVIe siècle dominant la médina, musée avec 8 000 pièces d\'armement de la poudre à canon au XXe siècle.'},
    ],
    hotels:[
      {name:'Palais Faraj Suites & Spa',stars:'★ ★ ★ ★ ★',desc:'Palace dominant la médina, suites décorées d\'artisanat fassi exceptionnel, spa hammam, terrasse avec vue unique sur les toits.',price:'2 800 MAD',gradient:"url(https://www.palaisfaraj.com/images/history-welcome-general-v3.webp) center/cover",link:'https://www.palaisfaraj.com'},
      {name:'Riad Fès Relais & Châteaux',stars:'★ ★ ★ ★ ★',desc:'Le plus luxueux riad de Fès, hammam privé, piscine chauffée, restaurant gastronomique et service personnalisé d\'exception.',price:'2 200 MAD',gradient:"url(https://riadfes.com/_novaimg/4768853-1447548_1579_0_3200_3200_800_800.jpg) center/cover",link:'https://www.riadfes.com'},
      {name:'Hôtel Mérinides',stars:'★ ★ ★ ★',desc:'Vue panoramique inégalée sur l\'ensemble de la médina depuis les chambres et la piscine, idéal pour les couchers de soleil.',price:'900 MAD',gradient:"url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/ed/a0/41/les-merinides.jpg?w=900&h=-1&s=1) center/cover",link:'https://www.booking.com'},
    ],
    restaurants:[
      {name:'Riad Rcif',stars:'★★★★★',cuisine:'Haute cuisine marocaine',desc:'Dîner dans un riad du XVIIe siècle, menu dégustation de cuisine fassi raffinée : pastilla royale, tagine M\'rouzia, cornes de gazelle.',phone:'+212 535-638-820',insta:'riadrcif_fes'},
      {name:'The Ruined Garden',stars:'★★★★',cuisine:'Marocain & international',desc:'Restaurant dans les ruines d\'un palais mérinide, jardin luxuriant, carte créative mêlant influences marocaines et méditerranéennes.',phone:'+212 535-741-521',insta:'ruinedgarden_fes'},
      {name:'Café Clock',stars:'★★★',cuisine:'Fusion créative',desc:'Institution culturelle autant que restaurant : camel burger, concerts de musique andalouse, cours de cuisine et projections de films.',phone:'+212 535-637-855',insta:'cafeclock'},
      {name:'Restaurant Nur',stars:'★★★★★',cuisine:'Gastronomie marocaine revisitée',desc:'Chef primé, menu dégustation en 7 services, réinterprétation créative de la cuisine fassi traditionnelle. Réservation obligatoire.',phone:'+212 535-640-069',insta:'nur_fes'},
    ],
    activites:[
      {type:'Culturel',name:'Visite guidée médina',desc:'Guide officiel agréé (indispensable dans Fès el-Bali). Parcours thématiques : architecture mérinide, artisanat, histoire des dynasties.',contact:'+212 535-623-460'},
      {type:'Gastronomie',name:'Cours de cuisine fassi',desc:'Apprenez à préparer pastilla au pigeon, tagine M\'hammar et corne de gazelle dans le riad d\'un chef fassi traditionnel.',contact:'+212 535-637-860'},
      {type:'Culturel',name:'Festival de Musique Sacrée',desc:'Festival international de musique sacrée du monde (juin), 30 ans d\'histoire, artistes de 40 pays, concerts gratuits en médina.',contact:'https://www.fesfestival.com'},
      {type:'Bien-être',name:'Hammam traditionnel fassi',desc:'Rituel de bain marocain authentique dans un hammam du XVe siècle de la médina, massage au savon beldi et kessa.',contact:'+212 535-634-000'},
    ]
  },

  ifrane:{
    name:'Ifrane',eyebrow:'Moyen Atlas',subtitle:'Petite Suisse du Maroc · Fondée en 1929',
   gradient: "url('https://i.pinimg.com/1200x/a5/0f/ff/a50fff62a1aed2f31d6b2f5b3b0968c4.jpg') center/cover no-repeat",
    histoire:{
      texte:`Surnommée la "Petite Suisse du Maroc" ou "La Ville Propre", Ifrane fut fondée en 1929 par le Protectorat français à 1 650 m d'altitude dans le cœur du Moyen Atlas. La ville est totalement unique au Maroc par son architecture européenne : chalets aux toits pointus couverts de tuiles rouges, rues bordées de sapins et de cèdres, parcs impeccablement entretenus.\n\nElle est le siège de l'Université Al Akhawayn, université anglophone fondée en 1993 avec l'aide des États-Unis, qui accueille des étudiants du monde entier. En hiver, les chutes de neige abondantes transforment Ifrane en station de ski et en décor féerique.`,
      timeline:[
        {yr:'1929',tx:'Fondation par le Protectorat français comme ville de villégiature d\'altitude'},
        {yr:'1939–1945',tx:'Camp de prisonniers puis d\'internement juifs pendant la Seconde Guerre mondiale'},
        {yr:'1993',tx:'Création de l\'Université Al Akhawayn par Mohammed VI'},
        {yr:'2005',tx:'Classement de la forêt de cèdres d\'Azrou en parc naturel protégé'},
      ],
      photos:[
        {bg:"url('https://i.pinimg.com/736x/d4/c5/00/d4c500b620c8e4b5cf54ce4ce29f0751.jpg') center/cover no-repeat",label:'Ville sous la neige'},
        {bg:"url('https://i.pinimg.com/1200x/05/74/9d/05749d4366b684f418f787af32dbbe58.jpg') center/cover no-repeat",label:'Lion de pierre'},
        {bg:"url('https://i.pinimg.com/736x/26/f6/b7/26f6b751ad2c691c8fd1c21d43827b57.jpg') center/cover no-repeat",label:'Lac Dayet Aoua'},
        {bg:"url('https://i.pinimg.com/736x/50/b4/ec/50b4ecfd7f567b10c336444218015505.jpg') center/cover no-repeat",label:'Cédraie d\'Azrou'},
      ]
    },
    sites:[
      {type:'Parc naturel',name:'Parc National d\'Ifrane',desc:'125 000 ha de forêts de cèdres millénaires, épicéas et chênes-lièges. Patrie du macaque de Barbarie (singe de Barbarie), espèce menacée.'},
      {type:'Lac',name:'Lac Dayet Aoua',desc:'Lac naturel de montagne à 1 660 m, refuge d\'oiseaux migrateurs (hérons, canards, ibis), pêche à la truite et pique-nique.'},
      {type:'Station de ski',name:'Station de ski Michlifen',desc:'Station de ski la plus accessible du Maroc (1 900 m), 4 pistes, télésiège, location de matériel. Saison décembre à mars.'},
      {type:'Monument',name:'Lion de pierre d\'Ifrane',desc:'Sculpture en pierre d\'un lion couché, symbole de la ville, taillée par un prisonnier allemand pendant la Seconde Guerre mondiale.'},
      {type:'Nature',name:'Source Vittel d\'Ifrane',desc:'Sources d\'eau pure au pied des montagnes, alimentant la célèbre eau minérale marocaine. Visite de l\'usine d\'embouteillage possible.'},
      {type:'Village',name:'Village d\'Azrou',desc:'Bourgade berbère à 17 km, marché du mardi animé, coopérative d\'artisanat du Moyen Atlas et accès à la cédraie aux singes.'},
    ],
    hotels:[
      {name:'Hôtel Michlifen Ifrane Resort & Spa',stars:'★ ★ ★ ★ ★',desc:'Resort de luxe avec vue sur les pistes de ski, spa de 2 000 m², piscine chauffée, gastronomie marocaine et internationale.',price:'3 500 MAD',gradient:"url(https://content.r9cdn.net/rimg/himg/dd/d7/ff/expediav2-58446-8f5c79-564468.jpg?width=1200&height=630&crop=true) center/cover",link:'https://www.michlifen.ma'},
      {name:'Hôtel Perce Neige',stars:'★ ★ ★',desc:'Chalet traditionnel en pierre et bois, ambiance montagnarde authentique, cheminées dans les chambres, restaurant de fondues.',price:'450 MAD',gradient:"url(https://q-xx.bstatic.com/xdata/images/hotel/max500/331379475.jpg?k=0e7a47f1359e9a0b97bec30fb4e7b1f793ab3fc2d868c2db05fcc9514418110b&o=) center/cover",link:'https://www.booking.com'},
      {name: 'ZEPHYR Ifrane',stars: '★ ★ ★ ★',desc: 'Hôtel contemporain au cœur d\'Ifrane, avec piscine extérieure, restaurant raffiné et jardin paysager. Chambres spacieuses avec balcon vue sur jardin. Idéal pour un séjour reposant et élégant.',price: '700 MAD', gradient: "url('https://media-cdn.tripadvisor.com/media/photo-p/1d/a8/ee/2e/zephyr-ifrane.jpg') center/cover", link: 'https://www.booking.com/hotel/ma/zephyr-ifrane.fr.html'},

  ],
    restaurants:[
      {name:'Restaurant La Paix',stars:'★★★★',cuisine:'Français & Marocain',desc:'Institution d\'Ifrane depuis 50 ans, spécialité de truite du Moyen Atlas, fondue savoyarde et tajine aux pruneaux.',phone:'+212 535-566-075',insta:'lapaix_ifrane'},
      {name:'Chamonix',stars:'★★★',cuisine:'Montagnard & Raclette',desc:'Décor de chalet alpin, fondue bourguignonne, raclette et charcuteries importées. Idéal après une journée de ski.',phone:'+212 535-566-091',insta:'chamonix_ifrane'},
      {name:'Café de la Paix',stars:'★★',cuisine:'Snack & café',desc:'Terrasse sous les sapins, petit-déjeuner continental, crêpes maison et chocolat chaud pour se réchauffer.',phone:'+212 535-566-030',insta:'cafedelapaix_ifrane'},
      {name:'Restaurant Al Alya',stars:'★★★',cuisine:'Marocain traditionnel',desc:'Tajine d\'agneau aux légumes du Moyen Atlas, harira de montagne et msemen grillé. Spécialités berbères de la région.',phone:'+212 535-566-200',insta:'alalya_ifrane'},
    ],
    activites:[
      {type:'Ski',name:'Ski & snowboard Michlifen',desc:'Pistes de ski pour tous niveaux, moniteurs certifiés, location de matériel complet. Saison décembre à mars selon enneigement.',contact:'+212 535-566-000'},
      {type:'Nature',name:'Observation des macaques',desc:'Randonnée dans la cédraie d\'Azrou pour observer les singes de Barbarie en liberté dans leur habitat naturel.',contact:'+212 535-566-200'},
      {type:'Randonnée',name:'Tour du Moyen Atlas',desc:'Circuit pédestre autour d\'Ifrane à travers les forêts de cèdres, villages berbères et sources naturelles. Guides locaux disponibles.',contact:'+212 661-456-789'},
      {type:'Pêche',name:'Pêche à la truite',desc:'Pêche sportive à la truite dans les rivières du Moyen Atlas, très réputée auprès des pêcheurs européens. Permis disponible.',contact:'+212 535-566-300'},
    ]
  },

  rabat:{
    name:'Rabat',eyebrow:'Capitale du Maroc',subtitle:'Atlantique — Cité royale · Fondée au XIIe siècle',
    gradient:'linear-gradient(160deg,#1a0a0a,#4a1a1a)', headerImg:'https://tse1.mm.bing.net/th/id/OIP.ti14EziWYnB6KbkiFi7VagHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
    headerPos:'40%',
    histoire:{
      texte:`Rabat est la capitale administrative du Royaume du Maroc depuis 1912. Fondée au XIIe siècle par le sultan Almohade Yacoub el-Mansour qui y érige la Tour Hassan — minaret inachevé d'une mosquée qui aurait été la plus grande du monde. La Kasbah des Oudaias, dominant l'Atlantique, date du XIIe siècle.\n\nL'ensemble historique de Rabat — incluant la ville nouvelle coloniale et la médina historique — est inscrit au patrimoine mondial de l'UNESCO depuis 2012. En face, sur l'autre rive du Bouregreg, se trouve Salé, l'ancienne ville des corsaires.`,
      timeline:[
        {yr:'1150',tx:'Fondation de la Kasbah des Oudaias par les Almohades'},
        {yr:'1195',tx:'Yacoub el-Mansour lance la Tour Hassan et la grande mosquée'},
        {yr:'XVIIe s.',tx:'Développement de la Médina par les Morisques expulsés d\'Espagne'},
        {yr:'1912',tx:'Le Protectorat français choisit Rabat comme capitale administrative'},
        {yr:'2012',tx:'Ensemble historique classé Patrimoine mondial UNESCO'},
      ],
      photos:[
        {bg:"url('https://3.bp.blogspot.com/-USQBw5HbFlg/UJllfmbJZ-I/AAAAAAAAX8U/9Zqs-84uIAs/s1600/unesco-heritage-site-Rabat-Morocco.jpg') center/cover",label:'Tour Hassan'},
        {bg:"url('https://www.laradiodelamer.com/wp-content/uploads/2024/08/la-kasbah-des-oudayas-a-rabat-un-joyau-historique-et-culturel-1.jpg') center/cover",label:'Kasbah Oudaias'},
        {bg:"url('https://thumbs.dreamstime.com/b/ruins-medieval-fortified-muslim-necropolis-chellah-rabat-morocco-rabat-morocco-december-ruins-medieval-248546502.jpg') center/cover",label:'Chellah'},
        {bg:"url('https://thumbs.dreamstime.com/b/old-medina-rabat-capital-city-morocco-country-s-seventh-largest-248023914.jpg') center/cover",label:'Médina'},
]
    },
    sites:[
      {type:'Monument',namejpg:'Tour Hassan & Mausolée Mohammed V',desc:'Minaret inachevé du XIIe siècle face au somptueux mausolée de Mohammed V (1971), symbole de la réconciliation entre tradition et modernité.'},
      {type:'Kasbah',name:'Kasbah des Oudaias',desc:'Citadelle fondée au XIIe siècle surplombant la confluence Bouregreg-Atlantique. Jardin andalou du XVIIe siècle, musée des arts marocains.'},
      {type:'Site historique',name:'Nécropole de Chellah',desc:'Site unique : ruines romaines de Sala Colonia imbriquées dans une nécropole mérinide du XIVe siècle, habitées par des familles de cigognes.'},
      {type:'Musée',name:'Musée National de l\'Archéologie',desc:'Bronzes romains de Volubilis parmi les plus beaux du monde antique, bustes de Juba II et de Caton d\'Utique en argent.'},
      {type:'Médina',name:'Médina de Rabat',desc:'Médina du XVIIe siècle aux influences andalouses, moins touristique que Fès ou Marrakech mais très authentique : souks textiles et épiciers.'},
      {type:'Nature',name:'Parc du Bouregreg',desc:'Promenade sur les deux rives de l\'estuaire du Bouregreg reliant Rabat et Salé, nouveau quartier Bab Al Bahr et marina de prestige.'},
    ],
    hotels:[
  {name:'Sofitel Rabat Jardin des Roses',stars:'★ ★ ★ ★ ★',gradient:"url('https://www.ahstatic.com/photos/6813_ho_00_p_1024x768.jpg') center/cover",desc:'Palace dans les jardins de l\'Agdal, 5 ha de roses et d\'orangers, spa, 4 restaurants gastronomiques.',price:'2 600 MAD',link:'https://www.sofitel.com'},
  {name:'Hôtel Balima',stars:'★ ★ ★ ★',gradient:"url('https://ledesk.ma/wp-content/uploads/2016/03/Hotel-Balima-Flickr-e1457096585417.jpg') center/cover",desc:'Hôtel historique Art Déco de 1932, brasserie mythique, terrasse sur l\'avenue principale.',price:'650 MAD',link:'https://www.booking.com'},
  {name:'Riad Kalaa',stars:'★ ★ ★ ★',gradient:"url('https://i.pinimg.com/originals/83/7f/0e/837f0e38f1293d4e8bab0594790bb620.jpg') center/cover",desc:'Riad en pleine médina, patio traditionnel, hammam privatif, décor de zellige et stuc.',price:'900 MAD',link:'https://www.booking.com'},
],
    restaurants:[
      {name:'Dar Zitoun',stars:'★★★★★',cuisine:'Marocain gastronomique',desc:'Palace du XIXe siècle, cuisine marocaine raffinée, spectacle de musique andalouse, jardins d\'orangers illuminés.',phone:'+212 537-731-777',insta:'darzitoun_rabat'},
      {name:'Le Dhow',stars:'★★★★★',cuisine:'Sur le Bouregreg',desc:'Restaurant flottant unique sur le fleuve Bouregreg, vue sur les deux villes, poissons frais et cuisine marocaine créative.',phone:'+212 537-702-722',insta:'ledhow_rabat'},
      {name:'Ty Potes',stars:'★★★',cuisine:'Méditerranéen',desc:'Brasserie moderne du quartier Hassan, carte creative franco-marocaine, vins sélectionnés et terrasse animée.',phone:'+212 537-260-095',insta:'typotes_rabat'},
      {name:'La Khaïma du Méchoui',stars:'★★★',cuisine:'Méchoui berbère',desc:'Tente berbère en bord du Bouregreg, spécialité de méchoui et couscous berbère aux 7 légumes. Musique gnaoua le soir.',phone:'+212 537-655-200',insta:'khaimarabat'},
    ],
    activites:[
      {type:'Culturel',name:'Visite de Salé corsaire',desc:'Traversée en barque du Bouregreg vers Salé, ancienne cité des corsaires barbaresques, médina authentique et mausolée de Sidi Ahmed.',contact:'+212 537-882-100'},
      {type:'Culturel',name:'Festival Mawazine',desc:'Rythmes du Monde — l\'un des plus grands festivals de musique d\'Afrique (mai/juin), artistes internationaux, entrée gratuite pour la plupart des concerts.',contact:'https://www.festival-mawazine.ma'},
      {type:'Nature',name:'Forêt de Mamora',desc:'Forêt de chênes-lièges à 30 km de Rabat, pique-nique, vélo et observation des oiseaux dans la plus grande forêt de chênes-lièges au monde.',contact:'+212 537-741-000'},
      {type:'Culturel',name:'Musées royaux',desc:'Visite du Musée de l\'Histoire et des Civilisations (nouveau musée national inauguré en 2014), des arts islamiques à travers 5 000 ans d\'histoire.',contact:'+212 537-701-919'},
    ]
  },

  casa:{
    name:'Casablanca',headerImg:'https://cdn.britannica.com/16/177616-050-0167E767/Casablanca-Morocco.jpg',eyebrow:'Métropole atlantique',subtitle:'Casa — Capitale économique · Fondée au XVe siècle',
    gradient:'linear-gradient(160deg,#050f1e,#0d2a4a)',
    histoire:{
      texte:`Casablanca est la capitale économique du Maroc et la plus grande ville du pays avec plus de 4 millions d'habitants. Fondée au VIIe siècle sous le nom d'Anfa par une tribu berbère, elle est détruite par les Portugais en 1468 puis reconstruite. Le Protectorat français (1912-1956) la transforme d'un village de 20 000 habitants en une métropole moderne selon le plan visionnaire de l'urbaniste Henri Prost.\n\nLa Mosquée Hassan II (1993), avec son minaret de 210 m — le deuxième plus haut au monde — est la deuxième plus grande mosquée du monde et la seule à être construite partiellement sur l'océan Atlantique.`,
      timeline:[
        {yr:'VIIe s.',tx:'Fondation de la cité Anfa par la tribu berbère des Barghwata'},
        {yr:'1468',tx:'Destruction par les Portugais et reconstruction sous le nom Casa Branca'},
        {yr:'1907',tx:'Début de la construction du port moderne de Casablanca'},
        {yr:'1912',tx:'Le Protectorat français lance la modernisation urbaine de masse'},
        {yr:'1993',tx:'Inauguration de la Mosquée Hassan II par Hassan II'},
      ],
      photos:[
        {bg:'url(https://cdn.kimkim.com/files/a/images/bc6e3aaee81c7215e6493bc5120ee48ab86eb629/big-5ed6fa65c18c7cdabb3ec9f03081dd2a.jpg) center/cover',label:'Mosquée Hassan II'},
        {bg:'url(https://www.casablancacity.ma/couvertures/article/1LL3V4TMHCcPCZfwugGluy94XBQSNwfEeSmtlq45.png) center/cover',label:'Art Déco centre-ville'},
        {bg:'url(https://image.arrivalguides.com/1230x800/15/36916c4d825db26902f8fc03e1f65a02.jpg) center/cover',label:'Corniche Ain Diab'},
        {bg:'url(https://d3mc2wqt0g7xc3.cloudfront.net/media-test/point25741.jpg) center/cover',label:'Port de Casa'},
]
    },
    sites:[
      {type:'Monument',name:'Mosquée Hassan II',desc:'2e plus grande mosquée du monde (180 000 fidèles), minaret de 210 m, plancher en verre sur l\'Atlantique, visites guidées pour non-musulmans.'},
      {type:'Médina',name:'Médina de Casablanca',desc:'Ancienne médina du XIXe siècle, moins touristique mais très authentique : marché de fruits, artisans traditionnels et cafés populaires.'},
      {type:'Patrimoine',name:'Quartier Art Déco',desc:'Plus grande concentration d\'architecture Art Déco d\'Afrique, construite dans les années 1920-1930 : villa Zevaco, immeuble Rialto, cinéma Royal.'},
      {type:'Plage',name:'Corniche & Ain Diab',desc:'Front de mer de 10 km avec plages privées, clubs de plage branchés, hôtels de luxe et restaurants avec vue sur l\'Atlantique.'},
      {type:'Musée',name:'Musée de la Fondation ONA',desc:'Art contemporain marocain et africain dans un bâtiment néo-mauresque modernisé, collections permanentes et expositions temporaires.'},
      {type:'Shopping',name:'Morocco Mall',desc:'Plus grand centre commercial d\'Afrique (250 000 m²), aquarium de 1,5 million de litres, 400 boutiques et 80 restaurants.'},
    ],
    hotels:[
      {name:'Four Seasons Casablanca',stars:'★ ★ ★ ★ ★',gradient:"url('https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-182,0300-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/CBL/CBL_101_original.jpg') center/cover",desc:'Face à l\'Atlantique, suites avec vue océan, spa de 2 800 m², 3 piscines, 4 restaurants dont un sur la plage privée.',price:'4 500 MAD',link:'https://www.fourseasons.com'},
      {name:'Hyatt Regency Casablanca',stars:'★ ★ ★ ★ ★',gradient:"url('https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/04/03/0748/Hyatt-Regency-Casablanca-P179-Entrance.jpg/Hyatt-Regency-Casablanca-P179-Entrance.16x9.jpg') center/cover",desc:'Palace sur la place Mohammed V, vue sur la mosquée Hassan II, spa, piscine chauffée et 5 restaurants gastronomiques.',price:'2 800 MAD',link:'https://www.hyatt.com'},
      {name:'Hôtel Novotel Casa City Center',stars:'★ ★ ★ ★',gradient:"url('https://res.klook.com/klook-hotel/image/upload/trip/22030g00000080uw0EB02_R_550_412_R5.jpg') center/cover",desc:'Hôtel d\'affaires moderne en plein centre, piscine extérieure, restaurant panoramique, accès facile à la médina et à la gare.',price:'950 MAD',link:'https://www.booking.com'},
    ],
    restaurants:[
      {name:'La Sqala',stars:'★★★★',cuisine:'Marocain traditionnel',desc:'Dans les fortifications portugaises du XVIIIe siècle, jardin d\'orangers, pastilla de pigeon et tagine au four de bois.',phone:'+212 522-260-960',insta:'lasqala_casa'},
      {name:"Rick's Café",stars:'★★★★★',cuisine:'Américain & Marocain',desc:'Reproduction fidèle du café du film Casablanca de 1942, piano bar, cocktails d\'époque et cuisine maroco-américaine.',phone:'+212 522-274-207',insta:'rickscafe_casablanca'},
      {name:'Le Cabestan',stars:'★★★★',cuisine:'Fruits de mer & poissons',desc:'La meilleure table de poissons de Casa, sur la Corniche avec vue sur l\'Atlantique, homards vivants et sole meunière.',phone:'+212 522-394-102',insta:'lecabestan_casa'},
      {name:'Bô-Zin',stars:'★★★★',cuisine:'Fusion asio-marocaine',desc:'Restaurant tendance sur la Corniche, cuisine fusion maroco-asiatique créative, bar lounge et DJ le week-end.',phone:'+212 522-369-797',insta:'bozin_casa'},
    ],
    activites:[
      {type:'Culturel',name:'Circuit Art Déco guidé',desc:'Tour à pied ou en rickshaw des chefs-d\'œuvre architecturaux Art Déco du centre-ville avec architecte guide. 2h environ.',contact:'+212 522-618-000'},
      {type:'Shopping',name:'Morocco Mall & Twin Center',desc:'Shopping dans les deux plus grands centres commerciaux du Maroc, aquarium géant au Morocco Mall inclus dans le ticket.',contact:'+212 522-979-797'},
      {type:'Culturel',name:'Visite Mosquée Hassan II',desc:'Visites guidées intérieures en français, anglais et espagnol de la 2e plus grande mosquée du monde (sauf vendredi matin).',contact:'+212 522-202-285'},
      {type:'Sport',name:'Surf Ain Diab',desc:'École de surf sur la Corniche pour débutants et intermédiaires, cours collectifs et individuels, planches à louer.',contact:'+212 661-234-567'},
    ]
  },

  marrakech:{
    name:'Marrakech',headerImg:'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600&q=80', headerPos:'50%',eyebrow:'Sud-Ouest du Maroc',subtitle:'La Ville Rouge · Fondée en 1062',
    gradient:'linear-gradient(160deg,#2d0d0d,#8b1a1a)',
    histoire:{
      texte:`Marrakech, la "Perle du Sud" ou "La Ville Rouge", fut fondée en 1062 par Youssef Ibn Tachfine, chef de la tribu almoravide. Capitale de deux dynasties (Almoravides et Almohades), elle a donné son nom au Maroc dans de nombreuses langues européennes (Morocco, Marruecos, Marokko).\n\nLa place Djemaa el-Fna, classée chef-d'œuvre du patrimoine oral et immatériel de l'UNESCO en 2008, est le cœur palpitant de la ville. Marrakech est aujourd'hui la destination touristique la plus visitée du Maroc avec plus de 3 millions de visiteurs par an.`,
      timeline:[
        {yr:'1062',tx:'Fondation par Youssef Ibn Tachfine, chef de la tribu almoravide'},
        {yr:'1147',tx:'Prise par les Almohades, construction de la Koutoubia (minaret 70 m)'},
        {yr:'1672',tx:'Capitale sous Moulay Ismail, essor des jardins et des palais'},
        {yr:'1985',tx:'Médina de Marrakech classée Patrimoine mondial UNESCO'},
        {yr:'2008',tx:'Djemaa el-Fna classée Patrimoine immatériel UNESCO'},
      ],
      photos:[
        {bg:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Djemaa_el_Fna.jpg/1920px-Djemaa_el_Fna.jpg) center/cover',label:'Djemaa el-Fna'},
        {bg:'url(https://tse4.mm.bing.net/th/id/OIP.72nCOTA2oX5UvjVoBiFHGwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3) center/cover',label:'Jardins Majorelle'},
        {bg:'url(https://th.bing.com/th/id/R.5df21899208b698d83ba7b7de50edaa7?rik=7VFNTULKbguCVA&pid=ImgRaw&r=0) center/cover',label:'Palais Bahia'},
        {bg:'url(https://www.marrakechtriptours.com/wp-content/uploads/2019/01/27853175778_1a671dc7bf_b-1.jpg) center/cover',label:'Médersa Ben Youssef'},
]
    },
    sites:[
      {type:'Place UNESCO',name:'Place Djemaa el-Fna',desc:'La place la plus célèbre d\'Afrique : conteurs, musiciens gnaoua, charmeurs de serpents, lanceurs de couteaux et halqa. Magique à la tombée de la nuit.'},
      {type:'Jardin & Musée',name:'Jardin Majorelle & Musée YSL',desc:'Jardin exotique bleu cobalt de Jacques Majorelle (1924), racheté par Yves Saint Laurent, musée Berbère unique et mémorial YSL.'},
      {type:'Monument',name:'Médersa Ben Youssef',desc:'Plus grande école coranique du Maghreb médiéval (1565), chef-d\'œuvre de zelliges, boiseries sculptées et stuc ciselé à la main.'},
      {type:'Palais',name:'Palais Bahia',desc:'Palais du XIXe siècle (8 ha), 160 pièces aux décors de marbre de Carrare, cèdre gravé et zellige multicolore. "Bahia" signifie "brillance".'},
      {type:'Site historique',name:'Tombeaux Saadiens',desc:'Nécropole royale du XVIe siècle redécouverte en 1917, décorée de dorures, marbre de Carrare et colonnes de verd antique.'},
      {type:'Monument',name:'Koutoubia',desc:'Minaret du XIIe siècle, modèle de la Giralda de Séville et de la Tour Hassan de Rabat. Le plus haut édifice de Marrakech (70 m).'},
    ],
    hotels:[
      {name:'La Mamounia',stars:'★ ★ ★ ★ ★',desc:'Palace légendaire depuis 1923, favori de Winston Churchill et des stars internationales. Jardins de 8 ha, spa de 2 500 m², 3 piscines.',price:'8 500 MAD',gradient:"url('https://s3.amazonaws.com/fathom_media/photos/1-la-mamounia-marrakech-morocco-main-entrance.jpg.1200x800_q85_crop.jpg') center/cover",link:'https://www.mamounia.com'},
      {name:'Royal Mansour',stars:'★ ★ ★ ★ ★',desc:'Palais privé de Mohammed VI, 53 riads individuels avec piscine privée, 3 restaurants étoilés Michelin, spa de référence mondiale.',price:'12 000 MAD',gradient:"url('https://www.travelplusstyle.com/wp-content/gallery/royal-mansour-marrakech/114844207-h1-hd_grand_riad_patio.jpg') center/cover",link:'https://www.royalmansour.ma'},
      {name:'Riad El Fenn',stars:'★ ★ ★ ★ ★',desc:'Riad de 28 chambres uniques décoré d\'art contemporain, 4 piscines, bibliothèque, hammam et restaurant de cuisine créative.',price:'3 800 MAD',gradient:"url('https://www.travelplusstyle.com/wp-content/gallery/riad-el-fenn-marrakech-medina/maincourtyard2saadalami.jpg') center/cover",link:'https://www.riadelfenn.com'},
    ],
    restaurants:[
      {name:'Dar Yacout',stars:'★★★★★',cuisine:'Marocain royal',desc:'Dîner de prestige dans un palais du XVIIIe siècle, 6 salles décorées de zellige, musique gnaoua en live, menu unique de spécialités royales.',phone:'+212 524-382-929',insta:'daryacout'},
      {name:'Nomad',stars:'★★★★',cuisine:'Marocain contemporain',desc:'Rooftop tendance avec vue sur les souks, cuisine marocaine revisitée créativement, carte de cocktails sans alcool originaux.',phone:'+212 524-381-609',insta:'nomadmarrakech'},
      {name:'Le Jardin',stars:'★★★★',cuisine:'Méditerranéen',desc:'Jardin intérieur luxuriant au cœur de la médina, cuisine végétarienne et méditerranéenne fraîche, brunch du dimanche réputé.',phone:'+212 524-378-295',insta:'lejardin_marrakech'},
      {name:'Café des Épices',stars:'★★★',cuisine:'Terrasse vue souks',desc:'Terrasse sur 3 étages dominant le marché des épices de la place Rahba Kedima, jus frais et snacking marocain.',phone:'+212 524-391-770',insta:'cafedesepices'},
    ],
    activites:[
      {type:'Bien-être',name:'Hammam traditionnel',desc:'Rituel complet au célèbre hammam Dar el-Bacha (XIXe s.) : savon beldi artisanal, gommage kessa, massage à l\'huile d\'argan.',contact:'+212 524-441-628'},
      {type:'Aventure',name:'Montgolfière au lever du soleil',desc:'Vol en ballon au-dessus de Marrakech, palmeraie et montagnes Atlas, champagne à l\'atterrissage dans une palmeraie berbère.',contact:'+212 524-432-843'},
      {type:'Aventure',name:'Quad & buggy dans la palmeraie',desc:'Circuit en quad ou en buggy dans la palmeraie de Marrakech (3 millions de palmiers), guides locaux, 1h ou 2h de parcours.',contact:'+212 524-329-505'},
      {type:'Culturel',name:'Cours de cuisine marocaine',desc:'Visite du souk des épices avec un chef, puis atelier de 3h pour préparer pastilla, tagine et corne de gazelle.',contact:'+212 524-441-600'},
    ]
  },

  essaouira:{
    name:'Essaouira', headerImg:'https://media.routard.com/image/13/1/photo.1575131.jpg',eyebrow:'Atlantique — Marrakech-Safi',subtitle:'Cité des Alizés · Fondée en 1765',
    gradient:'linear-gradient(160deg,#0a1a2a,#1a3a5c)',
    histoire:{
      texte:`Essaouira, l'ancienne Mogador, est une ville portuaire fortifiée fondée en 1765 par le sultan Sidi Mohammed ben Abdallah sur l'emplacement d'un ancien comptoir phénicien. Sa médina, dessinée par l'architecte français Théodore Cornut dans un style néo-classique unique au Maroc, est classée au patrimoine mondial de l'UNESCO depuis 2001.\n\nCarrefour historique entre l'Afrique subsaharienne et l'Europe, Essaouira est célèbre pour ses remparts en pierre ocre, ses ébénistes spécialistes du bois de thuya, et ses vents constants (Force 4-6 en été) qui en font la capitale mondiale du windsurf.`,
      timeline:[
        {yr:'~600 av. J.-C.',tx:'Comptoir phénicien de Mogador, premier établissement connu'},
        {yr:'1506',tx:'Occupation portugaise et construction d\'un fortin sur l\'île'},
        {yr:'1765',tx:'Fondation de la ville actuelle par le sultan Sidi Mohammed ben Abdallah'},
        {yr:'1912–1956',tx:'Port actif sous le Protectorat français, exportation de produits sahéliens'},
        {yr:'2001',tx:'Médina classée Patrimoine mondial UNESCO'},
      ],
      photos:[
        {bg:'url(https://m1.quebecormedia.com/emp/emp/288364_210732b2bd7dd7-bcbc-47fa-94c8-35ec986907bd_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=4272&h=2848&width=1200) center/cover',label:'Remparts & Skala'},
        {bg:'url(https://media.routard.com/image/08/6/photo.1575086.jpg) center/cover',label:'Port de pêche'},
        {bg:'url(https://exploreessaouira.com/wp-content/uploads/2022/08/Essaouira-ramparts-northern-view.jpg) center/cover',label:'Plage & alizés'},
        {bg:'url(https://www.riadespritbleu.com/wp-content/uploads/2023/03/espritbleu-essaouira-medina-square.jpg) center/cover',label:'Médina bleue'},
      ]
    },
    sites:[
      {type:'Médina UNESCO',name:'Médina & Skala de la Ville',desc:'Remparts du XVIIIe siècle avec canons portugais en bronze, vue sur l\'Atlantique et les îles Purpuraires. Ruelles commerçantes aux boutiques de thuya.'},
      {type:'Site',name:'Port de pêche',desc:'Port coloré où des centaines de barques bleues et orangées rentrent chaque matin. Criée aux poissons à 8h, atmosphère unique.'},
      {type:'Plage',name:'Plage d\'Essaouira',desc:'12 km de plage de sable fin ventée idéale pour windsurf, kitesurf et balade à cheval en bord de mer.'},
      {type:'Nature',name:'Îles Purpuraires',desc:'Archipel visible depuis les remparts, réserve naturelle avec colonie de goélands d\'Audouin. Excursion en bateau possible.'},
      {type:'Artisanat',name:'Ateliers de thuya',desc:'Le thuya est un bois précieux odorant propre à la région d\'Essaouira. Les ébénistes fabriquent des objets d\'art uniques en marqueterie.'},
      {type:'Musée',name:'Musée Sidi Mohammed ben Abdallah',desc:'Arts populaires et traditions musicales d\'Essaouira, instruments de musique gnaoua et costumes traditionnels de la région.'},
    ],
    hotels:[
      {name:"Hôtel L'Heure Bleue Palais",stars:'★ ★ ★ ★ ★',desc:'L\'unique 5 étoiles d\'Essaouira, dans un palais du XIXe siècle, piscine chauffée, spa, restaurant gastronomique et vue sur les remparts.',price:'2 100 MAD',gradient:"url('https://www.heure-bleue.com/_novaimg/galleria/1436448.jpg') center/cover",link:'https://www.lheure-bleue.com'},
      {name:'Riad Mimouna',stars:'★ ★ ★ ★',desc:'Riad authentique dans la médina, cour intérieure fleurie, terrasse vue mer, hammam privé et table d\'hôtes réputée.',price:'850 MAD',gradient:"url('https://www.atalayar.com/media/atalayar/images/2024/01/16/2024011612153683785.jpg') center/cover",link:'https://www.booking.com'},
      {name:'Villa Maroc',stars:'★ ★ ★',desc:'Cinq maisons d\'artisans reliées, vue sur la mer et les remparts, ambiance intimiste, petits-déjeuners copieux et décor d\'art contemporain.',price:'600 MAD',gradient:"url('https://www.steppestravel.com/app/uploads/2019/06/roof-terrace-villa-maroc-essaouira-morocco.jpg') center/cover",link:'https://www.booking.com'},
    ],
    restaurants:[
      {name:'Chez Sam',stars:'★★★★',cuisine:'Fruits de mer frais',desc:'Dans le port, poissons et fruits de mer grillés servis en terrasse face aux bateaux. La meilleure table de poissons d\'Essaouira depuis 1969.',phone:'+212 524-476-238',insta:'chezsamessaouira'},
      {name:'Taros Café',stars:'★★★★',cuisine:'Fusion marocain-européen',desc:'Terrasse sur les remparts au coucher du soleil, cuisine créative, vins marocains, musique gnaoua live le jeudi soir.',phone:'+212 524-476-407',insta:'taroscafe'},
      {name:'Côté Plage',stars:'★★★',cuisine:'Méditerranéen',desc:'Sur la plage, poissons grillés et salades fraîches les pieds dans le sable, idéal après une session de windsurf.',phone:'+212 524-783-500',insta:'coteplage_essaouira'},
      {name:'Lalla Mira',stars:'★★★',cuisine:'Végétarien & Bio',desc:'Restaurant bio végétarien dans une maison historique, produits locaux d\'agriculture raisonnée, jus frais et tisanes du Rif.',phone:'+212 524-475-046',insta:'lallamira_essaouira'},
    ],
    activites:[
      {type:'Sport nautique',name:'Windsurf & Kitesurf',desc:'École de windsurf pour tous niveaux, vent garanti Force 4-6 en été, matériel de qualité et moniteurs certifiés FFS.',contact:'+212 661-987-654'},
      {type:'Culturel',name:'Festival Gnaoua',desc:'Festival international de musique gnaoua et musiques du monde (juin), 30e édition, concerts gratuits en médina et sur la plage.',contact:'https://www.festival-gnaoua.net'},
      {type:'Nature',name:'Randonnée à cheval',desc:'Balade à cheval sur la plage d\'Essaouira au coucher du soleil, jusqu\'au village de Diabat et les ruines de la forteresse portugaise.',contact:'+212 661-456-789'},
      {type:'Artisanat',name:'Atelier thuya',desc:'Initiation à la marqueterie en bois de thuya avec un maître ébéniste de la coopérative d\'artisans d\'Essaouira.',contact:'+212 524-476-100'},
    ]
  },

  agadir:{
    name:'Agadir',eyebrow:'Souss-Massa',subtitle:'Souss atlantique · Reconstruite en 1960',
    gradient:'linear-gradient(160deg,#1a1200,#4a3500)',headerImg:'https://cdn.getyourguide.com/img/tour/6481c4ef598ba.jpeg/98.jpg',
    headerPos:'50%',
    histoire:{
      texte:`Agadir est la principale station balnéaire du Maroc, avec 300 jours de soleil par an. La ville ancienne fut presque entièrement détruite par un violent séisme le 29 février 1960 à 23h47, qui fit plus de 15 000 victimes en 15 secondes — la plus grande catastrophe naturelle de l'histoire moderne du Maroc.\n\nReconstruite selon un plan d'urbanisme moderne et fonctionnel, Agadir est devenue une station internationale avec des infrastructures modernes. Sur la colline dominant la baie, les ruines de la kasbah rappellent en lettres d'argile : "Si tu perles ma mémoire, tu perds ta valeur. Si tu perles ma mémoire, je nais encore."`,
      timeline:[
        {yr:'1505',tx:'Fondation du comptoir portugais d\'agadir ("la colline fortifiée")'},
        {yr:'1760',tx:'Sidi Mohammed ben Abdallah interdit Agadir au profit d\'Essaouira'},
        {yr:'1911',tx:'Crise d\'Agadir : incident diplomatique franco-allemand majeur'},
        {yr:'1960',tx:'Séisme du 29 février : 15 000 morts, ville rasée en 15 secondes'},
        {yr:'1960–1970',tx:'Reconstruction totale selon un plan d\'urbanisme moderne'},
      ],
      photos:[
        {bg:"url('https://a.cdn-hotels.com/gdcs/production4/d1016/72c0b16d-7835-4930-add1-0ebcbedc43c5.jpg') center/cover",label:'Plage d\'Agadir'},
        {bg:"url('https://sunnyexcursion.com/wp-content/uploads/2020/09/agadir-scaled.jpg') center/cover",label:'Baie d\'Agadir'},
        {bg:"url('https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto,w_1300/memphis/xlarge/788381187_Agadir-Kasabah-Cover.png') center/cover",label:'Kasbah'},
        {bg:"url('https://thumbs.dreamstime.com/b/agadir-city-morocco-boats-marina-harbour-agadir-agadir-major-city-morocco-located-shore-atlantic-114069591.jpg') center/cover",label:'Marina'},
]
    },
    sites:[
      {type:'Plage',name:'Plage d\'Agadir',desc:'9 km de plage de sable fin doré, la plus longue plage balnéaire équipée du Maroc. Eau chaude (20-23°C) toute l\'année, promenade animée.'},
      {type:'Site historique',name:'Kasbah Agadir Oufella',desc:'Ruines de l\'ancienne citadelle sur la colline dominant la baie, inscription en lettres d\'argile en souvenir du séisme, panorama à 360°.'},
      {type:'Marché',name:'Souk El Had',desc:'Le plus grand marché couvert du Maroc avec 6 000 boutiques sur 8 ha : épices, cuir, artisanat berbère, fruits et légumes du Souss.'},
      {type:'Musée',name:'Musée du Patrimoine Amazigh',desc:'Unique musée au Maroc consacré exclusivement à la culture amazighe : bijoux en argent, tapis berbères, poteries et costumes traditionnels du Souss.'},
      {type:'Parc',name:'Parc de la Vallée',desc:'20 ha de jardins paysagers en plein centre-ville, idéal en famille : zoo animalier, aire de jeux, lac artificiel et cafés en plein air.'},
      {type:'Nature',name:'Parc National Souss-Massa',desc:'Réserve naturelle à 30 km au sud, flamants roses, ibis chauves (espèce menacée), gazelles dorcas et observation d\'oiseaux migrateurs.'},
    ],
    hotels:[
      {name:'Sofitel Agadir Royal Bay Resort',stars:'★ ★ ★ ★ ★',desc:'Resort de luxe en bord de plage, 5 restaurants dont un gastronomique, spa de 3 000 m², piscines à débordement sur l\'Atlantique.',price:'3 200 MAD',gradient:"url('https://www.avenuedesvoyages.fr/wp-content/uploads/2020/07/Sofitel-Agadir-Royal-Bay-Resort-1.jpg') center/cover",link:'https://www.sofitel.com'},
      {name:'RIU Palace Tikida Agadir',stars:'★ ★ ★ ★ ★',desc:'Resort tout inclus directement sur la plage, 7 piscines, 9 restaurants et bars, animation et sports aquatiques sans supplément.',price:'2 500 MAD',gradient:"url('https://www.fascinations-maroc.ch/wp-content/uploads/2020/06/17_Riu_Palace_Tikida_Agadir_Fascinations_Maroc-scaled.jpg') center/cover",link:'https://www.riu.com'},
      {name:'Atlantic Palace Agadir Golf Thalasso & Casino Resort',stars:'★ ★ ★ ★',desc:'Golf 18 trous, thalassothérapie, casino, 5 restaurants et navette plage. Idéal pour les séjours sportifs et bien-être.',price:'1 200 MAD',gradient:"url('https://360travel.by/images/gallery/hotels/1461/22983187.jpg') center/cover",link:'https://www.booking.com'},
    ],
    restaurants:[
      {name:'La Tour de Paris',stars:'★★★★',cuisine:'Français & Marocain',desc:'Institution d\'Agadir depuis 40 ans, cuisine franco-marocaine de qualité, homards vivants, poissons du jour et bons vins.',phone:'+212 528-840-011',insta:'ladelaisagadir'},
      {name:'Pure Passion by Yannick',stars:'★★★★',cuisine:'Méditerranéen créatif',desc:'Chef français étoilé installé à Agadir, cuisine méditerranéenne créative, produits locaux du Souss magnifiés.',phone:'+212 528-823-277',insta:'purepassion_agadir'},
      {name:'La Scala',stars:'★★★',cuisine:'Fruits de mer',desc:'Terrasse sur la marina, spécialité de fruits de mer du Souss : sardines grillées, crevettes géantes et sushi marocain.',phone:'+212 528-846-773',insta:'lascala_agadir'},
      {name:'Mezzo Mezzo',stars:'★★★',cuisine:'Italien & Pizzeria',desc:'La meilleure pizza d\'Agadir selon les habitants, pâtes fraîches, tiramisu maison et terrasse animée sur le front de mer.',phone:'+212 528-841-777',insta:'mezzomezzo_agadir'},
    ],
    activites:[
      {type:'Surf',name:'Surf à Taghazout',desc:'À 20 km au nord, le spot de surf le plus célèbre du Maroc. Écoles pour tous niveaux, planches à louer, instructeurs certifiés.',contact:'+212 661-234-890'},
      {type:'Nature',name:'Excursion Souss-Massa',desc:'Safari ornithologique dans le parc national, observation des ibis chauves et flamants roses, guide naturaliste accompagnateur.',contact:'+212 528-337-737'},
      {type:'Aventure',name:'Excursion Sahara Draa',desc:'Circuit de 2 jours vers Tiznit, Tafraoute et l\'Anti-Atlas, villages amzighs perchés et paysages de granit rose.',contact:'+212 528-840-200'},
      {type:'Bien-être',name:'Thalassothérapie',desc:'Cures de thalasso avec eau de mer atlantique chauffée, soins aux algues et massages aux huiles d\'argan du Souss.',contact:'+212 528-839-000'},
    ]
  },

  taghazout:{
    name:'Taghazout',eyebrow:'Souss-Massa',subtitle:'Village de surfeurs · Vagues légendaires',
    gradient:'linear-gradient(160deg,#1a1000,#4a2800)',headerImg:'https://mediaim.expedia.com/destination/1/fce12b04208a70d76ded7df136328ff9.jpg',
    headerPos:'45%',
    histoire:{
      texte:`Taghazout est un petit village de pêcheurs amazigh situé à 18 km au nord d'Agadir. Longtemps connu des seuls pêcheurs locaux, il est "découvert" par des surfeurs hippies américains et australiens dans les années 1970 qui s'y installent pour les vagues exceptionnelles de l'Anchor Point.\n\nLa vague d'Anchor Point — une droite longue pouvant atteindre 400 mètres — est classée parmi les 10 meilleures vagues droites du monde. Aujourd'hui, Taghazout est devenu une destination surf internationale, tout en préservant son atmosphère de village authentique et bohème.`,
      timeline:[
        {yr:'1970s',tx:'Découverte par les surfeurs hippies américains de la vague d\'Anchor Point'},
        {yr:'1985',tx:'Taghazout apparaît dans les magazines de surf internationaux'},
        {yr:'2000s',tx:'Développement des premières camps et écoles de surf'},
        {yr:'2018',tx:'Inauguration de Taghazout Bay, resort touristique haut de gamme'},
        {yr:'2020s',tx:'Destination surf et wellness de référence internationale'},
      ],
      photos:[
        {bg:"url('https://a.storyblok.com/f/64613/1440x1080/8909ddea18/anchor-point-taghazout-surf.jpg') center/cover",label:'Anchor Point'},
        {bg:"url('https://i.pinimg.com/originals/44/43/4f/44434febf74d32693ad0db92e16f62bf.jpg') center/cover",label:'Village'},
        {bg:"url('https://www.stokedtotravel.com/wp-content/uploads/2018/05/DSC_0188-1440x960.jpg') center/cover",label:'Coucher de soleil'},
        {bg:"url('https://images.squarespace-cdn.com/content/v1/529cc11ae4b0d8737039d39e/1644323845793-DIV0NOPN130QV624K9U7/IMG_2426-2.jpg?format=750w') center/cover",label:'Hash Point'},
]
    },
    sites:[
      {type:'Surf',name:'Anchor Point',desc:'Droite légendaire de 400 m, fonctionne avec houle d\'O-NO, meilleure période octobre à mars. Niveau intermédiaire à expert recommandé.'},
      {type:'Surf',name:'Hash Point & Panoramas',desc:'Spots plus accessibles aux débutants et intermédiaires, reef break régulier, idéal pour progresser avec des moniteurs.'},
      {type:'Village',name:'Village de Taghazout',desc:'Ruelles colorées, cafés bohèmes, boutiques de surf vintage, marché de poissons au lever du soleil et couchers de soleil spectaculaires.'},
      {type:'Village',name:'Village de Tamraght',desc:'Village voisin à 3 km au sud, ambiance encore plus authentique, quelques spots de surf moins fréquentés et souk hebdomadaire.'},
      {type:'Nature',name:'Réserve de Biosphère',desc:'Les côtes autour de Taghazout font partie de la réserve de biosphère d\'Arganeraie, protection des arganiers et de l\'écosystème côtier.'},
      {type:'Panorama',name:'Cap Ghir',desc:'Cap rocheux à 15 km au nord, falaises à pic sur l\'Atlantique, phare historique et spots de pêche très appréciés.'},
    ],
    hotels:[
      {name:'Paradis Plage Surf & Yoga Resort',stars:'★ ★ ★ ★ ★',desc:'Resort 5 étoiles de surf et yoga directement sur la plage, piscine à débordement, restaurant bio, cours quotidiens de surf et yoga.',price:'2 800 MAD',gradient:"url('https://pics.tui.com/pics/pics1600x1200/tui/i/il188664.jpg') center/cover",link:'https://www.paradisplage.com'},
      {name:'Taghazout Bay Hotel',stars:'★ ★ ★ ★',desc:'Resort moderne dans la nouvelle marina de Taghazout Bay, vue sur l\'Atlantique, piscine, spa et accès direct à la plage.',price:'1 200 MAD',gradient:"url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/82/8b/06/fairmont-taghazout-bay.jpg?w=1400&h=-1&s=1') center/cover",link:'https://www.booking.com'},
      {name:'Surf Maroc Camp',stars:'★ ★ ★',desc:'Camp de surf historique de Taghazout, forfaits semaine tout inclus (hébergement + cours + repas), ambiance communautaire internationale.',price:'600 MAD',gradient:"url('https://oceanadventure.surf/wp-content/uploads/2022/11/937a2899.webp') center/cover",link:'https://www.surfmaroc.com'},
    ],
    restaurants:[
      {name:'Surf Berbère Café',stars:'★★★',cuisine:'Marocain & International',desc:'Terrasse sur les vagues, petit-déjeuner smoothie bowl, déjeuner tagine, dîner pizza. Table incontournable du village.',phone:'+212 661-456-123',insta:'surfberberecafe'},
      {name:"Jo's Café",stars:'★★★',cuisine:'Healthy food & Bowl',desc:'Cuisine saine et végétarienne, açaï bowls, salades de quinoa, jus verts et snacks énergisants pour les surfeurs.',phone:'+212 661-789-234',insta:'joscafe_taghazout'},
      {name:'Chez Youssef',stars:'★★',cuisine:'Poissons grillés locaux',desc:'Pêcheur devenu cuisinier, sardines et dorades grillées au feu de bois servies avec chermoula, prix doux.',phone:'+212 661-345-678',insta:'chezyoussef_taghazout'},
      {name:'Amouage Restaurant',stars:'★★★★',cuisine:'Gastronomie marocaine',desc:'La plus belle terrasse de Taghazout Bay, cuisine marocaine raffinée, vue panoramique sur l\'Atlantique et l\'Anchor Point.',phone:'+212 528-200-200',insta:'amouage_taghazout'},
    ],
    activites:[
      {type:'Surf',name:'École de surf certifiée',desc:'Cours de surf pour tous niveaux (débutant à expert), petits groupes de 4, moniteurs certifiés FFSurf, matériel complet fourni.',contact:'+212 661-567-890'},
      {type:'Bien-être',name:'Retraite yoga & méditation',desc:'Retraites de 5 à 14 jours de yoga Vinyasa ou Hatha face à l\'Atlantique, double ou triple professeurs, pensée complète.',contact:'https://www.instagram.com/yoga_taghazout'},
      {type:'Aventure',name:'Trek côtier',desc:'Randonnée sur le sentier côtier de Taghazout à Cap Ghir, 15 km de falaises spectaculaires sur l\'Atlantique. Guide local inclus.',contact:'+212 661-234-567'},
      {type:'Nature',name:'Plongée & snorkeling',desc:'Fonds marins riches en mérous, pieuvres et poissons colorés autour des rochers d\'Anchor Point. Sorties en bateau disponibles.',contact:'+212 661-890-123'},
    ]
  },

  merzouga:{
    name:'Merzouga',eyebrow:'Drâa-Tafilalet — Sahara',subtitle:'Porte du Sahara · Erg Chebbi',
    gradient:'linear-gradient(160deg,#2a1500,#6b3500)',headerImg:'https://tse3.mm.bing.net/th/id/OIP.STonErGkWYwn-rLA_CShfwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    headerPos:'50%',
    histoire:{
      texte:`Merzouga est une oasis désertique aux portes de l'Erg Chebbi, le plus beau massif de dunes de sable du Maroc, atteignant 150 m de hauteur et 22 km de longueur. Situé dans la province d'Errachidia à la frontière algérienne, ce village berbère était autrefois un simple point d'eau sur les routes caravanières transsahariennes.\n\nLes dunes de l'Erg Chebbi sont composées de sable fin apporté par le vent depuis le Sahara algérien. Leurs teintes changent dramatiquement au fil de la journée : roses à l'aube, dorées en journée, orangées au crépuscule, rouge sang au couchant. La région est aussi le carrefour des cultures touareg, berbère et gnaoue.`,
      timeline:[
        {yr:'Antiquité',tx:'Route caravanière transsaharienne passant par l\'oasis de Merzouga'},
        {yr:'XIXe s.',tx:'Développement des ksour et des oasis sur la vallée du Draa et du Ziz'},
        {yr:'1950s',tx:'Premières photographies européennes de l\'Erg Chebbi diffusées mondialement'},
        {yr:'1980s',tx:'Premiers touristes occidentaux en chameau dans les dunes'},
        {yr:'2000s',tx:'Merzouga devient la 1ère destination désertique du Maroc'},
      ],
     photos:[
        {bg:"url('https://img.locationscout.net/images/2019-08/merzouga-desert-morocco_l.jpeg') center/cover",label:'Dunes Erg Chebbi'},
        {bg:"url('https://www.vacances-desert.com/upload/photo_prestation_2929.jpg') center/cover",label:'Bivouac berbère'},
        {bg:"url('https://media.routard.com/image/45/5/photo.1525455.jpeg') center/cover",label:'Coucher de soleil'},
        {bg:"url('https://www.marocexpeditiontravel.com/images/guide/erg-chebbi-sand-dunes.jpg') center/cover",label:'Trek chameau'},
]
    },
    sites:[
      {type:'Désert',name:'Erg Chebbi',desc:'Mer de dunes de sable fin sur 22 km de long et 5 km de large, les plus hautes dunes du Maroc (150 m). Spectaculaire au lever et au coucher du soleil.'},
      {type:'Nature',name:'Lac de Merzouga',desc:'Lac temporaire formé après les pluies d\'automne, attirant des flamants roses et des dizaines d\'espèces d\'oiseaux migrateurs.'},
      {type:'Culture',name:'Village gnaoue de Khamlia',desc:'Village à 7 km de Merzouga, descendants d\'esclaves sub-sahariens, concerts de musique gnaoue quotidiens dans des maisons en pisé.'},
      {type:'Ksar',name:'Ksar de Rissani',desc:'Ancienne capitale de la région, ksar médiéval, tombeau de Moulay Ali Chérif (ancêtre de la famille royale alaouite), marché du jeudi.'},
      {type:'Nature',name:'Gorges du Ziz',desc:'À 80 km au nord, gorges spectaculaires creusées par le fleuve Ziz dans le calcaire, palmeraies suspendues et villages de montagne.'},
      {type:'Ksar',name:'Ksar d\'Aït Benhaddou (route)',desc:'En route vers Merzouga via Ouarzazate, le ksar UNESCO d\'Aït Ben Haddou, décor de Lawrence d\'Arabie et Game of Thrones.'},
    ],
    hotels:[
      {name:'Luxury Desert Camp Erg Chebbi',stars:'★ ★ ★ ★ ★',desc:'Camp de tentes de luxe climatisées au pied des grandes dunes, dîner gastronomique, musique gnaoue, ciel étoilé exceptionnel.',price:'3 500 MAD',gradient:"url('https://th.bing.com/th/id/R.407f2318e84406e1658171e034387ef6?rik=dvlu6ORc2i308A&pid=ImgRaw&r=0') center/cover",link:'https://www.booking.com'},
      {name:'Kasbah Derkaoua',stars:'★ ★ ★ ★',desc:'Kasbah en pisé face aux dunes, piscine extérieure chauffée, restaurant avec produits du terroir, excursions en chameau organisées.',price:'900 MAD',gradient:"url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/92/de/8b/kasbah-ksar-merzouga.jpg?w=900&h=-1&s=1') center/cover",link:'https://www.booking.com'},
      {name:'Riad Nezha Merzouga',stars:'★ ★ ★',desc:'Riad familial avec vue directe sur les dunes, terrasse pour observer le lever du soleil depuis son lit, cuisine berbère authentique.',price:'450 MAD',gradient:"url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/59/63/8a/riad-nezha.jpg?w=700&h=-1&s=1') center/cover",link:'https://www.booking.com'},
    ],
    restaurants:[
      {name:'Restaurant Berbère des Dunes',stars:'★★★',cuisine:'Tagine & Méchoui',desc:'Tables basses dans une tente berbère, tagine d\'agneau aux dattes et abricots, couscous aux 7 légumes, thé cérémoniel.',phone:'+212 535-577-145',insta:'berbere_merzouga'},
      {name:'Auberge du Soleil',stars:'★★',cuisine:'Cuisine saharienne',desc:'Terrasse avec vue sur les dunes, méchoui entier cuit au four de terre, harira aux légumes du désert et crêpes msemen.',phone:'+212 535-577-200',insta:'aube_soleil_merzouga'},
      {name:'Camp Dîner sous les Étoiles',stars:'★★★★',cuisine:'Dîner nomade en plein désert',desc:'Repas servi dans les dunes à la lueur des bougies, musique touareg live, menu complet avec produits frais transportés le jour même.',phone:'+212 661-789-012',insta:'desert_dinner_merzouga'},
      {name:'Café Yasmina',stars:'★★',cuisine:'Snack & thé berbère',desc:'Le café historique de Merzouga, point de rendez-vous des chameliers, thé à la menthe-gingembre et crêpes msemen du matin.',phone:'+212 535-577-100',insta:'cafeyasmina_merzouga'},
    ],
    activites:[
      {type:'Aventure',name:'Trek chameau au coucher du soleil',desc:'2h de balade à dos de chameau jusqu\'au sommet des grandes dunes, nuit en bivouac berbère, thé et musique gnaoue sous les étoiles.',contact:'+212 661-789-012'},
      {type:'Sport',name:'Sandboard sur l\'Erg Chebbi',desc:'Descente en sandboard sur les pentes de sable des grandes dunes, planches fournies, sans expérience préalable nécessaire.',contact:'+212 535-577-200'},
      {type:'Aventure',name:'Circuit 4x4 Grand Sud',desc:'Circuit de 2 jours en 4x4 : gorges du Ziz, Erfoud, Rissani, lac Iriki — le cœur géologique et culturel du Sahara marocain.',contact:'+212 535-577-300'},
      {type:'Culturel',name:'Soirée gnaoue à Khamlia',desc:'Concert privé de musique gnaoue dans la maison d\'un musicien du village, suivi d\'un dîner couscous en famille.',contact:'+212 661-234-567'},
    ]
  },

  ouarzazate:{
    name:'Ouarzazate',eyebrow:'Drâa-Tafilalet — Sud',subtitle:'Porte du Désert · Hollywood du Maroc',
    gradient:'linear-gradient(160deg,#2a1800,#7a4000)', headerImg:'https://www.vivamorocco.com/wp-content/uploads/2017/08/Ouarzazate-morocco-768x585.jpg',
    headerPos:'40%',
    histoire:{
      texte:`Ouarzazate, surnommée la "Porte du Désert" et "Hollywood du Maroc", est une ville carrefour entre le Haut Atlas et le Sahara. Fondée par le Protectorat français en 1928 comme poste militaire, elle contrôle les routes caravanières vers le Sahara.\n\nElle est mondialement connue pour ses studios de cinéma CLA qui ont accueilli plus de 200 productions depuis 1983, dont Lawrence d'Arabie (Lean, 1962), Gladiator (Scott, 2000), Game of Thrones et Babel (Iñárritu, 2006). Le ksar fortifié d'Aït-Ben-Haddou, à 30 km, est classé au patrimoine mondial de l'UNESCO depuis 1987.`,
      timeline:[
        {yr:'1928',tx:'Fondation du poste militaire français de Ouarzazate'},
        {yr:'1962',tx:'Tournage de Lawrence d\'Arabie, premier film majeur dans la région'},
        {yr:'1983',tx:'Ouverture des studios CLA, premiers studios professionnels d\'Afrique'},
        {yr:'1987',tx:'Ksar d\'Aït-Ben-Haddou classé Patrimoine mondial UNESCO'},
        {yr:'2000',tx:'Gladiator de Ridley Scott, consécration internationale des studios'},
      ],
      photos:[
        {bg:"url('https://tse1.mm.bing.net/th/id/OIP.EdrCK3HyVj-gI0nWDrr7YAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3') center/cover",label:'Aït-Ben-Haddou'},
        {bg:"url('https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg') center/cover",label:'Kasbah Taourirt'},
        {bg:"url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/34/cb/d6/caption.jpg?w=1200&h=-1&s=1') center/cover",label:'Studios cinéma'},
        {bg:"url('https://photo620x400.mnstatic.com/d62224bd960add4c5e88752c90d3b3f7/gorges-du-dades.jpg') center/cover",label:'Gorges Dadès'},
]
    },
    sites:[
      {type:'Site UNESCO',name:'Ksar d\'Aït-Ben-Haddou',desc:'Village fortifié en pisé ocre du XVIIe siècle, classé UNESCO en 1987. Décor de 20 films majeurs dont Lawrence d\'Arabie, Gladiator et Game of Thrones.'},
      {type:'Monument',name:'Kasbah Taourirt',desc:'Résidence des Glaoui (caïds royaux), kasbah en pisé restaurée avec le soutien de l\'UNESCO en plein centre de Ouarzazate.'},
      {type:'Cinéma',name:'Studios de cinéma CLA',desc:'Visites guidées des plateaux de tournage avec les décors des productions passées. 2e plus grands studios au monde après Hollywood.'},
      {type:'Musée',name:'Musée du Cinéma',desc:'Costumes, accessoires et photos des tournages emblématiques, histoire des 40 ans de cinéma marocain à Ouarzazate.'},
      {type:'Nature',name:'Lac Barrage el-Mansour Eddahbi',desc:'Lac artificiel à 10 km, paradis ornithologique avec flamants roses, aigrettes et canards. Excursions en barque et pique-nique.'},
      {type:'Nature',name:'Gorges du Dadès',desc:'Paysages spectaculaires à 2h30, route en lacets vertigineuse entre des parois de roches rouges, villages de potiers berbères.'},
    ],
    hotels:[
      {name:'Le Berbère Palace',stars:'★ ★ ★ ★ ★',desc:'Palace aux portes du désert, décor de kasbah luxueuse, piscines olympiques et d\'agrément, restaurant gastronomique, spa.',price:'1 800 MAD', gradient:"url('https://images.trvl-media.com/lodging/1000000/190000/189700/189632/d0a2baa8.jpg?impolicy=resizecrop&rw=598&ra=fit') center/cover",link:'https://www.berberepalace.com'},
      {name:'Dar Ahlam',stars:'★ ★ ★ ★ ★',desc:'Kasbah de 10 suites uniques au monde selon le magazine Travel & Leisure, tables dans le désert, expériences sur mesure.',price:'5 500 MAD', gradient:"url('https://d1x2jsuj9gaph.cloudfront.net/imageRepo/3/0/74/200/866/Pool_DSC_3675_P.jpg') center/cover",link:'https://www.darahlam.com'},
      {name:'Riad Ouarzazate',stars:'★ ★ ★',desc:'Riad en pisé traditionnel au centre-ville, terrasse vue sur la kasbah Taourirt, cuisine berbère et excursions organisées.',price:'450 MAD', gradient:"url('https://www.riad-ouarzazate.com/wp-content/uploads/2018/10/NBL3176-5-min-min.jpg') center/cover",link:'https://www.booking.com'},
    ],
    restaurants:[
      {name:'Chez Dimitri',stars:'★★★★',cuisine:'Marocain & Méditerranéen',desc:'Institution de Ouarzazate depuis 1928, la table historique des équipes de tournage Hollywood, cuisine greco-marocaine unique.',phone:'+212 524-887-346',insta:'chezdimitri_ouarzazate'},
      {name:'Restaurant 3 Thés',stars:'★★★',cuisine:'Cuisine du terroir',desc:'Spécialité du méchoui au four de terre, couscous aux légumes du Draa et agneau aux épices du Sahara. Terrasse panoramique.',phone:'+212 524-882-444',insta:'3thes_ouarzazate'},
      {name:'La Kasbah des Sables',stars:'★★★',cuisine:'Berbère traditionnel',desc:'Dans une kasbah en pisé avec vue sur les montagnes, tagine de chèvre montagnard et pain msemen cuit dans un four berbère.',phone:'+212 524-887-500',insta:'kasbahdessables'},
      {name:'Douyria Restaurant',stars:'★★★',cuisine:'Régional Draa-Tafilalet',desc:'Cuisine typique de la région des ksour, pastilla au poulet des palmeraies, couscous au mouton et salades locales.',phone:'+212 524-887-733',insta:'douyria_ouarzazate'},
    ],
    activites:[
      {type:'Circuit',name:'Route des Kasbahs & Gorges Dadès',desc:'2 jours de route vers Boumalne Dadès et Tinghir, gorges spectaculaires, villages de potiers et paysages à couper le souffle.',contact:'+212 524-887-600'},
      {type:'Culturel',name:'Visite Studios CLA',desc:'Visite guidée des décors de Lawrence d\'Arabie, Gladiator et Game of Thrones, avec photos dans les costumes de tournage.',contact:'+212 524-882-223'},
      {type:'Circuit',name:'Gorges du Todra',desc:'À 3h, fissure de 300 m de hauteur pour 10 m de largeur — l\'un des plus beaux canyons du monde. Escalade et randonnée.',contact:'+212 524-895-000'},
      {type:'Culturel',name:'Soirée à Aït-Ben-Haddou',desc:'Visite nocturne du ksar illuminé, spectacle de musique gnaoue dans une maison centenaire en pisé, dîner berbère en terrasse.',contact:'+212 524-880-100'},
    ]
  },

  dakhla:{
    name:'Dakhla',eyebrow:'Sahara Atlantique',subtitle:'Oued Ed-Dahab · Capitale du kitesurf mondial',
   gradient: "url('https://travedis.com/assets/dakhla-1-DGEqa_Xw.jpg') center/cover no-repeat",
    histoire:{
      texte:`Dakhla, ancienne Villa Cisneros du nom du cardinal espagnol, est une péninsule spectaculaire dans le Sahara Atlantique, à 1 700 km au sud de Casablanca. Sous protectorat espagnol de 1884 à 1975, la ville est intégrée au Maroc lors de la Marche Verte organisée par Hassan II le 6 novembre 1975.\n\nAvec sa lagune de 40 km de long aux eaux turquoise chaudes toute l'année (température constante de 22°C), et son vent régulier force 4-6 (el-Alisio), Dakhla est devenue la capitale mondiale du kitesurf et du windsurf, accueillant les championnats du monde dans ces disciplines.`,
      timeline:[
        {yr:'1884',tx:'Établissement du protectorat espagnol, fondation de Villa Cisneros'},
        {yr:'1975',tx:'Marche Verte : intégration au Maroc, renommée Dakhla'},
        {yr:'1985',tx:'Premiers kitesurfeurs découvrent la lagune de Dakhla'},
        {yr:'2000',tx:'Ouverture des premiers camps de kitesurf professionnels'},
        {yr:'2009',tx:'Championnat du monde de kitesurf à Dakhla, consécration internationale'},
      ],
      photos:[
        {bg:"url('https://i.pinimg.com/736x/6c/53/d0/6c53d0d42569afd732e2577897ec38f1.jpg') center/cover",label:'Lagune de Dakhla'},
        {bg:"url('https://i.pinimg.com/736x/26/a2/11/26a211ccb5a8653989e2be96e7f2fa27.jpg') center/cover",label:'Kitesurf'},
        {bg:"url('https://i.pinimg.com/1200x/b7/41/6e/b7416ef20fcee7c4ab0c572bf7b12d32.jpg') center/cover",label:'Dune blanche'},
        {bg:"url('https://i.pinimg.com/1200x/1d/0d/ba/1d0dba9cd2d1bac692913989225ee171.jpg') center/cover",label:'Île aux flamants'},     ]
    },
    sites:[
      {type:'Nature',name:'Lagune de Dakhla',desc:'Lagune de 40 km de long, eaux turquoise à 22°C toute l\'année, vent force 4-5 régulier. Paradis mondial du kitesurf et windsurf depuis 40 ans.'},
      {type:'Nature',name:'Île aux flamants roses',desc:'Colonie de plusieurs milliers de flamants roses visibles en pirogue dans la lagune, protégés dans la réserve naturelle de la baie.'},
      {type:'Nature',name:'Dune Blanche de Dakhla',desc:'Grande dune de sable blanc en bordure de lagune accessible en 4x4, point de vue unique sur les deux rives de la péninsule.'},
      {type:'Site',name:'Ancien Fort espagnol',desc:'Ruines du fort Villa Cisneros datant de 1884, vestiges du passé colonial espagnol dans la vieille ville de Dakhla.'},
      {type:'Pêche',name:'Port de pêche de Dakhla',desc:'L\'un des ports de pêche les plus productifs du Maroc : poulpes, crabes dormeurs, crevettes et sardines en abondance.'},
      {type:'Culture',name:'Culture sahraouie',desc:'Artisanat hassani : bijoux en argent, tentes sahraouies, dromadaires et thé à trois versets — tradition saharienne d\'hospitalité.'},
    ],
    hotels:[
      {name:'Dakhla Attitude',stars:'★ ★ ★ ★',desc:'Le camp de kitesurf de référence mondiale, directement sur la lagune, forfaits tout inclus, spots privatifs, école certifiée IKO.',price:'1 800 MAD',gradient:"url(https://dakhla-attitude.ma/wp-content/uploads/2021/06/DC1-dragon-camp.jpg) center/cover",link:'https://www.dakhlaattitude.com'},
      {name:'Robinson Club Dakhla',stars:'★ ★ ★ ★',desc:'Resort tout inclus sur la lagune, club de kitesurf et windsurf, sports nautiques illimités, animation et restaurants variés.',price:'2 200 MAD',gradient:"url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/b5/0c/3e/new-pool.jpg?w=500&h=400&s=1) center/cover",link:'https://www.robinson.com'},
      {name: 'La Tour d\'Eole Dakhla',stars: '★ ★ ★ ★',desc: 'Éco-lodge de luxe surplombant la lagune, avec piscine à débordement, spa, restaurant gastronomique et école de kitesurf. Chambres confortables et vue imprenable.', price: '2 500 MAD',gradient: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d5/3a/30/la-tour-d-eole.jpg?w=700&h=-1&s=1') center/cover",link: 'https://www.booking.com'},
    ],
    restaurants:[
      {name:'Ocean Vagabond',stars:'★★★★',cuisine:'Fruits de mer & poissons',desc:'La table incontournable de Dakhla, poissons et fruits de mer ultra-frais de la lagune, terrasse sur l\'eau, sunset garanti.',phone:'+212 528-935-100',insta:'oceanvagabond_dakhla'},
      {name:'Chez Younes',stars:'★★★',cuisine:'Marocain & Hassani',desc:'Cuisine sahraouie traditionnelle : méchoui de chameau, couscous au poisson et thé à la menthe servi sous la tente.',phone:'+212 661-234-890',insta:'chezyounes_dakhla'},
      {name:'Le Nomade',stars:'★★★',cuisine:'Fusion atlantique',desc:'Terrasse sur la dune avec vue panoramique sur la lagune, cuisine créative mêlant influences saharienne et atlantique.',phone:'+212 528-935-200',insta:'lenomade_dakhla'},
      {name:'Restaurant du Port',stars:'★★',cuisine:'Poissons grillés',desc:'Simple et délicieux : poissons sortant de la pêche grillés au charbon, prix modestes, ambiance de port authentique.',phone:'+212 528-894-100',insta:'resto_port_dakhla'},
    ],
    activites:[
      {type:'Sport nautique',name:'Kitesurf & Windsurf',desc:'Lagune plate et vent force 4-5 régulier 300 jours/an. École certifiée IKO et VDWS, cours débutants à experts, matériel Cabrinha et North.',contact:'+212 528-935-050'},
      {type:'Pêche',name:'Pêche sportive en mer',desc:'Sorties en mer pour thon rouge, marlin, dorade et courbine dans les eaux riches du Sahara atlantique. Guide expérimenté.',contact:'+212 528-894-100'},
      {type:'Aventure',name:'Quad & buggy dans les dunes',desc:'Circuit en quad ou buggy dans les dunes sahariennes blanches de la péninsule, avec baignade dans la lagune incluse.',contact:'+212 661-789-345'},
      {type:'Culture',name:'Rencontre sahraouie',desc:'Visite d\'une famille sahraouie nomade, cérémonie du thé à trois versets, initiation à la culture hassanie et musique des griots.',contact:'+212 661-456-123'},
    ]
  },
};

let currentCity = null;

function openCity(key) {
  const c = CITIES[key];
  if (!c) return;
  currentCity = key;

  document.getElementById('ov-eyebrow').textContent = c.eyebrow;
  document.getElementById('ov-title').textContent = c.name;
  document.getElementById('ov-subtitle').textContent = c.subtitle;

  document.getElementById('tab-histoire').innerHTML = buildHistoire(c);
  document.getElementById('tab-sites').innerHTML = buildSites(c);
  document.getElementById('tab-hotels').innerHTML = buildHotels(c);
  document.getElementById('tab-restaurants').innerHTML = buildRestaurants(c);
  document.getElementById('tab-activites').innerHTML = buildActivites(c);
  
  const header = document.getElementById('ov-header');
  header.style.background = `linear-gradient(to top,rgba(10,8,5,.97) 0%,rgba(10,8,5,.3) 60%,rgba(10,8,5,.1) 100%), ${c.headerImg ? 'url(' + c.headerImg + ') center ' + (c.headerPos || '40%') + '/cover' : c.gradient}`;
  
  showTab('histoire');
  const ov = document.getElementById('city-overlay');
  ov.style.display = 'block';
  ov.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeCity() {
  document.getElementById('city-overlay').style.display = 'none';
  document.body.style.overflow = '';
  currentCity = null;
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCity(); });

function showTab(name) {
  document.querySelectorAll('.ov-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ov-body').forEach(b => b.classList.remove('active'));
  const tabs = ['histoire','sites','hotels','restaurants','activites'];
  const idx = tabs.indexOf(name);
  document.querySelectorAll('.ov-tab')[idx].classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

function buildHistoire(c) {
  const h = c.histoire;
  const paras = h.texte.split('\n\n').map(p => `<p>${p}</p>`).join('');
  const tl = h.timeline.map(t => `<div class="tl-item"><div class="tl-yr">${t.yr}</div><div class="tl-tx">${t.tx}</div></div>`).join('');
  const photos = h.photos.map(p => `<div class="gal-ph" style="background:${p.bg}"><span class="gal-label">${p.label}</span></div>`).join('');
  return `<div class="histoire-grid"><div><div class="hist-text">${paras}</div><div class="gallery-2x2">${photos}</div></div><div><div class="timeline">${tl}</div></div></div>`;
}

function buildSites(c) {
  const cards = c.sites.map(s => `<div class="site-card"><div class="site-type">${s.type}</div><div class="site-name">${s.name}</div><div class="site-desc">${s.desc}</div></div>`).join('');
  return `<div class="sites-grid">${cards}</div>`;
}

function buildHotels(c) {
  const cards = c.hotels.map(h => `<div class="hotel-ov"><div class="hotel-ov-img" style="background:${h.gradient}"><span style="font-size:9px;color:#e0c888;letter-spacing:.1em">${h.stars}</span><span style="font-size:8px;letter-spacing:.15em;text-transform:uppercase;color:#c9a05a;border:1px solid #c9a05a44;padding:2px 7px">${c.name}</span></div><div class="hotel-ov-body"><div class="hotel-ov-name">${h.name}</div><div class="hotel-ov-desc">${h.desc}</div><div class="hotel-ov-price">À partir de <span>${h.price} MAD</span> / nuit</div><a href="${h.link}" target="_blank" class="btn-reserve">Réserver en ligne</a></div></div>`).join('');
  return `<div class="hotels-ov-grid">${cards}</div>`;
}

function buildRestaurants(c) {
  const cards = c.restaurants.map(r => `<div class="resto-ov"><div class="resto-ov-top"><div class="resto-ov-name">${r.name}</div><div class="resto-ov-stars">${r.stars}</div></div><div class="resto-ov-cuisine">${r.cuisine}</div><div class="resto-ov-desc">${r.desc}</div><div class="resto-ov-contact"><div class="resto-ov-info"><i class="ti ti-phone"></i><a href="tel:${r.phone}">${r.phone}</a></div><div class="resto-ov-info"><i class="ti ti-brand-instagram"></i><a href="https://instagram.com/${r.insta}" target="_blank">@${r.insta}</a></div></div></div>`).join('');
  return `<div class="restos-ov-grid">${cards}</div>`;
}

function buildActivites(c) {
  const cards = c.activites.map(a => `<div class="act-card"><div class="act-type">${a.type}</div><div class="act-name">${a.name}</div><div class="act-desc">${a.desc}</div><div class="act-contact"><i class="ti ti-${a.contact.startsWith('http') ? 'world' : 'phone'}"></i><a href="${a.contact.startsWith('http') ? a.contact : 'tel:' + a.contact}" target="${a.contact.startsWith('http') ? '_blank' : '_self'}">${a.contact}</a></div></div>`).join('');
  return `<div class="acts-grid">${cards}</div>`;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(12,10,8,.99)';
    nav.style.boxShadow = '0 1px 24px rgba(0,0,0,.6)';
  } else {
    nav.style.background = 'rgba(12,10,8,.95)';
    nav.style.boxShadow = 'none';
  }
});