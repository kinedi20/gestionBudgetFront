import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BudgetSummary from "./BudgetSummary";
import ExpenseList from "./ExpenseList";
import {
  fetchBudgetSummary,
  fetchTransactions,
  Transaction,
  BudgetSummary as BudgetSummaryType,
} from "../services/api";

const BudgetPage: React.FC = () => {
  const [expenses, setExpenses] = useState<Transaction[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgetSummary, setBudgetSummary] = useState<BudgetSummaryType | null>(
    null
  );

  //fonction pour rafraichir données

  const loadData = async () => {
    try {
      const [transactionsData, summaryData] = await Promise.all([
        fetchTransactions(),
        fetchBudgetSummary(),
      ]);
      setExpenses(
        transactionsData.filter((transaction) => transaction.type === "expense")
      );

      setTransactions(transactionsData);
      setBudgetSummary(summaryData);
      console.log("budgetSummary", budgetSummary);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mx-auto p-4 ">
      <div className="w-full flex justify-center">
        <header className="mb-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-teal-600 text-center">
            Budget
          </h1>
          <p className="text-gray-600 text-center">Gestion du budget</p>
        </header>
      </div>

      {budgetSummary ? (
        <BudgetSummary {...budgetSummary} />
      ) : (
        <p>Chargement...</p>
      )}

      <ExpenseList expenses={expenses} onExpensesUpdate={loadData} />

      <div className="mt-4 space-x-4">
        <Link
          to="/add-expense"
          className="bg-yellow-500 text-white px-4 py-2 rounded inline-block"
        >
          + AJOUTER DÉPENSE
        </Link>
        <Link
          to="/add-income"
          className="bg-green-500 text-white px-4 py-2 rounded inline-block"
        >
          + AJOUTER REVENU
        </Link>
      </div>
    </div>
  );
};

export default BudgetPage;
