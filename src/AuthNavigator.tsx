import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigators/AppStack';
import NavigationRoutes from './navigators/NavigationRoutes';

const AuthNavigator = () => {
  return (
    // <NavigationContainer ref={navigationRef}>
    <NavigationContainer>
    {/* {isAuth ? (
      <AppStack initialRouteName={initialRouteName} />
    ) : (
      <AuthStack />
    )} */}
    <AppStack initialRouteName={NavigationRoutes.APP_STACK.HOME}/>
  </NavigationContainer>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})