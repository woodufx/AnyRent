import React, { useState } from "react";
import ARCalendar from "./ARCalendar";
import moment, { Moment } from "moment";
import "./datePicker.less";
import calendar from "../../assets/styles/svg/icons/calendar.svg";

interface IARDatePickerProps {
    onChange?: (day: string) => void;
}

const ARDatePicker = ({ onChange }: IARDatePickerProps) => {
    const [isCalendarShow, setIsCalendarShow] = useState<boolean>(false);
    const [value, setValue] = useState<Moment>(moment());
    const [inputValue, setInputValue] = useState<string>("");

    const handler = (day: Moment) => {
        setInputValue(day.format("L"));
        setIsCalendarShow(!isCalendarShow);
        onChange!(day.format("L").toString());
    };

    return (
        <div className="ar-datepicker-container">
            <input
                className="ar-datepicker-container__input"
                value={inputValue}
                placeholder="Выберите дату"
                onChange={(e) => setInputValue(e.target.value)}
                onClick={() => setIsCalendarShow(!isCalendarShow)}
            ></input>
            {isCalendarShow && (
                <ARCalendar
                    onClick={(e: React.MouseEvent<HTMLDivElement>, day: Moment) => handler(day)}
                    value={value}
                    onChange={setValue}
                ></ARCalendar>
            )}
        </div>
    );
};

export default ARDatePicker;
