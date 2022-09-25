import React, { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import "moment/locale/ru";
import "./timeForm.less";
import next from "../../assets/styles/img/next.png";
import prev from "../../assets/styles/img/prev.png";
import { IValueProps, IARTimeFormProps } from "./timepicker.d";

const ARTimeForm = ({ value, onChange, getValues }: IARTimeFormProps) => {
    const [timeArr, setTimeArr] = useState<number[]>();
    const [momentTime, setMomentTime] = useState(moment().format("H"));

    useEffect(() => {
        const tempTime: number[] = [];
        let i = 0;
        while (i < 24) {
            tempTime.push(i);
            i++;
        }
        setTimeArr(tempTime);
    }, []);

    useEffect(() => {
        {
            getValues!(value);
        }
    }, [value]);

    const selectedTime = (time: number) => {
        return time === value.startTime || time === value.endTime;
    };

    const betweenTime = (time: number) => {
        console.log();
        return time > value.startTime && time < value.endTime;
    };

    const pastTime = (time: number) => {
        return Number(momentTime) > time;
    };
    const timeStyleHandler = (time: number) => {
        if (selectedTime(time)) return "begin-time-selected ";
        if (pastTime(time)) return "time-before";
        if (betweenTime(time)) return "between-time-selected";
    };

    return (
        <div className="ar-time-form-container">
            {timeArr?.map((time) => {
                return (
                    <div
                        className="ar-time-form-container__time"
                        onClick={() => {
                            pastTime(time) ? console.log("error") : onChange(time);
                        }}
                    >
                        <div className={`ar-time-form-container__time__inner ${timeStyleHandler(time)}`}>{time}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ARTimeForm;
