import "./personalInfo.less";
import { ARCheckbox } from "../checkbox/Checkbox";
import userLogo from "../../assets/styles/img/userLogo.png";
import { ARInput } from "../input";
import { ARButton } from "../button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { useEffect, useState } from "react";
import { updateUser } from "../../core/store/userSlice";
import { editHandle } from "../../core/store/userSlice";
import { ToastContainer, toast } from "react-toastify";
import AuthService from "../../core/services/auth.service";
import { ARRadio } from "../radio";

interface Ivalidation {
    nameValid: boolean;
    surnameValid: boolean;
    emailValid: boolean;
    phoneValid: boolean;
    dateValid: boolean;
}

const PersonalInfo = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, enableToEdit } = useSelector((state: RootState) => state.user);
    const [isChangePasswordDisabled, setIsChangePasswordDisabled] = useState<boolean>(false);
    const [passwordChange, setPasswordChange] = useState<any>({ oldPassword: "", newPassword: "" });
    const [validation, setValidation] = useState<Ivalidation>({
        nameValid: true,
        surnameValid: true,
        emailValid: true,
        phoneValid: true,
        dateValid: true,
    });

    const [credentials, setCredentials] = useState({
        name: user?.name,
        surname: user?.surname,
        birthDate: user?.birthDate,
        phoneNumber: user?.phoneNumber,
        email: user?.email,
        gender: user?.gender,
    });

    const userInfo = {
        name: user?.name,
        surname: user?.surname,
        birthDate: user?.birthDate,
        phoneNumber: user?.phoneNumber,
        email: user?.email,
        gender: user?.gender,
    };

    const notifySuccess = (message: string) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const notifyError = (message: string) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    useEffect(() => {
        if (passwordChange.oldPassword !== "" && passwordChange.newValue !== "") {
            setIsChangePasswordDisabled(false);
        } else setIsChangePasswordDisabled(true);
    }, [passwordChange]);

    const compareDate = (): boolean => {
        return (
            credentials.name === userInfo.name &&
            credentials.surname === userInfo.surname &&
            credentials.birthDate === userInfo.birthDate &&
            credentials.phoneNumber === userInfo.phoneNumber &&
            credentials.email === userInfo.email &&
            credentials.gender === userInfo.gender
        );
    };

    const isDisabled = () => {
        return !(!compareDate() && validation.phoneValid && validation.emailValid && validation.dateValid && validation.nameValid && validation.surnameValid);
    };

    const isValidDate = (dateString: string) => {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;

        var parts = dateString.split("/");
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[2], 10);

        if (year < 1899 || year > 2025 || month == 0 || month > 12) return false;

        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

        return day > 0 && day <= monthLength[month - 1];
    };

    const changePassword = async () => {
        setPasswordChange({ oldPassword: "", newPassword: "" });
        try {
            await AuthService.changePassword(user.id, passwordChange.oldPassword, passwordChange.newPassword);
            notifySuccess("Пароль успешно изменен!");
        } catch (err) {
            notifyError("Пароль введен неправильно!");
        }
    };
    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable />
            <div className="page-body">
                <div className="personal-info">
                    <div className="header">
                        <img className="header-logo" src={userLogo} alt="" />
                        <span className="header-span">Личная информация об аккаунте:</span>
                    </div>

                    <div className="first-string">
                        <ARInput
                            variant="standard"
                            placeholder=""
                            label="Имя:"
                            icon="user"
                            mask="username"
                            value={credentials.name}
                            required={true}
                            maxLength={25}
                            onChange={(e) => {
                                setCredentials({ ...credentials, name: e.target.value });
                                e.target.value.length >= 3 && e.target.value.length <= 25 && e.target.value.match(/^[а-яa-zA-Z0-9]+$/)
                                    ? setValidation({ ...validation, nameValid: true })
                                    : setValidation({ ...validation, nameValid: false });
                            }}
                        />
                        <ARInput
                            variant="standard"
                            placeholder=""
                            label="Фамилия:"
                            icon="user"
                            mask="username"
                            value={credentials.surname}
                            required={true}
                            maxLength={25}
                            onChange={(e) => {
                                setCredentials({ ...credentials, surname: e.target.value });
                                e.target.value.length >= 3 && e.target.value.length <= 25 && e.target.value.match(/^[а-яa-zA-Z0-9]+$/)
                                    ? setValidation({ ...validation, surnameValid: true })
                                    : setValidation({ ...validation, surnameValid: false });
                            }}
                        />
                        <ARInput
                            variant="standard"
                            placeholder=""
                            label="Дата рождения:"
                            icon="calendar"
                            mask="date"
                            value={credentials.birthDate}
                            onChange={(e) => {
                                setCredentials({ ...credentials, birthDate: e.target.value });
                                isValidDate(e.target.value)
                                    ? setValidation({ ...validation, dateValid: true })
                                    : setValidation({ ...validation, dateValid: false });
                            }}
                        />
                    </div>

                    <div className="second-string">
                        <ARInput
                            variant="standard"
                            placeholder=""
                            label="Телефон:"
                            icon="phone"
                            mask="phone"
                            required={true}
                            value={credentials.phoneNumber}
                            onChange={(e) => {
                                setCredentials({ ...credentials, phoneNumber: e.target.value });
                                e.target.value.length >= 17
                                    ? setValidation({ ...validation, phoneValid: true })
                                    : setValidation({ ...validation, phoneValid: false });
                            }}
                        />
                        <ARInput
                            variant="standard"
                            type="email"
                            size="medium"
                            icon="email-purple"
                            label="E-mail:"
                            mask="email"
                            required={true}
                            value={credentials.email}
                            maxLength={25}
                            onChange={(e) => {
                                setCredentials({ ...credentials, email: e.target.value });
                                e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                                    ? setValidation({ ...validation, emailValid: true })
                                    : setValidation({ ...validation, emailValid: false });
                            }}
                        />
                        <div className="checkbox-block">
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
                        </div>
                    </div>

                    <div className="presonal-info__button">
                        <ARButton
                            variant="medium-lavender"
                            text="Сохранить"
                            isDisabled={isDisabled()}
                            onClick={() => {
                                dispatch(updateUser(user.id, credentials));
                                notifySuccess("Данные изменены успешно!");
                                // dispatch(editHandle());
                            }}
                        />
                    </div>
                </div>

                <div className="middle-line"></div>

                <div className="password-panel">
                    <div className="header">
                        <span className="header-span">Смена пароля:</span>
                    </div>

                    <div className="input-wrapper">
                        <div className="header-input-wrapper">
                            <div className="input-group">
                                <ARInput
                                    variant="outlined"
                                    type="password"
                                    size="medium"
                                    label="Старый пароль:"
                                    required={true}
                                    value={passwordChange.oldPassword}
                                    onChange={(e) => {
                                        setPasswordChange({ ...passwordChange, oldPassword: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="input-group">
                                <ARInput
                                    variant="outlined"
                                    type="password"
                                    size="medium"
                                    label="Новый пароль:"
                                    required={true}
                                    value={passwordChange.newPassword}
                                    onChange={(e) => {
                                        setPasswordChange({ ...passwordChange, newPassword: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <ARButton
                        variant="medium-lavender"
                        isDisabled={isChangePasswordDisabled}
                        text="Изменить"
                        onClick={() => {
                            changePassword();
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default PersonalInfo;
