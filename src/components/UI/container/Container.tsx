import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

export const Container = ({children}: PropsWithChildren) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    height: '100%',
  },
});
