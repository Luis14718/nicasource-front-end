import actionTypes from './blogs.actionTypes';


const blogsLoadStart = () => 
(
    {type: actionTypes.BLOG_LOAD_START}
)
   

const blogsLoadSuccess = (blogs) => ({
    type: actionTypes.BLOG_LOAD_SUCCESS,
    payload: blogs
})

const blogsLoadError = (errorMessage) => ({
    type: actionTypes.BLOG_LOAD_ERROR,
    payload: errorMessage
})
export default {
 blogsLoadStart,
 blogsLoadSuccess,
 blogsLoadError,
};