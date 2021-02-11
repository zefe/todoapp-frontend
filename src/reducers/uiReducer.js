import { types } from '../types/types';

const initialState = {
    modalOpen: false,
    toggleOpen: false
};

export const uiReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
            
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }

        case types.uiOpenToggle:
            return {
                ...state,
                toggleOpen: true,
            }
        
        case types.uiCloseToggle:
            return {
                ...state,
                toggleOpen: false
            }

    
        default:
            return state;
    }
}