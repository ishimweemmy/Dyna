import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import categoryReducer from "./category/categorySlice";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
});
