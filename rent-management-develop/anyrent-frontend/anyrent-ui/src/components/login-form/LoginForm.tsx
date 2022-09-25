import Button from "../Button/Button";
import Footer from "../footer/Footer";
import ARInput from "../input/ARInput";
import Logo from "../logo/Logo";
import "./loginForm.less";
import axios from "axios";
import facebook from "../../assets/styles/img/facebook-3-logo-svgrepo-com.png";
import twitter from "../../assets/styles/img/twitter-3-logo-svgrepo-com.png";
import google from "../../assets/styles/img/google-plus-svgrepo-com.png";
import { useState } from "react";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [user, setUser] = useState({});
  const login = async () => {
    try {
      let data = JSON.stringify(credentials);
      const response = await axios.post("http://localhost:8080/api/auth/signin", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const submit = (e: any) => {
    e.preventDefault();
    console.log(credentials);
    login();
  }

  return (
    <div className="ar-login">

      <div className="ar-login__left-block">

        <div className="left-block__header">
          <p className="left-block__header-title">Login✌️</p>
          <p className="left-block__header-subtitle">Please fill your email and pass to login</p>
        </div>

        <div className="left-block__login-form login-form">

          <form onSubmit={submit} className="login-form__form-inner">

            <div className="form-group">
              <ARInput
                icon="email"
                variant="outlined"
                size="medium"
                placeholder="Email"
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>

            <div className="form-group">
              <ARInput
                icon="password"
                variant="outlined"
                size="medium"
                placeholder="Password"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>

            <Button type="submit" className="btn btn--main-primary" text="Login" />

          </form>

          <a className="left-block__forgot-pass-link forgot-pass-link" href="">Forgot Password?</a>

        </div>

        <div className="or-line-container">
          <div className="hr-line"></div>
          <span className="or-text">Or</span>
          <div className="hr-line"></div>
        </div>

        <div className="left-block__social-media">

          <p className="social-media__title">Social Media Login</p>

          <div className="social-media__items-container">
            <img className="social-media__item-link" src={facebook} alt="" />
            <img className="social-media__item-link" src={twitter} alt="" />
            <img className="social-media__item-link" src={google} alt="" />
          </div>

        </div>

        <div className="left-block__bottom-text bottom-text">
          <span className="bottom-text__text">Don’t have an account yet?</span>
          <a href="" className="bottom-text__link">Sign Up</a>
        </div>

      </div>

      <div className="ar-login__right-block">

        <Logo style="white-text" />

        <div className="right-block__card">
          <p className="card__title">Glad to see you here<br />again!🤞</p>
          <p className="card__subtitle">Some more information<br />before logining and<br />something<br />more to read</p>
        </div>

      </div>

    </div>
  );
};

export default LoginForm;
