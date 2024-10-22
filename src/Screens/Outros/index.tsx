import { IPage} from "../../../App";
import {View, Text} from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style";

export function OutrasEmergencias ({setPageI}: IPage){
    return (
        <View style={styles.container}>
          <Text style={styles.title}>OUTRA EMERGÊNCIA</Text>
          <Text style={styles.label}>TIPO DE EMERGÊNCIA?</Text>
          <TextInput
            style={styles.input}
            placeholder="Descreva sua emergência de forma breve"
            value={emergencyType}
            onChangeText={setEmergencyType}
          />
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>ENVIAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>VOLTAR</Text>
          </TouchableOpacity>
        </View>
      );
    };
    