import {StyleSheet} from "react-native";
import {colors} from "../../../shared/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.blue200
  },
  period: {
    fontSize: 14,
    color: colors.blue500,
    // opacity: 0.7
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black900,
  }
});