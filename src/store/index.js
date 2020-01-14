import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterStore from './counterStore';

const store = createStore(
    counterStore,
    applyMiddleware(thunk)
);

export default store