import { useTheme } from "../../../ThemeContext";
import "./FAQ.scss";
import { Dialog } from "@headlessui/react";

interface FAQProps {
	showFAQ: boolean;
	setFAQ: React.Dispatch<React.SetStateAction<boolean>>;
}

const FAQ = ({ showFAQ, setFAQ }: FAQProps) => {
	const { theme } = useTheme();

	return (
		<div className={`${theme}`}>
			<Dialog open={showFAQ} onClose={() => setFAQ(false)}>
				<Dialog.Panel className={`dialog-overlay ${theme}`}>
					<div className="dialog-box">
						<Dialog.Title className="dialog-title">
							Foire à questions
						</Dialog.Title>
						<Dialog.Description className="dialog-description">
							<div className="question-card">
								<h6>Mes dents sont tachées, que faire?</h6>
								<p>
									Adoptez une hygiène appliquée et associez-y des rendez-vous
									réguliers chez votre praticien. Des détartrages et d’éventuels
									polissage permettent de d’éliminer le tartre et les
									colorations alimentaires. C’est bien souvent ce que nous
									mangeons qui infiltre les porosités de l’émail et lui donne
									une coloration disgracieuse.
								</p>
							</div>
							<div className="question-card">
								<h6>J’ai un appareil: comment bien m’y adapter?</h6>
								<p>
									Pas de panique! Nous sommes là pour vous accompagner. Que ce
									soit votre premier appareil, ou que nous l’ayons refait, un
									temps d’adaptation s’impose: l’appareil doit être porté le
									plus souvent possible pour que cela se fasse le plus vite
									possible. Suite à la pose, plusieurs séances de réglages
									seront peut-être nécessaires. Les premiers temps vous aurez
									certainement besoin de vous entrainez à parler, à mastiquer
									doucement, de façon à ce que votre appareil se fasse oublier.
									Au même titre que vos dents, votre appareil mérite un
									entretien appliqué (pastilles effervescentes, brosses…).
								</p>
							</div>
							<div className="question-card">
								<h6>
									J’ai l’impression d’avoir mauvaise haleine: que dois-je faire?
								</h6>
								<p>
									Dans la grande majorité des cas, la mauvaise haleine est
									d’origine orale. Il convient d’adopter une bonne hygiène afin
									d’éviter l’halitose transitoire due à la consommation de
									certains aliments etc. Dans certains cas l’halitose peut avoir
									un lien avec une maladie (ex: diabète) ou une prise de
									médicaments quotidienne.
								</p>
							</div>
							<div className="question-card">
								<h6>Ma couronne est descellée, que faire? </h6>
								<p>
									Si votre couronne s’est descellée nous vous invitons à
									téléphoner à votre praticien qui vous indiquera la marche à
									suivre. Il est souvent nécessaire que cette dernière soit
									nettoyer avant d’être remise en place. Parfois une partie de
									la dent reste à l’intérieur de la couronne: votre dentiste
									traitant jugera de la possibilité, ou non, de réaliser une
									nouvelle prothèse.
								</p>
							</div>
							<div className="question-card">
								<h6>Aphtes</h6>
								<p>
									Les aphtes sont de petites ulcérations de la muqueuse qui
									peuvent s’avérer très douloureuses. Elles sont souvent le
									résultat de périodes de fatigue ou d’un contact irritant. Les
									aphtes mettent environ une semaine à disparaître.
									L’utilisation de vitamine C peut vous aider à traverser ce
									mauvais moment.
								</p>
							</div>
							<div className="question-card">
								<h6>Accident: dent cassée, expulsée, déplacée, que faire?</h6>
								<p>
									Il ne faut jamais attendre pour consulter. Contacter votre
									dentiste qui vous indiquera le protocole à suivre en fonction
									de l’atteinte de la dent mais aussi de l’âge de la personne
									accidentée. S’il s’agit d’une dent de lait expulsée: il n’y a
									rien à faire, celle-ci ne doit pas être réimplantée. Si elle
									est déplacée ou rentrée dans la gencive, essayer de la
									replacer par pression digitale. S’il s’agit d’une dent
									définitive cassée; conservez le morceau de dent et contacter
									votre dentiste. Si la dent est déplacée, tenter de la
									replacer. Si la dent est expulsée, conservez-la dans du sérum
									physiologique du lait stérile ou à défaut la bouche du patient
									accidenté et contacter votre dentiste ou le service
									hospitalier le plus proche afin que la dent soit réimplantée
									(si possible).
								</p>
							</div>
							<div className="question-card">
								<h6>
									Je suis enceinte, cela va-t-il avoir un impact sur mes dents?
								</h6>
								<p>
									Avec les changements hormonaux liés à la grossesse, la gencive
									s’irrite très vite. Il peut y avoir de petits saignements ou
									des gonflements gingivaux. Veillez à vous appliquer sur votre
									hygiène dentaire pour limiter l’apparition de cette gingivite
									gravidique. L’acidité des vomissements peut entrainer une
									sensibilité par déminéralisation de l’émail. Et les petites
									habitudes de grignotages risquent de provoquer l’apparition de
									carie. N’hésitez pas à prendre conseil auprès de votre
									dentiste, notamment durant le bilan bucco-dentaire maternité
									proposé par la sécurité sociale.
								</p>
							</div>
							<div className="question-card">
								<h6>Sucres et dents</h6>
								<p>
									Nos dents sont naturellement enveloppées d’une couche de
									bactéries. Elles sont inoffensives la plupart du temps mais se
									développent et deviennent agressives pour nos dents
									lorsqu’elles sont en milieu acide: attention au sucre!
									Evidemment, on ne peut pas bannir le sucre de notre
									alimentation, mais nous pouvons limiter notre consommation.
								</p>
							</div>
							<div className="question-card">
								<h6>Le tabac et les dents</h6>
								<p>
									Votre dentiste peut vous accompagner durant l’arrêt de la
									cigarette! Le tabac a un réel impact sur votre bouche. Il
									abime la gencive et l’os ce qui peut mener à la perte des
									dents. Votre praticien peut vous prescrire des traitements
									nicotiniques de substitution.
								</p>
							</div>
							<div className="question-card">
								<h6>
									Dois-je consulter un dentiste régulièrement même si je n’ai
									pas mal aux dents?
								</h6>
								<p>
									Oui! Une visite tous les 2 ans au minimum. Selon les cas,
									votre dentiste peut vous recommander un rendez-vous tous les
									3mois, 6mois ou un an s’il le juge nécessaire. L’état de vos
									dents évolue au cours de votre vie, il ne faut pas les
									négliger et votre praticien est là pour vous aider à les
									entretenir.
								</p>
							</div>
							<div className="question-card">
								<h6>Mon enfant suce son pouce</h6>
								<p>
									Pas de souci à se faire, jusqu’à 3ans tout est parfaitement
									normal. Le pouce sera progressivement délaissé lorsque
									l’enfant aura de plus en plus de contacts sociaux, comme à
									l’école par exemple. On estime que jusqu’à 5ans, il est
									acceptable que l’enfant suce son pouce, comme lorsqu’il est
									sujet à une période de fatigue ou de stress. Dépasser 5ans, il
									est recommandé de commencer à lui en parler. Cette habitude,
									devient un frein au bon développement orofacial. N’hésitez pas
									à le féliciter pour ses efforts, et à le l’aider au mieux
									durant cette phase de changement.
								</p>
							</div>
						</Dialog.Description>

						<button
							className="button-1 button-contact"
							onClick={() => setFAQ(false)}>
							OK
						</button>
					</div>
				</Dialog.Panel>
			</Dialog>
		</div>
	);
};

export default FAQ;
