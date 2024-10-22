import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D50000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 30,
    },
    form: {
      width: '80%',
    },
    input: {
      marginLeft: 10,
      flex: 1
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: '#000',
      fontWeight: 'bold',
    },
    emergencyButton: {
      marginTop: 20,
      color: '#'
    },
    emergencyText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF', 
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '100%',
    },
  });