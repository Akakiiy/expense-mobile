import {FlatList, Text, View} from 'react-native'
import {ExpensesTotal} from "../../../../../entities/expenses-total";
import {styles} from "./styles.ts";
import {ExpensesListItem} from "../../expenses-list-item";
import {UseExpensesStore} from "../../../store/types";

type ExpensesListProps = {
  period: string
  fallback: string
} & Pick<UseExpensesStore, "expenses">

export const ExpensesList = ({period, fallback, expenses}: ExpensesListProps) => {


  return (
    <View style={styles.container}>
      <ExpensesTotal
        period={period}
        total={expenses.reduce((a, b) => a + b.expense, 0)}
      />
      {
        expenses.length > 0
          ? (
            <FlatList
              style={styles.list}
              alwaysBounceVertical={false}
              data={expenses}
              keyExtractor={({id}) => id.toString()}
              renderItem={({item}) => (
                <ExpensesListItem {...item} />
              )}
            />
          )
          : <Text style={styles.fallback}>{fallback}</Text>
      }
    </View>
  )
}