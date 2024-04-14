import {StyleSheet} from "react-native";
import {colors} from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
    overflow: "hidden",
  },
  subContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: colors.white900,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pressed: {
    backgroundColor: colors.blue200,
  },
});