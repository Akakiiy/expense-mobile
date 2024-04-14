import {View} from 'react-native'
import {styles} from './styles.ts'
import {useExpensesStore} from "../../../widgets/expenses/store";
import {ExpensesList} from "../../../widgets/expenses";

export const AllExpensesScreen = () => {
  const expenses = useExpensesStore(state => state.expenses)

  return (
    <View style={styles.container}>
      <ExpensesList
        period={'Total'}
        fallback={'No expenses found'}
        expenses={expenses}
      />
    </View>
  )
}