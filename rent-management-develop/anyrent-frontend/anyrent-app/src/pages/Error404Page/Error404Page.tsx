import {ARButton} from "../../library/button/Button"
import StarsAndPlanets from "../../assets/styles/img/planets_stars.png";
import { useNavigate } from "react-router-dom";
import { ARRoutes} from "../../core/config/routes.config";
import "./error404Page.less";

interface AboutUsPageProps { }

const Error404Page = (props: AboutUsPageProps) => {
    let navigate = useNavigate();
    return (
        <div className="error-404-page">
            <div className="error-404-page__stars">
                <img src={StarsAndPlanets} alt="" />
            </div>
            <div className="error-404-page-wrapper">
                <div className="error-404-page__text">
                    <p className="error-404-page__header"> 404 </p>
                    <p className="error-404-page__type"> Page not found! </p>
                    <p className="error-404-page__description"> The page you are looking for was moved, removed, renaimed or might  never existed.</p>
                </div>
                <div className="error-404-page_button">
                    <ARButton type="button" variant="big-violet-secondary" text="Main page" onClick={(e) => {
                         navigate(ARRoutes.MAIN_PAGE);
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Error404Page;
