import actionTypes from './blogs.actionTypes';
import initialStates from './blogs.initialStates';

const blogsReducer = (state = initialStates, { type, payload }) => {

    switch (type) {
        case actionTypes.BLOG_LOAD_START:
            return {
                ...state,
                isLoading: true,
                blogs: null,
                errorMessage: null,
            };

        case actionTypes.BLOG_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                blogs: payload,
            };
        case actionTypes.BLOG_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        default:
            return state;
    }

}
export default blogsReducer;