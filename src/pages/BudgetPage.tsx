import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BudgetSummary from './BudgetSummary';
import ExpenseList from './ExpenseList';
import { fetchBudgetSummary, fetchTransactions, Transaction, BudgetSummary as BudgetSummaryType } from '../services/api';

const BudgetPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgetSummary, setBudgetSummary] = useState<BudgetSummaryType | null>(null);
  

  useEffect(() => {
    const loadData = async () => {
      try {
        const [transactionsData, summaryData] = await Promise.all([
          fetchTransactions(),
          fetchBudgetSummary()
        ]);
        setTransactions(transactionsData);
        setBudgetSummary(summaryData);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-teal-600">Budget</h1>
        <p className="text-gray-600">Gestion du budget</p>
      </header>

      {budgetSummary && <BudgetSummary {...budgetSummary} />}
      
      <ExpenseList expenses={transactions.filter(t => t.type === 'expense')} />
      
      <div className="mt-4 space-x-4">
        <Link to="/add-expense" className="bg-yellow-500 text-white px-4 py-2 rounded inline-block">
          + AJOUTER DÉPENSE
        </Link>
        <Link to="/add-income" className="bg-green-500 text-white px-4 py-2 rounded inline-block">
          + AJOUTER REVENU
        </Link>
      </div>
    </div>
  );
};

export default BudgetPage;

