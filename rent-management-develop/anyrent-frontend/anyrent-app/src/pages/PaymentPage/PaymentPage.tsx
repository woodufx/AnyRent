import React from "react";
import ARPaymentComponent from "../../components/ARPaymentComponent.tsx/ARPaymentComponent";
import { ARFooter, ARHeader } from "../../library";
import "./paymentPage.less";

const PaymentPage = () => {
    
    return (
        <>
            <div className="main-page-wrapper">
                <ARHeader />
                <div className="ar-main-container">
                    <ARPaymentComponent />
                </div>
            </div>
            <ARFooter />
        </>
    );
};

export default PaymentPage;
