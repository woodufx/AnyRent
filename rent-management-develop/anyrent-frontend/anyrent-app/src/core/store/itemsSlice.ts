import { createSlice } from "@reduxjs/toolkit";
import { serverURL } from "../config/api.config";
import { ICategory } from "../models/category.model";
import { IItem } from "../models/item.model";
import { IUser } from "../models/user.model";
import DataService from "../services/data.service";
import { AppDispatch } from "./store";
import { updateSuccess } from "./userSlice";

const initialItemsList: IItem[] = [];

const initialCurrentItem: IItem | null = null;

const slice = createSlice({
    name: "items",
    initialState: { itemsList: initialItemsList, popularItemsList: initialItemsList, currentItem: initialCurrentItem },
    reducers: {
        getItemsSuccess: (state, action) => {
            state.itemsList = action.payload;
        },

        getPopularItemsSuccess: (state, action) => {
            state.popularItemsList = action.payload;
        },

        getCurrentItemSuccess: (state, action) => {
            state.currentItem = action.payload;
        },

        getFilteredItemsSuccess: (state, action) => {
            state.itemsList = action.payload;
        },

        getSearchItemsSuccess: (state, action) => {
            state.itemsList = action.payload;
        }
    },
});

export default slice.reducer;

const { getItemsSuccess, getCurrentItemSuccess, getPopularItemsSuccess, getFilteredItemsSuccess, getSearchItemsSuccess } = slice.actions;
//Actions

export const getItems = () => async (dispatch: AppDispatch) => {
    try {
        const response: IItem[] = await DataService.getItemsList();
        dispatch(getItemsSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};

export const getPopularItems = () => async (dispatch: AppDispatch) => {
    try {
        const response: IItem[] = await DataService.getItemsList();
        dispatch(getPopularItemsSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};

export const getItemsByCategory = (categoryId: string) => async (dispatch: AppDispatch) => {
    try {
        const response: IItem[] = await DataService.getItemsByCategory(categoryId);
        dispatch(getItemsSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};

export const getFilteredItems = (params: string) => async (dispatch: AppDispatch) => {
    try {
        const response: IItem[] = await DataService.getFilteredItems(params);
        dispatch(getFilteredItemsSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
}

export const getSearchItems = (searchName: string) => async (dispatch: AppDispatch) => {
    try {
        const response: IItem[] = await DataService.getSearchItems(searchName);
        dispatch(getSearchItemsSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
}

export const getItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const response: IItem = await DataService.getItem(id);
        dispatch(getCurrentItemSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};

export const createItem = (userId: string, item: object) => async (dispatch: AppDispatch) => {
    try {
        const response: IUser = await DataService.createItem(userId, item);
        dispatch(updateSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};