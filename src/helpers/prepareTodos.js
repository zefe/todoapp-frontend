import moment from 'moment';

export const prepareTodo = ( todos=[] ) => {
    return todos.map(
        (todo) => ({
            ...todo,
            createdAt: moment( todo.createdAt ).format('DD/MMM/YYYY'),
            updatedAt: moment( todo.updatedAt).format('DD/MMM/YYYY')
        })
    )
}

export const prepareNewTodo = ( newtodo ) => {  
    return {
            ...newtodo,
            createdAt: moment( newtodo.createdAt ).format('DD/MMM/YYYY'),
            updatedAt: moment( newtodo.updatedAt).format('DD/MMM/YYYY')
        }
}