import { Container } from 'react-bootstrap';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { ExpensesItems } from './components/index';
import { ExpenseItemForm } from './components/index';
import { Expense } from './models/expenses';
import { useState } from 'react';

const App = () => {

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const saveExpenseHandler = (expenseData: Expense) => {
    setExpenses((expenses => [...expenses, expenseData]))
  };

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xs"
    >
      <Container>
        <ExpenseItemForm addExpanseDataHandler={saveExpenseHandler} />
        <ExpensesItems expensesItems={expenses} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
