import React from 'react';
import SearchProduct from '../components/search';
import {useSearchCategory} from '../hooks/useSearchCategory.ts';

export const SearchScreen = () => {
  const {search, handleSearch, filteredData, isCategoryLoading} =
    useSearchCategory();
  return (
    <SearchProduct
      search={search}
      handleSearch={handleSearch}
      filteredData={filteredData}
      isLoading={isCategoryLoading}
    />
  );
};
