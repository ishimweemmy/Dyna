import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import categoryReducer from "./category/categorySlice";
import manufacturerReducer from "./manufacturer/manufacturerSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
  manufacturers: manufacturerReducer,
});
