import React from 'react';
import BudgetSummary from '../pages/BudgetSummary';
import ExpenseList from '../pages/ExpenseList';
import { Link } from 'react-router-dom';

const BudgetPage: React.FC = () => {
  // Les données pourraient venir d'un état global ou d'une API dans une application réelle
  const budgetData = {
    budget: 120000,
    expenses: 100000,
    balance: 20000
  };

  const expenses = [
    { id: 1, title: 'Nourriture', amount: 40000 },
    { id: 2, title: 'Loyer', amount: 30000 },
    { id: 3, title: 'Transport', amount: 10000 },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* En-tête de la page */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-teal-600">Budget</h1>
        <p className="text-gray-600">Gestion du budget</p>
      </header>

      {/* Composant de résumé du budget */}
      <BudgetSummary {...budgetData} />

      {/* Composant de liste des dépenses */}
      <ExpenseList expenses={expenses} />

      <div className="mt-4 space-x-4">
        {/* <Link to="/add-expense" className="bg-yellow-500 text-white px-4 py-2 rounded inline-block">
          + AJOUTER DÉPENSE
        </Link> */}
        <Link to="/add-income" className="bg-green-500 text-white px-4 py-2 rounded inline-block">
          + AJOUTER REVENU
        </Link>
      </div>
    </div>
  );
};

export default BudgetPage;