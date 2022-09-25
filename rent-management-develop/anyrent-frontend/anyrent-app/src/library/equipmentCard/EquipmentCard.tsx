import React, { MouseEventHandler } from "react";
import "./equipmentCard.less";
import { ARButton } from "../button/Button";
import cardImg from "../../assets/styles/img/cardImg.png";
import star from "../../assets/styles/img/star.png";
import heart from "../../assets/styles/img/Heart.png";
import heartEmpty from "../../assets/styles/img/heartEmpty.png";
import Seller from "../../assets/styles/img/Seller.png";
import Phonebtn from "../../assets/styles/img/Phonebtn.png";
import Messagebtn from "../../assets/styles/img/Messagebtn.png";
import ReactTooltip from "react-tooltip";
import { ARRating } from "../rating";
import { ARAvatar } from "../avatar";
import { IUser } from "../../core/models/user.model";
import UserService from "../../core/services/user.service";
import { useEffect, useState } from "react";

export interface IEquipmentCardProps {
    id: any;
    type: "primary" | "secondary" | "user-items";
    title: string;
    description: string;
    address?: string;
    rating?: number;
    price: number;
    cover?: string | string[];
    owner?: {
        id: string;
        name: string;
        surname: string;
        rating: number;
        avatar: string;
    };
    showLikeButton: boolean;
    favourite?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onLikeClick?: MouseEventHandler<HTMLImageElement>;
    onButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

const EquipmentCard = (props: IEquipmentCardProps) => {
    const clickHandler = (e: any) => {
        e.stopPropagation();
        if (e.target.className === "like-btn") {
            props.onLikeClick!(e);
        } else if ((e.target as HTMLElement).className.includes("ar-button")) {
            props.onButtonClick!(e);
        } else if (e.target.className === "seller-bind") {
        } else {
            props.onClick!(e);
        }
    };

    const [seller, setSeller] = useState<IUser>();

    useEffect(() => {
        getSeller();
    }, []);

    const getSeller = async () => {
        try {
            const response: IUser = await UserService.searchUserByItemId(props.id);
            setSeller(response);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    return (
        <div className={`ar-card-wrapper-${props.type}`} onClick={(e) => clickHandler(e)}>
            <div className="ar-card__row">
                <div className="ar-card__img-wrapper">
                    <img className="ar-card-img" src={props.cover ? props.cover[0] : cardImg}></img>
                </div>
                <div className="ar-card__info-container">

                    <div className="ar-card__info">

                        <div className="ar-card__info-wrapper">
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                            {props.address && <p className="ar-card__address">{props.address}</p>}
                            {props.type === "primary" && (
                            <ARRating value={props.rating!} />)}
                        </div>
                        {props.type === "secondary" && (
                            <div className="ar-card__seller">
                                {props.owner ? <ARAvatar name={props.owner!.name} surname={props.owner!.surname} size="medium" /> : <img src={Seller} />}
                                <div>
                                    {props.owner!.name && (
                                        // <a>{`${props.owner!.name.charAt(0).toUpperCase() + props.owner!.name.slice(1)} ${props.owner!.surname.charAt(0).toUpperCase() + props.owner!.surname.slice(1)}`}</a>)}
                                        <a>{`${props.owner!.name.charAt(0).toUpperCase() + props.owner!.name.slice(1)}`}</a>)}
                                </div>
                                <ARRating value={props.owner!.rating} />
                                <div className="seller-contacts-wrapper">
                                    <div className="seller-contacts">
                                        <a
                                            href={`mailto:${seller?.email}`}
                                        >
                                            <img
                                                className="seller-bind"
                                                onClick={(e) => clickHandler(e)}
                                                src={Messagebtn} alt=""
                                            />
                                        </a>
                                        <a
                                            href={`tel:${seller?.phoneNumber}}`}
                                        >
                                            <img
                                                className="seller-bind"
                                                onClick={(e) => clickHandler(e)}
                                                src={Phonebtn} alt=""
                                            />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )}
                        {props.type === "user-items" && (
                            <div className="ar-card__seller">
                                {props.owner ? <ARAvatar name={props.owner!.name} surname={props.owner!.surname} size="medium" /> : <img src={Seller} />}
                                <div>
                                    {props.owner!.name && (
                                        // <a>{`${props.owner!.name.charAt(0).toUpperCase() + props.owner!.name.slice(1)} ${props.owner!.surname.charAt(0).toUpperCase() + props.owner!.surname.slice(1)}`}</a>)}
                                        <a>{`${props.owner!.name.charAt(0).toUpperCase() + props.owner!.name.slice(1)}`}</a>)}
                                </div>
                                <ARRating value={props.owner!.rating} />
                                <div className="seller-contacts-wrapper">
                                    <div className="seller-contacts">
                                        <a
                                            href={`mailto:${seller?.email}`}
                                        >
                                            <img
                                                className="seller-bind"
                                                onClick={(e) => clickHandler(e)}
                                                src={Messagebtn} alt=""
                                            />
                                        </a>
                                        <a
                                            href={`tel:${seller?.phoneNumber}}`}
                                        >
                                            <img
                                                className="seller-bind"
                                                onClick={(e) => clickHandler(e)}
                                                src={Phonebtn} alt=""
                                            />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>

                    {props.type === "secondary" && (
                        <div className="ar-card__bottom-row">
                            <ARRating value={props.rating!} />
                            <div className="ar-card__rating">

                                <div className="ar-card__secondary-row">
                                    <div className="ar-card__price">{props.price}₽/час</div>
                                    {props.showLikeButton && (
                                        <img
                                            className="like-btn"
                                            src={props.favourite ? heart : heartEmpty}
                                            onClick={(e) => clickHandler(e)}
                                            data-tip
                                            data-for="favouriteTip"
                                        />
                                    )}
                                    <ReactTooltip id="favouriteTip" place="top" effect="solid" delayShow={60} delayHide={100}>
                                        Добавить в избранное
                                    </ReactTooltip>
                                    <div className="ar-card__button">
                                        <div>
                                            <ARButton variant="medium-violet" text="Арендовать" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {props.type === "user-items" && (
                        <div className="ar-card__bottom-row">
                            <ARRating value={props.rating!} />
                            <div className="ar-card__rating">
                                <div className="ar-card__secondary-row">
                                    <div className="ar-card__price">{props.price}₽/час</div>
                                    {props.showLikeButton && (
                                        <img
                                            className="like-btn"
                                            src={props.favourite ? heart : heartEmpty}
                                            onClick={(e) => clickHandler(e)}
                                            data-tip
                                            data-for="favouriteTip"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {props.type === "primary" && (
                <div className="ar-card__row">
                    <div className="ar-card__price">{props.price}₽/час</div>
                    <div className="ar-card__button">
                        {props.showLikeButton && (
                            <img
                                className="like-btn"
                                src={props.favourite ? heart : heartEmpty}
                                onClick={(e) => clickHandler(e)}
                                data-tip
                                data-for="favouriteTip"
                            />
                        )}
                        <div>
                            <ARButton variant="medium-violet" text="Арендовать" onClick={(e) => clickHandler(e)} />
                        </div>
                        <ReactTooltip id="favouriteTip" place="top" effect="solid" delayShow={1000}>
                            Добавить в избранное
                        </ReactTooltip>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EquipmentCard;
