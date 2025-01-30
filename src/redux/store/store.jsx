import { configureStore } from "@reduxjs/toolkit";
import Category from "../reducers/category";
import Author from "../reducers/author";
import Search from "../reducers/search";

export const store = configureStore({
  reducer: {
    Category,
    Author,
    Search,
  },
});

export default store;
