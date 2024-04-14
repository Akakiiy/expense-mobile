import {StyleSheet} from "react-native";
import {colors} from "../../../../../shared/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#fff'
  },
  pressed: {
    backgroundColor: colors.blue200
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",

  },
  time: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "300",
  },
  price: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.cyan500,
    borderRadius: 8
  },
  priceText: {
    fontWeight: "bold",
    color: colors.black900
  },
})