import {applyMiddleware, createStore, combineReducers} from 'redux';
// import { persistReducer} from 'redux-persist';
// import {composeWithDevTools} from 'redux-devtools-extension';

import { productReducer, setProductStore } from "./products";
import {configureStore} from "@reduxjs/toolkit";
// const middlewares: any[] = [];


const reducers = combineReducers({
    product:productReducer
});

const persistConfig = {
  key: 'root',
};


export const store = configureStore({
  reducer: {
      product:productReducer
  }
});
// export type RootState = ReturnType<typeof store.getState>;
setProductStore(store)

