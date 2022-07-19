import PostService from "../../../services/post.service";
import actions from './pages.actions';


export const loadPagesAsync = () => (dispatch) => {
    dispatch(actions.pagesLoadStart())
    PostService.getAllPages()
        .then(response => dispatch(actions.pagesLoadSuccess(response.data)))
        .catch(error=> dispatch(actions.pagesLoadError(error.message)))
}
