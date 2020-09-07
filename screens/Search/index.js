import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from '../../styles';
import * as SearchActions from '../../store/actions/search.action';
import Loader from '../../components/Loader';
import axios from 'axios';
import Card from '../../components/Card';
import SearchHeader from '../../components/SearchHeader';

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
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (keyword) => {
    if (keyword.length > 2) {
      dispatch(SearchActions.searchDrink(keyword));
    } else if (keyword.length < 3) {
      dispatch(SearchActions.searchDrink(''));
    }
  };

  const clearSearch = () => {
    console.log('working');
    setSearchKeyword('');
    dispatch(SearchActions.clearSearch());
  };

  useEffect(() => {
    const {cancel, token} = axios.CancelToken.source();
    if (searchKeyword.length > 2) {
      const timeOutId = setTimeout(() => handleSearch(searchKeyword), 500);
      return () => cancel('No more queries') || clearTimeout(timeOutId);
    }
  }, [searchKeyword]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.PURPLE, COLORS.TURQUOISE]}
        style={styles.linearGradient}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 2}}>
        <SafeAreaView>
          {/* Header */}
          <SearchHeader
            clearSearch={clearSearch}
            navigation={navigation}
            setSearchKeyword={setSearchKeyword}
            searchKeyword={searchKeyword}
          />

          {/* Loader */}
          {search?.isLoading && (
            <ActivityIndicator size="large" color="#00ff00" />
          )}

          {/* Cards */}
          <ScrollView contentContainerStyle={styles.cardContainer}>
            {search?.data?.map((drink, i) => (
              <Card
                key={i}
                imageUrl={drink.strDrinkThumb}
                label={drink.strDrink}
              />
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

  cardContainer: {
    alignItems: 'center',
  },
});
