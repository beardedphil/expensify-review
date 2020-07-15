import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />)
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={23.45} />)
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={94.34} />);
    expect(wrapper).toMatchSnapshot();
});
