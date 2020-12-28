import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from './reducers/rootReducer'

export default function configureStore(initialState = {
        todo: {
            todos: [], 
            isLoadingData: false
        }, 
        navigation: {
            openModal: false
        }
    }) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}
