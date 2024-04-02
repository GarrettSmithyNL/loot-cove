const games = [
  {
    ID: 1,
    name: "Dead by Daylight",
    rating: {
      "5 stars": 120,
      "4 stars": 80,
      "3 stars": 50,
      "2 stars": 30,
      "1 star": 10,
    },
    description:
      "Dead by Daylight is a thrilling multiplayer horror game where players take on the roles of both the killer and survivors. With asymmetric gameplay, intense chases, and strategic teamwork, experience the adrenaline-pumping excitement of survival horror.",
    reviews: [
      {
        user: "Player1",
        rating: 5,
        comment: "Great multiplayer experience!",
      },
      {
        user: "HorrorFan82",
        rating: 4,
        comment: "Scary but fun.",
      },
    ],
    tags: ["Multiplayer", "Horror"],
    genre: "Survival Horror",
    developer: "Behaviour Interactive",
    release_date: "June 14, 2016",
    price: "$19.99",
  },
  {
    ID: 2,
    name: "Five Nights at Freddy's",
    rating: {
      "5 stars": 150,
      "4 stars": 80,
      "3 stars": 60,
      "2 stars": 40,
      "1 star": 20,
    },
    Description:
      "Five Nights at Freddy's is a point-and-click horror game set in a haunted pizzeria. With jump scares, suspenseful gameplay, and eerie animatronics, dive into the world of Freddy Fazbear's Pizza and survive the night.",
    reviews: [
      {
        user: "JumpScareMaster",
        rating: 5,
        comment: "Best jump scares ever!",
      },
      {
        user: "GamerGirl99",
        rating: 3,
        comment: "Gets repetitive after a while.",
      },
    ],
    tags: ["Point and Click", "Horror"],
    genre: "Survival Horror",
    developer: "Scott Cawthon",
    release_date: "August 8, 2014",
    price: "$4.99",
  },
  {
    ID: 3,
    name: "Phasmophobia",
    rating: {
      "5 stars": 180,
      "4 stars": 100,
      "3 stars": 70,
      "2 stars": 50,
      "1 star": 20,
    },
    Description:
      "Phasmophobia is a cooperative horror game where players become ghost hunters investigating haunted locations. With realistic ghost interactions, atmospheric environments, and intense paranormal encounters, test your bravery in this spine-chilling adventure.",
    reviews: [
      {
        user: "GhostHunter101",
        rating: 5,
        comment: "Terrifyingly realistic!",
      },
      {
        user: "SkepticalGamer",
        rating: 3,
        comment: "Not as scary as I expected.",
      },
    ],
    tags: ["Co-op", "Horror"],
    genre: "Survival Horror",
    developer: "Kinetic Games",
    release_date: "September 18, 2020",
    price: "$13.99",
  },
  {
    ID: 4,
    name: "Resident Evil",
    rating: {
      "5 stars": 200,
      "4 stars": 120,
      "3 stars": 80,
      "2 stars": 50,
      "1 star": 20,
    },
    Description:
      "Resident Evil is a classic survival horror game that follows the story of characters battling against hordes of zombies and other terrifying creatures. With action-packed gameplay, puzzle-solving, and a gripping storyline, immerse yourself in the horrors of Raccoon City.",
    reviews: [
      {
        user: "ZombieHunterX",
        rating: 5,
        comment: "Classic horror game!",
      },
      {
        user: "SurvivorGirl23",
        rating: 4,
        comment: "Intense gameplay.",
      },
    ],
    tags: ["Action", "Horror"],
    genre: "Survival Horror",
    developer: "Capcom",
    release_date: "March 22, 1996",
    price: "$19.99",
  },
  {
    ID: 5,
    name: "Silent Hill",
    rating: {
      "5 stars": 180,
      "4 stars": 100,
      "3 stars": 70,
      "2 stars": 40,
      "1 star": 15,
    },
    description:
      "Silent Hill is a psychological horror game known for its eerie atmosphere and gripping storytelling. Explore the haunted town of Silent Hill, solve puzzles, and encounter terrifying creatures in this iconic survival horror experience.",
    reviews: [
      {
        user: "FoggyMemories",
        rating: 5,
        comment: "Eerie atmosphere!",
      },
      {
        user: "HorrorEnthusiast",
        rating: 4,
        comment: "Creepy storyline.",
      },
    ],
    tags: ["Psychological Horror", "Survival Horror"],
    genre: "Horror",
    developer: "Konami",
    release_date: "January 31, 1999",
    price: "$9.99",
  },
  {
    ID: 6,
    name: "Stellaris",
    rating: {
      "5 stars": 250,
      "4 stars": 150,
      "3 stars": 100,
      "2 stars": 60,
      "1 star": 30,
    },
    description:
      "Stellaris is a grand strategy game set in space where players can explore, expand, exploit, and exterminate. With deep empire building, diplomacy, and epic space battles, carve out your own galactic empire and dominate the cosmos.",
    reviews: [
      {
        user: "SpaceExplorer",
        rating: 5,
        comment: "Amazing depth and strategy!",
      },
      {
        user: "SciFiFanatic",
        rating: 4,
        comment: "Complex but rewarding.",
      },
    ],
    tags: ["Grand Strategy", "Space Exploration", "Empire Building"],
    genre: "Strategy",
    developer: "Paradox Development Studio",
    release_date: "May 9, 2016",
    price: "$39.99",
  },
  {
    ID: 7,
    name: "Europa Universalis 4",
    rating: {
      "5 stars": 300,
      "4 stars": 200,
      "3 stars": 150,
      "2 stars": 80,
      "1 star": 40,
    },
    description:
      "Europa Universalis IV is a grand strategy game where players lead a nation through history, from the Renaissance to the Enlightenment era. With intricate diplomacy, warfare, and trade mechanics, rewrite history and build your empire.",
    reviews: [
      {
        user: "HistoryBuff",
        rating: 5,
        comment: "Love the historical depth!",
      },
      {
        user: "StrategyGuru",
        rating: 4,
        comment: "Challenging gameplay.",
      },
    ],
    tags: ["Grand Strategy", "Historical", "Empire Building"],
    genre: "Strategy",
    developer: "Paradox Development Studio",
    release_date: "August 13, 2013",
    price: "$39.99",
  },
  {
    ID: 8,
    name: "Hearts of Iron 4",
    rating: {
      "5 stars": 260,
      "4 stars": 180,
      "3 stars": 120,
      "2 stars": 70,
      "1 star": 35,
    },
    description:
      "Hearts of Iron IV is a grand strategy game set during World War II where players control nations and engage in military, economic, and political strategies. With deep historical accuracy and complex gameplay, rewrite the course of history.",
    reviews: [
      {
        user: "WWIIBuff",
        rating: 5,
        comment: "Realistic WW2 simulation!",
      },
      {
        user: "StrategyMaster",
        rating: 4,
        comment: "Strategically engaging.",
      },
    ],
    tags: ["Grand Strategy", "World War II", "Military"],
    genre: "Strategy",
    developer: "Paradox Development Studio",
    release_date: "June 6, 2016",
    price: "$39.99",
  },
  {
    ID: 9,
    name: "Factorio",
    rating: {
      "5 stars": 230,
      "4 stars": 160,
      "3 stars": 100,
      "2 stars": 60,
      "1 star": 30,
    },
    description:
      "Factorio is a sandbox game about building and automating factories to produce complex products. With resource management, logistics, and automation mechanics, create efficient production lines and conquer the world of industry.",
    reviews: [
      {
        user: "FactoryKing",
        rating: 5,
        comment: "Addictive factory building!",
      },
      {
        user: "AutomationGuru",
        rating: 4,
        comment: "Innovative gameplay mechanics.",
      },
    ],
    tags: ["Simulation", "Factory Building", "Automation"],
    genre: "Simulation",
    developer: "Wube Software LTD",
    release_date: "February 25, 2016",
    price: "$29.99",
  },
  {
    ID: 10,
    name: "Crusader Kings 3",
    rating: {
      "5 stars": 240,
      "4 stars": 170,
      "3 stars": 110,
      "2 stars": 70,
      "1 star": 30,
    },
    description:
      "Crusader Kings III is a grand strategy game set in the Middle Ages where players control a dynasty and navigate political intrigue, warfare, and diplomacy. With deep character interactions and dynastic management, forge your legacy in a dynamic medieval world.",
    reviews: [
      {
        user: "MedievalLord",
        rating: 5,
        comment: "Epic medieval strategy!",
      },
      {
        user: "DynastyBuilder",
        rating: 4,
        comment: "Complex yet rewarding gameplay.",
      },
    ],
    tags: ["Grand Strategy", "Medieval", "Dynasty Management"],
    genre: "Strategy",
    developer: "Paradox Development Studio",
    release_date: "September 1, 2020",
    price: "$49.99",
  },
  {
    ID: 11,
    name: "Skyrim",
    rating: {
      "5 stars": 280,
      "4 stars": 200,
      "3 stars": 140,
      "2 stars": 90,
      "1 star": 40,
    },
    description:
      "Skyrim is an open-world action RPG set in a fantasy realm where players can explore vast landscapes, engage in epic quests, and develop their character's abilities. With immersive storytelling and endless adventures, embark on a journey in the land of dragons and magic.",
    reviews: [
      {
        user: "DragonbornHero",
        rating: 5,
        comment: "Incredible world to explore!",
      },
      {
        user: "FantasyFanatic",
        rating: 4,
        comment: "Rich lore and engaging gameplay.",
      },
    ],
    tags: ["Open World", "Action RPG", "Fantasy"],
    genre: "Action",
    developer: "Bethesda Game Studios",
    release_date: "November 11, 2011",
    price: "$39.99",
  },
  {
    ID: 12,
    name: "Elden Ring",
    rating: {
      "5 stars": 290,
      "4 stars": 200,
      "3 stars": 150,
      "2 stars": 100,
      "1 star": 50,
    },
    description:
      "Elden Ring is an action RPG developed by FromSoftware and published by Bandai Namco Entertainment. It is set in a dark fantasy world created by Hidetaka Miyazaki and George R.R. Martin. Players explore the open world, battle enemies, and uncover the mysteries of the Elden Ring.",
    reviews: [
      {
        user: "DarkSoulFan",
        rating: 5,
        comment: "Masterpiece in storytelling and gameplay!",
      },
      {
        user: "FantasyGamer",
        rating: 4,
        comment: "Challenging but rewarding experience.",
      },
    ],
    tags: ["Action RPG", "Open World", "Dark Fantasy"],
    genre: "Action",
    developer: "FromSoftware",
    release_date: "February 25, 2022",
    price: "$59.99",
  },
  {
    ID: 13,
    name: "Baldur's Gate 3",
    rating: {
      "5 stars": 270,
      "4 stars": 180,
      "3 stars": 120,
      "2 stars": 80,
      "1 star": 40,
    },
    description:
      "Baldur's Gate 3 is a role-playing game set in the Dungeons & Dragons universe. Developed by Larian Studios, it features deep storytelling, character customization, and strategic turn-based combat. Embark on an epic adventure and shape the fate of the Forgotten Realms.",
    reviews: [
      {
        user: "DnDPlayer",
        rating: 5,
        comment: "True to D&D experience!",
      },
      {
        user: "RPGEnthusiast",
        rating: 4,
        comment: "Engaging quests and characters.",
      },
    ],
    tags: ["RPG", "Fantasy", "Dungeons & Dragons"],
    genre: "Role-Playing",
    developer: "Larian Studios",
    release_date: "October 6, 2020",
    price: "$49.99",
  },
  {
    ID: 14,
    name: "Path of Exile",
    rating: {
      "5 stars": 270,
      "4 stars": 180,
      "3 stars": 120,
      "2 stars": 80,
      "1 star": 40,
    },
    description:
      "Path of Exile is an action RPG developed by Grinding Gear Games. Set in the dark fantasy world of Wraeclast, players explore dungeons, battle monsters, and customize their characters with a deep skill tree. With challenging gameplay and a strong online community, embark on a journey of exile and survival.",
    reviews: [
      {
        user: "ARPGFanatic",
        rating: 5,
        comment: "Deep mechanics and endless content!",
      },
      {
        user: "DungeonCrawler",
        rating: 4,
        comment: "Addictive gameplay and frequent updates.",
      },
    ],
    tags: ["Action RPG", "Fantasy", "Multiplayer"],
    genre: "Action",
    developer: "Grinding Gear Games",
    release_date: "October 23, 2013",
    price: "Free to Play",
  },
  {
    ID: 15,
    name: "Dragon Age",
    rating: {
      "5 stars": 260,
      "4 stars": 180,
      "3 stars": 120,
      "2 stars": 80,
      "1 star": 40,
    },
    description:
      "Dragon Age is a fantasy RPG developed by BioWare. Set in the mythical world of Thedas, players embark on epic quests, make impactful choices, and engage in tactical combat. With rich storytelling and diverse characters, shape the fate of the realm.",
    reviews: [
      {
        user: "FantasyRPGFan",
        rating: 5,
        comment: "Immersive fantasy world!",
      },
      {
        user: "StorytellingEnthusiast",
        rating: 4,
        comment: "Compelling narrative and choices.",
      },
    ],
    tags: ["RPG", "Fantasy", "Tactical Combat"],
    genre: "Role-Playing",
    developer: "BioWare",
    release_date: "November 3, 2009",
    price: "$29.99",
  },
  {
    ID: 16,
    name: "Borderlands 2",
    rating: {
      "5 stars": 280,
      "4 stars": 200,
      "3 stars": 140,
      "2 stars": 90,
      "1 star": 40,
    },
    description:
      "Borderlands 2 is a first-person shooter RPG set in the post-apocalyptic world of Pandora. Developed by Gearbox Software, players embark on a quest for loot, battle enemies, and explore a vibrant and dangerous world. With unique cel-shaded graphics and cooperative multiplayer, dive into the chaotic world of Borderlands.",
    reviews: [
      {
        user: "LooterShooterFan",
        rating: 5,
        comment: "Endless fun and loot!",
      },
      {
        user: "FPSGamer",
        rating: 4,
        comment: "Great gunplay and humor.",
      },
    ],
    tags: ["First-Person Shooter", "RPG", "Loot"],
    genre: "Action",
    developer: "Gearbox Software",
    release_date: "September 18, 2012",
    price: "$19.99",
  },
  {
    ID: 17,
    name: "PlayerUnknown's Battlegrounds (PUBG)",
    rating: {
      "5 stars": 270,
      "4 stars": 190,
      "3 stars": 130,
      "2 stars": 80,
      "1 star": 40,
    },
    description:
      "PlayerUnknown's Battlegrounds (PUBG) is a battle royale game where players land on an island, scavenge for weapons and equipment, and compete to be the last one standing. Developed by PUBG Corporation, it offers intense multiplayer action and strategic gameplay.",
    reviews: [
      {
        user: "BattleRoyaleFan",
        rating: 5,
        comment: "Thrilling battle royale experience!",
      },
      {
        user: "ShooterGamer",
        rating: 4,
        comment: "Tense and exciting matches.",
      },
    ],
    tags: ["Battle Royale", "Shooter", "Multiplayer"],
    genre: "Action",
    developer: "PUBG Corporation",
    release_date: "December 20, 2017",
    price: "$29.99",
  },
  {
    ID: 18,
    name: "Call of Duty: Modern Warfare 2 (MW2)",
    rating: {
      "5 stars": 280,
      "4 stars": 200,
      "3 stars": 140,
      "2 stars": 90,
      "1 star": 40,
    },
    description:
      "Call of Duty: Modern Warfare 2 (MW2) is a first-person shooter game developed by Infinity Ward and published by Activision. It is part of the iconic Call of Duty series, featuring intense single-player campaigns and multiplayer modes. With realistic graphics and fast-paced action, engage in thrilling combat scenarios across various locations.",
    reviews: [
      {
        user: "FPSGamer",
        rating: 5,
        comment: "Classic FPS action!",
      },
      {
        user: "ShooterEnthusiast",
        rating: 4,
        comment: "Exciting multiplayer battles.",
      },
    ],
    tags: ["First-Person Shooter", "War", "Multiplayer"],
    genre: "Action",
    developer: "Infinity Ward",
    release_date: "November 10, 2009",
    price: "$19.99",
  },
  {
    ID: 19,
    name: "Apex Legends",
    rating: {
      "5 stars": 290,
      "4 stars": 200,
      "3 stars": 140,
      "2 stars": 90,
      "1 star": 50,
    },
    description:
      "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. Set in the Titanfall universe, it features fast-paced combat, unique character abilities, and squad-based gameplay. With a variety of weapons and characters to choose from, compete to be the last team standing.",
    reviews: [
      {
        user: "BattleRoyaleFan",
        rating: 5,
        comment: "Best battle royale experience!",
      },
      {
        user: "ShooterGamer",
        rating: 4,
        comment: "Great teamwork and strategy.",
      },
    ],
    tags: ["Battle Royale", "Shooter", "Multiplayer"],
    genre: "Action",
    developer: "Respawn Entertainment",
    release_date: "February 4, 2019",
    price: "Free to Play",
  },
  {
    ID: 20,
    name: "The Finals",
    rating: {
      "5 stars": 290,
      "4 stars": 200,
      "3 stars": 150,
      "2 stars": 100,
      "1 star": 50,
    },
    description:
      "The Finals is a sports simulation game developed by Sports Interactive. Experience the thrill of championship matches, manage your team, and lead them to victory in various sports events. With realistic gameplay and strategic decisions, compete against the best teams in the world.",
    reviews: [
      {
        user: "SportsFanatic",
        rating: 5,
        comment: "Realistic sports simulation!",
      },
      {
        user: "ChampionshipEnthusiast",
        rating: 4,
        comment: "Great management mechanics.",
      },
    ],
    tags: ["Sports", "Simulation", "Management"],
    genre: "Sports",
    developer: "Sports Interactive",
    release_date: "April 15, 2022",
    price: "$49.99",
  },
  {
    ID: 21,
    name: "Fighter Z",
    rating: {
      "5 stars": 280,
      "4 stars": 190,
      "3 stars": 140,
      "2 stars": 90,
      "1 star": 40,
    },
    description:
      "Fighter Z is a 2D fighting game developed by Arc System Works. Choose from a roster of powerful fighters, each with unique abilities and fighting styles. Engage in fast-paced battles, perform combos, and unleash devastating attacks to emerge victorious in intense fights.",
    reviews: [
      {
        user: "FightingGameFan",
        rating: 5,
        comment: "Dynamic and exciting fights!",
      },
      {
        user: "ArcadeGamer",
        rating: 4,
        comment: "Great visuals and controls.",
      },
    ],
    tags: ["Fighting", "2D", "Competitive"],
    genre: "Action",
    developer: "Arc System Works",
    release_date: "January 26, 2018",
    price: "$39.99",
  },
  {
    ID: 22,
    name: "Tekken 8",
    rating: {
      "5 stars": 280,
      "4 stars": 190,
      "3 stars": 140,
      "2 stars": 90,
      "1 star": 40,
    },
    description:
      "Tekken 8 is a fighting game developed and published by Bandai Namco Entertainment. It continues the iconic Tekken series with new characters, enhanced graphics, and updated gameplay mechanics. Engage in intense battles, master combos, and compete in tournaments to become the ultimate fighter.",
    reviews: [
      {
        user: "FightingGameFan",
        rating: 5,
        comment: "Great addition to the Tekken series!",
      },
      {
        user: "ArcadeGamer",
        rating: 4,
        comment: "Solid fighting mechanics and roster.",
      },
    ],
    tags: ["Fighting", "Competitive", "Multiplayer"],
    genre: "Action",
    developer: "Bandai Namco Entertainment",
    release_date: "TBD",
    price: "$59.99",
  },
  {
    ID: 23,
    name: "Street Fighter 5",
    rating: {
      "5 stars": 270,
      "4 stars": 180,
      "3 stars": 130,
      "2 stars": 80,
      "1 star": 40,
    },
    description:
      "Street Fighter 5 is a fighting game developed and published by Capcom. It features iconic characters from the Street Fighter series with updated visuals and gameplay mechanics. Master special moves, combos, and battle against players worldwide in competitive matches.",
    reviews: [
      {
        user: "FightingGameFan",
        rating: 5,
        comment: "Classic Street Fighter action!",
      },
      {
        user: "ArcadeGamer",
        rating: 4,
        comment: "Fun and challenging fights.",
      },
    ],
    tags: ["Fighting", "Competitive", "Multiplayer"],
    genre: "Action",
    developer: "Capcom",
    release_date: "February 16, 2016",
    price: "$39.99",
  },
  {
    ID: 24,
    name: "Hyrule Warriors",
    rating: {
      "5 stars": 280,
      "4 stars": 190,
      "3 stars": 140,
      "2 stars": 90,
      "1 star": 40,
    },
    description:
      "Hyrule Warriors is a hack-and-slash action game developed by Omega Force and Team Ninja. Set in the Legend of Zelda universe, it combines the gameplay of Dynasty Warriors with the characters and world of Zelda. Engage in epic battles, use powerful weapons, and explore iconic locations from the series.",
    reviews: [
      {
        user: "ZeldaFan",
        rating: 5,
        comment: "A fantastic Zelda spin-off!",
      },
      {
        user: "ActionGamer",
        rating: 4,
        comment: "Fun and engaging gameplay.",
      },
    ],
    tags: ["Hack and Slash", "Action", "Adventure"],
    genre: "Action",
    developer: "Omega Force, Team Ninja",
    release_date: "March 18, 2014",
    price: "$49.99",
  },
  {
    ID: 25,
    name: "Super Smash Bros",
    rating: {
      "5 stars": 290,
      "4 stars": 200,
      "3 stars": 150,
      "2 stars": 100,
      "1 star": 50,
    },
    description:
      "Super Smash Bros is a crossover fighting game series developed by Nintendo. It features characters from various Nintendo franchises, along with guest characters from other game series. With fast-paced battles and unique gameplay mechanics, compete against friends or AI in multiplayer matches.",
    reviews: [
      {
        user: "NintendoFan",
        rating: 5,
        comment: "The ultimate crossover fighting game!",
      },
      {
        user: "FightingGameEnthusiast",
        rating: 4,
        comment: "Great character roster and stages.",
      },
    ],
    tags: ["Fighting", "Crossover", "Multiplayer"],
    genre: "Action",
    developer: "Nintendo",
    release_date: "January 21, 1999",
    price: "$59.99",
  },
];

export const getGames = () => games;
export const getGameById = (gameId) => {
  games.find((game) => game.ID === gameId);
};
