import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import { persistStore, persistReducer } from "redux-persist";
import todoSlice from "./slice/todoSlice";
import shopingSlice from "./slice/shopingSlice";
import storage from "redux-persist/lib/storage";
// import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  counter: counterSlice,
  todo: todoSlice,
  shop: shopingSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
