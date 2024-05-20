import React from 'react';
import {StyleSheet, View} from 'react-native';
import type {PropsWithChildren} from 'react';

export const Container = ({children}: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
