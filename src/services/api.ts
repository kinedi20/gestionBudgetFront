import axios from 'axios';

const url = 'http://localhost:3000'; 

const api = axios.create({
  baseURL: url,
});

export interface Transaction {
  id?: number;
//   type?: 'income' | 'expense';
type?: string;
  title: string;
  amount: number;
}

export interface BudgetSummary {
  budget: number;
  expenses: number;
  balance: number;
}

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await api.get<Transaction[]>('/transactions');
  return response.data;
};

export const addTransaction = async (transaction: Omit<Transaction, 'id'>): Promise<Transaction> => {
  const response = await api.post<Transaction>('/transactions', transaction);
  return response.data;
};

export const deleteTransaction = async (id: number): Promise<void> => {
  await api.delete(`/transactions/${id}`);
};

export const fetchBudgetSummary = async (): Promise<BudgetSummary> => {
  const response = await api.get<BudgetSummary>('/transactions/summary');
  return response.data;
};

export default api;