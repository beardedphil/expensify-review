import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    return (
        <div>
            <h3>Viewing {props.expenseCount} expense{props.expenseCount === 1 ? '' : 's'} totalling ${props.expensesTotal}</h3>
        </div>
    );
}

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: expenses.length,
        expensesTotal: selectExpensesTotal(expenses) / 100
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
