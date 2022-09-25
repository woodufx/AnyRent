import React, { useEffect, useState } from "react";
import "./pagination.less";
import next from "../../assets/styles/img/next.png";
import prev from "../../assets/styles/img/prev.png";

interface IPaginationProps {
    pages: number;
    variant: "simple" | "small" | "wide";
    setCurrentPage?: any;
}

export const ARPagination = (props: IPaginationProps) => {
    const [currentButton, setCurrentButton] = useState<number | string>(1);
    const [arrCurrentButtons, setArrCurrentButtons] = useState<any>();

    const pageNumbers: number[] = [];
    for (let i = 1; i <= props.pages; i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        paginationCounter();
    }, [currentButton, props]);

    const paginate = (pageNumber: any) => {
        setCurrentButton(pageNumber);
    };

    // useEffect(() => {
    //     handler();
    // }, [currentPage]);

    // const handler = () => {
    //     props.onChange!(currentPage, firstItemIndex, lastItemIndex);
    // };

    const paginationCounter = () => {
        let dotsInitial = "...";
        let dotsLeft = "... ";
        let dotsRight = " ...";
        let tempNumber: any[] = [...pageNumbers];
        if (pageNumbers.length <= 6) {
            tempNumber = pageNumbers;
        } else if (currentButton >= 1 && currentButton <= 4) {
            const slice = pageNumbers.slice(0, 5);
            tempNumber = [...slice, dotsInitial, pageNumbers.length];
        } else if (currentButton === 4) {
            const slice = pageNumbers.slice(0, 5);
            tempNumber = [...slice, dotsInitial, pageNumbers.length];
        } else if (currentButton > 4 && currentButton < pageNumbers.length - 2) {
            const slice1 = pageNumbers.slice(+currentButton - 2, +currentButton);
            const slice2 = pageNumbers.slice(+currentButton, +currentButton + 1);
            tempNumber = [1, dotsLeft, ...slice1, ...slice2, dotsRight, pageNumbers.length];
        } else if (currentButton > pageNumbers.length - 4) {
            const slice = pageNumbers.slice(pageNumbers.length - 5);
            tempNumber = [1, dotsLeft, ...slice];
        } else if (currentButton === dotsInitial) {
            setCurrentButton(arrCurrentButtons[arrCurrentButtons.length - 3] + 1);
        } else if (currentButton === dotsRight) {
            setCurrentButton(arrCurrentButtons[3] + 2);
        } else if (currentButton === dotsLeft) {
            setCurrentButton(arrCurrentButtons[3] - 2);
        }
        setArrCurrentButtons(tempNumber);
        props.setCurrentPage(currentButton);
    };

    const prevPage = () => {
        currentButton !== 1 ? setCurrentButton((prev) => (prev as any) - 1) : setCurrentButton((prev) => prev);
    };

    const nextPage = () => {
        currentButton !== pageNumbers.length ? setCurrentButton((prev) => +prev + 1) : setCurrentButton((prev) => +prev);
    };

    return (
        <div className={`ar-pagination-${props.variant}`}>
            <button className="btn-icon" onClick={() => prevPage()}>
                <img className="icon" src={prev} alt="Назад" />
                {props.variant === "wide" ? <p className={currentButton !== 1 ? "active-text" : ""}>назад</p> : <></>}
            </button>
            {arrCurrentButtons?.map((number: any, index: number) => (
                <button key={index} className={number === currentButton ? "active" : ""} onClick={() => paginate(number)}>
                    {number}
                </button>
            ))}
            <button className="btn-icon" onClick={() => nextPage()}>
                {props.variant === "wide" ? <p className={currentButton === pageNumbers.length ? "" : "active-text"}>вперед</p> : <></>}
                <img className="icon" src={next} alt="Вперед" />
            </button>
        </div>
    );
};
