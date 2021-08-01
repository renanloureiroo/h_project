import React from 'react'
import {Image, View} from 'react-native'
import {theme} from '../../global/styles/theme'
import {LinearGradient} from 'expo-linear-gradient'

import {styles} from './styles'

type AvatarProps = {
  urlImage: string
}

export const Avatar = ({urlImage}: AvatarProps) => {
  const {secondary60, secondary40} = theme.colors

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: urlImage}} />
    </View>
  )
}
