import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default function FildScreen ()  {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Поля </Text>            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
})