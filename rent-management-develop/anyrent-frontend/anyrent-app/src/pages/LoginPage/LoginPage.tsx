import React from "react";
import ARPaymentComponent from "../../components/ARPaymentComponent.tsx/ARPaymentComponent";
import { ARFooter, ARHeader } from "../../library";
import LoginForm from "../../library/loginForm/LoginForm";
import "./loginPage.less";

const LoginPage = () => {
    return (
        <div className="ar-login-page-container">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
