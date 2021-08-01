import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.circle,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: theme.borderRadius.circle,
  },
})
