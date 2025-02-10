// Configuration de l'API Instagram
const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media';

// État du panier
let cart = [];

// Déclarer products globalement au début du fichier
const products = [
    {
        id: 'cadres-paysages',
        name: 'Cadres paysages gravés',
        price: '25 €',
        category: 'decoration',
        description: 'Transformez votre intérieur avec ces créations uniques qui capturent la magie des grands espaces. Idéals pour une déco inspirante ou un cadeau original.',
        dimensions: 'Hauteur 40 cm',
        material: 'Bois et acrylique noir',
        features: [
            'Design minimaliste et élégant',
            'Gravure de précision',
            'Cadre noir mat',
            'Plusieurs motifs disponibles'
        ],
        variants: 'Disponible en tailles et couleurs variées pour s\'adapter à votre style.',
        images: [
            'assets/images/products/cadre-van.jpg',
            'assets/images/products/cadre-pins.jpg',
            'assets/images/products/cadre-telesiege.jpg',
            'assets/images/products/cadre-montagne.jpg',
            'assets/images/products/cadre-montagne2.jpg',
            'assets/images/products/cadre-surf.jpg',
            'assets/images/products/cadre-paris.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'planche-voiture',
        name: 'Planche gravée personnalisée - Modèle de votre voiture',
        price: '20 €',
        category: 'decoration',
        description: 'Sublimez votre passion automobile avec cette planche gravée mettant en valeur une illustration détaillée de votre véhicule, accompagnée du logo et du nom de la marque.',
        dimensions: '40 x 20 cm',
        material: 'Bois massif',
        features: [
            'Dimensions standard : 40 x 20 cm',
            'Gravure personnalisée de votre véhicule',
            'Logo et nom de la marque inclus',
            'Planche en bois massif'
        ],
        variants: 'Disponible dans des dimensions plus grandes ou plus petites sur demande.',
        image: 'assets/images/products/planche-voiture.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'planche-boeuf',
        name: 'Les morceaux du bœuf - Planche à découper gravée',
        price: '25 €',
        category: 'decoration',
        description: 'Cette planche à découper, gravée et illustrant les différentes parties du bœuf, est un outil pratique et esthétique qui trouvera parfaitement sa place dans votre cuisine. Parfaite pour les amateurs de cuisine et les passionnés de gastronomie.',
        dimensions: '45 x 30 cm',
        material: 'Bois massif',
        features: [
            'Gravure détaillée des morceaux de bœuf',
            'Planche en bois massif',
            'Design élégant et pédagogique',
            'Idéale comme planche de présentation ou décorative'
        ],
        variants: 'La gravure peut être adaptée pour d\'autres animaux comme la volaille, le porc, l\'agneau...',
        image: 'assets/images/products/planche-boeuf.jpg',
        inStock: true
    },
    {
        id: 'plateau-ardoise',
        name: 'Plateau en ardoise gravé',
        price: 'À partir de 25 €',
        priceDetails: [
            'Petit format (35 x 20 cm) : 25 €',
            'Grand format (45 x 30 cm) : 40 €'
        ],
        category: 'cuisine',
        description: 'Parfaits pour sublimer vos tables, ces plateaux en ardoise sont idéaux pour servir vos apéritifs, fromages, ou tout simplement comme élément de décoration unique. Personnalisables avec vos initiales, une phrase inspirante ou un dessin spécial.',
        dimensions: '35 x 20 cm | 45 x 30 cm',
        material: 'Ardoise',
        features: [
            'Gravure personnalisable',
            'Support en bambou',
            'Finition soignée',
            'Idéal pour fromages et apéritifs',
            'Deux formats au choix',
            'Nettoyage facile'
        ],
        images: [
            'assets/images/products/plateau-ardoise-fromage.jpg',
            'assets/images/products/plateau-ardoise-grandmere.jpg',
            'assets/images/products/plateau-ardoise-charcuterie.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'emojis-mains',
        name: 'Gravures "emojis" de mains',
        price: '15 €',
        category: 'decoration',
        description: 'Apportez une touche fun et expressive à votre intérieur ou offrez un cadeau unique avec nos gravures d\'emojis de mains.',
        dimensions: '20 x 20 cm',
        material: 'Bois et acrylique noir',
        features: [
            'Design minimaliste et expressif',
            'Gravure de précision',
            'Plusieurs modèles disponibles',
            'Personnalisable'
        ],
        images: [
            'assets/images/products/emoji-shaka.jpg',
            'assets/images/products/emoji-ok.jpg',
            'assets/images/products/emoji-peace.jpg',
            'assets/images/products/emoji-rock.jpg',
            'assets/images/products/emoji-finger.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'boules-noel-simple',
        name: 'Boules de Noël gravées simples',
        price: '3 €',
        category: 'decoration',
        description: 'Illuminez votre sapin avec nos boules de Noël gravées en une seule couche ! Des designs élégants et raffinés pour une décoration de Noël unique.',
        dimensions: 'Taille standard',
        material: 'Bois',
        features: [
            'Design en une seule couche',
            'Designs variés (rennes, sapins, paysages...)',
            'Personnalisation possible',
            'Finition soignée'
        ],
        images: [
            'assets/images/products/bnoel-10.jpg',
            'assets/images/products/bnoel-8.jpg',
            'assets/images/products/bnoel-7.jpg',
            'assets/images/products/bnoel-9.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'boules-noel-relief',
        name: 'Boules de Noël en relief',
        price: '10 €',
        category: 'decoration',
        description: 'Donnez du relief à votre sapin avec nos boules de Noël travaillées en plusieurs couches ! Ces créations artisanales offrent un effet de profondeur unique à vos décorations de Noël.',
        dimensions: 'Taille standard',
        material: 'Bois',
        features: [
            'Design en relief multicouche',
            'Effet de profondeur unique',
            'Motifs travaillés avec soin',
            'Finition premium'
        ],
        images: [
            'assets/images/products/bnoel-1.jpg',
            'assets/images/products/bnoel-2.jpg',
            'assets/images/products/bnoel-3.jpg',
            'assets/images/products/bnoel-4.jpg',
            'assets/images/products/bnoel-5.jpg',
            'assets/images/products/bnoel-6.jpg',

        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'sapin-3d',
        name: 'Sapin de Noël 3D',
        price: 'À partir de 10 €',
        priceDetails: [
            'Petit sapin (15 cm) : 10 €',
            'Grand sapin (25 cm) : 15 €',
            'Lot (1 grand + 1 petit) : 20 € au lieu de 25 €'
        ],
        category: 'decoration',
        description: 'Ajoutez une touche d\'élégance à votre déco de Noël avec nos sapins en bois 3D. Disponibles en 5 coloris (lasuré, doré, bois naturel, noir et argenté), nos sapins sont parfaits pour sublimer votre intérieur pendant les fêtes. Que ce soit sur une table, un buffet ou près du sapin principal, ils apporteront une ambiance chaleureuse.',
        dimensions: '15 cm ou 25 cm de hauteur',
        material: 'Bois',
        features: [
            'Design 3D élégant',
            'Disponible en 5 coloris',
            'Base stable incluse',
            'Montage facile',
            'Durable et réutilisable',
            'Deux tailles disponibles'
        ],
        images: [
            'assets/images/products/sapin-1.jpg',
            'assets/images/products/sapin-2.jpg',

        ],
        inStock: true,
        customizable: false,
        variants: [
            'Lasuré',
            'Doré',
            'Bois naturel',
            'Noir',
            'Argenté'
        ]
    },
    {
        id: 'tortue-geometrique',
        name: 'Tortue géométrique',
        price: '15 €',
        category: 'decoration',
        description: 'Une création unique alliant géométrie et nature, parfaite pour une décoration murale moderne et élégante.',
        dimensions: '20 x 20 cm',
        material: 'Bois',
        features: [
            'Design géométrique original',
            'Gravure de précision',
            'Autres dimensions possibles'
        ],
        images: [
            'assets/images/products/tortue-geometrique.jpg',
            'assets/images/products/tortue-geometrique-2.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'triptyque-geometrique',
        name: 'Triptyque géométrique',
        price: '50 €',
        priceUnit: '20 €',
        category: 'decoration',
        description: 'Ensemble de trois panneaux décoratifs aux motifs géométriques modernes. Un design épuré qui s\'intègre parfaitement dans tout intérieur contemporain.',
        dimensions: 'Dimensions sur mesure',
        material: 'Bois',
        features: [
            'Lot de 3 panneaux',
            'Design moderne et minimaliste',
            'Motifs géométriques coordonnés'
        ],
        images: [
            'assets/images/products/triptyque-1.jpg',
        ],
        inStock: true
    },
    {
        id: 'plateau-ginkgo',
        name: 'Plateau gravé motif Ginkgo',
        price: '25 €',
        priceLot: '40 €',
        category: 'decoration',
        description: 'Plateau décoratif avec motif de feuilles de Ginkgo finement gravé. Disponible à l\'unité ou en lot de deux.',
        dimensions: 'Taille personnalisable',
        material: 'Bois',
        features: [
            'Motif naturel élégant',
            'Gravure détaillée',
            'Disponible seul ou en lot'
        ],
        images: [
            'assets/images/products/plateau-ginkgo-1.jpg',
            'assets/images/products/plateau-ginkgo-2.jpg',
            'assets/images/products/plateau-ginkgo-3.jpg'
        ],
        inStock: true
    },
    {
        id: 'plateau-petit-dejeuner',
        name: 'Plateau petit-déjeuner personnalisé',
        price: '20 €',
        priceCustom: '25 €',
        category: 'decoration',
        description: 'Plateau de service en bambou avec gravure thématique petit-déjeuner. Option de personnalisation disponible pour un design unique.',
        dimensions: 'Format standard',
        material: 'Bambou',
        features: [
            'Design petit-déjeuner',
            'Personnalisation possible',
            'Matériau durable',
            'Idéal pour le service'
        ],
        image: 'assets/images/products/plateau-breakfast.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'gorille',
        name: 'Le Gorille - Décoration lumineuse',
        price: '15 €',
        priceWithBase: '20 €',
        category: 'decoration',
        description: 'Silhouette de gorille élégante, disponible avec ou sans socle gravé. Parfait comme décoration ou veilleuse d\'ambiance.',
        dimensions: '18 x 15 cm',
        material: 'Acrylique noir',
        features: [
            'Design minimaliste',
            'Option avec socle personnalisé',
            'Effet d\'ombre projetée'
        ],
        images: [
            'assets/images/products/gorille-1.jpg',
            'assets/images/products/gorille-2.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'porte-clefs-circuit',
        name: 'Porte-clefs Circuit de Spa-Francorchamps',
        price: '4 €',
        category: 'accessoires',
        description: 'Porte-clefs en bois gravé représentant le célèbre circuit de Spa-Francorchamps.',
        dimensions: 'Format porte-clefs',
        material: 'Bois',
        features: [
            'Design du circuit iconique',
            'Gravure de précision',
            'Anneau porte-clefs inclus'
        ],
        images: [
            'assets/images/products/porte-clefs-1.jpg',
            'assets/images/products/porte-clefs-2.jpg'
        ],
        inStock: true
    },
    {
        id: 'cadre-fete-meres',
        name: 'Cadre Photo Cœur - Fête des Mères',
        price: '20 €',
        category: 'cadeaux',
        description: 'Cadre photo en forme de cœur, parfait pour la fête des mères. Peut contenir une photo de 10x15cm.',
        dimensions: '10 x 15 cm',
        material: 'Bois',
        features: [
            'Design en forme de cœur',
            'Espace photo intégré',
            'Personnalisation possible',
            'Support intégré'
        ],
        image: 'assets/images/products/cadre-coeur-maman.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'cercle-meilleure-maman',
        name: 'Cercle "Meilleure Maman"',
        price: '30 €',
        category: 'cadeaux',
        description: 'Décoration circulaire avec texte "Meilleure Maman" et motifs floraux.',
        dimensions: '30 x 30 cm',
        material: 'Bois et acrylique',
        features: [
            'Design élégant',
            'Texte personnalisable',
            'Support mural inclus',
            'Finitions soignées'
        ],
        image: 'assets/images/products/cercle-maman.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'coeur-personnalise',
        name: 'Cœur avec texte personnalisé',
        price: '25 €',
        description: 'Un cœur en bois élégant avec votre message personnalisé gravé. Idéal pour une déclaration d\'amour, un cadeau pour la fête des mères ou simplement pour décorer votre intérieur avec un message qui vous tient à cœur.',
        characteristics: [
            'Design en forme de cœur',
            'Texte entièrement personnalisable',
            'Gravure de qualité',
            'Support intégré',
            'Finition soignée'
        ],
        dimensions: '20 x 20 cm',
        material: 'Bois',
        images: [
            'assets/images/products/coeur-maman1.jpg'
        ],
        category: 'decoration'
    },
    {
        id: 'bouchons-bouteilles',
        name: 'Bouchons de bouteilles gravés',
        price: 'Sur demande',
        category: 'accessoires',
        description: 'Bouchons de bouteilles gravés et personnalisables, parfaits pour ajouter une touche spéciale à vos bouteilles de spiritueux préférées.',
        dimensions: 'Format standard bouchon',
        material: 'Bois',
        features: [
            'Personnalisation sur mesure',
            'Gravures de haute qualité',
            'Parfait pour les cadeaux',
            'Compatible avec la plupart des bouteilles'
        ],
        image: 'assets/images/products/bouchons-bouteilles.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'cadre-vin-apero',
        name: 'Cadre "Vin & Apéro"',
        price: '20 €',
        priceLot: '50 €',
        category: 'decoration',
        description: 'Ensemble de trois cadres décoratifs sur le thème du vin et de l\'apéro. Design minimaliste et élégant mettant en scène des moments de convivialité.',
        dimensions: '20 x 31 cm',
        material: 'Bois et acrylique noir',
        features: [
            'Lot de 3 cadres coordonnés',
            'Design minimaliste',
            'Thème vin et apéro',
            'Parfait pour cuisine ou salle à manger'
        ],
        images: [
            'assets/images/products/vin-apero-1.jpg',
            'assets/images/products/vin-apero-2.jpg',
            'assets/images/products/vin-apero-3.jpg'
        ],
        inStock: true
    },
    {
        id: 'gourde-personnalisee',
        name: 'Gourde personnalisée',
        price: '15 €',
        category: 'accessoires',
        description: 'Gourde isotherme personnalisable avec votre design gravé. Disponible en plusieurs couleurs.',
        dimensions: '80cl',
        material: 'Acier inoxydable',
        features: [
            'Gravure personnalisée',
            'Plusieurs couleurs disponibles',
            'Double paroi isotherme',
            'Prix dégressif pour grandes quantités'
        ],
        images: [
            'assets/images/products/gourde-noire.jpg',
            'assets/images/products/gourde-blanche.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'planches-aperitives',
        name: 'Planches apéritives personnalisées',
        price: 'Sur demande',
        category: 'cuisine',
        description: 'Planches apéritives gravées personnalisables, parfaites pour servir vos amuse-bouches avec style.',
        dimensions: 'Divers formats disponibles',
        material: 'Bois',
        features: [
            'Design personnalisable',
            'Gravure de qualité',
            'Plusieurs formats disponibles',
            'Option de gravure sur planches existantes'
        ],
        images: [
            'assets/images/products/planche-apero-1.jpg',
            'assets/images/products/planche-apero-2.jpg',
            'assets/images/products/planche-apero-3.jpg',
        ],
        inStock: true,
        customizable: true,
        additionalInfo: 'Gravure possible sur vos planches existantes (5€ à 15€ selon la taille du design)'
    },
    {
        id: 'sous-plat-liege',
        name: 'Sous-plat en liège personnalisé',
        price: '10 €',
        priceDetails: [
            'Lot de 3 sous-plats avec le design de votre choix : 10 €'
        ],
        category: 'cuisine',
        description: 'Protégez votre table avec style grâce à nos sous-plats en liège personnalisables. Vendus par lot de 3, ces sous-plats peuvent être gravés avec votre message, logo ou design préféré. Parfaits pour les plats chauds et idéaux pour les restaurants ou votre cuisine.',
        dimensions: '19 cm de diamètre',
        material: 'Liège',
        features: [
            'Lot de 3 sous-plats identiques',
            'Design personnalisable',
            'Matériau naturel et durable',
            'Résistant à la chaleur',
            'Protection efficace de vos surfaces',
            'Facile à nettoyer'
        ],
        images: [
            'assets/images/products/sous-plat-1.jpg'
        ],
        inStock: true,
        customizable: true,
        examples: [
            'Message "Attention c\'est chaud !"',
            'Logo de restaurant',
            'Design personnalisé',
            'Pictogramme au choix'
        ]
    },
    {
        id: 'sous-verres-ardoise',
        name: 'Sous-verres en ardoise personnalisés',
        price: '15 €',
        category: 'cuisine',
        description: 'Lot de 6 sous-verres en ardoise avec support en bambou. Chaque sous-verre peut être personnalisé avec le design de votre choix.',
        dimensions: '10 cm de diamètre',
        material: 'Ardoise et bambou',
        features: [
            'Lot de 6 sous-verres',
            'Support en bambou inclus',
            'Personnalisation incluse',
            'Design au choix'
        ],
        images: [
            'assets/images/products/sous-verres-1.jpg',
            'assets/images/products/sous-verres-2.jpg',
            'assets/images/products/sous-verres-3.jpg',
            'assets/images/products/sous-verres-4.jpg',
            'assets/images/products/sous-verres-5.jpg',
            'assets/images/products/sous-verres-6.jpg',
            'assets/images/products/sous-verres-7.jpg',
            'assets/images/products/sous-verres-8.jpg',
            'assets/images/products/sous-verres-9.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'brosse-cheveux',
        name: 'Brosse à cheveux personnalisée',
        price: '6 €',
        category: 'accessoires',
        description: 'Brosse à cheveux en bois avec gravure personnalisée sur l\'avant et possibilité de gravure sur la face arrière selon vos désirs.',
        dimensions: 'Format standard',
        material: 'Bois',
        features: [
            'Gravure recto-verso possible',
            'Design personnalisable',
            'Plusieurs motifs disponibles',
            'Finition soignée'
        ],
        images: [
            'assets/images/products/brosse-1.jpg',
            'assets/images/products/brosse-2.jpg',
            'assets/images/products/brosse-3.jpg',
            'assets/images/products/brosse-4.jpg',
            'assets/images/products/brosse-5.jpg',
            'assets/images/products/brosse-6.jpg',
            'assets/images/products/brosse-7.jpg',
            'assets/images/products/brosse-8.jpg',
            'assets/images/products/brosse-9.jpg',
            'assets/images/products/brosse-10.jpg',
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'lampe-tourbillon',
        name: 'Lampe "Spirale"',
        price: '45 €',
        pricePied: '50 €',
        category: 'decoration',
        description: 'Lampe décorative en spirale en bois. Disponible en version suspendue ou sur pied avec douille.',
        dimensions: 'Sur mesure',
        material: 'Bois',
        features: [
            'Design unique',
            'Version suspendue ou sur pied',
            'Douille incluse',
            'Effet lumineux spectaculaire'
        ],
        images: [
            'assets/images/products/lampe-1.jpg',
            'assets/images/products/lampe-2.jpg',
            'assets/images/products/lampe-3.jpg'
        ],
        inStock: true
    },
    {
        id: 'arbre-vie',
        name: 'Arbre de Vie personnalisé',
        price: '60 €',
        category: 'decoration',
        description: 'Décoration murale personnalisée représentant votre arbre généalogique familial. Personnalisé avec les noms de votre famille.',
        dimensions: '35 x 40 cm',
        material: 'Bois',
        features: [
            'Design personnalisé',
            'Noms gravés individuellement',
            'Support mural intégré',
            'Finition de qualité'
        ],
        image: 'assets/images/products/arbre-vie.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'silhouette-voiture',
        name: 'Silhouette de voiture personnalisée',
        price: '50 €',
        priceOption: '10 €',
        category: 'decoration',
        description: 'Silhouette de voiture gravée, parfaite pour les passionnés d\'automobile. Option plaque d\'identification du modèle disponible.',
        dimensions: '80 x 22 cm',
        material: 'Bois ou acrylique',
        features: [
            'Design précis',
            'Option plaque d\'identification',
            'Plusieurs modèles disponibles',
            'Dimensions personnalisables'
        ],
        images: [
            'assets/images/products/voiture-1.jpg',
            'assets/images/products/voiture-2.jpg',
            'assets/images/products/voiture-plaque.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'cadre-polaroid',
        name: 'Cadre photo "Polaroïd"',
        price: '15 €',
        category: 'decoration',
        description: 'Cadre photo style Polaroïd personnalisable avec date, lieu et citation de votre choix pour immortaliser vos souvenirs.',
        dimensions: '11 x 14 cm',
        material: 'Bois',
        features: [
            'Style Polaroïd vintage',
            'Personnalisation complète',
            'Texte et date au choix',
            'Support intégré'
        ],
        images: [
            'assets/images/products/polaroid-1.jpg',
            'assets/images/products/polaroid-2.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'mandala-lotus',
        name: 'Mandala Lotus',
        price: '25 €',
        category: 'decoration',
        description: 'Magnifique mandala en forme de lotus avec motifs détaillés et complexes, parfait pour une décoration murale zen.',
        dimensions: '38 x 25 cm',
        material: 'Bois',
        features: [
            'Design complexe et détaillé',
            'Motifs géométriques',
            'Style zen et apaisant',
            'Finition élégante'
        ],
        image: 'assets/images/products/mandala-lotus.jpg',
        inStock: true
    },
    {
        id: 'lotus-simple',
        name: 'Lotus',
        price: '25 €',
        category: 'decoration',
        description: 'Élégante fleur de lotus stylisée, une décoration murale épurée et minimaliste.',
        dimensions: '390 x 35 cm',
        material: 'Bois',
        features: [
            'Design minimaliste',
            'Style épuré',
            'Montage facile',
            'Effet visuel saisissant'
        ],
        image: 'assets/images/products/lotus-simple.jpg',
        inStock: true
    },
    {
        id: 'elephants-geometriques',
        name: 'Famille d\'éléphants',
        price: '20 €',
        category: 'decoration',
        description: 'Famille d\'éléphants en style géométrique, une décoration murale originale et moderne.',
        dimensions: '38 x 12 cm',
        material: 'Bois',
        features: [
            'Design géométrique moderne',
            'Trois éléphants coordonnés',
            'Style contemporain',
            'Effet famille attachant'
        ],
        image: 'assets/images/products/elephants.jpg',
        inStock: true
    },
    {
        id: 'cactus',
        name: 'El Cactus',
        price: '20 €',
        pricePied: '25 €',
        category: 'decoration',
        description: 'Silhouette de cactus élégante, disponible avec ou sans pied gravé personnalisable.',
        dimensions: '17 x 39 cm',
        material: 'Bois et acrylique noir',
        features: [
            'Design minimaliste',
            'Option avec pied personnalisé',
            'Texte gravé possible',
            'Style moderne'
        ],
        images: [
            'assets/images/products/cactus-1.jpg',
            'assets/images/products/cactus-2.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'voilier-tempete',
        name: 'Gravure de voiliers dans la tempête',
        price: '60 €',
        category: 'decoration',
        description: 'Gravure de précision représentant des voiliers dans une mer agitée. Une œuvre détaillée qui capture la puissance des éléments.',
        dimensions: '40 x 23 cm',
        material: 'Bois',
        features: [
            'Gravure détaillée',
            'Design maritime',
            'Finition soignée',
            'Effet de profondeur'
        ],
        image: 'assets/images/products/voilier-tempete.jpg',
        inStock: true
    },
    {
        id: 'dodo',
        name: 'The Dodo',
        price: '12 €',
        priceCustom: '15-20 €',
        category: 'decoration',
        description: 'Gravure représentant le légendaire Dodo. Possibilité de personnalisation avec un design de votre choix.',
        dimensions: '10 x 10 cm',
        material: 'Bois',
        features: [
            'Design historique',
            'Gravure de précision',
            'Option personnalisable',
            'Format compact'
        ],
        image: 'assets/images/products/dodo.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'trio-vegetal',
        name: 'Trio de cadres végétaux',
        price: '25 €',
        priceLot: '60 €',
        category: 'decoration',
        description: 'Ensemble de trois cadres décoratifs aux motifs végétaux : roseaux, palmier et feuilles exotiques.',
        dimensions: '30 x 40 cm',
        material: 'Bois et acrylique noir',
        features: [
            'Lot de 3 cadres coordonnés',
            'Motifs végétaux',
            'Design moderne',
            'Style tropical'
        ],
        images: [
            'assets/images/products/vegetal-1.jpg',
            'assets/images/products/vegetal-2.jpg',
            'assets/images/products/vegetal-3.jpg'
        ],
        inStock: true
    },
    {
        id: 'rose-vents',
        name: 'Rose des vents',
        price: '25 €',
        category: 'decoration',
        description: 'Rose des vents décorative, un symbole élégant de navigation et d\'aventure.',
        dimensions: '40 x 40 cm',
        material: 'Bois et acrylique noir',
        features: [
            'Design classique',
            'Points cardinaux',
            'Finition élégante',
            'Montage mural'
        ],
        image: 'assets/images/products/rose-vents.jpg',
        inStock: true
    },
    {
        id: 'triptyque-arbre',
        name: 'Triptyque Arbre',
        price: '60 €',
        category: 'decoration',
        description: 'Ensemble de trois panneaux formant un arbre majestueux. Une décoration murale saisissante.',
        dimensions: '100 x 40 cm',
        material: 'Bois et acrylique noir',
        features: [
            'Design en trois parties',
            'Motif arbre détaillé',
            'Effet d\'ensemble',
            'Installation facile'
        ],
        image: 'assets/images/products/triptyque-arbre.jpg',
        inStock: true
    },
    {
        id: 'voilier-simple',
        name: 'Voilier',
        price: '25 €',
        category: 'decoration',
        description: 'Élégante gravure d\'un voilier, parfaite pour une décoration marine épurée.',
        dimensions: '40 x 35 cm',
        material: 'Bois',
        features: [
            'Design minimaliste',
            'Gravure de précision',
            'Style marin',
            'Finition soignée'
        ],
        image: 'assets/images/products/voilier-simple.jpg',
        inStock: true
    },
    {
        id: 'elephant-geometrique',
        name: 'Tête d\'éléphant géométrique',
        price: '25 €',
        category: 'decoration',
        description: 'Majestueuse tête d\'éléphant en style géométrique, une pièce artistique qui allie modernité et nature.',
        dimensions: '35 x 40 cm',
        material: 'Bois',
        features: [
            'Design géométrique moderne',
            'Gravure de précision',
            'Style contemporain',
            'Effet visuel saisissant'
        ],
        image: 'assets/images/products/elephant-geometrique.jpg',
        inStock: true
    },
    {
        id: 'mesange',
        name: 'Mésange',
        price: '15 €',
        category: 'decoration',
        description: 'Délicate gravure d\'une mésange sur sa branche, parfaite pour apporter une touche de nature à votre intérieur.',
        dimensions: '20 x 15 cm',
        material: 'Bois',
        features: [
            'Design naturaliste',
            'Gravure détaillée',
            'Format compact',
            'Idéal pour petits espaces'
        ],
        image: 'assets/images/products/mesange.jpg',
        inStock: true
    },
    {
        id: 'coucher-soleil',
        name: 'Coucher de soleil',
        price: '15 €',
        category: 'decoration',
        description: 'Minimaliste représentation d\'un coucher de soleil sur l\'horizon, une pièce zen et apaisante.',
        dimensions: '20 x 10 cm',
        material: 'Bois',
        features: [
            'Design minimaliste',
            'Style épuré',
            'Format panoramique',
            'Ambiance zen'
        ],
        image: 'assets/images/products/coucher-soleil.jpg',
        inStock: true
    },
    {
        id: 'montagne-triangle',
        name: 'Montagne dans triangle',
        price: '25 €',
        category: 'decoration',
        description: 'Design géométrique combinant montagnes et forêt dans un triangle, une pièce moderne et naturelle.',
        dimensions: '30 x 30 cm',
        material: 'Bois',
        features: [
            'Design géométrique moderne',
            'Motif montagne et forêt',
            'Cadre triangulaire',
            'Style contemporain'
        ],
        image: 'assets/images/products/montagne-triangle.jpg',
        inStock: true
    },
    {
        id: 'circuit-spa',
        name: 'Tracé du circuit de Spa-Francorchamps',
        price: '15 €',
        category: 'decoration',
        description: 'Reproduction précise du célèbre circuit de Spa-Francorchamps, parfait pour les passionnés de sport automobile.',
        dimensions: '20 x 15 cm',
        material: 'Bois',
        features: [
            'Tracé fidèle du circuit',
            'Gravure de précision',
            'Design minimaliste',
            'Idéal pour les fans de F1'
        ],
        image: 'assets/images/products/circuit-spa.jpg',
        inStock: true
    },
    {
        id: 'montagne-simple',
        name: 'Montagne simplifiée',
        price: '15 €',
        category: 'decoration',
        description: 'Silhouette épurée de montagne, une décoration murale minimaliste et élégante.',
        dimensions: '17 x 5 cm',
        material: 'Bois',
        features: [
            'Design minimaliste',
            'Style épuré',
            'Format panoramique',
            'Finition soignée'
        ],
        image: 'assets/images/products/montagne-simple.jpg',
        inStock: true
    },
    {
        id: 'chat-geometrique',
        name: 'Chat géométrique',
        price: '20 €',
        category: 'decoration',
        description: 'Silhouette de chat en style géométrique, une pièce moderne et élégante.',
        dimensions: '27 x 18 cm',
        material: 'Bois',
        features: [
            'Design géométrique',
            'Style moderne',
            'Gravure de précision',
            'Effet visuel saisissant'
        ],
        image: 'assets/images/products/chat-geometrique.jpg',
        inStock: true
    },
    {
        id: 'couple-oiseaux',
        name: 'Couple d\'oiseaux',
        price: '10 €',
        category: 'decoration',
        description: 'Délicat couple d\'oiseaux sur une branche, une décoration romantique et naturelle.',
        dimensions: '10 x 10 cm',
        material: 'Bois',
        features: [
            'Design romantique',
            'Format compact',
            'Style naturel',
            'Finition soignée'
        ],
        image: 'assets/images/products/couple-oiseaux.jpg',
        inStock: true
    },
    {
        id: 'paysages-encercles',
        name: 'Paysages encerclés',
        price: '5 €',
        priceLot: '15 €',
        category: 'decoration',
        description: 'Collection de paysages minimalistes encerclés, disponibles à l\'unité ou en lot de 3. Chaque cercle représente un paysage unique : cactus dans le désert, palmier tropical, et village de montagne.',
        dimensions: 'Environ 10 cm de diamètre chacun',
        material: 'Bois',
        features: [
            'Design minimaliste',
            'Motifs variés',
            'Disponible à l\'unité ou en lot',
            'Format rond'
        ],
        variants: [
            {
                name: 'Cactus dans le désert',
                price: '5 €'
            },
            {
                name: 'Palmier tropical',
                price: '5 €'
            },
            {
                name: 'Village de montagne',
                price: '5 €'
            },
            {
                name: 'Lot de 3 paysages',
                price: '15 €'
            }
        ],
        images: [
            'assets/images/products/paysage-cercle-lot.jpg',
            'assets/images/products/paysage-cercle-village.jpg',
            'assets/images/products/paysage-cercle-palmier.jpg',
            'assets/images/products/paysage-cercle-cactus.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'montagne-jour-nuit',
        name: 'Montagne jour et nuit',
        price: '20 €',
        category: 'decoration',
        description: 'Duo de triangles représentant une montagne de jour et de nuit. Le premier panneau montre un paysage nocturne avec lune et étoiles, le second un paysage diurne avec soleil rayonnant.',
        dimensions: '30 x 20 cm',
        material: 'Bois',
        features: [
            'Design en deux parties',
            'Contraste jour/nuit',
            'Format triangulaire',
            'Motifs montagneux détaillés'
        ],
        image: 'assets/images/products/montagne-jour-nuit-1.jpg',
        inStock: true
    },
    {
        id: 'ecureuil-cercle',
        name: 'Écureuil',
        price: '15 €',
        category: 'decoration',
        description: 'Écureuil dans un cercle, une scène naturelle et poétique avec branches d\'arbre. Parfait pour apporter une touche de nature à votre intérieur.',
        dimensions: '20 x 20 cm',
        material: 'Bois',
        features: [
            'Design nature',
            'Format rond',
            'Motif détaillé',
            'Style forestier'
        ],
        image: 'assets/images/products/ecureuil-cercle.jpg',
        inStock: true
    },
    {
        id: 'carte-postale-st-valentin',
        name: 'Carte postale personnalisée Saint-Valentin',
        price: '20 €',
        category: 'saint-valentin',
        description: 'Une carte postale format A5 entièrement personnalisable pour déclarer votre amour de manière unique et originale.',
        dimensions: 'Format A5',
        material: 'Bois',
        features: [
            'Format carte postale',
            'Texte personnalisable',
            'Design élégant',
            'Finition soignée'
        ],
        images: [
            'assets/images/products/carte-st-valentin.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'souvenir-endroit',
        name: 'Souvenir de "Notre endroit"',
        price: '25 €',
        category: 'saint-valentin',
        description: 'Une plaque commémorative personnalisée pour immortaliser un lieu qui vous est cher.',
        dimensions: '5 x 10 cm',
        material: 'Bois',
        features: [
            'Coordonnées GPS personnalisables',
            'Nom du lieu personnalisable',
            'Format compact',
            'Design minimaliste'
        ],
        images: [
            'assets/images/products/souvenir-endroit.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'logo-infini-you-and-me',
        name: 'Logo infini "You & Me"',
        price: '15 €',
        category: 'saint-valentin',
        description: 'Un symbole d\'amour infini personnalisé avec vos initiales. Disponible avec ou sans cœur rouge.',
        dimensions: '20 x 7 cm',
        material: 'Bois',
        features: [
            'Design symbole infini',
            'Option cœur rouge',
            'Personnalisation des noms',
            'Finition élégante'
        ],
        images: [
            'assets/images/products/you-and-me.jpg',
            'assets/images/products/you-and-me2.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'visages-entremeles',
        name: 'Visages entremêlés',
        price: '20 €',
        category: 'saint-valentin',
        description: 'Une création artistique représentant deux visages entremêlés, symbolisant l\'union et l\'amour.',
        dimensions: '15 x 40 cm',
        material: 'Bois',
        features: [
            'Design artistique',
            'Gravure détaillée',
            'Grand format',
            'Effet visuel unique'
        ],
        images: [
            'assets/images/products/saint-valentin-visages.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'porte-clefs-hexagonal',
        name: 'Porte-clefs hexagonal personnalisé',
        price: '10 €',
        category: 'saint-valentin',
        description: 'Lot de 2 porte-clefs hexagonaux personnalisables, parfaits pour les couples.',
        dimensions: 'Format porte-clefs',
        material: 'Bois',
        features: [
            'Lot de 2 porte-clefs',
            'Forme hexagonale',
            'Personnalisation possible',
            'Design moderne'
        ],
        images: [
            'assets/images/products/saint-valentin-portecles-1.jpg'
        ],
        inStock: true,
        customizable: true,
        priceLot: '10 € le lot de 2'
    },
    {
        id: 'porte-clefs-coeur',
        name: 'Porte-clefs cœur personnalisé',
        price: '8 €',
        category: 'saint-valentin',
        description: 'Lot de 2 porte-clefs en forme de cœur, disponibles en bois naturel, lasure bois foncé ou noir.',
        dimensions: 'Format porte-clefs',
        material: 'Bois',
        features: [
            'Lot de 2 porte-clefs',
            'Forme cœur',
            'Trois finitions au choix',
            'Personnalisation possible'
        ],
        images: [
            'assets/images/products/porte-clefs-coeur-1.jpg',
            'assets/images/products/porte-clefs-coeur-2.jpg',
            'assets/images/products/porte-clefs-coeur-3.jpg'
        ],
        inStock: true,
        customizable: true,
        priceLot: '8 € le lot de 2',
        variants: ['Bois naturel', 'Lasure bois foncé', 'Noir']
    },
    {
        id: 'triptyque-arches',
        name: 'Triptyque décoratif Arches',
        price: 'À partir de 20 €',
        priceDetails: [
            'À l\'unité : 20 €',
            'Lot de 3 motifs différents : 50 €'
        ],
        category: 'decoration',
        description: 'Collection de décorations murales modernes en forme d\'arches. Trois designs distincts : un soleil levant aux lignes épurées, une arche avec feuille d\'olivier minimaliste, et un paysage nocturne avec lune. Parfait pour créer un ensemble harmonieux sur vos murs.',
        dimensions: '20 x 30 cm par pièce',
        material: 'Bois peint en noir',
        features: [
            'Design moderne et épuré',
            'Trois motifs complémentaires',
            'Finition noire mate',
            'Système d\'accroche intégré',
            'Fabrication artisanale',
            'Disponible à l\'unité ou en lot'
        ],
        variants: [
            'Soleil levant',
            'Arche et olivier',
            'Lune et montagnes'
        ],
        images: [
            'assets/images/products/arches-ensemble.jpg',
            'assets/images/products/arche-soleil.jpg',
            'assets/images/products/arche-olivier.jpg',
            'assets/images/products/arche-lune.jpg'
        ],
        inStock: true,
        customizable: false,
        details: [
            'Soleil levant : lignes rayonnantes géométriques',
            'Arche et olivier : design botanique minimaliste',
            'Lune et montagnes : paysage nocturne stylisé'
        ]
    },
    {
        id: 'raton-laveur-geometrique',
        name: 'Raton laveur géométrique',
        price: '15 €',
        category: 'decoration',
        description: 'Décoration murale représentant un raton laveur en style géométrique. Un design moderne et épuré qui apportera une touche de nature stylisée à votre intérieur.',
        dimensions: '20 x 15 cm',
        material: 'Bois peint en noir',
        features: [
            'Design géométrique moderne',
            'Finition noire mate',
            'Système d\'accroche intégré',
            'Autres dimensions possibles selon grille tarifaire'
        ],
        images: [
            'assets/images/products/raton-laveur.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'ours-geometrique',
        name: 'Ours géométrique',
        price: '20 €',
        category: 'decoration',
        description: 'Silhouette d\'ours en style géométrique, parfaite pour une décoration murale contemporaine. Les lignes épurées créent un effet de volume saisissant.',
        dimensions: '21 x 20 cm',
        material: 'Bois peint en noir',
        features: [
            'Design géométrique complexe',
            'Finition noire mate',
            'Système d\'accroche intégré',
            'Autres dimensions possibles selon grille tarifaire'
        ],
        images: [
            'assets/images/products/ours-geo.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'panda-face',
        name: 'Panda géométrique',
        price: '15 €',
        category: 'decoration',
        description: 'Portrait frontal de panda en style géométrique minimaliste. Un design adorable qui combine simplicité et caractère.',
        dimensions: '20 x 17 cm',
        material: 'Bois peint en noir',
        features: [
            'Design frontal minimaliste',
            'Finition noire mate',
            'Système d\'accroche intégré',
            'Autres dimensions possibles selon grille tarifaire'
        ],
        images: [
            'assets/images/products/panda-face.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'chouette-geometrique',
        name: 'Chouette géométrique',
        price: '20 €',
        category: 'decoration',
        description: 'Chouette en style géométrique, disponible en bois naturel. Un design élégant qui combine sagesse et modernité.',
        dimensions: '16 x 23 cm',
        material: 'Bois naturel',
        features: [
            'Design géométrique détaillé',
            'Finition bois naturel',
            'Système d\'accroche intégré',
            'Autres dimensions possibles selon grille tarifaire'
        ],
        images: [
            'assets/images/products/chouette-geo.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'koala-geometrique',
        name: 'Koala géométrique',
        price: '15 €',
        category: 'decoration',
        description: 'Portrait de koala en style géométrique. Un design attendrissant qui apportera douceur et modernité à votre décoration.',
        dimensions: '20 x 14 cm',
        material: 'Bois naturel',
        features: [
            'Design géométrique doux',
            'Finition bois naturel',
            'Système d\'accroche intégré',
            'Autres dimensions possibles selon grille tarifaire'
        ],
        images: [
            'assets/images/products/koala-geo.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'elephant-geometrique',
        name: 'Éléphant géométrique',
        price: '15 €',
        category: 'decoration',
        description: 'Éléphant en style géométrique, disponible en finition dorée. Un design majestueux qui allie élégance et modernité.',
        dimensions: '16 x 13 cm',
        material: 'Bois peint en doré',
        features: [
            'Design géométrique élégant',
            'Finition dorée',
            'Système d\'accroche intégré',
            'Autres dimensions possibles selon grille tarifaire'
        ],
        images: [
            'assets/images/products/elephant-dore.jpg'
        ],
        inStock: true,
        customizable: false
    }
];

// Ajouter ces variables globales au début du fichier
let currentPage = 1;
const productsPerPage = 9;

// Fonction pour récupérer les posts Instagram
async function fetchInstagramPosts() {
    try {
        const response = await fetch(`${INSTAGRAM_API_URL}?fields=id,caption,media_url,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
        const data = await response.json();
        return filterShopProducts(data.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des posts Instagram:', error);
        return [];
    }
}

// Fonction pour filtrer les produits (posts avec prix)
function filterShopProducts(posts) {
    return posts.filter(post => {
        const priceMatch = post.caption.match(/(\d+([.,]\d{2})?)\s*€/);
        return priceMatch !== null;
    });
}

// Fonction pour extraire le prix d'une description
function extractPrice(caption) {
    const priceMatch = caption.match(/(\d+([.,]\d{2})?)\s*€/);
    return priceMatch ? parseFloat(priceMatch[1].replace(',', '.')) : null;
}

// Fonction pour créer une carte produit
function createProductCard(product) {
    const price = extractPrice(product.caption);
    const title = product.caption.split('\n')[0];

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.media_url}" alt="${title}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${title}</h3>
            <p class="product-price">${price.toFixed(2)} €</p>
            ${product.priceDetails ? `
                <div class="price-details">
                    ${product.priceDetails.map(detail => `<p>${detail}</p>`).join('')}
                </div>
            ` : ''}
            <button class="add-to-cart" data-product-id="${product.id}">
                Ajouter au panier
            </button>
        </div>
    `;

    return card;
}

// Fonction pour afficher les produits
async function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    const products = await fetchInstagramPosts();

    products.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

// Gestionnaire d'événements pour le panier
function initializeCartEvents() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.dataset.productId;
            addToCart(productId);
        }
    });
}

// Fonction pour ajouter au panier
function addToCart(productId) {
    cart.push(productId);
    updateCartUI();
    // Animation ou notification de confirmation
    alert('Produit ajouté au panier !');
}

// Fonction pour mettre à jour l'interface du panier
function updateCartUI() {
    // À implémenter : mise à jour du compteur du panier
}

// Déclarer la fonction changeImage globalement
function changeImage(productId, direction) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.images) return;

    const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    if (!productCard) return;
    
    const mainImage = productCard.querySelector('.main-image');
    if (!mainImage) return;
    
    const currentIndex = parseInt(mainImage.dataset.imageIndex || 0);
    
    let newIndex;
    if (direction === 'prev') {
        newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    } else {
        newIndex = (currentIndex + 1) % product.images.length;
    }
    
    mainImage.src = product.images[newIndex];
    mainImage.dataset.imageIndex = newIndex;
}

// Fonction pour créer le popup
function createProductPopup(product) {
    const popup = document.createElement('div');
    popup.className = 'product-popup';
    
    const content = `
        <div class="popup-content">
            <button class="close-popup">&times;</button>
            <div class="popup-gallery">
                ${product.images ? `
                    <div class="popup-image-container">
                        <img src="${product.images[0]}" alt="${product.name}" class="popup-main-image">
                        ${product.images.length > 1 ? `
                            <button class="popup-nav prev">&#10094;</button>
                            <button class="popup-nav next">&#10095;</button>
                            <div class="popup-thumbnails">
                                ${product.images.map((img, index) => `
                                    <img src="${img}" alt="${product.name}" class="popup-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                ` : `
                    <div class="popup-image-container">
                        <img src="${product.image}" alt="${product.name}" class="popup-main-image">
                    </div>
                `}
            </div>
            <div class="popup-info">
                <h2>${product.name}</h2>
                <p class="popup-price">${product.price}</p>
                ${product.priceDetails ? `
                    <div class="popup-price-details">
                        ${product.priceDetails.map(detail => `<p>${detail}</p>`).join('')}
                    </div>
                ` : ''}
                <p class="popup-description">${product.description}</p>
                <div class="popup-details">
                    <p><strong>Dimensions :</strong> ${product.dimensions}</p>
                    <p><strong>Matériau :</strong> ${product.material}</p>
                </div>
                <div class="popup-features">
                    <h3>Caractéristiques :</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary popup-order">Commander</button>
            </div>
        </div>
    `;
    
    popup.innerHTML = content;
    return popup;
}

// Fonction pour gérer la navigation des images dans le popup
function handlePopupGallery(popup, product) {
    if (!product.images || product.images.length <= 1) return;
    
    const mainImage = popup.querySelector('.popup-main-image');
    const thumbnails = popup.querySelectorAll('.popup-thumbnail');
    const prevBtn = popup.querySelector('.popup-nav.prev');
    const nextBtn = popup.querySelector('.popup-nav.next');
    let currentIndex = 0;

    function updateImage(index) {
        mainImage.src = product.images[index];
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        currentIndex = index;
    }

    prevBtn?.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
        updateImage(newIndex);
    });

    nextBtn?.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % product.images.length;
        updateImage(newIndex);
    });

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = parseInt(thumb.dataset.index);
            updateImage(index);
        });
    });
}

// Modifier la fonction displayProducts pour ajouter les événements de popup
    function displayProducts(category = 'all') {
    // Supprimer toute pagination existante
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }

        productsGrid.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    // Calculer les indices de début et de fin pour la page courante
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    
    // Obtenir les produits pour la page courante
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    // Afficher les produits
    currentProducts.forEach(product => {
            const productCard = `
            <div class="product-card" data-product-id="${product.id}">
                    <div class="product-image">
                    ${product.images && product.images.length > 1 ? `
                        <div class="image-gallery">
                            <img src="${product.images[0]}" alt="${product.name}" class="main-image" data-image-index="0">
                            <div class="gallery-nav-container">
                                <button class="gallery-nav prev" onclick="event.stopPropagation(); changeImage('${product.id}', 'prev')">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button class="gallery-nav next" onclick="event.stopPropagation(); changeImage('${product.id}', 'next')">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ` : `
                        <img src="${product.images ? product.images[0] : product.image}" alt="${product.name}">
                    `}
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price}</p>
                        ${product.priceDetails ? `
                            <div class="price-details">
                                ${product.priceDetails.map(detail => `<p>${detail}</p>`).join('')}
                            </div>
                        ` : ''}
                        <p class="description">${product.description}</p>
                    <div class="product-tags">
                        ${product.dimensions ? `<span class="tag">${product.dimensions}</span>` : ''}
                        ${product.material ? `<span class="tag">${product.material}</span>` : ''}
                    </div>
                    <button class="btn btn-primary" onclick="event.stopPropagation()">Commander</button>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });

    // Créer la pagination seulement s'il y a plus d'une page
    if (totalPages > 1) {
        const paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination';
        
        // Bouton précédent
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.className = 'pagination-btn prev';
            prevButton.innerHTML = '&larr; Précédent';
            prevButton.addEventListener('click', () => {
                currentPage--;
                displayProducts(category);
                window.scrollTo(0, 0);
            });
            paginationContainer.appendChild(prevButton);
        }
        
        // Numéros de page
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `pagination-btn page ${i === currentPage ? 'active' : ''}`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayProducts(category);
                window.scrollTo(0, 0);
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // Bouton suivant
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.className = 'pagination-btn next';
            nextButton.innerHTML = 'Suivant &rarr;';
            nextButton.addEventListener('click', () => {
                currentPage++;
                displayProducts(category);
                window.scrollTo(0, 0);
            });
            paginationContainer.appendChild(nextButton);
        }

        // Ajouter la pagination après la grille de produits
        productsGrid.parentNode.insertBefore(paginationContainer, productsGrid.nextSibling);
    }

    // Ajouter les événements pour le popup
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            const product = products.find(p => p.id === productId);
            const popup = createProductPopup(product);
            document.body.appendChild(popup);
            handlePopupGallery(popup, product);

            // Gestion de la fermeture du popup
            popup.querySelector('.close-popup').addEventListener('click', () => {
                popup.remove();
            });
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    popup.remove();
                }
            });
        });
    });
}

// Modifier l'initialisation pour utiliser la variable productsGrid globalement
let productsGrid;

document.addEventListener('DOMContentLoaded', () => {
    productsGrid = document.querySelector('.products-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Gestion des filtres
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentPage = 1; // Réinitialiser la page lors du changement de catégorie
            displayProducts(button.dataset.category);
        });
    });

    // Affichage initial
    displayProducts();

    initializeCartEvents();
}); 