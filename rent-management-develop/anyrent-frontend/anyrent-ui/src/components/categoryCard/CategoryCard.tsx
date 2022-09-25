import React from "react";
import "./categoryCard.less";
import categoryIcon from "../../assets/styles/img/categoryIcon.png";

export interface ICategoryCardProps {
    title: string;
    image?: string;
    circleColor?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CategoryCard = (props: ICategoryCardProps) => {
    return (
        <div className="ar-category-wrapper" onClick={(e) => props.onClick!(e)}>
            <div className="ar-category__inner">
                <div className="ar-category__title">{props.title}</div>
                <div className="ar-category__back">
                    <div className="ar-category__img" style={{ backgroundImage: `url(${props.image})` }}></div>
                    <div className="ar-category__circle" style={{ backgroundColor: props.circleColor }}></div>
                </div>
                <div className="ar-category__icon">
                    <img src={categoryIcon} />
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
