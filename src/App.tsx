import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BudgetPage from './pages/BudgetPage';
import AddExpenseForm from './pages/AddExpenseForm';
import AddIncomeForm from './pages/AddIncomeForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BudgetPage />} />
        <Route path="/add-expense" element={<AddExpenseForm />} />
        <Route path="/add-income" element={<AddIncomeForm />} />


      </Routes>
    </Router>
  );
};

export default App;