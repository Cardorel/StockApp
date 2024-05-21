import {useGetListOfStocksQuery} from '../store/features/stock/stockSlice.ts';
import {ProductInterface} from '../interface/Stock.ts';
import {useMemo} from 'react';

type useHomeDataType = {
  data: ProductInterface[];
  isLoading: boolean;
  isError: boolean;
};

export const useProducts = (query: string): useHomeDataType => {
  const {data, isLoading, isError} = useGetListOfStocksQuery('');
  const searchData = useMemo(
    () =>
      data?.products.filter((product: ProductInterface) =>
        query.toLowerCase() === 'all'
          ? product
          : product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase()),
      ),
    [data, query],
  );
  return {isLoading, data: searchData, isError};
};
