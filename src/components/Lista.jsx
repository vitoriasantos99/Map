import React from "react";
import { Button, Text, View, StyleSheet, Alert, Pressable } from "react-native";

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
                    <Text style={style.text}>{product.name}</Text>                    
                    <Text style={style.preco}>Preço: R${product.price}</Text>
                    <Text style={style.emoji}>{product.emoji}</Text>
                    <Pressable
                        style={({pressed}) => [
                            {
                                backgroundColor: pressed ? 'pink' : '#b5758d',
                            },
                            style.button, 
                        ]}
                        onPress={() => Alert.alert('Obrigada por comprar')}
                            >   
                        <Text style={style.buttonText}>Continue</Text>
                    </Pressable> 
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
            backgroundColor: '#daa6bf',
            color: 'black',
        },
        text:{
            textAlign: 'center',
            color: 'white',
            fontSize: 30,
            color: 'black'
        },
        preco:{
            color: '#c40c5a',
            fontSize: 18,
        },
        emoji:{
            textAlign: 'center',
        },
        button:{
            borderRadius: 8,
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText:{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: 'white',
        },
    }
)

export default Lista;