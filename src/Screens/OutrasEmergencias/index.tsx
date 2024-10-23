import { IPage} from "../../../App";
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style";

export function OutrasEmergencias ({setPageI}: IPage){
    return (
        <View style={styles.container}>
          <Text style={styles.title}>OUTRA EMERGÊNCIA</Text>
          <Text>TIPO DE EMERGÊNCIA?</Text>
          <TextInput
            style={styles.input}
            placeholder="Descreva sua emergência de forma breve"
          />
          <TouchableOpacity>
            <Text>ENVIAR</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>VOLTAR</Text>
          </TouchableOpacity>
        </View>
      );
    };
    