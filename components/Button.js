import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

const Button = ({onPress, label, iconSize}) => {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.searchIcon}
        name="search"
        size={iconSize ? iconSize : 30}
        color="#000"
      />
      <TouchableOpacity style={styles.text} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.WHITE,
    width: width * 0.9,
    borderRadius: 30,
    padding: 5,
    alignItems: 'center',
  },
  searchIcon: {
    padding: 10,
    marginLeft: 30,
  },
  text: {
    marginLeft: 25,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    color: 'black',
    marginRight: 30,
    fontSize: 18,
  },
});
