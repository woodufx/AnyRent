import { BrowserRouter, Route, Link, Routes, NavLink } from "react-router-dom";
import "./App.less";
import ComponentsList from "./components/ComponentsList";
import ARInput from "./components/input/ARInput";
import AllButtons from "./components/all-buttons/AllButtons";
import Popover from "./components/Popover/Popover";
import Logo from "./components/logo/Logo";
import Loginform from "./components/login-form/LoginForm";
import Loading from "./components/loading/Loading";
import Pagination from "./components/pagination/Pagination";
import Radio from "./components/radio/Radio";
import Checkbox from "./components/checkbox/Checkbox";
import Footer from "./components/footer/Footer";
import Dropdown from "./components/dropdown/Dropdown";
import Header from "./components/header/Header";
import CategoryCard from "./components/categoryCard/CategoryCard";
import car from "./assets/styles/img/car.png";
import CategoryList from "./components/categoryList/CategoryList";
import EquipmentCard from "./components/equipmentCard/EquipmentCard";
import EquipmentList from "./components/equipmentList/EquipmentList";
import Rating from "./components/rating/Rating";
import ParametersPanel from "./components/parameters-panel/ParametersPanel";
import ARTimePicker from "./components/timePicker/ARTimePicker";
import ARCarousel from "./components/carousel/ARCarousel";
import { ARCarouselItem } from "./components/carousel/ARCarouselItem";
import ProductImg from "./assets/styles/img/ProductImg.png";

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <header className="main-header">
          <h1>Anyrent UI</h1>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<ComponentsList />}>
              <Route
                path="input"
                element={
                  <ARInput variant="standard" placeholder="Поиск аренд" onChange={(event) => console.log(event!.target.value)} />
                }
              />
              <Route path="pagination" element={<Pagination totalItems={5} itemsPerPage={1} variant="wide" />} />
              <Route path="radio" element={<Radio variant="contained" name="name" />} />
              <Route path="checkbox" element={<Checkbox variant="outlined" />} />
              <Route path="all-buttons" element={<AllButtons />} />
              <Route path="popover" element={<Popover text="information" background="#c1c5c9" color="#383c3f" />} />
              <Route path="logo" element={<Logo hover="hover" style="white-text" size="default" />} />
              <Route path="login-form" element={<Loginform />} />
              <Route path="loading" element={<Loading style="primary" />} />
              <Route path="footer" element={<Footer />} />
              <Route path="dropdown" element={<Dropdown values={["1", "2", "3"]} />} />
              <Route path="header" element={<Header />} />
              <Route
                path="equipment-card"
                element={
                  <div>
                    <EquipmentCard
                      id={1}
                      type="secondary"
                      title="12311111111111111111111111111111111111111111111111111111"
                      description="123"
                      price={500}
                    />{" "}
                    <EquipmentCard id={1} type="primary" title="1231111111111111111" description="123" price={500} />
                  </div>
                }
              />
              <Route path="equipment-list" element={<EquipmentList />} />
              <Route
                path="category-card"
                element={
                  <CategoryCard
                    title="Аренда автомобилей"
                    image={car}
                    onClick={() => {
                      console.log(123);
                    }}
                  />
                }
              />
              <Route path="category-list" element={<CategoryList />} />
              <Route path="rating" element={<Rating value={4} />} />
              <Route path="panel" element={<ParametersPanel />} />
              <Route path="time-picker" element={<ARTimePicker onChange={(value) => console.log(value)} />} />
              <Route
                path="carousel"
                element={
                  <ARCarousel width="385px">
                    <ARCarouselItem><img src={ProductImg}></img></ARCarouselItem>
                    <ARCarouselItem><img src={ProductImg}></img></ARCarouselItem>
                    <ARCarouselItem><img src={ProductImg}></img></ARCarouselItem>
                  </ARCarousel>
                }
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
