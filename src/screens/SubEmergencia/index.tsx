import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./style";
import { IPage } from "../../../App";

interface SubEmergenciasProps extends IPage {
    Emergencia: string;
}

export function SubEmergencias({ Emergencia, setPageI, setSubEmergenciaI, setEmergenciaI }: SubEmergenciasProps) {
    if (Emergencia == "Afogamento") {
        return (
            <>
                <View style={styles.container}>

                    {/*Cabeçalho*/}
                    <View style={styles.emergencia}>
                        <Image source={require('../../assets/IconesEmergencia/afogamento.png')} style={styles.iconeEmergencia} />
                        <Text style={styles.textoEmergencia}>AFOGAMENTO</Text>
                    </View>
                    <View style={styles.titulo}>
                        <Text style={styles.textTitulo}>Detalhe o afogamento que está ocorrendo:</Text>
                    </View>

                    {/*Subopcões*/}
                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("AFOGAMENTO EM RIO")
                            setEmergenciaI("Afogamento")
                        }} style={styles.emergencia}>
                            <Image source={require('../../assets/IconesSubEmergencia/rio.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>AFOGAMENTO EM RIO</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("AFOGAMENTO EM PISCINA")
                            setEmergenciaI("Afogamento")
                        }}
                        >
                            <Image source={require('../../assets/IconesSubEmergencia/piscina.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>AFOGAMENTO EM PISCINA</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Outros"),
                            setEmergenciaI("Afogamento")
                        }}>
                            <Image source={require('../../assets/IconesEmergencia/outros.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>OUTRO TIPO</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/*Rodapé*/}
                <View>
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI("Emergências")}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                        </TouchableOpacity>
                        <Text style={styles.textoRodape}>VOLTAR</Text>
                    </View>
                </View>
            </>
        )
    } else if (Emergencia == "Incêndio") {
        return (
            <>
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.cabecalho}>
                        <TouchableOpacity style={styles.emergencia}>
                            <Image source={require('../../assets/IconesEmergencia/fogo.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>INCÊNDIO</Text>
                        </TouchableOpacity>
                        <View style={styles.titulo}>
                            <Text style={styles.textTitulo}>Detalhe o incêndio que está ocorrendo:</Text>
                        </View>
                    </View>

                    {/*Subopcões*/}
                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("INCÊNDIO RESIDENCIAL")
                            setEmergenciaI("Incêndio")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/casa.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>INCÊNDIO RESIDENCIAL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("INCÊNDIO FLORESTAL")
                            setEmergenciaI("Incêndio")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/floresta.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>INCÊNDIO FLORESTAL</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("INCÊNDIO INDUSTRIAL")
                            setEmergenciaI("Incêndio")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/industria.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>INCÊNDIO INDUSTRIAL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("INCÊNDIO EM VEÍCULO")
                            setEmergenciaI("Incêndio")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/carro.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>INCÊNDIO EM VEÍCULO</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Outros"),
                            setEmergenciaI("Incêndio")
                        }}>
                            <Image source={require('../../assets/IconesEmergencia/outros.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>OUTRO TIPO</Text>
                        </TouchableOpacity>
                    </View>

                    {/*Rodapé*/}
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI("Emergências")}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                        </TouchableOpacity>
                        <Text style={styles.textoRodape}>VOLTAR</Text>
                    </View>
                </ScrollView>
            </>
        )
    } else if (Emergencia == "Engasgamento") {
        return (
            <>
                <View style={styles.containerScrollView}>
                    <View style={styles.cabecalho}>
                        <View style={styles.emergencia}>
                            <Image source={require('../../assets/IconesEmergencia/engasgamento.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ENGASGAMENTO</Text>
                        </View>
                        <View style={styles.titulo}>
                            <Text style={styles.textTitulo}>Detalhe o engasgamento que está ocorrendo:</Text>
                        </View>
                    </View>

                    {/*Subopcões*/}
                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ENGASGAMENTO DE CRIANÇA")
                            setEmergenciaI("Engasgamento")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/crianca.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>CRIANÇA</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ENGASGAMENTO DE ADULTO")
                            setEmergenciaI("Engasgamento")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/adulto.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ADULTO</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ENGASGAMENTO DE IDOSO")
                            setEmergenciaI("Engasgamento")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/idoso.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>IDOSO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Rodapé*/}
                <View style={styles.opcaoRodape}>
                    <TouchableOpacity onPress={() => setPageI("Emergências")}>
                        <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                    </TouchableOpacity>
                    <Text style={styles.textoRodape}>VOLTAR</Text>
                </View>

            </>
        )
    } else if (Emergencia == "Trânsito") {
        return (
            <>
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.cabecalho}>
                        <View style={styles.emergencia}>
                            <Image source={require('../../assets/IconesEmergencia/transito.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ACIDENTE DE TRÂNSITO</Text>
                        </View>
                        <View style={styles.titulo}>
                            <Text style={styles.textTitulo}>Detalhe o acidente que está ocorrendo:</Text>
                        </View>
                    </View>

                    {/*Subopcões*/}
                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("COLISÃO")
                            setEmergenciaI("Trânsito")
                        }}>
                            <Image source={require('../../assets/IconesEmergencia/transito.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>COLISÃO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ACIDENTE DE MOTO")
                            setEmergenciaI("Trânsito")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/moto.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ACIDENTE DE MOTO</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ACIDENTE COM ANIMAIS")
                            setEmergenciaI("Trânsito")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/acidenteAnimal.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ACIDENTE COM ANIMAIS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ACIDENTE COM PEDESTRES")
                            setEmergenciaI("Trânsito")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/pedestre.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ACIDENTE COM PEDESTRES</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Outros"),
                            setEmergenciaI("Trânsito")
                        }}>
                            <Image source={require('../../assets/IconesEmergencia/outros.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>OUTRO TIPO</Text>
                        </TouchableOpacity>
                    </View>

                    {/*Rodapé*/}
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI("Emergências")}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                        </TouchableOpacity>
                        <Text style={styles.textoRodape}>VOLTAR</Text>
                    </View>
                </ScrollView>
            </>
        )
    } else if (Emergencia == "Risco Animal") {
        return (
            <>
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.cabecalho}>
                        <View style={styles.emergencia}>
                            <Image source={require('../../assets/IconesEmergencia/animal.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>PERIGO ANIMAL</Text>
                        </View>
                        <View style={styles.titulo}>
                            <Text style={styles.textTitulo}>Detalhe o perigo animal que está ocorrendo:</Text>
                        </View>
                    </View>

                    {/*Subopcões*/}
                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ATAQUE ANIMAL")
                            setEmergenciaI("Risco Animal")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/raposa.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ATAQUE SELVAGEM</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ATAQUE DOMÉSTICO")
                            setEmergenciaI("Risco Animal")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/domestico.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ATAQUE DOMÉSTICO</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("RESGATE")
                            setEmergenciaI("Risco Animal")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/resgate.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>RESGATE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ENCHAME DE ABELHAS")
                            setEmergenciaI("Risco Animal")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/abelha.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ENXAME DE ABELHAS</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Outros"),
                            setEmergenciaI("Risco Animal")
                        }}>
                            <Image source={require('../../assets/IconesEmergencia/outros.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>OUTRO TIPO</Text>
                        </TouchableOpacity>
                    </View>

                    {/*Rodapé*/}
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI("Emergências")}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                        </TouchableOpacity>
                        <Text style={styles.textoRodape}>VOLTAR</Text>
                    </View>
                </ScrollView>
            </>
        )
    } else if (Emergencia == "Desastre Natural") {
        return (
            <>
                <View style={styles.containerScrollView}>
                    <View style={styles.cabecalho}>
                        <View style={styles.emergencia}>
                            <Image source={require('../../assets/IconesEmergencia/natureza.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>DESASTRE NATURAL</Text>
                        </View>
                        <View style={styles.titulo}>
                            <Text style={styles.textTitulo}>Detalhe o acidente que está ocorrendo:</Text>
                        </View>
                    </View>

                    {/*Subopcões*/}
                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("ÁRVORE CAÍDA")
                            setEmergenciaI("Desastre Natural")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/arvoreCaida.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>ÁRVORE CAÍDA</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("INUNDAÇÃO")
                            setEmergenciaI("Desastre Natural")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/inundacao.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>INUNDAÇÃO</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("DESLIZAMENTO")
                            setEmergenciaI("Desastre Natural")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/deslizamento.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>DESLIZAMENTO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Outros"),
                            setEmergenciaI("Desastre Natural")
                        }}>
                            <Image source={require('../../assets/IconesEmergencia/outros.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>OUTRO TIPO</Text>
                        </TouchableOpacity>
                    </View>

                    {/*Rodapé*/}
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI("Emergências")}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                        </TouchableOpacity>
                        <Text style={styles.textoRodape}>VOLTAR</Text>
                    </View>
                </View>
            </>
        )
    } else if (Emergencia == "Resgate de Pessoas") {
        return (
            <>
                <View style={styles.containerScrollView}>
                    <View style={styles.cabecalho}>
                        <View style={styles.emergencia}>
                            <Image source={require('../../assets/IconesEmergencia/resgate.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>RESGASTE DE PESSOAS</Text>
                        </View>
                        <View style={styles.titulo}>
                            <Text style={styles.textTitulo}>Detalhe o acidente que está ocorrendo:</Text>
                        </View>
                    </View>

                    {/*Subopcões*/}
                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("RESGATE EM LOCAL ALTO")
                            setEmergenciaI("Resgate de Pessoas")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/alto.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>RESGATE EM LOCAL ALTO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("RESGATE EM DESTROÇOS")
                            setEmergenciaI("Resgate de Pessoas")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/destrocos.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>RESGATE EM DESTROÇOS</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subOpcoesEmergencias}>
                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Endereco"),
                            setSubEmergenciaI("RESGATE EM LOCAL FECHADO")
                            setEmergenciaI("Resgate de Pessoas")
                        }}>
                            <Image source={require('../../assets/IconesSubEmergencia/presa.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>RESGATE EM LOCAL FEHCADO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergencia} onPress={() => {
                            setPageI("Outros"),
                            setEmergenciaI("Resgate de Pessoas")
                        }}>
                            <Image source={require('../../assets/IconesEmergencia/outros.png')} style={styles.iconeEmergencia} />
                            <Text style={styles.textoEmergencia}>OUTRO TIPO</Text>
                        </TouchableOpacity>
                    </View>


                    {/*Rodapé*/}
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI("Emergências")}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                        </TouchableOpacity>
                        <Text style={styles.textoRodape}>VOLTAR</Text>
                    </View>
                </View>
            </>
        )
    }
}