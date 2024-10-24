import { StyleSheet } from 'react-native'
import {colors} from '../../styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    emergencia: {
      backgroundColor: colors.primary,
      width: 190,
      paddingLeft: 5,
      paddingRight: 5,
      height: 50,
      display: 'flex',
      borderColor: "black",
      borderWidth: 2,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: 40
    },
    textoEmergencia: {
      fontFamily: "Hanuman_900Black",
      color: colors.white,
      textAlign: 'center'
    },
    caixaMapa: {
      paddingTop: 20,
      display: 'flex',
      alignItems: 'center'
    },
    mapa: {
      width: 300,
      height: 300
    },
    textoMapa: {
      fontFamily: "Hanuman_900Black",
      fontSize: 20,
      textAlign: 'center'
    },
    opcaoRodape: {
      padding: 20
    },
    iconeRodape: {
      width: 50,
      height: 50
    },
    textoRodape: {
      fontFamily: "Hanuman_900Black",
      color: colors.primary
    },
    caixaEndereco: {
      paddingTop: 20,
      display: 'flex',
      width: '100%',
      alignItems: 'center'
    },
    inputEndereco: {
      width: 300,
      fontFamily: "Hanuman_900Black",
      fontSize: 26,
      borderWidth: 2,
      marginBottom: 20,
      paddingLeft: 10
    },
    caixaInputs: {
      display: 'flex',
      height: 300
    }
  })