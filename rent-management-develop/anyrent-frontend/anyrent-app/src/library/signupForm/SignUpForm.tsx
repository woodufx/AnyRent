import { useEffect, useState } from "react";
import { ARButton } from "../button/Button";
import { ARFooter } from "../footer/Footer";
import { ARInput } from "../input";
import { ARRadio } from "../radio";
import Logo from "../logo/Logo";
import "./signUpForm.less";
import axios from "axios";
import facebook from "../../assets/styles/img/facebook-3-logo-svgrepo-com.png";
import twitter from "../../assets/styles/img/twitter-3-logo-svgrepo-com.png";
import google from "../../assets/styles/img/google-plus-svgrepo-com.png";
import { ARRoutes } from "../../core/config/routes.config";
import { useNavigate } from "react-router-dom";
import { serverURL } from "../../core/config/api.config";
import UserService from "../../core/services/user.service";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../core/services/auth.service";
import { RootState } from "../../core/store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactTooltip from "react-tooltip";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../../core/store/userSlice";

interface Ivalidation {
    userValid: boolean | "none";
    nameValid: boolean | "none";
    surnameValid: boolean | "none";
    emailValid: boolean | "none";
    passValid: boolean | "none";
}

const SignUpForm = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, error } = useSelector((state: RootState) => state.user);
    const [credentials, setCredentials] = useState({ name: "", surname: "", username: "", email: "", password: "", gender: "male"});
    const [validation, setValidation] = useState<Ivalidation>({ userValid: "none", nameValid: "none", surnameValid: "none", emailValid: "none", passValid: "none" });

    const notifyError = () => {
        toast.error("Проверьте введенные данные!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const sendValidDate = () => {
        AuthService.register(credentials.username, credentials.name, credentials.surname, credentials.email,  credentials.password, credentials.gender, ["user"]);
        notifySuccess();
        setTimeout(() => navigate(ARRoutes.LOGIN_PAGE, {replace: true}), 3000);
    };

    const notifySuccess = () => {
        toast.success("Регистрация прошла успешно!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const submit = (e: any) => {
        e.preventDefault();
        credentials.email.match(/\S+@\S+\.\S+/) && credentials.username.length >= 3 &&  credentials.name.length >= 3 
        && credentials.surname.length >= 3 && credentials.password.match(/^[A-Za-z0-9]\w{7,}$/)
            ? sendValidDate()
            : notifyError();
    };

    const handleGoogleLogin = (googleData: any) => {
        console.log(googleData);
        dispatch(googleLogin(googleData.credential));
    };

    return (
        <div className="ar-signup">
            <div className="ar-signup__left-block">
                <div className="left-block__header">
                    <p className="left-block__header-title">Регистрация аккаунта✌️</p>
                    <p className="left-block__header-subtitle">Используйте Ваш e-mail для регистрации</p>
                </div>

                <div className="left-block__signup-form signup-form">
                    <form onSubmit={submit} className="signup-form__form-inner">
                    <div className="form-group">
                            <ARInput
                                icon="usersignup"
                                variant="outlined"
                                size="medium"
                                placeholder="Логин"
                                valid={validation.userValid}
                                onChange={(e) => {
                                    setCredentials({ ...credentials, username: e.target.value });
                                    e.target.value.length >= 3
                                        ? setValidation({ ...validation, userValid: true })
                                        : setValidation({ ...validation, userValid: false });
                                    if (e.target.value === "") {
                                        setValidation({ ...validation, userValid: "none" });
                                    }
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <ARInput
                                icon="first-second-name"
                                variant="outlined"
                                size="medium"
                                placeholder="Имя"
                                valid={validation.nameValid}
                                onChange={(e) => {
                                    setCredentials({ ...credentials, name: e.target.value });
                                    e.target.value.length >= 3
                                        ? setValidation({ ...validation, nameValid: true })
                                        : setValidation({ ...validation, nameValid: false });
                                    if (e.target.value === "") {
                                        setValidation({ ...validation, nameValid: "none" });
                                    }
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <ARInput
                                icon="first-second-name"
                                variant="outlined"
                                size="medium"
                                placeholder="Фамилия"
                                valid={validation.surnameValid}
                                onChange={(e) => {
                                    setCredentials({ ...credentials, surname: e.target.value });
                                    e.target.value.length >= 3
                                        ? setValidation({ ...validation, surnameValid: true })
                                        : setValidation({ ...validation, surnameValid: false });
                                    if (e.target.value === "") {
                                        setValidation({ ...validation, surnameValid: "none" });
                                    }
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <ARInput
                                icon="email"
                                variant="outlined"
                                size="medium"
                                placeholder="Email"
                                valid={validation.emailValid}
                                onChange={(e) => {
                                    setCredentials({ ...credentials, email: e.target.value });
                                    e.target.value.match(/\S+@\S+\.\S+/)
                                        ? setValidation({ ...validation, emailValid: true })
                                        : setValidation({ ...validation, emailValid: false });
                                    if (e.target.value === "") {
                                        setValidation({ ...validation, emailValid: "none" });
                                    }
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <ARInput
                                icon="password"
                                variant="outlined"
                                type="password"
                                size="medium"
                                placeholder="Пароль"
                                valid={validation.passValid}
                                onChange={(e) => {
                                    setCredentials({ ...credentials, password: e.target.value });
                                    e.target.value.match(/^[A-Za-z0-9]\w{7,}$/)
                                        ? setValidation({ ...validation, passValid: true })
                                        : setValidation({ ...validation, passValid: false });
                                    if (e.target.value === "") {
                                        setValidation({ ...validation, passValid: "none" });
                                    }
                                }}
                            />
                        </div>
                        <div className="radio-group">
                            <div className="radio-group-header">
                                Пол:
                            </div>
                            <ARRadio 
                                label="Мужской" 
                                variant="outlined" 
                                name="male"
                                checked={credentials.gender === "male" ? true : false}
                                onChange={(e) => {
                                    setCredentials({ ...credentials, gender: "male" });
                                }
                            }
                            />
                            <ARRadio 
                                label="Женский" 
                                variant="outlined" 
                                name="female"
                                checked={credentials.gender === "female" ? true : false}
                                onChange={(e) => {
                                    setCredentials({ ...credentials, gender: "female" });
                                }
                                    }
                            />
                        </div>

                        <ARButton type="submit" variant="big-violet" text="Регистрация" />
                    </form>
                </div>

                <div className="left-block__bottom-text bottom-text">
                    <span className="bottom-text__text">Есть аккаунт? </span>
                    <a href="" className="bottom-text__link" onClick={() => navigate(ARRoutes.LOGIN_PAGE, {replace: true})}>
                        Авторизируйся
                    </a>
                </div>
            </div>

            <div className="ar-signup__right-block">
                <Logo style="white-text" hover="hover" onClick={() => navigate(ARRoutes.MAIN_PAGE)} />

                <div className="right-block__card">
                    <p className="card__title">Уверены, Вам понравится наш сервис!🤞</p>
                    <p className="card__subtitle">Пройдите простую регистрацию аккаунта, чтобы использовать все функции AnyRent в полном объеме</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUpForm;
