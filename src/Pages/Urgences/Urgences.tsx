import "./Urgences.scss";

import { useTheme } from "../../ThemeContext";
import Footer from "../../Components/shared/Footer";
import { useEffect, useState } from "react";
import dentist from "../../assets/cabinet-dessin2.png";

const Urgences = () => {
  const { theme } = useTheme();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleResize = (e: any) => {
      setIsMobile(e.matches);
    };
    handleResize(mediaQuery);
    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);
  return (
    <div className={`honoraire-container ${theme}`}>
      {isMobile ? (
        ""
      ) : (
        <div className="banniere">
          <img src={dentist} alt="" />
        </div>
      )}

      <div className="honoraire-container__bg">
        <div className="honoraire-container__description">
          <h1 className="honoraire-container__description__titre">Urgences</h1>
          <h6 className="honoraire-container__description__texte">
            Un <b className="lol">service de garde</b> est organisé, par le Conseil de l’Ordre
            Départemental des Chirurgiens-Dentistes, les dimanches et jours
            fériés. En téléphonant au 15 vous serez adressé au
            chirurgien-dentiste de garde de votre secteur.
          </h6>
          <h6>En semaine, si un traumatisme dentaire survient, contactez
            immédiatement votre dentiste traitant.
          </h6>
          <h6>
            Si une dent définitive est expulsée : conserver la, sans la
            nettoyer, dans du sérum physiologique ou du lait, sinon conserver la
            dans votre salive. S’il est possible de réimplanter la dent, cela
            devra se faire le plus vite possible.
          </h6>
          <h6>
            Si une dent définitive est déplacée : replacer la correctement, à
            chaud, avec la pression des doigts.
          </h6>
          <h6>
            Si votre dentiste n’est pas présent au cabinet, contactez le centre
            hospitalier le plus proche.
          </h6>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Urgences;
