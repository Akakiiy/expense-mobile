import {Pressable, Text, TextStyle, View} from 'react-native'
import React, {ReactNode} from "react";
import {styles} from './styles.ts'
import {colors} from "../../styles";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type CustomButtonProps = {
  title: string | ReactNode
  onPress: () => void
  style?: StyleProp<ViewStyle> | undefined
  textStyle?: StyleProp<TextStyle> | undefined
}

export const CustomButton = ({title, onPress, style, textStyle}: CustomButtonProps) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [styles.subContainer, pressed && styles.pressed]}
        android_ripple={{color: colors.blue200}}
      >
        {
          typeof title === "string"
            ? (
              <Text style={[styles.title, textStyle]}>
                {title}
              </Text>
            )
            : title
        }
      </Pressable>
    </View>
  )
}