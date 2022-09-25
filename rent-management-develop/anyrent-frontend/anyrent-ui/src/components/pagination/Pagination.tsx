import React, { useEffect, useState } from "react";
import "./pagination.less";
import next from "../../assets/styles/img/next.png";
import prev from "../../assets/styles/img/prev.png";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    variant: "simple" | "small" | "wide";
}

const Pagination = (props: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState<number | string>(1);
    const [arrCurrentButtons, setArrCurrentButtons] = useState<any>();
    const paginate = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers: any[] = [];
    for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) pageNumbers.push(i);
    useEffect(() => {
        paginationCounter();
    }, [currentPage, props]);

    const paginationCounter = () => {
        let dotsInitial = "...";
        let dotsLeft = "... ";
        let dotsRight = " ...";
        let tempNumber: any[] = [...pageNumbers];
        if (pageNumbers.length <= 6) {
            tempNumber = pageNumbers;
        } else if (currentPage >= 1 && currentPage <= 4) {
            const slice = pageNumbers.slice(0, 5);
            tempNumber = [...slice, dotsInitial, pageNumbers.length];
        } else if (currentPage === 4) {
            const slice = pageNumbers.slice(0, 5);
            tempNumber = [...slice, dotsInitial, pageNumbers.length];
        } else if (currentPage > 4 && currentPage < pageNumbers.length - 2) {
            const slice1 = pageNumbers.slice(+currentPage - 2, +currentPage);
            const slice2 = pageNumbers.slice(+currentPage, +currentPage + 1);
            tempNumber = [1, dotsLeft, ...slice1, ...slice2, dotsRight, pageNumbers.length];
        } else if (currentPage > pageNumbers.length - 4) {
            const slice = pageNumbers.slice(pageNumbers.length - 5);
            tempNumber = [1, dotsLeft, ...slice];
        } else if (currentPage === dotsInitial) {
            setCurrentPage(arrCurrentButtons[arrCurrentButtons.length - 3] + 1);
        } else if (currentPage === dotsRight) {
            setCurrentPage(arrCurrentButtons[3] + 2);
        } else if (currentPage === dotsLeft) {
            setCurrentPage(arrCurrentButtons[3] - 2);
        }
        setArrCurrentButtons(tempNumber);
    };

    const prevPage = () => {
        currentPage !== 1 ? setCurrentPage((prev) => (prev as any) - 1) : setCurrentPage((prev) => prev);
    };

    const nextPage = () => {
        currentPage !== pageNumbers.length ? setCurrentPage((prev) => +prev + 1) : setCurrentPage((prev) => +prev);
    };

    return (
        <div className={props.variant}>
            <button className="btn-icon" onClick={() => prevPage()}>
                <img className="icon" src={prev} alt="Назад" />
                {props.variant === "wide" ? <p className={currentPage !== 1 ? "active-text" : ""}>назад</p> : <></>}
            </button>
            {arrCurrentButtons?.map((number: any, index: number) => (
                <button key={index} className={number === currentPage ? "active" : ""} onClick={() => paginate(number)}>
                    {number}
                </button>
            ))}
            <button className="btn-icon" onClick={() => nextPage()}>
                {props.variant === "wide" ? <p className={currentPage === pageNumbers.length ? "" : "active-text"}>вперед</p> : <></>}
                <img className="icon" src={next} alt="Вперед" />
            </button>
        </div>
    );
};

export default Pagination;
