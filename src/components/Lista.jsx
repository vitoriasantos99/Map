import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function Lista () {
    const products = [
        {
            id: 1,
            name: 'Banana',
            price: 1.50,
            emoji: '🍌',
        },
        {
            id: 2,
            name: 'Maça',
            price: 2.50,
            emoji: '🍅',
        },
        {
            id: 3,
            name: 'Laranja',
            price: 3.50,
            emoji: '🍊',
        },
    ];
    
    return(
        <View style={style.container}>
            {products.map(product => (
                <View key={product.id}>
                    <Text>{product.name}</Text>                    
                    <Text>Preço: R${product.price}</Text>
                    <Text>{product.emoji}</Text>
                </View>
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
        },
        text:{
            textAlign: 'center',
            color: 'white'
        }
    }
)

export default Lista;