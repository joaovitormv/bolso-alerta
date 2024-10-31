import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style";
import { useState } from "react";
import { IPage } from "../../../App";

interface SubEmergenciasProps extends IPage {
  emergencia: string,
}

export function OutrasEmergencias({ setSubEmergenciaI, setPageI, setDescricaoI, setEmergenciaI ,emergencia }: SubEmergenciasProps) {

  const [data, setData] = useState("");
  /*Mudar os dados conforme digitado*/
  function handleChange(item: string) {
    setData(item);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{emergencia}</Text>
        <TextInput
          style={styles.input}
          placeholder="Descreva sua emergência de forma breve para que possamos te ajudar."
          placeholderTextColor="#999"
          multiline
          onChangeText={(i) => handleChange(i)}
        />
        <TouchableOpacity style={styles.button} onPress={() => {
          setPageI("Endereco")
          setEmergenciaI(emergencia)
          setDescricaoI(data)
          setSubEmergenciaI("Outros")
        }}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => {
        setPageI(emergencia)
      }}>
        <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
      </TouchableOpacity>

    </View>


    /*     {/* <View style={styles.container}>
             <Text style={styles.title}>OUTRA EMERGÊNCIA</Text>
             <Text>TIPO DE EMERGÊNCIA?</Text>
             <TextInput
               style={styles.input}
               placeholder="Descreva sua emergência de forma breve"
             />
             <TouchableOpacity>
               <Text>ENVIAR</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=> setPageI(emergencia)}>
               <Text>VOLTAR</Text>
             </TouchableOpacity>
           </View> */
  );
};
