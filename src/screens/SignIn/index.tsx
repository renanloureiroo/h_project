import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { Image, SafeAreaView, View, Text } from 'react-native'
import { ButtonLogin } from '../../components/ButtonLogin'

import { SVGSign } from '../../components/SVGSign'
import GoogleICON from '../../assets/google.png'
import AppleICON from '../../assets/apple.png'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { useNavigation } from '@react-navigation/native'

export const SignIn = () => {
  const navigation = useNavigation()

  const handleSignIn = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        "A vida é muito curta para{'\n'} ser pequena" - Benjamin Disraeli
      </Text>

      <View>
        <SVGSign />
      </View>

      <View style={styles.content}>
        <ButtonLogin
          onPress={handleSignIn}
          icon={GoogleICON}
          text="Entrar com Google"
        />
        <ButtonLogin icon={AppleICON} text="Entrar com Apple" />
      </View>
    </View>
  )
}
