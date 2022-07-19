import actionTypes from './menus.actionTypes';
import initialStates from './menus.initialStates';

const menusReducer = (state = initialStates, { type, payload }) => {

    switch (type) {
        case actionTypes.MENU_LOAD_START:
            return {
                ...state,
                isLoading: true,
                menus: null,
                errorMessage: null,
            };

        case actionTypes.MENU_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                menus: payload,
            };
        case actionTypes.MENU_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        default:
            return state;
    }

}
export default menusReducer;