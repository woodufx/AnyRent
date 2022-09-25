import React, { ChangeEventHandler } from "react";
import { ARInput } from "../input";
import { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from "react";
import "./rangeSlider.less";

export interface IRangeSliderProps {
    min: number | string;
    max: number | string;
    onChange?: (min: number, max: number) => void;
}

export const ARRangeSlider: FC<IRangeSliderProps> = ({ min, max, onChange }) => {

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const [inputMinResponse, setInputMinResponse] = useState(min);
    const [inputMaxResponse, setInputMaxResponse] = useState(max);
    const [inputMinVal, setInputMinVal] = useState(min);
    const [inputMaxVal, setInputMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);
    const priceGabe: number = Math.round((+max - +min) / 20);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - +min) / (+max - +min)) * 100),
        [min, max]
    );

    const handleEvent = () => {
        onChange!(+minVal, +maxVal);
    }

    useEffect(() => {
        onChange!(+minVal, +maxVal);
    }, [inputMinResponse, inputMaxResponse])


    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(+minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(+maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    return (
        <div className="ar-range-slider-container">

            <div className="ar-range-slider-container__slider">
                <div className="ar-range-slider-container__slider-background">
                    <div ref={range} className="ar-range-slider-container__slider-progress">
                    </div>
                </div>
            </div>

            <div className="ar-range-slider-container__range">
                <input
                    type="range"
                    className="ar-range-slider-container__range-min"
                    value={minVal}
                    ref={minValRef}
                    min={min}
                    max={max}
                    onMouseUp={handleEvent }
                    
                    onChange={(e) => {
                            const value: number = Math.min(+e.target.value, +maxVal - priceGabe);
                            setMinVal(value);
                            setInputMinVal(value);
                            e.target.value = value.toString();
                    }} />
                <input
                    type="range"
                    className="ar-range-slider-container__range-max"
                    value={maxVal}
                    ref={maxValRef}
                    min={min}
                    max={max}
                    onMouseUp={ handleEvent }
                    
                    onChange={(e) => {
                        const value: number = Math.max(+e.target.value, +minVal + priceGabe);;
                        setMaxVal(value);
                        setInputMaxVal(value);
                        e.target.value = value.toString();
                    }} />
            </div>

            <div className="ar-range-slider-container__inputs">
                <input className="ar-range-slider-container__input" type="number" value={inputMinVal}
                    onChange={(e) => {
                        if(e.target.value === "") {
                            setInputMinVal("");
                        }
                        else {
                            setInputMinVal(+e.target.value);
                        }
                    }}
                    onBlur={(e) => {
                        if (Math.abs(+maxVal - +inputMinVal) < priceGabe || maxVal < inputMinVal) {
                            setInputMinVal(+maxVal - priceGabe);
                            setMinVal(+maxVal - priceGabe);
                            setInputMinResponse(+maxVal - priceGabe); 
                        }
                        else if (inputMinVal === "") {
                            setInputMinVal(minVal);
                            setInputMinResponse(minVal); 
                        }
                         else {
                            setMinVal(inputMinVal);
                            setInputMinResponse(inputMinVal); 
                        }
                    }} />
                <div className="ar-range-slider-container__rectangle"></div>
                <input className="ar-range-slider-container__input" type="number" value={inputMaxVal}
                    onChange={(e) => {
                        if (e.target.value === "") {
                            setInputMaxVal("");
                        }
                        else {
                            setInputMaxVal(+e.target.value);
                        }
                    }} 
                    onBlur={(e) => {
                        if (inputMaxVal === "") {
                            setInputMaxVal(maxVal);
                            setInputMaxResponse(maxVal);
                        }
                        else if (Math.abs(+inputMaxVal - +minVal) < priceGabe || inputMaxVal < minVal) {
                            setInputMaxVal(+minVal + priceGabe);
                            setMaxVal(+minVal + priceGabe);
                            setInputMaxResponse(+minVal + priceGabe);
                        } 
                        else if (inputMaxVal>max) {
                            setInputMaxVal(max);
                            setMaxVal(max);
                            setInputMaxResponse(max);
                        } else {
                            setMaxVal(inputMaxVal);
                        } 
                    }} />
            </div>

        </div>
    );
};

export default ARRangeSlider;
