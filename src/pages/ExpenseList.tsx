import React from 'react';
import { Link } from 'react-router-dom';

interface Expense {
  id: number;
  title: string;
  amount: number;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
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
            <tr key={expense.id} className="border-b">
              <td className="p-2">{expense.title}</td>
              <td className="p-2">{expense.amount.toLocaleString()} F CFA</td>
              <td className="p-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  supprimer
                </button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
      {/* Bouton pour ajouter une nouvelle dépense */}
      <Link to='/add-expense'>
      <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded flex items-center">
        <span className="mr-2">+</span> AJOUTER DÉPENSE
      </button>
      </Link>
    </div>
  );
};

export default ExpenseList;
