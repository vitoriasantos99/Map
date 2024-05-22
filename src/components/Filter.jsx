import React from "react";
import { Button, Text, View, StyleSheet, Pressable, Alert } from "react-native";

function Filtro() {
    const pessoas = [
        {
            nome: 'José',
            idade: 15,
            emoji: '👨'
        },
        {
            nome: 'Maria',
            idade: 29,
            emoji: '👩'
        },
        {
            nome: 'João',
            idade: 25,
            emoji: '🧑'
        },
        {
            nome: 'Ana',
            idade: 18,
            emoji: '👧'
        },
        {
            nome: 'Pedro',
            idade: 30,
            emoji: '👦'
        },
    ];

    const maiores = pessoas.filter(pessoas => pessoas.idade >= 18);

    return(
        <View style={style.container}>
            {maiores.map(pessoa => (
                <View>
                    <Text key={pessoa.nome}></Text>
                    <Text style={style.nome}>{pessoa.nome}</Text>
                    <Text style={style.idade}>Idade: {pessoa.idade}</Text>
                    <Text style={style.emoji}>{pessoa.emoji}</Text>
                    <Pressable
                        style={({pressed}) => [
                            {
                                backgroundColor: pressed ? '#c34eb0' : '#8f1a7f',
                            },
                            style.button, 
                        ]}
                        onPress={() => Alert.alert('Maior de idade')}
                            >   
                        <Text style={style.buttonText}>Continue</Text>
                    </Pressable> 
                    {/* <Button
                        title="Comprar"
                        onPress={() => Alert.alert('teste')}
                        color={'black'}
                    /> */}
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
            backgroundColor: '#f782e1'
        },
        text:{
            textAlign: 'center',
            color: 'white'
        },
        nome:{
            fontSize: 30,
            textAlign: 'center'
        },
        idade:{
            textAlign: 'center',
            fontSize: 25,
        },
        emoji:{
            textAlign: 'center',
            fontSize: 50,
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

export default Filtro;
