import React from "react";
import "./equipmentCard.less";
import Button from "../Button/Button";
import cardImg from "../../assets/styles/img/cardImg.png";
import star from "../../assets/styles/img/star.png";
import Heart from "../../assets/styles/img/Heart.png";
import Seller from "../../assets/styles/img/Seller.png";
import Phonebtn from "../../assets/styles/img/Phonebtn.png";
import Messagebtn from "../../assets/styles/img/Messagebtn.png";

export interface IEquipmentCardProps {
    id: number;
    type: "primary" | "secondary";
    title: string;
    description: string;
    address?: string;
    rating?: number;
    price: number;
    cover?: string;
}

const EquipmentCard = (props: IEquipmentCardProps) => {
    return (
        <div className={`ar-card-wrapper-${props.type}`}>
            <div className="ar-card__row">
                <div className="ar-card__img-wrapper">
                    <img className="ar-card-img" src={cardImg || props.cover}></img>
                </div>
                <div className="ar-card__info">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    {props.address && <p className="ar-card__address">{props.address}</p>}
                    <div className="ar-card__rating">
                        <div>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>
                        {props.type === "secondary" && (
                            <div className="ar-card__secondary-row">
                                <div className="ar-card__price">{props.price}₽/час</div>
                                <div className="ar-card__button">
                                    <div>
                                        <Button className="btn btn--small-primary" text="Add" />
                                    </div>
                                </div>
                                <img className="like-btn" src={Heart} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {props.type === "primary" ? (
                <div className="ar-card__row">
                    <div className="ar-card__price">{props.price}₽/час</div>
                    <div className="ar-card__button">
                        <div>
                            <Button className="btn btn--small-primary" text="Add" />
                        </div>
                        <img className="like-btn" src={Heart} />
                    </div>
                </div>
            ) : (
                <div className="ar-card__column">
                    <img src={Seller} />

                    <div className="seller-rating">
                        <div>
                            <a>GETSKI. me</a>
                        </div>
                        <div>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>
                        <a className="seller-revs">21 отзыв</a>
                    </div>

                    <div className="seller-contacts">
                        <img src={Phonebtn}></img>
                        <img src={Messagebtn}></img>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EquipmentCard;
