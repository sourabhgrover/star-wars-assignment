import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const combineReducer = combineReducers({
  form: formReducer,
  auth: authReducer
});

export default persistReducer(persistConfig, combineReducer);
