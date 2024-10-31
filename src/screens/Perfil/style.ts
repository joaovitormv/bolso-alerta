import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      paddingTop: 40
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      alignSelf: 'center',
      backgroundColor: 'red'
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 10,
    },
    email: {
      fontSize: 16,
      textAlign: 'center',
      color: '#666',
    },
    button: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      marginVertical: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    infoContainer: {
      marginVertical: 10,
    },
    infoLabel: {
      fontWeight: 'bold',
    },
    infoText: {
      color: '#333',
    },
  });