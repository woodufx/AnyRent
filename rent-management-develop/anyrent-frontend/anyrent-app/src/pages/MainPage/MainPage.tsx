import ARCarousel from "../../components/ARCarousel/ARCarousel";
import { ARFooter } from "../../library";
import CategoryList from "../../components/ARCategoryList/CategoryList";
import { AREquipmentList } from "../../library/equipmentList/EquipmentList";
import { ARHeader } from "../../library/header/Header";
import "./mainPage.less";

interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
   
    return (
        <div className="main-page-wrapper">
            <div className="main-page__header">
                <ARHeader />
            </div>

            <div className="main-page__content">
                <div className="main-page__category-list">
                    <CategoryList />
                </div>

                <div className="main-page__carousel">
                    <ARCarousel />
                </div>
            </div>

            <div className="main-page__footer">
                <ARFooter />
            </div>
        </div>
    );
};

export default MainPage;
