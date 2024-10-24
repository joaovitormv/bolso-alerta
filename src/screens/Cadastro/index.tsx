import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { styles } from './style';
import { IPage} from "../../../App";
import { Ionicons } from '@expo/vector-icons';

export function Cadastro ({setPageI}: IPage){
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color={"black"}/>
          <TextInput placeholder="Nome completo" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color={"black"}/>
          <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={24} color={"black"}/>
          <TextInput placeholder="Telefone" style={styles.input} keyboardType="phone-pad" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="id-card" size={24} color={"black"}/>
          <TextInput placeholder="RG de PCD" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={24} color={"black"}/>
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="bag-check-sharp" size={24} color={"black"}/>
          <TextInput placeholder="Confirmar senha" style={styles.input} secureTextEntry />
        </View>
        <TouchableOpacity onPress={() => setPageI("Emergencias")} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.emergencyButton} onPress={() => setPageI("Emergencias")}>
        <Text style={styles.emergencyText}>Caso seja uma emergência, clique aqui!</Text>
      </TouchableOpacity>
    </View>
  );
};