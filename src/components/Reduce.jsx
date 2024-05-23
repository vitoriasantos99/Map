import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Reduce(){
    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return(
        <View style={style.container}>
            <Text style={style.text1}>Números declarados: 1, 2, 3, 4, 5</Text>
            <Text style={style.text2}>A soma dos números é {sum}</Text>
        </View>
    );
}

const style = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#efeafd'
        },
        text1:{
            fontSize: 20,
        },
        text2:{
            fontSize: 30,
        },
    }
)

export default Reduce;