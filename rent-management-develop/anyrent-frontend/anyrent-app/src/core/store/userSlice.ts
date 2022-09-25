import { createSlice } from "@reduxjs/toolkit";
import { serverURL } from "../config/api.config";
import { IItem } from "../models/item.model";
import { IUser } from "../models/user.model";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { AppDispatch } from "./store";

const initialUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;

const slice = createSlice({
    name: "user",
    initialState: { user: initialUser, error: null, enableToEdit: true },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },

        loginError: (state, action) => {
            state.error = action.payload;
        },

        logoutSuccess: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },

        updateSuccess: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },

        editHandler: (state) => {
            state.enableToEdit = !state.enableToEdit;
        },
    },
});

export default slice.reducer;

export const { loginSuccess, loginError, logoutSuccess, updateSuccess, editHandler } = slice.actions;
//Actions
export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response: IUser = await AuthService.loginUser(username, password);
        dispatch(loginSuccess(response));
    } catch (e) {
        dispatch(loginError((e as Error).message));
        console.log((e as Error).message);
    }
};

export const googleLogin = (credential: string) => async (dispatch: AppDispatch) => {
    try {
        const response: any = await AuthService.loginGoogle(credential);
        dispatch(loginSuccess(response));
    } catch (e) {
        dispatch(loginError((e as Error).message));
        console.log((e as Error).message);
    }
};

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(logoutSuccess());
    } catch (err) {
        console.log(err);
    }
};

export const editHandle = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(editHandler());
    } catch (err) {
        console.log(err);
    }
};

export const updateFavourite = (userId: string, itemId: string) => async (dispatch: AppDispatch) => {
    try {
        const response: IItem = await UserService.updateFavourite(userId, itemId);
        dispatch(updateSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};

export const updateUser = (userId: string, credentials: object) => async (dispatch: AppDispatch) => {
    try {
        const response: IUser = await UserService.updateUser(userId, credentials);
        dispatch(updateSuccess(response));
    } catch (e) {
        console.log((e as Error).message);
    }
};
