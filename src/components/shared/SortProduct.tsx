import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../constants/COLORS.ts';

interface SortProductProps {
  iconName: string;
  text: string;
  onPress: () => void;
}

export const SortProduct = ({iconName, text, onPress}: SortProductProps) => {
  return (
    <Pressable style={styles.content} onPress={onPress}>
      <Icon name={iconName} color={COLOR.secondary_color} size={20} />
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    gap: 5,
  },
});
