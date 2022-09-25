import React, { useEffect, useState } from "react";
import "./itemsComponent.less";
import { AREquipmentList, ARPagination, ARToggleGroup } from "../../library";
import { ARFiltration } from "../../library/filtration/Filtration";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredItems, getItems, getItemsByCategory } from "../../core/store/itemsSlice";
import EquipmentCard from "../../library/equipmentCard/EquipmentCard";
import { RootState } from "../../core/store/store";
import Loading from "../../library/loading/Loading";
import { ARDropdown } from "../../library";
import group1 from "../../assets/styles/svg/icons/Group1.svg";
import group2 from "../../assets/styles/svg/icons/Group2.svg";
import { IItem } from "../../core/models/item.model";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { itemsRoutes } from "../../core/config/routes.config";
import UserService from "../../core/services/user.service";
import { updateFavourite } from "../../core/store/userSlice";
import DataService from "../../core/services/data.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ARItemsComponent = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { categoryId, searchValue } = useParams();
    const { user } = useSelector((state: RootState) => state.user);
    const { itemsList } = useSelector((state: RootState) => state.items);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [priceValue, setPriceValue] = useState("");
    const [categoryName, setCategoryName] = useState<string>("");
    const [layout, setLayout] = useState<string>("small");
    const [dropdownValue, setDropdownValue] = useState(0);
    const [checkboxValues, setCheckboxValues] = useState("");

    useEffect(() => {
        searchValue ? getEquipmentSearchList() : getEquipmentCategoryList();
    }, [categoryId, searchValue]);

    useEffect(() => {
        if (!searchValue) {
            getCurrentCategory();
        }
    }, [categoryId]);

    useEffect(() => {
        searchValue ? getEquipmentSearchList() : getEquipmentCategoryList();
    }, [dropdownValue, checkboxValues, priceValue]);

    const getEquipmentSearchList = async () => {
        dispatch(getFilteredItems(`name=${searchValue}&sort=price:${dropdownValue}&rating=${checkboxValues}&${priceValue}`));
    };

    const getEquipmentCategoryList = async () => {
        dispatch(getFilteredItems(`category=${categoryId}&sort=price:${dropdownValue}&rating=${checkboxValues}&${priceValue}`));
    };

    const getCurrentCategory = async () => {
        const response = await DataService.getCurrentCategory(categoryId!);
        setCategoryName(response.categoryName);
    };

    const changeCheckboxState = (values: string) => {
        setCheckboxValues(values);
    };

    const changePriceState = (min: number, max: number) => {
        setPriceValue(`minPrice=${min}&maxPrice=${max}`);
    };

    const changeDropdownState = (value: string) => {
        switch (value) {
            case "Дороже":
                setDropdownValue(-1);
                break;
            case "Дешевле":
                setDropdownValue(1);
                break;
            case "По умолчанию":
                setDropdownValue(0);
                break;
        }
    };

    // const paginationHandler = (currentPage2: any, firstItemIndex: number, lastItemIndex: number) => {
    //     console.log(firstItemIndex, lastItemIndex, currentPage2);
    //     const tempItems = itemsList.slice(firstItemIndex, lastItemIndex);
    //     setPageItems(tempItems);
    // };

    const cardButtonHandler = (itemId: string) => {
        user
            ? navigate(itemsRoutes.getOnePaymentRoute(itemId))
            : toast.warn("Вам нужно авторизоваться, чтобы арендовать продукты!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
              });
    };

    const cardLikeHandler = (itemId: string) => {
        user
            ? dispatch(updateFavourite(user.id, itemId))
            : toast.warn("Вам нужно авторизоваться, чтобы добавить в избранные!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
              });
    };

    const displayEquipmentList = () => {
        return currentItems?.map((item, index) => {
            return (
                <EquipmentCard
                    type={layout === "small" ? "primary" : "secondary"}
                    key={index}
                    id={item._id}
                    title={item.title}
                    description={item.description}
                    address={item.address}
                    rating={item.rating}
                    price={item.price}
                    cover={item.cover}
                    owner={item.owner}
                    showLikeButton={user ? true : false}
                    favourite={user?.favourite.some((favItem: any) => favItem === item.id)}
                    onClick={() => {
                        navigate(itemsRoutes.getOneItemRoute(item.id));
                    }}
                    onLikeClick={() => cardLikeHandler(item.id)}
                    onButtonClick={() => cardButtonHandler(item.id)}
                />
            );
        });
    };

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentItems = itemsList.slice(indexOfFirstPost, indexOfLastPost);
    const pages = Math.ceil(itemsList.length / itemsPerPage);

    return (
        <div className="ar-items-container">
            <div className="ar-items-container__nav-title">
                {searchValue ? (
                    <span>Поиск аренд по запросу “{searchValue?.replace("+", " ")}”</span>
                ) : (
                    <span>Аренда в категории “{categoryName && categoryName}”</span>
                )}
            </div>
            <div className="ar-items-container__main-container">
                <div className="ar-items-container__main-container__filters-wrapper">
                    <ARFiltration onChangeValue={changeCheckboxState} onChangePrice={changePriceState} />
                </div>
                <div className="ar-items-container__main-container__product-container">
                    <div className="ar-product-container__sort-wrapper">
                        <ARDropdown values={["Дешевле", "Дороже", "По умолчанию"]} defaultValue="Сортировка" onChange={changeDropdownState} />
                        <ARToggleGroup
                            toggleHandler={(event) => {
                                const target = event.target as HTMLElement;
                                if ((target as HTMLButtonElement).name !== "") {
                                    setLayout((event.target as HTMLButtonElement).name);
                                } else {
                                    setLayout((event.target as HTMLImageElement).alt);
                                }
                            }}
                        >
                            <img src={group1} alt="small" />
                            <img src={group2} alt="wide" />
                        </ARToggleGroup>
                    </div>
                    <div className="ar-product-container__product-list">
                        <div className="ar-product-container__product-list__inner">
                            {currentItems.length ? displayEquipmentList() : <div>Ничего не найдено</div>}
                        </div>
                    </div>
                    <div className="ar-product-container__pagination-wrapper">
                        <ARPagination pages={pages} variant="wide" setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ARItemsComponent;
