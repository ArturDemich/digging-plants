import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


export default function MainScreen ({navigation})  {
 
    return (
       
        <View style={styles.container}>
            <Text style={styles.text}> Виберіть поле </Text>
             <TouchableOpacity  >
                <Text style={styles.button} title='Барвінок' onPress={() => navigation.navigate('Замовлення',  { title: 'Барвінок'}) } > Барвінок </Text>
                <Text style={styles.button} title='Перечин' onPress={() => navigation.navigate('Замовлення',  { title: 'Перечин'})} > Перечин </Text>
                <Text style={styles.button} title='Дубриничі' onPress={() => navigation.navigate('Замовлення',  { title: 'Дубриничі'})} > Дубриничі </Text>
                <Text style={styles.button} title='База' onPress={() => navigation.navigate('Замовлення',  { title: 'База'})} > База </Text>
            </TouchableOpacity>    
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    text: {
        color: 'black',
        fontSize: 20,
        marginBottom: 100,
        marginTop: 15,
        

    },    
    button: {
        marginTop: 15,
        borderRadius: 20,
        textAlign: "center",
        backgroundColor: "green",
        fontSize: 35,
        fontWeight: "500",
        minWidth: "63%",
        minHeight: "11%",
        textAlignVertical: 'center',
    }
})