import { createSlice } from "@reduxjs/toolkit";
import { serverURL } from "../config/api.config";
import { ICategory } from "../models/category.model";
import { IItem } from "../models/item.model";
import DataService from "../services/data.service";
import { AppDispatch } from "./store";

const initialItemsList: ICategory[] = [];

const slice = createSlice({
    name: "category",
    initialState: { mainPageCategoryList: initialItemsList, burgerCategoryList: [], currentCategory: {} },
    reducers: {
        getMainPageCategoriesSuccess: (state, action) => {
            state.mainPageCategoryList = action.payload;
        },

        getBurgerCategoriesSuccess: (state, action) => {
            state.burgerCategoryList = action.payload;
        },
    },
});

export default slice.reducer;

const { getMainPageCategoriesSuccess, getBurgerCategoriesSuccess } = slice.actions;
//Actions
export const getMainPageCategories = () => async (dispatch: AppDispatch) => {
    try {
        const response: ICategory[] = await DataService.getMainPageCategoriesList();
        dispatch(getMainPageCategoriesSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};

export const getBurgerCategories = () => async (dispatch: AppDispatch) => {
    try {
        const response: ICategory[] = await DataService.getBurgerCategoriesList();
        dispatch(getBurgerCategoriesSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};
