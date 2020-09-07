class SearchService {
  static getDrink(search) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
    )
      .then((res) => res.json())
      .then((data) => data);
  }
}

export default SearchService;
