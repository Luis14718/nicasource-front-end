import actionTypes from './menus.actionTypes';


const menusLoadStart = () => 
(
    {type: actionTypes.MENU_LOAD_START}
)
   

const menusLoadSuccess = (menus) => ({
    type: actionTypes.MENU_LOAD_SUCCESS,
    payload: menus
})

const menusLoadError = (errorMessage) => ({
    type: actionTypes.MENU_LOAD_ERROR,
    payload: errorMessage
})
export default {
 menusLoadStart,
 menusLoadSuccess,
 menusLoadError,
};