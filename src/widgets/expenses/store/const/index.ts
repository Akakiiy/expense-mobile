import {Expense} from "../types";
import moment from "moment/moment";

export const expensesData: Expense[] = [
  {
    id: 1,
    title: "Condoms",
    expense: 3.243,
    time: moment().format("YYYY-MM-DD"),
  },
  {
    id: 1.1,
    title: "Food",
    expense: 24.899,
    time: moment().format("YYYY-MM-DD"),
  },
  {
    id: 2,
    title: "airMac m1",
    expense: 1327.011,
    time: moment().startOf("month").format("YYYY-MM-DD"),
  },
  {
    id: 3,
    title: "Rent",
    expense: 327.9432,
    time: moment("2024-03-13").format("YYYY-MM-DD"),
  }
]