import React from "react";
import starFilled from "../../assets/styles/svg/icons/starFilled.svg";
import starEmpty from "../../assets/styles/svg/icons/starEmpty.svg";
import "./rating.less";

interface IRatingProps {
    value: number;
}

const Rating = (props: IRatingProps) => {

    const numbers = [1, 2, 3, 4, 5];

    return (
        <div className="ar-rating-wrapper">
            {numbers.map((number) => {
                if (number <= props.value) {
                    return <img src={starFilled} />;
                } else {
                    return <img src={starEmpty} />;
                }
            })}
        </div>
    );
};

export default Rating;
