import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper, expense, id;

beforeEach(() => {
    id = expenses[0].id;
    expense = expenses[0];
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        expense={expense}
        editExpense={editExpenseSpy}
        removeExpense={removeExpenseSpy}
        history={historySpy}
    />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(id, expense);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id });
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});
