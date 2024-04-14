import {Text, View} from 'react-native'
import {styles} from './styles.ts'
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useExpensesStore} from "../../../widgets/expenses/store";
import {Form, FormValues} from "../../../widgets/form";

export const AddExpenseScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const addExpense = useExpensesStore(state => state.addExpense)

  const onCansel = () => {
    navigation.goBack()
  }

  const onAdd = (values: FormValues) => {
    addExpense({
      ...values,
      id: Math.random(),
      expense: Number(values.expense)
    })
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Add new expense
      </Text>
      <Form
        onSubmit={onAdd}
        onCansel={onCansel}
      />
    </View>
  )
}