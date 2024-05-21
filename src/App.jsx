import React from "react";
import { SafeAreaView, Text } from "react-native";
import App from './components/Teste';
import Lista from "./components/Lista";

import Teste from './components/Teste';



export default props => {
    return(
        <SafeAreaView style={{flex:1,}}>
            {/* <Teste/> */}
            <Lista/>
        </SafeAreaView>
    )
}