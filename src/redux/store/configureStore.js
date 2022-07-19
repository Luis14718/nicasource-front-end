import { applyMiddleware,createStore,compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";


const configureStore = () =>
{
    const  middlewares= [thunk];
    const composerEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSER_ || compose;
    const enhancers= composerEnhancers(applyMiddleware(...middlewares));
    const store = createStore(rootReducer(), enhancers);
    return store;
}
export default configureStore;