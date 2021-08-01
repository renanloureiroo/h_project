import React from 'react'
import {View, Text} from 'react-native'
import {Avatar} from '../Avatar'

import {styles} from './styles'

export const Header = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage={'https://github.com/renanloureiroo.png'} />
      <View>
        <Text style={styles.title}>Olá, </Text>
        <Text style={styles.subtitle}>Renan Loureiro</Text>
      </View>
    </View>
  )
}
