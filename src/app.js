import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 2500,
    createdAt: 70
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 10500,
    createdAt: 15
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 109500,
    createdAt: 10038
}));

store.dispatch(addExpense({
    description: 'Car Insurance',
    amount: 17159,
    createdAt: 9
}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
