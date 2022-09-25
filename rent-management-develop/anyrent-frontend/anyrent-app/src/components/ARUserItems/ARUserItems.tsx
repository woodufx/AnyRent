import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { itemsRoutes } from "../../core/config/routes.config";
import { IItem } from "../../core/models/item.model";
import UserService from "../../core/services/user.service";
import { RootState } from "../../core/store/store";
import { updateFavourite } from "../../core/store/userSlice";
import EquipmentCard from "../../library/equipmentCard/EquipmentCard";
import Loading from "../../library/loading/Loading";
import homeLogo from "../../assets/styles/img/homeLogo.png";

const ARUserItems = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state: RootState) => state.user);
    const [userItemsList, setUserItemsList] = useState<IItem[] | IItem>();

    useEffect(() => {
        getFavorites();
    }, [user.items]);

    const getFavorites = async () => {
        try {
            const response: IItem = await UserService.getFavouriteItems(user.items);
            setUserItemsList(response);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    return (
        <div className="ar-favourites">
            <p className="ar-favourites__title">
                <img className="ar-favourites__icon" src={homeLogo} alt="" />
                <span className="ar-favourites__text">Мои товары</span>
            </p>

            <div className="ar-favourites__list">
                {userItemsList ? (
                    (userItemsList as IItem[]).map((item, index) => {
                        return (
                            <div className="ar-favourites__card" key={index}>
                                <EquipmentCard
                                    id={item.id}
                                    type="user-items"
                                    title={item.title}
                                    cover={item.cover}
                                    description={item.description}
                                    price={item.price}
                                    rating={item.rating}
                                    owner={item.owner}
                                    showLikeButton={false}
                                    favourite={user.favourite.some((favItem: any) => favItem === item.id)}
                                    onClick={() => {
                                        navigate(itemsRoutes.getOneItemRoute(item.id));
                                    }}
                                    onLikeClick={() => dispatch(updateFavourite(user.id, item.id))}
                                    onButtonClick={() => navigate(itemsRoutes.getOnePaymentRoute(item.id))}
                                />
                            </div>
                        );
                    })
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default ARUserItems;
