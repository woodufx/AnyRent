import React, { ChangeEventHandler, useState } from "react";
import "./searchInput.less";

export interface ARSearchInputProps {
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ARSearchInput= (props: ARSearchInputProps) => {
  
    return (
        <div className="search-input-wrapper">
            <label className="anyrent-search-input">
                <input
                    type="text"
                    placeholder=" "
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        props.onChange!(e);
                    }}
                />
                <span className="placeholder">{props.placeholder}</span>
            </label>
        </div>
    );
};

export default ARSearchInput;
