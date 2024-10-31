import { StyleSheet } from 'react-native'
import {colors} from '../../styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
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
      display: 'flex',
    },
    iconeRodape: {
      width: 50,
      height: 50,
      position: 'absolute',
      top: -50,
      left: -160
    },
    iconeProximo: {
      width: 50,
      height: 50,
      position: 'absolute',
      top: -50,
      right: -160
    },
    textoProximo: {
      fontFamily: "Hanuman_900Black",
      color: colors.primary,
      position: 'absolute',
      top: 0,
      right: -170
    },
    textoRodape: {
      fontFamily: "Hanuman_900Black",
      color: colors.primary,
      position: 'absolute',
      top: 0,
      left: -163
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
      fontSize: 24,
      borderWidth: 2,
      marginBottom: 20,
      paddingLeft: 10
    },
    caixaInputs: {
      display: 'flex',
      height: 300
    },
    caixaTextoEndereco: {
      marginTop: 30,
      padding: 20,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 20
    },
    textoEndereco: {
      fontFamily: "Hanuman_900Black",
      fontSize: 19,
      textAlign: 'center',
      width: 250
    },
    textoConfirmar: {
      fontSize: 36,
      fontFamily: "Hanuman_900Black",
      paddingTop: 30,
      width: 270,
      textAlign: 'center'
    },
    botaoConfirmar: {
      backgroundColor: colors.fourth,
      width: 160,
      textAlign: 'center',
      padding: 15,
      marginTop: 60,
      fontFamily: "Hanuman_900Black",
      color: colors.white,
      textShadowColor: colors.black,
      textShadowRadius: 2,
      borderRadius: 30,
    },
    aviso: {
      width: 350,
      textAlign: 'center',
      fontFamily: "Hanuman_900Black",
      paddingTop: 40,
      fontSize: 20
    },
    opcaoRodape2: {
      padding: 20
    },
    iconeRodape2: {
      width: 50,
      height: 50
    },
    textoRodape2: {
      fontFamily: "Hanuman_900Black",
      color: colors.primary
    },
  })