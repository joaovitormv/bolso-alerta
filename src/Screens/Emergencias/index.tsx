import { IPage} from "../../../App";
import {View, Text, TouchableOpacity} from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style";

export function Emergencias ({setPageI}: IPage){
    return (
        <View style={styles.suporte}>
            <TouchableOpacity style={styles.suporte}>
                    <MaterialIcons name="error" size={40} color={"white"}/>
                    <Text style={styles.textoCabecalho}> FALAR COM O SUPORTE</Text>
            </TouchableOpacity>
        </View>
    )
}