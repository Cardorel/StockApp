import React, {ComponentType} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface WithComponentDataProps<T> {
  data: T[];
  message: string;
}

export const withComponentData =
  <P extends WithComponentDataProps<P>>(WrappedComponent: ComponentType<P>) =>
  (props: P) => {
    if (!props?.data?.length) {
      return (
        <View style={styles.container}>
          <Text>{props.message}</Text>
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
});
