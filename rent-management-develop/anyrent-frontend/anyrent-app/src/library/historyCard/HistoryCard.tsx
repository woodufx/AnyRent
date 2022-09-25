import React, { MouseEventHandler, useEffect, useState } from "react";
import "./historyCard.less";
import { ARButton } from "../button/Button";
import cardImg from "../../assets/styles/img/cardImg.png";
import star from "../../assets/styles/img/star.png";
import heart from "../../assets/styles/img/Heart.png";
import heartEmpty from "../../assets/styles/img/heartEmpty.png";
import Seller from "../../assets/styles/img/sellerPhoto.png";
import deleteHistoryOrder from "../../assets/styles/img/delete-history-order.png";
import Phonebtn from "../../assets/styles/img/Phonebtn.png";
import Messagebtn from "../../assets/styles/img/Messagebtn.png";
import orderStatus from "../../assets/styles/img/orderStatus.png";
import dropdownArrow from "../../assets/styles/img/chevron-left.png";
import close from "../../assets/styles/img/x.png";
import starFilled from "../../assets/styles/svg/icons/starFilled.svg";
import strangeBox from "../../assets/styles/img/codesandbox.png";
import DataService from "../../core/services/data.service";
import { ARAvatar } from "../avatar";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material";
import { ARInput } from "../input";
import Rating from "@mui/material/Rating";
import { fontSize } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { ToastContainer, toast } from "react-toastify";

export interface IHistoryCardProps {
    id: string;
    itemId: string;
    title: string;
    description: string;
    address?: string;
    price: number;
    owner?: { id: string; name: string; surname: string; rating: number; avatar: string };
    cover: string | undefined;
    date?: any[];
    status?: string;
    userId: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onLikeClick?: MouseEventHandler<HTMLImageElement>;
    onButtonClick?: MouseEventHandler<HTMLButtonElement>;
    onDeleteClick?: MouseEventHandler<HTMLDivElement>;
}
interface IReview {
    authorId: string;
    name: string;
    surname: string;
    text: string;
    rating: number | null;
}

const HistoryCard = (props: IHistoryCardProps) => {
    const { user } = useSelector((state: RootState) => state.user);
    const [open, setOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [review, setReview] = useState<IReview>({ authorId: user.id, name: user.name, surname: user.surname, text: "", rating: null });
    const [orderStatus, setOrderStatus] = useState(props.status);

    useEffect(() => {
        setOrderStatus(props.status);
    }, [props.status]);

    useEffect(() => {
        review.text != "" && review.rating != null ? setIsDisabled(false) : setIsDisabled(true);
    }, [review]);

    const handleClickOpen = (e: any) => {
        e.stopPropagation();
        setOpen(false);
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handleSendReview = () => {
        try {
            DataService.addReview(props.itemId, review);
            notifySuccess();
        } catch (err) {
            console.log(err);
        }
        setIsModalOpen(false);
    };

    const notifySuccess = () => {
        toast.success("Успешно! Спасибо за отзыв", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

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

    const statusChecker = () => {
        if (props.status === "payed") {return "Оплачен";}
        if (props.status === "completed") return "Завершен";
        if (props.status === "active") return "В аренде";
        if (props.status === "closed") return "Отменен";
    };

    const deleteOrder = async () => {
        const response = await DataService.deleteOrder(props.userId, props.id);
    };

    return (
        <>
            <div className="ar-history-card-wrapper">
                <p className="ar-history-card__number"># {props.id.substr(0, 5)}</p>

                <div className="ar-history-card__info-wrapper" onClick={(e) => clickHandler(e)}>
                    <img className="ar-history-card__img" src={props.cover}></img>

                    <div className="ar-history-card__info-container">
                        <h2 className="ar-history-card__info-title">{props.title}</h2>
                        {props.address && <p className="ar-history-card__info-address">{props.address}</p>}
                    </div>
                </div>

                <div className="ar-history-card__seller-container">
                    <div className="ar-history-card__seller-icon-container">
                        {props.owner ? <ARAvatar name={props.owner!.name} surname={props.owner!.surname} size="small" /> : <img src={Seller} />}
                    </div>
                    <a className="ar-history-card__seller-title">{`${props.owner!.name} ${props.owner?.surname ? props.owner.surname : ""}`}</a>
                </div>

                <div className="ar-history-card__date">
                    {props.date![0]}
                </div>

                <div className="ar-history-card__price">{props.price}₽</div>

                <div className={`ar-history-card__status ${orderStatus}`}>{statusChecker()}</div>

                <div className="ar-history-card__dropdownimg" onClick={() => setOpen(!open)}>
                    <img className={open ? "ar-history-card__dropimg" : "ar-history-card__dropimg hidden"} src={dropdownArrow} alt="" />
                    <div className={open ? "ar-header__dropdown" : "ar-header__dropdown hiden"}>
                        <div className="ar-header__items">
                            {props.status === "completed" &&
                                <div
                                    className="ar-header__item"
                                    onClick={() => {
                                        setOpen(!open);
                                        // navigate(userRoutes.getUserItemsRoute());
                                    }}
                                >
                                    <img src={starFilled} alt="" />
                                    <h3 className="ar-header__link" onClick={(e) => handleClickOpen(e)}>
                                        Оставить отзыв
                                    </h3>
                                </div>
                            }
                            <div
                                className="ar-header__item"
                                onClick={() => {
                                    setOpen(!open);
                                    // navigate(userRoutes.getUserFavsRoute());
                                }}
                            >
                                <img src={deleteHistoryOrder} alt="" />
                                <h3
                                    className="ar-header__link"
                                    onClick={(e) => {
                                        deleteOrder();
                                        props.onDeleteClick!(e);
                                    }}
                                >
                                    Удалить
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog fullWidth={true} open={isModalOpen} onClose={handleClose} aria-labelledby="responsive-dialog-title" maxWidth="sm">
                    <DialogTitle>
                        <span className="ar-history-review__header">Отзыв</span>
                    </DialogTitle>
                    <DialogContent>
                        <Stack spacing={2}>
                            <ARInput
                                variant="outlined"
                                size="large"
                                label="Оставьте отзыв о товаре"
                                onChange={(e) => setReview({ ...review, text: e.target.value })}
                            />
                            <div className="ar-history-review__rating">
                                <Rating
                                    onChange={(event, newValue) => {
                                        setReview({ ...review, rating: newValue });
                                    }}
                                />
                            </div>
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <ARButton variant="medium-lavender" text="Закрыть" onClick={() => handleClose()} />
                        <ARButton variant="medium-lavender" text="Отправить" onClick={() => handleSendReview()} isDisabled={isDisabled} />
                    </DialogActions>
                </Dialog>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable />
        </>
    );
};

export default HistoryCard;
