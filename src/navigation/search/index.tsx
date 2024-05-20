import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '../../screens/SearchScreen.tsx';
import {ProductScreen} from '../../screens/ProductScreen.tsx';

const SearchStack = createNativeStackNavigator();

export const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="Products"
        component={ProductScreen}
        options={({route}) => ({
          title: (route?.params as {category: string})?.category.toUpperCase(),
        })}
      />
    </SearchStack.Navigator>
  );
};
