import { types } from '../types/types';

//inicializar con la lista de todos
const initialState = {
    todos: [],
    activeTodo: null,
    loading: true
};

export const todoReducer = ( state=initialState, action) => {

    switch (action.type) {

        case types.todoLoaded:
            return {
                ...state,
                todos: [ ...action.payload],
                loading: false
            }
        
        case types.todoSetActive:
            return {
                ...state,
                activeTodo: action.payload
            }

        case types.todoClearActiveTodo:
            return {
                ...state,
                activeTodo: null
            }

        case types.todoAddNew:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ],
                loading: false
            }

        case types.todoUpdated:
            return {
                ...state,
                todos: state.todos.map(
                    t => (t.id === action.payload.id) ? action.payload : t
                ),
                loading: false
            }

        case types.todoDeleted:
            console.log("1: ")
            console.log(state)
            console.log("2: ")
            console.log(state.todos)
            console.log("3: state.activeTodo.id")
            console.log(state.activeTodo.id)
            return {
                ...state,
                todos: state.todos.filter(
                    t => ( t.id !== state.activeTodo.id)
                ),
                activeEvent: null,
                loading: false
            }
    
        default:
            return state;
    }
}