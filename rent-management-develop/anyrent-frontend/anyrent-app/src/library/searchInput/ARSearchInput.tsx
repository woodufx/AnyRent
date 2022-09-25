import React, { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useState } from "react";
import "./searchInput.less";

export interface ARSearchInputProps {
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
}

export const ARSearchInput = (props: ARSearchInputProps) => {
    return (
        <div className="search-input-wrapper">
            <label className="anyrent-search-input">
                <input
                    type="text"
                    placeholder=" "
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.onChange!(event);
                    }}
                    onKeyPress={(event) => event.key === "Enter" && props.onKeyPress!(event)}
                />
                <span className="placeholder">{props.placeholder}</span>
            </label>
        </div>
    );
};
