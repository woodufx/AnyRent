import React, { useState } from "react";
import next from "../../assets/styles/img/next.png";
import prev from "../../assets/styles/img/prev.png";
import "./carousel.less";
import ProductImg from "../../assets/styles/img/ProductImg.png";

interface IARCarouselProps {
    children:any;
    width?:string;
}

const ARCarousel = ({ children, width }: IARCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex: any) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    return (
        <div className="carousel" style={{ width: width }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

            <div className="indicators">
                {React.Children.map(children, (child, index) => {
                    return (
                        <img
                            className={index === activeIndex ? "active" : ""}
                            onClick={() => {
                                updateIndex(index);
                            }}
                            src={ProductImg}
                        ></img>
                    );
                })}
            </div>

            <button
                className="indicator-buttons__prev"
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
            >
                <img src={prev} />
            </button>
            <button
                className="indicator-buttons__next"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
            >
                <img src={next} />
            </button>
        </div>
    );
};

export default ARCarousel;
