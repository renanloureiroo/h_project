import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native'

import {styles} from './styles'

type ButtonLoginProps = TouchableOpacityProps & {
  icon: ImageSourcePropType
  text: string
}

export const ButtonLogin = ({icon, text, ...rest}: ButtonLoginProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.icon}>
        <Image source={icon} />
      </View>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  )
}
