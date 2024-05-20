import {useGetProductByCategoryQuery} from '../store/features/stock/stockSlice.ts';
import {useCallback, useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {ProductInterface} from '../interface/Stock.ts';
import {useAppDispatch} from './reduxHooks.ts';
import {setProductByCategory} from '../store/features/stock/sortSlice.ts';

export const useDataCategory = (category: string) => {
  const {data} = useGetProductByCategoryQuery(category);
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    dispatch(setProductByCategory(data?.products));
  }, [data?.products, dispatch]);

  const handleSearch = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setSearch(e.nativeEvent.text);
      const products = data?.products?.filter((item: ProductInterface) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
      dispatch(setProductByCategory(products));
    },
    [data?.products, dispatch, search],
  );

  const handleSortByName = useCallback(() => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const products = data?.products
      ?.slice()
      .sort((a: ProductInterface, b: ProductInterface) =>
        sortOrder === 'asc'
          ? a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          : b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
      );
    dispatch(setProductByCategory(products));
  }, [data?.products, dispatch, sortOrder]);

  const toggleSortOrder = useCallback(
    (a: number, b: number) => {
      return sortOrder === 'asc' ? (a > b ? 1 : -1) : a < b ? 1 : -1;
    },
    [sortOrder],
  );

  const handleSortByRating = useCallback(() => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const products = data?.products
      ?.slice()
      ?.sort((a: ProductInterface, b: ProductInterface) =>
        toggleSortOrder(a.rating, b.rating),
      );
    dispatch(setProductByCategory(products));
  }, [data?.products, dispatch, sortOrder, toggleSortOrder]);

  const handleSortByPrice = useCallback(() => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const products = data?.products
      ?.slice()
      ?.sort((a: ProductInterface, b: ProductInterface) =>
        toggleSortOrder(a.price, b.price),
      );
    dispatch(setProductByCategory(products));
  }, [data?.products, dispatch, sortOrder, toggleSortOrder]);

  return {
    handleSearch,
    handleSortByName,
    handleSortByRating,
    handleSortByPrice,
    search,
  };
};
