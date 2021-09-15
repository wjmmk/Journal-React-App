import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "../Reducers/authReducer";
import { notesReducer } from "../Reducers/notesReducer";
import { registerReducer } from "../Reducers/registerReducer";

const reducers = combineReducers({
    auth: authReducer,
    register: registerReducer,
    notes: notesReducer
})

// Esta linea habilita la posibilidad de implementar en Windows Varios Middleware.
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    
        reducers,
        composeEnhancers( applyMiddleware(thunk) )
        
);