import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {COLOR} from '../../../constants/COLORS.ts';
import {elevation, shadow} from '../../../constants/Shadow.ts';
import {useNavigation} from '@react-navigation/native';

interface CategoryProduct {
  category: string;
}

export const CategoryProduct = ({category}: CategoryProduct) => {
  const {navigate} = useNavigation();
  return (
    <Pressable
      style={styles.content}
      onPress={() =>
        navigate(
          'Products' as never,
          {
            category,
          } as never,
        )
      }>
      <Text style={styles.categoryText}>{category}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    margin: 10,
    backgroundColor: COLOR.secondary_color,
    gap: 5,
    ...shadow,
    ...elevation,
    borderRadius: 5,
  },
  categoryText: {
    color: COLOR.white_color,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  countProduct: {
    color: COLOR.black_color,
    fontSize: 18,
  },
  countContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    justifyContent: 'flex-end',
  },
  count: {
    color: COLOR.white_color,
    fontSize: 18,
  },
});
