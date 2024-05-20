import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {stockSlice} from './features/stock/stockSlice.ts';
import {searchSlice} from './features/stock/SearchSlice.ts';
import {sortSlice} from './features/stock/sortSlice.ts';
import { cartSlice } from "./features/stock/cartSlice.ts";

const rootReducer = combineReducers({
  [stockSlice.reducerPath]: stockSlice.reducer,
  search: searchSlice.reducer,
  products: sortSlice.reducer,
  itemToCart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(stockSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
