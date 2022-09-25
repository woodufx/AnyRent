export enum CardType {
    APPLE = "applePay",
    GOOGLE = "googlePay",
    CARD = "card",
    ADD = "add",
}

export interface IPaymentMethodCardProps {
    id?: number;
    type: "googlePay" | "applePay" | "card" | "add";
    bank?: string;
    cardNumbers?: string;
    paymentSystem?: string;
    backgroundColor?: string;
    selected?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}