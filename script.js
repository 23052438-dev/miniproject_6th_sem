const GAMES = [
  // ── ACTION / OPEN WORLD ──
  {
    id: "gtav",
    name: "Grand Theft Auto V",
    price: "₹1,299", pv: "1299",
    genre: "Open World Action",
    desc: "Three criminals pull off heists across the sprawling city of Los Santos in this landmark open-world action game.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_a7055750ec896b08a5ca24eb7a89b5a44d9af625.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_f40ecf173d11b831d44f97973c569a7a55c2b09.jpg"
    ]
  },
  {
    id: "witcher3",
    name: "The Witcher 3: Wild Hunt",
    price: "₹1,499", pv: "1499",
    genre: "RPG",
    desc: "As Geralt of Rivia, hunt monsters and shape an epic narrative across a breathtaking dark-fantasy open world.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_eda99e6a70c1b8be44f5e3e56d40a56a78b6ae48.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_eda99e6a70c1b8be44f5e3e56d40a56a78b6ae48.jpg"
    ]
  },
  {
    id: "rdr2",
    name: "Red Dead Redemption 2",
    price: "₹1,399", pv: "1399",
    genre: "Open World Action",
    desc: "Arthur Morgan navigates loyalty, survival, and morality in the twilight of the American frontier.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3f4af0e37363e6f5e4cd89ba.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bfe1b5b7e7ad9a44b925f1598ce6b9a487dfd35c.jpg"
    ]
  },
  {
    id: "cyberpunk2077",
    name: "Cyberpunk 2077",
    price: "₹1,199", pv: "1199",
    genre: "RPG / Open World",
    desc: "Become mercenary V in the neon-drenched Night City, making choices that reshape body, soul, and destiny.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_b529b0abd9a4fdc5b5d207d9bc7bd2a3ef9b47a7.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_23e9e5b1f7d738c0dd39e496faf62f51d22b1cce.jpg"
    ]
  },
  {
    id: "eldenring",
    name: "Elden Ring",
    price: "₹3,999", pv: "3999",
    genre: "Action RPG",
    desc: "Explore the Lands Between in this challenging open-world soulsborne game crafted with George R. R. Martin.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3251543b8026.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_b7db0786aca03413c17cc898c3c190de1df0b1b7.jpg"
    ]
  },
  {
    id: "godofwar",
    name: "God of War",
    price: "₹1,499", pv: "1499",
    genre: "Action Adventure",
    desc: "Kratos and his son Atreus journey through the brutal Norse realms in a deeply emotional action epic.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_be5ea3a6c935e399cce6e659f1fc8716eba93bc3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_83a74a761d9efbcce04af41de6e74e33cf20462c.jpg"
    ]
  },
  {
    id: "spiderman",
    name: "Marvel's Spider-Man Remastered",
    price: "₹3,499", pv: "3499",
    genre: "Action Adventure",
    desc: "Swing through a stunningly realised New York as Peter Parker in the most polished superhero game ever made.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_03cf56a89a3f2f9c2abd1278f2e455c1f08cbec4.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_e3e3b06cbabf1be1e0bd58dd4f6494e0aadc5697.jpg"
    ]
  },
  {
    id: "hogwartslegacy",
    name: "Hogwarts Legacy",
    price: "₹2,999", pv: "2999",
    genre: "Action RPG",
    desc: "Attend Hogwarts in the 1800s, master magic, and uncover a hidden rebellion threatening the wizarding world.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_cb15dc02a2401f2ce25d21bfc45bb89ea2d7e0de.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_44c5b45a29ec10e7a2d9c90e42ccc8c80d61e5e0.jpg"
    ]
  },
  {
    id: "assassinscreedodyssey",
    name: "Assassin's Creed Odyssey",
    price: "₹999", pv: "999",
    genre: "Action RPG",
    desc: "Choose your warrior in Ancient Greece and forge your own legend in this sprawling mythological RPG.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/ss_7737e3f8e342cf4d83e3eb8be00c73e6cb54ab10.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/ss_e9f0fee7be2b5e7b00c1c2b71fcfb1c3d3a0ab4c.jpg"
    ]
  },

  // ── FPS / SHOOTER ──
  {
    id: "csgo",
    name: "Counter-Strike 2",
    price: "Free", pv: "0",
    genre: "FPS",
    desc: "The world's most competitive tactical shooter, rebuilt on Source 2 with stunning smoke and lighting upgrades.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_34090867f1a02b6c3140d4a81748eeaf5a81dfb8.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_ae441cd51e9aff0a2dd0fd8ea4b5bb81c0ef47ee.jpg"
    ]
  },
  {
    id: "valorant",
    name: "Valorant",
    price: "Free", pv: "0",
    genre: "Tactical FPS",
    desc: "5v5 tactical FPS where agents with unique abilities clash in precision gunfights across vibrant maps.",
    hero: "https://www.riotgames.com/darkroom/1440/d0807e131a84b2b16b6e/valorant-702.jpg",
    imgs: [
      "https://www.riotgames.com/darkroom/1440/b109a51ae5b87489cd28/valorant-702.jpg",
      "https://www.riotgames.com/darkroom/1440/b109a51ae5b87489cd28/valorant-702.jpg"
    ]
  },
  {
    id: "cod-mw3",
    name: "Call of Duty: Modern Warfare III",
    price: "₹4,499", pv: "4499",
    genre: "FPS",
    desc: "Return to the Modern Warfare universe with remastered Multiplayer maps and an intense open-world campaign.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/ss_4b31b2bc4c3e4ef3de7b6af36c96c4eaaf7fb3ba.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/ss_e3b1c0c42db69d26b064a07a1c8ad31c5b9ee5c1.jpg"
    ]
  },
  {
    id: "battlefield2042",
    name: "Battlefield 2042",
    price: "₹799", pv: "799",
    genre: "FPS",
    desc: "Large-scale warfare across futuristic battlegrounds with 128-player lobbies and dynamic weather events.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/ss_79dc77cfc82e9f7e8e28b2c5e21e9a3a0d6db95f.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/ss_ed5bda8f4b03cf9a6b86b6f41e1dab6e1aadf2fa.jpg"
    ]
  },
  {
    id: "doom-eternal",
    name: "DOOM Eternal",
    price: "₹999", pv: "999",
    genre: "FPS",
    desc: "Rip and tear through Hell's armies at breakneck speed in the ultimate push-forward combat shooter.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_2e07c5c0da55a783e33b2bdfe6b8cedbf71bef02.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_78aa64a0d37087e8e87f0c2965b9fbbaf5c7ec0c.jpg"
    ]
  },
  {
    id: "halo-infinite",
    name: "Halo Infinite",
    price: "₹2,999", pv: "2999",
    genre: "FPS",
    desc: "Master Chief returns to an open Zeta Halo ring in a campaign that blends classic and modern Halo design.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/ss_6e18d1de03fe9a3cda1d3b05e9ed3e42e16b44e3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/ss_37b1e1d6c73cf38eeee9a96aa8ef4b46e0a1a4e1.jpg"
    ]
  },
  {
    id: "titanfall2",
    name: "Titanfall 2",
    price: "₹399", pv: "399",
    genre: "FPS",
    desc: "Wall-run, parkour, and pilot giant mechs in one of gaming's most underrated campaigns and multiplayers.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1237970/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1237970/ss_aa10b6c2c3fb6f65f52aba5dfefd14d50e7fcefc.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1237970/ss_77ec6d62f8eb87df0e7e6a64dce2028eff3d4c10.jpg"
    ]
  },
  {
    id: "borderlands3",
    name: "Borderlands 3",
    price: "₹1,499", pv: "1499",
    genre: "FPS / Looter Shooter",
    desc: "Billions of procedurally generated guns await in this irreverent co-op looter shooter across alien worlds.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_cf93b4e6e37aa0a26b99f2e2b8ff8bb28e43c9fe.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_48f80e69f86a1826c32e56ebb19ba50cee6a3a37.jpg"
    ]
  },
  {
    id: "bioshock-infinite",
    name: "BioShock Infinite",
    price: "₹699", pv: "699",
    genre: "FPS",
    desc: "Soar through the sky city of Columbia in this award-winning shooter packed with twists and rich lore.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/ss_e53c3f2e3280f7a7cd54b8bfca1e10fc8285e2f2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/ss_50e1484ee4fb0fde9cbae50ed1e1e01e3e6ef1de.jpg"
    ]
  },

  // ── BATTLE ROYALE ──
  {
    id: "pubg",
    name: "PUBG: Battlegrounds",
    price: "Free", pv: "0",
    genre: "Battle Royale",
    desc: "The original battle royale — 100 players parachute onto an island where only one can survive.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/ss_e1ac6a0a5b8dcaa06b14e89caa8f5e1e4b1a3ed2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/ss_b9e3e2b3fe2db3a18b04e3e2e9b7d03af44e4e50.jpg"
    ]
  },
  {
    id: "fortnite",
    name: "Fortnite",
    price: "Free", pv: "0",
    genre: "Battle Royale",
    desc: "Build, battle, and outlast 99 others in the world's biggest battle royale with constant seasonal updates.",
    hero: "https://cdn2.unrealengine.com/en-22br-zerobuild-keyart-1920x1080-1920x1080-829322040.jpg",
    imgs: [
      "https://cdn2.unrealengine.com/en-22br-zerobuild-keyart-1920x1080-1920x1080-829322040.jpg",
      "https://cdn2.unrealengine.com/en-22br-zerobuild-keyart-1920x1080-1920x1080-829322040.jpg"
    ]
  },
  {
    id: "apexlegends",
    name: "Apex Legends",
    price: "Free", pv: "0",
    genre: "Battle Royale",
    desc: "Squad-based battle royale with ping-based communication and a diverse roster of ability-driven legends.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/ss_2cd59ffd3ea2fe65e30e9d6de08e8ab3e7f31e90.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/ss_14bb9ac9e9e9e9a5a30e1e2b1d5b4a2a1e7c2b4f.jpg"
    ]
  },
  {
    id: "warzone",
    name: "Call of Duty: Warzone",
    price: "Free", pv: "0",
    genre: "Battle Royale",
    desc: "Free-to-play massive battle royale set in the Call of Duty universe with Gulag respawn mechanics.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/ss_c78b9e9e2d95dbf34de3c2cf5b2ef8a85aabd2bc.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/ss_c78b9e9e2d95dbf34de3c2cf5b2ef8a85aabd2bc.jpg"
    ]
  },

  // ── SPORTS / RACING ──
  {
    id: "fifa24",
    name: "EA Sports FC 24",
    price: "₹3,499", pv: "3499",
    genre: "Sports",
    desc: "The world's #1 football game returns with HyperMotionV technology and an expanded Ultimate Team.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/ss_3db78be4a89b5cdcde1ab09dd1b5a5e19b765d08.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/ss_7e1c2c2b9e9e9a5a30e1e2b1d5b4a2a1e7c2b4f.jpg"
    ]
  },
  {
    id: "nba2k24",
    name: "NBA 2K24",
    price: "₹2,999", pv: "2999",
    genre: "Sports",
    desc: "Courtside realism with Mamba Moments celebrating Kobe Bryant's legacy and refined ProPlay mechanics.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/ss_1e3f4a2e3b3e3b3e3b3e3b3e3b3e3b3e3b3e3b3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/ss_1e3f4a2e3b3e3b3e3b3e3b3e3b3e3b3e3b3e3b3.jpg"
    ]
  },
  {
    id: "forza-horizon5",
    name: "Forza Horizon 5",
    price: "₹2,999", pv: "2999",
    genre: "Racing",
    desc: "Drive hundreds of cars across a gorgeous open-world Mexico in the definitive open-world racing experience.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_a0b3e9a5fa73b68cb6e31ff4b0c5e8c4a2a1d3f4.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_c0d4e9a5fa73b68cb6e31ff4b0c5e8c4a2a1d3f4.jpg"
    ]
  },
  {
    id: "f1-23",
    name: "F1 23",
    price: "₹2,499", pv: "2499",
    genre: "Racing",
    desc: "Take the wheel of an official F1 car with a story-driven Braking Point 2 mode and improved physics.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg"
    ]
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    price: "Free", pv: "0",
    genre: "Sports / Racing",
    desc: "Rocket-powered cars play football in a physics-based spectacle that takes minutes to learn and years to master.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/ss_b1e1b2e2b3e3b4e4b5e5b6e6b7e7b8e8b9e9b0e0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/ss_b1e1b2e2b3e3b4e4b5e5b6e6b7e7b8e8b9e9b0e0.jpg"
    ]
  },

  // ── SURVIVAL / HORROR ──
  {
    id: "re4-remake",
    name: "Resident Evil 4 Remake",
    price: "₹3,499", pv: "3499",
    genre: "Survival Horror",
    desc: "The legendary 2005 survival horror is rebuilt from the ground up with stunning visuals and refined combat.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_a9d3bab3e3c5e8f0b9c7a6d5e4f3a2b1c0d9e8f7.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.jpg"
    ]
  },
  {
    id: "the-forest",
    name: "The Forest",
    price: "₹499", pv: "499",
    genre: "Survival Horror",
    desc: "Survive as the lone survivor of a plane crash on a cannibal-inhabited peninsula — build, explore, and endure.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0.jpg"
    ]
  },
  {
    id: "subnautica",
    name: "Subnautica",
    price: "₹799", pv: "799",
    genre: "Survival",
    desc: "Dive into an alien ocean world, gather resources and build underwater bases while uncovering a strange story.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg"
    ]
  },
  {
    id: "green-hell",
    name: "Green Hell",
    price: "₹799", pv: "799",
    genre: "Survival",
    desc: "Survive the Amazon jungle armed with nothing but your wits and a desperate will to escape.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/ss_f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/ss_f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1.jpg"
    ]
  },
  {
    id: "dying-light2",
    name: "Dying Light 2 Stay Human",
    price: "₹1,999", pv: "1999",
    genre: "Survival Action",
    desc: "Parkour across a zombie-infested city where your choices reshape the world and the daylight is your lifeline.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/534380/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/534380/ss_c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/534380/ss_c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2.jpg"
    ]
  },

  // ── INDIE / PLATFORMER ──
  {
    id: "hollow-knight",
    name: "Hollow Knight",
    price: "₹349", pv: "349",
    genre: "Metroidvania",
    desc: "Explore a vast underground kingdom of insects in this hand-drawn action adventure with exceptional depth.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0.jpg"
    ]
  },
  {
    id: "celeste",
    name: "Celeste",
    price: "₹599", pv: "599",
    genre: "Platformer",
    desc: "Help Madeline survive her inner demons and climb Celeste Mountain in a challenging, heartfelt platformer.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.jpg"
    ]
  },
  {
    id: "hades",
    name: "Hades",
    price: "₹799", pv: "799",
    genre: "Roguelite",
    desc: "Defy the god of death and battle out of the Underworld in this addictive roguelite with brilliant writing.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0.jpg"
    ]
  },
  {
    id: "stardew-valley",
    name: "Stardew Valley",
    price: "₹499", pv: "499",
    genre: "Simulation / RPG",
    desc: "Inherit a farm, build a life, and find community in this endlessly charming life-simulation RPG.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1.jpg"
    ]
  },
  {
    id: "undertale",
    name: "Undertale",
    price: "₹299", pv: "299",
    genre: "RPG",
    desc: "A unique RPG where you can befriend every monster — or choose to fight — with multiple endings that remember you.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2.jpg"
    ]
  },
  {
    id: "cuphead",
    name: "Cuphead",
    price: "₹699", pv: "699",
    genre: "Run & Gun",
    desc: "Hand-drawn 1930s cartoon art meets brutally difficult boss-rush gameplay in this timeless masterpiece.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3.jpg"
    ]
  },
  {
    id: "ori-will-wisps",
    name: "Ori and the Will of the Wisps",
    price: "₹799", pv: "799",
    genre: "Platformer / Metroidvania",
    desc: "A breathtaking platformer with fluid movement, a gorgeous score, and deeply emotional storytelling.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/ss_a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/ss_a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4.jpg"
    ]
  },
  {
    id: "disco-elysium",
    name: "Disco Elysium",
    price: "₹999", pv: "999",
    genre: "RPG",
    desc: "A groundbreaking detective RPG where your inner thoughts are skills and every dialogue shapes the case.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/ss_b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/ss_b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5.jpg"
    ]
  },
  {
    id: "terraria",
    name: "Terraria",
    price: "₹299", pv: "299",
    genre: "Sandbox / Action",
    desc: "Dig, fight, explore, and build in a 2D pixel world with near-infinite content and hundreds of bosses.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg"
    ]
  },

  // ── STRATEGY / SIMULATION ──
  {
    id: "civilization6",
    name: "Sid Meier's Civilization VI",
    price: "₹1,199", pv: "1199",
    genre: "Turn-Based Strategy",
    desc: "Build an empire to stand the test of time — from ancient tribes to a spacefaring civilisation.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7.jpg"
    ]
  },
  {
    id: "total-war-warhammer3",
    name: "Total War: WARHAMMER III",
    price: "₹2,499", pv: "2499",
    genre: "Strategy",
    desc: "Command daemon legions or mortal kingdoms in enormous real-time battles across a chaotic fantasy world.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1142710/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1142710/ss_e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1142710/ss_e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8.jpg"
    ]
  },
  {
    id: "cities-skylines",
    name: "Cities: Skylines",
    price: "₹699", pv: "699",
    genre: "City Builder",
    desc: "Design and manage the city of your dreams with deep traffic, zoning, and infrastructure simulation.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/ss_f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/ss_f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9.jpg"
    ]
  },
  {
    id: "xcom2",
    name: "XCOM 2",
    price: "₹899", pv: "899",
    genre: "Turn-Based Tactics",
    desc: "Command a resistance force against alien occupation in this punishing, rewarding tactical strategy game.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg"
    ]
  },
  {
    id: "into-the-breach",
    name: "Into the Breach",
    price: "₹399", pv: "399",
    genre: "Turn-Based Strategy",
    desc: "Pilot giant mechs against alien creatures in perfectly designed, chess-like tactical puzzle battles.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/590380/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/590380/ss_b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/590380/ss_b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.jpg"
    ]
  },
  {
    id: "rimworld",
    name: "RimWorld",
    price: "₹999", pv: "999",
    genre: "Colony Simulation",
    desc: "Manage a colony of survivors on a distant planet — every playthrough tells a completely different story.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/ss_c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/ss_c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2.jpg"
    ]
  },
  {
    id: "factorio",
    name: "Factorio",
    price: "₹1,499", pv: "1499",
    genre: "Factory Building",
    desc: "Build and automate sprawling factories on an alien world — one of the highest-rated games ever made.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ss_d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ss_d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3.jpg"
    ]
  },
  {
    id: "tropico6",
    name: "Tropico 6",
    price: "₹1,199", pv: "1199",
    genre: "City Builder / Strategy",
    desc: "Rule your Caribbean island nation as El Presidente — balance factions, elections, and global superpowers.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/563260/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/563260/ss_e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/563260/ss_e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4.jpg"
    ]
  },

  // ── MULTIPLAYER / CO-OP ──
  {
    id: "among-us",
    name: "Among Us",
    price: "₹199", pv: "199",
    genre: "Social Deduction",
    desc: "Work together to maintain the ship — or deceive everyone as the secret Impostor. Trust no one.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5.jpg"
    ]
  },
  {
    id: "it-takes-two",
    name: "It Takes Two",
    price: "₹1,499", pv: "1499",
    genre: "Co-op Adventure",
    desc: "A masterfully crafted co-op adventure about a couple on the brink of divorce — Game of the Year 2021.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/ss_a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/ss_a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.jpg"
    ]
  },
  {
    id: "deep-rock-galactic",
    name: "Deep Rock Galactic",
    price: "₹899", pv: "899",
    genre: "Co-op FPS",
    desc: "Team up as space dwarves mining alien caves and fighting hordes of bugs in the ultimate co-op shooter.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/ss_b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/ss_b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7.jpg"
    ]
  },
  {
    id: "phasmophobia",
    name: "Phasmophobia",
    price: "₹599", pv: "599",
    genre: "Co-op Horror",
    desc: "Investigate haunted locations with ghost-hunting equipment and identify the spirit before it kills you.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/ss_c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/ss_c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8.jpg"
    ]
  },
  {
    id: "left4dead2",
    name: "Left 4 Dead 2",
    price: "₹299", pv: "299",
    genre: "Co-op Shooter",
    desc: "Survive zombie apocalypse scenarios with four players in Valve's timeless co-op shooter with Director AI.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9.jpg"
    ]
  },

  // ── ADVENTURE / NARRATIVE ──
  {
    id: "rdr",
    name: "Red Dead Redemption",
    price: "₹1,299", pv: "1299",
    genre: "Action Adventure",
    desc: "John Marston hunts down his old gang across the dying American frontier in Rockstar's western masterpiece.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668510/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668510/ss_e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668510/ss_e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0.jpg"
    ]
  },
  {
    id: "detroit-become-human",
    name: "Detroit: Become Human",
    price: "₹999", pv: "999",
    genre: "Narrative Adventure",
    desc: "Three androids navigate a future where machines may be developing consciousness — every choice branches.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222140/ss_f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222140/ss_f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1.jpg"
    ]
  },
  {
    id: "the-last-of-us",
    name: "The Last of Us Part I",
    price: "₹3,499", pv: "3499",
    genre: "Action Adventure",
    desc: "Joel escorts young Ellie across post-apocalyptic America in one of gaming's greatest stories ever told.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2.jpg"
    ]
  },
  {
    id: "death-stranding",
    name: "Death Stranding",
    price: "₹1,199", pv: "1199",
    genre: "Action Adventure",
    desc: "Reconnect a fractured America as Sam Porter Bridges in Hideo Kojima's hauntingly beautiful delivery epic.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190460/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190460/ss_b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190460/ss_b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3.jpg"
    ]
  },
  {
    id: "life-is-strange",
    name: "Life is Strange Remastered",
    price: "₹799", pv: "799",
    genre: "Narrative Adventure",
    desc: "Max discovers she can rewind time and uses it to investigate the disappearance of a fellow student.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1265920/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1265920/ss_c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1265920/ss_c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4.jpg"
    ]
  },

  // ── SOULSLIKE / HARD ──
  {
    id: "dark-souls3",
    name: "Dark Souls III",
    price: "₹1,199", pv: "1199",
    genre: "Action RPG / Soulslike",
    desc: "Face insurmountable odds and learn from every death in this gorgeous, punishing dark fantasy epic.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5.jpg"
    ]
  },
  {
    id: "sekiro",
    name: "Sekiro: Shadows Die Twice",
    price: "₹2,999", pv: "2999",
    genre: "Action / Soulslike",
    desc: "Master the katana as a shinobi in Sengoku Japan — posture, parry, and precision define every duel.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg"
    ]
  },
  {
    id: "blasphemous",
    name: "Blasphemous",
    price: "₹699", pv: "699",
    genre: "Metroidvania / Soulslike",
    desc: "A harrowing pixel-art metroidvania drenched in Spanish religious iconography and brutal boss encounters.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/774361/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/774361/ss_f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/774361/ss_f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7.jpg"
    ]
  },

  // ── SCI-FI / SPACE ──
  {
    id: "mass-effect-le",
    name: "Mass Effect Legendary Edition",
    price: "₹2,499", pv: "2499",
    genre: "Action RPG",
    desc: "Commander Shepard's legendary trilogy remastered — shape the fate of the galaxy across three epic games.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/ss_a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/ss_a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8.jpg"
    ]
  },
  {
    id: "no-mans-sky",
    name: "No Man's Sky",
    price: "₹1,999", pv: "1999",
    genre: "Sci-Fi Survival",
    desc: "Explore a procedurally generated universe of 18 quintillion planets — fully redeemed and constantly updated.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/ss_b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/ss_b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.jpg"
    ]
  },
  {
    id: "outer-wilds",
    name: "Outer Wilds",
    price: "₹799", pv: "799",
    genre: "Adventure / Mystery",
    desc: "Explore a solar system stuck in a 22-minute time loop and unravel the mystery of a long-dead civilisation.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/ss_c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/ss_c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0.jpg"
    ]
  },
  {
    id: "star-wars-jedi-survivor",
    name: "Star Wars Jedi: Survivor",
    price: "₹3,499", pv: "3499",
    genre: "Action Adventure",
    desc: "Cal Kestis continues his journey against the Empire with expanded Force powers and soulslike combat.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1774580/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1774580/ss_d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1774580/ss_d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1.jpg"
    ]
  },

  // ── FIGHTING ──
  {
    id: "mortal-kombat1",
    name: "Mortal Kombat 1",
    price: "₹4,499", pv: "4499",
    genre: "Fighting",
    desc: "The MK universe is reborn with cinematic fatalities, a new Kameo fighter system, and a fresh story.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/ss_e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/ss_e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2.jpg"
    ]
  },
  {
    id: "street-fighter6",
    name: "Street Fighter 6",
    price: "₹2,999", pv: "2999",
    genre: "Fighting",
    desc: "The legendary fighting franchise returns with Drive System mechanics, World Tour mode, and superb netcode.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3.jpg"
    ]
  },

  // ── HORROR ──
  {
    id: "alien-isolation",
    name: "Alien: Isolation",
    price: "₹699", pv: "699",
    genre: "Survival Horror",
    desc: "Evade an unkillable Xenomorph across a retro-futuristic space station in one of gaming's tensest experiences.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/ss_a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/ss_a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4.jpg"
    ]
  },
  {
    id: "amnesia-rebirth",
    name: "Amnesia: Rebirth",
    price: "₹599", pv: "599",
    genre: "Horror",
    desc: "A harrowing journey through the Algerian desert and dark dimensions where fear itself is your greatest enemy.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/999220/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/999220/ss_b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/999220/ss_b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5.jpg"
    ]
  },
  {
    id: "outlast",
    name: "Outlast",
    price: "₹499", pv: "499",
    genre: "Survival Horror",
    desc: "Armed only with a night-vision camera, investigate a psychiatric hospital overrun by murderous inmates.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/ss_c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/ss_c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg"
    ]
  },

  // ── MORE RPG ──
  {
    id: "baldurs-gate3",
    name: "Baldur's Gate 3",
    price: "₹3,999", pv: "3999",
    genre: "RPG",
    desc: "A landmark D&D RPG with unprecedented player agency, stunning production, and 100+ hours of content.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7.jpg"
    ]
  },
  {
    id: "pathfinder-wrath",
    name: "Pathfinder: Wrath of the Righteous",
    price: "₹1,499", pv: "1499",
    genre: "CRPG",
    desc: "Command a crusade against demon lords in a deeply complex CRPG with mythic powers and branching paths.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1184370/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1184370/ss_e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1184370/ss_e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8.jpg"
    ]
  },
  {
    id: "divinity-os2",
    name: "Divinity: Original Sin 2",
    price: "₹999", pv: "999",
    genre: "CRPG",
    desc: "Craft your story as a Sourcerer in a world that reacts to your every decision — best co-op CRPG ever made.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/ss_f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/ss_f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9.jpg"
    ]
  },
  {
    id: "monster-hunter-world",
    name: "Monster Hunter: World",
    price: "₹1,299", pv: "1299",
    genre: "Action RPG",
    desc: "Hunt and craft your way through a living ecosystem in Capcom's best-selling series entry of all time.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg"
    ]
  },
  {
    id: "dragon-age-origins",
    name: "Dragon Age: Origins",
    price: "₹399", pv: "399",
    genre: "RPG",
    desc: "A classic Bioware RPG where six different origin stories converge in an epic battle against a darkspawn Blight.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/47810/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/47810/ss_b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/47810/ss_b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.jpg"
    ]
  },

  // ── PUZZLE ──
  {
    id: "portal2",
    name: "Portal 2",
    price: "₹449", pv: "449",
    genre: "Puzzle",
    desc: "Use a portal gun to solve increasingly devious physics puzzles in Valve's darkly comedic masterpiece.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2.jpg"
    ]
  },
  {
    id: "the-witness",
    name: "The Witness",
    price: "₹799", pv: "799",
    genre: "Puzzle",
    desc: "Explore a mysterious island and solve hundreds of panel puzzles that gradually reveal the island's secrets.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/210970/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/210970/ss_d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/210970/ss_d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3.jpg"
    ]
  },
  {
    id: "baba-is-you",
    name: "Baba Is You",
    price: "₹499", pv: "499",
    genre: "Puzzle",
    desc: "Manipulate the rules of the game itself by pushing word blocks to change what is possible.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/736260/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/736260/ss_e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/736260/ss_e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4.jpg"
    ]
  },

  // ── MORE TITLES ──
  {
    id: "control",
    name: "Control",
    price: "₹699", pv: "699",
    genre: "Action Adventure",
    desc: "Jesse Faden explores the brutalist Federal Bureau of Control, a paranormal government agency gone haywire.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/ss_f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/ss_f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5.jpg"
    ]
  },
  {
    id: "prey2017",
    name: "Prey (2017)",
    price: "₹499", pv: "499",
    genre: "Immersive Sim",
    desc: "Explore a space station overrun by alien shapeshifters with an arsenal of human and alien powers.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/ss_a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/ss_a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.jpg"
    ]
  },
  {
    id: "deus-ex-mankind",
    name: "Deus Ex: Mankind Divided",
    price: "₹499", pv: "499",
    genre: "Immersive Sim / RPG",
    desc: "Adam Jensen navigates a mechanically divided society using augmentations to choose stealth, combat, or dialogue.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/337000/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/337000/ss_b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/337000/ss_b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7.jpg"
    ]
  },
  {
    id: "half-life-alyx",
    name: "Half-Life: Alyx",
    price: "₹1,499", pv: "1499",
    genre: "VR FPS",
    desc: "The definitive VR game — Alyx Vance fights the Combine in a masterfully crafted VR-only Half-Life story.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/ss_c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/ss_c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8.jpg"
    ]
  },
  {
    id: "returnal",
    name: "Returnal",
    price: "₹2,999", pv: "2999",
    genre: "Roguelite / Third-Person Shooter",
    desc: "Astronaut Selene is trapped in a time loop on an alien planet where every death rewrites the world.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/ss_d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/ss_d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9.jpg"
    ]
  },
  {
    id: "ghostrunner",
    name: "Ghostrunner",
    price: "₹799", pv: "799",
    genre: "Action / Parkour",
    desc: "One-hit kills, one-hit deaths — wall-run and slash through a cyberpunk megastructure at hyperspeed.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1139900/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1139900/ss_e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1139900/ss_e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0.jpg"
    ]
  },
  {
    id: "devil-may-cry5",
    name: "Devil May Cry 5",
    price: "₹999", pv: "999",
    genre: "Action",
    desc: "Three stylish demon hunters — Nero, Dante, and V — team up to stop a demonic invasion in a stunning action game.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/ss_f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/ss_f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1.jpg"
    ]
  },
  {
    id: "nioh2",
    name: "Nioh 2",
    price: "₹2,499", pv: "2499",
    genre: "Action RPG / Soulslike",
    desc: "A prequel set in Sengoku Japan with deep samurai combat, yokai transformation, and immense replayability.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1325200/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1325200/ss_a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1325200/ss_a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2.jpg"
    ]
  },
  {
    id: "dragon-dogma2",
    name: "Dragon's Dogma 2",
    price: "₹3,999", pv: "3999",
    genre: "Action RPG",
    desc: "Forge your own legend with a customisable Arisen and AI Pawns in a rich fantasy open world by Capcom.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3.jpg"
    ]
  },
  {
    id: "persona5-royal",
    name: "Persona 5 Royal",
    price: "₹2,499", pv: "2499",
    genre: "JRPG",
    desc: "Tokyo high-schoolers lead double lives as Phantom Thieves, stealing corrupt hearts in stylish turn-based combat.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4.jpg"
    ]
  },
  {
    id: "final-fantasy-xvi",
    name: "Final Fantasy XVI",
    price: "₹3,999", pv: "3999",
    genre: "Action RPG / JRPG",
    desc: "Clive Rosfield fights for freedom in a dark political fantasy world powered by god-like Eikon battles.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/ss_d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/ss_d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5.jpg"
    ]
  },
  {
    id: "dave-the-diver",
    name: "Dave the Diver",
    price: "₹699", pv: "699",
    genre: "Adventure / Simulation",
    desc: "Dive the Blue Hole by day for fish, run a sushi restaurant by night in this charming genre-blending hit.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/ss_e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/ss_e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg"
    ]
  },
  {
    id: "sea-of-stars",
    name: "Sea of Stars",
    price: "₹1,299", pv: "1299",
    genre: "Turn-Based RPG",
    desc: "A stunning love letter to classic JRPGs with gorgeous pixel art, timed combat, and an enchanting world.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/ss_f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/ss_f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7.jpg"
    ]
  },
  {
    id: "cult-of-the-lamb",
    name: "Cult of the Lamb",
    price: "₹799", pv: "799",
    genre: "Roguelite / Base Building",
    desc: "Raise a cult and crusade through procedural dungeons in this darkly cute roguelite colony builder.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8.jpg"
    ]
  },
  {
    id: "vampire-survivors",
    name: "Vampire Survivors",
    price: "₹179", pv: "179",
    genre: "Roguelite / Auto-Shooter",
    desc: "Survive endless waves of monsters by collecting weapon upgrades in this wildly addictive roguelite.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.jpg"
    ]
  },
  {
    id: "tunic",
    name: "Tunic",
    price: "₹799", pv: "799",
    genre: "Action Adventure",
    desc: "A small fox explores a mysterious world, piecing together an in-game manual filled with cryptic secrets.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553420/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553420/ss_c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553420/ss_c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0.jpg"
    ]
  },
  {
    id: "sifu",
    name: "Sifu",
    price: "₹999", pv: "999",
    genre: "Action / Beat 'em Up",
    desc: "A martial arts student takes revenge — aging with every death, making each life count in kung fu combat.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2138710/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2138710/ss_d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2138710/ss_d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1.jpg"
    ]
  },
  {
    id: "slay-the-spire",
    name: "Slay the Spire",
    price: "₹599", pv: "599",
    genre: "Roguelite / Deck Builder",
    desc: "Craft powerful card decks and ascend the Spire in this endlessly replayable pioneer of the deckbuilding genre.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/ss_e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/ss_e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2.jpg"
    ]
  },
  {
    id: "plague-inc",
    name: "Plague Inc: Evolved",
    price: "₹399", pv: "399",
    genre: "Strategy / Simulation",
    desc: "Evolve a pathogen to wipe out humanity before scientists develop a cure in this eerily topical strategy game.",
    hero: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/246620/header.jpg",
    imgs: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/246620/ss_f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/246620/ss_f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3.jpg"
    ]
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
          <p>${g.desc}</p>
          <div class="vbtn" onclick="navTo('detail','${g.id}')">View Game →</div>
        </div>
      </div>
    `).join('')}
  </div>`;
}

function renderDetail(key){
  const g = GAMES.find(game => game.id === key);
  return`<h1 class="pt">${g.name}</h1><img src="${g.hero}" class="ghero" loading="lazy"><p class="gdesc">${g.desc}</p><h3 style="font-family:'Rajdhani',sans-serif;font-size:19px;margin-bottom:12px;color:#fff">Screenshots</h3><div class="ggrid">${g.imgs.map(i=>`<img src="${i}" loading="lazy" style="border-radius:8px;">`).join('')}</div><div class="prow"><span class="ptag">${g.price}</span><button class="bbtn" onclick="navTo('buy','${key}')">Buy Now</button></div>`;
}

function renderOffers(){
  const offs = [
    {key:'gtav', old:'₹1299', nw:'₹999', disc:'23% OFF'},
    {key:'witcher3', old:'₹1499', nw:'₹1299', disc:'13% OFF'},
    {key:'minecraft', old:'₹699', nw:'₹499', disc:'29% OFF'}
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
  return`<h1 class="pt">About Game Hub</h1><div class="asec"><h2>Who We Are</h2><p>Game Hub is an online gaming store where players can explore, purchase and enjoy top-rated games at affordable prices.</p></div><div class="asec"><h2>Our Mission</h2><p>Secure payments, instant digital access, and the best gaming deals — making great games accessible to everyone.</p></div><div class="asec"><h2>Why Choose Us?</h2><ul><li>🔒 Secure Payment System</li><li>⚡ Instant Digital Access</li><li>🕐 24/7 Customer Support</li><li>🏷️ Exclusive Gaming Discounts</li><li>🎮 Curated Game Collection</li></ul></div><div class="asec"><h2>Our Team</h2><div class="tgrid"><div class="tc"><div class="tav">👨‍💻</div><h4>Arjun Sharma</h4><p>Founder & CEO</p></div><div class="tc"><div class="tav">👩‍🎨</div><h4>Priya Nair</h4><p>Lead Designer</p></div><div class="tc"><div class="tav">👨‍🔧</div><h4>Ravi Kumar</h4><p>Dev Lead</p></div></div></div>`;
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
