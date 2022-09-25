import React, { ChangeEventHandler } from "react";
import "./checkbox.less";

interface CheckBoxProps {
    variant: "outlined" | "contained";
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
const Checkbox = (props: CheckBoxProps) => {
    return (
        <label className={`ar-checkbox-${props.variant}`}>
            {props.label}
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
    );
};

export default Checkbox;
