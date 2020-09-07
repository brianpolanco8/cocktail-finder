import * as ActionTypes from '../actions/types';

const initialState = {
  searchKeyword: '',
  data: [],
  error: null,
  isLoading: false,
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case ActionTypes.USER_SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return {...state};
  }
};

export default session;
