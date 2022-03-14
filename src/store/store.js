import { combineReducers, createStore } from 'redux';

const basicState = 1;

function reducer(state = basicState, action) {

}

const store = createStore(combineReducers({ reducer }))