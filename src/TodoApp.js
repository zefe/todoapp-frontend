import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';

export const TodoApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
