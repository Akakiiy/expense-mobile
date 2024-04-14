import {View} from 'react-native'
import {styles} from "./style.ts";
import {ExpensesList} from "../../../widgets/expenses";
import {useExpensesStore} from "../../../widgets/expenses/store";
import {useMemo} from "react";
import moment from "moment/moment";

export const ResentScreen = () => {
  const expenses = useExpensesStore(state => state.expenses)

  const filteredExpenses = useMemo(() => {
    const dateSevenDaysBefore = moment().subtract(7, 'days')
    return expenses.filter(expense => !moment(expense.time).isBefore(dateSevenDaysBefore))
  }, [expenses])

  return (
    <View style={styles.container}>
      <ExpensesList
        period={'Last 7 days'}
        fallback={'No expenses found for last 7 days'}
        expenses={filteredExpenses}
      />
    </View>
  )
}