import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../styles';

const {width, height} = Dimensions.get('window');

const Alert = () => {
  return (
    <View style={styles.bannerContainer}>
      <Icon name="exclamation" color="white" size={40} />
      <View style={styles.banner}>
        <Text style={styles.bannerText}>No results found</Text>
        <Text style={styles.bannerSubtitle}>Try another search</Text>
      </View>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
    marginTop: height / 4,
    justifyContent: 'center',
  },
  banner: {
    alignItems: 'center',
    // padding: 10,
    // backgroundColor: COLORS.WHITE,
    width: width * 0.7,
    justifyContent: 'center',
    // borderRadius: 20,
    marginTop: 20,
  },
  bannerText: {
    fontSize: 30,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    padding: 10,
    fontSize: 20,
    color: COLORS.WHITE,
  },
});
