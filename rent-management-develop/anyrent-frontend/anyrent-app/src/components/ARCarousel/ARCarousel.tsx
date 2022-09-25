import { useRef } from "react";

import slideRight from "../../assets/styles/img/slideRight.png";
import slideLeft from "../../assets/styles/img/slideLeft.png";

import "./carousel.less";
import { AREquipmentList } from "../../library";

export interface ARCarouselProps {}

const ARCarousel = (props: ARCarouselProps) => {
    const carousel: any = useRef(null);

    const handleLeftClick = (e: any) => {
        e.preventDefault();
        // carousel.current.scrollLeft -= carousel.current.offsetWidth;
        carousel.current.scrollLeft -= 1223.9999;
    };

    const handleRightClick = (e: any) => {
        console.log("навел");
        e.preventDefault();
        carousel.current.scrollLeft += 1223.9999;
    };

    return (
        <div className="ar-carousel">
            <div className="ar-carousel-wrapper">
                <div className="ar-carousel__title">
                    <p className="ar-carousel__title-text">Популярные аренды в Вашем регионе: </p>
                </div>

                <div className="ar-carousel-container">
                    <button className="scroll-button scroll-button--left" onClick={handleLeftClick}>
                        <img className="scroll-button__img" src={slideLeft} alt="" />
                    </button>

                    <div className="ar-carousel-items-container" ref={carousel}>
                        <AREquipmentList />
                    </div>

                    <button className="scroll-button scroll-button--right" onClick={handleRightClick}>
                        <img className="scroll-button__img" src={slideRight} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ARCarousel;
