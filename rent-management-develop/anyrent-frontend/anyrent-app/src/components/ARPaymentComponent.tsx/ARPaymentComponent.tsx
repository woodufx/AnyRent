import React, { useEffect, useState } from "react";
import prev from "../../assets/styles/img/prev.png";
import "./paymentComponent.less";
import cardImg from "../../assets/styles/img/cardImg.png";
import { ARButton, ARRating } from "../../library";
import ARTimePicker from "../../library/timePicker/ARTimePicker";
import ARDatePicker from "../../library/datePicker/ARDatePicker";
import ARPaymentMethodCard from "../../library/paymentMethodCard/ARPaymentMethodCard";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { getItem } from "../../core/store/itemsSlice";
import Loading from "../../library/loading/Loading";
import { IItem } from "../../core/models/item.model";
import { IOrder } from "../../core/models/order.model";
import DataService from "../../core/services/data.service";
import { ToastContainer, toast } from "react-toastify";
import { ARRoutes } from "../../core/config/routes.config";

export interface IValueProps {
    startTime: number;
    endTime: number;
}

const ARPaymentComponent = () => {
    let navigate = useNavigate();
    const passedData = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.user);
    const { currentItem } = useSelector((state: RootState) => state.items);
    const [rentTime, setRentTime] = useState<IValueProps>();
    const [rentDate, setRentDate] = useState<string>("");

    useEffect(() => {
        dispatch(getItem(passedData.id!));
    }, [passedData.id]);

    const notifySuccess = () => {
        toast.success("Заказ оплачен успешно!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const notifyError = () => {
        toast.error("Ошибка оплаты заказа!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const orderHandler = () => {
        DataService.createOrder(
            (currentItem! as IItem).id,
            (currentItem! as IItem).owner!.id,
            user.id,
            [rentDate, rentTime?.startTime, rentTime?.endTime],
            (currentItem! as IItem).price
        );
        notifySuccess();
        // navigate(ARRoutes.MAIN_PAGE);
    };

    // async function getPayment() {
    //     const url: string = "https://api.lava.ru/invoice/create";
    //     const data = {
    //         wallet_to: "R10091376",
    //         sum: '1.00',
    //     };

    //     return fetch(url,{
    //         method: 'POST',
    //         body: JSON.stringify({
    //             wallet_to: "R10091376",
    //             sum: 1.00,
    //         }),
    //         headers: {
    //                     'Content-Type' : 'application/json',
    //                     'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI1YzQ1YWI1ZC1iYzQxLTA1NjktMTE0NS1iODFiYmU4ZWI5MGMiLCJ0aWQiOiIyZjhmODM1OC03YmRiLTJiZDUtZDgzYy1iZmQzMTI4MDJhMDUifQ.ITg-tOxQoLsfBd49XI506aTMc9eujcZmofP9w8oyDqg"
    //                 }
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             return console.log(response);
    //         }
    //         console.log(response);
    //         return response;
    //     })
    // }

    return (
        <div className="ar-payment-container">
            <div className="ar-payment-container__nav-title" onClick={() => navigate(-1)}>
                <img src={prev} />
                <span>Оформление аренды товара</span>
            </div>
            {currentItem ? (
                <div className="ar-payment-container__inner">
                    <div className="ar-payment-container__inner__product">
                        <div className="ar-payment-product__info">
                            <div className="ar-payment-product__info__product-img">
                                <img src={(currentItem as IItem).cover![0]} />
                            </div>
                            <div className="ar-payment-product__info__product-text">
                                <div className="payment-product-text__title">
                                    <span>{(currentItem as IItem).title}</span>
                                </div>
                                <div className="payment-product-text__details">
                                    <span>{(currentItem as IItem).description}</span>
                                </div>
                                <div className="payment-product-text__address">
                                    <span>{(currentItem as IItem).address}</span>
                                </div>
                                <div className="payment-product-text__price-wrapper">
                                    <div className="payment-product-text__price-wrapper__rate">
                                        <ARRating value={(currentItem as IItem).rating!} />
                                    </div>
                                    <div className="payment-product-text__price-wrapper__price">
                                        <span>{(currentItem as IItem).price + "Р/час"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ar-payment-product__time-picker">
                            <div className="payment-time-picker__inner">
                                <ARDatePicker onChange={(value) => setRentDate(value)} />
                                <ARTimePicker onChange={(value) => setRentTime(value)} />
                            </div>
                        </div>
                    </div>
                    <div className="ar-payment-container__inner__payments">
                        <div className="ar-payment-product__payment-title">
                            <span>Способ оплаты:</span>
                        </div>
                        <div className="ar-payment-product__payments-container">
                            <ARPaymentMethodCard type="applePay" />
                            <ARPaymentMethodCard type="applePay" />
                            <ARPaymentMethodCard type="applePay" />
                            <ARPaymentMethodCard type="add" />
                        </div>
                        <div className="ar-payment-product__payment-info">
                            <span>*используйте способы оплаты, приведенные в разделе или добавьте свою карту</span>
                        </div>
                    </div>
                    <div className="ar-payment-container__inner__order-info">
                        <div className="ar-payment-product__order-title">
                            <span>Информация о заказе:</span>
                        </div>
                        <div className="ar-payment-product__order-info">
                            <div className="ar-payment-product__order-info__column">
                                <div className="ar-payment-product__order-info__column__keys">
                                    <span>Дата аренды: </span>
                                    <span>Время аренды: </span>
                                </div>
                                <div className="ar-payment-product__order-info__column__values">
                                    <span>{rentDate}</span>
                                    <span> {rentTime && `${rentTime?.startTime}:00 - ${rentTime?.endTime}:00`}</span>
                                </div>
                            </div>
                            <div className="ar-payment-product__order-info__column">
                                <div className="ar-payment-product__order-info__column__keys">
                                    <span>Арендодатель: </span>
                                    <span>Телефон: </span>
                                </div>
                                <div className="ar-payment-product__order-info__column__values">
                                    <span>
                                        {(currentItem! as IItem).owner!.name} {(currentItem! as IItem).owner!.surname}
                                    </span>
                                    <span>+78002324433 </span>
                                </div>
                            </div>
                            <div className="ar-payment-product__order-info__column">
                                <div className="ar-payment-product__order-info__column__keys">
                                    <span>Адрес: </span>
                                </div>
                                <div className="ar-payment-product__order-info__column__values">
                                    <span>{(currentItem as IItem).address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ar-payment-container__price">
                        <div className="ar-payment-container__price__wrapper">
                            <div className="ar-payment-container__price__wrapper__keys">
                                <span className="price-wrapper-keys__hour">Цена за час:</span>
                                <span className="price-wrapper-keys__general">Общая стоимость:</span>
                            </div>
                            <div className="ar-payment-container__price__wrapper__values">
                                <span className="price-wrapper-values__hour">{(currentItem as IItem).price}₽</span>
                                <span className="price-wrapper-values__general">
                                    {rentTime && (currentItem as IItem).price * (rentTime!.endTime - rentTime!.startTime)}₽
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="ar-payment-container__button-container">
                        <ARButton
                            variant="sign-in"
                            text="Оплатить"
                            isDisabled={
                                !rentTime || !rentDate || (rentTime && (currentItem as IItem).price * (rentTime!.endTime - rentTime!.startTime) === 0)
                            }
                            onClick={() => {
                                orderHandler();
                                setRentDate("");
                            }}
                        />
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnHover
                            draggable
                        />
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default ARPaymentComponent;
