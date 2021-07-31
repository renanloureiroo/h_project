import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.text,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    height: 56,
    width: 56,
    borderRightColor: theme.colors.background,
    borderRightWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: theme.colors.background,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
