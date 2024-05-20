import {useGetListOfStocksQuery} from '../store/features/stock/stockSlice.ts';
import {useMemo} from 'react';
import {ProductInterface} from '../interface/Stock.ts';

type useHomeDataType = {
  brands: string[];
};

export const useBrand = (): useHomeDataType => {
  const {data} = useGetListOfStocksQuery('');
  const brands: string[] = useMemo(() => {
    const brandData = new Set();
    brandData.add('All');
    data?.products?.forEach((item: ProductInterface) => {
      brandData.add(item?.brand);
    });
    return [...brandData] as string[];
  }, [data]);

  return {brands};
};
