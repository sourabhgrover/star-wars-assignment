import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import planetReducer from "./planetReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const combineReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  planets: planetReducer
});

export default persistReducer(persistConfig, combineReducer);
