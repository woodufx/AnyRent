import React, { useEffect, useState } from "react";
import { IEquipmentCardProps } from "../equipmentCard/EquipmentCard";
import Loading from "../loading/Loading";
import axios from "axios";
import EquipmentCard from "../equipmentCard/EquipmentCard";
import "./equipmentList.less";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { getPopularItems } from "../../core/store/itemsSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { itemsRoutes } from "../../core/config/routes.config";
import { updateFavourite } from "../../core/store/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AREquipmentList = () => {
    const dispatch = useDispatch();
    const { popularItemsList } = useSelector((state: RootState) => state.items);
    const { user } = useSelector((state: RootState) => state.user);
    let navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        getEquipmentList();
    }, []);

    const getEquipmentList = async () => {
        dispatch(getPopularItems());
    };

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
        return popularItemsList?.map((item, index) => {
            return (
                <EquipmentCard
                    type={"primary"}
                    key={index}
                    id={item._id}
                    title={item.title}
                    description={item.description}
                    address={item.address}
                    rating={item.rating}
                    price={item.price}
                    cover={item.cover}
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

    return (
        <div>
            <div className="ar-item__list">{popularItemsList ? displayEquipmentList() : <Loading />}</div>
            <ToastContainer />
        </div>
    );
};
