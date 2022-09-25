import { ARHeader } from "../../library/header/Header";
import { ARFooter } from "../../library";
import { ARRoutes} from "../../core/config/routes.config";
import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import "./support.less";

interface SupportProps { }

const Support = (props: SupportProps) => {

    return (
        <div className="support-wrapper">
            <div className="support__header">
                <ARHeader />
            </div>
            <div className="support__content">
                <h1 className="support__h1"> Поддержка</h1>
                <h2 className="support__h2"> 
                    Если у Вас возникли какие-либо вопросы, всегда можно обратиться в нашу поддержку. Для этого перейдите в соответсвующий раздел 
                    <NavLink to={ARRoutes.CONTACTS} className="support__h3" > Контакты </NavLink> 
                    и выберите удобный для Вас способ связи. 
                </h2>
                <h2 className="support__h2">
                    Если вы желаете сообщить о возможном баге на нашем сайте, воспользуйтесь специальным разделом
                    <NavLink to={ARRoutes.FIND_BUG} className="support__h3" >  Нашли баг?  </NavLink> 
                </h2>
                <h2 className="support__h2">
                    <strong> Наиболее часто встречающиеся вопросы: </strong>
                </h2>
                <div className="support__questions">
                    <div className="support__question"> — Почему я не могу арендовать товар?</div>
                    <div className="support__answer">— Необходимо авторизоваться на сайте.</div>
                </div>
                <div className="support__questions">
                    <div className="support__question"> — Где найти адрес товара для аренды?</div>
                    <div className="support__answer">— Адрес товара для аренды находится под описанием товара.</div>
                </div>
                <div className="support__questions">
                    <div className="support__question"> — AnyRent - прокат?</div>
                    <div className="support__answer">— Нет, AnyRent не является прокатом. Наш сервис лишь позволяет арендодателям выкладывать свои собственные товары для аренды.
                        Наша команда занимается лишь обслуживанием и улучшением данного сайта.
                    </div>
                </div>
                <div className="support__questions">
                    <div className="support__question"> — Как узнать, свободен ли товар?</div>
                    <div className="support__answer">— Доступные даты для аренды отображаются в календаре ярким шрифтом при оформлении товара.</div>
                </div>
                <div className="support__questions">
                    <div className="support__question"> — Как выложить свой товар для аренды?</div>
                    <div className="support__answer">— Вам необходимо лишь зарегистрироваться нажать на кнопку добавления товара, расположенной на верхнем блоке сайта (хедере) рядом с иконкой вашей фотографии.</div>
                </div>
            </div>

            <div className="support__footer">
                <ARFooter />
            </div>
        </div>
    );
};

export default Support;
