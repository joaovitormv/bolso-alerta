import {StyleSheet} from "react-native"
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Fundo cinza claro
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
  textoCaminho: {
    fontSize: 32,
    fontFamily: "Hanuman_900Black",
    paddingTop: 30,
    width: 320,
    textAlign: 'center'
  },
  textoObservacao: {
    fontFamily: "Hanuman_400Regular",
    textAlign: 'center',
    paddingTop: 30,
    width: 350,
    fontSize: 20
  },
  linha: {
    height: 2.4,
    marginTop: 20,
    width: 350,
    backgroundColor: colors.black
  },
  rodape: {
    backgroundColor: '#F5F5F5', // Fundo cinza claro
    alignItems: 'center',
    justifyContent: 'space-evenly',
    display: 'flex',
    height: 100,
    flexDirection: 'row',
  },
  textoRodape: {
    fontFamily: "Hanuman_400Regular",
    width: 250,
    fontSize: 16
  },
  /*CSS do chat*/
  containerChat: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#F5F5F5', // Fundo cinza claro
  },
  caixaChat: {
    width: '100%',
    backgroundColor: colors.white,
    height: '80%'
  },
  rodapeChat: {
    backgroundColor: '#F5F5F5', // Fundo cinza claro,
    padding: 10
  },
  textoRodapeChat: {
    fontFamily: "Hanuman_900Black",
    color: colors.primary
  },
  tituloChat: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 16,
    width: '100%',
    borderBottomWidth: 2,
    paddingBottom: 15
  },
  textoChatTitulo: {
    fontFamily: "Hanuman_900Black",
    fontSize: 23,
    textAlign: 'center',
    paddingTop: 16,
    paddingLeft: 20
  },
  inputChat: {
    backgroundColor: colors.white,
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 10
  },
  inputText: {
    fontFamily: "Hanuman_400Regular",
    fontSize: 24,
    width: 300,
    paddingLeft: 20
  }
});