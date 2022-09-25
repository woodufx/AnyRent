import React, { useState } from "react";
import "./dropdown.less";
import check from "../../assets/styles/img/iCheck.png";

interface DropdownProps {
    values: string[];
}

const Dropdown = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>();

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: string) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <div className="dropdown-wrapper">
            <div className="dropdown-header" onClick={toggling}>
                {selectedOption || "Dropdown"}
            </div>
            {isOpen && (
                <div className="dropdown-list-container">
                    <ul className="dropdown-list">
                        {props.values.map((option: string) => {
                            return (
                                <li className="dropdown-option" onClick={onOptionClicked(option)}>
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

export default Dropdown;
