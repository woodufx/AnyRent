import React, { useState } from "react";
import "./toggleGroup.less";

interface IToggleGroupProps {
    children?: JSX.Element[] | React.ReactNode[] | any[];
    size?: string;
    toggleHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ARToggleGroup = ({ children, toggleHandler, size }: IToggleGroupProps) => {
    const [clickedId, setClickedId] = useState<number>(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        setClickedId(id);
        toggleHandler!(event);
    };

    const checkPosition = (item: React.ReactNode) => {
        if (item === children![0]) {
            return "left";
        } else if (item === children![children!.length - 1]) {
            return "right";
        } else {
            return "center";
        }
    };


    return (
        <div className="ar-toggle-group-wrapper">
            {children?.map((item, i) => {
                return (
                    <button
                        className={`ar-toggle-button ${size} ar-toggle-button-${checkPosition(item)} ar-toggle-button-${
                            i === clickedId ? "selected" : ""
                        }`}
                        key={i}
                        name={item.props.alt}
                        onClick={(event) => handleClick(event, i)}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
};
