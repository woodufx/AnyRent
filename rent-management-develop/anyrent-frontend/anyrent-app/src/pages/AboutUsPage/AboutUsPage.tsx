import { ARHeader } from "../../library/header/Header";
import { ARFooter } from "../../library";
import aboutTimer from "../../assets/styles/img/aboutTimer.png";
import aboutHands from "../../assets/styles/img/aboutHands.png";
import aboutLike from "../../assets/styles/img/aboutLike.png";
import "./aboutUsPage.less";

interface AboutUsPageProps { }

const AboutUsPage = (props: AboutUsPageProps) => {
    return (
        <div className="about-us-page-wrapper">
            <div className="about-us-page__header">
                <ARHeader />
            </div>

            <div className="about-us-page__content">
                <div className="about-us-page__top-spline-block">
                    <div className="top-spline-block-container">
                        <div className="top-spline-block__text-container">
                            <div className="top-spline-block__text">
                                <p className="top-spline-block__text-title">Немного информации о нас</p>

                                <p className="top-spline-block__text-subtitle">
                                    Мы группа интузиастов, сплоченная общими взглядами и идеей, как сделать этот мир чуточку проще.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-us-page__middle-block">
                    <div className="middle-block-container">
                        <p className="middle-block__title">Чем мы занимаемся на самом деле?</p>

                        <div className="middle-block__list-items">
                            <div className="middle-block__item">
                                <img className="middle-block__item-icon" src={aboutTimer} alt="" />

                                <p className="middle-block__item-title">
                                    Экономим ваше
                                    <br />
                                    время при поиске и<br />
                                    подборе
                                    <br />
                                    товаров для аренды
                                </p>
                            </div>

                            <div className="middle-block__item">
                                <img className="middle-block__item-icon" src={aboutHands} alt="" />

                                <p className="middle-block__item-title">
                                    Даем возможность
                                    <br />
                                    проведения
                                    <br />
                                    быстрых и<br />
                                    безопасных аренд
                                </p>
                            </div>

                            <div className="middle-block__item">
                                <img className="middle-block__item-icon" src={aboutLike} alt="" />

                                <p className="middle-block__item-title">
                                    Сотрудничаем лишь
                                    <br />
                                    с лучшими
                                    <br />
                                    арендаторами в<br />
                                    Вашем регионе
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-us-page__bottom-spline-block">
                    <div className="bottom-spline-block-container">
                        <div className="bottom-spline-block-container">
                            <div className="bottom-spline-block__text-container">
                                <div className="bottom-spline-block__top-text">
                                    <p className="bottom-spline-block__top-text-title">
                                        Почему выбирают
                                        <br />
                                        именно нас?
                                    </p>

                                    <p className="bottom-spline-block__top-text-subtitle">
                                        Мы всегда гарантируем безопасные и<br />
                                        быстрые сделки, ориентируемся на
                                        <br />
                                        потребности пользователей.
                                    </p>
                                </div>

                                <div className="bottom-spline-block__bottom-text">
                                    <p className="bottom-spline-block__bottom-text-title">
                                        Всегда
                                        <br />
                                        актуальны?
                                    </p>

                                    <p className="bottom-spline-block__bottom-text-subtitle">
                                        Наша команда постоянно работает над
                                        <br />
                                        улучшением качества продукта, стремясь сделать
                                        <br />
                                        приложение все более и более удобным для
                                        <br />
                                        каждого из вас!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-us-page__footer">
                <ARFooter />
            </div>
        </div>
    );
};

export default AboutUsPage;
