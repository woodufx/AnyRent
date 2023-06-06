import React, { ChangeEventHandler } from "react";
import ARRangeSlider from "../rangeSlider/RangeSlider";
import { ARCheckbox } from "../checkbox";
import ARToggle from "../toggle/Toggle";
import chevronLeft from "../../assets/styles/img/chevron-left.png";
import { RootState } from "../../core/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from "react";
import "./filtration.less";

interface ARFiltrationProps {
    onChangeValue?: (values: string) => void;
    onChangePrice?: (minPrice: number, maxPrice: number) => void;
}

export const ARFiltration = (props: ARFiltrationProps) => {
    const [showOrHide, changeShowOrHide] = useState('Показать все');
    const [hideRate, setHideRate] = useState(true);
    const [hidePrice, setHidePrice] = useState(true);
    const [hideBrand, setHideBrand] = useState(false);
    const [withSale, setWithSale] = useState(false);
    const [recommend, setWithReccomend] = useState(false);
    const { itemsList } = useSelector((state: RootState) => state.items);
    let checkboxList: string[] = [];
    
    const setCheckboxValues = (value: string, cheched: boolean) => {
        cheched ? checkboxList.push(value) : checkboxList = checkboxList.filter(element => element !== value);
        props.onChangeValue && props.onChangeValue!(checkboxList.toString());
    }

    const setPriceValues = (min: number, max: number) => {
        props.onChangePrice && props.onChangePrice!(min, max);
    }

    return (
        <div className="ar-filtration-container">
            <div className="ar-filtration-container__main">
                <div className="ar-filtration-container__headerline" onClick={()=> setHidePrice(!hidePrice)}>
                    <p className="ar-filtration-container__header"> Цена</p>
                    <img className="ar-filtration__img" src={chevronLeft} alt="" style={{transform: hidePrice? "" : "rotate(180deg)"}}></img>
                </div>
                <div className="ar-filtration-container__slider" style={{display: hidePrice ? 'flex' : 'none' }}>
                    <ARRangeSlider min={0} max={9999} onChange={setPriceValues} />
                </div>
            </div>

            <div className="ar-filtration-container__main">
                <div className="ar-filtration-container__headerline" onClick={()=> setHideRate(!hideRate)}>
                    <p className="ar-filtration-container__header"> Рейтинг</p>
                    <img className="ar-filtration__img" src={chevronLeft} alt="" style={{transform: hideRate? "" : "rotate(180deg)"}} ></img>
                </div>
               
                <div className="ar-filtration-container__chheckboxcontainer"  style={{display: hideRate ? 'flex' : 'none' }}>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" value="5" label="5 звезд" onChangeValue={setCheckboxValues}/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" value="4" label="4 звезды" onChangeValue={setCheckboxValues}/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" value="3" label="3 звезды" onChangeValue={setCheckboxValues}/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" value="2" label="2 звезды" onChangeValue={setCheckboxValues}/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" value="1" label="1 звезда" onChangeValue={setCheckboxValues}/>

                    </div>
                </div>
            </div>

            <div className="ar-filtration-container__main">

                <div className="ar-filtration-container__headerline" onClick={()=> setHideBrand(!hideBrand)}>
                    <p className="ar-filtration-container__header"> Бренды</p>
                    <img className="ar-filtration__img" src={chevronLeft} alt="" style={{transform: hideBrand? "" : "rotate(180deg)"}}></img>
                </div>

                <div className="ar-filtration-container__checkboxcontainersecond" style={{display: hideBrand ? 'flex' : 'none' }}>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" label="Lib Tech"/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" label="Arbor"/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" label="Burton"/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" label="Head"/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" label="Flow"/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <ARCheckbox variant="outlined" label="Nitro"/>
                    </div>
                    <div className="ar-filtration-container__checkbox">
                        <p className="ar-filtration-container__showall" onClick={() => changeShowOrHide(showOrHide === 'Показать все' ? 'Скрыть' : 'Показать все' )}> {showOrHide}</p>
                    </div>
                </div> 
            </div>

            <div className="ar-filtration-container__main">
                <div className="ar-filtration-container__headerline">
                    <p className="ar-filtration-container__header" onClick={()=> setWithSale(!withSale)}> Товары со скидкой</p>
                    <ARToggle toggled={withSale}/>
                </div>
            </div>

            <div className="ar-filtration-container__main">
                <div className="ar-filtration-container__headerline--doublelined">
                    <p className="ar-filtration-container__header--doublelined" onClick={()=> setWithReccomend(!recommend)}> От проверенных продавцов </p>
                    <ARToggle toggled={recommend}/>
                </div>
            </div>
        </div>
        
    );
}

export default ARFiltration;