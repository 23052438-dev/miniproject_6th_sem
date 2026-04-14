const GAMES = [

    {
      id: "gtav",
      name: "Grand Theft Auto V",
      price: "₹1,299",
      pv: "1299",
      genre: "Open World Action",
      desc: "Three criminals — Michael, Franklin, and Trevor — navigate the dangerous underworld of Los Santos through high-stakes heists, personal struggles, and explosive missions. The game offers a massive open world filled with activities, chaos, and freedom. With cinematic storytelling and seamless character switching, it delivers one of the most immersive experiences ever created in gaming.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5-3470",
        ram: "8 GB RAM",
        gpu: "GTX 660",
        storage: "110 GB"
      }
    },
    
    {
      id: "witcher3",
      name: "The Witcher 3: Wild Hunt",
      price: "₹1,499",
      pv: "1499",
      genre: "RPG",
      desc: "Step into the boots of Geralt of Rivia, a monster hunter navigating a vast dark-fantasy world filled with moral choices. Every quest carries weight, and your decisions shape the outcome of the story. With rich storytelling, detailed environments, and unforgettable characters, this RPG remains one of the greatest ever made.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 770",
        storage: "50 GB"
      }
    },
    
    {
      id: "rdr2",
      name: "Red Dead Redemption 2",
      price: "₹1,399",
      pv: "1399",
      genre: "Open World Action",
      desc: "Experience the story of Arthur Morgan, an outlaw struggling to survive as the age of the Wild West fades away. The game offers an incredibly detailed open world filled with life, realism, and emotional storytelling. Every action impacts your journey, making it a deeply immersive experience.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i7",
        ram: "16 GB RAM",
        gpu: "GTX 1060",
        storage: "150 GB"
      }
    },
    
    {
      id: "cyberpunk2077",
      name: "Cyberpunk 2077",
      price: "₹1,199",
      pv: "1199",
      genre: "RPG",
      desc: "Enter Night City as V, a mercenary chasing immortality in a futuristic world full of technology and corruption. With branching storylines, character customization, and intense combat, the game delivers a unique cyberpunk experience packed with depth and choices.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Ryzen 5",
        ram: "12 GB RAM",
        gpu: "GTX 1060",
        storage: "70 GB"
      }
    },
    
    {
      id: "eldenring",
      name: "Elden Ring",
      price: "₹3,999",
      pv: "3999",
      genre: "Action RPG",
      desc: "Explore the vast Lands Between in a challenging world crafted with deep lore and brutal combat. Every enemy encounter tests your skill, while exploration rewards curiosity. This is a true masterpiece for players who enjoy difficulty and freedom.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "12 GB RAM",
        gpu: "GTX 1060",
        storage: "60 GB"
      }
    },
    
    {
      id: "godofwar",
      name: "God of War",
      price: "₹1,499",
      pv: "1499",
      genre: "Action Adventure",
      desc: "Follow Kratos and his son Atreus on an emotional journey through Norse mythology. The game combines brutal combat with heartfelt storytelling, creating a deeply engaging experience that redefines action-adventure games.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 1060",
        storage: "70 GB"
      }
    },
    
    {
      id: "spiderman",
      name: "Marvel's Spider-Man Remastered",
      price: "₹3,499",
      pv: "3499",
      genre: "Action",
      desc: "Swing through New York City as Spider-Man in one of the best superhero games ever created. With fluid combat, engaging storylines, and a living city, the game delivers pure fun and immersion.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 1060",
        storage: "75 GB"
      }
    },
    
    {
      id: "hogwarts",
      name: "Hogwarts Legacy",
      price: "₹2,999",
      pv: "2999",
      genre: "RPG",
      desc: "Step into the wizarding world and attend Hogwarts in the 1800s. Learn spells, explore magical locations, and uncover hidden secrets. The game delivers a dream experience for Harry Potter fans.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i7",
        ram: "16 GB RAM",
        gpu: "GTX 1080",
        storage: "85 GB"
      }
    },
    
    {
      id: "acodyssey",
      name: "Assassin's Creed Odyssey",
      price: "₹999",
      pv: "999",
      genre: "RPG",
      desc: "Travel to Ancient Greece and shape your destiny as a legendary warrior. The game offers massive exploration, combat, and storytelling in a vibrant historical world.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 970",
        storage: "46 GB"
      }
    },
    
    {
      id: "cs2",
      name: "Counter-Strike 2",
      price: "Free",
      pv: "0",
      genre: "FPS",
      desc: "The ultimate competitive shooter where teamwork, strategy, and precision define victory. With improved graphics and mechanics, CS2 continues its legacy.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i3",
        ram: "4 GB RAM",
        gpu: "GTX 660",
        storage: "25 GB"
      }
    },
    
    {
      id: "pubg",
      name: "PUBG Battlegrounds",
      price: "Free",
      pv: "0",
      genre: "Battle Royale",
      desc: "Drop into a massive map and fight to be the last player standing. Strategy, survival, and quick decisions define every match.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 1060",
        storage: "40 GB"
      }
    },
    
    {
      id: "apex",
      name: "Apex Legends",
      price: "Free",
      pv: "0",
      genre: "Battle Royale",
      desc: "Squad-based battle royale with hero abilities and fast-paced gameplay. Communication and teamwork are key.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 970",
        storage: "56 GB"
      }
    },
    
    {
      id: "forza5",
      name: "Forza Horizon 5",
      price: "₹2,999",
      pv: "2999",
      genre: "Racing",
      desc: "Explore Mexico in a stunning open-world racing experience. Hundreds of cars, dynamic weather, and endless events await.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 970",
        storage: "110 GB"
      }
    },
    
    {
      id: "fifa24",
      name: "EA Sports FC 24",
      price: "₹3,499",
      pv: "3499",
      genre: "Sports",
      desc: "Experience realistic football gameplay with improved physics, animations, and team building modes.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 1050",
        storage: "100 GB"
      }
    },
    
    {
      id: "re4",
      name: "Resident Evil 4 Remake",
      price: "₹3,499",
      pv: "3499",
      genre: "Horror",
      desc: "A modern remake of the classic survival horror game with enhanced visuals, mechanics, and atmosphere.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i7",
        ram: "16 GB RAM",
        gpu: "GTX 1070",
        storage: "60 GB"
      }
    },
    
    {
      id: "hollow",
      name: "Hollow Knight",
      price: "₹349",
      pv: "349",
      genre: "Indie",
      desc: "Explore a beautifully crafted underground world filled with mystery, combat, and secrets.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
      requirements: {
        os: "Windows 7",
        cpu: "Intel i3",
        ram: "4 GB RAM",
        gpu: "Intel HD",
        storage: "9 GB"
      }
    },
    
    {
      id: "hades",
      name: "Hades",
      price: "₹799",
      pv: "799",
      genre: "Roguelike",
      desc: "Fight your way out of the underworld in this fast-paced action roguelike with amazing storytelling.",
      hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
      requirements: {
        os: "Windows 10",
        cpu: "Intel i5",
        ram: "8 GB RAM",
        gpu: "GTX 950",
        storage: "15 GB"
      }
    },

    {
        id: "terraria",
        name: "Terraria",
        price: "₹299",
        pv: "299",
        genre: "Sandbox",
        desc: "Dig, fight, build, and explore in this 2D sandbox adventure packed with bosses, weapons, and secrets. A small game with massive depth and content.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
        requirements: {
            os: "Windows 7",
            cpu: "Intel i3",
            ram: "4 GB RAM",
            gpu: "Intel HD",
            storage: "200 MB"
        }
    },

    {
        id: "watchdogs2",
        name: "Watch Dogs 2",
        price: "₹1,499",
        pv: "1499",
        genre: "Open World",
        desc: "Play as a hacker in San Francisco and take down corrupt systems using gadgets, stealth, and creativity in a vibrant open world.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447040/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 970",
            storage: "50 GB"
        }
    },

    {
        id: "farcry5",
        name: "Far Cry 5",
        price: "₹1,299",
        pv: "1299",
        genre: "FPS",
        desc: "Take down a dangerous cult in rural America using guns, vehicles, and chaos in this explosive open-world shooter.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552520/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 970",
            storage: "40 GB"
        }
    },

    {
        id: "farcry6",
        name: "Far Cry 6",
        price: "₹2,999",
        pv: "2999",
        genre: "FPS",
        desc: "Join a revolution and fight against a dictator in a tropical open world filled with action and destruction.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Ryzen 5",
            ram: "16 GB RAM",
            gpu: "RTX 2060",
            storage: "60 GB"
        }
    },

    {
        id: "sekiro",
        name: "Sekiro Shadows Die Twice",
        price: "₹2,999",
        pv: "2999",
        genre: "Action",
        desc: "Master sword combat and stealth as a shinobi in a brutal and rewarding samurai adventure.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 970",
            storage: "25 GB"
        }
    },

    {
        id: "darksouls3",
        name: "Dark Souls III",
        price: "₹1,999",
        pv: "1999",
        genre: "Action RPG",
        desc: "A challenging and atmospheric RPG where every enemy encounter tests your patience and skill.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 970",
            storage: "25 GB"
        }
    },

    {
        id: "control",
        name: "Control",
        price: "₹1,499",
        pv: "1499",
        genre: "Action",
        desc: "Explore a mysterious agency and gain supernatural powers in this visually stunning action game.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 1060",
            storage: "42 GB"
        }
    },

    {
        id: "alanwake",
        name: "Alan Wake",
        price: "₹799",
        pv: "799",
        genre: "Horror",
        desc: "A psychological thriller where a writer’s nightmares come to life in a haunting narrative experience.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108710/header.jpg",
        requirements: {
            os: "Windows 7",
            cpu: "Intel i3",
            ram: "4 GB RAM",
            gpu: "GTX 460",
            storage: "8 GB"
        }
    },

    {
        id: "outlast",
        name: "Outlast",
        price: "₹499",
        pv: "499",
        genre: "Horror",
        desc: "Investigate a terrifying asylum using only a camera in one of the scariest games ever made.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/header.jpg",
        requirements: {
            os: "Windows 7",
            cpu: "Intel i3",
            ram: "4 GB RAM",
            gpu: "GTX 460",
            storage: "5 GB"
        }
    },

    {
        id: "portal2",
        name: "Portal 2",
        price: "₹399",
        pv: "399",
        genre: "Puzzle",
        desc: "Solve mind-bending puzzles using a portal gun in this critically acclaimed masterpiece.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
        requirements: {
            os: "Windows 7",
            cpu: "Intel i3",
            ram: "4 GB RAM",
            gpu: "GTX 560",
            storage: "8 GB"
        }
    },

    {
        id: "left4dead2",
        name: "Left 4 Dead 2",
        price: "₹299",
        pv: "299",
        genre: "Co-op",
        desc: "Fight through zombie hordes with friends in this classic co-op survival shooter.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg",
        requirements: {
            os: "Windows 7",
            cpu: "Intel i3",
            ram: "4 GB RAM",
            gpu: "GTX 660",
            storage: "13 GB"
        }
    },

    {
        id: "phasmophobia",
        name: "Phasmophobia",
        price: "₹599",
        pv: "599",
        genre: "Horror Co-op",
        desc: "Investigate paranormal activity with friends using ghost-hunting tools in a chilling environment.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 970",
            storage: "20 GB"
        }
    },

    {
        id: "deeprock",
        name: "Deep Rock Galactic",
        price: "₹899",
        pv: "899",
        genre: "Co-op",
        desc: "Team up as space dwarves mining resources and fighting alien creatures in a fun co-op shooter.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 970",
            storage: "30 GB"
        }
    },

    {
        id: "ittakestwo",
        name: "It Takes Two",
        price: "₹1,499",
        pv: "1499",
        genre: "Co-op",
        desc: "A unique co-op adventure where teamwork is required to progress through creative levels.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 970",
            storage: "50 GB"
        }
    },

    {
        id: "amongus",
        name: "Among Us",
        price: "₹199",
        pv: "199",
        genre: "Party",
        desc: "Work together or betray your friends in this fun social deduction multiplayer game.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
        requirements: {
            os: "Windows 7",
            cpu: "Intel i3",
            ram: "4 GB RAM",
            gpu: "Intel HD",
            storage: "250 MB"
        }
    },

    {
        id: "fallguys",
        name: "Fall Guys",
        price: "Free",
        pv: "0",
        genre: "Party",
        desc: "Compete in colorful obstacle courses with chaotic multiplayer fun.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097150/header.jpg",
        requirements: {
            os: "Windows 10",
            cpu: "Intel i5",
            ram: "8 GB RAM",
            gpu: "GTX 660",
            storage: "10 GB"
        }
    },

    {
        id: "hitman3",
        name: "Hitman 3",
        price: "₹2,999",
        pv: "2999",
        genre: "Stealth",
        desc: "Step into the role of Agent 47 and eliminate targets across stunning global locations using strategy, disguise, and precision.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659040/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 970",storage:"80 GB"}
    },

    {
        id: "mafia",
        name: "Mafia Definitive Edition",
        price: "₹1,499",
        pv: "1499",
        genre: "Story",
        desc: "Experience a gripping mafia story set in the 1930s with cinematic storytelling and immersive gameplay.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 1060",storage:"50 GB"}
    },

    {
        id: "mafia2",
        name: "Mafia II",
        price: "₹999",
        pv: "999",
        genre: "Story",
        desc: "Follow Vito Scaletta’s rise in the criminal world with intense missions and a classic narrative.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/50130/header.jpg",
        requirements:{os:"Windows 7",cpu:"Intel i3",ram:"4 GB RAM",gpu:"GTX 660",storage:"20 GB"}
    },

    {
        id: "nfsheat",
        name: "Need for Speed Heat",
        price: "₹1,499",
        pv: "1499",
        genre: "Racing",
        desc: "Race by day and escape the cops by night in this high-speed street racing game.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 1060",storage:"50 GB"}
    },

    {
        id: "nfsunbound",
        name: "Need for Speed Unbound",
        price: "₹3,499",
        pv: "3499",
        genre: "Racing",
        desc: "Stylized racing with bold visuals and intense street competition.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg",
        requirements:{os:"Windows 10",cpu:"Ryzen 5",ram:"16 GB RAM",gpu:"RTX 2060",storage:"50 GB"}
    },

    {
        id: "fallout4",
        name: "Fallout 4",
        price: "₹999",
        pv: "999",
        genre: "RPG",
        desc: "Explore a post-apocalyptic world filled with choices, danger, and survival.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 780",storage:"30 GB"}
    },

    {
        id: "falloutnv",
        name: "Fallout New Vegas",
        price: "₹499",
        pv: "499",
        genre: "RPG",
        desc: "A classic RPG where your decisions shape the wasteland.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/header.jpg",
        requirements:{os:"Windows 7",cpu:"Intel i3",ram:"4 GB RAM",gpu:"Intel HD",storage:"10 GB"}
    },

    {
        id: "skyrim",
        name: "Skyrim",
        price: "₹999",
        pv: "999",
        genre: "RPG",
        desc: "Become the Dragonborn and explore a massive fantasy world full of quests and dragons.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 780",storage:"20 GB"}
    },

    {
        id: "metroexodus",
        name: "Metro Exodus",
        price: "₹1,499",
        pv: "1499",
        genre: "FPS",
        desc: "Survive in a post-apocalyptic Russia with immersive storytelling and survival mechanics.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i7",ram:"8 GB RAM",gpu:"GTX 1070",storage:"60 GB"}
    },
    
    {
        id: "metro2033",
        name: "Metro 2033",
        price: "₹499",
        pv: "499",
        genre: "FPS",
        desc: "A survival shooter set in the underground tunnels of Moscow.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/286690/header.jpg",
        requirements:{os:"Windows 7",cpu:"Intel i3",ram:"4 GB RAM",gpu:"GTX 460",storage:"10 GB"}
    },

    {
        id: "doom2016",
        name: "DOOM (2016)",
        price: "₹799",
        pv: "799",
        genre: "FPS",
        desc: "Fast-paced demon-slaying action with brutal combat and heavy metal vibes.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 970",storage:"55 GB"}
    },

    {
        id: "prey",
        name: "Prey",
        price: "₹1,199",
        pv: "1199",
        genre: "Sci-Fi",
        desc: "Fight alien threats aboard a space station in a mysterious sci-fi thriller.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 970",storage:"20 GB"}
    },

    {
        id: "dishonored2",
        name: "Dishonored 2",
        price: "₹999",
        pv: "999",
        genre: "Stealth",
        desc: "Use supernatural powers to navigate a world of political intrigue and assassination.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 1060",storage:"60 GB"}
    },

    {
        id: "dishonored",
        name: "Dishonored",
        price: "₹499",
        pv: "499",
        genre: "Stealth",
        desc: "A stealth-action masterpiece where your choices define the story.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/header.jpg",
        requirements:{os:"Windows 7",cpu:"Intel i3",ram:"4 GB RAM",gpu:"GTX 460",storage:"10 GB"}
    },

    {
        id: "deadspace",
        name: "Dead Space",
        price: "₹2,999",
        pv: "2999",
        genre: "Horror",
        desc: "A terrifying space horror experience with intense survival gameplay.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693980/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"16 GB RAM",gpu:"RTX 2070",storage:"50 GB"}
    },

    {
        id: "starfield",
        name: "Starfield",
        price: "₹4,999",
        pv: "4999",
        genre: "RPG",
        desc: "Explore the universe in Bethesda’s massive space RPG filled with planets and adventures.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg",
        requirements:{os:"Windows 10",cpu:"Ryzen 5",ram:"16 GB RAM",gpu:"RTX 3060",storage:"125 GB"}
    },

    {
        id: "no_mans_sky",
        name: "No Man's Sky",
        price: "₹1,499",
        pv: "1499",
        genre: "Space",
        desc: "Explore infinite procedurally generated planets in this space adventure.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 1060",storage:"15 GB"}
    },

    {
        id: "outerworlds",
        name: "The Outer Worlds",
        price: "₹1,999",
        pv: "1999",
        genre: "RPG",
        desc: "A story-driven RPG with choices that impact the universe.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578650/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 970",storage:"40 GB"}
    },

    {
        id: "ark",
        name: "ARK Survival Evolved",
        price: "₹1,199",
        pv: "1199",
        genre: "Survival",
        desc: "Tame dinosaurs and survive in a prehistoric open world.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 970",storage:"60 GB"}
    },

    {
        id: "rust",
        name: "Rust",
        price: "₹1,299",
        pv: "1299",
        genre: "Survival",
        desc: "A brutal survival game where players must gather resources and fight to stay alive.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"10 GB RAM",gpu:"GTX 1050",storage:"25 GB"}
    },

    {
        id: "valheim",
        name: "Valheim",
        price: "₹699",
        pv: "699",
        genre: "Survival",
        desc: "Explore a Viking world filled with myth and monsters.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 950",storage:"1 GB"}
    },

    {
        id: "sonsforest",
        name: "Sons of the Forest",
        price: "₹1,499",
        pv: "1499",
        genre: "Survival",
        desc: "A sequel to The Forest with enhanced survival mechanics and visuals.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i7",ram:"16 GB RAM",gpu:"RTX 2060",storage:"20 GB"}
    },

    {
        id: "rainbowsix",
        name: "Rainbow Six Siege",
        price: "₹799",
        pv: "799",
        genre: "FPS",
        desc: "A tactical shooter focused on strategy, teamwork, and destructible environments.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 970",storage:"61 GB"}
    },

    {
        id: "overwatch2",
        name: "Overwatch 2",
        price: "Free",
        pv: "0",
        genre: "FPS",
        desc: "Team-based shooter with heroes and abilities in dynamic matches.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 1060",storage:"50 GB"}
    },

    {
        id: "gtaiv",
        name: "GTA IV",
        price: "₹799",
        pv: "799",
        genre: "Open World",
        desc: "Follow Niko Bellic in a gritty story set in Liberty City.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12210/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"4 GB RAM",gpu:"GTX 660",storage:"22 GB"}
    },

    {
        id: "bully",
        name: "Bully Scholarship Edition",
        price: "₹499",
        pv: "499",
        genre: "Open World",
        desc: "Experience school life chaos in Rockstar’s unique open-world game.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12200/header.jpg",
        requirements:{os:"Windows 7",cpu:"Intel i3",ram:"2 GB RAM",gpu:"Intel HD",storage:"5 GB"}
    },

    {
        id: "sleepdogs",
        name: "Sleeping Dogs",
        price: "₹799",
        pv: "799",
        genre: "Open World",
        desc: "Undercover cop drama set in Hong Kong with intense combat.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/307690/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 660",storage:"20 GB"}
    },

    {
        id: "tombraider",
        name: "Tomb Raider",
        price: "₹699",
        pv: "699",
        genre: "Adventure",
        desc: "Follow Lara Croft’s origin story in this action-packed reboot.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"6 GB RAM",gpu:"GTX 660",storage:"25 GB"}
    },
    
    {
        id: "riseoftombraider",
        name: "Rise of the Tomb Raider",
        price: "₹999",
        pv: "999",
        genre: "Adventure",
        desc: "Continue Lara Croft’s journey with exploration and survival elements.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391220/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 970",storage:"35 GB"}
    },

    {
        id: "shadowtombraider",
        name: "Shadow of the Tomb Raider",
        price: "₹1,499",
        pv: "1499",
        genre: "Adventure",
        desc: "The final chapter of Lara Croft’s origin trilogy.",
        hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/750920/header.jpg",
        requirements:{os:"Windows 10",cpu:"Intel i5",ram:"8 GB RAM",gpu:"GTX 1060",storage:"40 GB"}
    }
];
  
  let chatHistory=[];
  
  function goTo(page){
    document.querySelectorAll('.page,.inner-page').forEach(p=>p.classList.remove('active'));
    const fab=document.getElementById('cfab');
    if(['games','offers','support','about','profile','detail','buy'].includes(page)){
      document.getElementById('pg-inner').classList.add('active');
      fab.style.display='flex';
      renderInner(page);
    } else {
      const el=document.getElementById('pg-'+page);
      if(el) el.classList.add('active');
      fab.style.display='none';
    }
  }
  
  function navTo(sec,extra){
    document.querySelectorAll('.sl').forEach(l=>l.classList.toggle('active',l.dataset.n===sec));
    renderInner(sec,extra);
  }
  
  function renderInner(sec,extra){
    const m=document.getElementById('mainArea');
    if(sec==='games') m.innerHTML=renderGames();
    else if(sec==='offers') m.innerHTML=renderOffers();
    else if(sec==='support') m.innerHTML=renderSupport();
    else if(sec==='about') m.innerHTML=renderAbout();
    else if(sec==='profile') m.innerHTML=renderProfile();
    else if(sec==='detail') m.innerHTML=renderDetail(extra);
    else if(sec==='buy') m.innerHTML=renderBuy(extra);
    else m.innerHTML=renderGames();
  }
  
  function renderGames(){
    return `<h1 class="pt">Discover Games 🎮</h1>
    <div class="glist">
      ${GAMES.map(g => `
        <div class="gcard">
          <img src="${g.hero}" loading="lazy">
          <div class="gcb">
            <h3>${g.name}</h3>
            <p class="genre">${g.genre}</p>
            <div class="vbtn" onclick="navTo('detail','${g.id}')">View Game →</div>
          </div>
        </div>
      `).join('')}
    </div>`;
  }
  
  function renderDetail(key){
    const g = GAMES.find(game => game.id === key);
  
    return `
      <h1 class="pt">${g.name}</h1>
  
      <img src="${g.hero}" class="ghero" loading="lazy">
  
      <p class="gdesc">${g.desc}</p>
  
      <div class="req-box">
        <h3>System Requirements</h3>
        <ul>
          <li><strong>OS:</strong> ${g.requirements.os}</li>
          <li><strong>CPU:</strong> ${g.requirements.cpu}</li>
          <li><strong>RAM:</strong> ${g.requirements.ram}</li>
          <li><strong>GPU:</strong> ${g.requirements.gpu}</li>
          <li><strong>Storage:</strong> ${g.requirements.storage}</li>
        </ul>
      </div>
  
      <div class="prow">
        <span class="ptag">${g.price}</span>
        <button class="bbtn" onclick="navTo('buy','${key}')">Buy Now</button>
      </div>
  
      <div class="vbtn" onclick="navTo('games')" style="margin-top:20px">
        ← Back to Games
      </div>
    `;
  }
  
  function renderOffers(){
    const offs = [
        {key:'gtav', old:'₹1299', nw:'₹999', disc:'23% OFF'},
        {key:'witcher3', old:'₹1499', nw:'₹1299', disc:'13% OFF'},
      
        {key:'rdr2', old:'₹3999', nw:'₹1399', disc:'65% OFF'},
        {key:'cyberpunk2077', old:'₹2999', nw:'₹1199', disc:'60% OFF'},
        {key:'eldenring', old:'₹4999', nw:'₹3499', disc:'30% OFF'},
        {key:'godofwar', old:'₹2499', nw:'₹1499', disc:'40% OFF'},
        {key:'spiderman', old:'₹3999', nw:'₹2499', disc:'38% OFF'},
        {key:'hogwarts', old:'₹3999', nw:'₹2999', disc:'25% OFF'},
        {key:'acodyssey', old:'₹2999', nw:'₹999', disc:'66% OFF'},
        {key:'farcry5', old:'₹2499', nw:'₹1299', disc:'48% OFF'},
        {key:'farcry6', old:'₹3999', nw:'₹2099', disc:'48% OFF'},
        {key:'watchdogs2', old:'₹2499', nw:'₹1499', disc:'40% OFF'},
        {key:'sekiro', old:'₹3999', nw:'₹2999', disc:'25% OFF'},
        {key:'darksouls3', old:'₹2999', nw:'₹1999', disc:'33% OFF'},
        {key:'control', old:'₹2499', nw:'₹1499', disc:'40% OFF'},
        {key:'alanwake', old:'₹1499', nw:'₹799', disc:'47% OFF'},
        {key:'outlast', old:'₹999', nw:'₹499', disc:'50% OFF'},
        {key:'portal2', old:'₹699', nw:'₹399', disc:'43% OFF'},
        {key:'left4dead2', old:'₹599', nw:'₹299', disc:'50% OFF'},
        {key:'phasmophobia', old:'₹999', nw:'₹599', disc:'40% OFF'},
        {key:'deeprock', old:'₹1499', nw:'₹899', disc:'40% OFF'},
        {key:'ittakestwo', old:'₹2499', nw:'₹1499', disc:'40% OFF'},
        {key:'fallguys', old:'₹999', nw:'Free', disc:'100% OFF'},
        {key:'forza5', old:'₹3999', nw:'₹2299', disc:'42% OFF'},
        {key:'fifa24', old:'₹4499', nw:'₹2999', disc:'33% OFF'}
    ];
  
    return `<h1 class="pt">Special Offers 🔥</h1>
    ${offs.map(o => {
      const g = GAMES.find(game => game.id === o.key);
      return `
        <div class="ocard">
          <img src="${g.hero}" loading="lazy">
          <div class="ob">
            <h3>${g.name}</h3>
            <div class="dbadge">${o.disc}</div>
            <p class="oldp">${o.old}</p>
            <p class="newp">${o.nw}</p>
            <button class="bbtn" onclick="navTo('buy','${o.key}')">Buy Now</button>
          </div>
        </div>
      `;
    }).join('')}`;
  }
  
  function renderSupport(){
    return`<h1 class="pt">Support 📞</h1><div class="sinfo"><p><strong>Email:</strong> support@gamehub.com</p><p><strong>Phone:</strong> +91 98765 43210</p><p><strong>Hours:</strong> 24/7 — Always here for gamers.</p></div><div class="sform"><h3>Request a Game or Report an Issue</h3><textarea class="sta" id="issueBox" placeholder="Describe your issue or request..."></textarea><button class="ssbtn" id="ssBtn" onclick="submitSup()">Submit Request</button></div>`;
  }
  
  function submitSup(){
    const v=document.getElementById('issueBox').value.trim();
    const b=document.getElementById('ssBtn');
    if(!v){alert('Please enter your issue first.');return;}
    b.textContent='✔ Submitted!';b.style.background='#22c55e';b.style.color='#000';b.disabled=true;
  }
  
  function renderAbout(){
    return `
    <h1 class="pt">About Game Hub</h1>
  
    <div class="asec">
      <h2>Who We Are</h2>
      <p>Game Hub is an online gaming store where players can explore, purchase and enjoy top-rated games at affordable prices.</p>
    </div>
  
    <div class="asec">
      <h2>Our Mission</h2>
      <p>Secure payments, instant digital access, and the best gaming deals — making great games accessible to everyone.</p>
    </div>
  
    <div class="asec">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>🔒 Secure Payment System</li>
        <li>⚡ Instant Digital Access</li>
        <li>🕐 24/7 Customer Support</li>
        <li>🏷️ Exclusive Gaming Discounts</li>
        <li>🎮 Curated Game Collection</li>
      </ul>
    </div>
  
    <div class="asec">
      <h2>Our Team</h2>
  
      <div class="tgrid">
  
        <div class="tc">
          <div class="tav">👨‍💻</div>
          <h4>Abhinash Chinhara</h4>
        </div>
  
        <div class="tc">
          <div class="tav">👨‍💻</div>
          <h4>Aditya Tanaya Sahoo</h4>
        </div>
  
        <div class="tc">
          <div class="tav">👨‍💻</div>
          <h4>Sovik Burma</h4>
        </div>
  
        <div class="tc">
          <div class="tav">👨‍🎨</div>
          <h4>Dishita Garg</h4>
        </div>

        <div class="tc">
          <div class="tav">👨‍🎨</div>
          <h4>Rajnandini Sahoo</h4>
        </div>

      </div>
    </div>
    `;
  }
  
  function renderProfile(){
    const u=getUser();
    if(!u)return`<h1 class="pt">Profile</h1><div class="prcard"><p style="color:var(--text2);font-size:14px">No profile found. Please <span style="color:var(--gold);cursor:pointer" onclick="goTo('login')">login</span> or <span style="color:var(--gold);cursor:pointer" onclick="goTo('register')">register</span>.</p></div>`;
    return`<h1 class="pt">My Profile</h1><div class="prcard"><div class="prav">👤</div><div class="prrow"><span>Name</span><span>${u.name}</span></div><div class="prrow"><span>Email</span><span>${u.email}</span></div><div class="prrow"><span>Phone</span><span>${u.phone}</span></div><button class="lobtn" onclick="doLogout()">Log Out</button><button class="dbtn" onclick="doDelete()">Delete Account</button></div>`;
  }
  
  function renderBuy(key){
    const g = GAMES.find(game => game.id === key);
    return`<h1 class="pt">Checkout</h1><div class="cocard" id="coBox"><h2>${g.name}</h2><div class="coprice">${g.price}</div><p class="plbl">Select Payment Method:</p><label class="popt"><input type="radio" name="pay" value="upi"> UPI / Google Pay</label><label class="popt"><input type="radio" name="pay" value="card"> Credit / Debit Card</label><label class="popt"><input type="radio" name="pay" value="nb"> Net Banking</label><label class="popt"><input type="radio" name="pay" value="cod"> Cash on Delivery</label><div id="errB" class="errbox">⚠️ Please select a payment method.</div><button class="cfbtn" onclick="confirmPay('${g.name}')">Confirm & Pay</button></div><div class="sucmsg" id="sucBox" style="display:none"><div class="sucicon">🎉</div><h2>Payment Successful!</h2><p>You've purchased <strong>${g.name}</strong>.<br>Enjoy your game!</p><button class="bbtn" onclick="navTo('games')" style="margin-top:22px">Back to Games</button></div>`;
  }
  
  function confirmPay(name){
    const s=document.querySelector('input[name="pay"]:checked');
    if(!s){document.getElementById('errB').style.display='block';return;}
    document.getElementById('coBox').style.display='none';
    document.getElementById('sucBox').style.display='block';
  }
  
  function getUser(){try{return JSON.parse(localStorage.getItem('ghU'))||null;}catch{return null;}}
  
  function doLogin(){
    const e=document.getElementById('lEmail').value.trim().toLowerCase();
    const p=document.getElementById('lPwd').value;
    const m=document.getElementById('lMsg');
    const u=getUser();
    if(!u){m.textContent='No account found. Please register.';m.style.color='orange';return;}
    if(e===u.email&&p===u.password){m.textContent='✔ Logging in...';m.style.color='#22c55e';setTimeout(()=>goTo('games'),900);}
    else{m.textContent='Wrong credentials. Try again.';m.style.color='#ef4444';}
  }
  
  function doRegister(){
    const n=document.getElementById('rName').value.trim();
    const e=document.getElementById('rEmail').value.trim().toLowerCase();
    const ph=document.getElementById('rPhone').value.trim();
    const p=document.getElementById('rPwd').value;
    const m=document.getElementById('rMsg');
    if(!n||!e||!ph||!p){m.textContent='Please fill all fields.';m.style.color='orange';return;}
    localStorage.setItem('ghU',JSON.stringify({name:n,email:e,phone:ph,password:p}));
    m.textContent='✔ Registered! Redirecting...';m.style.color='#22c55e';
    setTimeout(()=>goTo('login'),1100);
  }
  
  function doLogout(){goTo('home');}
  function doDelete(){if(confirm('Delete your account?')){localStorage.removeItem('ghU');goTo('home');}}
  
  function updateClock(){const el=document.getElementById('clk');if(el)el.textContent=new Date().toLocaleTimeString();}
  setInterval(updateClock,1000);
  
  function toggleTheme(){
    document.body.classList.toggle('light');
    document.getElementById('themeBtn').classList.toggle('lit');
    localStorage.setItem('ghTheme',document.body.classList.contains('light')?'light':'dark');
  }
  if(localStorage.getItem('ghTheme')==='light'){
    document.body.classList.add('light');
    setTimeout(()=>{const b=document.getElementById('themeBtn');if(b)b.classList.add('lit');},0);
  }
  
  // ===== GAMEBOT AI (OpenAI) =====
  // 🔑 Paste your OpenAI API key here — visitors chat instantly, no setup needed
  const BOT_SYSTEM = `You are GameBot AI, a friendly and expert assistant for Game Hub — an online gaming store.
  
  You have TWO core jobs:
  
  1. GAME RECOMMENDATIONS: When a user shares their taste, genre, mood, or platform, recommend the best matching games worldwide. For each game include: name, developer, release year, platforms, and a 1-sentence reason why they will love it. Number them clearly and use gaming emojis naturally.
  
  2. WEBSITE GUIDE: Help users navigate Game Hub. Here is how the site works:
     - HOME: Landing page — click "GAME ON" to enter the store.
     - LOGIN / REGISTER: Create an account or sign in to access the store.
     - GAMES (sidebar): Browse all games — GTA V (₹1,299), The Witcher 3 (₹1,499), Minecraft (₹499). Click "View Game" to see details, screenshots, and a Buy Now button.
     - OFFERS (sidebar): Discounted games — GTA V at ₹999 (23% off), Witcher 3 at ₹1,299 (13% off), Minecraft at ₹499 (29% off).
     - SUPPORT (sidebar): Contact info and a form to report issues or request new games.
     - ABOUT US (sidebar): Learn about Game Hub's mission and team.
     - PROFILE (sidebar or top-right icon): View your name, email, phone, log out, or delete account.
     - CHECKOUT: Pick a payment method (UPI/Google Pay, Credit/Debit Card, Net Banking, Cash on Delivery) then click Confirm & Pay.
     - THEME TOGGLE: The switch in the top-right bar toggles between dark and light mode.
  
  Always be warm, concise, and gamer-friendly. Keep replies under 220 words unless a detailed game list is requested.`;
  
  function toggleChat(){
    const w=document.getElementById('cwin');
    w.classList.toggle('open');
    if(w.classList.contains('open')){
      setTimeout(()=>{const i=document.getElementById('cinp');if(i)i.focus();},120);
    }
  }
  
  function appendMsg(txt,cls){
    const c=document.getElementById('cmsgs');
    const d=document.createElement('div');
    d.className='cmsg '+cls;
    d.innerHTML=txt;
    c.appendChild(d);
    c.scrollTop=c.scrollHeight;
    return d;
  }
  
  function qs(txt){
    document.getElementById('cinp').value=txt;
    document.getElementById('qrow').style.display='none';
    sendMsg();
  }
  
  function sendMsg(){
    const inp=document.getElementById('cinp');
    const btn=document.getElementById('csend');
    const txt=inp.value.trim();
    if(!txt)return;
  
    appendMsg(esc(txt),'user');
    chatHistory.push({role:'user',content:txt});
  
    inp.value='';
    inp.disabled=true;
    btn.disabled=true;
  
    document.getElementById('qrow').style.display='none';
  
    const typing=appendMsg('Thinking...','typing');
  
    // ✅ PUT FETCH HERE
    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: BOT_SYSTEM },
          ...chatHistory.slice(-12)
        ]
      })
    })
    .then(r=>r.json())
    .then(d=>{
      console.log("API RESPONSE:", d); // 🔥 debug
  
      if(typing.parentNode) typing.parentNode.removeChild(typing);
  
      let reply='';
      if(d.choices && d.choices[0]){
        reply=d.choices[0].message.content;
        chatHistory.push({role:'assistant',content:reply});
      } else if(d.error){
        reply='⚠️ Error: ' + (d.error.message || JSON.stringify(d.error));
      } else {
        reply='⚠️ Unexpected response. Please try again.';
      }
  
      appendMsg(fmt(reply),'bot');
    })
    .catch(err=>{
      if(typing.parentNode) typing.parentNode.removeChild(typing);
      appendMsg('⚠️ Network error. Please try again.','bot');
      console.error(err);
    })
    .finally(()=>{
      inp.disabled=false;
      btn.disabled=false;
      inp.focus();
    });
  
  }
  
  function fmt(t){
    return t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>').replace(/\n/g,'<br>');
  }
  function esc(t){const d=document.createElement('div');d.appendChild(document.createTextNode(t));return d.innerHTML;}
  
  goTo('home');
