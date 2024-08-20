import React from 'react';

interface BudgetSummaryProps {
  remainingBudget?: number;
  totalExpenses?: number;
  totalIncome?: number;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ remainingBudget = 0,totalExpenses = 0, totalIncome = 0 }) => {
  // Fonction pour formater les montants en CFA
  const formatCFA = (amount: number | undefined) => {
    if (amount === undefined) return '0 CFA';
    return `${amount.toLocaleString()} CFA`;
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Carte du budget total */}
      <div className="bg-teal-700 text-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Budget</h2>
        <p className="text-2xl font-bold">{formatCFA(totalIncome)}</p>
      </div>

      {/* Carte des dépenses totales */}
      <div className="bg-teal-700 text-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Dépenses</h2>
        <p className="text-2xl font-bold">{formatCFA(totalExpenses )}</p>
      </div>

      {/* Carte du solde */}
      <div className="bg-teal-700 text-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Solde</h2>
        <p className="text-2xl font-bold">{formatCFA(remainingBudget)}</p>
      </div>
    </div>
  );
};

export default BudgetSummary;