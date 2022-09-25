import React, { useState } from "react";
import ARTimeForm from "./ARTimeForm";
import moment, { Moment } from "moment";
import "./timePicker.less";
import calendar from "../../assets/styles/svg/icons/calendar.svg";
import { IValueProps, IARTimePickerProps } from "./timepicker.d";

const ARTimePicker = ({ onChange }: IARTimePickerProps) => {
    const [isTimeFormShow, setIsTimeFormShow] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState({ startTime: -1, endTime: -1 });

    const timeValuesHandler = (time: number) => {
        if (value.startTime === -1) {
            setValue({ ...value, startTime: time });
        } else if (value.endTime === -1) {
            setValue({ ...value, endTime: time });
        } else if (value.startTime && value.startTime) {
            setValue({ ...value, startTime: time, endTime: -1 });
        }
    };

    const valuesHandler = (value: IValueProps) => {
        if (value.startTime != -1 && value.endTime != -1) {
            setInputValue(`${value.startTime}:00 - ${value.endTime}:00`);
            onChange!(value);
        }
    };

    return (
        <div className="ar-datepicker-container">
            <input
                className="ar-datepicker-container__input"
                value={inputValue}
                placeholder="Доступное время"
                onChange={(e) => setInputValue(e.target.value)}
                onClick={() => setIsTimeFormShow((prev) => !prev)}
            ></input>
            {isTimeFormShow && (
                <ARTimeForm
                    value={value}
                    onChange={timeValuesHandler}
                    getValues={() => {
                        valuesHandler(value);
                    }}
                ></ARTimeForm>
            )}
        </div>
    );
};

export default ARTimePicker;
