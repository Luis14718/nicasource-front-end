import {combineReducers} from 'redux';
import postsReducer from './posts/posts.reducer';
import blogsReducer from './blogs/blogs.reducer';
import pagesReducer from './pages/pages.reducer';
import menusReducer from './menus/menus.reducer';

const rooteReducer= ()=> combineReducers({
    posts:postsReducer,
    blogs:blogsReducer,
    pages:pagesReducer,
    menus:menusReducer,
});
export default rooteReducer;