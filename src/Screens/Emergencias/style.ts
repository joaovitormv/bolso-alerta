import { StyleSheet } from 'react-native'
import {colors} from '../../styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cabecalho: {
      backgroundColor: colors.primary,
      display: 'flex',
      height: 100,
    },
    textoCabecalho: {
      paddingTop: 30,
      color: colors.white,
      fontSize: 16,
      fontFamily: "Hanuman_900Black",
    },
    alerta: {
      paddingTop: 30,
      paddingLeft: 75,
      fontSize: 20
    },
    suporte: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      padding: 20,
      height: 100,
      width: '100%',
    },
    user: {
      marginLeft: 30,
      marginTop: 20,
    },
    viewTitulo: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginTop: 30,
    },
    titulo: {
      fontFamily: "Hanuman_900Black",
      fontSize: 40,
      textAlign: 'center'
    },
    opcoesEmergencias: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: 30,

    },
    emergencia: {
      width: 170,
      paddingLeft: 5,
      paddingRight: 5,
      height: 150,
      display: 'flex',
      borderColor: "black",
      borderWidth: 2,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: 40
    },
    textoEmergencia: {
      fontFamily: "Hanuman_900Black",
      textAlign: 'center',
      fontSize: 16

    },
    iconeEmergencia: {
      width: 80,
      height: 80
    },
  })