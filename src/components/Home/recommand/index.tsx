import React from 'react';
import {RecommendBrand} from './RecommendBrand.tsx';
import {TopHeader} from '../../shared/TopHeader.tsx';
import {CardProductList} from '../../shared/CardProductList.tsx';
import {useBrand} from '../../../hooks/useBrand.ts';
import {useProducts} from '../../../hooks/useProducts.ts';
import {useAppSelector} from '../../../hooks/reduxHooks.ts';
import {selectSearch} from '../../../store/features/stock/SearchSlice.ts';

export const Recommend = () => {
  const search = useAppSelector(selectSearch);
  const {data} = useProducts(search);
  const {brands} = useBrand();

  return (
    <>
      <TopHeader
        linkText="See All"
        to={'SearchScreen' as never}
        headingText="Recommended For You"
      />
      <RecommendBrand brands={brands} />
      <CardProductList products={data?.products} />
    </>
  );
};
