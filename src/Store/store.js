import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "../Reducers/authReducer";

const reducers = combineReducers({
    auth: authReducer
})

// Esta linea habilita la posibilidad de implementar en Windows Varios Middleware.
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    
        reducers,
        composeEnhancers( applyMiddleware(thunk) )
        
);