import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { images } from '../Utils/CoinIcons'

const CoinCard = (props) => {
    return(
        <View>
            <Text>{props.symbol}</Text>
            <Text>{props.coin_name}</Text>
            <Text>{props.price_usd}<Text style={{ fontWeight: 'bold' }}>$</Text></Text>
            <Text>Change past 24 hours: {props.percentage_change_24h}</Text>
            <Image 
                style={image}
                source={{ uri: images[props.symbol]}}
            />
        </View>
    )
    /*
        <Text>{price_usd}<Text style="bold">$</Text></Text>\
        <Text>Change past 24 hours: {percentage_change_24h}</Text>
        <Text>Change past 7 days: {percentage_change_7d}</Text>
        <Image 
                style={image}
                source={{ uri: images[props.symbol]}}
            />
    */
}

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },
    image: {
        width: 40,
        height: 40
    },
    bold: {
        fontWeight: 'bold'
    },
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55,
        display: "flex"
    }
})

const { container, image, bold } = styles

export default CoinCard