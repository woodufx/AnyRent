import React from "react";
import ARItemsComponent from "../../components/ARItemsComponent/ARItemsComponent";
import { ARFooter, ARHeader } from "../../library";
import "./itemsPage.less";

const ItemsPage = () => {
  
    return (
        <>
            <div className="main-page-wrapper">
                <ARHeader />
                <div className="ar-main-container">
                    <ARItemsComponent />
                </div>
            </div>
            <ARFooter />
        </>
    );
};

export default ItemsPage;
