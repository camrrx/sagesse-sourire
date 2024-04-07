import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Actualite.scss";
import { ActualitesData } from "../../../assets/ActualiteData";
import virus from "../../../assets/actu/virus.jpeg";
import calendar from "../../../assets/actu/calendar.jpeg";
import refund from "../../../assets/actu/refund.jpeg";
import medical from "../../../assets/actu/medical.jpeg";

export interface ActualiteItem {
  id: number;
  img?: string;
  title: string;
  description: string;
  document: {
    title: string;
    actions: string | { questionnairecovid: string };
  };
}

const Actualite: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      const newScrollPosition = scrollPosition + 600;
      if (newScrollPosition <= scrollContainerRef.current.scrollWidth) {
        setScrollPosition(newScrollPosition);
        scrollContainerRef.current.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      const newScrollPosition = scrollPosition - 600;
      if (newScrollPosition >= -250) {
        setScrollPosition(newScrollPosition);
        scrollContainerRef.current.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleDocumentClick = (
    actions: string | { questionnairecovid: string }
  ) => {
    if (!actions) return;

    if (typeof actions === "string") {
      window.location.href = actions;
    } else if (actions.questionnairecovid) {
      const link = document.createElement("a");
      link.href = actions.questionnairecovid;
      link.download = "questionnairecovid.pdf";
      link.click();
    }
  };

  return (
    <>
      <div className="actualite-page">
        <h2 className="actualite-title">Actualités</h2>
        <div className="actualite-container">
          <button className="pagination-button" onClick={handlePrevClick}>
            <FaChevronLeft />
          </button>
          <div
            className="actu-cards-container"
            ref={scrollContainerRef}
            onScroll={() => {
              setScrollPosition(scrollContainerRef.current?.scrollLeft || 0);
            }}
          >
            {ActualitesData.map((actu: ActualiteItem) => (
              <div className={`card`} key={actu.id}>
                <div className="card__image">
                  <div
                    className="card__image-background"
                    style={{
                      backgroundImage: `url(${
                        actu.img === "virus"
                          ? virus
                          : actu.img === "refund"
                          ? refund
                          : actu.img === "calendar"
                          ? calendar
                          : medical
                      })`,
                    }}
                  />
                  <h1 className="card__title">{actu.title}</h1>
                </div>
                <div className="card__content">
                  <p className="card__describe">{actu.description}</p>
                  {actu.document.title.length > 1 ? (
                    <button
                      className="card__document button-contact button-1"
                      onClick={() => handleDocumentClick(actu.document.actions)}
                    >
                      {actu.document.title}
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <button className="pagination-button" onClick={handleNextClick}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Actualite;
