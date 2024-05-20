import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../index.ts';

type InitialStateType = {
  search: string;
};

const initialState: InitialStateType = {
  search: 'All',
};

export const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    searchProductBy: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const selectSearch = (state: RootState) => state.search.search;

export const {searchProductBy} = searchSlice.actions;
