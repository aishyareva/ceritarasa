const DB = {
  recipes: [
    {
      id: 'rendang',
      slug: 'rendang',
      name: 'Rendang',
      origin: 'Sumatera Barat',
      island: 'sumatera',
      province: 'sumatera-barat',
      image: 'images/recipes/rendang.webp',
      duration: 120,
      level: 'medium',
      rating: 4.9,
      reviews: 2341,
      tags: ['daging', 'pedas', 'kering'],
      description: {
        id: 'Rendang adalah masakan daging sapi yang dimasak dalam santan dan rempah-rempah khas Minangkabau. Cita rasanya kaya, pedas, dan gurih.',
        en: 'Rendang is a slow-cooked beef dish simmered in coconut milk and Minangkabau spices. It has a rich, spicy, and savory flavor profile.'
      },
      ingredients: [
        { name: { id: 'Daging sapi (has dalam)', en: 'Beef brisket' }, amount: '1 kg', alt: null },
        { name: { id: 'Santan kental', en: 'Thick coconut milk' }, amount: '500 ml', alt: { id: 'Santan instan, susu evaporasi, atau yogurt plain', en: 'Instant coconut milk, evaporated milk, or plain yogurt' } },
        { name: { id: 'Santan encer', en: 'Thin coconut milk' }, amount: '250 ml', alt: null },
        { name: { id: 'Serai, memarkan', en: 'Lemongrass, bruised' }, amount: '3 batang', alt: null },
        { name: { id: 'Daun jeruk', en: 'Kaffir lime leaves' }, amount: '5 lembar', alt: { id: 'Daun salam', en: 'Bay leaves' } },
        { name: { id: 'Daun kunyit', en: 'Turmeric leaves' }, amount: '2 lembar', alt: { id: 'Kunyit bubuk', en: 'Turmeric powder' } },
        { name: { id: 'Asam kandis', en: 'Garcinia fruit (asam kandis)' }, amount: '3 buah', alt: { id: 'Asam Jawa atau air jeruk nipis', en: 'Tamarind paste or lime juice' } },
        { name: { id: 'Garam', en: 'Salt' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Cabai merah keriting', en: 'Curly red chili' }, amount: '12 buah' },
        { name: { id: 'Cabai merah besar', en: 'Large red chili' }, amount: '5 buah' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '8 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic cloves' }, amount: '4 siung' },
        { name: { id: 'Jahe', en: 'Ginger' }, amount: '3 cm' },
        { name: { id: 'Lengkuas', en: 'Galangal' }, amount: '4 cm' },
        { name: { id: 'Kunyit', en: 'Turmeric' }, amount: '2 cm' },
      ],
      steps: [
        { id: 1, text: { id: 'Haluskan semua bumbu halus (cabai, bawang merah, bawang putih, jahe, lengkuas, kunyit) menggunakan blender atau ulekan.', en: 'Blend all spice paste ingredients (chilies, shallots, garlic, ginger, galangal, turmeric) using a blender or mortar.' } },
        { id: 2, text: { id: 'Potong daging sapi menjadi potongan besar, lalu cuci bersih dan tiriskan.', en: 'Cut beef into large chunks, wash thoroughly and drain.' } },
        { id: 3, text: { id: 'Masukkan santan encer, bumbu halus, serai, daun jeruk, daun kunyit, dan asam kandis ke dalam wajan besar. Aduk rata.', en: 'Combine thin coconut milk, spice paste, lemongrass, lime leaves, turmeric leaves, and asam kandis in a large wok. Stir well.' } },
        { id: 4, text: { id: 'Masukkan potongan daging sapi. Masak di atas api sedang sambil terus diaduk hingga mendidih.', en: 'Add the beef pieces. Cook over medium heat, stirring continuously until it boils.' } },
        { id: 5, text: { id: 'Tuangkan santan kental. Terus masak dan aduk sesekali hingga kuah menyusut dan berminyak (sekitar 2 jam).', en: 'Pour in the thick coconut milk. Continue cooking and stirring occasionally until the sauce reduces and turns oily (about 2 hours).' } },
        { id: 6, text: { id: 'Setelah kuah mengering dan daging berwarna cokelat kehitaman, rendang siap disajikan. Koreksi garam sebelum diangkat.', en: 'Once the sauce dries out and the meat turns dark brown, the rendang is ready. Adjust salt before serving.' } },
      ],
      youtubeId: 'gIjv7GvSN4A',
      history: {
        origin: { id: 'Rendang berasal dari Minangkabau, Sumatera Barat.', en: 'Rendang originates from the Minangkabau people of West Sumatra.' },
        culture: { id: 'Rendang melambangkan kesabaran, ketekunan, dan kebersamaan. Proses memasaknya yang lama mencerminkan filosofi hidup masyarakat Minang.', en: 'Rendang symbolizes patience, perseverance, and togetherness. Its long cooking process reflects the life philosophy of the Minangkabau people.' },
        funFact: { id: 'Rendang dinobatkan sebagai makanan terenak di dunia versi CNN Travel dua kali, yaitu pada tahun 2011 dan 2017.', en: 'Rendang was named the most delicious food in the world by CNN Travel twice, in 2011 and 2017.' }
      }
    },
    {
      id: 'arsik',
      slug: 'arsik',
      name: 'Arsik',
      origin: 'Sumatera Utara',
      island: 'sumatera',
      province: 'sumatera-utara',
      image: 'images/recipes/arsik.webp',
      duration: 60,
      level: 'medium',
      rating: 4.7,
      reviews: 950,
      tags: ['ikan', 'pedas', 'andaliman'],
      description: {
        id: 'Ikan mas dimasak tanpa air ekstra dengan bumbu khas Batak: andaliman, asam cikala, dan kunyit. Bumbu menyusut dan melekat kering di ikan.',
        en: 'Carp cooked without extra water using signature Batak spices: andaliman pepper, cikala acid, and turmeric. The spices reduce and cling dry to the fish.'
      },
      ingredients: [
        { name: { id: 'Ikan mas', en: 'Carp' }, amount: '1 ekor (600-800 g)', alt: { id: 'Ikan nila / ikan gurame', en: 'Tilapia / gourami' } },
        { name: { id: 'Asam cikala', en: 'Cikala acid' }, amount: '3 buah', alt: { id: 'Asam kandis / asam jawa', en: 'Kandis acid / tamarind' } },
        { name: { id: 'Serai', en: 'Lemongrass' }, amount: '3 batang', alt: null },
        { name: { id: 'Daun salam koja', en: 'Curry leaves' }, amount: '5 lembar', alt: null },
        { name: { id: 'Garam', en: 'Salt' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Andaliman', en: 'Andaliman (Batak pepper)' }, amount: '1 sdt' },
        { name: { id: 'Kunyit', en: 'Turmeric' }, amount: '5 cm' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '6 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '4 siung' },
      ],
      steps: [
        { id: 1, text: { id: 'Bersihkan ikan mas, lumuri dengan garam dan kunyit halus, diamkan 15 menit.', en: 'Clean the carp, coat with salt and ground turmeric, rest for 15 minutes.' } },
        { id: 2, text: { id: 'Haluskan andaliman, bawang merah, bawang putih, dan kunyit.', en: 'Blend the andaliman, shallots, garlic, and turmeric.' } },
        { id: 3, text: { id: 'Oleskan bumbu halus ke seluruh badan ikan, termasuk bagian dalam.', en: 'Spread the ground spices all over the fish, including the inside.' } },
        { id: 4, text: { id: 'Susun serai dan daun salam koja di dasar wajan, letakkan ikan di atasnya.', en: 'Arrange lemongrass and curry leaves at the bottom of the pan, place fish on top.' } },
        { id: 5, text: { id: 'Tambahkan asam cikala dan sedikit air, masak api kecil-sedang dengan tutup.', en: 'Add cikala acid and a little water, cook covered over low-medium heat.' } },
        { id: 6, text: { id: 'Biarkan air menyusut hingga bumbu mengering dan melekat di ikan (±30 menit).', en: 'Let the water reduce until the spices dry and cling to the fish (±30 minutes).' } },
        { id: 7, text: { id: 'Sajikan dengan nasi putih dan sambal.', en: 'Serve with white rice and sambal.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Arsik adalah masakan tradisional suku Batak Toba dari Tapanuli, Sumatera Utara.', en: 'Arsik is a traditional dish of the Batak Toba people from Tapanuli, North Sumatra.' },
        culture: { id: 'Andaliman, rempah khas Batak yang hanya tumbuh di dataran tinggi Toba, menjadi identitas utama masakan ini.', en: 'Andaliman, a spice unique to the Batak that only grows in the Toba highlands, is the defining identity of this dish.' },
        funFact: { id: 'Arsik wajib hadir dalam upacara adat Batak seperti pernikahan dan acara kematian sebagai simbol penghormatan.', en: 'Arsik must be present in Batak traditional ceremonies like weddings and funerals as a symbol of respect.' }
      }
    },
    {
      id: 'pindang-patin',
      slug: 'pindang-patin',
      name: 'Pindang Patin',
      origin: 'Sumatera Selatan',
      island: 'sumatera',
      province: 'sumatera-selatan',
      image: 'images/recipes/pindang-patin.webp',
      duration: 40,
      level: 'easy',
      rating: 4.8,
      reviews: 1100,
      tags: ['ikan', 'asam', 'segar', 'berkuah'],
      description: {
        id: 'Sup ikan patin berkuah kuning asam segar khas Palembang. Cita rasa asam segar dari belimbing wuluh menjadi ciri khasnya.',
        en: 'A fresh sour yellow catfish soup from Palembang. Its signature fresh sour taste comes from belimbing wuluh (Averrhoa bilimbi).'
      },
      ingredients: [
        { name: { id: 'Ikan patin', en: 'Catfish' }, amount: '1 kg', alt: { id: 'Ikan gurame / kakap / mas', en: 'Gourami / snapper / carp' } },
        { name: { id: 'Serai', en: 'Lemongrass' }, amount: '3 batang', alt: null },
        { name: { id: 'Belimbing wuluh', en: 'Bilimbi fruit' }, amount: '4 buah', alt: { id: 'Asam jawa / jeruk nipis', en: 'Tamarind / lime' } },
        { name: { id: 'Tomat merah', en: 'Red tomato' }, amount: '3 buah', alt: null },
        { name: { id: 'Garam, gula', en: 'Salt, sugar' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Kunyit', en: 'Turmeric' }, amount: '3 cm' },
        { name: { id: 'Lengkuas', en: 'Galangal' }, amount: '3 cm' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '5 siung' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '8 siung' },
        { name: { id: 'Cabai merah', en: 'Red chilies' }, amount: '5 buah' },
      ],
      steps: [
        { id: 1, text: { id: 'Haluskan bawang merah, bawang putih, kunyit, lengkuas, dan cabai.', en: 'Blend the shallots, garlic, turmeric, galangal, and chilies.' } },
        { id: 2, text: { id: 'Tumis bumbu halus bersama serai hingga harum dan matang.', en: 'Sauté the ground spices with lemongrass until fragrant and cooked.' } },
        { id: 3, text: { id: 'Tuang air secukupnya (±1 liter), didihkan.', en: 'Pour in enough water (±1 liter), bring to a boil.' } },
        { id: 4, text: { id: 'Masukkan ikan patin, belimbing wuluh, dan tomat.', en: 'Add the catfish, bilimbi fruit, and tomatoes.' } },
        { id: 5, text: { id: 'Masak 15–20 menit hingga ikan matang dan bumbu meresap.', en: 'Cook 15-20 minutes until the fish is done and flavors are absorbed.' } },
        { id: 6, text: { id: 'Koreksi rasa: asam, segar, dan pedas harus seimbang.', en: 'Adjust seasoning: sour, fresh, and spicy should be balanced.' } },
        { id: 7, text: { id: 'Sajikan panas dengan nasi putih dan lalapan segar.', en: 'Serve hot with white rice and fresh vegetables.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Pindang Patin merupakan masakan ikonik Palembang yang sudah dikenal sejak era Kerajaan Sriwijaya.', en: 'Pindang Patin is an iconic Palembang dish known since the era of the Srivijaya Kingdom.' },
        culture: { id: 'Ikan patin dari Sungai Musi menjadi bahan utama yang mencerminkan kekayaan alam Sumatera Selatan.', en: 'Catfish from the Musi River is the main ingredient, reflecting the natural richness of South Sumatra.' },
        funFact: { id: 'Pindang Patin berbeda dari pindang lainnya karena tidak menggunakan garam batu melainkan belimbing wuluh segar sebagai sumber keasaman.', en: 'Pindang Patin differs from other pindang dishes by using fresh bilimbi fruit instead of rock salt as the acid source.' }
      }
    },
    {
      id: 'mie-aceh',
      slug: 'mie-aceh',
      name: 'Mie Aceh',
      origin: 'Aceh',
      island: 'sumatera',
      province: 'aceh',
      image: 'images/recipes/mie-aceh.webp',
      duration: 30,
      level: 'easy',
      rating: 4.7,
      reviews: 1456,
      tags: ['mie', 'pedas', 'seafood'],
      description: {
        id: 'Mie Aceh adalah mie tebal kuning pedas khas Aceh dengan isian daging, udang, atau kepiting dalam kuah rempah yang kuat.',
        en: 'Mie Aceh is a thick yellow spicy noodle dish from Aceh filled with meat, shrimp, or crab in a robust spice broth.'
      },
      ingredients: [
        { name: { id: 'Mie kuning tebal', en: 'Thick yellow noodles' }, amount: '400 g', alt: null },
        { name: { id: 'Udang, kupas', en: 'Shrimp, peeled' }, amount: '200 g', alt: { id: 'Daging sapi atau kepiting', en: 'Beef or crab' } },
        { name: { id: 'Tauge', en: 'Bean sprouts' }, amount: '100 g', alt: null },
        { name: { id: 'Kol, iris', en: 'Cabbage, sliced' }, amount: '100 g', alt: null },
        { name: { id: 'Tomat', en: 'Tomatoes' }, amount: '2 buah', alt: null },
      ],
      spices: [
        { name: { id: 'Cabai merah', en: 'Red chilies' }, amount: '8 buah' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '6 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '4 siung' },
        { name: { id: 'Jintan', en: 'Cumin' }, amount: '0.5 sdt' },
        { name: { id: 'Kapulaga', en: 'Cardamom' }, amount: '3 buah' },
      ],
      steps: [
        { id: 1, text: { id: 'Haluskan bumbu dan tumis hingga harum. Masukkan udang dan masak hingga berubah warna.', en: 'Blend spices and stir-fry until fragrant. Add shrimp and cook until they change color.' } },
        { id: 2, text: { id: 'Masukkan kol dan tomat, aduk rata. Tuangkan sedikit air dan masak hingga layu.', en: 'Add cabbage and tomatoes, stir well. Pour in a little water and cook until soft.' } },
        { id: 3, text: { id: 'Masukkan mie dan tauge. Aduk rata dan masak hingga mie matang dan bumbu meresap.', en: 'Add noodles and bean sprouts. Mix well and cook until noodles are done and flavors are absorbed.' } },
      ],
      youtubeId: 'FLl-bKfpHRo',
      history: {
        origin: { id: 'Mie Aceh dipengaruhi oleh pedagang India dan Arab yang singgah di Aceh sejak abad ke-13.', en: 'Mie Aceh was influenced by Indian and Arab traders who stopped in Aceh since the 13th century.' },
        culture: { id: 'Penggunaan jintan dan kapulaga mencerminkan akulturasi budaya kuliner Timur Tengah dalam masakan Aceh.', en: 'The use of cumin and cardamom reflects the acculturation of Middle Eastern culinary culture in Acehnese cuisine.' },
        funFact: { id: 'Mie Aceh biasa disajikan dalam tiga cara: goreng, tumis (sedikit berkuah), atau kuah penuh.', en: 'Mie Aceh is typically served in three ways: fried, stir-fried (slightly saucy), or with full broth.' }
      }
    },
    {
      id: 'soto-betawi',
      slug: 'soto-betawi',
      name: 'Soto Betawi',
      origin: 'DKI Jakarta',
      island: 'jawa',
      province: 'dki-jakarta',
      image: 'images/recipes/soto-betawi.webp',
      duration: 90,
      level: 'medium',
      rating: 4.7,
      reviews: 1823,
      tags: ['soto', 'santan', 'berkuah'],
      description: {
        id: 'Soto Betawi adalah soto khas Jakarta berkuah santan gurih dengan isian daging sapi, jeroan, dan tomat segar.',
        en: 'Soto Betawi is a Jakarta-style soup with a rich coconut milk broth, beef, offal, and fresh tomatoes.'
      },
      ingredients: [
        { name: { id: 'Daging sapi', en: 'Beef' }, amount: '500 g', alt: null },
        { name: { id: 'Jeroan sapi (opsional)', en: 'Beef offal (optional)' }, amount: '200 g', alt: null },
        { name: { id: 'Santan', en: 'Coconut milk' }, amount: '400 ml', alt: { id: 'Susu full cream', en: 'Full cream milk' } },
        { name: { id: 'Tomat, potong', en: 'Tomatoes, cut' }, amount: '2 buah', alt: null },
        { name: { id: 'Daun bawang', en: 'Spring onion' }, amount: '2 batang', alt: null },
        { name: { id: 'Emping atau kerupuk', en: 'Emping crackers' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '6 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '4 siung' },
        { name: { id: 'Kemiri', en: 'Candlenut' }, amount: '3 butir' },
        { name: { id: 'Jahe', en: 'Ginger' }, amount: '2 cm' },
        { name: { id: 'Kunyit', en: 'Turmeric' }, amount: '1 cm' },
      ],
      steps: [
        { id: 1, text: { id: 'Rebus daging dan jeroan hingga empuk, buang air rebusan pertama untuk mengurangi bau. Sisihkan kaldu.', en: 'Boil beef and offal until tender, discard the first boiling water to reduce odor. Set aside the broth.' } },
        { id: 2, text: { id: 'Haluskan bumbu dan tumis hingga harum. Masukkan ke dalam kaldu.', en: 'Blend spices and stir-fry until fragrant. Add to the broth.' } },
        { id: 3, text: { id: 'Tuang santan dan masak dengan api kecil sambil diaduk agar tidak pecah.', en: 'Pour in coconut milk and cook over low heat, stirring to prevent splitting.' } },
        { id: 4, text: { id: 'Sajikan dengan potongan daging, tomat, daun bawang, dan emping.', en: 'Serve with sliced meat, tomatoes, spring onion, and emping crackers.' } },
      ],
      youtubeId: 'kLR7Gv5ZR0s',
      history: {
        origin: { id: 'Soto Betawi lahir dari perpaduan budaya Melayu, Arab, Tionghoa, dan Belanda di Batavia (kini Jakarta).', en: 'Soto Betawi emerged from the blend of Malay, Arab, Chinese, and Dutch cultures in Batavia (now Jakarta).' },
        culture: { id: 'Soto Betawi adalah simbol keberagaman kuliner Jakarta yang merupakan melting pot budaya.', en: 'Soto Betawi symbolizes the culinary diversity of Jakarta as a cultural melting pot.' },
        funFact: { id: 'Variasi soto Betawi bisa menggunakan susu sapi sebagai pengganti santan, menghasilkan rasa yang lebih ringan.', en: 'A variation of Soto Betawi uses cow\'s milk instead of coconut milk, resulting in a lighter flavor.' }
      }
    },
    {
      id: 'gabus-pucung',
      slug: 'gabus-pucung',
      name: 'Gabus Pucung',
      origin: 'DKI Jakarta',
      island: 'jawa',
      province: 'dki-jakarta',
      image: 'images/recipes/gabus-pucung.webp',
      duration: 45,
      level: 'medium',
      rating: 4.6,
      reviews: 890,
      tags: ['ikan', 'berkuah', 'betawi'],
      description: {
        id: 'Ikan gabus berkuah hitam pekat dari buah kluwek, hidangan ikonik Betawi yang hampir punah. Dahulu hanya disajikan di acara pernikahan dan selamatan besar.',
        en: 'Snakehead fish in a thick black soup made from kluwek fruit, a nearly extinct iconic Betawi dish. Historically served only at weddings and grand celebrations.'
      },
      ingredients: [
        { name: { id: 'Ikan gabus', en: 'Snakehead fish' }, amount: '500 g', alt: { id: 'Ikan patin / ikan nila', en: 'Catfish / tilapia' } },
        { name: { id: 'Kluwek (dikerok dagingnya)', en: 'Kluwek fruit (scooped out)' }, amount: '3 butir', alt: null },
        { name: { id: 'Daun salam', en: 'Bay leaves' }, amount: '2 lembar', alt: null },
        { name: { id: 'Serai', en: 'Lemongrass' }, amount: '1 batang', alt: null },
        { name: { id: 'Garam, gula', en: 'Salt, sugar' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '5 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '3 siung' },
        { name: { id: 'Lengkuas', en: 'Galangal' }, amount: '2 cm' },
      ],
      steps: [
        { id: 1, text: { id: 'Bersihkan ikan gabus, potong menjadi beberapa bagian.', en: 'Clean the snakehead fish and cut into pieces.' } },
        { id: 2, text: { id: 'Rendam kluwek dalam air panas selama 10 menit, lalu keruk dagingnya.', en: 'Soak kluwek in hot water for 10 minutes, then scoop out the meat.' } },
        { id: 3, text: { id: 'Haluskan bawang merah, bawang putih, lengkuas, dan daging kluwek.', en: 'Blend shallots, garlic, galangal, and kluwek meat together.' } },
        { id: 4, text: { id: 'Tumis bumbu halus hingga harum bersama daun salam dan serai.', en: 'Sauté the ground spices with bay leaves and lemongrass until fragrant.' } },
        { id: 5, text: { id: 'Masukkan ikan gabus, aduk rata hingga terbalut bumbu hitam.', en: 'Add the snakehead fish, stir until evenly coated with the black spices.' } },
        { id: 6, text: { id: 'Tambahkan air secukupnya, masak api sedang 20–25 menit hingga bumbu meresap.', en: 'Add enough water, cook over medium heat 20-25 minutes until flavors are absorbed.' } },
        { id: 7, text: { id: 'Koreksi garam dan gula, sajikan dengan nasi putih hangat.', en: 'Adjust salt and sugar, serve with warm white rice.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Gabus Pucung adalah warisan kuliner Betawi asli yang sudah ada sejak abad ke-18 di Batavia.', en: 'Gabus Pucung is a Betawi culinary heritage that has existed since the 18th century in Batavia.' },
        culture: { id: 'Hidangan ini dahulu hanya tersaji di hajatan besar sebagai simbol kemakmuran keluarga Betawi.', en: 'This dish was once only served at grand celebrations as a symbol of prosperity in Betawi families.' },
        funFact: { id: 'Kluwek (picung) memberi warna hitam alami yang khas. Kini ikan gabus mulai langka sehingga hidangan ini terancam punah.', en: 'Kluwek (picung) gives the distinctive natural black color. Snakehead fish is now becoming scarce, putting this dish at risk of extinction.' }
      }
    },
    {
      id: 'gudeg',
      slug: 'gudeg',
      name: 'Gudeg',
      origin: 'Yogyakarta',
      island: 'jawa',
      province: 'diy',
      image: 'images/recipes/gudeg.webp',
      duration: 180,
      level: 'hard',
      rating: 4.8,
      reviews: 1567,
      tags: ['nangka', 'manis', 'tradisional'],
      description: {
        id: 'Gudeg adalah masakan khas Yogyakarta berbahan dasar nangka muda yang dimasak dengan santan dan gula merah hingga berwarna cokelat.',
        en: 'Gudeg is a Yogyakarta specialty made from young jackfruit slow-cooked in coconut milk and palm sugar until it turns brown.'
      },
      ingredients: [
        { name: { id: 'Nangka muda', en: 'Young jackfruit' }, amount: '1 kg', alt: null },
        { name: { id: 'Santan kental', en: 'Thick coconut milk' }, amount: '500 ml', alt: null },
        { name: { id: 'Gula merah', en: 'Palm sugar' }, amount: '200 g', alt: { id: 'Gula aren', en: 'Aren sugar' } },
        { name: { id: 'Telur rebus', en: 'Hard-boiled eggs' }, amount: '6 butir', alt: null },
        { name: { id: 'Daun salam', en: 'Bay leaves' }, amount: '3 lembar', alt: null },
      ],
      spices: [
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '8 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '5 siung' },
        { name: { id: 'Ketumbar', en: 'Coriander' }, amount: '1 sdt' },
        { name: { id: 'Kemiri', en: 'Candlenut' }, amount: '4 butir' },
      ],
      steps: [
        { id: 1, text: { id: 'Potong nangka muda, rebus sebentar untuk menghilangkan getah, tiriskan.', en: 'Cut young jackfruit, briefly boil to remove sap, drain.' } },
        { id: 2, text: { id: 'Tumis bumbu halus hingga harum, masukkan nangka dan semua bahan.', en: 'Stir-fry ground spices until fragrant, add jackfruit and all ingredients.' } },
        { id: 3, text: { id: 'Masak dengan api kecil selama 3-4 jam hingga nangka empuk dan berwarna cokelat.', en: 'Cook over low heat for 3-4 hours until jackfruit is tender and brown.' } },
      ],
      youtubeId: 'fKDKe8qDkqA',
      history: {
        origin: { id: 'Gudeg sudah dikenal sejak abad ke-16 di lingkungan Keraton Yogyakarta.', en: 'Gudeg has been known since the 16th century in the Yogyakarta Kraton environment.' },
        culture: { id: 'Gudeg mencerminkan karakter masyarakat Jawa yang sabar dan teliti dalam setiap proses kehidupan.', en: 'Gudeg reflects the patient and meticulous character of the Javanese people in every process of life.' },
        funFact: { id: 'Gudeg kering bisa bertahan hingga 5 hari tanpa kulkas, menjadikannya oleh-oleh favorit dari Yogyakarta.', en: 'Dry gudeg can last up to 5 days without refrigeration, making it a favorite souvenir from Yogyakarta.' }
      }
    },
    {
      id: 'rawon',
      slug: 'rawon',
      name: 'Rawon',
      origin: 'Jawa Timur',
      island: 'jawa',
      province: 'jawa-timur',
      image: 'images/recipes/rawon.webp',
      duration: 120,
      level: 'medium',
      rating: 4.9,
      reviews: 3200,
      tags: ['daging', 'berkuah', 'kluwek'],
      description: {
        id: 'Sup daging sapi berkuah hitam pekat dari kluwek, dengan aroma rempah yang dalam. Salah satu sup tertua di dunia yang masih aktif dikonsumsi.',
        en: 'A rich black beef soup made with kluwek, featuring a deep spice aroma. One of the oldest continuously consumed soups in the world.'
      },
      ingredients: [
        { name: { id: 'Daging sapi (sandung lamur)', en: 'Beef brisket' }, amount: '500 g', alt: { id: 'Daging sengkel / iga sapi', en: 'Beef shank / beef ribs' } },
        { name: { id: 'Kluwek', en: 'Kluwek fruit' }, amount: '3 butir', alt: null },
        { name: { id: 'Serai', en: 'Lemongrass' }, amount: '2 batang', alt: null },
        { name: { id: 'Daun jeruk', en: 'Kaffir lime leaves' }, amount: '4 lembar', alt: null },
        { name: { id: 'Garam, gula', en: 'Salt, sugar' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '5 siung' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '8 siung' },
        { name: { id: 'Lengkuas', en: 'Galangal' }, amount: '3 cm' },
        { name: { id: 'Jahe', en: 'Ginger' }, amount: '3 cm' },
        { name: { id: 'Ketumbar', en: 'Coriander' }, amount: '1 sdt' },
      ],
      steps: [
        { id: 1, text: { id: 'Rebus daging sapi hingga empuk, potong dadu, sisihkan kaldu.', en: 'Boil the beef until tender, dice it, and set aside the broth.' } },
        { id: 2, text: { id: 'Sangrai kluwek sebentar, belah, keruk dagingnya, larutkan dengan sedikit air kaldu.', en: 'Briefly roast the kluwek, crack open, scoop out the meat, dissolve in a little broth.' } },
        { id: 3, text: { id: 'Haluskan bawang merah, bawang putih, jahe, lengkuas, dan ketumbar.', en: 'Blend the shallots, garlic, ginger, galangal, and coriander.' } },
        { id: 4, text: { id: 'Tumis bumbu halus bersama serai dan daun jeruk hingga harum.', en: 'Sauté the blended spices with lemongrass and lime leaves until fragrant.' } },
        { id: 5, text: { id: 'Masukkan tumisan dan larutan kluwek ke dalam kaldu, masak 15 menit.', en: 'Add the sautéed spices and kluwek mixture to the broth, cook 15 minutes.' } },
        { id: 6, text: { id: 'Masukkan potongan daging, masak lagi 10 menit, koreksi rasa.', en: 'Add the diced beef, cook another 10 minutes, adjust seasoning.' } },
        { id: 7, text: { id: 'Sajikan dengan tauge pendek, telur asin, daun bawang, dan sambal.', en: 'Serve with short bean sprouts, salted egg, spring onion, and sambal.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Rawon berasal dari Jawa Timur dan sudah ada sejak era Kerajaan Majapahit, tercatat dalam prasasti abad ke-10.', en: 'Rawon originates from East Java and has existed since the Majapahit Kingdom era, recorded in 10th-century inscriptions.' },
        culture: { id: 'Warna hitamnya yang khas dari kluwek mencerminkan keunikan kuliner Jawa Timur yang berani bereksperimen dengan bahan-bahan lokal.', en: 'Its distinctive black color from kluwek reflects the boldness of East Javanese cuisine in experimenting with local ingredients.' },
        funFact: { id: 'Rawon disebut sebagai salah satu sup tertua di dunia yang masih aktif dimakan hingga hari ini, dengan usia resep lebih dari 1.000 tahun.', en: 'Rawon is considered one of the oldest soups in the world still actively eaten today, with a recipe over 1,000 years old.' }
      }
    },
    {
      id: 'soto-banjar',
      slug: 'soto-banjar',
      name: 'Soto Banjar',
      origin: 'Kalimantan Selatan',
      island: 'kalimantan',
      province: 'kalimantan-selatan',
      image: 'images/recipes/soto-banjar.webp',
      duration: 90,
      level: 'medium',
      rating: 4.8,
      reviews: 1420,
      tags: ['ayam', 'soto', 'berkuah', 'rempah'],
      description: {
        id: 'Soto ayam berkuah bening kekuningan beraroma rempah kuat: kapulaga, kayu manis, dan cengkeh — mencerminkan pengaruh Arab dan India di kota pelabuhan Banjarmasin.',
        en: 'Chicken soup with a clear yellowish broth and strong spice aroma: cardamom, cinnamon, and cloves — reflecting Arab and Indian influences in the port city of Banjarmasin.'
      },
      ingredients: [
        { name: { id: 'Ayam kampung', en: 'Free-range chicken' }, amount: '1 ekor', alt: { id: 'Ayam broiler / dada ayam', en: 'Broiler chicken / chicken breast' } },
        { name: { id: 'Air', en: 'Water' }, amount: '3 liter', alt: null },
        { name: { id: 'Kayu manis', en: 'Cinnamon' }, amount: '4 cm', alt: null },
        { name: { id: 'Cengkeh', en: 'Cloves' }, amount: '5 butir', alt: null },
        { name: { id: 'Kapulaga', en: 'Cardamom' }, amount: '3 butir', alt: null },
        { name: { id: 'Lontong / nasi putih', en: 'Rice cakes / white rice' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Jahe', en: 'Ginger' }, amount: '5 cm' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '4 siung' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '6 siung' },
        { name: { id: 'Merica', en: 'Pepper' }, amount: '1 sdt' },
      ],
      steps: [
        { id: 1, text: { id: 'Rebus ayam dengan 3 liter air hingga empuk, angkat dan suwir dagingnya, sisihkan kaldu.', en: 'Boil the chicken in 3 liters of water until tender, remove and shred the meat, set aside the broth.' } },
        { id: 2, text: { id: 'Haluskan bawang merah, bawang putih, jahe, dan merica.', en: 'Blend the shallots, garlic, ginger, and pepper.' } },
        { id: 3, text: { id: 'Tumis bumbu halus dengan sedikit minyak hingga harum dan matang.', en: 'Sauté the blended spices in a little oil until fragrant and cooked.' } },
        { id: 4, text: { id: 'Masukkan tumisan ke kaldu ayam bersama kayu manis, cengkeh, dan kapulaga.', en: 'Add the sautéed spices to the chicken broth along with cinnamon, cloves, and cardamom.' } },
        { id: 5, text: { id: 'Rebus dengan api kecil 30 menit hingga aroma rempah keluar sempurna.', en: 'Simmer on low heat for 30 minutes until the spice aroma fully develops.' } },
        { id: 6, text: { id: 'Saring kuah untuk hasil yang bening, koreksi garam.', en: 'Strain the broth for a clear result, adjust salt.' } },
        { id: 7, text: { id: 'Sajikan di atas lontong dengan suwiran ayam, perkedel kentang, dan taburan bawang goreng.', en: 'Serve over rice cakes with shredded chicken, potato fritters, and fried shallots.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Soto Banjar lahir di Banjarmasin, ibu kota Kalimantan Selatan, yang sejak lama menjadi kota pelabuhan internasional.', en: 'Soto Banjar was born in Banjarmasin, the capital of South Kalimantan, which has long been an international port city.' },
        culture: { id: 'Penggunaan kayu manis dan kapulaga mencerminkan pengaruh pedagang Arab dan India yang berdagang rempah di Kalimantan sejak abad ke-15.', en: 'The use of cinnamon and cardamom reflects the influence of Arab and Indian spice traders in Kalimantan since the 15th century.' },
        funFact: { id: 'Soto Banjar adalah satu-satunya soto di Indonesia yang wajib disajikan dengan perkedel kentang dan ketupat, bukan nasi.', en: 'Soto Banjar is the only soto in Indonesia that must be served with potato fritters and rice cakes, not plain rice.' }
      }
    },
    {
      id: 'juhu-singkah',
      slug: 'juhu-singkah',
      name: 'Juhu Singkah',
      origin: 'Kalimantan Tengah',
      island: 'kalimantan',
      province: 'kalimantan-tengah',
      image: 'images/recipes/juhu-singkah.webp',
      duration: 60,
      level: 'medium',
      rating: 4.5,
      reviews: 430,
      tags: ['rebung', 'ikan', 'berkuah', 'dayak'],
      description: {
        id: 'Masakan hutan suku Dayak berbahan rebung dan ikan haruan dimasak dengan santan dan kunyit. "Juhu" berarti kuah, "Singkah" berarti rebung.',
        en: 'A Dayak forest dish made of bamboo shoots and snakehead fish cooked in coconut milk and turmeric. "Juhu" means soup, "Singkah" means bamboo shoot.'
      },
      ingredients: [
        { name: { id: 'Rebung (tunas bambu muda)', en: 'Young bamboo shoots' }, amount: '300 g', alt: { id: 'Rebung kaleng', en: 'Canned bamboo shoots' } },
        { name: { id: 'Ikan haruan (gabus)', en: 'Snakehead fish' }, amount: '300 g', alt: { id: 'Ikan patin / lele', en: 'Catfish' } },
        { name: { id: 'Santan', en: 'Coconut milk' }, amount: '200 ml', alt: { id: 'Santan instan', en: 'Instant coconut milk' } },
        { name: { id: 'Serai', en: 'Lemongrass' }, amount: '2 batang', alt: null },
        { name: { id: 'Daun bawang, garam', en: 'Scallions, salt' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '3 siung' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '5 siung' },
        { name: { id: 'Kunyit', en: 'Turmeric' }, amount: '3 cm' },
      ],
      steps: [
        { id: 1, text: { id: 'Rebus rebung dengan air bersih, ganti air 2–3 kali untuk menghilangkan bau pahit.', en: 'Boil bamboo shoots in clean water, change water 2-3 times to remove the bitter smell.' } },
        { id: 2, text: { id: 'Potong rebung sesuai selera, tiriskan.', en: 'Cut the bamboo shoots to your liking, drain.' } },
        { id: 3, text: { id: 'Goreng ikan haruan sebentar dengan sedikit minyak hingga agak kering.', en: 'Briefly fry the snakehead fish in a little oil until slightly dry.' } },
        { id: 4, text: { id: 'Haluskan bawang merah, bawang putih, dan kunyit.', en: 'Blend the shallots, garlic, and turmeric.' } },
        { id: 5, text: { id: 'Tumis bumbu halus bersama serai hingga harum.', en: 'Sauté the ground spices with lemongrass until fragrant.' } },
        { id: 6, text: { id: 'Masukkan rebung, ikan, dan santan. Tambahkan air secukupnya.', en: 'Add bamboo shoots, fish, and coconut milk. Add water as needed.' } },
        { id: 7, text: { id: 'Masak hingga kuah mengental, bumbu meresap, dan santan sedikit berminyak.', en: 'Cook until the broth thickens, flavors are absorbed, and coconut milk turns slightly oily.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Juhu Singkah adalah masakan tradisional suku Dayak Ngaju dari pedalaman Kalimantan Tengah.', en: 'Juhu Singkah is a traditional dish of the Dayak Ngaju tribe from the interior of Central Kalimantan.' },
        culture: { id: 'Rebung sebagai bahan utama mencerminkan filosofi hidup Dayak yang selaras dengan hutan — memanfaatkan apa yang tumbuh di sekitar mereka.', en: 'Bamboo shoots as the main ingredient reflect the Dayak philosophy of living in harmony with the forest, utilizing what grows around them.' },
        funFact: { id: 'Di pedalaman Kalimantan, ikan haruan (gabus) diyakini memiliki khasiat obat dan sering diberikan kepada orang yang baru sembuh dari sakit.', en: 'In Kalimantan\'s interior, snakehead fish (gabus) is believed to have medicinal properties and is often given to people recovering from illness.' }
      }
    },
    {
      id: 'nasi-kuning-kalimantan',
      slug: 'nasi-kuning-kalimantan',
      name: 'Nasi Kuning Kalimantan',
      origin: 'Kalimantan Timur',
      island: 'kalimantan',
      province: 'kalimantan-timur',
      image: 'images/recipes/nasi-kuning-kalimantan.webp',
      duration: 60,
      level: 'easy',
      rating: 4.8,
      reviews: 1800,
      tags: ['nasi', 'kuning', 'santan'],
      description: {
        id: 'Nasi kuning khas Kalimantan dimasak dengan santan dan kunyit, wajib hadir di setiap perayaan adat sebagai simbol kemakmuran.',
        en: 'Kalimantan\'s signature yellow rice cooked with coconut milk and turmeric, a staple at traditional celebrations symbolizing prosperity.'
      },
      ingredients: [
        { name: { id: 'Beras', en: 'Rice' }, amount: '500 g', alt: { id: 'Beras pulen / pandan wangi', en: 'Fluffy rice / fragrant pandan rice' } },
        { name: { id: 'Santan', en: 'Coconut milk' }, amount: '400 ml', alt: { id: 'Santan kemasan', en: 'Packaged coconut milk' } },
        { name: { id: 'Serai', en: 'Lemongrass' }, amount: '2 batang', alt: null },
        { name: { id: 'Daun pandan', en: 'Pandan leaves' }, amount: '3 lembar', alt: null },
        { name: { id: 'Daun salam', en: 'Bay leaves' }, amount: '2 lembar', alt: null },
        { name: { id: 'Garam', en: 'Salt' }, amount: '1 sdt', alt: null },
      ],
      spices: [
        { name: { id: 'Kunyit (haluskan)', en: 'Turmeric (mashed)' }, amount: '3 cm' },
      ],
      steps: [
        { id: 1, text: { id: 'Cuci beras hingga bersih, rendam 30 menit, tiriskan.', en: 'Wash rice thoroughly, soak for 30 minutes, drain.' } },
        { id: 2, text: { id: 'Larutkan kunyit halus dengan sedikit air hangat, saring untuk mendapat air kunyit bening.', en: 'Dissolve mashed turmeric in a little warm water, strain to get clear turmeric water.' } },
        { id: 3, text: { id: 'Campurkan beras dengan santan, air kunyit, serai, daun pandan, daun salam, dan garam.', en: 'Mix rice with coconut milk, turmeric water, lemongrass, pandan, bay leaves, and salt.' } },
        { id: 4, text: { id: 'Masak dalam rice cooker. Jika menggunakan panci, masak hingga air terserap lalu kukus 20 menit.', en: 'Cook in a rice cooker. If using a pot, cook until water is absorbed then steam for 20 minutes.' } },
        { id: 5, text: { id: 'Aduk rata di tengah proses memasak agar warna kuning tersebar merata.', en: 'Stir halfway through cooking so the yellow color distributes evenly.' } },
        { id: 6, text: { id: 'Cetak nasi kuning dengan mangkuk atau cetakan kerucut untuk tampilan tradisional.', en: 'Mold yellow rice with a bowl or cone mold for traditional presentation.' } },
        { id: 7, text: { id: 'Sajikan dengan ayam cincane, telur rebus belah, ikan asin goreng, dan acar.', en: 'Serve with cincane chicken, halved boiled eggs, fried salted fish, and pickles.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Nasi kuning hadir di hampir seluruh Nusantara namun versi Kalimantan memiliki keunikan lauk pendampingnya, terutama ayam cincane yang hanya ada di Kalimantan Timur.', en: 'Yellow rice is found across the archipelago, but Kalimantan\'s version is unique for its side dishes, especially cincane chicken found only in East Kalimantan.' },
        culture: { id: 'Warna kuning melambangkan keagungan dan kemakmuran dalam tradisi Banjar dan Kutai, sehingga nasi kuning selalu hadir di upacara syukuran.', en: 'The yellow color symbolizes grandeur and prosperity in Banjar and Kutai traditions, so yellow rice always appears in thanksgiving ceremonies.' },
        funFact: { id: 'Di Samarinda, nasi kuning dijual mulai pukul 5 pagi sebagai sarapan khas, bukan makan siang atau malam.', en: 'In Samarinda, yellow rice is sold from 5 AM as a typical breakfast, not lunch or dinner.' }
      }
    },
    {
      id: 'ayam-betutu',
      slug: 'ayam-betutu',
      name: 'Ayam Betutu',
      origin: 'Bali',
      island: 'bali-ntt',
      province: 'bali',
      image: 'images/recipes/ayam-betutu.webp',
      duration: 240,
      level: 'hard',
      rating: 4.8,
      reviews: 1102,
      tags: ['ayam', 'pedas', 'bakar'],
      description: {
        id: 'Ayam Betutu adalah ayam utuh berbumbu genep khas Bali yang dimasak perlahan hingga meresap sempurna.',
        en: 'Ayam Betutu is a whole chicken marinated in Balinese genep spices and slow-cooked until the flavors penetrate deeply.'
      },
      ingredients: [
        { name: { id: 'Ayam utuh', en: 'Whole chicken' }, amount: '1 ekor', alt: null },
        { name: { id: 'Daun pisang', en: 'Banana leaves' }, amount: 'secukupnya', alt: { id: 'Aluminium foil', en: 'Aluminium foil' } },
      ],
      spices: [
        { name: { id: 'Cabai rawit', en: 'Bird\'s eye chili' }, amount: '10 buah' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '10 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '6 siung' },
        { name: { id: 'Kemiri', en: 'Candlenut' }, amount: '5 butir' },
        { name: { id: 'Kunyit', en: 'Turmeric' }, amount: '3 cm' },
        { name: { id: 'Jahe', en: 'Ginger' }, amount: '2 cm' },
      ],
      steps: [
        { id: 1, text: { id: 'Haluskan semua bumbu dan tumis hingga matang dan harum.', en: 'Blend all spices and stir-fry until cooked and fragrant.' } },
        { id: 2, text: { id: 'Lumuri seluruh permukaan ayam dan isi rongga ayam dengan bumbu.', en: 'Coat the entire chicken surface and fill the cavity with the spice paste.' } },
        { id: 3, text: { id: 'Bungkus ayam dengan daun pisang. Kukus selama 2 jam, lalu bakar atau panggang 1 jam.', en: 'Wrap the chicken in banana leaves. Steam for 2 hours, then grill or bake for 1 hour.' } },
      ],
      youtubeId: 'xtA2jFQMKBs',
      history: {
        origin: { id: 'Ayam Betutu merupakan makanan sakral yang disajikan dalam upacara adat Bali.', en: 'Ayam Betutu is a sacred dish served in Balinese traditional ceremonies.' },
        culture: { id: '"Betutu" berasal dari kata "tunu" (membakar) yang mencerminkan teknik memasak tradisional Bali.', en: '"Betutu" comes from the word "tunu" (to burn), reflecting traditional Balinese cooking techniques.' },
        funFact: { id: 'Di Bali, Ayam Betutu kering biasanya dimasak selama 8 jam penuh menggunakan sekam padi.', en: 'In Bali, dry Ayam Betutu is traditionally cooked for a full 8 hours using rice husks.' }
      }
    },
    {
      id: 'babi-guling',
      slug: 'babi-guling',
      name: 'Babi Guling',
      origin: 'Bali',
      island: 'bali-ntt',
      province: 'bali',
      image: 'images/recipes/babi-guling.webp',
      duration: 240,
      level: 'hard',
      rating: 4.9,
      reviews: 4500,
      tags: ['babi', 'panggang', 'rempah'],
      description: {
        id: 'Babi utuh dilumuri bumbu base genep khas Bali dan dipanggang di atas bara api sambil diputar 3–4 jam hingga kulitnya renyah keemasan.',
        en: 'A whole pig coated in Bali\'s base genep spices and spit-roasted over hot coals for 3-4 hours until the skin turns golden and crispy.'
      },
      ingredients: [
        { name: { id: 'Anak babi', en: 'Suckling pig' }, amount: '1 ekor (5-8 kg)', alt: { id: 'Daging babi / ayam utuh', en: 'Pork cuts / whole chicken' } },
        { name: { id: 'Cabai, kencur, serai, daun jeruk', en: 'Chilies, aromatic ginger, lemongrass, lime leaves' }, amount: 'secukupnya', alt: null },
        { name: { id: 'Daun singkong rebus (isian)', en: 'Boiled cassava leaves (stuffing)' }, amount: 'secukupnya', alt: null },
        { name: { id: 'Garam, minyak kelapa', en: 'Salt, coconut oil' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Base genep (kunyit, jahe, lengkuas)', en: 'Base genep (turmeric, ginger, galangal)' }, amount: 'secukupnya' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '10 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '8 siung' },
      ],
      steps: [
        { id: 1, text: { id: 'Haluskan semua bumbu base genep bersama bawang.', en: 'Blend all base genep spices together with the onions.' } },
        { id: 2, text: { id: 'Isi rongga perut dengan daun singkong rebus, sisa bumbu, dan serai.', en: 'Stuff the pig\'s cavity with boiled cassava leaves, remaining spices, and lemongrass.' } },
        { id: 3, text: { id: 'Oleskan bumbu secara merata ke seluruh kulit luar babi.', en: 'Spread the spices evenly over the pig\'s entire outer skin.' } },
        { id: 4, text: { id: 'Sematkan babi di atas galah bambu panjang, ikat agar tidak bergeser.', en: 'Skewer the pig on a long bamboo pole, tie securely to prevent slipping.' } },
        { id: 5, text: { id: 'Panggang di atas bara api sambil terus diputar selama 3–4 jam.', en: 'Roast over hot coals while continuously turning for 3-4 hours.' } },
        { id: 6, text: { id: 'Olesi kulit dengan minyak kelapa setiap 20–30 menit agar renyah dan mengkilat.', en: 'Brush the skin with coconut oil every 20-30 minutes for a crispy and shiny finish.' } },
        { id: 7, text: { id: 'Sajikan dengan lawar, nasi putih, dan sambal matah segar.', en: 'Serve with lawar, white rice, and fresh sambal matah.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Babi Guling sudah menjadi bagian dari upacara keagamaan Hindu Bali sejak ratusan tahun lalu.', en: 'Babi Guling has been part of Balinese Hindu religious ceremonies for hundreds of years.' },
        culture: { id: 'Dalam konteks upacara, babi guling bukan sekadar makanan — ia adalah persembahan suci yang mewakili penghormatan kepada leluhur.', en: 'In a ceremonial context, babi guling is not just food — it is a sacred offering representing respect for ancestors.' },
        funFact: { id: 'Warung Babi Guling Ibu Oka di Ubud menjadi terkenal dunia setelah diulas oleh chef Anthony Bourdain dalam acara TV-nya.', en: 'Warung Babi Guling Ibu Oka in Ubud became world-famous after being reviewed by chef Anthony Bourdain on his TV show.' }
      }
    },
    {
      id: 'lawar',
      slug: 'lawar',
      name: 'Lawar',
      origin: 'Bali',
      island: 'bali-ntt',
      province: 'bali',
      image: 'images/recipes/lawar.webp',
      duration: 45,
      level: 'medium',
      rating: 4.6,
      reviews: 1200,
      tags: ['sayur', 'kelapa', 'daging'],
      description: {
        id: 'Campuran sayuran segar, kelapa parut sangrai, dan daging cincang berbumbu base genep. Hidangan wajib upacara adat yang dibuat beramai-ramai oleh para pria desa.',
        en: 'A mixture of fresh vegetables, roasted grated coconut, and minced meat seasoned with base genep. A traditional ceremonial dish usually made communally by village men.'
      },
      ingredients: [
        { name: { id: 'Daging cincang (babi/ayam)', en: 'Minced meat (pork/chicken)' }, amount: '200 g', alt: { id: 'Tempe / jamur (vegan)', en: 'Tempeh / mushrooms (vegan)' } },
        { name: { id: 'Kelapa parut kasar', en: 'Coarsely grated coconut' }, amount: '100 g', alt: null },
        { name: { id: 'Kacang panjang, iris tipis', en: 'Long beans, thinly sliced' }, amount: '200 g', alt: null },
        { name: { id: 'Nangka muda rebus', en: 'Boiled young jackfruit' }, amount: '100 g', alt: null },
        { name: { id: 'Daun jeruk, cabai, terasi', en: 'Lime leaves, chilies, shrimp paste' }, amount: 'secukupnya', alt: null },
        { name: { id: 'Garam, gula', en: 'Salt, sugar' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Base genep (bawang, kencur, kunyit)', en: 'Base genep (onions, aromatic ginger, turmeric)' }, amount: 'secukupnya' },
      ],
      steps: [
        { id: 1, text: { id: 'Sangrai kelapa parut dengan api kecil sambil terus diaduk hingga berwarna cokelat keemasan.', en: 'Roast the grated coconut over low heat, stirring continuously until golden brown.' } },
        { id: 2, text: { id: 'Haluskan bumbu base genep dan tumis hingga harum.', en: 'Blend the base genep spices and sauté until fragrant.' } },
        { id: 3, text: { id: 'Masukkan daging cincang ke dalam bumbu, masak hingga matang sempurna.', en: 'Add minced meat to the spices, cook until fully done.' } },
        { id: 4, text: { id: 'Rebus kacang panjang sebentar (blanch), tiriskan, lalu campurkan dengan nangka.', en: 'Blanch the long beans briefly, drain, then mix with jackfruit.' } },
        { id: 5, text: { id: 'Campurkan semua bahan: daging, sayuran, dan kelapa sangrai. Aduk rata.', en: 'Combine all ingredients: meat, vegetables, and roasted coconut. Mix well.' } },
        { id: 6, text: { id: 'Koreksi rasa dengan garam dan gula, sajikan sebagai lauk pendamping nasi.', en: 'Adjust seasoning with salt and sugar, serve as a side dish with rice.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Lawar adalah hidangan khas Bali yang selalu hadir dalam upacara Yadnya (persembahan) dan Manusa Yadnya (siklus hidup manusia).', en: 'Lawar is a Balinese specialty always present in Yadnya (offering) and Manusa Yadnya (human life cycle) ceremonies.' },
        culture: { id: 'Tradisi memasak lawar selalu dilakukan bersama-sama oleh kaum pria — sebuah bentuk gotong royong dan penguatan ikatan sosial komunitas.', en: 'The tradition of cooking lawar is always done communally by men — a form of mutual cooperation and strengthening community social bonds.' },
        funFact: { id: 'Ada "Lawar Merah" yang menggunakan darah segar dan "Lawar Putih" tanpa darah. Versi merah hanya boleh dimakan hari itu juga karena tidak bisa disimpan.', en: 'There is "Lawar Merah" using fresh blood and "Lawar Putih" without blood. The red version must be eaten the same day as it cannot be stored.' }
      }
    },
    {
      id: 'papeda',
      slug: 'papeda',
      name: 'Papeda',
      origin: 'Papua',
      island: 'papua',
      province: 'papua',
      image: 'images/recipes/papeda.webp',
      duration: 45,
      level: 'easy',
      rating: 4.5,
      reviews: 678,
      tags: ['sagu', 'berkuah', 'tradisional'],
      description: {
        id: 'Papeda adalah makanan pokok Papua berupa bubur sagu kental yang disajikan bersama kuah kuning ikan tongkol.',
        en: 'Papeda is the staple food of Papua, a thick sago porridge served with yellowish tuna broth.'
      },
      ingredients: [
        { name: { id: 'Tepung sagu', en: 'Sago flour' }, amount: '200 g', alt: null },
        { name: { id: 'Air', en: 'Water' }, amount: '1 liter', alt: null },
        { name: { id: 'Ikan tongkol', en: 'Tuna' }, amount: '500 g', alt: { id: 'Ikan cakalang atau ikan kakap', en: 'Skipjack tuna or sea bass' } },
        { name: { id: 'Kunyit', en: 'Turmeric' }, amount: '3 cm', alt: null },
        { name: { id: 'Jeruk nipis', en: 'Lime' }, amount: '2 buah', alt: null },
      ],
      spices: [
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '5 siung' },
        { name: { id: 'Bawang putih', en: 'Garlic' }, amount: '3 siung' },
        { name: { id: 'Jahe', en: 'Ginger' }, amount: '2 cm' },
      ],
      steps: [
        { id: 1, text: { id: 'Larutkan tepung sagu dengan sedikit air dingin hingga tidak bergerindil.', en: 'Dissolve sago flour in a small amount of cold water until smooth.' } },
        { id: 2, text: { id: 'Didihkan sisa air, tuangkan larutan sagu sambil diaduk terus hingga mengental dan bening.', en: 'Boil remaining water, pour in sago mixture while stirring continuously until thick and translucent.' } },
        { id: 3, text: { id: 'Masak kuah kuning dengan bumbu dan ikan tongkol.', en: 'Cook the yellow broth with spices and tuna.' } },
        { id: 4, text: { id: 'Sajikan papeda panas bersama kuah kuning ikan. Tambahkan air jeruk nipis.', en: 'Serve hot papeda with the yellow fish broth. Add lime juice.' } },
      ],
      youtubeId: 'YZ3mHkY7aH0',
      history: {
        origin: { id: 'Papeda adalah makanan pokok masyarakat Papua dan Maluku sejak ribuan tahun lalu.', en: 'Papeda has been the staple food of Papua and Maluku peoples for thousands of years.' },
        culture: { id: 'Sagu sebagai bahan utama papeda mewakili hubungan erat masyarakat Papua dengan alam dan hutan sagu.', en: 'Sago as the main ingredient of papeda represents the close relationship of the Papuan people with nature and sago forests.' },
        funFact: { id: 'Cara makan papeda yang benar adalah dengan memutar-mutar sumpit khusus untuk mengangkat papeda ke piring.', en: 'The correct way to eat papeda is to use special twirling sticks to lift the papeda onto your plate.' }
      }
    },
    {
      id: 'sate-ulat-sagu',
      slug: 'sate-ulat-sagu',
      name: 'Sate Ulat Sagu',
      origin: 'Papua Barat',
      island: 'papua',
      province: 'papua-barat',
      image: 'images/recipes/sate-ulat-sagu.webp',
      duration: 20,
      level: 'easy',
      rating: 4.4,
      reviews: 580,
      tags: ['sate', 'panggang', 'tradisional'],
      description: {
        id: 'Larva kumbang sagu yang ditusuk dan dipanggang di atas bara. Kaya protein alami, merupakan sumber pangan tradisional suku-suku pedalaman Papua.',
        en: 'Sago palm weevil larvae skewered and roasted over coals. Rich in natural protein, a traditional food source for indigenous Papuan tribes.'
      },
      ingredients: [
        { name: { id: 'Larva kumbang sagu (tambelo)', en: 'Sago weevil larvae' }, amount: '500 g', alt: { id: 'Jangkrik / ulat hongkong', en: 'Crickets / mealworms' } },
        { name: { id: 'Garam', en: 'Salt' }, amount: 'secukupnya', alt: null },
        { name: { id: 'Minyak kelapa', en: 'Coconut oil' }, amount: 'sedikit', alt: null },
        { name: { id: 'Tusuk sate bambu', en: 'Bamboo skewers' }, amount: 'secukupnya', alt: null },
      ],
      spices: [],
      steps: [
        { id: 1, text: { id: 'Bersihkan larva sagu dengan air mengalir, tiriskan.', en: 'Clean the sago larvae under running water, drain.' } },
        { id: 2, text: { id: 'Tusuk 4–5 larva per tusuk sate bambu.', en: 'Thread 4-5 larvae per bamboo skewer.' } },
        { id: 3, text: { id: 'Taburi sedikit garam di atas larva.', en: 'Sprinkle a little salt over the larvae.' } },
        { id: 4, text: { id: 'Panggang di atas bara api atau wajan teflon panas tanpa minyak.', en: 'Roast over coals or on a hot non-stick pan without oil.' } },
        { id: 5, text: { id: 'Panggang sambil dibalik hingga berwarna keemasan dan kulitnya garing (±10 menit).', en: 'Roast while turning until golden brown and the skin is crispy (±10 minutes).' } },
        { id: 6, text: { id: 'Sajikan panas langsung dari panggangan, tanpa saus pelengkap.', en: 'Serve hot straight from the grill, without any additional sauce.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Sate ulat sagu adalah tradisi kuliner suku Asmat dan berbagai suku pedalaman Papua Barat.', en: 'Sago worm satay is a culinary tradition of the Asmat tribe and various indigenous tribes of West Papua.' },
        culture: { id: 'Ulat sagu bukan hanya makanan — dalam budaya Asmat, ia merupakan simbol ketahanan pangan di hutan belantara.', en: 'Sago worms are not just food — in Asmat culture, they symbolize food resilience in the wilderness.' },
        funFact: { id: 'Ulat sagu mengandung protein hingga 13,5% dan lemak tak jenuh tinggi, menjadikannya superfood alami jauh sebelum istilah itu populer.', en: 'Sago worms contain up to 13.5% protein and high unsaturated fats, making them a natural superfood long before the term was popular.' }
      }
    },
    {
      id: 'ikan-bakar-manokwari',
      slug: 'ikan-bakar-manokwari',
      name: 'Ikan Bakar Manokwari',
      origin: 'Papua Barat',
      island: 'papua',
      province: 'papua-barat',
      image: 'images/recipes/ikan-bakar-manokwari.webp',
      duration: 45,
      level: 'medium',
      rating: 4.8,
      reviews: 1300,
      tags: ['ikan', 'bakar', 'sambal'],
      description: {
        id: 'Ikan tongkol dibakar dan disajikan dengan sambal khas Manokwari: daun kemangi segar, cabai rawit, bawang merah, dan tomat yang diulek mentah tanpa dimasak.',
        en: 'Grilled tuna served with Manokwari\'s signature raw sambal: fresh lemon basil, bird\'s eye chilies, shallots, and tomatoes pounded raw without cooking.'
      },
      ingredients: [
        { name: { id: 'Ikan tongkol / cakalang', en: 'Tuna / skipjack' }, amount: '2 ekor', alt: { id: 'Ikan nila / kakap', en: 'Tilapia / snapper' } },
        { name: { id: 'Bawang putih, kunyit, garam, jeruk nipis (marinasi)', en: 'Garlic, turmeric, salt, lime (marinade)' }, amount: 'secukupnya', alt: null },
        { name: { id: 'Tomat', en: 'Tomato' }, amount: '2 buah', alt: null },
        { name: { id: 'Daun kemangi', en: 'Lemon basil' }, amount: '1 genggam besar', alt: null },
        { name: { id: 'Garam, perasan jeruk nipis', en: 'Salt, lime juice' }, amount: 'secukupnya', alt: null },
      ],
      spices: [
        { name: { id: 'Cabai rawit merah', en: 'Red bird\'s eye chilies' }, amount: '10 buah' },
        { name: { id: 'Bawang merah', en: 'Shallots' }, amount: '5 siung' },
      ],
      steps: [
        { id: 1, text: { id: 'Bersihkan ikan, beri sayatan miring di bagian tebal agar bumbu meresap.', en: 'Clean the fish, make diagonal cuts on the thick parts for better spice absorption.' } },
        { id: 2, text: { id: 'Lumuri dengan bawang putih haluskan, kunyit, garam, dan perasan jeruk nipis. Marinasi 30 menit.', en: 'Coat with mashed garlic, turmeric, salt, and lime juice. Marinate for 30 minutes.' } },
        { id: 3, text: { id: 'Bakar ikan di atas bara api panas, sesekali olesi minyak agar tidak kering.', en: 'Grill the fish over hot coals, occasionally brushing with oil to prevent drying.' } },
        { id: 4, text: { id: 'Untuk sambal: ulek kasar cabai rawit dan bawang merah, jangan terlalu halus.', en: 'For sambal: roughly pound the bird\'s eye chilies and shallots, don\'t make it too smooth.' } },
        { id: 5, text: { id: 'Campurkan tomat yang dipotong dadu kasar ke dalam sambal.', en: 'Mix coarsely diced tomatoes into the sambal.' } },
        { id: 6, text: { id: 'Masukkan daun kemangi segar cincang, bumbui dengan garam dan perasan jeruk nipis. Aduk rata.', en: 'Add chopped fresh lemon basil, season with salt and lime juice. Mix well.' } },
        { id: 7, text: { id: 'Sajikan ikan bakar panas dengan sambal mentah disiram di atasnya dan nasi putih.', en: 'Serve the hot grilled fish topped with the raw sambal alongside white rice.' } },
      ],
      youtubeId: '',
      history: {
        origin: { id: 'Ikan Bakar Manokwari adalah ikon kuliner ibu kota Papua Barat yang terkenal ke seluruh Indonesia.', en: 'Ikan Bakar Manokwari is a culinary icon of the West Papua capital that is famous throughout Indonesia.' },
        culture: { id: 'Sambal mentah dari kemangi segar mencerminkan kekayaan hayati hutan Papua Barat yang melimpah.', en: 'The raw sambal from fresh lemon basil reflects the abundant biodiversity of West Papua\'s forests.' },
        funFact: { id: 'Kunci keistimewaan ikan bakar Manokwari bukan pada cara membakarnya, melainkan pada sambal kemangi mentahnya yang tidak dimasak sama sekali.', en: 'The key to the uniqueness of Manokwari grilled fish is not in the grilling method, but in the completely raw lemon basil sambal.' }
      }
    },
  ],

  islands: [
    { id: 'sumatera',   name: 'Sumatera',             svgIds: ['IDAC','IDSU','IDRI','IDKR','IDJA','IDSB','IDBE','IDLA','IDSS','IDBB'] },
    { id: 'jawa',       name: 'Jawa',                 svgIds: ['IDJK','IDJB','IDJT','IDBT','IDYO','IDJI'] },
    { id: 'kalimantan', name: 'Kalimantan',           svgIds: ['IDKB','IDKT','IDKS','IDKI','IDKU'] },
    { id: 'sulawesi',   name: 'Sulawesi',             svgIds: ['IDSA','IDSG','IDST','IDSR','IDGO','IDSN'] },
    { id: 'bali-ntt',  name: 'Bali & Nusa Tenggara', svgIds: ['IDBA','IDNB','IDNT'] },
    { id: 'maluku',     name: 'Maluku',               svgIds: ['IDMA','IDMU'] },
    { id: 'papua',      name: 'Papua',                svgIds: ['IDPA','IDPB'] },
  ],

  provinces: [
    { id: 'aceh',              name: 'Aceh',              island: 'sumatera',   recipes: ['mie-aceh'] },
    { id: 'sumatera-utara',    name: 'Sumatera Utara',    island: 'sumatera',   recipes: ['arsik'] },
    { id: 'sumatera-barat',    name: 'Sumatera Barat',    island: 'sumatera',   recipes: ['rendang'] },
    { id: 'riau',              name: 'Riau',              island: 'sumatera',   recipes: [] },
    { id: 'sumatera-selatan',  name: 'Sumatera Selatan',  island: 'sumatera',   recipes: ['pindang-patin'] },
    { id: 'dki-jakarta',       name: 'DKI Jakarta',       island: 'jawa',       recipes: ['soto-betawi', 'gabus-pucung'] },
    { id: 'jawa-barat',        name: 'Jawa Barat',        island: 'jawa',       recipes: [] },
    { id: 'jawa-tengah',       name: 'Jawa Tengah',       island: 'jawa',       recipes: [] },
    { id: 'diy',               name: 'Yogyakarta',        island: 'jawa',       recipes: ['gudeg'] },
    { id: 'jawa-timur',        name: 'Jawa Timur',        island: 'jawa',       recipes: ['rawon'] },
    { id: 'kalimantan-selatan',name: 'Kalimantan Selatan',island: 'kalimantan', recipes: ['soto-banjar'] },
    { id: 'kalimantan-tengah', name: 'Kalimantan Tengah', island: 'kalimantan', recipes: ['juhu-singkah'] },
    { id: 'kalimantan-timur',  name: 'Kalimantan Timur',  island: 'kalimantan', recipes: ['nasi-kuning-kalimantan'] },
    { id: 'bali',              name: 'Bali',              island: 'bali-ntt',  recipes: ['ayam-betutu', 'babi-guling', 'lawar'] },
    { id: 'papua',             name: 'Papua',             island: 'papua',      recipes: ['papeda'] },
    { id: 'papua-barat',       name: 'Papua Barat',       island: 'papua',      recipes: ['sate-ulat-sagu', 'ikan-bakar-manokwari'] },
  ],

  getById:    (id)     => DB.recipes.find(r => r.id === id),
  getByIsland:(island) => DB.recipes.filter(r => r.island === island),
  getByProv:  (prov)   => DB.recipes.filter(r => r.province === prov),
  search:     (q)      => {
    const lq = q.toLowerCase();
    return DB.recipes.filter(r =>
      r.name.toLowerCase().includes(lq) ||
      r.origin.toLowerCase().includes(lq) ||
      r.tags.some(t => t.includes(lq))
    );
  },
  findByIngredients: (inputs) => {
    const lower = inputs.map(i => i.toLowerCase());
    return DB.recipes.map(r => {
      const allIngr = [...r.ingredients, ...(r.spices || [])].map(i =>
        (i.name.id + ' ' + i.name.en).toLowerCase()
      );
      const matches = lower.filter(inp => allIngr.some(ingr => ingr.includes(inp)));
      return { recipe: r, matchCount: matches.length, matchedIngredients: matches };
    }).filter(x => x.matchCount > 0).sort((a, b) => b.matchCount - a.matchCount);
  }
};