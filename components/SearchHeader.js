import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../styles';
import Input from './Input';

const {width} = Dimensions.get('window');

const SearchHeader = ({
  navigation,
  searchKeyword,
  clearSearch,
  setSearchKeyword,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={styles.icon}
          name="angle-left"
          size={40}
          color={COLORS.WHITE}
        />
      </TouchableOpacity>
      <Input
        autoFocus
        style={styles.input}
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        iconSize={20}
      />
      {/* <TextInput
        autoFocus
        style={styles.input}
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
      /> */}
      <TouchableOpacity onPress={() => clearSearch()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

SearchHeader.propTypes = {
  navigation: PropTypes.object,
  searchKeyword: PropTypes.string,
  clearSearch: PropTypes.func,
  setSearchKeyword: PropTypes.func,
};

export default SearchHeader;

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // backgroundColor: 'white',
    padding: 10,
    height: 100,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 20,
    backgroundColor: COLORS.WHITE,
    width: width * 0.7,
    borderRadius: 20,
  },
  cancelText: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: '700',
  },
});
