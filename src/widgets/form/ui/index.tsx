import {Alert, View} from 'react-native'
import {styles} from './styles.ts'
import {Expense} from "../../expenses/store/types";
import {CustomButton} from "../../../shared/ui/custom-button";
import {Divider} from "../../../shared/ui/divider";
import Icon from "../../../shared/assets/icons/delete.svg";
import {colors} from "../../../shared/styles";
import {Input} from "../../../shared/ui/input";
import {useForm} from "react-hook-form";

type FormProps = {
  onSubmit: (values: FormValues) => void
  onCansel: () => void
} & ({ initialExpense: Expense, onDelete: () => void } | { initialExpense?: never, onDelete?: never })

export type FormValues = {
  title: string
  expense: string
  time: string
}

export const Form = ({initialExpense, onSubmit, onDelete, onCansel}: FormProps) => {
  const {
    control,
    formState: {isValid, errors},
    getValues
  } = useForm<FormValues>({
    defaultValues: {
      title: initialExpense?.title ?? '',
      expense: initialExpense?.expense.toString() ?? '',
      time: initialExpense?.time ?? ''
    }
  })

  const submitHandler = () => {
    if (!isValid) {
      Alert.alert('Error', 'Invalid data')
      return
    }
    const values = getValues()
    onSubmit(values)
  }

  return (
    <View style={styles.form}>
      <View style={styles.row}>
        <Input
          style={{flex: 1}}
          label={'Expense'}
          name={'expense'}
          control={control}
          inputProps={{
            keyboardType: 'number-pad'
          }}
        />
        <Input
          style={{flex: 1}}
          label={'Time'}
          name={'time'}
          control={control}
          inputProps={{
            keyboardType: 'number-pad'
          }}
        />
      </View>
      <Input
        label={'Title'}
        name={'title'}
        control={control}
        inputProps={{
          style: styles.titleInput,
          multiline: true,
          textAlignVertical: 'top'
        }}
      />
      <View style={styles.buttonsContainer}>
        <CustomButton
          textStyle={styles.buttonsText}
          onPress={onCansel}
          title={'Cansel'}
        />
        <CustomButton
          style={styles.updateButton}
          textStyle={styles.buttonsText}
          onPress={submitHandler}
          title={Boolean(initialExpense) ? 'Update' : 'Add'}
        />
      </View>
      {
        initialExpense && !!onCansel && <>
          <Divider style={styles.divider}/>
          <View style={styles.deleteButtonContainer}>
            <CustomButton
              style={styles.deleteButton}
              onPress={onDelete}
              title={<Icon width={30} height={30} fill={colors.red500}/>}
            />
          </View>
        </>
      }
    </View>
  )
}