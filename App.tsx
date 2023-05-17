import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { CalcScreen } from './src/screens/CalcScreen';
import { styles } from './src/theme/appTheme'

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor='black'
        barStyle='default'
      />
      <CalcScreen />
    </SafeAreaView>
  )
}

export default App;
