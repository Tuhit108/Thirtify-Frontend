import {applyMiddleware, createStore, combineReducers} from 'redux';
// import { persistReducer} from 'redux-persist';
// import {composeWithDevTools} from 'redux-devtools-extension';

import { productReducer, setProductStore } from "./products";
import {configureStore} from "@reduxjs/toolkit";
import {constantReducer, constantSetStore} from "./constant";
import {setUserStore, userReducer} from "./user";
// const middlewares: any[] = [];


// const reducers = combineReducers({
//     product:productReducer,
//
// });

const persistConfig = {
  key: 'root',
};


export const store = configureStore({
  reducer: {
      product:productReducer,
      constant: constantReducer,
      user:userReducer,
  }
});
// export type RootState = ReturnType<typeof store.getState>;
setProductStore(store)
constantSetStore(store)
setUserStore(store)

