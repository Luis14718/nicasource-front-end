import actionTypes from './pages.actionTypes';
import initialStates from './pages.initialStates';

const pagesReducer = (state = initialStates, { type, payload }) => {

    switch (type) {
        case actionTypes.PAGE_LOAD_START:
            return {
                ...state,
                isLoading: true,
                pages: null,
                errorMessage: null,
            };

        case actionTypes.PAGE_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pages: payload,
            };
        case actionTypes.PAGE_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        default:
            return state;
    }

}
export default pagesReducer;