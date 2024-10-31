import { IPage } from "../../../App";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style";

export function Emergencias({ setPageI, setEmergenciaI, setSubEmergenciaI }: IPage) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.suporte}>
                <TouchableOpacity onPress={() => setPageI("Perfil")}>
                    <Image source={require('../../assets/User.png')} style={styles.user} />
                </TouchableOpacity>   
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

                <TouchableOpacity onPress={() => setPageI("Afogamento")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/afogamento.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>AFOGAMENTO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("Incêndio")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/fogo.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>INCÊNDIO</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/paradaCardiaca.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>PARADA CARDÍACA</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("Engasgamento")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/engasgamento.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>ENGASGAMENTO</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity onPress={() => setPageI("Trânsito")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/transito.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>ACIDENTE DE TRÂNSITO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("Risco Animal")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/animal.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>PERIGO ANIMAL</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity onPress={() => setPageI("Desastre Naturalatureza")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/natureza.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>DESASTRE NATURAL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("Resgate de Pessoas")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/resgate.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>RESGATE DE PESSOAS</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity style={styles.emergencia}  onPress={() => {
                    setPageI("Outros")
                    setEmergenciaI("Emergências")
                    setSubEmergenciaI("Outros")
                }
                } >
                    <Image source={require('../../assets/IconesEmergencia/outros.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>OUTRO</Text>
                </TouchableOpacity>

            </View>

            
        </ScrollView>
    )
}