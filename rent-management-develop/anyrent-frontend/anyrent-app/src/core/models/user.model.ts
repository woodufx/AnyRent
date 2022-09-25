import { SrvRecord } from "dns";

export interface IUser {
    id: string;
    username: string;
    email: string;
    name: string;
    surname: string;
    phoneNumber: string;
    birthDate: string;
    regDate: string;
    avatar: string;
    gender: string;
    role: string[];
    accessToken: string;
    refreshToken: string;
    favourite: string[];
    items: string[];
}
