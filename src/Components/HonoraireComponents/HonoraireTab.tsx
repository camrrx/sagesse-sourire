import "./HonoraireTab.scss";

export const HonoraireTab = () => {
	return (
		<div className="honoraire-tab-container">
			<h2>Les soins les plus pratiqués dans notre cabinet</h2>
			<h6>
				Les actes suivis d'un * sont pris en charges intégralement dans le cadre
				du RAC0 avec Contrat Responsable.
			</h6>
			<table>
				<tr>
					<th className="borderradius-left"> </th>
					<th className="borderradius-none">
						Tarifs des honoraires ou fourchettes des tarifs des honoraires
						pratiqués
					</th>
					<th className="borderradius-right">Base de remboursement</th>
				</tr>
				<tr>
					<td>Consultation</td>
					<td>23,00€</td>
					<td>23,00€</td>
				</tr>
				<tr className="highlight">
					<th colSpan={3}>
						Prestations de soins conservateurs, chirurgicaux et de prévention
						les plus pratiqués (au moins 5)
					</th>
				</tr>
				<tr>
					<td>RADIO PANORAMIQUE</td>
					<td>21,28€</td>
					<td>21,28€</td>
				</tr>
				<tr>
					<td>EXTRACTION SIMPLE</td>
					<td>33,44€</td>
					<td>33,44€</td>
				</tr>
				<tr>
					<td>DÉTARTRAGE</td>
					<td>28,72€</td>
					<td>28,72€</td>
				</tr>
				<tr>
					<td>RESTAURATION CORONAIRE 3 FACES</td>
					<td>40,97€</td>
					<td>40,97€</td>
				</tr>
				<tr>
					<td>PULPECTOMIE MOLAIRE</td>
					<td>81,94€</td>
					<td>81,94€</td>
				</tr>
				<tr className="highlight">
					<th colSpan={3}>
						Traitement prothétiques et d’orthopédie dento-faciale les plus
						pratiqués (au moins 5)
					</th>
				</tr>
				<tr>
					<td>COURONNE CHROME COBALT</td>
					<td>290,00€*</td>
					<td>107,50€</td>
				</tr>
				<tr>
					<td>COURONNE CERAMIQUE</td>
					<td>500,00€*</td>
					<td>107,50€</td>
				</tr>
				<tr>
					<td>RÉPARATION DE BASE APPAREIL</td>
					<td>80,00€</td>
					<td>21,50€</td>
				</tr>
				<tr>
					<td>APPAREIL COMPLET RÉSINE</td>
					<td>840,00€</td>
					<td>182,75€</td>
				</tr>
				<tr>
					<td>ORTHODONTIE 1 SEMESTRE</td>
					<td>595,00€</td>
					<td>193,50€</td>
				</tr>
			</table>

			<h2>Les actes d’implantologie</h2>
			<table>
				<tr>
					<th className="borderradius-left"> </th>
					<th className="borderradius-none">
						Tarifs des honoraires ou fourchettes des tarifs des honoraires
						pratiqués
					</th>
					<th className="borderradius-right">Base de remboursement</th>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr className="highlight">
					<th colSpan={3}>Implants</th>
				</tr>
				<tr>
					<td>IMPLANT</td>
					<td>750,00€</td>
					<td>NR€</td>
				</tr>
				<tr>
					<td>ETUDE DU SCANNER+GUIDE IMPLANTAIRE</td>
					<td>100,00€</td>
					<td>NR</td>
				</tr>
				<tr>
					<td>MISE EN FONCTION PAR IMPLANT </td>
					<td>0,00€</td>
					<td>0,00€</td>
				</tr>
				<tr>
					<td>COURONNE CERAMIQUE/IMPLANT </td>
					<td>540,00€</td>
					<td>107,50€</td>
				</tr>
				<tr>
					<td>INLAY-CORE/IMPLANT </td>
					<td>280,00€ </td>
					<td>NR</td>
				</tr>
				<tr>
					<td>BARRE DE RETENTION </td>
					<td>1300,00€</td>
					<td>NR</td>
				</tr>
				<tr className="highlight">
					<th colSpan={3}>Chirurgies pré-implantaires</th>
				</tr>
				<tr>
					<td>EXPANSION PAR IMPLANT</td>
					<td>200,00€</td>
					<td>NR</td>
				</tr>
				<tr>
					<td>COMBLEMENT SINUS (fenêtre latérale) </td>
					<td>1000,00€</td>
					<td>NR</td>
				</tr>
				<tr>
					<td>SOULEVE DE SINUS (crestal) </td>
					<td>1000,00€</td>
					<td>NR</td>
				</tr>
				<tr>
					<td>GREFFE OSSEUSE </td>
					<td>1000,00€</td>
					<td>0</td>
				</tr>
				<tr>
					<td>POSE DE MEMBRANE </td>
					<td>250,00€</td>
					<td>NR</td>
				</tr>
				<tr>
					<td>COMBLEMENT OSSEUX </td>
					<td>150,00€ - 300,00€</td>
					<td>NR</td>
				</tr>
			</table>
			<h6>
				NR : Acte NON remboursé, maintenant beaucoup de complémentaires prennent
				une partie en charge.
			</h6>
		</div>
	);
};
