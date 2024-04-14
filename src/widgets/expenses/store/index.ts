import {create} from "zustand";
import {Expense, UseExpensesStore} from "./types";
import {immer} from "zustand/middleware/immer";
import {expensesData} from "./const";

export const useExpensesStore = create<UseExpensesStore>()(immer((set) => ({
  expenses: expensesData,
  addExpense: (expense: Exclude<Expense, 'id'>) => set((state) => ({
    expenses: [
      {
        id: Math.random(),
        ...state.expenses
      },
      expense
    ],
  })),
  updateExpenses: (exp: Expense) => set((state) => ({
    expenses: state.expenses.map((expense) => expense.id === exp.id ? exp : expense),
  })),
  deleteExpense: (id: string | number) => set((state) => ({
    expenses: state.expenses.filter((expense) => expense.id !== id),
  })),
})))