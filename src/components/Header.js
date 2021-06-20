import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return(
        <View style={headerContainer}>
            <Text style={header}>
                {headerText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 55,
        display: "flex",
        maxWidth: "100%",
        marginLeft: 105
        //alignItems: "center"
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    }
})

const { headerContainer, header } = styles;
const headerText = "Cryptocurrency App"
export default Header