import React, { ChangeEventHandler, useState } from "react";
import "./input.less";

export interface ARInputProps {
    variant: "standard" | "outlined";
    size?: "medium" | "large";
    type?: "password" | "email";
    icon?: "email" | "user" | "password" | "calendar" | "phone";
    valid?: boolean;
    helperText?: string;
    label?: string;
    placeholder?: string;
    mask?: "phone" | "email";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ARInput = (props: ARInputProps) => {
    const [inputStyle, setInputStyle] = useState("");

    const maskHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.mask === "phone" ? phoneMask(event) : emailMask(event);
    };

    const phoneMask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        let matrix = "+7(___)-__-__-___",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = target.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        if (event.type === "blur") {
            if (target.value.length === 2) target.value = "";
        } else setCursorPosition(target.value.length, target);
        target.value.length === 17 ? setInputStyle("success") : setInputStyle("error");
        props.onChange!(event);
    };

    const emailMask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const re = /\S+@\S+\.\S+/;
        re.test(target.value) ? setInputStyle("success") : setInputStyle("error");
        props.onChange!(event);
    };

    const setCursorPosition = (pos: any, elem: any) => {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            const range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    };

    const validation = () => {
        if (props.valid === true) {
            return "ar-input-valid";
        } else if (props.valid === false) {
            return "ar-input-not-valid";
        } else return;
    };

    return (
        <div className="ar-input-wrapper">
            <div>
                {props.label && <div className="label">{props.label}</div>}
                <label className={`anyrent-input variant-${props.variant} size-${props.size} icon-${props.icon} ${validation()}`}>
                    <input
                        className={inputStyle}
                        type={props.type ? props.type : "text"}
                        placeholder=" "
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.mask ? maskHandler(e) : props.onChange!(e);
                        }}
                    />
                    <span className="placeholder">{props.placeholder}</span>
                </label>
                {props.helperText && (
                    <div className="ar-input__helper-text">
                        <span>{props.helperText}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ARInput;
