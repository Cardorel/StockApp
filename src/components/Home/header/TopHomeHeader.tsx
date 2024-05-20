import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {borderRadius, COLOR} from '../../../constants/COLORS.ts';
import {useNavigation} from '@react-navigation/native';
import {elevation, shadow} from '../../../constants/Shadow.ts';

export const TopHomeHeader = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />
      <View style={styles.content}>
        <Pressable
          style={styles.storeContent}
          onPress={() => navigate('Store' as never)}>
          <Icon
            style={styles.iconContent}
            name="bag-outline"
            size={25}
            color={COLOR.white_color}
          />
          <Icon
            style={styles.count}
            name="radio-button-on-outline"
            size={10}
            color={'red'}
          />
        </Pressable>
        <Icon
          style={styles.iconContent}
          name="notifications-outline"
          size={25}
          color={COLOR.white_color}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 5,
  },
  iconContent: {
    padding: 10,
    backgroundColor: COLOR.secondary_color,
    borderRadius: 10,
  },
  storeContent: {
    position: 'relative',
  },
  count: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    ...shadow,
    ...elevation,
    borderRadius,
  },
});
