import {TIME_TABLE, TIME_TABLE_LOADING, CLEAR_CURRENT_TIME_TABLE} from './types';

export const getTimeTable = (timeTable) => dispatch => {
    dispatch({
        type: TIME_TABLE,
        data: timeTable,
    });
}

export const setTimeTableloading = () => dispatch => {
    dispatch({
        type: TIME_TABLE_LOADING,
    });
}

export const clearTimeTable = () => dispatch => {
    dispatch({
        type: CLEAR_CURRENT_TIME_TABLE,
    });
}