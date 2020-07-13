import { createStore, combineReducers } from 'redux';
import { addExpense, editExpense, removeExpense } from '../actions/expenses';
import { sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses';
import store from '../store/configureStore';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100000,
    createdAt: -21000
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: -1000
}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('ffe'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(1250));