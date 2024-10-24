import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, Dispatch, SetStateAction } from "react";
import {ScreenCadastro, ScreenEmergencias, ScreenOutrasEmergencias, ScreenSubEmergencias, ScreenEndereco} from "./src/screens/index"
import { useFonts, Hanuman_900Black } from '@expo-google-fonts/hanuman';

export interface IPage {
  setPageI: Dispatch<SetStateAction<string>>,
  setSubEmergenciaI: Dispatch<SetStateAction<string>>,
  setEmergenciaI: Dispatch<SetStateAction<string>>,
}

export default function App() {

  const [fontsLoaded] = useFonts({
    Hanuman_900Black
  });

  const [page, setPage] = useState("Cadastro")
  const [subEmergencia, setSubEmergencia] = useState("")
  const [emergencia, setEmergencia] = useState("")

  console.log(subEmergencia)
  if (page == "Cadastro") {
    return <ScreenCadastro setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia}/>
  } else if (page == "Emergencias") {
    return <ScreenEmergencias setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia}/>
  } else if (page == "Outros") {
    return <ScreenOutrasEmergencias emergencia={emergencia} setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia}/>
  } else if (page == "Endereco"){
    return <ScreenEndereco emergencia={emergencia} subEmergencia={subEmergencia} setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia}/>
  } else {
    return <ScreenSubEmergencias Emergencia={page} setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia}/>
  }
}
