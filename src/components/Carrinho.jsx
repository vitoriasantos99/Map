import { useState, useEffect } from "react";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";


function Carrinho(){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        const newTotal = cart.reduce((accumulator, currentValue) => 
        accumulator + currentValue.price * currentValue.quantity, 0);
        setTotal(newTotal);
    }, [cart]);

    const handleAddToCart = (item, quantity) => {
        const newCart = [...cart];
        const existingItemIndex = newCart.findIndex( i => i.id === item.id);

    if (existingItemIndex === -1){
        setCart([...newCart, {...item, quantity}]);
    } else {
        newCart[existingItemIndex].quantity += quantity;
        setCart(newCart);
    }
    };

    const handleRemoveFromCart = index => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    return(
        <View style={style.container}>
            <Text style={style.titulo}>Carrinho de Compra</Text>
            {cart.map((item, index) => (
                <View key={item.id}>
                    <Text aria-label={item.name}>{item.emoji}</Text>
                    <Text>{item.name}({'R$'}{item.price} x {item.quantity}) = {'R$'}{item.price * item.quantity}</Text>
                    <Button 
                        title="Remove"
                        onPress={() => handleRemoveFromCart(index)}
                    />
                </View>
            ))}
            <View>
                <Button
                    title="Adicionar 1 Banana '🍌' (R$1,5)"
                    onPress={()=> handleAddToCart({id: 1, name: 'Banana', price: 1.5, emoji: '🍌'}, 5)}/>
                <Text>Total: {'R$'}{total}</Text>
                {/* <Button
                    title="Adicionar 1 '🍊' (R$3)"
                    onPress={()=> handleAddToCart({id: 2, name: 'Laranja', price: 3, emoji: '🍊'}, 2)}/>
                <Text>Total: {'R$'}{total}</Text>
                <Button
                    title="Adicionar 1 '🍎' (R$2)"
                    onPress={()=> handleAddToCart({id: 3, name: 'Maçã', price: 2, emoji: '🍎'}, 3)}/>
                <Text>Total: {'R$'}{total}</Text> */}
            </View>
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
        titulo:{
            textAlign: 'center',
            fontSize: 30,
        }
    }
)

export default Carrinho;