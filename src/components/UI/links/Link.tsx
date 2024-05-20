import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {COLOR} from '../../../constants/COLORS.ts';
import {useNavigation} from '@react-navigation/native';

interface LinkProps {
  to: never;
  text: string;
}

export const Link = ({to, text}: LinkProps) => {
  const {navigate} = useNavigation();
  return (
    <Pressable onPress={() => navigate(to)}>
      <Text style={styles.link}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  link: {
    color: COLOR.secondary_color,
  },
});
