// Variables globales
let currentPage = 1;
const productsPerPage = 9;
let productsGrid;

// Liste des produits (garder la liste existante)
const products = [

    {
        id: 'cadres-paysages',
        name: 'Cadre paysage',
        price: '25 €',
        category: ['deco-murale',],
        description: 'Transformez votre intérieur avec ces créations uniques qui capturent la magie des grands espaces.',
        dimensions: '30 x 40 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design minimaliste et élégant',
            'Découpe laser de précision',
        ],
        images: [
            'assets/images/products/cadre-van.jpg',
            'assets/images/products/cadre-pins.jpg',
            'assets/images/products/cadre-telesiege.jpg',
            'assets/images/products/cadre-montagne2.jpg',
            'assets/images/products/cadre-montagne.jpg',
            'assets/images/products/cadre-surf.jpg',
            'assets/images/products/cadre-paris.jpg',

        ],
    },
    {
        id: 'noeud-papillon-ajour',
        name: 'Nœud papillon',
        price: '25 €',
        category: ['accessoires','events'],
        description: 'Élégant nœud papillon en bois avec divers motif et coloris. Une pièce unique qui allie artisanat traditionnel et design contemporain, parfaite pour ajouter une touche d\'originalité à vos tenues.',
        dimensions: '12 x 5 cm',
        material: 'Bois',
        features: [
            'Ruban satin ajustable',
            'Plusieurs couleurs de ruban disponibles',
            'Design personnalisable',
            'Découpe laser de précision',
            'Finition soignée'
        ],
        images: [
            'assets/images/products/noeud-papillon-1.jpg',
        ],
        inStock: true,
        customizable: true,
        priceDetails: [
            'Prix unique : 15 €',
            'Personnalisation incluse'
        ]
    },
    {
        id: 'applique-murale-bois',
        name: 'Applique murale design',
        price: '40 €',
        category: 'light',
        description: 'Applique murale en bois qui allie design contemporain et chaleur naturelle. Les lamelles de bois créent un jeu d\'ombre et de lumière unique, parfait pour une ambiance chaleureuse et moderne.',
        dimensions: '10 x 20 cm',
        material: 'Bois',
        features: [
            'Design contemporain à lamelles',
            'Éclairage indirect chaleureux',
            'Installation murale facile',
            'Plusieurs coloris disponibles',
            'Câblage inclus'
        ],
        images: [
            'assets/images/products/applique-murale-1.jpg',
            'assets/images/products/applique-murale-2.jpg'
        ],
        inStock: true,
        customizable: false,
        priceDetails: [
            'Prix : 40 € (ampoule non-incluse)',
            'Installation non comprise'
        ]
    },
    {
        id: 'planche-voiture',
        name: 'Modèle de votre voiture - Planche gravée personnalisée',
        price: '20 €',
        category: 'deco-murale',
        description: 'Sublimez votre passion automobile avec cette planche gravée mettant en valeur une illustration détaillée de votre véhicule, accompagnée du logo et du nom de la marque de celui-ci.',
        dimensions: '40 x 20 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Gravure personnalisée de votre véhicule',
            'Logo et nom de la marque inclus',
        ],
        variants: 'Disponible dans des dimensions plus grandes ou plus petites sur demande.',
        image: 'assets/images/products/planche-voiture.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'planche-boeuf',
        name: 'Planche à découper gravée - Les morceaux du bœuf',
        price: '25 €',
        category: 'accessoires',
        description: 'Cette planche à découper, gravée et illustrant les différentes parties du bœuf, est un outil pratique et esthétique qui trouvera parfaitement sa place dans votre cuisine. Parfaite pour les amateurs de cuisine et les passionnés de gastronomie.',
        dimensions: '45 x 30 cm',
        material: 'Bois',
        features: [
            'Gravure détaillée des morceaux de bœuf',
            'Planche en bois massif',
            'Design élégant et pédagogique',
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
        category: 'accessoires',
        description: 'Parfaits pour sublimer vos tables, ces plateaux en ardoise sont idéaux pour servir vos apéritifs, fromages, ou tout simplement comme élément de décoration unique. Personnalisables avec vos initiales, une phrase inspirante ou un dessin spécial.',
        dimensions: '35 x 20 cm | 45 x 30 cm',
        material: 'Ardoise',
        features: [
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
        customizable: true,
        priceDetails: ['Avec design personnalisé : + 5 €'
        ],
    },
    {
        id: 'elements-4',
        name: 'Les 4 éléments',
        price: '15 €',
        category: 'deco-murale',
        description: 'Ajoutez une touche harmonieuse et naturelle à votre intérieur avec ces décorations murales représentant les éléments : l\'eau, la terre, le feu et l\'air.',
        dimensions: '20 x 20 cm',
        material: 'Bois',
        features: [
            'Personnalisables selon vos envies (tailles ou couleurs)',
            'Design minimaliste et élégant',
            'Découpe laser de précision',
            'Disponible à l\'unité ou en lot',
            'Parfait pour une déco zen',
        ],
        images: [
            'assets/images/products/elements-4-1.jpg',
            'assets/images/products/elements-4-2.jpg',
            'assets/images/products/elements-4-3.jpg',
            'assets/images/products/elements-4-4.jpg'
        ],
        inStock: true,
        customizable: true,
        priceDetails: [
            'Unité : 15 €',
            'Lot de 4 : 50 €'
        ]
    },
    {
        id: 'emojis-mains',
        name: 'Gravures "emojis" de mains',
        price: '15 €',
        category: 'deco-murale',
        description: 'Apportez une touche fun et expressive à votre intérieur ou offrez un cadeau unique avec nos gravures d\'emojis de mains.',
        dimensions: '20 x 20 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design minimaliste et expressif',
            'Découpe laser de précision',
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
        id: 'pics-jardin',
        name: 'Pics de jardin personnalisés',
        price: 'À partir de 5 €',
        category: 'accessoires',
        description: 'Ces pics personnalisés sont parfaits pour identifier vos plantes aromatiques, légumes ou fleurs dans votre potager.',
        dimensions: '15 x 5 cm',
        material: 'Bois',
        features: [
            'Personnalisation du nom de la plante',
            'Ajout possible de motifs ou illustrations',
            'Design élégant et pratique',
            'Idéal pour potager et jardin d\'ornement'
        ],
        priceDetails: [
            'Unité : 5 €',
            'Lot de 3 : 10 €',
        ],
        images: [
            'assets/images/products/pics-jardin-1.jpg',
            'assets/images/products/pics-jardin-2.jpg',
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'prenom-mural',
        name: 'Prénom mural',
        price: '20 €',
        category: 'deco-murale',
        description: 'Personnalisez la chambre de vos enfants avec leur prénom en lettres décoratives à fixer au mur. Une touche personnelle et élégante qui apportera caractère et originalité à leur espace.',
        dimensions: '40 x 20 cm',
        material: 'Bois',
        features: [
            'Prénom entièrement personnalisable avec police d\'érciture au choix',
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Découpe laser de précision',
        ],
        images: [
            'assets/images/products/prenom-mural-1.jpg',
            'assets/images/products/prenom-mural-2.jpg'
        ],
        inStock: true,
        customizable: true,
    },
    {
        id: 'support-billets-anniversaire',
        name: 'Support billets anniversaire',
        price: '15 €',
        category: 'events',
        description: 'Support en bois original et humoristique pour offrir de l\'argent avec style, idéal pour les anniversaires.',
        dimensions: '20 x 20 cm',
        material: 'Bois',
        features: [
            'Message humoristique personnalisable',
            'Support pour 2 billets',
            'Pinces incluses',
            'Âge personnalisable',
            'Prénom personnalisable',
            'Finition bois naturel'
        ],
        images: [
            'assets/images/products/support-billets-1.jpg'
        ],
        inStock: true,
        customizable: true,

    },
    {
        id: 'boules-noel-simple',
        name: 'Boules de Noël simples',
        price: '3 €',
        category: 'events',
        description: 'Illuminez votre sapin avec nos boules de Noël gravées en une seule couche ! Des designs élégants et raffinés pour une décoration de Noël unique.',
        dimensions: '',
        material: 'Bois',
        features: [
            'Design en une seule couche',
            'Designs variés (rennes, sapins, paysages...)',
            'Personnalisation possible',
            'Finition soignée',
            'Prix pour des achats en lots possible',
        ],
        images: [
            'assets/images/products/bnoel-10.jpg',
            'assets/images/products/bnoel-8.jpg',
            'assets/images/products/bnoel-7.jpg',
            'assets/images/products/bnoel-9.jpg'
        ],
        inStock: true,
        customizable: true,
        priceDetails: [
            'Lot possible'
        ]
    },
    {
        id: 'boules-noel-relief',
        name: 'Boules de Noël en relief',
        price: '10 €',
        category: 'events',
        description: 'Donnez du relief à votre sapin avec nos boules de Noël travaillées en plusieurs couches ! Ces créations artisanales offrent un effet de profondeur unique à vos décorations de Noël.',
        dimensions: '',
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
        customizable: true,

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
        category: 'events',
        description: 'Ajoutez une touche d\'élégance à votre déco de Noël avec nos sapins en bois 3D. Nos sapins sont parfaits pour sublimer votre intérieur pendant les fêtes. Que ce soit sur une table, un buffet ou près du sapin, ils apporteront une ambiance chaleureuse.',
        dimensions: '15 cm | 25 cm de hauteur',
        material: 'Bois',
        features: [
            'Design 3D élégant',
            'Disponible en 5 coloris (lasuré, doré, bois naturel, noir et argenté)',
            'Base stable incluse',
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
        category: ['animaux','deco-murale'],
        description: 'Une création unique alliant géométrie et nature, parfaite pour une décoration murale moderne et élégante.',
        dimensions: '20 x 20 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique original',
            'Découpe laser de précision',

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
        category: 'deco-murale',
        description: 'Ensemble de trois panneaux décoratifs aux motifs géométriques modernes. Un design épuré qui s\'intègre parfaitement dans tout intérieur contemporain.',
        dimensions: '23 x 40 cm',
        material: 'Bois',
        features: [
            'Lot de 3 panneaux',
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design moderne et minimaliste',
            'Motifs géométriques coordonnés',

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
        priceDetails: ['Lot : 40 €',
            ],
        category: 'accessoires',
        description: 'Plateau décoratif avec motif de feuilles de Ginkgo finement gravé. Disponible à l\'unité ou en lot de deux.',
        dimensions: '32 x 24 cm',
        material: 'Bois',
        features: [
            'Motif naturel élégant',
            'Gravure détaillée',
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
        priceDetails: ['Avec design personnalisé : 25 €'
            ],
        category: 'accessoires',
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
        id: 'ardoise-aperitif',
        name: 'Ardoise apéritif emplacement',
        price: '20 €',
        category: ['decoration','accessoires'],
        description: 'Élégante ardoise carrée avec emplacements gravés pour présenter vos apéritifs. Idéale pour servir charcuterie, fromages et olives lors de vos soirées conviviales.',
        dimensions: '20 x 20 cm',
        material: 'Ardoise naturelle',
        features: [
            'Compartiments gravés et identifiés',
            'Emplacements pour saucisson, fromage, charcuterie et olives',
            'Facile à nettoyer',
            'Idéale pour les apéritifs',
        ],
        images: [
            'assets/images/products/ardoise-aperitif-1.jpg'
        ],
        inStock: true,
        customizable: false,
        priceDetails: [
            'Prix unique : 20 €'
        ]
    },


    {
        id: 'gorille',
        name: 'Le Gorille',
        price: 'À partir de 15 €',
        priceDetails: [
            'Sans pied (murale) : 15 €',
            'Avec pied : 20€'
        ],

        category: ['animaux','deco-murale'],
        description: 'Silhouette de gorille élégante, disponible avec ou sans socle gravé.',
        dimensions: '18 x 15 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Option avec socle personnalisé',
            'Design minimaliste',
            'Effet d\'ombre projetée',


        ],
        images: [
            'assets/images/products/gorille-1.jpg',
            'assets/images/products/gorille-2.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'loup-geometrique',
        name: 'Loup géométrique',
        price: '25 €',
        category: ['animaux','deco-murale'],
        description: 'Élégante décoration murale représentant un loup en style géométrique. Les lignes épurées et le design moderne créent une pièce artistique saisissante qui apportera caractère et originalité à votre intérieur.',
        dimensions: '40 x 28 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique moderne',
            'Découpe laser de précision',
        ],
        images: [
            'assets/images/products/loup-geometrique-1.jpg',
            'assets/images/products/loup-geometrique-2.jpg'
        ],
        inStock: true,
        customizable: false,
        priceDetails: [
            'Format standard (40 x 28 cm) : 25 €'
        ]
    },
    {
        id: 'lion-geometrique',
        name: 'Lion géométrique',
        price: '25 €',
        category: ['animaux','deco-murale'],
        description: 'Majestueuse représentation d\'un lion en style géométrique. Les lignes épurées et le design moderne créent une pièce artistique saisissante qui apportera force et caractère à votre intérieur.',
        dimensions: '32 x 40 cm',
        material: 'Bois',
        features: [

            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique moderne',
            'Découpe laser de précision',
        ],
        images: [
            'assets/images/products/lion-geometrique-1.jpg'
        ],
        inStock: true,
        customizable: false,

    },

    {
        id: 'porte-clefs-circuit',
        name: 'Porte-clefs Circuit de Spa-Francorchamps',
        price: '4 €',
        category: 'accessoires',
        description: 'Porte-clefs en bois gravé représentant le célèbre circuit de Spa-Francorchamps.',
        dimensions: '',
        material: 'Bois',
        features: [
            'Anneau porte-clefs inclus',
            'Deux variantes disponibles',
            'Design du circuit iconique',
            'Gravure de précision',

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
        category: 'events',
        description: 'Cadre photo en forme de cœur, parfait pour la fête des mères. Peut contenir une photo de 10 x 15 cm.',
        dimensions: '',
        material: 'Bois',
        features: [
            'Texte personnalisable',
            'Design en forme de cœur',
            'Espace photo intégré',
            'Support inclus'
        ],
        image: 'assets/images/products/cadre-coeur-maman.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'cercle-meilleure-maman',
        name: 'Cercle "Meilleure Maman"',
        price: '30 €',
        category: 'events',
        description: 'Décoration circulaire avec texte "Meilleure Maman" et bouquet de fleurs séchées.',
        dimensions: '30 x 30 cm',
        material: 'Bois',
        features: [
            'Design élégant',
            'Texte personnalisable',
            'Support inclus',
            'Finitions soignées'
        ],
        image: 'assets/images/products/cercle-maman.jpg',
        inStock: true,
        customizable: true,
        priceDetails: ['Sans fleurs : 25 €']
    },
    {
        id: 'coeur-personnalise',
        name: 'Cœur avec texte personnalisé',
        price: '25 €',
        description: 'Un cœur en bois élégant avec "Maman" en relief et message personnalisé gravé. Idéal pour une déclaration d\'amour, un cadeau pour la fête des mères ou simplement pour décorer votre intérieur avec un message qui vous tient à cœur.',
        features: [
            'Texte entièrement personnalisable',
            'Design en forme de cœur',
            'Gravure de qualité',
            'Support inclus',
            'Finition soignée'
        ],
        dimensions: '20 x 20 cm',
        material: 'Bois',
        images: [
            'assets/images/products/coeur-maman1.jpg'
        ],
        category: 'events'
    },
    {
        id: 'bouchons-bouteilles',
        name: 'Bouchons de bouteilles gravés',
        price: '3 €',
        category: ['accessoires','events'],
        description: 'Bouchons de bouteilles gravés et personnalisables, parfaits pour ajouter une touche spéciale à vos bouteilles. Une petite attention idéale à offrir',
        dimensions: 'Format standard bouteille de vin',
        material: 'Bois',
        features: [
            'Personnalisation sur mesure',
            'Gravures de haute qualité',
            'Compatible avec la plupart des bouteilles de vin'
        ],
        images: ['assets/images/products/bouchons-bouteilles3.jpg',
            'assets/images/products/bouchons-bouteilles4.jpg',
            'assets/images/products/bouchons-bouteilles5.jpg',
            'assets/images/products/bouchons-bouteilles1.jpg',
                'assets/images/products/bouchons-bouteilles2.jpg',

            ],
        inStock: true,
        customizable: true
    },
    {
        id: 'cadre-vin-apero',
        name: 'Cadre "Vin & Apéro"',
        price: 'À partir de 20 €',
        priceDetails: ['Unité : 20 €','Lot : 50 €'],
        category: 'deco-murale',
        description: 'Ensemble de trois cadres décoratifs sur le thème du vin et de l\'apéro. Design minimaliste et élégant mettant en scène des moments de convivialité.',
        dimensions: '20 x 31 cm',
        material: 'Bois',
        features: [
            'Lot de 3 cadres',
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
        category: ['accessoires','events'],
        description: 'Gourde isotherme personnalisable avec votre design gravé. Disponible en plusieurs couleurs.',
        dimensions: '80 cl',
        material: 'Aluminium',
        features: [
            'Gravure personnalisée',
            'Plusieurs couleurs disponibles',
        ],
        images: [
            'assets/images/products/gourde-noire.jpg',
            'assets/images/products/gourde-blanche.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'carte-monde-geometrique',
        name: 'Carte du monde géométrique',
        price: '125 €',
        category: 'deco-murale',
        description: 'Cette carte du monde en géométrie est l\'ajout parfait pour transformer votre intérieur avec une décoration moderne et originale. Une touche unique qui allie design et exploration, parfaite pour les amoureux de voyages ou les amateurs de décoration minimaliste.',
        dimensions: '143 x 80 cm',
        material: 'Bois',
        features: [

            'Autres dimensions disponibles',
            'Personnalisation possible',
            'Design géométrique moderne',
            'Grande taille pour effet visuel maximal',
            'Découpe laser de précision',
            'Finition soignée'
        ],
        images: [
            'assets/images/products/carte-monde-geo-1.jpg'
        ],
        inStock: true,
        customizable: true,
       
    },
    {
        id: 'planches-aperitives',
        name: 'Planches apéritives personnalisées',
        price: 'Sur demande',
        category: 'accessoires',
        description: 'Planches apéritives gravées personnalisables, parfaites pour servir vos amuse-bouches avec style.',
        dimensions: 'Divers formats disponibles',
        material: 'Bois',
        features: [
            'Plusieurs formats disponibles',
            'Option de gravure sur vos propres planches',
            'Design personnalisable',
            'Gravure de qualité',
        ],
        images: [
            'assets/images/products/planche-apero-1.jpg',
            'assets/images/products/planche-apero-2.jpg',
            'assets/images/products/planche-apero-3.jpg',
        ],
        inStock: true,
        customizable: true,
        additionalInfo: 'Possibilité de graver vos propres planches (5€ à 15€ selon la taille du design)'
    },
    {
        id: 'sous-plat-liege',
        name: 'Sous-plat en liège personnalisé',
        price: 'À partir de 5 €',
        priceDetails: [
            'Unité : 5 €',
            'Lot de 3 sous-plats : 10 €'
        ],
        category: 'accessoires',
        description: 'Protégez votre table avec style grâce à nos sous-plats en liège personnalisables. Vendu à l\'unité ou par lot de 3, ces sous-plats peuvent être gravés avec votre message, logo ou design préféré. Parfait pour les plats chauds et idéal pour les restaurants ou votre cuisine.',
        dimensions: '19 cm de diamètre',
        material: 'Liège',
        features: [
            'Design personnalisable',
            'Matériau naturel et durable',
            'Résistant à la chaleur et protège vos surfaces',
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
        price: '15 € le lot',
        category: ['accessoires','events'],
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
            'assets/images/products/sous-verres-10.jpg',
            'assets/images/products/sous-verres-9.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'brosse-cheveux',
        name: 'Brosse à cheveux personnalisée',
        price: '6 €',
        category: ['accessoires','events'],
        description: 'Brosse à cheveux en bois avec gravure personnalisée sur l\'avant et possibilité de gravure sur la face arrière selon vos désirs.',
        dimensions: '',
        material: 'Bois',
        features: [
            'Gravure recto-verso possible',
            'Design personnalisable',
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
        price: 'À partir de 50 €',
        priceDetails: ['40 cm de haut : 50 € ( + ampoule 10 € )',
                        '75 cm de haut : 150 € ( + ampoule 25 € )'],
        category: 'light',
        description: 'Lampe décorative en spirale en bois. Disponible en version suspendue ou sur pied avec douille.',
        dimensions: '40 cm | 75 cm de haut',
        material: 'Bois',
        features: [
            'Design unique',
            'Version suspendue ou sur pied',
            'Douille incluse',
            'Effet lumineux spectaculaire'
        ],
        images: [
            'assets/images/products/lampe-1.jpg',
            'assets/images/products/lampe-3.jpg'
        ],
        inStock: true
    },
    {
        id: 'arbre-vie',
        name: 'Arbre de Vie personnalisé',
        price: '60 €',
        category: 'deco-murale',
        description: 'Décoration murale personnalisée représentant votre arbre généalogique familial. Personnalisé avec les noms de votre famille.',
        dimensions: '35 x 40 cm',
        material: 'Bois et liège',
        features: [
            'Design personnalisé',
            'Noms gravés individuellement',
            'Support mural intégré',
            'Finition de qualité',
            'clous inclus'
        ],
        image: 'assets/images/products/arbre-vie.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'silhouette-voiture',
        name: 'Silhouette de voiture',
        price: '50 €',
        priceDetails: ['Plaque d\'identification : 10 €'],
        category: 'deco-murale',
        description: 'Silhouette de voiture découpées au laser, parfaite pour les passionnés d\'automobile. Option plaque d\'identification du modèle disponible.',
        dimensions: '80 x 22 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design précis',
            'Option plaque d\'identification',
            'Plusieurs modèles disponibles',
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
        category: 'deco-murale',
        description: 'Cadre photo style Polaroïd personnalisable avec date, lieu et citation de votre choix pour immortaliser vos souvenirs.',
        dimensions: '11 x 14 cm',
        material: 'Bois',
        features: [
            'Plusieurs finitions disponibles',
            'Dimension photo 10 x 10 cm ( adaptable si besoin )',
            'Style Polaroïd vintage',
            'Personnalisation complète',
            'Texte et date au choix',
        ],
        images: [
            'assets/images/products/polaroid-1.jpg',
            'assets/images/products/polaroid-2.jpg',
            'assets/images/products/polaroid-3.jpg'
        ],
        inStock: true,
        customizable: true
    },
    {
        id: 'mandala-lotus',
        name: 'Mandala Lotus',
        price: '25 €',
        category: 'deco-murale',
        description: 'Magnifique mandala en forme de lotus avec motifs détaillés et complexes, parfait pour une décoration murale zen.',
        dimensions: '38 x 25 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
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
        category: 'deco-murale',
        description: 'Élégante fleur de lotus stylisée, une décoration murale épurée et minimaliste.',
        dimensions: '39 x 35 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design minimaliste',
        ],
        image: 'assets/images/products/lotus-simple.jpg',
        inStock: true
    },
    {
        id: 'elephants-geometriques',
        name: 'Famille d\'éléphants',
        price: '20 €',
        category: ['animaux','deco-murale'],
        description: 'Famille d\'éléphants en style géométrique, une décoration murale originale et moderne.',
        dimensions: '38 x 12 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
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
        price: 'À partir de 20 €',
        priceDetails: ['Petit : 15 €',
                        'Grand : 25 €'],
        category: 'decoration',
        description: 'Silhouette de cactus élégante, disponible en petit ( 20 cm de haut ) ou en grand ( 40 cm de haut ).',
        dimensions: '20 cm | 40 cm de haut',
        material: 'Bois',
        features: [
            'Design minimaliste',
            'Deux tailles disponibles',
            'Personnalisation du support possible',
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
        category: 'deco-murale',
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
        category: ['animaux','deco-murale'],
        description: 'Gravure représentant le légendaire Dodo.',
        dimensions: '10 x 10 cm',
        material: 'Bois',
        features: [
            'Design historique',
            'Gravure de précision',
        ],
        image: 'assets/images/products/dodo.jpg',
        inStock: true,
        customizable: true
    },
    {
        id: 'trio-vegetal',
        name: 'Trio de cadres végétaux',
        price: 'À partir de 25 €',
        priceDetails: ['Unité : 25 €',
                        'Lot : 50 €'],
        category: 'deco-murale',
        description: 'Ensemble de trois cadres décoratifs aux motifs végétaux : roseaux, palmier et feuilles exotiques.',
        dimensions: '30 x 40 cm',
        material: 'Bois',
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
        category: 'deco-murale',
        description: 'Rose des vents décorative, un symbole élégant de navigation et d\'aventure.',
        dimensions: '40 x 40 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Disponible en français',
            'Design classique',
            'Points cardinaux',
            'Finition élégante',
        ],
        image: 'assets/images/products/rose-vents.jpg',
        inStock: true
    },
    {
        id: 'triptyque-arbre',
        name: 'Triptyque Arbre',
        price: '60 €',
        category: 'deco-murale',
        description: 'Ensemble de trois panneaux formant un arbre majestueux. Une décoration murale saisissante.',
        dimensions: '100 x 40 cm',
        material: 'Bois',
        features: [
            'Design en trois parties',
            'Motif arbre détaillé',
            'Effet d\'ensemble',
        ],
        image: 'assets/images/products/triptyque-arbre.jpg',
        inStock: true
    },
    {
        id: 'voilier-simple',
        name: 'Voilier',
        price: '25 €',
        category: 'deco-murale',
        description: 'Élégante gravure d\'un voilier, parfaite pour une décoration marine épurée.',
        dimensions: '40 x 35 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design minimaliste',
            'Découpe laser de précision',
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
        category: ['animaux','deco-murale'],
        description: 'Majestueuse tête d\'éléphant en style géométrique, une pièce artistique qui allie modernité et nature.',
        dimensions: '35 x 40 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique moderne',
            'Découpe laser de précision',
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
        category: ['animaux','deco-murale'],
        description: 'Délicate gravure d\'une mésange sur sa branche, parfaite pour apporter une touche de nature à votre intérieur.',
        dimensions: '20 x 15 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design naturaliste',
            'Idéal pour petits espaces'
        ],
        image: 'assets/images/products/mesange.jpg',
        inStock: true
    },
    {
        id: 'coucher-soleil',
        name: 'Coucher de soleil',
        price: '15 €',
        category: 'deco-murale',
        description: 'Minimaliste représentation d\'un coucher de soleil sur l\'horizon, une pièce zen et apaisante.',
        dimensions: '20 x 10 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
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
        category: 'deco-murale',
        description: 'Design géométrique combinant montagnes et forêt dans un triangle, une pièce moderne et naturelle.',
        dimensions: '30 x 30 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique moderne',
            'Motif de montagne et forêt',
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
        category: 'deco-murale',
        description: 'Reproduction du célèbre circuit de Spa-Francorchamps, parfait pour les passionnés de sport automobile.',
        dimensions: '20 x 15 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Tracé fidèle du circuit',
            'Découpe laser de précision',
            'Design minimaliste',
            'Idéal pour les fans de sport auto'
        ],
        image: 'assets/images/products/circuit-spa.jpg',
        inStock: true
    },
    {
        id: 'montagne-simple',
        name: 'Montagne simplifiée',
        price: '15 €',
        category: 'deco-murale',
        description: 'Silhouette épurée de montagne, une décoration murale minimaliste et élégante.',
        dimensions: '17 x 5 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
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
        category: ['animaux','deco-murale'],
        description: 'Silhouette de chat en style géométrique, une pièce moderne et élégante.',
        dimensions: '27 x 18 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique',
            'Style moderne',
            'Découpe laser de précision',
        ],
        image: 'assets/images/products/chat-geometrique.jpg',
        inStock: true
    },
    {
        id: 'couple-oiseaux',
        name: 'Couple d\'oiseaux',
        price: '10 €',
        category: ['animaux','deco-murale'],
        description: 'Délicat couple d\'oiseaux sur une branche, une décoration romantique et naturelle.',
        dimensions: '10 x 10 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design romantique',
            'Style naturel',
            'Finition soignée'
        ],
        image: 'assets/images/products/couple-oiseaux.jpg',
        inStock: true
    },
    {
        id: 'paysages-encercles',
        name: 'Paysages encerclés',
        price: 'À partir de 5 €',
        priceDetails: ['Unité : 5 €',
                        'Lot : 12 €'],
        category: 'deco-murale',
        description: 'Collection de paysages minimalistes encerclés, disponibles à l\'unité ou en lot de 3. Chaque cercle représente un paysage unique : cactus dans le désert, palmier tropical, et village de montagne.',
        dimensions: 'Environ 10 cm de diamètre chacun',
        material: 'Bois',
        features: [
            'Design minimaliste',
            'Disponible à l\'unité ou en lot',
            'Format rond'
        ],
        variants: [

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
        category: 'deco-murale',
        description: 'Duo de triangles représentant une montagne de jour et de nuit.',
        dimensions: '30 x 20 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
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
        category: ['animaux','deco-murale'],
        description: 'Une scène naturelle et poétique d\'un écurueil sur les branches d\'un arbre. Parfait pour apporter une touche de nature à votre intérieur.',
        dimensions: '20 x 20 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
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
        category: 'events',
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
        category: 'events',
        description: 'Une plaque commémorative personnalisée pour immortaliser un lieu qui vous est cher.',
        dimensions: '5 x 10 cm',
        material: 'Bois & aluminium',
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
        category: 'events',
        description: 'Un symbole d\'amour infini personnalisé avec vos initiales. Disponible avec ou sans cœur rouge.',
        dimensions: '20 x 7 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design symbole infini',
            'Option cœur rouge',
            'Personnalisation des noms possible',
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
        category: 'events',
        description: 'Une création artistique représentant deux visages entremêlés, symbolisant l\'union et l\'amour.',
        dimensions: '15 x 40 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design artistique',
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
        category: 'events',
        description: 'Lot de 2 porte-clefs hexagonaux personnalisables, parfaits pour les couples.',
        dimensions: '',
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
        category: 'events',
        description: 'Lot de 2 porte-clefs en forme de cœur, disponibles en bois naturel, lasure bois foncé ou noir.',
        dimensions: '',
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
            'Unité : 20 €',
            'Lot  : 50 €'
        ],
        category: 'deco-murale',
        description: 'Collection de décorations murales modernes en forme d\'arches. Trois designs distincts : un soleil levant aux lignes épurées, une arche avec feuille d\'olivier minimaliste, et un paysage nocturne avec lune. Parfait pour créer un ensemble harmonieux sur vos murs.',
        dimensions: '20 x 30 cm par pièce',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design moderne et épuré',
            'Trois motifs complémentaires',
            'Fabrication artisanale',
        ],
        variants: [
            'Soleil levant',
            'Arche et olivier',
            'Lune et montagnes'
        ],
        images: [
            'assets/images/products/arches-ensemble.png',
            'assets/images/products/arches1.png',
            'assets/images/products/arches2.png',
            'assets/images/products/arches3.png',
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
        category: ['animaux','deco-murale'],
        description: 'Décoration murale représentant un raton laveur en style géométrique. Un design moderne et épuré qui apportera une touche de nature stylisée à votre intérieur.',
        dimensions: '20 x 15 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique moderne',
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
        category: ['animaux','deco-murale'],
        description: 'Silhouette d\'ours en style géométrique, parfaite pour une décoration murale contemporaine. Les lignes épurées créent un effet de volume saisissant.',
        dimensions: '21 x 20 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique complexe',
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
        category: ['animaux','deco-murale'],
        description: 'Portrait frontal de panda en style géométrique minimaliste. Un design adorable qui combine simplicité et caractère.',
        dimensions: '20 x 17 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design frontal minimaliste',
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
        category: ['animaux','deco-murale'],
        description: 'Chouette en style géométrique, disponible en bois naturel. Un design élégant qui combine sagesse et modernité.',
        dimensions: '16 x 23 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique détaillé',
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
        category: ['animaux','deco-murale'],
        description: 'Portrait de koala en style géométrique. Un design attendrissant qui apportera douceur et modernité à votre décoration.',
        dimensions: '20 x 14 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique doux',
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
        category: ['animaux','deco-murale'],
        description: 'Éléphant en style géométrique, disponible en finition dorée. Un design majestueux qui allie élégance et modernité.',
        dimensions: '16 x 13 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique élégant',
        ],
        images: [
            'assets/images/products/elephant-dore.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'pingouin-geometrique',
        name: 'Pingouin géométrique',
        price: '15 €',
        category: ['animaux','deco-murale'],
        description: 'Décoration murale représentant un pingouin en style géométrique. Les lignes épurées créent un design moderne et attachant, parfait pour une chambre d\'enfant ou un intérieur contemporain.',
        dimensions: '19 x 20 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique original',
        ],
        images: [
            'assets/images/products/pingouin-geometrique.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'montagne-triangle',
        name: 'Montagne géométrique triangulaire',
        price: '25 €',
        category: 'deco-murale',
        description: 'Décoration murale triangulaire représentant un paysage de montagne avec sapins. Un design géométrique saisissant qui combine nature et modernité.',
        dimensions: '35 x 40 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique montagneux',
            'Format triangulaire',
        ],
        images: [
            'assets/images/products/montagne-triangle2.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'voilier-tropical',
        name: 'Voilier tropical',
        price: '25 €',
        category: 'deco-murale',
        description: 'Scène tropicale circulaire avec voilier, palmiers et soleil couchant. Une décoration qui apporte une ambiance vacances et évasion à votre intérieur.',
        dimensions: '25 x 25 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design circulaire',
            'Scène tropicale détaillée',
        ],
        images: [
            'assets/images/products/voilier-tropical.jpg'
        ],
        inStock: true,
        customizable: false
    },
    {
        id: 'panda-allonge',
        name: 'Panda allongé géométrique',
        price: '25 €',
        category: ['animaux','deco-murale'],
        description: 'Représentation géométrique d\'un panda allongé, combinant style moderne et douceur. Un design original qui apportera une touche de zen à votre décoration.',
        dimensions: '30 x 17 cm',
        material: 'Bois',
        features: [
            'Autres dimensions disponibles',
            'Plusieurs coloris disponibles',
            'Design géométrique unique',
            'Format allongé original',
        ],
        images: [
            'assets/images/products/panda-allonge.jpg'
        ],
        inStock: true,
        customizable: false
    },






];

// Fonction pour afficher les produits
function displayProducts(category = getCategoryFromURL()) {
    let filteredProducts = products;
    
    // Filtrer par catégorie si nécessaire
    if (category && category !== 'all') {
        // Vérifier si la catégorie est un tableau ou une chaîne
        filteredProducts = products.filter(product => {
            if (Array.isArray(product.category)) {
                return product.category.includes(category);
            }
            return product.category === category;
        });
    }
    
    // Calculer les produits à afficher pour la page actuelle
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
    
    // Vider la grille de produits
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    // Afficher les produits
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">Aucun produit trouvé dans cette catégorie.</div>';
    } else {
        productsToDisplay.forEach(product => {
        const productCard = `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${product.images && product.images.length > 1 ? `
                    <div class="image-gallery">
                            <img src="${product.images[0]}" alt="${product.name}" class="main-image" data-image-index="0">
                        <div class="gallery-nav-container">
                            <button class="gallery-nav prev" onclick="event.stopPropagation(); changeImage('${product.id}', 'prev')">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M15 18l-6-6 6-6"/>
                                </svg>
                            </button>
                            <button class="gallery-nav next" onclick="event.stopPropagation(); changeImage('${product.id}', 'next')">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M9 18l6-6-6-6"/>
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
                    <div class="price">${product.price}</div>
                <p class="description">${product.description}</p>
            <div class="product-tags">
                ${product.dimensions ? `<span class="tag">${product.dimensions}</span>` : ''}
                ${product.material ? `<span class="tag">${product.material}</span>` : ''}
            </div>
                    <button class="btn btn-primary product-order-btn">Commander</button>
            </div>
        </div>
    `;
        productsGrid.innerHTML += productCard;
    });

    // Ajouter les gestionnaires d'événements
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = card.dataset.productId;
        const product = products.find(p => p.id === productId);
        
        if (product.images && product.images.length > 1) {
            handleCardTouchGallery(card, product);
        }

            // Gestionnaire pour ouvrir le popup de produit en cliquant sur la carte
            card.addEventListener('click', (e) => {
                console.log("Clic sur la carte produit");
                // Ne pas déclencher si on clique sur le bouton Commander ou sur les flèches de navigation
                if (!e.target.closest('.btn-primary') && !e.target.closest('.gallery-nav')) {
                    openProductPopup(productId);
                }
            });
            
            // Gestionnaire spécifique pour le bouton Commander
            const orderButton = card.querySelector('.btn-primary');
            orderButton.addEventListener('click', (e) => {
                console.log("Bouton Commander cliqué pour le produit:", product);
                e.stopPropagation(); // Empêcher la propagation pour ne pas ouvrir le popup de produit
                createOrderPopup(product);
            });
        });
    }
    
    // Créer la pagination
    createPagination(filteredProducts.length, category);
}

// Fonction pour créer la pagination
function createPagination(totalProducts, category) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    
    // Ne pas afficher la pagination s'il n'y a qu'une seule page
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
        
        // Bouton précédent
    paginationHTML += `<button class="pagination-btn prev ${currentPage === 1 ? 'disabled' : ''}" ${currentPage === 1 ? 'disabled' : ''}>Précédent</button>`;
    
    // Pages numérotées
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    
    // Bouton suivant
    paginationHTML += `<button class="pagination-btn next ${currentPage === totalPages ? 'disabled' : ''}" ${currentPage === totalPages ? 'disabled' : ''}>Suivant</button>`;
    
    paginationContainer.innerHTML = paginationHTML;
    
    // Ajouter les gestionnaires d'événements
    const pageButtons = paginationContainer.querySelectorAll('.pagination-btn:not(.prev):not(.next)');
    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentPage = parseInt(button.dataset.page);
                displayProducts(category);
            updateURL(category, currentPage);
                window.scrollTo(0, 0);
            });
    });
    
    // Gestionnaire pour le bouton précédent
    const prevButton = paginationContainer.querySelector('.pagination-btn.prev');
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayProducts(category);
                updateURL(category, currentPage);
                window.scrollTo(0, 0);
            }
        });
    }
    
    // Gestionnaire pour le bouton suivant
    const nextButton = paginationContainer.querySelector('.pagination-btn.next');
    if (nextButton) {
            nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayProducts(category);
                updateURL(category, currentPage);
                window.scrollTo(0, 0);
            }
        });
    }
}

// Fonction pour créer le popup d'un produit
function createProductPopup(product) {
    const popup = document.createElement('div');
    popup.className = 'product-popup';
    
    // Déterminer la source de l'image (images[0] ou image)
    const imageSource = product.images ? product.images[0] : product.image;
    const hasMultipleImages = product.images && product.images.length > 1;
    
    popup.innerHTML = `
        <div class="popup-content">
            <button class="close-popup">&times;</button>
            <div class="popup-gallery">
                <div class="popup-image-container">
                    <img src="${imageSource}" alt="${product.name}" class="popup-main-image">
                    ${hasMultipleImages ? `
                    <button class="popup-nav prev">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>
                    <button class="popup-nav next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </button>
                    ` : ''}
                </div>
                ${hasMultipleImages ? `
                <div class="popup-thumbnails">
                    ${product.images.map((img, index) => `
                         <img src="${img}" 
                              alt="${product.name} - Image ${index + 1}" 
                              class="popup-thumbnail ${index === 0 ? 'active' : ''}"
                              data-index="${index}">
                    `).join('')}
                </div>
                ` : ''}
            </div>
            <div class="popup-info">
                <h2>${product.name}</h2>
                <div class="popup-price">${product.price}</div>
                ${product.priceOptions ? `
                    <div class="popup-price-option">${product.priceOptions}</div>
                ` : ''}
                ${product.priceDetails ? `
                    <div class="popup-price-details">
                        ${Array.isArray(product.priceDetails) ? product.priceDetails.map(detail => `<p>${detail}</p>`).join('') : `<p>${product.priceDetails}</p>`}
                    </div>
                ` : ''}
                <div class="popup-description">${product.description}</div>
                <div class="popup-details">
                    <p><strong>Dimensions :</strong> ${product.dimensions}</p>
                    <p><strong>Matériau :</strong> ${product.material}</p>
                </div>
                <div class="popup-features">
                    <h3>Caractéristiques:</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary">Commander</button>
            </div>
        </div>
    `;

    // Fonction pour fermer le popup et mettre à jour l'URL
    const closePopupAndUpdateURL = () => {
        popup.classList.remove('active');
        
        // Mettre à jour l'URL pour supprimer le paramètre product
        // Utiliser la fonction updateURL existante pour maintenir la cohérence
        updateURL(getCategoryFromURL(), currentPage);
        
        setTimeout(() => {
                    popup.remove();
                    document.body.classList.remove('popup-open');
        }, 300);
    };

    // Gestion de la fermeture en cliquant sur le bouton
    const closeButton = popup.querySelector('.close-popup');
    closeButton.addEventListener('click', closePopupAndUpdateURL);
    
    // Fermer en cliquant en dehors du contenu
                popup.addEventListener('click', (e) => {
                    if (e.target === popup) {
            closePopupAndUpdateURL();
        }
    });

    // Ajouter un gestionnaire d'événements au bouton Commander
    const orderButton = popup.querySelector('.btn-primary');
    orderButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêcher la propagation
        
        // Fermer le popup de produit
                        popup.remove();
                        document.body.classList.remove('popup-open');
        
        // Mettre à jour l'URL pour supprimer le paramètre product
        updateURL(getCategoryFromURL(), currentPage);
        
        // Ouvrir le popup de commande
        createOrderPopup(product);
    });

    // Gestion des événements après la création du popup
    if (hasMultipleImages) {
        const mainImage = popup.querySelector('.popup-main-image');
        const thumbnails = popup.querySelectorAll('.popup-thumbnail');
        const prevButton = popup.querySelector('.popup-nav.prev');
        const nextButton = popup.querySelector('.popup-nav.next');
        let currentImageIndex = 0;

        // Fonction pour mettre à jour l'image
        function updateImage(index) {
            mainImage.src = product.images[index];
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnails[index].classList.add('active');
            currentImageIndex = index;
        }
        
        // Gestion des clics sur les boutons de navigation
        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
            updateImage(currentImageIndex);
        });

        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % product.images.length;
            updateImage(currentImageIndex);
        });

        // Gestion des clics sur les vignettes
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', (e) => {
                e.stopPropagation();
                updateImage(index);
            });
        });
    }
    
    return popup;
}

// Fonction pour ouvrir le popup d'un produit
function openProductPopup(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Créer et ajouter le popup au DOM
    const popup = createProductPopup(product);
    document.body.appendChild(popup);
    document.body.classList.add('popup-open');
    
    // Activer la navigation tactile pour les images
    if (product.images && product.images.length > 1) {
        handleTouchGallery(popup, product);
    }
    
    // Mettre à jour l'URL avec le paramètre product
    // Nous mettons toujours à jour l'URL lorsqu'un utilisateur clique sur un produit
    updateURL(getCategoryFromURL(), currentPage, productId);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    productsGrid = document.querySelector('.products-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Supprimer la classe active de tous les boutons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            // Forcer le retour à la page 1
            currentPage = 1;
            
            // Mettre à jour l'URL sans le paramètre de produit et de page
            if (category === 'all') {
                // Supprimer tous les paramètres sauf le thème si présent
                const url = new URL(window.location);
                const theme = url.searchParams.get('theme');
                url.search = '';
                if (theme) {
                    url.searchParams.set('theme', theme);
                }
                window.history.pushState({}, '', url);
            } else {
                const url = new URL(window.location);
                // Conserver uniquement le paramètre de thème si présent
                const theme = url.searchParams.get('theme');
                url.search = '';
                if (theme) {
                    url.searchParams.set('theme', theme);
                }
                url.searchParams.set('category', category);
                window.history.pushState({}, '', url);
            }
            
            // Afficher les produits après la mise à jour de l'URL
            displayProducts(category);
        });
    });

    // Récupérer et afficher la catégorie depuis l'URL
    const savedCategory = getCategoryFromURL();
    
    // Récupérer la page depuis l'URL
    currentPage = getPageFromURL();
    
    // Vérifier s'il y a un produit à afficher
    const productId = getProductFromURL();
    
    // Afficher d'abord les produits
    displayProducts(savedCategory);
    
    // Activer le bon bouton de catégorie
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    const activeButton = document.querySelector(`.category-btn[data-category="${savedCategory}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    } else {
        // Si aucun bouton ne correspond, activer le bouton "Tout" par défaut
        const defaultButton = document.querySelector('.category-btn[data-category="all"]');
        if (defaultButton) {
            defaultButton.classList.add('active');
        }
    }

    // Ensuite ouvrir le popup si nécessaire
    if (productId) {
        setTimeout(() => {
            openProductPopup(productId);
        }, 100); // Petit délai pour s'assurer que la grille est chargée
    }
});

// Garder les fonctions existantes inchangées
function changeImage(productId, direction) {
    console.log("changeImage appelé pour le produit:", productId, "direction:", direction);
    
    const product = products.find(p => p.id === productId);
    if (!product || !product.images) {
        console.log("Produit non trouvé ou pas d'images");
        return;
    }

    const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    if (!productCard) {
        console.log("Carte produit non trouvée");
        return;
    }
    
    const mainImage = productCard.querySelector('.main-image');
    if (!mainImage) {
        console.log("Image principale non trouvée");
        return;
    }
    
    const currentIndex = parseInt(mainImage.dataset.imageIndex || 0);
    console.log("Index actuel:", currentIndex);
    
    let newIndex;
    if (direction === 'prev') {
        newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    } else {
        newIndex = (currentIndex + 1) % product.images.length;
    }
    
    console.log("Nouvel index:", newIndex);
    mainImage.src = product.images[newIndex];
    mainImage.dataset.imageIndex = newIndex;

    // Mettre à jour les points de pagination
    const dots = productCard.querySelectorAll('.pagination-dots .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === newIndex);
    });
}

function handleCardTouchGallery(card, product) {
    const mainImage = card.querySelector('.main-image');
    let touchStartX = 0;
    let touchStartY = 0;
    let currentIndex = parseInt(mainImage.dataset.imageIndex) || 0;

    // Ajouter l'indicateur de pagination seulement s'il n'existe pas déjà
    if (product.images && product.images.length > 1 && !card.querySelector('.pagination-dots')) {
        const paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination-dots';
        
        product.images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
            paginationContainer.appendChild(dot);
        });
        
        card.querySelector('.image-gallery').appendChild(paginationContainer);
    }

    // Gestionnaire de swipe
    mainImage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].pageY;
    }, { passive: true });

    mainImage.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) return;

        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].pageY - touchStartY;

        // Si le mouvement est plus horizontal que vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
        }
    }, { passive: false });

    mainImage.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].pageY - touchStartY;

        // Si c'est un swipe horizontal
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                currentIndex = (currentIndex - 1 + product.images.length) % product.images.length;
            } else {
                currentIndex = (currentIndex + 1) % product.images.length;
            }
            mainImage.src = product.images[currentIndex];
            mainImage.dataset.imageIndex = currentIndex;
            
            // Mettre à jour les points de pagination
            const dots = card.querySelectorAll('.pagination-dots .dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        } else if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
            // Si c'est un tap simple
            openProductPopup(product.id);
        }
    }, { passive: true });
}

function handleTouchGallery(popup, product) {
    if (!product.images || product.images.length <= 1) return;
    
    const mainImage = popup.querySelector('.popup-main-image');
    const thumbnails = popup.querySelectorAll('.popup-thumbnail');
    const prevBtn = popup.querySelector('.popup-nav.prev');
    const nextBtn = popup.querySelector('.popup-nav.next');
    let touchStartX = 0;
    let touchStartY = 0;
    let currentIndex = 0;

    // Gestionnaire de swipe
    mainImage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].pageY;
    }, { passive: true });

    mainImage.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) return;

        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].pageY - touchStartY;

        // Si le mouvement est plus horizontal que vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
        }
    }, { passive: false });

    mainImage.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].pageY - touchStartY;

        // Si c'est un swipe horizontal
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                currentIndex = (currentIndex - 1 + product.images.length) % product.images.length;
            } else {
                currentIndex = (currentIndex + 1) % product.images.length;
            }
            updateImage(currentIndex);
        }
    }, { passive: true });

    function updateImage(index) {
        mainImage.src = product.images[index];
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        currentIndex = index;
    }

    // Boutons de navigation
    prevBtn?.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
        updateImage(newIndex);
    });

    nextBtn?.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % product.images.length;
        updateImage(newIndex);
    });

    // Vignettes
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateImage(index);
        });
    });
}

function initializeProductSwiper() {
  const productSwiper = new Swiper('.product-swiper', {
    // ... existing code ...
    touchRatio: 1,
    touchAngle: 45,
    resistance: true,
    touchStartPreventDefault: false,
    nested: true,
    // Ajout de ces paramètres pour améliorer la gestion tactile
    touchMoveStopPropagation: false,
    passiveListeners: true,
    on: {
      touchStart: function(swiper, event) {
        event.stopPropagation();
      }
    }
  });
}

// Fonction pour mettre à jour l'URL avec la catégorie, la page et le produit
function updateURL(category, page = currentPage, productId = null) {
    const url = new URL(window.location);
    if (category === 'all') {
        url.searchParams.delete('category');
    } else {
        url.searchParams.set('category', category);
    }
    
    if (page === 1) {
        url.searchParams.delete('page');
    } else {
        url.searchParams.set('page', page);
    }
    
    if (productId) {
        url.searchParams.set('product', productId);
    } else {
        url.searchParams.delete('product');
    }
    
    window.history.pushState({}, '', url);
}

// Fonction pour obtenir la catégorie depuis l'URL
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category') || 'all';
}

// Fonction pour obtenir la page depuis l'URL
function getPageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page')) || 1;
    return page;
}

// Fonction pour obtenir l'ID du produit depuis l'URL
function getProductFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product');
}

// Fonction pour créer le popup de commande
function createOrderPopup(product) {
    console.log("createOrderPopup appelé avec le produit:", product);
    
    // Supprimer tout popup de commande existant
    const existingOrderPopups = document.querySelectorAll('.popup-overlay.order-popup');
    existingOrderPopups.forEach(popup => popup.remove());
    
    // Supprimer tout popup de confirmation existant
    const existingConfirmationPopups = document.querySelectorAll('.popup-overlay.confirmation-popup');
    existingConfirmationPopups.forEach(popup => popup.remove());
    
    // Créer le nouveau popup
    const popup = document.createElement('div');
    popup.className = 'popup-overlay order-popup';
    
    // Générer les options de couleur
    const colorOptions = ['Bois Naturel', 'Noir', 'Lasuré', 'Or', 'Argent']
        .map(color => `<option value="${color}">${color}</option>`)
        .join('');
    
    // Obtenir la date du jour au format YYYY-MM-DD pour l'attribut min du champ date
    const today = new Date().toISOString().split('T')[0];
    
    popup.innerHTML = `
        <div class="popup-content order-form-content">
            <button class="close-popup">&times;</button>
            <h2>Commander ${product.name}</h2>
            
            <form class="contact-form order-form">
                <div class="form-group">
                    <label for="product-name">Produit *</label>
                    <input type="text" id="product-name" name="product-name" value="${product.name}" readonly>
                </div>
                
                
                
                <div class="form-group-row">
                    <div class="form-group">
                        <label for="firstname">Prénom *</label>
                        <input type="text" id="firstname" name="firstname" required>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Nom *</label>
                        <input type="text" id="lastname" name="lastname" required>
            </div>
                    </div>

                <div class="form-group-row">
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required>
                </div>
                    <div class="form-group">
                        <label for="phone">Téléphone *</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9+\\s]+" required>
                    </div>
            </div>

                <div class="address-group">
                    <h4>Adresse de livraison *</h4>
                    <div class="form-group">
                        <label for="street">Rue et numéro</label>
                        <input type="text" id="street" name="street" required>
                    </div>
                    <div class="form-group-row">
                        <div class="form-group">
                            <label for="postal">Code postal</label>
                            <input type="text" id="postal" name="postal" required>
                        </div>
                        <div class="form-group">
                            <label for="city">Ville</label>
                            <input type="text" id="city" name="city" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="country">Pays</label>
                        <input type="text" id="country" name="country" value="Belgique" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="message">Remarques supplémentaires (dimensions, coloris,...)</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                
                <div class="form-group date-group">
                    <label for="deadline">Date souhaitée de réalisation</label>
                    <input type="date" id="deadline" name="deadline" min="${today}">
                    <span class="field-info">Cette date est à titre indicatif et nous permettra de mieux organiser notre planning. Le délai exact vous sera confirmé plus tard.</span>
                </div>
                
                <div class="form-group file-upload">
                    <label for="order-attachments">
                        Pièces jointes (photos, croquis...)
                        <span class="file-info">Max 5 Mo par fichier - JPG, PNG, PDF, SVG</span>
                    </label>
                    <input type="file" id="order-attachments" name="attachments" multiple accept=".jpg,.jpeg,.png,.pdf,.svg" class="file-input">
                    <div class="file-drop-zone">
                        <img src="assets/images/upload-icon.svg" alt="Upload" class="upload-icon">
                        <p>Glissez vos fichiers ici ou cliquez pour sélectionner</p>
                        <p class="selected-files"></p>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="checkbox-group">
                        <input type="checkbox" id="terms" name="terms" required>
                        <label for="terms">En passant commande, vous acceptez nos conditions générales *</label>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="checkbox-group">
                        <input type="checkbox" id="newsletter" name="newsletter">
                        <label for="newsletter">J'accepte de recevoir la newsletter</label>
                    </div>
                </div>

                <p class="form-required-notice">* Champs obligatoires</p>
                
                <button type="submit" class="btn btn-primary">Commander</button>
                <p class="form-mod-paiement">Le devis et les modalités de paiement vous seront envoyés par e-mail.</p>
            </form>
        </div>
    `;
    
    // Ajouter le popup au body
    document.body.appendChild(popup);
    document.body.classList.add('popup-open');

    // Animation d'entrée - forcer un reflow avant d'ajouter la classe active
    void popup.offsetWidth; // Force reflow
    popup.classList.add('active');

    // Gestion de la fermeture
    const closeButton = popup.querySelector('.close-popup');
    closeButton.addEventListener('click', () => {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.remove();
            document.body.classList.remove('popup-open');
        }, 300);
    });

    // Gestion des pièces jointes
    const dropZone = popup.querySelector('.file-drop-zone');
    const fileInput = popup.querySelector('.file-input');
    const selectedFiles = popup.querySelector('.selected-files');
    
    // Constante pour la taille maximale de fichier (5 Mo)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 Mo en octets
    
    // Créer un élément pour afficher les erreurs
    const errorMessage = document.createElement('p');
    errorMessage.className = 'file-error-message';
    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none';
    dropZone.appendChild(errorMessage);
    
    // Empêche la propagation du clic sur la liste des fichiers
    selectedFiles.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Ouvre le sélecteur de fichiers au clic sur la zone
    dropZone.addEventListener('click', () => {
        // Sauvegarde des fichiers existants
        const existingFiles = Array.from(fileInput.files);
        
        // Création d'un gestionnaire d'événement temporaire pour le changement de fichiers
        const handleFileInputChange = function() {
            // Création d'un objet DataTransfer pour fusionner les fichiers
            const dt = new DataTransfer();
            
            // Ajout des fichiers existants
            existingFiles.forEach(file => {
                dt.items.add(file);
            });
            
            // Ajout des nouveaux fichiers
            Array.from(fileInput.files).forEach(file => {
                dt.items.add(file);
            });
            
            // Mise à jour de l'input file avec tous les fichiers
            fileInput.files = dt.files;
            
            // Suppression du gestionnaire d'événement temporaire
            fileInput.removeEventListener('change', handleFileInputChange);
            
            // Mise à jour de la liste des fichiers
            updateFileList();
        };
        
        // Ajout du gestionnaire d'événement temporaire
        fileInput.addEventListener('change', handleFileInputChange);
        
        // Ouverture du sélecteur de fichiers
        fileInput.click();
    });

    // Gestion du drag & drop
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        
        // Création d'un objet DataTransfer pour fusionner les fichiers
        const dt = new DataTransfer();
        
        // Ajout des fichiers existants
        if (fileInput.files.length > 0) {
            Array.from(fileInput.files).forEach(file => {
                dt.items.add(file);
            });
        }
        
        // Ajout des nouveaux fichiers
        Array.from(e.dataTransfer.files).forEach(file => {
            dt.items.add(file);
        });
        
        // Mise à jour de l'input file avec tous les fichiers
        fileInput.files = dt.files;
        updateFileList();
    });

    // Mise à jour de la liste des fichiers
    fileInput.addEventListener('change', updateFileList);

    function updateFileList() {
        selectedFiles.innerHTML = '';
        errorMessage.style.display = 'none';
        
        if (fileInput.files.length > 0) {
            const fileList = document.createElement('ul');
            fileList.className = 'file-list';
            
            let hasOversizedFiles = false;
            
            Array.from(fileInput.files).forEach((file, index) => {
                // Vérifier la taille du fichier
                if (file.size > MAX_FILE_SIZE) {
                    hasOversizedFiles = true;
                }
                
                const fileItem = document.createElement('li');
                fileItem.className = 'file-item';
                
                const fileName = document.createElement('span');
                fileName.className = 'file-name';
                fileName.textContent = file.name;
                
                // Ajouter une classe pour les fichiers trop volumineux
                if (file.size > MAX_FILE_SIZE) {
                    fileName.classList.add('file-oversized');
                    fileName.style.color = 'red';
                }
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-file';
                removeBtn.innerHTML = '&times;';
                removeBtn.dataset.index = index;
                
                removeBtn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Empêche la propagation du clic vers la zone de dépôt
                    removeFile(parseInt(this.dataset.index));
                });
                
                fileItem.appendChild(fileName);
                fileItem.appendChild(removeBtn);
                fileList.appendChild(fileItem);
                
                // Empêche la propagation du clic sur l'élément de fichier
                fileItem.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            });
            
            selectedFiles.appendChild(fileList);
            
            // Afficher le message d'erreur si des fichiers sont trop volumineux
            if (hasOversizedFiles) {
                errorMessage.textContent = 'Attention : Certains fichiers dépassent la limite de 5 Mo. Veuillez les supprimer ou les remplacer.';
                errorMessage.style.display = 'block';
            }
        }
    }
    
    function removeFile(index) {
        const dt = new DataTransfer();
        const files = Array.from(fileInput.files);
        
        files.forEach((file, i) => {
            if (i !== index) {
                dt.items.add(file);
            }
        });
        
        fileInput.files = dt.files;
        updateFileList();
    }

    // Gestion du formulaire
    const orderForm = popup.querySelector('.order-form');
    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(orderForm);
        
        // Ajout des fichiers
        const fileInput = popup.querySelector('.file-input');
        if (fileInput.files.length > 0) {
            Array.from(fileInput.files).forEach((file, index) => {
                formData.append('attachments[]', file);
            });
        }

        try {
            const response = await fetch('send-order.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                // Afficher le popup de confirmation
                showOrderConfirmationPopup();
                
                // Fermer le popup de commande
                popup.classList.remove('active');
                setTimeout(() => {
                    popup.remove();
                    document.body.classList.remove('popup-open');
                }, 300);
            } else {
                throw new Error(result.message || 'Erreur lors de l\'envoi de la commande');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert(error.message || 'Une erreur est survenue lors de l\'envoi de la commande. Veuillez réessayer.');
        }
    });
}

// Fonction pour afficher le popup de confirmation de commande
function showOrderConfirmationPopup() {
    console.log("showOrderConfirmationPopup appelé");
    
    // Supprimer tout popup de commande existant
    const existingOrderPopups = document.querySelectorAll('.popup-overlay.order-popup');
    existingOrderPopups.forEach(popup => popup.remove());
    
    // Supprimer tout popup de confirmation existant
    const existingConfirmationPopups = document.querySelectorAll('.popup-overlay.confirmation-popup');
    existingConfirmationPopups.forEach(popup => popup.remove());
    
    const popup = document.createElement('div');
    popup.className = 'popup-overlay confirmation-popup';
    
    popup.innerHTML = `
        <div class="popup-content">
            <div class="logo-container">
                <img src="assets/images/La%20Gravisterie_N.svg" alt="Logo La Gravisterie" class="popup-logo">
            </div>
            <h3 class="popup-title">Merci pour votre commande !</h3>
            <p class="popup-message">Nous avons bien reçu votre demande et nous reviendrons vers vous pour confirmer la commande.</p>
            <button class="popup-close">Fermer</button>
        </div>
    `;

    document.body.appendChild(popup);
    
    // Animation d'entrée avec un petit délai pour permettre au DOM de se mettre à jour
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);

    // Gestionnaire pour fermer le popup
    const closeButton = popup.querySelector('.popup-close');
    const closePopup = () => {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.remove();
        }, 300);
    };

    closeButton.addEventListener('click', closePopup);
    
    // Fermer le popup en cliquant à l'extérieur du contenu
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
    }
  });
}