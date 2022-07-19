import PostService from "../../../services/post.service";
import actions from './posts.actions';


export const loadPostsAsync = () => (dispatch) => {
    dispatch(actions.postsLoadStart())
    PostService.getAllPosts()
        .then(response => dispatch(actions.postsLoadSuccess(response.data)))
        .catch(error=> dispatch(actions.postsLoadError(error.message)))
}
