import {View} from 'react-native'
import {styles} from './styles.ts'
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

type DividerProps = {
  style?: StyleProp<ViewStyle> | undefined
}

export const Divider = ({style}: DividerProps) => {
  return (
    <View style={[styles.divider, style]}/>
  )
}