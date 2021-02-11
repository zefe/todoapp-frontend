import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { todoAddNew, todoClearActiveTodo } from '../../actions/todos';
import { uiCloseModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root'); //our app element at index.html


export const TodoModal = () => {

    const dispatch = useDispatch();

    //Hook useForm
    const [ formTodoValues, handleTodoInputChange, resetInputsForm ] = useForm({
        name: '',
        description: ''
    });

    const { name, description } = formTodoValues;

    const { modalOpen } = useSelector(state => state.ui);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const closeModal = () => {
        dispatch( uiCloseModal() );
        resetInputsForm();
        setError(false);
        setErrorMessage('');
        //Edit
        dispatch( todoClearActiveTodo() );
    }

    const cancel = () => {
        resetInputsForm();
        setError(false)
        setErrorMessage('');
        closeModal();
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if ( name.trim().length < 2) {
            setError(true);  
            setErrorMessage("The title is required");
            return
        }

        // Save new todo
        dispatch( todoAddNew( formTodoValues ) );
            
        setError(false);  
        setErrorMessage('');
        closeModal();

    }



    return (
        
        <Modal
          isOpen={modalOpen}
          //onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="overlay"

        >
            <h4>New Task </h4>
            <form className="container" onSubmit={ handleSubmitForm }>
                <hr />
                
                <div className="form-group">
                    <label>Title </label>
                    <input 
                        type="text" 
                        //className={ `form-control ${ !titleValid && 'is-invalid' } `}
                        className={ `form-control ${ error && 'is-invalid' } `}
                        name="name"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleTodoInputChange }
                    />
                    <small style={{color:'red'}}>{errorMessage}</small>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder=""
                        rows="5"
                        name="description"
                        value={ description }
                        onChange={ handleTodoInputChange }
                    ></textarea>
                </div>
                
                <div className="custom-modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal" 
                        onClick={ cancel } >Cancel</button>

                    <button 
                        type="submit" 
                        className="btn btn-primary">Save</button>
                </div>

            </form>
        </Modal>
    )
}
