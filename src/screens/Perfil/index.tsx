import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { IPage } from '../../../App';

export function Perfil({setPageI}: IPage){
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/User.png')} 
        style={styles.avatar} 
      />
      <Text style={styles.name}>Nome Completo</Text>
      <Text style={styles.email}>email@exemplo.com</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>RG:</Text>
        <Text style={styles.infoText}>MG 999.999.999-99</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Telefone:</Text>
        <Text style={styles.infoText}>(99) 99999-9999</Text>
      </View>

      <TouchableOpacity onPress={()  => setPageI("Emergências")} style={styles.button}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

