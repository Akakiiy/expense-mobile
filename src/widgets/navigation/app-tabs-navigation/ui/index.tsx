import {AppRoutesEnum} from "../../../../shared/configs";
import {ResentScreen} from "../../../../screens/recent-screen";
import {AllExpensesScreen} from "../../../../screens/all-expenses-screen";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {commonTabScreensStyles, styles} from './style.ts'
import {AddExpenseBtn} from "../../../../features/add-expense";
import {CalendarIcon, SandClockIcon} from "../../../../shared/assets";

const Tab = createBottomTabNavigator();

export const AppTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={AppRoutesEnum.RESENT}
      sceneContainerStyle={styles.container}
    >
      <Tab.Screen
        name={AppRoutesEnum.RESENT}
        component={ResentScreen}
        options={{
          ...commonTabScreensStyles,
          title: 'Recent',
          tabBarIcon: ({size, color}) => <SandClockIcon width={size} height={size} color={color} fill={color}/>,
          headerRight: () => <AddExpenseBtn/>,
        }}
      />
      <Tab.Screen
        name={AppRoutesEnum.ALL_EXPENSES}
        component={AllExpensesScreen}
        options={{
          ...commonTabScreensStyles,
          title: 'All Expenses',
          tabBarIcon: ({size, color}) => <CalendarIcon width={size} height={size} color={color} fill={color}/>,
          headerRight: () => <AddExpenseBtn/>
        }}
      />
    </Tab.Navigator>
  )
}