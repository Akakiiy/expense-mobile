import {StyleSheet} from "react-native";
import {colors} from "../../../shared/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    marginVertical: 30,
    fontSize: 24,
    fontWeight: "bold",
    color: colors.blue600,
  }
})