import * as Types from './types';

export const initialState = {
    isLoading: false,
    error: null,
    data: null,
};

const TodoReducer = (state=initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Types.GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case Types.GET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
                error: null,
            };
        case Types.GET_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
                data: null,
            };
        default:
            return state;
    }
};

export default TodoReducer;