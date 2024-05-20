import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {
  borderInputWidth,
  borderRadius,
  COLOR,
} from '../../../constants/COLORS.ts';
import Icon from 'react-native-vector-icons/Ionicons';

interface InputSearch {
  placeholder?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  value?: string;
}

export const Input = ({value, onChange, placeholder}: InputSearch) => (
  <View style={styles.searchContent}>
    <Icon
      style={styles.searchIcon}
      name="search"
      size={30}
      color={COLOR.secondary_color}
    />
    <TextInput
      style={styles.input}
      onChange={onChange}
      placeholder={placeholder}
      keyboardType="default"
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingLeft: 40,
    borderWidth: borderInputWidth,
    borderColor: COLOR.light_green,
    borderRadius,
    backgroundColor: '#fff',
    flex: 1,
  },
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 5,
    zIndex: 1,
  },
});
