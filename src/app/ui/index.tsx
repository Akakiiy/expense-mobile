import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View,} from 'react-native';
import {styles} from "./styles.ts";
import {ScreensStackNavigation} from "../../widgets/navigation";
import 'react-native-gesture-handler';


export const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <View style={styles.app}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <ScreensStackNavigation/>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
