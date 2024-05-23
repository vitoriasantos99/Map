import React from "react";
import { SafeAreaView, Text } from "react-native";
import App from './components/Teste';
import Lista from "./components/Lista";
import Teste from './components/Teste';
import Filtro from "./components/Filter";
import Reduce from "./components/Reduce";
import Carrinho from "./components/Carrinho";



export default props => {
    return(
        <SafeAreaView style={{flex:1,}}>
            {/* <Teste/> */}
            {/* <Lista/> */}
            {/* <Filtro/> */}
            {/* <Reduce/> */}
            <Carrinho/>
            </SafeAreaView>
    )
}