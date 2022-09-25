import "./personalInfo.less";
import Button from "../Button/Button";
import Input from "../input/ARInput";
import Checkbox from "../checkbox/Checkbox";

import userLogo from "../../assets/styles/img/userLogo.png";

const PersonalInfo = () => {
  return (<>
    <div className="page-body">

      <div className="personal-info">

        <div className="header">
          <img className="header-logo" src={userLogo} alt="" />
          <span className="header-span">Личная информация об аккаунте:</span>
        </div>

        <div className="first-string">
          <Input variant="standard" placeholder="" label="Имя пользователя: *" icon="user" />
          <Input variant="standard" placeholder="" label="Дата рождения:" icon="calendar" />
          <Input variant="standard" placeholder="" label="Телефон: *" icon="phone" mask="phone" />
        </div>

        <div className="second-string">
          <Input variant="standard" type="email" size="medium" icon="email" label="E-mail: *" mask="email" />
          <div className="checkbox-block">
            <span className="checkbox-label">Пол:</span>
            <div className="checkbox-wrapper">
              <div className="checkbox-group">
                <Checkbox label="Мужской" variant="outlined" />
              </div>
              <div className="checkbox-group">
                <Checkbox label="Женский" variant="outlined" />
              </div>
            </div>
          </div>
        </div>

        <span className="third-string__heading">Социальные сети:</span>

        <div className="third-string">
          <Input variant="standard" />
          <Input variant="standard" />
          <Input variant="standard" />
        </div>

        <Button className="btn btn--medium" text="Сохранить" />

      </div>

      <div className="middle-line"></div>

      <div className="password-panel">

        <div className="header">
          <span className="header-span">Смена пароля:</span>
        </div>

        <div className="input-wrapper">
          <div className="header-input-wrapper">
            <div className="input-group">
              <Input variant="outlined" type="password" size="medium" />
            </div>
            <div className="input-group">
              <Input variant="outlined" type="password" size="medium" />
            </div>
          </div>
        </div>

        <Button className="btn btn--medium" text="Изменить" />

      </div>

    </div>
  </>
  );
};

export default PersonalInfo;
