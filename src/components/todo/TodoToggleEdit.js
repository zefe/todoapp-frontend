import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { uiCloseToggle } from '../../actions/ui';
import { todoStartDelete, todoStartUpdate } from '../../actions/todos';


const initTodo = {
    id: null,
    name: '',
    description: '',
    createdAt: '',
    completed: false,
    updatedAt: ''
}


const options = [
    {
        id: 1,
        label: "Status: Completed",
        value: true,
    },
    {
        id: 2,
        label: "Status: Pending ",
        value: false,
    }
  ];

export const TodoToggleEdit = () => {

    const dispatch = useDispatch();
    
    const { activeTodo } = useSelector(state => state.tareas);

    const [formValues, setFormValues] = useState( initTodo );

    const { id, name, description, createdAt, completed, updatedAt } = formValues;

    useEffect(() => {

        if( activeTodo ) {
            setFormValues(activeTodo);
        } else {
            setFormValues(initTodo)
        }

        
    }, [activeTodo, setFormValues])

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });

    }

    const handleSubmitFormEdit = (e) => {
        e.preventDefault();

        if(formValues.completed === 'true'){
            formValues.completed = true;
        }
        if(formValues.completed === 'false'){
            formValues.completed = false;
        }
        //Update todo
        dispatch( todoStartUpdate(formValues) );
        closeToggle();
    }

    const handleDelete = () => {

        console.log("activeTodo")
        console.log(activeTodo)
    
        dispatch( todoStartDelete(activeTodo.id) );
        closeToggle();
    }

    const closeToggle = () => {
        dispatch( uiCloseToggle() );
        setFormValues(initTodo);
    }

    const formatUpdatedAt = moment( updatedAt).calendar()

    return (
        <div className="toggle__main">
            <div className="toggle__header">
                <button type="button" className="close"  aria-label="Close" onClick={ closeToggle }>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="toggle__body">
                <form className="container" onSubmit={ handleSubmitFormEdit }>
                    <div className="form-group">
                        <h3>{name}</h3>
                    </div>
                    
                    <div className="form-group">
                        <select 
                            className="form-control"
                            id="completed"  
                            value={ completed }
                            onChange={ handleInputChange }
                            name="completed"
                            >
                            {options.map((option) => (
                                <option key={option.id} value={option.value}>{option.label}</option>
                            ))}

                        </select>
                    </div>

                    <div className="form-group">
                        <p>CreatedAt</p>
                        <span>{createdAt}</span>
                    </div>
                    <div className="form-group">
                        <p>Description</p>
                        <span>{description}</span>
                    </div>

                    <div className="form-group">
                        <span>Updated {formatUpdatedAt},<br/>
                            by Peter Smith
                        </span>
                    </div>

                    <div className="toggle__footer">
                        <button type="submit" className="btn custom-btn-primary" data-dismiss="modal"><i className="fa fa-pencil"></i> Edit</button>
                        <button type="button" className="btn custom-btn-primary" onClick={ handleDelete }><i className="fa fa-trash"></i> Delete</button>
                    </div>

                </form>   
            </div>

         
        </div>
    )
}
