import React from 'react';
import { SafeAreaView } from 'react-native';
import { setJSExceptionHandler } from "react-native-exception-handler";
import HomeScreen from './src/HomeScreen';
import { redSnack } from './src/Services/SnackService';

setJSExceptionHandler((err: any, isFatal: boolean) => {
  redSnack("Something went worng");
}, true);

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  )
}

export default App
