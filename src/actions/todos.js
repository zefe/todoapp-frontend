import { types } from '../types/types';
import TodoService from '../services/todoService';
import Swal from 'sweetalert2';
import todoService from '../services/todoService';


export const getTodos = () => {
    return async( dispatch ) => {

        try{

            const res = await todoService.getAll()
            let resData = res.data.data;

            dispatch( {
                type: types.todoLoaded,
                payload: resData
            })
        }
        catch(e){
            console.log(e)
            Swal.fire('Error', "Something went wrong", 'error');
        }

    }
}

export const todoAddNew = ( todo ) => {
    return async( dispatch ) => {
        try{

            const res = await todoService.create(todo)
            let resData = res.data.data;

            dispatch( newTodo({
                id: resData.id,
                name: resData.name,
                description: resData.description,
                createdAt: resData.createdAt,
                updatedAt: resData.updatedAt
            }) )
        }
        catch(e){
            console.log(e)
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
