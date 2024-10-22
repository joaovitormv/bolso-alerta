import { StyleSheet } from 'react-native'
import {colors} from '../../styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cabecalho: {
      backgroundColor: colors.primary,
      display: 'flex',
      height: 100,
    },
    textoCabecalho: {
      textAlign: 'center',
      color: colors.white,
      fontSize: 16
    },
    suporte: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      padding: 20,
      height: 100,
      width: '100%',
    }
  })