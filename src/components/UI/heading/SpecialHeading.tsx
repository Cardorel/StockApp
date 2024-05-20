import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface SpecialHeadingProps {
  text: string;
}

export const SpecialHeading = ({text}: SpecialHeadingProps) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
