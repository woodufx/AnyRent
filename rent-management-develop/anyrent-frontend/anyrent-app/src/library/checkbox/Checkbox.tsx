import React, { ChangeEventHandler } from "react";
import "./checkbox.less";

interface CheckBoxProps {
    variant: "outlined" | "contained";
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onChangeValue?: (value: string, status: boolean) => void;
    checked?: boolean;
    value?: string;
    isDisabled?: boolean;
}
    
export const ARCheckbox = (props: CheckBoxProps) => {

    const setValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeValue && props.onChangeValue!(event.target.value, event.target.checked);
        props.onChange && props.onChange!(event);
    }

    return (
        <label className={`ar-checkbox-${props.variant}`}>
            {props.label}
            <input 
                type="checkbox" 
                checked={props.checked && true}
                value={props.value}
                onChange={setValues}
                disabled = {props.isDisabled} 
            />
            <span className="checkmark"></span>
        </label>
    );
};
