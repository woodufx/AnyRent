import { ARHeader } from "../../library/header/Header";
import { ARFooter } from "../../library";
import "./findBug.less";
import bugfind from "../../assets/styles/img/bugfind.png";

interface findBugProps { }

const FindBug = (props: findBugProps) => {

    return (
        <div className="findbug-wrapper">
            <div className="findbug__header">
                <ARHeader />
            </div>
            <div className="findbug__content">
                <div className="findbug__color">
                    <div className="findbug__wrapper">
                        <div className="findbug__block">
                            <div className="findbug__title">Нашли баг?</div>
                            <div className="findbug__text">Вы всегда можете обратиться в нашу поддержку и сообщить о возможных ошибках в работе приложения. </div>
                            <div className="findbug__text">Для этого Вам необходимо написать на следующий адрес: </div>
                            <a className="findbug__contacts" href="mailto:vlad@htmlbook.ru">anyrent@bugs.ru</a>
                        <div className="findbug__text">Так вы поможете нашему сервису стать еще лучше! </div>
                        </div>
                        <div className="findbug__block">
                            <img className="findbug__img" src={bugfind} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="findbug__footer">
                <ARFooter />
            </div>
        </div>
    );
};

export default FindBug;
