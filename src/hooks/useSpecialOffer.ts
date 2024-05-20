import {useGetListOfStocksQuery} from '../store/features/stock/stockSlice.ts';
import {useMemo} from 'react';
import {ProductInterface} from '../interface/Stock.ts';

export const useSpecialOffer = (query: string) => {
  const {data, isLoading} = useGetListOfStocksQuery(query);
  const specialOfferData = useMemo(
    () => data?.products.slice(0, 5),
    [data],
  ) as ProductInterface[];
  return {specialOfferData, isLoadingSpecialOffer: isLoading};
};
