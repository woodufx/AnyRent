import EquipmentCard from "../../library/equipmentCard/EquipmentCard";
import iconHistory from "../../assets/styles/img/iconHistory.png";
import "./history.less";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import DataService from "../../core/services/data.service";
import { IItem } from "../../core/models/item.model";
import { useNavigate } from "react-router-dom";
import { itemsRoutes } from "../../core/config/routes.config";
import Loading from "../../library/loading/Loading";
import { updateFavourite } from "../../core/store/userSlice";
import HistoryCard from "../../library/historyCard/HistoryCard";
import { IOrder } from "../../core/models/order.model";
import { getItem, getItems } from "../../core/store/itemsSlice";

export interface ARHistoryProps {}

const ARHistory = (props: ARHistoryProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state: RootState) => state.user);
    const [orderList, setOrderList] = useState<IOrder[] | IOrder>([]);
    const [itemsList, setItemsList] = useState<any>([]);

    useEffect(() => {
        getItemsListByOrders();
    }, []);

    const getItemsListByOrders = async () => {
        try {
            const response: any = await DataService.getUserHistoryItems(user.id);
            setItemsList(response);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    return (
        <div className="ar-history">
            <p className="ar-history__title">
                <img className="ar-history__icon" src={iconHistory} alt="" />
                <span className="ar-history__text">История аренд</span>
            </p>

            <div className="ar-history__colums-wrapper">
                <div className="ar-history__colums-order">
                    <p className="ar-history__colums-item">#</p>
                    <p className="ar-history__colums-item">Товар</p>
                </div>

                <div className="ar-history__colums-other">
                    <p className="ar-history__colums-item">Арендодатель</p>
                    <p className="ar-history__colums-item">Дата</p>
                    <p className="ar-history__colums-item">Цена</p>
                    <p className="ar-history__colums-item">Статус</p>
                </div>
            </div>

            <div className="ar-history__list">
                {itemsList ? (
                    (itemsList as any[]).map((item, index) => {
                        return (
                            <div className="ar-history__card" key={index}>
                                <HistoryCard
                                    id={item.orderId}
                                    itemId={item.item.id}
                                    title={item.item.title}
                                    userId={user.id}
                                    description={item.item.description}
                                    price={item.item.price}
                                    address={item.item.address}
                                    cover={item.item.cover}
                                    owner={item.item.owner}
                                    date={item.date}
                                    status={item.status}
                                    onClick={() => {
                                        navigate(itemsRoutes.getOneItemRoute(item.item.id));
                                    }}
                                    onButtonClick={() => navigate(itemsRoutes.getOnePaymentRoute(item.id))}
                                    onDeleteClick={() => {
                                        getItemsListByOrders();
                                    }}
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

export default ARHistory;
