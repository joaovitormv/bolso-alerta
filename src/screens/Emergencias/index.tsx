import { IPage } from "../../../App";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style";

export function Emergencias({ setPageI, setEmergenciaI }: IPage) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.suporte}>
                <TouchableOpacity onPress={() => setPageI("Cadastro")}>
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

                <TouchableOpacity onPress={() => setPageI("afogamento")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/afogamento.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>AFOGAMENTO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("incendio")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/fogo.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>INCÊNDIO</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/paradaCardiaca.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>PARADA CARDÍACA</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("engasgamento")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/engasgamento.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>ENGASGAMENTO</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity onPress={() => setPageI("transito")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/transito.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>ACIDENTE DE TRÂNSITO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("animal")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/animal.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>PERIGO ANIMAL</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity onPress={() => setPageI("natureza")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/natureza.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>DESASTRE NATURAL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageI("pessoas")} style={styles.emergencia}>
                    <Image source={require('../../assets/IconesEmergencia/resgate.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>RESGATE DE PESSOAS</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opcoesEmergencias}>

                <TouchableOpacity style={styles.emergencia}  onPress={() => {
                    setPageI("Outros")
                    setEmergenciaI("Emergencias")
                }
                } >
                    <Image source={require('../../assets/IconesEmergencia/outros.png')} style={styles.iconeEmergencia} />
                    <Text style={styles.textoEmergencia}>OUTRO</Text>
                </TouchableOpacity>

            </View>

            
        </ScrollView>
    )
}