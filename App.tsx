import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, Dispatch, SetStateAction } from "react";
import {ScreenCadastro, ScreenEmergencias, ScreenOutrasEmergencias, ScreenSubEmergencias} from "./src/Screens/index"
import { useFonts, Hanuman_900Black } from '@expo-google-fonts/hanuman';

export interface IPage {
  setPageI: Dispatch<SetStateAction<string>>,
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Hanuman_900Black
  });
  const [page, setPage] = useState("Cadastro")

  if (page == "Cadastro") {
    return <ScreenCadastro setPageI={setPage}/>
  } else if (page == "Emergencias") {
    return <ScreenEmergencias setPageI={setPage}/>
  } else if (page == "Outros") {
    return <ScreenOutrasEmergencias setPageI={setPage}/>
  } else {
    return <ScreenSubEmergencias Tipo={page} setPageI={setPage}/>
  }
}
