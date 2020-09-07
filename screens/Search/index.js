import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../styles';

const {width} = Dimensions.get('window');

const drinks = [
  {
    strDrink: 'Long vodka',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
  },
  {
    strDrink: 'Long vodka',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
  },
  {
    strDrink: 'Long vodka',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
  },
  {
    strDrink: 'Long vodka',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
  },
  {
    strDrink: 'Long vodka',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
  },
];

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.PURPLE, COLORS.TURQUOISE]}
        style={styles.linearGradient}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 2}}>
        <SafeAreaView>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                style={styles.icon}
                name="angle-left"
                size={30}
                color={COLORS.WHITE}
              />
            </TouchableOpacity>
            <TextInput autoFocus style={styles.input} />
            <TouchableOpacity>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          {/* Cards */}

          <ScrollView contentContainerStyle={styles.cardContainer}>
            {drinks.map((drink, i) => (
              <View key={i} style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={{uri: drink.strDrinkThumb}}
                />
                <Text style={styles.cardText}>{drink.strDrink}</Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

Search.propTypes = {
  navigation: PropTypes.object,
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 5,
    width: width,
  },
  header: {
    // flex: 1,
    padding: 10,
    // backgroundColor: 'white',
    height: 100,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    width: width * 0.7,
    borderRadius: 20,
  },
  cancelText: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: '700',
  },
  cardContainer: {
    alignItems: 'center',
  },
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
    borderRadius: 100,
    marginRight: 30,
  },
  cardText: {
    fontSize: 30,
    fontWeight: '500',
  },
});
