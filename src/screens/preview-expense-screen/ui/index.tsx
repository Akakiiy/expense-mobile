import {Text, View} from 'react-native'
import {styles} from './styles.ts'
import {ParamListBase, useNavigation, useRoute} from "@react-navigation/native";
import {Expense} from "../../../widgets/expenses/store/types";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useExpensesStore} from "../../../widgets/expenses/store";
import {Form, FormValues} from '../../../widgets/form';
import React from "react";

export const PreviewExpenseScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const route = useRoute()
  const updateExpenses = useExpensesStore(state => state.updateExpenses)
  const deleteExpense = useExpensesStore(state => state.deleteExpense)
  const {expense} = route.params as { expense: Expense }

  const onCansel = () => {
    navigation.goBack()
  }

  const onUpdate = (values: FormValues) => {
    updateExpenses({
      ...values,
      id: expense.id,
      expense: Number(values.expense),
    })
    navigation.goBack()
  }

  const deleteHandler = () => {
    deleteExpense(expense.id)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Update expense details
      </Text>
      <Form
        initialExpense={expense}
        onCansel={onCansel}
        onDelete={deleteHandler}
        onSubmit={onUpdate}
      />
    </View>
  )
}