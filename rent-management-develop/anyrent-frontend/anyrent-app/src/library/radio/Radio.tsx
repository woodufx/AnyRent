import React, { ChangeEventHandler } from "react";
import "./radio.less";

interface RadioProps {
    variant: "outlined" | "contained";
    label?: string;
    name: string;
    checked: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export const ARRadio = (props: RadioProps) => {
    return (
        <label className={`ar-radio-${props.variant}`}>
            {props.label}
            <input type="radio" name={props.name} checked={props.checked} onChange={props.onChange}/>
            <span className="radio"></span>
        </label>
    );
};
