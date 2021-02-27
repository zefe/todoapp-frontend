import { types } from "../types/types";

const initialState = {
    checking: true,
    //uid: null,
    //name: null
    error: '',
}

export const authReducer = ( state=initialState, action) => {

    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
        
        case types.errorMessage:
            return {
                ...state, error: action.payload
            }

    
        default:
            return state;
    }
}