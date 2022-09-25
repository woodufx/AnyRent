import React, { ChangeEventHandler } from "react";
import "./radio.less";

interface RadioProps {
    variant: "outlined" | "contained";
    label?: string;
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
const Radio = (props: RadioProps) => {
    return (
        <div>
            <label className={`ar-radio-${props.variant}`}>
                {props.label}
                <input type="radio" name={props.name} />
                <span className="radio"></span>
            </label>
        </div>
    );
};

export default Radio;
