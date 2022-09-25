import { useEffect, useState } from "react";

import { ARButton } from "../button/Button";
import { ARFooter } from "../footer/Footer";
import { ARInput } from "../input";
import Logo from "../logo/Logo";
import "./loginForm.less";
import axios from "axios";
import facebook from "../../assets/styles/img/facebook-3-logo-svgrepo-com.png";
import twitter from "../../assets/styles/img/twitter-3-logo-svgrepo-com.png";
import google from "../../assets/styles/img/google-plus-svgrepo-com.png";
import { ARRoutes } from "../../core/config/routes.config";
import { useNavigate } from "react-router-dom";
import { serverURL } from "../../core/config/api.config";
import UserService from "../../core/services/user.service";
import AuthService from "../../core/services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { login, googleLogin } from "../../core/store/userSlice";
import { RootState } from "../../core/store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactTooltip from "react-tooltip";
import { GoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, error } = useSelector((state: RootState) => state.user);
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    useEffect(() => {
        if (user) {
            navigate(-1);
        }
    }, [user]);

    useEffect(() => {
        error !== null && notifyError();
    }, [error]);

    const notifyError = () => {
        toast.error("Ошибка авторизации", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const submit = (e: any) => {
        e.preventDefault();
        dispatch(login(credentials.username, credentials.password));
        error && notifyError();
    };

    const handleGoogleLogin = (googleData: any) => {
        console.log(googleData);
        dispatch(googleLogin(googleData.credential));
    };

    const handleGoogleError = (result: any) => {
        console.log(result);
    };
    return (
        <div className="ar-login">
            <div className="ar-login__left-block">
                <div className="left-block__header">
                    <p className="left-block__header-title">Авторизация✌️</p>
                    <p className="left-block__header-subtitle">Введите ваш логин и пароль, чтобы войти</p>
                </div>

                <div className="left-block__login-form login-form">
                    <form onSubmit={submit} className="login-form__form-inner">
                        <div className="form-group">
                            <ARInput
                                icon="email"
                                variant="outlined"
                                size="medium"
                                placeholder="Логин"
                                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <ARInput
                                icon="password"
                                variant="outlined"
                                type="password"
                                size="medium"
                                placeholder="Пароль"
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>

                        <ARButton type="submit" variant="big-violet" text="Войти" />
                    </form>

                    <a className="left-block__forgot-pass-link forgot-pass-link" href="" data-tip data-for="forgotPassTip">
                        Забыли пароль?
                    </a>
                    <ReactTooltip id="forgotPassT ip" place="right" effect="solid" delayShow={200}>
                        В разработке...
                    </ReactTooltip>
                </div>

                <div className="or-line-container">
                    <div className="hr-line"></div>
                    <span className="or-text">Или</span>
                    <div className="hr-line"></div>
                </div>

                <div className="left-block__social-media">
                    <div className="social-media__items-container">
                        <GoogleLogin
                            onSuccess={handleGoogleLogin}
                            onError={() => {
                                console.log("Login Failed");
                            }}
                        ></GoogleLogin>
                    </div>
                    <ReactTooltip id="socialMediaTip" place="right" effect="solid" delayShow={200}>
                        В разработке...
                    </ReactTooltip>
                </div>

                <div className="left-block__bottom-text bottom-text">
                    <span className="bottom-text__text">Еще нет аккаунта?</span>
                    <a href="" className="bottom-text__link" onClick={() => navigate(ARRoutes.SIGNUP_PAGE, { replace: true })}>
                        Зарегистрируйся
                    </a>
                </div>
            </div>

            <div className="ar-login__right-block">
                <Logo style="white-text" hover="hover" onClick={() => navigate(ARRoutes.MAIN_PAGE)} />

                <div className="right-block__card">
                    <p className="card__title">Рады Вас видеть снова!🤞</p>
                    <p className="card__subtitle">Войдите в Ваш аккаунт, чтобы использовать все функции AnyRent в полном объеме </p>
                    <p className="card__subtitle">*Ознакомьтесь с политикой конфиденциальности</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;
