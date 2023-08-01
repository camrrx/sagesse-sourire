export const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Bienvenue",
    url: "/bienvenue",
  },
  {
    title: "Le cabinet",
    url: "/leCabinet",
    submenu: [
      {
        title: "Notre équipe",
        url: "/leCabinet/equipes",
      },
      {
        title: "Accueil",
        url: "/leCabinet/accueil",
      },
      {
        title: "Les dentistes",
        url: "/leCabinet/dentistes",
      },
      {
        title: "Les assistantes",
        url: "/leCabinet/assistantes",
      },
      {
        title: "Les prothésistes",
        url: "/leCabinet/prothesistes",
      },
      {
        title: "Les correspondants",
        url: "/leCabinet/correspondants",
      },
    ],
  },
  {
    title: "Venir chez nous",
    url: "/venirChezNous",
    submenu: [
      {
        title: "Plan d'accès",
        url: "/venirChezNous/plan",
      },
      {
        title: "Horaires",
        url: "/venirChezNous/horaires",
      },
    ],
  },
  {
    title: "Nous contacter",
    url: "/nousContacter",
  },
  {
    title: "Liens",
    url: "/Liens",
  },
];
