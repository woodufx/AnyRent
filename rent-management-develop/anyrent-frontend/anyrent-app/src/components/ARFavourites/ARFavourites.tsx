import EquipmentCard from "../../library/equipmentCard/EquipmentCard";
import favLogo from "../../assets/styles/img/favLogo.png";

import "./favourites.less";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import UserService from "../../core/services/user.service";
import { IItem } from "../../core/models/item.model";
import { useNavigate } from "react-router-dom";
import { itemsRoutes } from "../../core/config/routes.config";
import Loading from "../../library/loading/Loading";
import { updateFavourite } from "../../core/store/userSlice";
import FavouriteCard from "../../library/favouriteCard/FavouriteCard";

export interface ARFavouritesProps {}

const ARFavourites = (props: ARFavouritesProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state: RootState) => state.user);
    const [favouritesList, setFavouritesList] = useState<IItem[] | IItem>();

    useEffect(() => {
        getFavorites();
    }, [user.favourite]);

    const getFavorites = async () => {
        try {
            const response: IItem = await UserService.getFavouriteItems(user.favourite);
            setFavouritesList(response);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    return (
        <div className="ar-favourites">
            <p className="ar-favourites__title">
                <img className="ar-favourites__icon" src={favLogo} alt="" />
                <span className="ar-favourites__text">Избранное</span>
            </p>

            <div className="ar-favourites__list">
                {favouritesList ? (
                    (favouritesList as IItem[]).map((item, index) => {
                        return (
                            <div className="ar-favourites__card" key={index}>
                                <FavouriteCard
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    address={item.address}
                                    showLikeButton={true}
                                    cover={item.cover}
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

export default ARFavourites;
