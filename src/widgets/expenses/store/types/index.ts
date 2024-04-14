export type UseExpensesStore = {
  expenses: Expense[];
  addExpense: (expense: Exclude<Expense, 'id'>) => void;
  updateExpenses: (expense: Expense) => void;
  deleteExpense: (id: string | number) => void;
}

export type Expense = {
  id: string | number,
  title: string,
  time: string,
  expense: number
}