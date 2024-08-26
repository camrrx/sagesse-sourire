import "./ImplantsDentaires.scss";
import implant from "../../../assets/implant-schema.png";
import implantUnitaire from "../../../assets/implantnitaire.jpeg";
import sinuslift from "../../../assets/sinuslift.jpeg";
import secteurEdente from "../../../assets/secteuredente.jpeg";
import edentationComplete from "../../../assets/edentationcomplete.jpeg";
import greffeOsseuse from "../../../assets/greffeOsseuse.jpeg";
import videoDef from "../../../assets/video/bridge.mp4";
import video1Implant from "../../../assets/video/1implant.mp4";
import videoiu from "../../../assets/video/iu.mp4";
import videoisecteur from "../../../assets/video/isecteur.mp4";
import videoitotal from "../../../assets/video/itotal.mp4";
import implantDessin from "../../../assets/implantDessin.png";
import videoisinus from "../../../assets/video/isinus.mp4";
import videosl from "../../../assets/video/sl.mp4";
import videoig from "../../../assets/video/ig.mp4";
import implantIcon from "../../../assets/cards/implant.png";
import { BsFillCalendarDateFill, BsFillCameraVideoFill } from "react-icons/bs";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTheme } from "../../../ThemeContext";
import ReactPlayer from "react-player";

const ImplantsDentaires = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme } = useTheme();

  return (
    <div className={`ImplantsDentaires-container  ${theme}`}>
      <h2>Implantologie</h2>

      <div className="implant-container">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="custom-tab-list">
            <Tab
              className={` custom-tab ${selectedIndex === 0 ? "active" : ""}`}
            >
              Définition
            </Tab>
            <Tab
              className={` custom-tab ${selectedIndex === 1 ? "active" : ""}`}
            >
              L'implant unitaire
            </Tab>
            <Tab
              className={`custom-tab ${selectedIndex === 2 ? "active" : ""}`}
            >
              Le secteur édenté
            </Tab>
            <Tab
              className={`custom-tab ${selectedIndex === 3 ? "active" : ""}`}
            >
              L'édentation complète
            </Tab>
            <Tab
              className={`custom-tab ${selectedIndex === 4 ? "active" : ""}`}
            >
              Sinus Lift
            </Tab>
            <Tab
              className={`  custom-tab  ${selectedIndex === 5 ? "active" : ""}`}
            >
              Greffe osseuse
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="custom-tab-panel" id="definition">
              <div>
                <div className="cards">
                  <img className="card" src={implantDessin} alt="" />
                  <div className="card">
                    <div className="icon-container ">
                      <img src={implantIcon}></img>
                    </div>
                    <h1>Qu'est-ce qu'un implant ?</h1>
                    <h6>
                      Lorsque nous perdons une dent c’est tout le fonctionnement
                      de notre bouche et de notre digestion qui risque d’être
                      mis en péril. L’implantologie offre une alternative à la
                      pose de bridges ou d’appareils dentaires (dentiers) et
                      permet de stopper la fonte osseuse engendrée par la perte
                      de dent.
                    </h6>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <div className="icon-container ">
                      <img src={implantIcon}></img>
                    </div>
                    <h6>
                      L’implant est une racine artificielle qui vise à remplacer
                      une ou plusieurs dents absentes. Il permet la réalisation
                      d’une prothèse sur un ancrage stable et durable (jusqu’à
                      plusieurs dizaines d’années) sans engager les dents
                      adjacentes. Il vise à rétablir une fonction adéquate, un
                      confort satisfaisant et une esthétique compatible avec
                      toute fonction sociable. L’implant peut être envisagé chez
                      presque tous patients majeurs, à condition que la qualité
                      et le volume de l’os soient suffisants. L’évaluation de
                      ces critères se fait grâce à un Cone Beam. Si le volume
                      osseux se révèle insuffisant, le recours à une greffe est
                      évoqué. Il existe quelques contre-indications à la pose
                      d’implants. Un questionnaire médical et une première
                      consultation avec le chirurgien-dentiste permettent de
                      faire le point sur votre état de santé générale dans le
                      but d’éviter tous risques. Parmi les contre-indications
                      nous retrouvons le tabagisme, le diabète, la mauvaise
                      hygiène mais aussi la prise de certains anticoagulants…
                      Une hygiène rigoureuse est indispensable. La pérennité des
                      implants dépendra beaucoup de l’entretien que vous leur
                      consacrerez.
                    </h6>
                  </div>
                  <div className="card">
                    <img className="implant-img" src={implant} />
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <div className="icon-container">
                      <BsFillCameraVideoFill className="icon" />
                    </div>
                    <h1>Les implants en vidéo</h1>

                    <div className="implant-video">
                      <ReactPlayer
                        url={videoDef}
                        controls={true}
                        width="90vw"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="icon-container">
                      <BsFillCalendarDateFill className="icon" />
                    </div>
                    <h1>Un implant, à quoi ça ressemble ?</h1>
                    <h6>
                      L’implant est une vis en titane (matériau biocompatible)
                      qui s’intègre dans l’os et constitue une racine
                      artificielle. L’implant présente un filetage qui lui
                      permet d’accueillir la vis de couverture durant
                      l’ostéointégration, puis le pilier prothétique. La
                      couronne implantaire ne peut pas être directement scellée
                      sur l’implant il faut une pièce intermédiaire : le pilier
                      implantaire (faux moignon). La prothèse implantaire se
                      réalise au bout de 3 à 6 mois après la pose de l’implant.
                      Il faudra dégager l’implant de la gencive afin de réaliser
                      l’empreinte nécessaire à la confection : c’est la
                      technique en 2 temps. Si la situation avait été jugée très
                      favorable, une technique avec pose d’une bague de
                      cicatrisation apparente permet ne pas ouvrir la gencive
                      pour les empreintes prothétique : c’est la technique en 1
                      temps.
                    </h6>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel" id="implantUnitaire">
              <div>
                <div className="cards">
                  <div className="card">
                    <div className="icon-container ">
                      <img src={implantIcon}></img>
                    </div>
                    <h1>Une seule dent absente : une catastrophe</h1>
                    <h6>
                      C’est le cas le plus fréquent. Une seule dent absente est
                      une catastrophe, car cela déstabilise toute la bouche.
                      <br></br>
                      <br></br>
                      Lorsqu’elle est visible, il n’y a pas de vieillissement
                      plus dégradant. Les individus sont touchés dans leur
                      capacité psycho relationnelle sociale, et surtout intime.
                    </h6>
                  </div>
                  <div className="card">
                    <img className="implant-img" src={implantUnitaire}></img>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <div className="icon-container">
                      <BsFillCameraVideoFill className="icon" />
                    </div>
                    <h1>L'implant unitaire en vidéo</h1>

                    <div className="implant-video">
                      <ReactPlayer
                        url={video1Implant}
                        controls={true}
                        width="90vw"
                        height="100%"
                      />
                    </div>
                  </div>
                  <h6 className="card">
                    <br></br>
                    Lors de la perte complète d’une dent (couronne + racine), la
                    fonte de l’os commence sans jamais s’arrêter. Seuls les
                    implants dentaires peuvent stopper cette évolution, ce qui
                    n’est absolument pas le cas avec un appareil dentaire ou un
                    bridge.
                    <br></br>
                    <br></br>
                    La pose d’un implant est un acte réalisé à notre cabinet,
                    sous anesthésie locale, dans une salle préparée
                  </h6>

                  <div className="card">
                    <div className="icon-container">
                      <BsFillCameraVideoFill className="icon" />
                    </div>

                    <div className="implant-video">
                      <ReactPlayer
                        url={videoiu}
                        controls={true}
                        width="90vw"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel" id="secteurEdente">
              <div>
                <div className="cards">
                  <div className="card">
                    <h1>Le secteur édenté</h1>
                    <h6>
                      Ce sont des cas assez fréquents, une dent est partie puis
                      une autre et tout un coté ne sert plus, le choix se résume
                      alors entre la pose d'un appareil amovible ou des
                      implants.
                    </h6>
                    <h6>
                      Si ce cas correspond au votre, le film décrit assez bien
                      ce qui se passe.
                    </h6>
                  </div>
                  <div className="card">
                    <img className="implant-img" src={secteurEdente}></img>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <div className="icon-container">
                      <BsFillCameraVideoFill className="icon" />
                    </div>
                    <h1>Le secteur edenté en vidéo</h1>
                    <div className="implant-video">
                      <ReactPlayer
                        url={videoisecteur}
                        controls={true}
                        width="90vw"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="card">
                    <h6>
                      Pour ces cas, nous réalisons toujours des investigations
                      radiologiques poussées. Souvent un guide radiologique est
                      réalisé avant le scanner, puis nous modélisons avec
                      précision votre dentition en trois dimensions pour définir
                      la place des implants.
                    </h6>
                    <h6>
                      La pose des implants est un acte réalisé à en une fois
                      dans notre cabinet, sous anesthésie locale, dans une salle
                      préparée. Pour les patients très anxieux nous pouvons
                      réaliser la pose à la clinique de chateaubriant. Le
                      supplément de cout sera à votre charge.
                    </h6>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel" id="edentationComplete">
              <div>
                <div className="cards">
                  <div className="card">
                    <img className="implant-img" src={edentationComplete}></img>
                  </div>
                  <div className="card">
                    <h6>
                      C’est un cas complexe, car les prothèses mobiles complètes
                      ne sont pas toujours bien supportées par les patients.
                    </h6>
                    <h6>
                      Pour chaque cas un guide radiologique et un scanner sont
                      réalisés, puis nous modélisons avec précision votre
                      dentition en trois dimensions pour définir la place des
                      implants.
                    </h6>
                    <h6>
                      En raison de l’édentation souvent ancienne, nous sommes
                      face à une grande résorption osseuse, il n’est pas
                      toujours possible de recréer une dentition fixe
                    </h6>
                    <h6>
                      Lorsque ce n’est pas possible, l’on pose des implants pour
                      stabiliser la prothèse amovible.
                    </h6>
                  </div>
                </div>

                <div className="cards">
                  <div className="card">
                    <h1>Comment ça se passe?</h1>
                    <h6>
                      D’abord, la
                      <strong> première consultation</strong>, le praticien vous
                      reçoit et vous lui exposez votre situation. Vous devrez
                      remplir un questionnaire médical décrivant votre état de
                      santé général.
                    </h6>
                    <h6>
                      Un <strong> devis</strong> vous sera présenté à la fin de
                      cette consultation. Ce traitement n’est pas pris en charge
                      par l’Assurance Maladie, hormis la réalisation de
                      certaines prothèses sur implants. Selon votre mutuelle,
                      une prise en charge de tout ou partie des frais est
                      possible en fonction de votre contrat.
                    </h6>
                    <h6>
                      La seconde étape est la réalisation d’un
                      <strong> Cone Beam</strong>, examen d’imagerie permettant
                      l’étude de l’os au niveau du site implantaire, et d’un
                      moulage de votre bouche pour confectionner un guide (si
                      nécessaire). Au besoin, un bilan sanguin peut vous être
                      prescrit.
                    </h6>
                    <h6>
                      L’ <strong>intervention</strong> fait suite à cette étude.
                      Sa durée varie en fonction du nombre d’implants à poser.
                      Elle se déroule sous anesthésie locale et la gencive sera
                      suturée. A la suite sont prévus des rendez-vous de
                      contrôle de cicatrisation (à 1 semaine, 1 mois, 3 mois).
                      La <strong>cicatrisation</strong> se fait fil du temps:
                      entre 2 et 6 mois.
                    </h6>
                    <h6>
                      Pendant ce temps de cicatrisation, il est possible de
                      réaliser, selon les cas, une prothèse transitoire. La
                      réalisation de la <strong>prothèse</strong> définitive se
                      fait sur 2 à 3 séances.
                    </h6>
                    <h6>
                      Vient ensuite le temps de la <strong>maintenance</strong>.
                      Tout comme vos dents naturelles, vos implants auront
                      besoin d’une hygiène méticuleuse. Les brossettes et le jet
                      interdentaire seront vos alliés et un check- up régulier
                      chez votre dentiste est recommandé.
                    </h6>
                  </div>
                  <div>
                    <div className="card">
                      <div className="icon-container">
                        <BsFillCameraVideoFill className="icon" />
                      </div>
                      <h1>L'édentation complète en vidéo</h1>
                      <div className="implant-video">
                        <ReactPlayer
                          url={videoitotal}
                          controls={true}
                          width="90vw"
                          height="100%"
                        />
                      </div>
                    </div>
                    <div className="card">
                      <h1>Comment se prépare la pose d’implants?</h1>
                      <h6 className="thin">
                        Une étude préalable est nécessaire à la pose d’implant.
                        Le praticien fait le point avec vous sur vos attentes et
                        ce qui peut être espérer de la pose d’implants, aux
                        niveaux fonctionnels et esthétiques. Ensuite un Cone
                        Beam est réalisé, il permet au chirurgien-dentiste de
                        choisir l’implant à utiliser et de savoir une greffe est
                        nécessaire (cas où le volume osseux est insuffisant). Il
                        peut vous être prescrit des médicaments contre le
                        stress, des vitamines. Au cas par cas, le praticien
                        évalue l’état de santé du patient et ses besoins.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel className="custom-tab-panel" id="sinusLift">
              <div>
                <div className="cards">
                  <div className="card">
                    <div className="icon-container">
                      <BsFillCameraVideoFill className="icon" />
                    </div>
                    <h1>Sinus lift en vidéo</h1>
                    <div className="implant-video">
                      <ReactPlayer
                        url={videoisinus}
                        controls={true}
                        width="90vw"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="card">
                    <h1>Le Sinus Lift</h1>
                    <h6>
                      Le sinus maxillaire est une cavité naturelle qui se situe,
                      la plupart du temps, immédiatement au-dessus de la zone
                      des prémolaires et molaires du haut. Lorsque les dents
                      sont perdues et non remplacées, l’os se résorbe. Il
                      devient alors impossible de poser des implants à cet
                      endroit tant l’épaisseur osseuse est insuffisante. Dans
                      cette zone, il n’est pas rare de devoir repousser un peu
                      le sinus pour positionner un implant de bonne dimension.
                    </h6>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <h6>
                      Pour atteindre le sinus, l’accès peut se faire par la
                      crête, c’est une technique réserver au cas ou il y a peu
                      de volume manquant (épaisseur supérieure à 6mm).
                      <br></br> <br></br>
                      Dans le cas où l’épaisseur d’os est vraiment faible
                      (inférieure à 4mm), un abord latéral sera fait. Dans notre
                      cabinet ce sinus lift latéral se fait en collaboration
                      avec l’ORL de Châteaubriant pour mieux visualiser le sinus
                      et décoller la membrane. Dans la grande majorité des cas
                      nous mettons les implants dans la même séance.
                      <br></br> <br></br>
                      Dans les deux cas, un greffon est placé ; celui-ci
                      laissera progressivement place à un os nouvellement formé
                      : le plancher sinusien se trouve épaissi. Pour ces
                      procédures le temps de cicatrisation est de 6 mois. Avant
                      d’envisager un soulever de sinus, il n’est pas rare qu’un
                      avis ORL soit demandé.
                    </h6>
                  </div>
                  <div className="card">
                    <div className="icon-container">
                      <BsFillCameraVideoFill className="icon" />
                    </div>
                    <h1>Sinus lift latéral en vidéo</h1>
                    <div className="implant-video">
                      <ReactPlayer
                        url={videosl}
                        controls={true}
                        width="90vw"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div>
                    <div className="card">
                      <h1>Comment se déroule l’intervention?</h1>
                      <h6>
                        Avant la pose la réalisation d’un{" "}
                        <strong>Cone Beam</strong> permet de préparer un plan de
                        traitement adapté. Il permet de choisir les dimensions
                        de l’implant à utiliser et, éventuellement, la
                        confection d’un guide chirurgical.
                      </h6>
                      <h6>
                        La pose d’implant se fait sous anesthésie locale. L’os
                        de la mâchoire est foré pour pouvoir y visser l’implant.
                        Une fois que celui-ci est positionner on le protège avec
                        une vis de couverture qui permet aussi la bonne
                        cicatrisation gingivale.
                      </h6>
                      <h6>
                        La technique Flapless permet de poser l’implant sans
                        faire d’incision gingivale: le forage perce la gencive
                        et l’os dans un même mouvement, il y a donc moins de
                        saignement. Cette technique est utilisée lorsque l’os à
                        un volume idéal. Lors de son exécution le praticien à
                        peu de visibilité, et il est parfois préférable
                        d’utiliser une technique dite conventionnelle, durant
                        laquelle la gencive est ouverte, permettant de mieux
                        juger la position de l’implant dans l’os.
                      </h6>
                      <h6>
                        Lors de la pose le praticien choisit entre deux options
                        de fermeture: l’enfouissement total ou l’enfouissement
                        partiel. Dans le cas d’un enfouissement total, un
                        deuxième temps chirurgical permettra de dégager la tête
                        de l’implant en amont de la confection de la prothèse.
                        L’enfouissement de l’implant n’impacte pas le temps de
                        cicatrisation post-opératoire qui est estimé entre 3 et
                        6 mois.
                      </h6>
                    </div>
                    <div className="card">
                      <h1>Est-ce que ça fait mal?</h1>
                      <h6>
                        Après l’intervention on peut avoir plusieurs réactions.
                        Evidemment, cela varie en fonction de chaque personne.
                        <br />
                        La <strong>douleur</strong> dépend principalement de
                        l’importance de l’intervention. La gêne est de très
                        faible à nulle s’il s’agit d’un implant unitaire.
                        <br /> On peut également voir survenir un{" "}
                        <strong>hématome</strong> ou un
                        <strong>œdème</strong>. <br />À la suite de l’opération
                        des conseils vous seront donnés, suivez-les sans
                        attendre que la douleur ne s’installe. Nous vous
                        accompagnerons dans la gestion de votre douleur et de
                        votre stress du début du traitement à la fin, n’hésitez
                        pas à revenir vers nous en cas de doutes.
                      </h6>
                    </div>
                    <img className="card" src={sinuslift} />
                  </div>

                  <div>
                    <div className="card">
                      <h1>A quoi s’attendre après la pose d’implants?</h1>
                      <h6>
                        Comme tout acte chirurgical, la pose d’implant peut
                        entrainer quelques effets indésirables en post-
                        opératoires (œdème, hématome, douleur). Ces effets sont
                        transitoires et s’estompent avec le temps. Toutefois si
                        vous êtes inquiet n’hésitez pas à contacter le cabinet
                        dentaire.
                        <br />
                        Il peut arriver que l’implant soit rejeté. Dans ce cas,
                        nous laissons l’os cicatrisé puis réévaluons la
                        possibilité de positionner un nouvel implant. <br /> Les
                        implants, comme les dents naturelles, ont besoin d’un
                        entretien quotidien. Il est recommandé d’utiliser les
                        brossettes et le jet d’eau interdentaire pour pouvoir
                        bien nettoyer les zones entre les dents et l’implant.
                        Nous vous invitons à avoir un suivi régulier chez votre
                        chirurgien-dentiste pour contrôler vos implants. <br />
                        C’est cette maintenance qui permettra de détecter
                        précocement d’éventuelles complications telles qu’une
                        perte osseuse ou de gencive autour de l’implant ou bien
                        la mobilité de l’implant.
                      </h6>
                    </div>
                    <div className="card">
                      <h2>La prothèse</h2>
                      <h6>
                        Le protocole implantaire est souvent guidé par le projet
                        prothétique. La prothèse implantaire doit être
                        esthétique et fonctionnelle. Dans certains cas des
                        guides ou des maquettes peuvent être réalisées pour
                        visualiser la position des prothèses. <br /> La prothèse
                        fixe sur implant se confectionne en 2 à 3 rendez-vous
                        (comme une couronne sur dent naturelle): d’abord les
                        empreintes puis la pose et les réglages. Concernant la
                        fixation de la prothèse sur l’implant, il existe deux
                        systèmes de fixation. La prothèse vissée, un puits à
                        travers la couronne permet «transvisser» cette dernière
                        sur l’implant. La prothèse scellée, quant à elle, se
                        colle sur le piller intermédiaire. <br /> Les implants
                        peuvent aussi servir à stabiliser une prothèse amovible
                        complète ou partielle. <br />
                        Dans la majorité des cas, la réalisation de prothèse se
                        fait après quelques mois de façon à ne pas pénaliser
                        l’ostéointégration, au risque de perdre l’implant.
                        <br /> Dans de rares cas, il est possible de réaliser
                        une prothèse transitoire placer le jour de la pose de
                        l’implant: c’est la mise en charge immédiate. Ces cas
                        sont le plus souvent ceux des dents visibles. Ce
                        protocole reste contraignant pour le patient qui ne doit
                        pas solliciter cette prothèse en mastiquant. La prothèse
                        transitoire est volontairement plus courte que les dents
                        naturelles pour qu’elle ne soit pas en contact avec les
                        autres dents.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h1>A quoi s’attendre après la pose d’implants?</h1>
                  <h6>
                    Comme tout acte chirurgical, la pose d’implant peut
                    entrainer quelques effets indésirables en post- opératoires
                    (œdème, hématome, douleur). Ces effets sont transitoires et
                    s’estompent avec le temps. Toutefois si vous êtes inquiet
                    n’hésitez pas à contacter le cabinet dentaire.
                    <br />
                    Il peut arriver que l’implant soit rejeté. Dans ce cas, nous
                    laissons l’os cicatrisé puis réévaluons la possibilité de
                    positionner un nouvel implant. <br /> Les implants, comme
                    les dents naturelles, ont besoin d’un entretien quotidien.
                    Il est recommandé d’utiliser les brossettes et le jet d’eau
                    interdentaire pour pouvoir bien nettoyer les zones entre les
                    dents et l’implant. Nous vous invitons à avoir un suivi
                    régulier chez votre chirurgien-dentiste pour contrôler vos
                    implants. <br />
                    C’est cette maintenance qui permettra de détecter
                    précocement d’éventuelles complications telles qu’une perte
                    osseuse ou de gencive autour de l’implant ou bien la
                    mobilité de l’implant.
                  </h6>
                </div>
                <div className="card">
                  <h1>Peut-il y avoir des complications ?</h1>
                  <h6>
                    Deux types de complications peuvent survenir :
                    <br />
                    <br />
                    Les <strong>complications mécaniques</strong>, assez rares,
                    l’implant se fracture ou la vis de fixation de l’implant se
                    casse à l’intérieur de celui-ci. <br /> <br />
                    Les <strong>complications infectieuses</strong> : au même
                    titre que les dents, les implants peuvent être en contact
                    avec des bactéries causant des pertes tissulaires, c’est ce
                    que l’on appelle la péri-implantite.
                    <br />
                    <br />
                    Vous pouvez <strong>prévenir</strong> au mieux ces
                    complications en apportant un soin appliqué à{" "}
                    <strong>l’entretien</strong> de votre bouche (utilisation de
                    la brosse à dent et d’outils à usage interdentaire (fil,
                    brossettes, pulseur d’eau)). Bien sûr, cette
                    manutention,passe également par un contrôle régulier chez le
                    chirurgien-dentiste. Il pourra vous aider en réalisant un
                    <strong>nettoyage</strong> et en vérifiant/corrigeant
                    l’occlusion (contacts entre les dents) de façon à éviter les
                    complications mécaniques.
                    <br />
                    <br /> La <strong>péri-implantite</strong> est une maladie
                    infectieuse qui provoque une inflammation tissulaire
                    chronique autour de l’implant. C’est l’équivalent de la
                    parodontite pour la dent naturelle. Lorsqu’elle n’est pas
                    traitée ou qu’elle se développe de façon agressive, elle
                    mène à la perte de l’implant. Elle se manifeste par des
                    saignements lors du brossage, un gonflement de la gencive,
                    de petites gênes à la pression ou encore un écoulement blanc
                    au niveau du col de l’implant. La péri-implantite survient
                    plus facilement chez les patients déjà sujet à la
                    parodontite, les fumeurs, les personnes souffrant de diabète
                    et lorsque l’hygiène est insuffisante. Si la péri-implantite
                    n’est pas soignée elle peut se propager aux dents
                    adjacentes.
                  </h6>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel" id="greffeOsseuse">
              <div>
                <div className="cards">
                  <h6 className="card">
                    <h1>Les greffes osseuses</h1>
                    Si lors de l’analyse de votre cas le praticien remarque un
                    manque de volume osseux il peut vous proposer le recours à
                    une greffe osseuse. Celle-ci peut se faire via un
                    prélèvement sur votre propre mâchoire ou, sans prélèvement,
                    par ajout d’un matériau (d’origine humaine, synthétique ou
                    animale).
                  </h6>
                  <div className="card">
                    <img className="implant-img" src={greffeOsseuse}></img>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <div className="icon-container">
                      <BsFillCameraVideoFill className="icon" />
                    </div>
                    <h1>Greffe osseuse en vidéo</h1>
                    <div className="implant-video">
                      <ReactPlayer
                        url={videoig}
                        controls={true}
                        width="90vw"
                        height="100%"
                      />
                    </div>
                  </div>
                  <h6 className="card">
                    À la suite d’une greffe, peuvent apparaître : un saignement,
                    un hématome ou un léger œdème. Des complications quant à
                    l’intégration de la greffe sont plus fréquentes chez les
                    patients fumeurs.
                    <br />
                    <br />
                    Selon les cas, une période de 3 à 9 mois est nécessaire
                    avant de pouvoir poser les implants.
                    <br />
                    <br />
                    Cette intervention est un acte réalisé à notre cabinet, sous
                    anesthésie locale, dans une salle préparée. Les cas
                    nécessitant un prélèvement osseux important seront adressés
                    à notre correspondant spécialiste qui réalisera l’acte en
                    clinique.
                  </h6>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default ImplantsDentaires;
