import { IPage} from "../../../App";
import {View, Text, TextInput, TouchableOpacity, Image} from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style";

interface SubEmergenciasProps extends IPage {
  emergencia: string
}

export function OutrasEmergencias ({setPageI, emergencia}: SubEmergenciasProps){
   return (
      <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>EMERGENCIA TAL - OUTROS</Text>
            <TextInput
              style={styles.input}
              placeholder="Descreva sua emergência de forma breve para que possamos te ajudar."
              placeholderTextColor="#999"
              multiline
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.backButton} onPress={() => setPageI("Emergencias")}>
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
