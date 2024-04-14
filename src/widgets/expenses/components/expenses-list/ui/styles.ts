import {StyleSheet} from "react-native";
import {colors} from "../../../../../shared/styles";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: '80%'
  },
  list: {
    marginTop: 8,
  },
  fallback: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blue600
  }
})