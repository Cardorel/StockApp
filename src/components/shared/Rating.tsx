import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RatingProps {
  rating: number;
}

export const Rating = ({rating}: RatingProps) => {
  return (
    <View style={styles.content}>
      <Icon name="star-half-outline" size={20} color="gold" />
      <Text>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
});
