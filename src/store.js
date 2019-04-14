import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers';
import {initialState} from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk)

export default createStore(rootReducer, initialState, middleware);