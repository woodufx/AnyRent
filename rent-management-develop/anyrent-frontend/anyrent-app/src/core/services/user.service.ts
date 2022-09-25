import axios from "axios";
import { serverURL } from "../config/api.config";
import { IItem } from "../models/item.model";
import AuthService from "./auth.service";

const getFavouriteItems = async (favouritesId: string[]) => {
    const response = await axios.post(`${serverURL}/api/user/favourite`, favouritesId, {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": AuthService.getAccessToken(),
        },
    });
    return response.data;
};

const updateFavourite = async (userId: string, itemId: string) => {
    const response = await axios.post(
        `${serverURL}/api/user/updateFavourite`,
        { userId: userId, itemId: itemId },
        {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": AuthService.getAccessToken(),
            },
        }
    );
    return response.data;
};

const updateUser = async (userId: string, credentials: object) => {
    const response = await axios.post(
        `${serverURL}/api/user/updateUser`,
        { id: userId, credentials: credentials },
        {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": AuthService.getAccessToken(),
            },
        }
    );
    return response.data;
};

const searchUserByItemId = async (itemId: string) => {
    const response = await axios.post(
        `${serverURL}/api/user/searchUserByItemId`,
        { id: itemId },
        {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": AuthService.getAccessToken(),
            },
        }
    );
    return response.data;
};

const UserService = {
    getFavouriteItems,
    updateFavourite,
    updateUser,
    searchUserByItemId,
};

export default UserService;
