import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodos } from '../../actions/todos';
import { TodoEntries } from './TodoEntries';
import { TodoModal } from './TodoModal';
import { TodoToggleEdit } from './TodoToggleEdit';

export const TodoScreen = () => {

    const dispatch = useDispatch();
    
    const { todos } = useSelector(state => state.tareas);
    const { toggleOpen } = useSelector(state => state.ui);


    useEffect(() => {

        dispatch( getTodos() );

    }, [dispatch])

    return (
        <div className="todo__container" >
            
            <TodoEntries 
                todos={ todos }
            />

            <TodoModal />

            { 
                toggleOpen && <TodoToggleEdit />
            }
        </div>
    )
}
