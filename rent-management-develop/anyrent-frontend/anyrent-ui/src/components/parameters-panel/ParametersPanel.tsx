import "./parametersPanel.less";
import SvgIcon from "../svgIcon/SvgIcon";
import { useState } from "react";

import userLogo from "../../assets/styles/img/userLogo.png";
import userLogoFocus from "../../assets/styles/img/userLogoFocus.png";

import homeLogo from "../../assets/styles/img/homeLogo.png";
import homeLogoFocus from "../../assets/styles/img/homeLogoFocus.png";

import starLogo from "../../assets/styles/img/starLogo.png";
import starLogoFocus from "../../assets/styles/img/starLogoFocus.png";

import favLogo from "../../assets/styles/img/favLogo.png";
import favLogoFocus from "../../assets/styles/img/favLogoFocus.png";

import messagesLogo from "../../assets/styles/img/messagesLogo.png";
import messagesLogoFocus from "../../assets/styles/img/messagesLogoFocus.png";

import newrentLogo from "../../assets/styles/img/newrentLogo.png";
import newrentLogoFocus from "../../assets/styles/img/newrentLogoFocus.png";

import notificationLogo from "../../assets/styles/img/notificationLogo.png";
import notificationLogoFocus from "../../assets/styles/img/notificationLogoFocus.png";

export interface ParametersPanelProps {

}

const ParametersPanel = (props: ParametersPanelProps) => {

  let userFocus: string = userLogo;
  let homeFocus: string = homeLogo;
  let starFocus: string = starLogo;
  let favFocus: string = favLogo;
  let messagesFocus: string = messagesLogo;
  let newrentFocus: string = newrentLogo;
  let notificationFocus: string = notificationLogo;

  const [currentItem, setCurrentItem] = useState<string>(userFocus);

  return (
    <div className="panel-wrapper">

      <a onClick={() => setCurrentItem(currentItem => userFocus)} tabIndex={-1} className={`panel-a ${currentItem === userFocus ? "active-item" : ""}`}>
        <img className="panel-img" src={currentItem === userFocus ? userLogoFocus : userLogo} alt="" />
        <span className="panel-span">Мои данные</span>
      </a>

      <a onClick={() => setCurrentItem(currentItem => homeFocus)} tabIndex={-1} className={`panel-a ${currentItem === homeFocus ? "active-item" : ""}`}>
        <img className="panel-img" src={currentItem === homeFocus ? homeLogoFocus : homeLogo} alt="" />
        <span className="panel-span">Мои товары</span>
      </a>

      <a onClick={() => setCurrentItem(currentItem => starFocus)} tabIndex={-1} className={`panel-a ${currentItem === starFocus ? "active-item" : ""}`}>
        <img className="panel-img" src={currentItem === starFocus ? starLogoFocus : starLogo} alt="" />
        <span className="panel-span">Отзывы</span>
      </a>

      <a onClick={() => setCurrentItem(currentItem => favFocus)} tabIndex={-1} className={`panel-a ${currentItem === favFocus ? "active-item" : ""}`}>
        <img className="panel-img" src={currentItem === favFocus ? favLogoFocus : favLogo} alt="" />
        <span className="panel-span">Избранное</span>
      </a>

      <a onClick={() => setCurrentItem(currentItem => messagesFocus)} tabIndex={-1} className={`panel-a ${currentItem === messagesFocus ? "active-item" : ""}`}>
        <img className="panel-img" src={currentItem === messagesFocus ? messagesLogoFocus : messagesLogo} alt="" />
        <span className="panel-span">Сообщения</span>
      </a>

      <a onClick={() => setCurrentItem(currentItem => newrentFocus)} tabIndex={-1} className={`panel-a ${currentItem === newrentFocus ? "active-item" : ""}`}>
        <img className="panel-img" src={currentItem === newrentFocus ? newrentLogoFocus : newrentLogo} alt="" />
        <span className="panel-span">Новая аренда</span>
      </a>

      <a onClick={() => setCurrentItem(currentItem => notificationFocus)} tabIndex={-1} className={`panel-a ${currentItem === notificationFocus ? "active-item" : ""}`}>
        <img className="panel-img" src={currentItem === notificationFocus ? notificationLogoFocus : notificationLogo} alt="" />
        <span className="panel-span">Уведомления</span>
      </a>

    </div >
  );
};

export default ParametersPanel;