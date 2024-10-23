import { Text, View, Image, TouchableOpacity } from "react-native"
import { styles } from "./style";
import { IPage } from "../../../App";

interface SubEmergenciasProps extends IPage {
    Tipo: string;
}

export function SubEmergencias({ Tipo, setPageI }: SubEmergenciasProps) {
    if (Tipo == "afogamento") {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.emergencia}>
                        <Image source={require('../../assets/afogamento.png')} style={styles.iconeEmergencia} />
                        <Text style={styles.textoEmergencia}>AFOGAMENTO</Text>
                    </View>
                    <View style={styles.titulo}>
                        <Text style={styles.textTitulo}>Escolha o tipo de afogamento que está ocorrendo:</Text>
                    </View>
                </View>
                {/*Rodapé*/}
                <View>
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI("Emergencias")}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                        </TouchableOpacity>
                        <Text style={styles.textoRodape}>VOLTAR</Text>
                    </View>
                </View>
            </>
        )
    } else if (Tipo == "incendio") {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.emergencia}>
                        <Image source={require('../../assets/fogo.png')} style={styles.iconeEmergencia} />
                        <Text style={styles.textoEmergencia}>INCÊNDIO</Text>
                    </View>
                    <View style={styles.titulo}>
                        <Text style={styles.textTitulo}>Escolha o tipo de incêndio que está ocorrendo:</Text>
                    </View>
                </View>
                {/*Rodapé*/}
                <View>
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI("Emergencias")}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                        </TouchableOpacity>
                        <Text style={styles.textoRodape}>VOLTAR</Text>
                    </View>
                </View>
            </>
        )
    }
}