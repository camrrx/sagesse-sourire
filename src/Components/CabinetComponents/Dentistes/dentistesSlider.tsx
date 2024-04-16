import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./dentistesSlider.scss";

interface Dentiste {
	name: string;
	title: string;
	functions: string[];
	photo: string;
}

interface DentistesSliderProps {
	dentistes: Dentiste[];
}

const DentistesSlider = ({ dentistes }: DentistesSliderProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentDentiste, setCurrenDentiste] = useState<Dentiste>(
		dentistes[currentIndex]
	);

	useEffect(() => {
		setCurrenDentiste(dentistes[currentIndex]);
	}, [currentIndex]);

	const goToPrevious = () => {
		if (currentIndex === 0) {
			setCurrentIndex(dentistes.length - 1);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const goToNext = () => {
		if (currentIndex === dentistes.length - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<div className={`slider-container`}>
			<div className="slider">
				<div className="dentiste-page">
					<button className="pagination-button" onClick={goToPrevious}>
						<FaChevronLeft />
					</button>
					{currentDentiste ? (
						<div className="employee">
							<div className="info">
								<h1 className="name">{currentDentiste.name}</h1>
								<h1 className="title">{currentDentiste.title}</h1>
								<div className="functions">
									{currentDentiste.functions.map((func, index) => (
										<div className="function label-1" key={index}>
											{func}
										</div>
									))}
								</div>
							</div>
							<div className="photo">
								<img
									className="photo-dentiste"
									src={`../../../src/assets/photosEmployes/${currentDentiste.photo}`}
									alt={currentDentiste.name}
								/>
							</div>
						</div>
					) : (
						""
					)}
					<button className="pagination-button" onClick={goToNext}>
						<FaChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default DentistesSlider;
