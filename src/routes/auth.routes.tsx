import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn'
import { Home } from '../screens/Home'

export const AuthRoutes = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        headerMode={'none'}
        screenOptions={{
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Screen name={'SignIn'} component={SignIn} />
        <Screen name={'Home'} component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}
