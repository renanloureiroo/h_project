import React from 'react'
import { View, Image, Text, ImageSourcePropType } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'

type ButtonLoginProps = RectButtonProps & {
  icon: ImageSourcePropType
  text: string
}

export const ButtonLogin = ({ icon, text, ...rest }: ButtonLoginProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.icon}>
        <Image source={icon} />
      </View>
      <Text style={styles.title}>{text}</Text>
    </RectButton>
  )
}
