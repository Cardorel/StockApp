import {useGetListOfStocksQuery} from '../store/features/stock/stockSlice.ts';
import {StockInterface} from '../interface/Stock.ts';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

type useHomeDataType = {
  data: StockInterface;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export const useProducts = (query: string): useHomeDataType => {
  const {data, isLoading, error} = useGetListOfStocksQuery(query);
  return {error, isLoading, data};
};
