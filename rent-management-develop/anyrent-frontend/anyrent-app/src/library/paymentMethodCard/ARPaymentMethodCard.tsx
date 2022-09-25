import React from "react";
import "./paymentMethodCard.less";
import addPayment from "../../assets/styles/svg/icons/addPayment.svg";
import applePay from "../../assets/styles/img/applePay.png";
import googlePay from "../../assets/styles/img/googlePay.png";

import { IPaymentMethodCardProps } from "./ARPaymentMethodCard.d";
import { CardType } from "./ARPaymentMethodCard.d";

const CARD_TYPE_TO_ELEMENT_MAPPING: Record<CardType, (cardNumbers?: string, paymentSystem?: string, bank?: string) => JSX.Element> = {
    [CardType.APPLE]: (): JSX.Element => apple(),
    [CardType.GOOGLE]: (): JSX.Element => google(),
    [CardType.CARD]: (cardNumbers, paymentSystem, bank): JSX.Element => card(cardNumbers, paymentSystem, bank),
    [CardType.ADD]: (): JSX.Element => add(),
};

const apple = (): JSX.Element => {
    return <img src={applePay} />;
};

const google = (): JSX.Element => {
    return <img src={googlePay} style={{ width: "120px", height: "60px" }} />;
};

const card = (cardNumbers?: string, paymentSystem?: string, bank?: string): JSX.Element => {
    return (
        <div className="ar-payment-card__card">
            <div className="bank-name">
                <img></img>
                {bank}
            </div>
            <div className="card-info">
                <div className="card__numbers">**{cardNumbers?.slice(cardNumbers.length - 4, cardNumbers.length)}</div>
                <div className="card__payment">{paymentSystem?.toUpperCase()}</div>
            </div>
        </div>
    );
};

const add = (): JSX.Element => {
    return (
        <div className="ar-payment-card-add">
            <div>
                <img src={addPayment} />
            </div>
            <span>Новой картой</span>
        </div>
    );
};

const ARPaymentMethodCard = ({ id, type, bank, cardNumbers, paymentSystem, selected, backgroundColor, onClick }: IPaymentMethodCardProps) => {
    return (
        <div style={{ backgroundColor: backgroundColor }} className={`ar-payment-card ${selected && "ar-payment-card-selected"}`}>
            {CARD_TYPE_TO_ELEMENT_MAPPING[type](cardNumbers, paymentSystem, bank)}
        </div>
    );
};

export default ARPaymentMethodCard;
