import actionTypes from './posts.actionTypes';


const postsLoadStart = () => 
(
    {type: actionTypes.POST_LOAD_START}
)
   

const postsLoadSuccess = (posts) => ({
    type: actionTypes.POST_LOAD_SUCCESS,
    payload: posts
})

const postsLoadError = (errorMessage) => ({
    type: actionTypes.POST_LOAD_ERROR,
    payload: errorMessage
})
export default {
 postsLoadStart,
 postsLoadSuccess,
 postsLoadError,
};