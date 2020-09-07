import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../styles';

const {width} = Dimensions.get('window');

const Card = ({imageUrl, label}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{uri: imageUrl}} />
      <Text style={styles.cardText}>{label}</Text>
    </View>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  label: PropTypes.string,
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    padding: 30,

    borderRadius: 40,
    width: width * 0.9,
    marginBottom: 20,
  },
  cardImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 200,
    marginRight: 30,
  },
  cardText: {
    flex: 1,
    fontSize: 30,
    fontWeight: '500',
  },
});
