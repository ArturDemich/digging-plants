import React, { useEffect, useState, useReducer } from 'react'
import {View, Text, StyleSheet, FlatList, TouchableHighlight} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function OrdersScreen  (props) {
    const [dataArray, setDataArray] = useState([])
    const [isLoading, setIsLoading] = useState(false) 


    const getOrders = async () => {
        const URL = 'http://127.0.0.1:3000/orders'
        setIsLoading(true)

        try {
         const res = await fetch('https://my-json-server.typicode.com/ArturDemich/plant-list-page/orders');
         const json = await res.json();
         setDataArray(json);
       } catch (error) {
         console.error(error);
       } finally {
        setIsLoading(false);
       }
     }
   
     useEffect(() => {
        getOrders();
     }, []); 



    const fild = props.route.params.title  

    const dataFilter = dataArray.filter(order => {        
        let plantPlace 
        for (let i = 0; i < order.orderItems.length; i++) {
           plantPlace = order.orderItems[i].placing
           if (plantPlace == fild ) {           
                return true
            } 
        }        
    })
          

    
    function renderOrders ({item}) {              
        
        return (
                <TouchableHighlight
                    onPress={() => props.navigation.navigate('Рослини',  { title: fild, data: dataFilter, clientName: item.nameClient })}
                    style={styles.rowFront}
                    underlayColor={'#AAA'}
                >
                <View style={styles.costLineWrapper}>
                    <Text style={styles.orderClient}>{item.nameClient}</Text>           
                    <Text style={styles.orderShipment}>відправки: {item.dateShipment}</Text>
                
                </View>
                </TouchableHighlight>
        )
    }
    


    
    return (        
        <SafeAreaView style={styles.container} >
            <Text title='Замовлення з поля' style={styles.text}> Замовлення з поля {props.route.params.title}  </Text>
            <FlatList              
            data={dataFilter}
            renderItem={renderOrders}
            keyExtractor={item => item.id.toString()}
            onRefresh={getOrders}
            refreshing={isLoading}
            
            />            
        
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        
    },
    text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,

    },
    costLineWrapper: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
    },
    orderClient: {
        height: 50,
        lineHeight: 50,
        width: 300,
        flex: 2,
        paddingLeft: 20,
    },
    orderItems: {
        height: 50,
        lineHeight: 50,
        width: 200,
        flex: 2,
    },
    costCategory: {
        height: 50,
        lineHeight: 50,
        flex: 4,
    },
    orderShipment: {
        height: 50,
        lineHeight: 50,
        flex: 3,
        paddingRight: 20,
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
})