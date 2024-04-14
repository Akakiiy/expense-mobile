import {StyleSheet} from "react-native";
import {colors} from "../../../shared/styles";

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  row: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginBottom: 16
  },
  titleInput: {
    minHeight: 100,
    minWidth: '100%',
  },
  divider: {
    marginVertical: 24,
    backgroundColor: colors.cyan100
  },
  buttonsContainer: {
    marginTop: 16,
    width: '75%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  buttonsText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  updateButton: {
    backgroundColor: colors.green400,
  },
  deleteButtonContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: undefined,
  }
})