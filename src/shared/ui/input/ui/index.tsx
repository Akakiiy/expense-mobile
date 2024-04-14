import {Text, TextInput, View} from 'react-native'
import {styles} from './styles.ts'
import {TextInputProps} from "react-native/Libraries/Components/TextInput/TextInput";
import {Control, useController} from "react-hook-form";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type InputProps = {
  label?: string
  name: string,
  control: Control<any, any>,
  inputProps?: TextInputProps
  style?: StyleProp<ViewStyle> | undefined
}

export const Input = (props: InputProps) => {
  const {
    label,
    name,
    control,
    inputProps,
    style,
  } = props

  const {field, fieldState: {invalid}} = useController({
    name,
    control,
    rules: {
      minLength: name === 'time' ? 10 : 1,
      required: {
        value: true,
        message: `${name} is required`
      }
    }
  })

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.labelError]}>
        {label}
      </Text>
      <TextInput
        {...inputProps} //меня немного заебала эта тема, тк один style перезатирает другой
        style={[styles.input, inputProps?.style, invalid && styles.inputError]}
        value={field.value}
        onChangeText={field.onChange}
      />
    </View>
  )
}