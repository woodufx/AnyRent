import React, { ChangeEventHandler, useState } from "react";
import "./dropdown.less";
import check from "../../assets/styles/img/iCheck.png";

interface DropdownProps {
    values: string[];
    defaultValue: string;
    onChange?: (value: string) => void;
}

export const ARDropdown = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>();

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: string) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        props.onChange!(value);
    };

    return (
        <div className="dropdown-wrapper">
            <div className="dropdown-header" onClick={toggling}>
                {selectedOption || props.defaultValue}
            </div>
            {isOpen && (
                <div className="dropdown-list-container">
                    <ul className="dropdown-list">
                        {props.values.map((option: string, index) => {
                            return (
                                <li key={index} className="dropdown-option" onClick={onOptionClicked(option)}>
                                    {option} {selectedOption === option && <img src={check} />}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};
