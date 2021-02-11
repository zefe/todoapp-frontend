import React from 'react';
import { ReactComponent as IconDelete } from '../../images/icon-delete.svg';

export const DeleteButton = () => {
    return (
        <div className="delete__button">
            <IconDelete/>
            <p>Delete</p>
        </div>
    )
}