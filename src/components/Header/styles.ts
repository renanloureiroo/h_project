import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight() + 26,
  },
  title: {
    color: theme.colors.heading,
  },
})
