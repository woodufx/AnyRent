import React, { MouseEventHandler } from "react";
import "./favouriteCard.less";
import { ARButton } from "../button/Button";
import cardImg from "../../assets/styles/img/cardImg.png";
import heart from "../../assets/styles/img/Heart.png";
import heartEmpty from "../../assets/styles/img/heartEmpty.png";
import ReactTooltip from "react-tooltip";

export interface IFavouriteCardProps {
    id: any;
    title: string;
    address?: string;
    price: number;
    cover: string[] | undefined;
    showLikeButton: boolean;
    favourite?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onLikeClick?: MouseEventHandler<HTMLImageElement>;
    onButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

const FavouriteCard = (props: IFavouriteCardProps) => {
    const clickHandler = (e: any) => {
        e.stopPropagation();
        if (e.target.className === "like-btn") {
            props.onLikeClick!(e);
        } else if ((e.target as HTMLElement).className.includes("ar-button")) {
            props.onButtonClick!(e);
        } else {
            props.onClick!(e);
        }
    };

    return (
        <div className="ar-favourite-card-wrapper" onClick={(e) => clickHandler(e)}>
            <div className="ar-favourite-card__img-wrapper">
                <img className="ar-favourite-card__img" src={props.cover![0]}></img>
            </div>

            <div className="ar-favourite-card__info-wrapper">
                <div className="ar-favourite-card__top-flex-contaiter">
                    <div className="ar-favourite-card__info-contaiter">
                        <h2 className="ar-favourite-card__info-title">{props.title}</h2>
                        <p className="ar-favourite-card__info-address">{props.address}</p>
                    </div>

                    <div className="ar-favourite-card__like-btn-wrapper">
                        {props.showLikeButton && (
                            <img
                                className="like-btn"
                                src={props.favourite ? heart : heartEmpty}
                                onClick={(e) => clickHandler(e)}
                                data-tip
                                data-for="favouriteTip"
                            />
                        )}

                        <ReactTooltip id="favouriteTip" place="top" effect="solid" delayShow={1000}>
                            Добавить в избранное
                        </ReactTooltip>
                    </div>
                </div>

                <div className="ar-favourite-card__bottom-flex-contaiter">
                    <div className="ar-favourite-card__price">{props.price}₽ / час</div>

                    <div className="ar-favourite-card__button">
                        <ARButton variant="medium-violet" text="Арендовать" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavouriteCard;
