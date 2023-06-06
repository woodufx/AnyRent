import { ARHeader } from "../../library/header/Header";
import { ARFooter } from "../../library";
import dmitryl from "../../assets/styles/img/dmitryl.png";
import michailch from "../../assets/styles/img/michailch.png";
import antonstr from "../../assets/styles/img/antonstr.png";
import development from "../../assets/styles/img/development.png";
import "./about-team.less";

interface AboutTeamProps { }

const AboutTeam = (props: AboutTeamProps) => {

    return (
        <div className="about-team-wrapper">
            <div className="about-team__header">
                <ARHeader />
            </div>
            <div className="about-team__content">
                <div className="about-team__title">
                    <h1> Мы - небольшая команда разработчиков, которая состоит из нескольких креативных ребят ✌🏻 </h1>
                </div>
                <div className="about-team__persons">
                    <div className="about-team__persons-container">
                        <div className="about-team__preson">
                            <img src={dmitryl} alt="" />
                            <div className="about-team__person-name"> Лиманский Дмитрий</div>
                            <div className="about-team__person-description">
                                Гуру бэкенда на ноде (нет)
                            </div>
                        </div>  <div className="about-team__preson">
                            <img src={dmitryl} alt="" />
                            <div className="about-team__person-name"> Лиманский Дмитрий</div>
                            <div className="about-team__person-description">
                                Дизайнер данного проекта
                            </div>
                        </div>
                        <div className="about-team__preson">
                            <img src={dmitryl} alt="" />
                            <div className="about-team__person-name"> Лиманский Дмитрий</div>
                            <div className="about-team__person-description">
                                Активный фронтенд-разработчик
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-team__info">
                    <div className="about-team__info-header">
                        Планы по разработке 📱
                    </div>
                    <img src={development} alt="" />
                    <div className="about-team__info-text">
                        Наша команда приложила огромные усилия для разработки данного приложения. 
                    </div>
                    <div className="about-team__info-text">Мы не останавливаемся на работе и продолжаем
                        улучшать AnyRent, чтобы удобство его использования возрастало.
                    </div>
                </div>
            </div>

            <div className="about-team__footer">
                <ARFooter />
            </div>
        </div>
    );
};

export default AboutTeam;
