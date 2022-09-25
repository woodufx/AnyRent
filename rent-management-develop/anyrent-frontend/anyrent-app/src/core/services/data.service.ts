import axios from "axios";
import { serverURL } from "../config/api.config";
import { IOrder } from "../models/order.model";

const getCurrentCategory = async (id: string) => {
    const response = await axios.get(`${serverURL}/api/categories/${id}`);
    return response.data;
};

const getCurrentCategoryByName = async (name: string) => {
    const response = await axios.get(`${serverURL}/api/categories/name?name=${name}`);
    return response.data;
};

const getSearchItems = async (searchName: string) => {
    const response = await axios.get(`${serverURL}/api/items/search?name=${searchName}`);
    return response.data;
};

const getFilteredItems = async (params: string) => {
    const response = await axios.get(`${serverURL}/api/items/filter?${params}`);
    return response.data;
};

const getMainCategoriesList = async () => {
    const response = await axios.get(`${serverURL}/api/categories/main`);
    return response.data;
};

const getSubCategoriesList = async (mainCategory: string) => {
    const response = await axios.get(`${serverURL}/api/categories/sub?id=${mainCategory}`);
    return response.data;
};

const getMainPageCategoriesList = async () => {
    const response = await axios.get(`${serverURL}/api/categories/main-page`);
    return response.data;
};

const getBurgerCategoriesList = async () => {
    const response = await axios.get(`${serverURL}/api/categories/burger`);
    return response.data;
};

const getItemsList = async () => {
    const response = await axios.get(`${serverURL}/api/items/all`);
    return response.data;
};

const getItemsByCategory = async (categoryId: string) => {
    const response = await axios.get(`${serverURL}/api/items/category?category=${categoryId}`);
    return response.data;
};

const getItem = async (id: string) => {
    const response = await axios.get(`${serverURL}/api/items/${id}`);
    return response.data;
};

const getOrderByCustomerId = async (id: string) => {
    const responseOrder = await axios.get(`${serverURL}/api/orders/${id}`);
    let orders: string[] = [];
    let ordersList = responseOrder.data;
    ordersList.forEach((order: IOrder) => {
        orders.push(order.itemId);
    });

    const responseItem = await axios.post(`${serverURL}/api/items/get-by-array`, {
        arrayId: orders,
    });

    return responseItem.data;
};

const getUserHistoryItems = async (id: string) => {
    const response = await axios.post(`${serverURL}/api/items/user-history`, {
        userId: id,
    });
    return response.data;
};

const getUserActiveOrders = async (id: string) => {
    const response = await axios.post(`${serverURL}/api/items/user-active-orders`, {
        userId: id,
    });
    return response.data;
};

const createOrder = async (itemId: string, ownerId: string, customerId: string, orderTime: any[], cost: number) => {
    const response = await axios.post(
        `${serverURL}/api/orders/create`,
        {
            itemId,
            ownerId,
            customerId,
            cost,
            orderTime,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
};

const updateOrderStatus = async (userId: string, id: string, status: string) => {
    const response = await axios.post(
        `${serverURL}/api/orders/update`,
        { userId, id, status },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
};

const deleteOrder = async (userId: string, id: string) => {
    const response = await axios.post(
        `${serverURL}/api/orders/delete`,
        {
            userId,
            id,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
};

const createItem = async (userId: string, item: object) => {
    const response = await axios.post(
        `${serverURL}/api/items/add`,
        {
            userId,
            item,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
};

const addReview = async (id: string, review: any) => {
    const response = await axios.post(`${serverURL}/api/items/add-review/${id}`, review, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
};

const sendImage = async (image: any) => {
    let body = new FormData();
    body.set("key", "30cbb9425ac1ef8c887104f77ff65bb9");
    body.append("image", image);
    const response = await axios.post(`https://api.imgbb.com/1/upload`, body, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data.url;
};

const DataService = {
    getMainPageCategoriesList,
    getBurgerCategoriesList,
    getItemsList,
    getItem,
    getSearchItems,
    getFilteredItems,
    getItemsByCategory,
    getCurrentCategory,
    getMainCategoriesList,
    getCurrentCategoryByName,
    getSubCategoriesList,
    createOrder,
    createItem,
    getOrderByCustomerId,
    deleteOrder,
    getUserHistoryItems,
    addReview,
    updateOrderStatus,
    getUserActiveOrders,
    sendImage,
};

export default DataService;
