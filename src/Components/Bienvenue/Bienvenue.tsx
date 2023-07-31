import "./Bienvenue.scss";

const Bienvenue = () => {
	return (
		<div className="welcome-container">
			<h1>Bienvenue ! </h1>
			<p>
				La technologie disponible et les techniques de soins actuelles
				permettent à la profession dentaire de toujours mieux soigner et
				prévenir. Constamment à votre écoute, nous vous apporterons toute
				l’information nécessaire à vos prises de décisions et vous proposerons
				ainsi les solutions les plus adaptées à votre situation bucco-dentaire.
			</p>

			<button className="button-contact"> Nous contacter</button>
		</div>
	);
};
export default Bienvenue;
