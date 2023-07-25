import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
} from "redux-persist"
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./rootReducer";

const rootReducer = createRootReducer();
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer, composeWithDevTools(),
);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export { store };
