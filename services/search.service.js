import axios from 'axios';

class SearchService {
  static getDrink(search) {
    return axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
    );
  }
}

export default SearchService;
