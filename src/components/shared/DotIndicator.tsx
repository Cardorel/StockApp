import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface DotIndicatorInterface {
  color: string;
}

export const DotIndicator = ({color}: DotIndicatorInterface) => {
  return <Icon name="ellipse" color={color} />;
};
