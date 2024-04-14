import {StyleSheet} from "react-native";
import {colors} from "../../../styles";

export const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '300',
    color: colors.black900,
  },
  labelError: {
    color: colors.red500
  },
  input: {
    padding: 6,
    backgroundColor: colors.cyan200,
    borderRadius: 6
  },
  inputError: {
    borderColor: colors.red500
  }
})