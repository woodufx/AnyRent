import React, { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import "moment/locale/ru";
import "./calendar.less";
import next from "../../assets/styles/img/next.png";
import prev from "../../assets/styles/img/prev.png";

interface IARCalendarProps {
    value: Moment;
    onChange: any;
    onClick?: (e: React.MouseEvent<HTMLDivElement>, day: Moment) => void;
}

const ARCalendar = ({ value, onChange, onClick }: IARCalendarProps) => {
    const [calendar, setCalendar] = useState<Moment[][]>();
    const startDay: Moment = value.clone().startOf("month").startOf("week");
    const endDay: Moment = value.clone().endOf("month").endOf("week");

    useEffect(() => {
        const tempCalendar:Moment[][] = [];
        const day:Moment = startDay.clone().subtract(1, "day");
        while (day.isBefore(endDay, "day")) {
            tempCalendar.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, "day").clone())
            );
            setCalendar(tempCalendar);
        }
    }, [value]);

    const selectedDay = (day: Moment) => {
        return value.isSame(day, "day");
    };

    const beforeToday = (day: Moment) => {
        return day.isBefore(new Date(), "day");
    };

    const isToday = (day: Moment) => {
        return day.isSame(new Date(), "day");
    };

    const dayHandler = (day: Moment) => {
        if (beforeToday(day)) return "day-before";
        if (selectedDay(day)) return "day-selected";
        if (isToday(day)) return "day-today";
    };

    const currentMonth = () => {
        let tempValue = value.locale("ru").format("MMMM");
        return tempValue[0].toUpperCase() + tempValue.slice(1);
    };

    const currentYear = () => {
        return value.format("YYYY");
    };

    const prevMonth = () => {
        return value.clone().subtract(1, "month");
    };

    const nextMonth = () => {
        return value.clone().add(1, "month");
    };

    const thisMonth = () => {
        return value.isSame(new Date(), "month");
    };

    const dayNames = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

    return (
        <div className="ar-calendar-container">
            <div className="ar-calendar-container__header">
                <div
                    className="ar-calendar-container__header__icon"
                    onClick={() => {
                        !thisMonth() && onChange(prevMonth());
                    }}
                >
                    {!thisMonth() ? (
                        <div>
                            <img src={prev} />
                        </div>
                    ) : null}
                </div>
                <div className="ar-calendar-container__header__title">
                    {currentMonth()} {currentYear()}
                </div>
                <div
                    className="ar-calendar-container__header__icon"
                    onClick={() => {
                        onChange(nextMonth());
                    }}
                >
                    <img src={next} />
                </div>
            </div>
            <div className="ar-calendar-container__day-names">
                {dayNames.map((day, index) => (
                    <div>{day}</div>
                ))}
            </div>
            {calendar?.map((week) => {
                return (
                    <div className="ar-calendar-container__week">
                        {week.map((day) => {
                            return (
                                <div onClick={() => !beforeToday(day) && onChange(day)} className="ar-calendar-container__week__day">
                                    <div onClick={(e) => onClick!(e, day)} className={`ar-calendar-container__week__day__inner ${dayHandler(day)}`}>
                                        {day.format("D").toString()}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default ARCalendar;
