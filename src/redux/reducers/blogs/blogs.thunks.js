import PostService from "../../../services/post.service";
import actions from './blogs.actions';


export const loadBlogsAsync = () => (dispatch) => {
    dispatch(actions.blogsLoadStart())
    PostService.getAllBlogs()
        .then(response => dispatch(actions.blogsLoadSuccess(response.data)))
        .catch(error=> dispatch(actions.blogsLoadError(error.message)))
}
