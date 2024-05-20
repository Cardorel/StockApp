import {useMemo, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {useCategories} from './useCategories.ts';

export const useSearchCategory = () => {
  const {data, isCategoryLoading} = useCategories();
  const [search, setSearch] = useState('');

  const handleSearch = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(e.nativeEvent.text);
  };

  const filteredData = useMemo(
    () =>
      data?.filter((item: string) => {
        return item.toLowerCase().includes(search.toLowerCase());
      }),
    [data, search],
  );

  return {filteredData, search, handleSearch, isCategoryLoading};
};
