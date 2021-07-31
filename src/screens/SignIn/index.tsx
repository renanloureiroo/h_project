import {StatusBar} from 'expo-status-bar'
import React from 'react'

import {Image, SafeAreaView, View, Text} from 'react-native'
import {ButtonLogin} from '../../components/ButtonLogin'

import {SVGSign} from '../../components/SVGSign'
import GoogleICON from '../../assets/google.png'
import AppleICON from '../../assets/apple.png'

import {styles} from './styles'

export const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>
        "A vida é muito curta para{'\n'} ser pequena" - Benjamin Disraeli
      </Text>

      <View style={styles.image}>
        <SVGSign />
      </View>

      <View style={styles.content}>
        <ButtonLogin icon={GoogleICON} text="Entrar com Google" />
        <ButtonLogin icon={AppleICON} text="Entrar com Apple" />
      </View>
    </SafeAreaView>
  )
}
