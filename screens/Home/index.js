import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../styles';
import Input from '../../components/Input';

const {width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.PURPLE, COLORS.TURQUOISE]}
        style={styles.linearGradient}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 2}}>
        <View style={styles.logoContainer}>
          {/* IMAGE */}
          <Image
            style={styles.image}
            source={require('../../assets/images/cocktail-finder.png')}
          />

          {/* TEXT */}
          <View style={styles.textContainer}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Cocktail</Text>
            <Text style={styles.text}>Finder</Text>
          </View>
        </View>

        {/* BUTTON */}
        <Input
          placeholderTextColor={'black'}
          onFocus={() => navigation.navigate('Search')}
          placeholder="Search your favorite cocktail"
        />
      </LinearGradient>
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: width,
  },
  logoContainer: {
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    width: width * 0.9,
  },
  buttonText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 40,
  },
});
