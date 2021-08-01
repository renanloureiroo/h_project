import React from 'react'
import {SignIn} from './src/screens/SignIn'
import {Home} from './src/screens/Home'
import {Background} from './src/components/Background'
import {StatusBar} from 'react-native'

export default function App() {
  return (
    <Background>
      <StatusBar barStyle={'light-content'} />
      <SignIn />
    </Background>
  )
}
