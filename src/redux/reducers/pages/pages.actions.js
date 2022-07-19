import actionTypes from './pages.actionTypes';


const pagesLoadStart = () => 
(
    {type: actionTypes.PAGE_LOAD_START}
)
   

const pagesLoadSuccess = (pages) => ({
    type: actionTypes.PAGE_LOAD_SUCCESS,
    payload: pages
})

const pagesLoadError = (errorMessage) => ({
    type: actionTypes.PAGE_LOAD_ERROR,
    payload: errorMessage
})
export default {
 pagesLoadStart,
 pagesLoadSuccess,
 pagesLoadError,
};