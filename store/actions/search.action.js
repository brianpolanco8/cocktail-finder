import {SearchService} from '../../services';
import * as ActionTypes from './types';

export const searchDrink = (searchKeyword) => async (dispatch) => {
  dispatch({type: ActionTypes.SEARCH_REQUEST});

  try {
    let request = await SearchService.getDrink(searchKeyword);
    if (request.status === 200 || request.status === 201) {
      dispatch({
        type: ActionTypes.SEARCH_SUCCESS,
        payload: request.data,
      });
    } else {
      dispatch({
        type: ActionTypes.SEARCH_FAILURE,
        payload: request.data,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.SEARCH_FAILURE,
      payload: 'Nothing found',
    });
  }
};

export const clearSearch = (searchKeyword) => async (dispatch) => {
  dispatch({type: ActionTypes.CLEAR_SEARCH_REQUEST});

  try {
    dispatch({
      type: ActionTypes.CLEAR_SEARCH_SUCCESS,
      payload: 'CLEAR',
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.CLEAR_SEARCH_FAILURE,
      payload: 'CLEAR',
    });
  }
};
