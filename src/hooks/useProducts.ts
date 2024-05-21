import {useGetListOfStocksQuery} from '../store/features/stock/stockSlice.ts';
import {StockInterface} from '../interface/Stock.ts';

type useHomeDataType = {
  data: StockInterface;
  isLoading: boolean;
  isError: boolean;
};

export const useProducts = (query: string): useHomeDataType => {
  const {data, isLoading, isError} = useGetListOfStocksQuery(query);
  return {isLoading, data, isError};
};
