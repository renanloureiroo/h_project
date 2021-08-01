import React from 'react'

import { Background } from './src/components/Background'
import { StatusBar } from 'react-native'
import { AuthRoutes } from './src/routes/auth.routes'

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <AuthRoutes />
    </Background>
  )
}
