import React, {ReactNode} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {} from 'react-native'
import {theme} from '../../global/styles/theme'

import {styles} from './styles'

type BackgroundProps = {
  children?: ReactNode
}

export const Background = ({children}: BackgroundProps) => {
  return (
    <LinearGradient
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
      style={styles.container}>
      {children}
    </LinearGradient>
  )
}
