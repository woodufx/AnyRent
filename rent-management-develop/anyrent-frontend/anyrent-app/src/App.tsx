import React from "react";
import "./App.less";
import car from "./assets/styles/img/car.png";
import { Routes, Route, Link } from "react-router-dom";
import ShowCase from "./pages/ShowCase";
import MainPage from "./pages/MainPage/MainPage";
import { ARRoutes, ARShowCaseRoutes, ARUserRoutes } from "./core/config/routes.config";
import PersonalPage from "./pages/PersonalPage/PersonalPage";
import PersonalInfo from "./library/personalInfo/PersonalInfo";
import ARFavourites from "./components/ARFavourites/ARFavourites";
import ProductPage from "./pages/ProductPage/ProductPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Logo from "./library/logo/Logo";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import Error404Page from "./pages/Error404Page/Error404Page";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import { itemsRoutes, userRoutes } from "./core/config/routes.config";
import ARCreateForm from "./components/ARItemCreation/ARCreateForm";
import ARUserItems from "./components/ARUserItems/ARUserItems";
import ARHistory from "./components/ARHistory/ARHistory";
import TermsRights from "./pages/Terms-Rights-Info/TermsRights";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import AboutTeam from "./pages/AboutTeam/AboutTeam";
import Contacts from "./pages/Contacts/Contacts";
import ConfidentialPolitics from "./pages/ConfidentialPolitics/ConfidentialPolitics";
import FindBug from "./pages/FindBug/FindBug";
import Support from "./pages/Support/Support";
import { ARCheckbox, ARDropdown, ARFooter, ARHeader, ARInput, ARRating, ARSearchInput } from "./library";
import { Radio } from "@mui/material";
import Loading from "./library/loading/Loading";
import ARDatePicker from "./library/datePicker/ARDatePicker";
import ARTimePicker from "./library/timePicker/ARTimePicker";
import ARFiltration from "./library/filtration/Filtration";
import ARInRent from "./components/ARInRent/ARInRent";
import ParametersPanel from "./library/parametersPanel/ParametersPanel";
import SignUpForm from "./library/signupForm/SignUpForm";
import CategoryCard from "./library/categoryCard/CategoryCard";
import ARCarousel from "./components/ARCarousel/ARCarousel";

function App() {
    return (
        <>
            <Routes>
                <Route path={ARRoutes.MAIN_PAGE} element={<MainPage />} />
                <Route path={ARRoutes.SHOW_CASE} element={<ShowCase />} >
                    <Route
                        path={ARShowCaseRoutes.INPUT}
                        element={
                            <ARInput variant="standard" placeholder="Поиск аренд" />
                        }
                    />
                    <Route path={ARShowCaseRoutes.SEARCH_INPUT} element={<ARSearchInput placeholder="Поиск" />} />
                    <Route path={ARShowCaseRoutes.RADIO} element={<Radio name="name" />} />
                    <Route path={ARShowCaseRoutes.CHECKBOX} element={<ARCheckbox variant="outlined" />} />
                    <Route path={ARShowCaseRoutes.LOGO} element={<Logo hover="hover" style="white-text" size="default" />} />
                    <Route path={ARShowCaseRoutes.SIGN_UP_FORM} element={<SignUpForm />} />
                    <Route path={ARShowCaseRoutes.LOADING} element={<Loading style="primary" />} />
                    <Route path={ARShowCaseRoutes.DROPDOWN} element={<ARDropdown values={["Авто", "Недвижимость", "Для дома"]} defaultValue={"Выбор категории"} />} />
                    <Route path={ARShowCaseRoutes.HEADER} element={<ARHeader />} />
                    <Route path={ARShowCaseRoutes.FOOTER} element={<ARFooter />} />
                    <Route
                        path={ARShowCaseRoutes.CATEGORY_CARD}
                        element={
                            <CategoryCard
                                title="Аренда автомобилей"
                                image={car}
                            />
                        }
                    />
                    <Route path={ARShowCaseRoutes.RATING} element={<ARRating value={4} />} />
                    <Route path={ARShowCaseRoutes.PANEL} element={<ParametersPanel />} />
                    <Route path={ARShowCaseRoutes.TIME_PICKER} element={<ARTimePicker onChange={(value) => console.log(value)} />} />
                    <Route path={ARShowCaseRoutes.DATE_PICKER} element={<ARDatePicker onChange={(value) => console.log(value)} />} />
                    <Route path={ARShowCaseRoutes.CAROUSEL} element={<ARCarousel />} />
                    <Route path={ARShowCaseRoutes.FILTRATION} element={<ARFiltration />} />
                </Route>
                <Route path={itemsRoutes.getOneItemRoute()} element={<ProductPage />} />
                <Route path={itemsRoutes.getItemsBySearch()} element={<ItemsPage />} />
                <Route path={itemsRoutes.getOnePaymentRoute()} element={<PaymentPage />} />
                <Route path={ARRoutes.LOGIN_PAGE} element={<LoginPage />} />
                <Route path={ARRoutes.SIGNUP_PAGE} element={<SignUpPage />} />
                <Route path={ARRoutes.TERMS_RIGHTS} element={<TermsRights />} />
                <Route path={ARRoutes.ABOUT_TEAM} element={<AboutTeam />} />
                <Route path={ARRoutes.CONTACTS} element={<Contacts />} />
                <Route path={ARRoutes.CONFIDENTIAL} element={<ConfidentialPolitics />} />
                <Route path={ARRoutes.FIND_BUG} element={<FindBug />} />
                <Route path={ARRoutes.SUPPORT} element={<Support />} />
                <Route path={itemsRoutes.getItemsByCategoryRoute()} element={<ItemsPage />} />
                <Route path={userRoutes.getUserRoute()} element={<PersonalPage />}>
                    <Route path={userRoutes.getUserInfoRoute()} element={<PersonalInfo />} />
                    <Route path={userRoutes.getUserFavsRoute()} element={<ARFavourites />} />
                    <Route path={userRoutes.getUserAddItemRoute()} element={<ARCreateForm />} />
                    <Route path={userRoutes.getUserItemsRoute()} element={<ARUserItems />} />
                    <Route path={userRoutes.getUserHistoryRoute()} element={<ARHistory />} />
                    <Route path={userRoutes.getUserInRentRoute()} element={<ARInRent />} />
                </Route>
                <Route path={ARRoutes.ABOUT_US_PAGE} element={<AboutUsPage />} />
                <Route path={ARRoutes.ERR_404} element={<Error404Page />} />
                <Route path="*" element={<Error404Page />} />
            </Routes>
        </>
    );
}

export default App;
