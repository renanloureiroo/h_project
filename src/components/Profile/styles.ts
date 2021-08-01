import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  title: {
    color: theme.colors.heading,
    fontSize: theme.fontSize.large,
  },
  subtitle: {
    fontSize: theme.fontSize.large,
    color: theme.colors.heading,
  },
})
