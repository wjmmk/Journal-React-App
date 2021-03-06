import {types} from '../Types/type';

const initialState = {
    loading: false,
    msgError: null
}

export const registerReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.registerError:
            
            return {
                ...state,
                msgError: action.payload
            };
        
        case types.removeError:
            
            return {
                ...state,
                 msgError: null
            };

        case types.uiStartLoading:

            return {
                ...state,
                loading: true
            }
            
        case types.uiFinishLoading:

            return {
                ...state,
                loading: false
            }
    
        default:

            return state;
    }
}