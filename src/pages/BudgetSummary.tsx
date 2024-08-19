import React from 'react';

interface BudgetSummaryProps {
  budget: number;
  expenses: number;
  balance: number;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ budget, expenses, balance }) => {
  // Fonction pour formater les montants en CFA
  const formatCFA = (amount: number) => `${amount.toLocaleString()} CFA`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Carte du budget total */}
      <div className="bg-teal-700 text-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Budget</h2>
        <p className="text-2xl font-bold">{formatCFA(budget)}</p>
      </div>

      {/* Carte des dépenses totales */}
      <div className="bg-teal-700 text-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Dépenses</h2>
        <p className="text-2xl font-bold">{formatCFA(expenses)}</p>
      </div>

      {/* Carte du solde */}
      <div className="bg-teal-700 text-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Solde</h2>
        <p className="text-2xl font-bold">{formatCFA(balance)}</p>
      </div>
    </div>
  );
};

export default BudgetSummary;