import React from 'react';
import {View} from 'react-native';
import {CategoryProduct} from './Category.tsx';
import {withComponentData} from '../../../hoc/withComponentData.tsx';

type Category = {
  data: string[];
};

const CategoryList = ({data}: Category) => {
  return (
    <View>
      {data?.map((category, index) => {
        return <CategoryProduct key={index} category={category} />;
      })}
    </View>
  );
};

export default withComponentData(CategoryList as any);
