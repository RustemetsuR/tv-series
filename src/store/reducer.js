import { GET_FETCH_INFO, GET_FETCH_AUTOCOMPLETE, CHANGE_INPUT_VALUE } from './actionTypes';

export const initialState = {
    info: '',
    autoComplete: null,
    inputValue: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FETCH_INFO:
            return {
                ...state,
                info: action.value,
                autoComplete: null,
            }
        case GET_FETCH_AUTOCOMPLETE:
            return {
                ...state,
                autoComplete: action.value,
            }
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.value,
            }
        default:
            return state;
    };
};

export default reducer;