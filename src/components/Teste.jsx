import React from "react";
import { View, Text, StyleSheet } from "react-native";

function App( ){
    const names = ['Alan','Bernardo','Carlos','Daniela']

    return(
        <View style={style.container}>
            {names.map(name => (
                <Text key={name}
                style={style.text}>{name}</Text>
            ))}
        </View>
    )
}

const style = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
        },
        text:{
            textAlign: 'center',
            color: 'white'
        }
    }
)

export default App;