import { React } from 'react';
import { useDispatch } from 'react-redux';

import { uiOpenModal } from "../../actions/ui";

import { IconButton } from '../Buttons/AddButton';
import { TodoEntry } from './TodoEntry';

export const TodoEntries = ({ todos }) => {

    const dispatch = useDispatch();


    const openModal = (e) => {
        console.log('Abrir modal')
        dispatch( uiOpenModal() );
    }




    return (
        <div className="entries__container">
            
            <div className="entries-title ">
                <h1>My Tasks</h1>
            </div>

            <div className="entries__container-table">
                <div className="table-options">
                    <div className="options__subtitle">
                        <h3>Tasks</h3>
                        
                    </div>
                    <div className="table__actions">
                            <div className="table__actions-filter">
                                <input type="date"></input>
                            </div>
                            <span>|</span>
                            <div className="table__actions-new">
                                <IconButton
                                openModal={ openModal }
                                />
                            </div>
                    </div>
                </div>
                <div className="table__head-row">
                    <span></span>
                    <span>Title</span>
                    <span>Created</span>
                    <span>Description</span>
                </div>
                <div className="todo__entries">
                    {
                        todos.map( entry => (
                            <TodoEntry 
                                key={ entry.id }
                                todo={ entry }
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
