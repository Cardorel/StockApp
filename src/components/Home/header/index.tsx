import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Input} from '../../UI/inputs/Input.tsx';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopHomeHeader} from './TopHomeHeader.tsx';
import {
  borderInputWidth,
  borderRadius,
  COLOR,
} from '../../../constants/COLORS.ts';
import {useNavigation} from '@react-navigation/native';
import {searchProductBy} from '../../../store/features/stock/SearchSlice.ts';
import {useAppDispatch} from '../../../hooks/reduxHooks.ts';

export const HomeHeader = () => {
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <View style={styles.headerContainer}>
      <TopHomeHeader />
      <View style={styles.flexItem}>
        <View style={styles.searchContent}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={30}
            color={COLOR.secondary_color}
          />
          <Input
            onChange={e => dispatch(searchProductBy(e.nativeEvent.text))}
          />
        </View>
        <Pressable onPress={() => navigate('Search' as never)}>
          <Icon
            style={styles.filterIcon}
            name="options-outline"
            size={30}
            color={COLOR.secondary_color}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR.main_color,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  flexItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 40,
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 5,
    zIndex: 1,
  },
  filterIcon: {
    backgroundColor: COLOR.white_color,
    padding: 10,
    borderRadius,
    borderWidth: borderInputWidth,
    borderColor: COLOR.light_green,
  },
});
