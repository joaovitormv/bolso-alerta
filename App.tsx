import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, Dispatch, SetStateAction } from "react";
import {ScreenCadastro, ScreenEmergencias, ScreenOutrasEmergencias, ScreenSubEmergencias, ScreenEndereco, ScreenEsperaChat, ScreenLogin, ScreenPerfil} from "./src/screens/index"
import { useFonts, Hanuman_900Black, Hanuman_400Regular } from '@expo-google-fonts/hanuman';

export interface IPage {
  setPageI: Dispatch<SetStateAction<string>>,
  setSubEmergenciaI: Dispatch<SetStateAction<string>>,
  setEmergenciaI: Dispatch<SetStateAction<string>>,
  setDescricaoI: Dispatch<SetStateAction<string>>,
  setEnderecoI: Dispatch<SetStateAction<string>>,
  setPerfilI: Dispatch<SetStateAction<string>>
}


export default function App() {

  const [fontsLoaded] = useFonts({
    Hanuman_900Black,
    Hanuman_400Regular 
  });

  const [page, setPage] = useState("Cadastro")
  const [subEmergencia, setSubEmergencia] = useState("")
  const [emergencia, setEmergencia] = useState("")
  const [enderecoDef, setEndereco] = useState("")
  const [descricaoDef, setDescricao] = useState("")
  const [perfil, setPerfil] = useState("")

  console.log(subEmergencia)
  if (page == "Cadastro") {
    return <ScreenCadastro setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia} setDescricaoI={setDescricao} setEnderecoI={setEndereco} setPerfilI={setPerfil}/>
  } else if (page == "Login") { 
    return <ScreenLogin setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia} setDescricaoI={setDescricao} setEnderecoI={setEndereco} setPerfilI={setPerfil}/>
  }else if (page == "Emergências") {
    return <ScreenEmergencias setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia} setDescricaoI={setDescricao} setEnderecoI={setEndereco} setPerfilI={setPerfil}/>
  } else if (page == "Outros") {
    return <ScreenOutrasEmergencias emergencia={emergencia} setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia} setDescricaoI={setDescricao} setEnderecoI={setEndereco} setPerfilI={setPerfil}/>
  } else if (page == "Endereco"){
    return <ScreenEndereco emergencia={emergencia} subEmergencia={subEmergencia} setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia} setDescricaoI={setDescricao} setEnderecoI={setEndereco} setPerfilI={setPerfil}/>
  } else if (page == "EsperaChat") {  
    return <ScreenEsperaChat endereco={enderecoDef} emergencia={subEmergencia} descricao={descricaoDef}/>
  }else if (page == "Perfil"){
    return <ScreenPerfil setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia} setDescricaoI={setDescricao} setEnderecoI={setEndereco} setPerfilI={setPerfil}/>
  } else {
    return <ScreenSubEmergencias Emergencia={page} setPageI={setPage} setSubEmergenciaI={setSubEmergencia} setEmergenciaI={setEmergencia} setDescricaoI={setDescricao} setEnderecoI={setEndereco} setPerfilI={setPerfil}/>
  }
}
