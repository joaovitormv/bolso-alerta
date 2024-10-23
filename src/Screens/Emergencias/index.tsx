import { IPage } from "../../../App";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style";

export function Emergencias({ setPageI }: IPage) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.suporte}>
                <Image source={require('../../assets/User.png')} style={styles.user} />
                <TouchableOpacity style={styles.suporte}>
                    <MaterialIcons style={styles.alerta} name="error" size={40} color={"white"} />
                    <Text style={styles.textoCabecalho}> FALAR COM O SUPORTE</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewTitulo}>
                <Text style={styles.titulo}>QUAL A SUA EMERGÊNCIA?</Text>
            </View>

            {/*Cada View dessas é uma linha com duas emergencias, com excessão da última, que tem apenas 1 emergência*/}
            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity onPress={() => setPageI("afogamento")} style={styles.emergencia}>
                    <Image source={require('../../assets/afogamento.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>AFOGAMENTO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("incendio")} style={styles.emergencia}>
                    <Image source={require('../../assets/fogo.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>INCÊNDIO</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity style={styles.emergencia}>
                    <Image source={require('../../assets/paradaCardiaca.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>PARADA CARDÍACA</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.emergencia}>
                    <Image source={require('../../assets/engasgamento.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>ENGASGAMENTO</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity style={styles.emergencia}>
                    <Image source={require('../../assets/transito.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>ACIDENTE DE TRÂNSITO</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.emergencia}>
                    <Image source={require('../../assets/animal.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>PERIGO ANIMAL</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity style={styles.emergencia}>
                    <Image source={require('../../assets/natureza.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>DESASTRE NATURAL</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.emergencia}>
                    <Image source={require('../../assets/resgate.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>RESGATE DE PESSOAS</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity style={styles.emergencia}>
                    <Image source={require('../../assets/outros.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>OUTRO</Text>
                </TouchableOpacity>

            </View>

            
        </ScrollView>
    )
}