import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../styles';

const Loader = ({loading, children}) => {
  return (
    <View>
      {loading && <ActivityIndicator size="large" color={COLORS.WHITE} />}
      {children}
    </View>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
