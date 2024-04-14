import {Pressable, Text, View} from 'react-native'
import {styles} from './styles.ts'
import {colors} from "../../../../../shared/styles";
import {Expense} from "../../../store/types";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {AppRoutesEnum} from "../../../../../shared/configs";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export const ExpensesListItem = (propsExpense: Expense) => {
  const {title, expense, time} = propsExpense
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const onPressHandler = () => {
    navigate(AppRoutesEnum.PREVIEW_EXPENSE, {expense: propsExpense})
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [styles.subContainer, pressed && styles.pressed]}
        android_ripple={{color: colors.blue200}}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>
            {`$${expense.toFixed(2)}`}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}