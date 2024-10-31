import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

import { styles } from "./style";
interface EsperaChatProps {
    descricao: string;
    emergencia: string;
    endereco?: string;
}

export function EsperaChat({ descricao, emergencia, endereco }: EsperaChatProps) {
    const [page, setPage] = useState("espera")
    if (page == "espera") {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.emergencia}>
                        <Text style={styles.textoEmergencia}>{emergencia}</Text>
                    </View>
                    <View style={styles.caixaTextoEndereco}>
                        <Text style={styles.textoEndereco}>{endereco}</Text>
                    </View>
                    <Text style={styles.textoCaminho}>O CORPO DE BOMBEIROS JÁ ESTÁ A CAMINHO!</Text>
                    <Text style={styles.textoObservacao}>Sua emergência foi enviada para o corpo de bombeiros. Siga as seguintes instruções enquanto você aguarda.</Text>
                    <View style={styles.linha}></View>
                </View>
                <View style={styles.rodape}>
                    <Text style={styles.textoRodape}>Conversar com o Corpo de Bombeiros e enviar imagem</Text>
                    <TouchableOpacity onPress={() => setPage("chat")}>
                        <Image source={require("../../assets/chat.png")}></Image>

                    </TouchableOpacity>
                </View>
            </>
        );
    } else if (page == "chat") {
        return (
            <>
                <View style={styles.containerChat}>
                    <View style={styles.caixaChat}>
                        <View style={styles.tituloChat}>
                            <Image source={require("../../assets/chat.png")}></Image>
                            <Text style={styles.textoChatTitulo}>Corpo de Bombeiros</Text>
                        </View>
                        <View style={styles.caixaMensagens}>

                        </View>
                        
                    </View>
                    <View style={styles.inputChat}>
                            <TextInput
                                placeholder="Digite sua mensagem"
                                style={styles.inputText}
                                multiline
                            />
                            <Image source={require("../../assets/camera.png")}></Image>
                        </View>

                </View>
                <View style={styles.rodapeChat}>
                    <TouchableOpacity onPress={() => setPage('espera')}>
                        <Image source={require('../../assets/voltar.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textoRodapeChat}>VOLTAR</Text>
                </View>
            </>

        )
    }
}