import React, { useEffect, useState } from "react";
import "./productComponent.less";
import ProductImg from "../../assets/styles/img/ProductImg.png";
import { ARAvatar, ARInput, ARRating } from "../../library";
import eye from "../../assets/styles/svg/icons/eye.svg";
import share from "../../assets/styles/svg/icons/share.svg";
import heart from "../../assets/styles/img/Heart.png";
import heartEmpty from "../../assets/styles/img/heartEmpty.png";
import { ARCarousel } from "../../library";
import { ARDropdown } from "../../library";
import sellerIcon from "../../assets/styles/img/Seller.png";
import { ARButton } from "../../library";
import { ARCarouselItem } from "../../library";
import avatar from "../../assets/styles/img/avatar.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { getItem } from "../../core/store/itemsSlice";
import Loading from "../../library/loading/Loading";
import { IItem } from "../../core/models/item.model";
import { itemsRoutes } from "../../core/config/routes.config";
import { updateFavourite } from "../../core/store/userSlice";
import ReactTooltip from "react-tooltip";
import UserService from "../../core/services/user.service";
import { IUser } from "../../core/models/user.model";
import { ToastContainer, toast } from "react-toastify";
import { Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import closeIcon from "../../assets/styles/svg/icons/More.svg";
import copyIcon from "../../assets/styles/svg/icons/clipboard.svg";
import {
    FacebookIcon,
    FacebookShareButton,
    OKIcon,
    OKShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
interface IARProductComponent {
    id?: number | string;
}

interface ICounter {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
}

interface IReview {
    authorId: string;
    name: string;
    surname: string;
    text: string;
    date: string;
    rating: number;
}

const ARProductComponent = ({}: IARProductComponent) => {
    let navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentItem } = useSelector((state: RootState) => state.items);
    const { user } = useSelector((state: RootState) => state.user);
    const [seller, setSeller] = useState<IUser>();
    const [reviews, setReviews] = useState<any[]>();
    const [reviewsShown, setReviewsShow] = useState(3);
    const [reviewRate, setReviewRate] = useState<ICounter>({ one: 0, two: 0, three: 0, four: 0, five: 0 });
    const [percentRate, setPercentRate] = useState<ICounter>({ one: 0, two: 0, three: 0, four: 0, five: 0 });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        setReviews((currentItem! as IItem)?.reviews);
    }, [currentItem]);

    useEffect(() => {
        dispatch(getItem(id!));
        getSeller();
    }, [id]);

    useEffect(() => {
        ratingCounter();
    }, [reviews]);

    useEffect(() => {
        const sum = Object.values(reviewRate).reduce((acc, rate) => {
            return acc + rate;
        }, 0);
        const percentCounter = {
            one: (reviewRate.one / sum) * 100,
            two: (reviewRate.two / sum) * 100,
            three: (reviewRate.three / sum) * 100,
            four: (reviewRate.four / sum) * 100,
            five: (reviewRate.five / sum) * 100,
        };
        setPercentRate(percentCounter);
    }, [reviewRate]);

    const ratingCounter = () => {
        let counter = { one: 0, two: 0, three: 0, four: 0, five: 0 };
        reviews?.map((review) => {
            if (review.rating === 5) {
                counter.five = counter.five + 1;
            }
            if (review.rating === 4) {
                counter.four = counter.four + 1;
            }
            if (review.rating === 3) {
                counter.three = counter.three + 1;
            }
            if (review.rating === 2) {
                counter.two = counter.two + 1;
            }
            if (review.rating === 1) {
                counter.one = counter.one + 1;
            }
        });
        setReviewRate(counter);
    };

    const reviewsSortHandler = (value: string) => {
        if (value === "По возрастанию") {
            let sortedReviews = reviews!.slice().sort((a, b) => b.rating - a.rating);
            setReviews(sortedReviews);
        } else {
            let sortedReviews = reviews!.slice().sort((a, b) => a.rating - b.rating);
            setReviews(sortedReviews);
        }
    };

    const cardButtonHandler = () => {
        user
            ? navigate(itemsRoutes.getOnePaymentRoute((currentItem! as IItem).id))
            : toast.warn("Вам нужно авторизоваться, чтобы арендовать продукты!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
              });
    };

    const cardLikeHandler = (itemId: string) => {
        user
            ? dispatch(updateFavourite(user.id, itemId))
            : toast.warn("Вам нужно авторизоваться, чтобы добавить в избранные!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
              });
    };

    const getSeller = async () => {
        try {
            const response: IUser = await UserService.searchUserByItemId(id!);
            setSeller(response);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const notifySuccess = () => {
        toast.success("Ссылка скопирована!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="ar-product-container">
            {currentItem ? (
                <div className="ar-product-container__inner">
                    <div className="ar-product-container__inner__product-section">
                        <div className="product-section__image-slider">
                            <ARCarousel width="385px">
                                {(currentItem as IItem).cover?.map((image, index) => {
                                    return (
                                        <ARCarouselItem key={index}>
                                            <img src={image}></img>
                                        </ARCarouselItem>
                                    );
                                })}
                            </ARCarousel>
                        </div>
                        <div className="product-section__info">
                            <div className="product-section__info__inner">
                                <div className="product-section__description-container">
                                    <div className="product-description__title">
                                        <span>{(currentItem as IItem).title}</span>
                                    </div>
                                    <div className="product-description__rating">
                                        <ARRating value={(currentItem as IItem).rating!} />
                                    </div>
                                    <div className="product-description__details">
                                        <span>{(currentItem as IItem).description}</span>
                                    </div>
                                    <div className="product-description__address">
                                        <span>{(currentItem as IItem).address}</span>
                                    </div>
                                </div>
                                <div className="product-section__seller-container">
                                    <div className="product-seller__date-views">
                                        <div className="product-date-creation">{(currentItem as IItem).creationDate}</div>
                                        <div className="product-views">
                                            <span>{(currentItem as IItem).views}</span> <img src={eye}></img>
                                        </div>
                                    </div>
                                    <div className="product-seller__info">
                                        {(currentItem as IItem).owner!.name ? (
                                            <ARAvatar
                                                name={(currentItem as IItem).owner!.name}
                                                surname={(currentItem as IItem).owner!.surname ? (currentItem as IItem).owner!.surname : ""}
                                                size="medium"
                                            />
                                        ) : (
                                            <img src={sellerIcon} />
                                        )}
                                        <div className="product-seller__info__title">
                                            {(currentItem as IItem).owner!.name && (
                                                <span>{`${
                                                    (currentItem as IItem).owner!.name.charAt(0).toUpperCase() +
                                                    (currentItem as IItem).owner!.name.slice(1)
                                                } ${
                                                    (currentItem as IItem).owner!.surname
                                                        ? (currentItem as IItem).owner!.surname.charAt(0).toUpperCase() +
                                                          (currentItem as IItem).owner!.surname.slice(1)
                                                        : ""
                                                }`}</span>
                                            )}
                                        </div>
                                        <div className="product-seller__info__rating">
                                            <ARRating value={(currentItem as IItem).owner!.rating} />
                                        </div>
                                        <a className="product-seller__contact product-seller__contact--mail" href={`mailto:${seller?.email}`}>
                                            Написать
                                        </a>
                                        <a className="product-seller__contact product-seller__contact--phone" href={`tel:${seller?.phoneNumber}}`}>
                                            Позвонить
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-section__info__buy">
                                <div className="product-section__price">
                                    <span>{(currentItem as IItem).price + " Р/час"}</span>
                                </div>
                                <div className="product-section__user-buttons">
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        pauseOnHover
                                        draggable
                                    />
                                    <img src={share} data-tip data-for="shareTip" onClick={() => setIsModalOpen(true)} />

                                    <ReactTooltip id="shareTip" place="top" effect="solid" delayShow={50} delayHide={100}>
                                        Поделиться
                                    </ReactTooltip>

                                    <img
                                        onClick={() => {
                                            cardLikeHandler((currentItem as IItem).id);
                                        }}
                                        src={user?.favourite.some((favItem: any) => favItem === (currentItem as IItem).id) ? heart : heartEmpty}
                                        data-tip
                                        data-for="favouriteTip"
                                    />

                                    <ReactTooltip id="favouriteTip" place="top" effect="solid" delayShow={50} delayHide={100}>
                                        Добавить в избранное
                                    </ReactTooltip>

                                    <ARButton
                                        variant="long-violet"
                                        text="Арендовать"
                                        onClick={() => {
                                            cardButtonHandler();
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ar-product-container__inner__review-section">
                        <div className="review-section__title">
                            <h2>
                                Отзывы о товаре <sup>{reviews?.length}</sup>
                            </h2>
                        </div>
                        <div className="review-section-container">
                            <div className="review-section-container__comments">
                                <div className="review-section-container__comments__sort">
                                    <ARDropdown
                                        defaultValue="Сортировка"
                                        values={["По возрастанию", "По убыванию"]}
                                        onChange={(value) => {
                                            reviewsSortHandler(value);
                                        }}
                                    />
                                </div>
                                <div className="review-comments__container">
                                    {reviews?.slice(0, reviewsShown).map((review, index) => {
                                        return (
                                            <div key={index} className="review-comments__container__comment-wrapper">
                                                <div className="comment-wrapper__header">
                                                    <div className="comment-wrapper__header__user">
                                                        <ARAvatar size="small" name={review.name!} surname={review.surname!} />
                                                        <span>{`${review.name} ${review.surname ? review.surname : ""}`}</span>
                                                    </div>
                                                    <div className="comment-wrapper__header__user-rating">
                                                        <div className="user-rating-wrapper">
                                                            <ARRating value={review.rating!} />
                                                            <span>{review.rating.toFixed(1)}</span>
                                                        </div>
                                                        <div className="user-date-wrapper">{review.date}</div>
                                                    </div>
                                                </div>
                                                <div className="comment-wrapper__text">{review.text}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="review-comments__show-more">
                                    {(currentItem as IItem).reviews?.length ? (
                                        (currentItem! as IItem).reviews!.length > reviewsShown ? (
                                            <span onClick={() => setReviewsShow((prev) => prev + 3)}>Показать больше отзывов</span>
                                        ) : (
                                            <span onClick={() => setReviewsShow(3)}>Скрыть</span>
                                        )
                                    ) : (
                                        <span>Об этом товаре еще нет отзывов</span>
                                    )}
                                </div>
                            </div>
                            <div className="review-section-container__rating-wrapper">
                                <div className="rating-wrapper__rating-count">
                                    <ARRating value={(currentItem as IItem).rating!} />
                                    <span>{(currentItem as IItem).rating!.toFixed(2)}/5</span>
                                </div>
                                <div className="rating-wrapper__rating-detailed">
                                    <div className="rating-wrapper__rating-detailed__star">
                                        <div className="star-title">
                                            <span>5 звезд </span>
                                        </div>
                                        <div className="star-bar">
                                            <div style={{ width: `${percentRate.five}%` }} className="star-bar__inner"></div>
                                        </div>
                                        <div className="star-count">
                                            <span>{reviewRate.five}</span>
                                        </div>
                                    </div>
                                    <div className="rating-wrapper__rating-detailed__star">
                                        <div className="star-title">
                                            <span>4 звезды </span>
                                        </div>
                                        <div className="star-bar">
                                            <div style={{ width: `${percentRate.four}%` }} className="star-bar__inner"></div>
                                        </div>
                                        <div className="star-count">
                                            <span>{reviewRate.four}</span>
                                        </div>
                                    </div>
                                    <div className="rating-wrapper__rating-detailed__star">
                                        <div className="star-title">
                                            <span>3 звезды </span>
                                        </div>
                                        <div className="star-bar">
                                            <div style={{ width: `${percentRate.three}%` }} className="star-bar__inner"></div>
                                        </div>
                                        <div className="star-count">
                                            <span>{reviewRate.three}</span>
                                        </div>
                                    </div>
                                    <div className="rating-wrapper__rating-detailed__star">
                                        <div className="star-title">
                                            <span>2 звезды </span>
                                        </div>
                                        <div className="star-bar">
                                            <div style={{ width: `${percentRate.two}%` }} className="star-bar__inner"></div>
                                        </div>
                                        <div className="star-count">
                                            <span>{reviewRate.two}</span>
                                        </div>
                                    </div>
                                    <div className="rating-wrapper__rating-detailed__star">
                                        <div className="star-title">
                                            <span>1 звезда </span>
                                        </div>
                                        <div className="star-bar">
                                            <div style={{ width: `${percentRate.one}%` }} className="star-bar__inner"></div>
                                        </div>
                                        <div className="star-count">
                                            <span>{reviewRate.one}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Dialog fullWidth={true} open={isModalOpen} onClose={handleClose} aria-labelledby="responsive-dialog-title" maxWidth="sm">
                            <DialogTitle>
                                <div className="ar-product-share__header">
                                    <span>Поделиться товаром</span>
                                    <img src={closeIcon} alt="" onClick={() => handleClose()} />
                                </div>
                            </DialogTitle>
                            <DialogContent style={{ height: "190px" }}>
                                <Stack spacing={3}>
                                    <div className="ar-product-share__icons">
                                        <VKShareButton url={window.location.href}>
                                            <VKIcon size={45} round={true} />
                                        </VKShareButton>
                                        <OKShareButton url={window.location.href}>
                                            <OKIcon size={45} round={true} />
                                        </OKShareButton>
                                        <WhatsappShareButton url={window.location.href}>
                                            <WhatsappIcon size={45} round={true} />
                                        </WhatsappShareButton>
                                        <TelegramShareButton url={window.location.href}>
                                            <TelegramIcon size={45} round={true} />
                                        </TelegramShareButton>
                                    </div>
                                    <span className="ar-product-share__info">Или скопировать ссылку</span>
                                    <div className="ar-product-share__copy">
                                        <ARInput size="large" variant="outlined" isDisabled={true} value={window.location.href} />
                                        <img
                                            src={copyIcon}
                                            alt=""
                                            onClick={() => {
                                                navigator.clipboard.writeText(window.location.href);
                                                notifySuccess();
                                            }}
                                        />
                                    </div>
                                </Stack>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable />
        </div>
    );
};

export default ARProductComponent;
