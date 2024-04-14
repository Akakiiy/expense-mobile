import {StyleSheet} from "react-native";
import {colors} from "../../../../shared/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue300
  },
  header: {
    backgroundColor: colors.blue600
  },
  headerTitle: {
    color: colors.white900,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footer: {
    backgroundColor: colors.blue600
  },
})

export const commonTabScreensStyles = {
  /** from styles.ts */
  headerStyle: styles.header,
  headerTitleStyle: styles.headerTitle,
  tabBarStyle: styles.footer,

  /** specific */
  tabBarActiveTintColor: colors.cyan100
}