import { ReactChild } from "react";
import "./carousel.less";

interface IARCarouselItemProps {
    children:React.ReactNode | Element;
    width?:string;
}

export const ARCarouselItem = ({ children, width }: IARCarouselItemProps) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};
