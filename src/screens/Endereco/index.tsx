import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { IPage } from "../../../App";
import { styles } from "./style";
import * as Location from "expo-location"
import MapView, { Region, Marker } from "react-native-maps"
import { useState, useEffect } from "react";

interface SubEmergenciasProps extends IPage {
    subEmergencia: string;
    emergencia: string
}

export function Endereco({ emergencia, subEmergencia, setPageI }: SubEmergenciasProps) {
    const [location, setLocation] = useState<null | Location.LocationObject>(null)
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>();
    const [errorMsg, setErrorMsg] = useState<null | string>(null);

    useEffect(() => {
        const handleLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
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
                    <Text>Ou coloque o endereço:</Text>
                    <View style={styles.caixaInputs}>
                        <TextInput
                            placeholder="Cidade:"
                            style={styles.inputEndereco}
                        />
                        <TextInput
                            placeholder="Bairro:"
                            style={styles.inputEndereco}
                        />
                        <TextInput
                            placeholder="Rua:"
                            style={styles.inputEndereco}
                        />
                        <TextInput
                            placeholder="Número:"
                            style={styles.inputEndereco}
                        />
                    </View>

                </View>
            </View>
            <View style={styles.opcaoRodape}>
                <TouchableOpacity onPress={() => setPageI(emergencia)}>
                    <Image source={require('../../assets/voltar.png')} style={styles.iconeRodape} />
                </TouchableOpacity>
                <Text style={styles.textoRodape}>VOLTAR</Text>
            </View>
        </>
    );
}