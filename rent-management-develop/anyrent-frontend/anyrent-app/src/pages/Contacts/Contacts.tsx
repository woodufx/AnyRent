import { ARHeader } from "../../library/header/Header";
import { ARFooter } from "../../library";
import "./contacts.less";

interface ContactsProps { }

const Contacts = (props: ContactsProps) => {

    return (
        <div className="contacts-wrapper">
            <div className="contacts__header">
                <ARHeader />
            </div>
            <div className="contacts__content">
                <h1 className="contacts__h1"> Контакты</h1>
                <h2 className="contacts__h2"> <strong> Мы не прокат.</strong> В нашем офисе только программисты и маркетологи. Никаких платьев или спальных мешков. </h2>
                <h2 className="contacts__h2"> На сайте размещены предложения разных прокатов и частных арендодателей, у каждого из них свой адрес.  </h2>
                <h2 className="contacts__h2"> <strong>Где найти адрес проката? </strong> — На карточке вещи в разделе Адрес.  </h2>
                <h2 className="contacts__h2"> </h2>
                <h2 className="contacts__h2"> <strong> Как связаться с нами? </strong>  </h2>
                <h2 className="contacts__h2"> <strong> Юр.адрес: </strong>   г.Воронеж, улица Арендодателей 7  </h2>
                <h2 className="contacts__h2"> <strong> Служба поддержки </strong> работает для Вас с 9:00 до 21:00 ежедневно</h2>
                <h2 className="contacts__h2"> Звоните по телефону: <a className="a" href="tel: +8(800)-500-34-31"> 8(800)-500-34-31 </a></h2>
                <h2 className="contacts__h2"> Или пишите в наши мессенджеры: </h2>
                <h2 className="contacts__h2"> Наши телеграмм контакты для связи:  </h2>
                <a className="contacts__a" href="https://t.me/woodufx">
                    @woodufx
                </a>

            </div>

            <div className="contacts__footer">
                <ARFooter />
            </div>
        </div>
    );
};

export default Contacts;
