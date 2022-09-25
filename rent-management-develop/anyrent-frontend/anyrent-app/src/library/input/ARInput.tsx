import React, { ChangeEventHandler, useState } from "react";
import "./input.less";

export interface ARInputProps {
    variant: "standard" | "outlined";
    size?: "medium" | "large";
    type?: "password" | "email";
    icon?: "email" | "user" | "password" | "usersignup" | "calendar" | "phone" | "first-second-name" | "email-purple";
    valid?: boolean | "none";
    helperText?: string;
    label?: string;
    placeholder?: string;
    mask?: "phone" | "email" | "date" | "username" | "numbers";
    value?: string;
    required?: boolean;
    isDisabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    maxLength?: number;
}

export const ARInput = (props: ARInputProps) => {
    const [inputStyle, setInputStyle] = useState("");

    const maskHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (props.mask) {
            case "phone":
                phoneMask(event);
                break;
            case "email":
                emailMask(event);
                break;
            case "date":
                dateMask(event);
                break;
            case "username":
                usernameMask(event);
                break;
            case "numbers":
                numbersMask(event);
                break;
        }
    };

    const isValidDate = (dateString: string) => {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;

        var parts = dateString.split("/");
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[2], 10);

        if (year < 1899 || year > 2025 || month == 0 || month > 12) return false;

        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

        return day > 0 && day <= monthLength[month - 1];
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

    const numbersMask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const re = /^[0-9]+$/i;
        props.onChange!(event);
        re.test(target.value) && target.value.length >= 1 ? setInputStyle("success") : setInputStyle("error");
    };

    const emailMask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        re.test(target.value) ? setInputStyle("success") : setInputStyle("error");
        props.onChange!(event);
    };

    const usernameMask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const re = /^[а-яa-zA-Z0-9]+$/i;
        re.test(target.value) && target.value.length >= 3 ? setInputStyle("success") : setInputStyle("error");
        props.onChange!(event);
    };

    const dateMask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        let matrix = "__/__/____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = target.value.replace(/\D/g, "");
        target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        isValidDate(target.value) && target.value.length === 10 ? setInputStyle("success") : setInputStyle("error");
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
                {props.label && (
                    <div className="ar-input-label">
                        {props.label}
                        {props.required && <span className="ar-input-label__star"> *</span>}
                    </div>
                )}
                <label className={`anyrent-input variant-${props.variant} size-${props.size} icon-${props.icon} ${validation()}`}>
                    <input
                        className={inputStyle}
                        type={props.type ? props.type : "text"}
                        placeholder=" "
                        value={props.value && props.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.mask ? maskHandler(e) : props.onChange!(e);
                        }}
                        disabled={props.isDisabled}
                        maxLength={props.maxLength}
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
