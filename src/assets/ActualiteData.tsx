import questionnairecovid from "./questionnairecovid.pdf";

export const ActualitesData = [
	{
		id: 1,
		title: "Covid 19",
		description:
			"Le Patient vient seul et doit être à l'heure. NI en AVANCE NI en RETARD. Port d’un masque OBLIGATOIRE. Le questionnaire ci-dessous doit être rempli et signé.",
		document: { title: "Questionnaire", actions: { questionnairecovid } },
	},

	{
		id: 2,
		title: "Remboursement des soins",
		description:
			"Depuis janvier 2020, le 100% santé est mis en place et permet un meilleur remboursement grâce au respect du contrat responsable. Pour en savoir plus, consultez notre page dédiée Honoraires.",
		document: { title: "Honoraires", actions: "/sagesse-sourire/honoraires" },
	},

	{
		id: 3,
		title: "Date des gardes",
		description:
			"Chaque dimanche et jours fériés, de 9h à 12h, un praticien est de garde dans le département. Veuillez trouver le tableau des gardes ici Praticiens de Garde.",
		document: {
			title: "Praticiens de garde",
			actions: "http://www.cdocd44.fr/",
		},
	},

	{
		id: 4,
		title: "Rendez vous",
		description:
			"Il y a du nouveau dans la prise de rendez-vous ! Vous pouvez désormais prendre vos rendez-vous avec les Docteurs MERLET et CHOTARD via Doctolib.",
		document: { title: "", actions: "" },
	},

	{
		id: 5,
		title: "Nouvelle fiche technique sur le site",
		description:
			"Découvrez notre nouveau contenu : Sédation et Anesthésie. Nous y présentons l'utilisation du MEOPA et de L'anesthésie ostéocentrale .",
		document: { title: "MEOPA", actions: "/sagesse-sourire/meopa" },
	},
];
