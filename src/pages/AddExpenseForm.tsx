import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExpenseForm: React.FC = () => {
  // États pour stocker les valeurs du formulaire
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  
  // Hook pour la navigation
  const navigate = useNavigate();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour sauvegarder la dépense
    console.log('Dépense ajoutée:', { title, amount });
    // Rediriger vers la page principale après l'ajout
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      {/* En-tête de la page */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-teal-600">Budget</h1>
        <p className="text-gray-600">Gestion du budget</p>
      </header>

      <h2 className="text-2xl font-bold mb-4 text-teal-700">AJOUTER DEPENSE</h2>

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
            placeholder="0 F CFA"
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

export default AddExpenseForm;