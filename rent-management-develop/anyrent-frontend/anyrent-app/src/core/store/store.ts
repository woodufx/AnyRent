import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";
import category from "./categorySlice";
import items from "./itemsSlice";
const rootReducer = combineReducers({ user: user, category: category, items: items });

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
