
const countryHotel = {
  "Argentina": [{ hotel: 'Hostel Carlos Gardel' }, { hotel: 'Tritone Hote' }, { hotel: 'Park Hyatt Mendoza' }],
  "Australia": [{ hotel: 'Gilligan"s"' }, { hotel: 'Jasper Hotel' }, { hotel: 'Mantra On Salt Beach' }],
  "Austria": [{ hotel: 'Eventhotel Pyramide' }, { hotel: 'NH Salzburg City' }, { hotel: 'NH Graz City' }],
  "Barbados": [{ hotel: "Class'Eco Charleroi" }, { hotel: 'Hotel The Crane' }, { hotel: 'Butterfly Beach Hotel' }],
  "Belgium": [{ hotel: 'Ramada Sofia' }, { hotel: 'Novotel Charleroi Centre' }, { hotel: 'Hotel Mercure Vé' }],
  "Bulgaria": [{ hotel: 'Varandas do Vidigal' }, { hotel: 'Hotel Marinela Sofia' }, { hotel: 'Hotel Aris' }],
  "Brazil": [{ hotel: 'Japaratinga Resort' }, { hotel: 'Ibis Foz Do Iguaçu' }, { hotel: 'Long Beach' }],
  "Canada": [{ hotel: 'Hotel Arena Palace' }, { hotel: 'Copper Point Resort' }, { hotel: 'Delta Hotels Waterloo' }],
  "Cyprus": [{ hotel: 'Limanaki Beach' }, { hotel: 'Amathus Hotel' }, { hotel: 'Louis Ivi Mare' }],
  "Cuba": [{ hotel: 'Hotel Sol Palmeras' }, { hotel: 'Meliá Habana' }, { hotel: 'Meliá Santiago de Cuba' }],
  "Dominican Republic": [{ hotel: 'Catalonia Domingo' }, { hotel: 'Central Park Tower' }, { hotel: 'Panoramica Barahona' }],
  "Germany": [{ hotel: 'Hotel "Am Markt"' }, { hotel: 'NH Hamburg Mitte' }, { hotel: 'Novotel Munich City' }],
  "Greece": [{ hotel: 'Santorini Royal Suites' }, { hotel: 'Grand Hotel Egnatia' }, { hotel: 'Harmony Boutique Hotel' }],
  "Georgia": [{ hotel: 'Chito-Gvrito' }, { hotel: 'Tiflis Palace' }, { hotel: 'Apartment Aleqsandre Diuma' }],
  "Egypt": [{ hotel: 'Luna Sharm Hotel' }, { hotel: 'Hotel Ramses Hilton' }, { hotel: 'Safir Hotel Cairo' }],
  "Estonia": [{ hotel: 'Hedon' }, { hotel: 'Radisson Blu Sky' }, { hotel: 'Go Hotel Shnelli' }],
  "Jamaica": [{ hotel: 'Firefly Beach Cottages' }, { hotel: 'Meliá Braco Village' }, { hotel: 'Travellers Beach Resort' }],
  "Fijis": [{ hotel: 'Nadi Bay Resort Hotel' }, { hotel: 'Club Fiji Resort' }, { hotel: 'Yatule Resort & Spa' }],
  "Finland": [{ hotel: 'CheapSleep Helsinki' }, { hotel: 'Hotel Vuokatti & Suites' }, { hotel: 'St George, Helsinki' }],
  "France": [{ hotel: 'Hôtel Pastoral' }, { hotel: 'Le Grand Hotel' }, { hotel: 'Première Classe Lisieux' }],
  "Iceland": [{ hotel: 'Moar Guesthouse' }, { hotel: 'Grand Hotel Reykjavik' }, { hotel: 'Airport Hotel Aurora Star' }],
  "Italy": [{ hotel: 'Domus Sessoriana' }, { hotel: 'Hotel Plaza Venice' }, { hotel: 'NH Milano Fiera' }],
  "Montenegro": [{ hotel: 'Regent Porto Montenegro' }, { hotel: 'Posto Capitano' }, { hotel: 'Blue Star' }],
  "Norway": [{ hotel: 'Vestlia Resort' }, { hotel: 'Brekke Gard' }, { hotel: 'Scandic Royal Stavanger' }],
  "Republic of Tunisia": [{ hotel: 'Hotel Marhaba Beach' }, { hotel: 'Four Seasons Tunis' }, { hotel: 'Studio A Sidi Bou Said' }],
  "Republic of Malta": [{ hotel: 'Solana Hotel & Spa' }, { hotel: 'Hotel Golden Tulip Vivaldi' }, { hotel: 'The Merchant Penthouse' }],
  "Madagascar": [{ hotel: 'Hotel Arc en Ciel' }, { hotel: 'Carlton Madagascar' }, { hotel: "Le Pavillon De L'Emyrne'" }],
  "Netherlands": [{ hotel: 'Hostel Sleep Amsterdam' }, { hotel: 'Hotel NH Utrecht' }, { hotel: "NH Atlantic Den Haag" }],
  "Turkey": [{ hotel: 'Side Premium' }, { hotel: 'The Hotel Beyaz Saray' }, { hotel: "The Merlot Eskisehir" }],
  "Spain": [{ hotel: 'Hotel Marina' }, { hotel: 'Easyhotel Barcelona' }, { hotel: "Sol Timor by Meliá" }],
  "Sri Lanka": [{ hotel: 'Liyya Water Villas' }, { hotel: 'Jie Jie By Jetwing' }, { hotel: "The Blue Water" }],
  "Switzerland": [{ hotel: "Hotel Dell'Angelo" }, { hotel: 'NH Geneva City' }, { hotel: "Jägerhof Hotel" }],
  "Sweden": [{ hotel: 'Hotell Slottsbacken' }, { hotel: 'Radisson Blu Waterfront' }, { hotel: "Best Western Ta Inn" }],
  "USA": [{ hotel: 'New World Hotel' }, { hotel: 'Greektown Casino-Hotel' }, { hotel: "The Times Square" }]
}



const countryDecsription = [
  {
    title: "Barcelona",
    link: "https://i.ibb.co/THb3hzv/barca-min.jpg"
  },
  {
    title: "Moscow",
    link: "https://i.ibb.co/px5RkbM/moscow-min.jpg"
  },
  {
    title: "Thailand",
    link: "https://i.ibb.co/8bRW9x4/thailand-min.jpg"
  }
]

const country = [
  'Argentina',
  'Australia',
  'Austria',
  'Barbados',
  'Belgium',
  'Bulgaria',
  'Brazil',
  'Canada',
  'Cyprus',
  'Cuba',
  'Dominican Republic',
  'Germany',
  'Greece',
  'Georgia',
  'Egypt',
  'Estonia',
  'Jamaica',
  'Fijis',
  'Finland',
  'France',
  'Iceland',
  'Italy',
  'Montenegro',
  'Norway',
  'Republic of Tunisia',
  'Republic of Malta',
  'Madagascar',
  'Netherlands',
  'Turkey',
  'Spain',
  'Sri Lanka',
  'Switzerland',
  'Sweden',
  'USA',


]

const accordion = {
  item1: {
    title: "Bulgaria from $330",
    content:
      "Only breakfasts, 500 meters from the sea, a good hotel, a beautiful sea world for you, 6 days 7 nights",
    open: false
  },
  item2: {
    title: "Estonia from $350",
    content:
      "No meals, 500 meters to the sea, excellent beach, free bar, 7 days 6 nights",
    open: false
  },
  item3: {
    title: "Argentina from $350",
    content:
      "Free bar, all amenities, breakfast only, 5 days 6 nights",
    open: false
  },
  item4: {
    title: "Egypt from $400",
    content:
      "Only breakfast, slippers and a towel in the room are available, 400 meters to the beach, 6 days 5 nights",
    open: false
  },
  item5: {
    title: "Turkey from $450",
    content:
      "A beach of stone, 300 meters from the sea, breakfast only, 7 days 6 nights",
    open: false
  },
  item6: {
    title: "Montenegro from $520",
    content:
      "The offer is valid for 5 days, breakfast only, insurance included, 5 days 4 nights",
    open: false
  },
  item7: {
    title: "Latvia from $550",
    content:
      "Great beach, the hotel has a pool, breakfast and dinner, 6 days 5 nights",
    open: false
  },
  item8: {
    title: "Switzerland from $590",
    content:
      "Breakfast and dinner, 4 excursions, one of which is a hike in the mountains, 6 days 7 nights",
    open: false
  },
  item9: {
    title: "Barbados from $600",
    content:
      "Do you like rum? then you are definitely here, sandy beach, quiet sea, 7 days 6 nights",
    open: false
  },
  item10: {
    title: "Finland from $630",
    content:
      "For lovers of winter adventures, all inclusive, hotel in the mountains, 7 days 8 nights",
    open: false
  },
  item11: {
    title: "Greece from $650",
    content:
      "Restaurant with in-room sea view, breakfast and dinner, 6 unforgettable days",
    open: false
  },
  item12: {
    title: "Belgium from $700",
    content:
      "All inclusive, the room has Wi-Fi, 6 days 5 nights, also 2 free tours",
    open: false
  },
  item13: {
    title: "Austria from $700",
    content:
      "Only breakfast, insurance, the room has it all, beautiful beach, 3 excursions, 5 days 6 nights",
    open: false
  },
  item14: {
    title: "France from $750",
    content:
      "Breakfast and dinner, 2 excursions, hotel near the Eiffel Tower, 5 days 6 nights",
    open: false
  },
  item15: {
    title: "Italy from $750",
    content: "Beautiful Italy, breakfast only, free bar, 6 days",
    open: false
  },
  item16: {
    title: "Montenegro from $850",
    content:
      "All inclusive, 7 days 8 nights, great beach, beautiful view",
    open: false
  },
  item17: {
    title: "Republic of Malta from $880",
    content:
      "Sunny beach, free bar, breakfast only, 2 minutes to the beach, 6 days 7 nights",
    open: false
  },
  item18: {
    title: "Madagascar from $900",
    content:
      "All inclusive, 8 days 9 nights, 2 minutes to the beach, free bar, insurance and 2 guided tours for free",
    open: false
  },
  item19: {
    title: "USA from $910",
    content:
      "Nice hotel with great views, breakfast and dinner, interesting excursions, 6 days 7 nights",
    open: false
  },
  item20: {
    title: "Spain from $920",
    content:
      "All inclusive, 8 days 9 nights, hotel by the sea ,free bar, insurance and 2 guided tours for free.",
    open: false
  },
  item21: {
    title: "Sri Lanka from $1000",
    content:
      "Tropical jungle, delicious cocktails, it's all inclusive, for 10 days 11 nights.",
    open: false
  },
  item22: {
    title: "Dominican Republic from $1200",
    content:
      "Tropical jungle, delicious cocktails, it's all inclusive, for 10 days 11 nights.",
    open: false
  },
  item23: {
    title: "Cuba from $1300",
    content:
      "Unforgettable window view, all inclusive, 2 beaches, 3 pools, 7 days 8 nights",
    open: false
  },
  item24: {
    title: "Fijis from $1400",
    content:
      "Incredible islands, all inclusive, beautiful sea, this vacation you will not forget, 7 days 8 nights",
    open: false
  },
  item25: {
    title: "Netherlands from $1500",
    content:
      "All inclusive, 12 unforgettable days waiting for you, 3 excursions",
    open: false
  },
  item26: {
    title: "Brazil from $1550",
    content:
      "Immerse yourself in the world of travel, 13 days and 14 nights are waiting for you, all inclusive",
    open: false
  },
  item27: {
    title: "Sweden from $1600",
    content:
      "All inclusive, excellent service, boat trips by the sea every day, 2 weeks of wonderful relaxation",
    open: false
  },
  item28: {
    title: "Iceland from $1650",
    content:
      "For those who like an unusual vacation, almost like a trip to my grandmother, only cooler! 14 days 15 nights all inclusive",
    open: false
  },
  item29: {
    title: "Australia from $1700",
    content:
      "The sun, the sea, the heat, what else do you need to rest? 15 days waiting for you, and of course all inclusive",
    open: false
  },
  item30: {
    title: "Maldives from $1900",
    content:
      "And finally, the most unforgettable trip that you could visit, all inclusive, 14 days 15 nights, 3 delights, including a delight on the island, many fruits and cocktails are waiting for you",
    open: false
  }
}

const getDate = [
  {
    date: 15,
    link: "uamnibh Edet Mertolo numi",
    url: "https://i.ibb.co/rGZsC8R/church-min.jpg",
    title: "Church"
  },
  {
    date: 17,
    link: "Erh Emertlo numolo",
    url: "https://i.ibb.co/xSWg9sF/resort.jpg",
    title: "Hotel"
  }
]

const cardInfo = [
  {
    title: "NEW ZEALAND",
    price: "$ 1.200",
    link: "learn more",
    url: "https://i.ibb.co/djtN7ZS/newzeland-min.jpg",
    text:
      "New Zealand is famous for its gorgeous nature - geysers, mountains and lakes, forests and grottoes, glaciers and beaches. Widely developed environmental movement allows you to keep all this splendor in almost pristine condition, even in areas of large cities"
  },
  {
    title: "GOA",
    price: "$ 1.500",
    link: "learn more",
    url: "https://i.ibb.co/y8DDtYp/goa-min.jpg",
    text:
      "Goa is the country's main resort, as it often happens, completely unlike the rest of India. The coast stretches here for 110 km, forming 40 beautiful beaches. The state is divided into the Northern and Southern parts, the border between which is Fort Aguada."
  },
  {
    title: "FRANCE",
    price: "$ 1.600",
    link: "learn more",
    url: "https://i.ibb.co/LY2NJtR/paris-min.jpg",
    text:
      "Elegant beauty France is a vacation with charm: a rich “excursion”, relaxation on the sophisticated Cote d'Azur, famous museums, gastronomic provinces and castles of the Loire. Cuisine, wine and ski resorts - all about France: tours, prices, hotels and attractions"
  },
  {
    title: "CANADA",
    price: "$ 2.000",
    link: "learn more",
    url: "https://i.ibb.co/Bgg6p3v/canada-min.jpg",
    text:
      "Canada includes ski resorts, English and French classes, and noteworthy national parks. The capital with dignity - Ottawa, colorful Quebec and framed by the mountains of Vancouver, maples and hockey - all about Canada: visa and cities, maps and photos"
  },
  {
    title: "TURKEY",
    price: "$ 1.500",
    link: "learn more",
    url: "https://i.ibb.co/ZJCdgs0/turkey-min.jpg",
    text:
      "Turkey is not only the excellent beaches of the four seas, but also the magnificent Istanbul with the Blue Mosque and Topkapi Palace, the thermal springs of Yalova and the snow-white Pamukkale, the Cappadocian monasteries, skiing and great shopping"
  },
  {
    title: "EGYPT",
    price: "$ 1.500",
    link: "learn more",
    url: "https://i.ibb.co/kybmpFW/egypt-min.jpg",
    text:
      "The advantages of Egypt are known to everyone: a quality beach holiday all year round in the Mediterranean and Red Seas, diluted with excellent diving, plus a varied “excursion”: the pyramids, the Sphinx and Luxor. Everything about Egypt from Hurghada to Sharm"
  },
  {
    title: "JAPAN",
    price: "$ 1.000",
    link: "learn more",
    url: "https://i.ibb.co/3zbzBkC/japan-min.jpg",
    text:
      "Country of the rising sun Japan - a storehouse of sophisticated exotic. The ultramodern Tokyo and picturesque province, the Fuji snow cap and sakura in bloom, the magnificent beaches of the Okinawa islands and the ancient Shinto monuments."
  },
  {
    title: "BRAZIL",
    price: "$ 1.700",
    link: "learn more",
    url: "https://i.ibb.co/wdmj0zh/brazil-min.jpg",
    text:
      "Brazil is not only the crazy carnival in Rio de Janeiro, the impenetrable jungle of the Amazon and the thundering cascades of Iguazu, but also the famous beaches of Ipanema and Copacabana, excellent hotels, excellent cuisine and great football."
  },
  {
    title: "SPAIN",
    price: "$ 1.500",
    link: "learn more",
    url: "https://i.ibb.co/C9PRsHT/barcelona-min.jpg",
    text:
      "Proud, narcissistic, explosive, full of geniuses and mediocrity, falling in love and falling in love, tiring and tired ... all this is about Barcelona - one of the most beautiful cities not only in Europe, but all over the world. When Muscovites are asked what the capital lacks, 9 out of 10 answer - the seas"
  }
]

const sliderList = [
  {
    img: "https://i.ibb.co/PtTs682/london-Slide-min.jpg",
    title: "LONDON",
    price: "$ 1000"
  },
  {
    img: "https://i.ibb.co/25T3szC/maldives-Slide-min.jpg",
    title: "Maldives",
    price: "$ 2000"
  },
  {
    img: "https://i.ibb.co/9N1Ry1S/venice-Slide-min.jpg",
    title: "Venice",
    price: "$1600"
  }
]

const cardItem = [
  {
    img: "https://i.ibb.co/C9PRsHT/barcelona-min.jpg",
    title: "BARCELONA",
    price: "$1000",
    linkName: "learn more"
  },
  {
    img: "https://i.ibb.co/y8DDtYp/goa-min.jpg",
    title: "GOA",
    price: "$1500",
    linkName: "learn more"
  },
  {
    img: "https://i.ibb.co/LY2NJtR/paris-min.jpg",
    title: "PARIS",
    price: "$1600",
    linkName: "learn more"
  }
]

const menuItem = [
  {
    name: "ABOUT",
    link: "/"
  },

  {
    name: "TOURS",
    link: "/tours"
  },
  {
    name: "OFFERS",
    link: "/offers"
  },
  {
    name: "BLOG",
    link: "/blog"
  },
  {
    name: "CONTACTS",
    link: "/contacts"
  }
]
export { country, countryHotel, countryDecsription, accordion, getDate, cardInfo, sliderList, cardItem, menuItem }