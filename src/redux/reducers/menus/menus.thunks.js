import PostService from "../../../services/post.service";
import actions from './menus.actions';


export const loadMenusAsync = () => (dispatch) => {
    dispatch(actions.menusLoadStart())
    PostService.getAllMenus()
        .then(response => dispatch(actions.menusLoadSuccess(response.data)))
        .catch(error=> dispatch(actions.menusLoadError(error.message)))
}
