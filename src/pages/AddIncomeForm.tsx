import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTransaction } from '../services/api';

const AddIncomeForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addTransaction({
        type: 'income',
        title,
        amount: parseFloat(amount),
      });
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du revenu:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* En-tête de la page */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-teal-600">Budget</h1>
        <p className="text-gray-600">Gestion du budget</p>
      </header>

      <h2 className="text-2xl font-bold mb-4 text-teal-700">AJOUTER REVENU</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Champ pour le titre */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            TITRE
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Salaire"
            required
          />
        </div>

        {/* Champ pour le montant */}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            MONTANT
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="100,000 F CFA"
            required
          />
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="w-full bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
        >
          VALIDER
        </button>
      </form>
    </div>
  );
};

export default AddIncomeForm;