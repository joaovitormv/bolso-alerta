import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert } from "react-native";
import { IPage } from "../../../App";
import { styles } from "./style";
import * as Location from "expo-location"
import MapView, { Region, Marker } from "react-native-maps"
import { useState, useEffect } from "react";

interface SubEmergenciasProps extends IPage {
    subEmergencia: string;
    emergencia: string
}

interface Endereco {
    cidade?: string,
    bairro?: string,
    rua?: string,
    numero?: string
}

export function Endereco({ emergencia, subEmergencia, setPageI, setEnderecoI }: SubEmergenciasProps) {
    const [location, setLocation] = useState<null | Location.LocationObject>(null)
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>();
    const [errorMsg, setErrorMsg] = useState<null | string>(null);
    const [page, setPage] = useState('endereco');

    useEffect(() => {
        const handleLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permissão para acessar a Localização negada.");
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            if (location) {
                setLocation(location);
                setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                });
                setMarker([
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    },
                ]);
            }
        };
        handleLocation();
    }, []);


    let text = "Waiting...";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const [data, setData] = useState<Endereco>();
    /*Mudar os dados conforme digitado*/
    function handleChange(item: Endereco) {
        setData({ ...data, ...item });
    }

    /*só troca de página se tudo estiver preenchido*/
    function handleChangePage() {
        if (data?.bairro && data.cidade && data.numero && data.rua) {
            setPage("confirmar")
        } else {
            Alert.alert("Preencha todos os campos!")
        }
    }

    if (page == "endereco") {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.emergencia}>
                        <Text style={styles.textoEmergencia}>{subEmergencia}</Text>
                    </View>

                    <View style={styles.caixaMapa}>
                        <Text style={styles.textoMapa}>Informe sua localização:</Text>
                        <MapView style={styles.mapa} region={region} showsUserLocation={true}>
                            {marker &&
                                marker.map((item) => (
                                    <Marker key={item.latitude} coordinate={item} />
                                ))}
                        </MapView>
                    </View>

                    <View style={styles.caixaEndereco}>
                        <Text style={styles.textoMapa}>Ou coloque o endereço:</Text>
                        <View style={styles.caixaInputs}>
                            <TextInput
                                placeholder="Cidade:"
                                style={styles.inputEndereco}
                                onChangeText={(i) => handleChange({ cidade: i })}
                            />
                            <TextInput
                                placeholder="Bairro:"
                                style={styles.inputEndereco}
                                onChangeText={(i) => handleChange({ bairro: i })}
                            />
                            <TextInput
                                placeholder="Rua:"
                                style={styles.inputEndereco}
                                onChangeText={(i) => handleChange({ rua: i })}
                            />
                            <TextInput
                                placeholder="Número:"
                                style={styles.inputEndereco}
                                onChangeText={(i) => handleChange({ numero: i })}
                            />
                        </View>

                    </View>
                    <View style={styles.opcaoRodape}>
                        <TouchableOpacity onPress={() => setPageI(emergencia)}>
                            <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                            <Text style={styles.textoRodape}>VOLTAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleChangePage}>
                            <Image source={require('../../assets/continuar.png')} style={styles.iconeProximo} />
                            <Text style={styles.textoProximo}>PRÓXIMO</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </>
        );
    } else if (page == "confirmar") {
        let endereco = (data?.cidade || "") + ", " + (data?.bairro || "") + " - " + (data?.rua || "") + ", " + (data?.numero || "");
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.emergencia}>
                        <Text style={styles.textoEmergencia}>{subEmergencia}</Text>
                    </View>
                    <View style={styles.caixaTextoEndereco}>
                        <Text style={styles.textoEndereco}>{data?.rua}, {data?.numero} - {data?.bairro}, {data?.cidade} </Text>
                    </View>
                    <Text style={styles.textoConfirmar}>DESEJA CONFRIMAR A EMERGÊNCIA?</Text>
                    <TouchableOpacity onPress={() => {
                        setPageI("EsperaChat")
                        setEnderecoI(endereco)
                    }}>
                        <Text style={styles.botaoConfirmar}>CONFIRMAR</Text>
                    </TouchableOpacity>
                    <Text style={styles.aviso}>Atenção: realizar uma chamada falsa é crime e pode colocar vidas em risco </Text>
                </View>
                <View style={styles.opcaoRodape2}>
                    <TouchableOpacity onPress={() => {
                        setPage('endereco')
                        setData({})
                        }}>
                        <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape2} />
                    </TouchableOpacity>
                    <Text style={styles.textoRodape2}>VOLTAR</Text>
                </View>
            </>
        )
    }
}