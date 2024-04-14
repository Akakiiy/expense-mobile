import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutesEnum} from "../../../../shared/configs";
import {PreviewExpenseScreen} from "../../../../screens/preview-expense-screen";
import {AddExpenseScreen} from "../../../../screens/add-expense-screen";
import {AppTabsNavigation} from "../../app-tabs-navigation";
import {styles} from "./styles.ts";

const Stack = createStackNavigator();

export const ScreensStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles,
        presentation: "modal"
      }}
    >
      <Stack.Screen
        name={AppRoutesEnum.EXPENSES}
        component={AppTabsNavigation}
        options={{
          title: "Expenses",
          headerShown: false
        }}
      />
      <Stack.Screen
        name={AppRoutesEnum.PREVIEW_EXPENSE}
        component={PreviewExpenseScreen}
        options={{
          title: 'Preview Expense',
        }}
      />
      <Stack.Screen
        name={AppRoutesEnum.ADD_EXPENSE}
        component={AddExpenseScreen}
        options={{
          title: 'Add Expense',
        }}
      />
    </Stack.Navigator>
  )
}