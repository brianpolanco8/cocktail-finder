import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  RectButton,
} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../styles';

const {width} = Dimensions.get('window');

const Input = ({
  autoFocus,
  onChangeText,
  navigation,
  onFocus,
  placeholderTextColor,
  style,
  iconSize,
  placeholder,
  value,
  editable,
  button,
}) => {
  return (
    <View style={[styles.searchSection, style]}>
      <Icon
        style={styles.searchIcon}
        name="search"
        size={iconSize ? iconSize : 30}
        color="#000"
      />

      <TextInput
        autoFocus={autoFocus}
        style={[styles.input, placeholder ? {textAlign: 'center'} : null]}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        onFocus={onFocus}
        value={value}
        navigation={navigation}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        editable={editable}
      />
    </View>
  );
};

Input.propTypes = {
  autoFocus: PropTypes.bool,
  onChangeText: PropTypes.func,
  navigation: PropTypes.func,
  onFocus: PropTypes.func,
  placeholderTextColor: PropTypes.string,
  style: PropTypes.object,
  iconSize: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  editable: PropTypes.bool,
  button: PropTypes.bool,
};

export default Input;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    width: width * 0.9,
    borderRadius: 30,
    padding: 5,
  },
  searchIcon: {
    padding: 10,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    // paddingLeft: 0,
    // backgroundColor: '#fff',
    color: '#424242',
    alignItems: 'center',

    fontSize: 18,
  },
});
