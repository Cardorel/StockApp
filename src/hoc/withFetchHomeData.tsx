import React, {ComponentType} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../constants/COLORS.ts';

interface WithFetchHomeDataProps {
  isLoading: boolean;
  hasError: boolean;
}

export const withFetchHomeData =
  <P extends WithFetchHomeDataProps>(WrappedComponent: ComponentType<P>) =>
  (props: P) => {
    if (props.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator color={COLOR.secondary_color} />
          <Text style={styles.text}>Loading data...</Text>
        </View>
      );
    } else if (props.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Something went wrong...</Text>
        </View>
      );
    }
    return <WrappedComponent {...props} />;
  };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: COLOR.secondary_color,
    marginTop: 10,
    textAlign: 'center',
  },
});
