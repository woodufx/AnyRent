import React from "react";
import starFilled from "../../assets/styles/svg/icons/starFilled.svg";
import starEmpty from "../../assets/styles/svg/icons/starEmpty.svg";
import "./rating.less";

interface IRatingProps {
    value: number;
}

export const ARRating = (props: IRatingProps) => {

    const numbers = [1, 2, 3, 4, 5];

    return (
        <div className="ar-rating-wrapper">
            {numbers.map((number, index) => {
                if (number <= props.value) {
                    return <img key={index} src={starFilled} />;
                } else {
                    return <img key={index} src={starEmpty} />;
                }
            })}
        </div>
    );
};


