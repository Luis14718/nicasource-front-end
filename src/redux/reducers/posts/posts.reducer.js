import actionTypes from './posts.actionTypes';
import initialStates from './post.initialStates';

const postReducer = (state = initialStates, { type, payload }) => {

    switch (type) {
        case actionTypes.POST_LOAD_START:
            return {
                ...state,
                isLoading: true,
                posts: null,
                errorMessage: null,
            };

        case actionTypes.POST_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: payload,
            };
        case actionTypes.POST_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        default:
            return state;
    }

}
export default postReducer;