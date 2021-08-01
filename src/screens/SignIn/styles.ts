import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary70,
  },
  image: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: theme.colors.heading,
    textAlign: 'center',
    marginBottom: 30,
  },
})
