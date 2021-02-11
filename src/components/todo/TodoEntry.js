import { React } from 'react';
import { useDispatch } from 'react-redux';

//import { ReactComponent as IconCheck } from '../../images/icon-uncheck-circle.svg';
import { todoSetActive } from "../../actions/todos";
import { uiOpenToggle } from "../../actions/ui";

export const TodoEntry = ({ todo }) => {

    const {name, createdAt, description, completed} = todo;

    const dispatch = useDispatch();

    const openToggle = () => {
        dispatch( uiOpenToggle() );
    }

    const handleInputChange = ({ target }) => {

        //TODO task

    }


    return (
        <div className="todo__entries-row"     onClick={() => {
            dispatch( todoSetActive(todo) )
            dispatch( openToggle )
            }
            } >
            <div className="todo__entries-item" >
                <div className="todo__check">
                    
                    <label className="label">
                        <input  
                            className="label__checkbox"
                            type="checkbox"
                            checked={ completed }
                            onChange={ handleInputChange }
                            
                        />
                        <span className="label__text">
                            <span className="label__check">
                                <i className="fa fa-check icon"></i>
                            </span>
                        </span>
                    </label>

                </div>
                <div>{name}</div>
                <div>{createdAt}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}
