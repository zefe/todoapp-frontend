import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { todoReducer } from "./todoReducer";
import { authReducer } from "./authReducer";




export const rootReducer = combineReducers({
    ui: uiReducer,
    tareas: todoReducer,
    auth: authReducer,
})