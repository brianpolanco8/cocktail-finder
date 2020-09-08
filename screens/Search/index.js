import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from '../../styles';
import * as SearchActions from '../../store/actions/search.action';
import axios from 'axios';
import Card from '../../components/Card';
import SearchHeader from '../../components/SearchHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const Search = ({navigation}) => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searched, setSearched] = useState(false);

  console.log('length', search?.data?.length);

  const handleSearch = (keyword) => {
    setSearched(true);
    if (keyword.length > 2) {
      dispatch(SearchActions.searchDrink(keyword));
    } else if (keyword.length < 3) {
      dispatch(SearchActions.searchDrink(''));
    }
  };

  const clearSearch = () => {
    setSearchKeyword('');
    setSearched(false);
    dispatch(SearchActions.clearSearch());
  };

  useEffect(() => {
    const {cancel} = axios.CancelToken.source();
    if (searchKeyword.trim().length > 2) {
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
            <ActivityIndicator size="large" color={COLORS.WHITE} />
          )}

          {searched && search?.data?.length === undefined && (
            <View style={styles.bannerContainer}>
              <Icon name="exclamation" color="white" size={40} />
              <View style={styles.banner}>
                <Text style={styles.bannerText}>No results found</Text>
              </View>
            </View>
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
    width: width,
  },
  cardContainer: {
    alignItems: 'center',
  },
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
  },
});
