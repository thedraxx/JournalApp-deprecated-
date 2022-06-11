import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducers';
import { uiReducer } from '../reducers/uiReducer';

//Store Necesario para trabajar con Redux
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//Recibe el estado inicial y una función que recibe el estado actual y un action ./reducers/authReducer.js y ./reducers/uiReducer.js
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);