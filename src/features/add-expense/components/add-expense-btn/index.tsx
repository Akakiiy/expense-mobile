import {View} from 'react-native'
import {CustomButton} from "../../../../shared/ui/custom-button";
import {styles} from "./styles.ts";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {AppRoutesEnum} from "../../../../shared/configs";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const AddExpenseBtn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const clickHandler = () => {
    navigation.navigate(AppRoutesEnum.ADD_EXPENSE)
  }

  return (
    <View style={styles.container}>
      <CustomButton
        title={"+"}
        onPress={clickHandler}
      />
    </View>
  )
}