import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../../screens/Splash/SplashScreen'
import TabNavigation from './TabNavigation'
const Stack = createNativeStackNavigator()
const index = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={"SplashScreen"}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  )
}

export default index