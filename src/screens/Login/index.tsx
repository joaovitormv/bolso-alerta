import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { styles } from './style';
import { IPage} from "../../../App";
import { Ionicons } from '@expo/vector-icons';

export function Login ({setPageI}: IPage){
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color={"black"}/>
          <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={24} color={"black"}/>
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
        </View>
        <TouchableOpacity onPress={() => setPageI("Emergências")} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPageI("Cadastro")}>
          <Text style={styles.botaoLogin}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.emergencyButton} onPress={() => setPageI("Emergências")}>
        <Text style={styles.emergencyText}>Caso seja uma emergência, clique aqui!</Text>
      </TouchableOpacity>
    </View>
  );
};