import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { todoReducer } from "./todoReducer";



export const rootReducer = combineReducers({
    ui: uiReducer,
    tareas: todoReducer,
})