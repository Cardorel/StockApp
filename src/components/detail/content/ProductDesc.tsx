import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../../constants/COLORS.ts';

interface ProductDescProps {
  title: string;
  desc: string;
}

export const ProductDesc = ({desc, title}: ProductDescProps) => {
  return (
    <View style={styles.descContent}>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={20}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descContent: {
    marginBottom: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    color: COLOR.black_color,
    marginBottom: 5,
  },
});
