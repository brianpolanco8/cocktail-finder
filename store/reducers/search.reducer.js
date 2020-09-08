import * as ActionTypes from '../actions/types';

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload.drinks,
        isLoading: false,
      };

    case ActionTypes.SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ActionTypes.CLEAR_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.CLEAR_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [],
      };

    default:
      return {...state};
  }
};

export default search;
