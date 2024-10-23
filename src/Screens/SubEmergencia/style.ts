import { StyleSheet } from 'react-native'
import {colors} from '../../styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 70
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
      borderRadius: 40,
      marginBottom: 40
    },
    iconeEmergencia: {
      width: 90,
      height: 90
    },
    textoEmergencia: {
      fontFamily: "Hanuman_900Black",
      textAlign: 'center',
      fontSize: 16
    },
    titulo: {
      width: 350,
      height: 110,
      display: 'flex',
    },
    textTitulo: {
      fontFamily: "Hanuman_900Black",
      textAlign: 'center',
      fontSize: 25
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
    }
  })