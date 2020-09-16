import { GET_FETCH_INFO, GET_FETCH_AUTOCOMPLETE, CHANGE_INPUT_VALUE } from './actionTypes';

export const getInfo = value => {
    return { type: GET_FETCH_INFO, value }
}

export const getAutoComplete = value => {
    return { type: GET_FETCH_AUTOCOMPLETE, value }
}

export const inputValueChanged = value => {
    return { type: CHANGE_INPUT_VALUE, value }
}
