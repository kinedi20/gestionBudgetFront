import React from 'react';
import { Transaction, deleteTransaction } from '../services/api';

interface ExpenseListProps {
  expenses: Transaction[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  const handleDelete = async (id: number) => {
    try {
      await deleteTransaction(id);
      // Vous devrez implémenter une logique pour mettre à jour la liste des dépenses
      // après la suppression, par exemple en utilisant un état global ou en rechargeant les données
    } catch (error) {
      console.error('Erreur lors de la suppression de la transaction:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-yellow-500">Liste des dépenses</h2>
      <table className="w-full">
        <thead className="bg-teal-700 text-white">
          <tr>
            <th className="p-2 text-left">TITRE</th>
            <th className="p-2 text-left">MONTANT</th>
            <th className="p-2 text-left">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense?.id} className="border-b">
              <td className="p-2">{expense.title}</td>
              <td className="p-2">{expense.amount.toLocaleString()} F CFA</td>
              <td className="p-2">
                <button 
                  onClick={() => {
                    if (expense.id !== undefined) {
                      handleDelete(expense.id)
                    }
                  }}
                  
                  
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;