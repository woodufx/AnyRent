import axios from "axios";
import { serverURL } from "../config/api.config";

const register = (username: string, name: string, surname: string, email: string, password: string, gender: string, roles: string[]) => {
    return axios.post(`${serverURL}/api/auth/signup`, {
        username,
        name,
        surname,
        email,
        password,
        gender,
        roles,
    });
};

const loginUser = async (username: string, password: string) => {
    const response = await axios.post(
        `${serverURL}/api/auth/signin`,
        {
            username,
            password,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
};

const loginGoogle = async (credential: string) => {
    console.log(credential);

    const response = await axios.post(
        `${serverURL}/api/auth/google`,
        {
            credential,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user")!);
};

const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user && user.accessToken) {
        return user.accessToken;
    } else {
        return {};
    }
};

const changePassword = async (id: string, oldPassword: string, newPassword: string) => {
    const response = await axios.post(
        `${serverURL}/api/auth/change-password`,
        {
            id,
            oldPassword,
            newPassword,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return response.data;
};

const AuthService = {
    register,
    loginUser,
    logout,
    getCurrentUser,
    getAccessToken,
    loginGoogle,
    changePassword,
};

export default AuthService;
