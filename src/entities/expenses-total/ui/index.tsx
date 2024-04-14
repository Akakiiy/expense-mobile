import {Text, View} from 'react-native'
import {styles} from './styles.ts'
import {memo} from "react";

type ExpensesTotalProps = {
  total: number
  period: string
}

export const ExpensesTotal = memo(({total, period}: ExpensesTotalProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.period}>
        {period}
      </Text>
      <Text style={styles.total}>
        {`$${total.toFixed(2)}`}
      </Text>
    </View>
  )
})