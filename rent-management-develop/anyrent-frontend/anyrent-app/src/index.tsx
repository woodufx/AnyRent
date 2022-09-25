import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GoogleOAuthProvider clientId="217235402221-976eem466ten9mv9m4515qmr10a72vf3.apps.googleusercontent.com">
                <Provider store={store}>
                    <App />
                </Provider>
            </GoogleOAuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
