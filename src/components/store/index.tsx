import React from 'react';
import {StoreList} from './StoreList.tsx';
import {StoreResume} from './StoreResume.tsx';
import {ScrollView} from 'react-native';
import {CartToAddInterface} from '../../interface/CartToAdd.ts';
import {withComponentData} from '../../hoc/withComponentData.tsx';

type StoreProductProps = {
  data: CartToAddInterface[];
};

const StoreProduct = ({data}: StoreProductProps) => {
  return (
    <>
      <ScrollView>
        <StoreList data={data} />
      </ScrollView>
      <StoreResume />
    </>
  );
};

export default withComponentData(StoreProduct as any);
