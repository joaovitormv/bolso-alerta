import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, Dispatch, SetStateAction } from "react";
import {ScreenCadastro, ScreenEmergencias, ScreenOutrasEmergencias} from "./src/Screens/index"

export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>,
}

export default function App() {
  const [page, setPage] = useState(1)
  if (page == 1) {
    return <ScreenCadastro setPageI={setPage}/>
  } else if (page == 2) {
    return <ScreenEmergencias setPageI={setPage}/>
  } else if (page == 3) {
    return <ScreenOutrasEmergencias setPageI={setPage}/>
  }
}
