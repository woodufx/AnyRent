import ParametersPanel from "../../library/parametersPanel/ParametersPanel";

import mapPersonalIcon from "../../assets/styles/img/mapPersonalIcon.png";
import userPersonalIcon from "../../assets/styles/img/userPersonalIcon.png";
import calendarPersonalIcon from "../../assets/styles/img/calendarPersonalIcon.png";

import avatarImage from "../../assets/styles/img/avatarImage.png";

import "./personalPageContainer.less";
import PersonalInfo from "../../library/personalInfo/PersonalInfo";
import { Outlet, useNavigate } from "react-router-dom";
import { ARAvatar, ARButton } from "../../library";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { useEffect } from "react";
import { ARRoutes } from "../../core/config/routes.config";
import { logout, editHandle } from "../../core/store/userSlice";
import { userInfo } from "os";

export interface ARPersonalPageContainerProps {}

const ARPersonalPageContainer = (props: ARPersonalPageContainerProps) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!user) {
            navigate(ARRoutes.MAIN_PAGE);
            console.log("user log out");
        }
    }, [user]);

    return (
        <>
            <div className="ar-pesonal-page-container">
                {user && (
                    <div className="ar-pesonal-page__avatar">
                        <div className="ar-pesonal-page__avatar-image">
                            <ARAvatar size="large" name={user.name} surname={user.surname? user?.surname : "" } />
                        </div>

                        {/* <ARButton
                            text="Изменить"
                            variant="medium-lavender"
                            icon="pen"
                            isDisabled={true}
                            onClick={() => {
                                dispatch(editHandle());
                            }}
                        /> */}

                        <div className="ar-pesonal-page__info-block">
                            <p className="info-block__text">
                                <img className="info-block__icon" src={userPersonalIcon} alt="" />
                                {`${user?.name} ${user?.surname? user?.surname : ""}`}
                            </p>
                            <p className="info-block__text">
                                <img className="info-block__icon" src={calendarPersonalIcon} alt="" />С нами с {user?.regDate}
                            </p>
                            <p className="info-block__text">
                                <img className="info-block__icon" src={mapPersonalIcon} alt="" />
                                Воронеж
                            </p>
                        </div>
                    </div>
                )}

                <div className="ar-pesonal-page__parameters-panel">
                    <ParametersPanel />
                </div>

                <ARButton
                    text="Выйти"
                    variant="medium-lavender"
                    onClick={() => {
                        navigate(ARRoutes.MAIN_PAGE);
                        dispatch(logout());
                    }}
                />
            </div>

            <Outlet />
        </>
    );
};

export default ARPersonalPageContainer;
