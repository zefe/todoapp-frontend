import React from 'react';
import { ReactComponent as IconPlus } from '../../assets/icons/icon-circle-plus.svg';

export const IconButton = ({ openModal }) => {
    return (
        <div className="add__button" onClick={ openModal }>
            <IconPlus/>
            <span>Add Task</span>
        </div>
    )
}
