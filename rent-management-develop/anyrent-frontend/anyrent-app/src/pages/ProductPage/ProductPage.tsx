import React from "react";
import ARProductComponent from "../../components/ARPRoductComponent/ARProductComponent";
import { ARFooter, ARHeader } from "../../library";
import "./productPage.less";

const ProductPage = () => {
    return (

        <div className="product-page-wrapper">
            <div className="personal-page__header">
                <ARHeader />
            </div>

            <div className="product-page__content">
                <ARProductComponent />
            </div>

            <div className="product-page__footer">
                <ARFooter />
            </div>
        </div >
    );
};

export default ProductPage;
