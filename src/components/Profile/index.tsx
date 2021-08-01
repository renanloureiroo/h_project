import React from 'react'
import {View, Text} from 'react-native'
import {Avatar} from '../Avatar'

import {styles} from './styles'

type ProfileProps = {
  name: string
}

export const Profile = ({name}: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Avatar urlImage={'https://github.com/renanloureiroo.png'} />
      <View style={styles.content}>
        <Text style={styles.title}>Olá, </Text>
        <Text style={styles.subtitle}>{name}</Text>
      </View>
    </View>
  )
}
