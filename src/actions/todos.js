import { types } from '../types/types';
import Swal from 'sweetalert2';
import todoService from '../services/todoService';
import { prepareTodo, prepareNewTodo } from '../helpers/prepareTodos';


export const getTodos = () => {
    return async( dispatch ) => {

        try{

            const res = await todoService.getAll()
            const resData = res.data.todos;

            //format createdAt and updatedAt
            const todos = prepareTodo(resData);

            dispatch( {
                type: types.todoLoaded,
                payload: todos
            })
        }
        catch(e){
            console.log(e)
            //Swal.fire('Error', "Something went wrong", 'error');
        }

    }
}

export const todoAddNew = ( todo ) => {
    return async( dispatch ) => {
        try{

            const res = await todoService.create(todo)
            let resData = res.data.data;
            
            //format createdAt and updatedAt todo
            const newTodoFormated = prepareNewTodo(resData);
            
            dispatch( newTodo(newTodoFormated) )
        
        }
        catch(e){
            console.log(e.response)
            Swal.fire('Error', "Something went wrong", 'error');
        }
        
    }
};

const newTodo = ( todo ) => ({
    type: types.todoAddNew,
    payload: todo
});


export const todoSetActive = ( todo ) => ({
    type: types.todoSetActive,
    payload: todo
});

export const todoClearActiveTodo = () => ({
    type: types.todoClearActiveTodo
});


export const todoStartUpdate = ( todo ) => {
    return async( dispatch ) => {
        try{

            const res = await todoService.update(todo.id, todo)
            const resData = res.data.data;

            dispatch( todoUpdated(todo) )
        }
        catch(e){
            console.log(e)
            Swal.fire('Error', "Something went wrong", 'error');
        }
        
    }
};

const todoUpdated = ( todo ) =>  ({
    type: types.todoUpdated,
    payload: todo
});

export const todoStartDelete = (id) => {
    return async( dispatch, getState ) => {

        try{
            const res =  await todoService.remove(id)
            const resData = res.data;   
            console.log(resData)

            dispatch( todoDeleted() );


        }
        catch(e){
            console.log(e)
            Swal.fire('Error', "Something went wrong", 'error');
        }
        
    }
}

const todoDeleted = () => ({ 
    type: types.todoDeleted 
});
