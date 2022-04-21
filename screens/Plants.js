import React, { useContext, useState } from 'react'
import { Text, StyleSheet, TouchableHighlight, View, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'




export default function PlantsScreen (props)  {

    const [isSelected, setSelection] = useState(false);

    const dataOrders = props.route.params.data


    function renderPlants ({item}) {              
        return (
            <TouchableHighlight
               // onPress={() => props.navigation.navigate('Рослини',  { title: props.route.params.title, data: dataFilter })}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
            <View style={styles.costLineWrapper}>
                <Text style={styles.plantName}>{item.name}</Text>           
                <Text style={styles.characteristics}>{item.characteristics}</Text>
                <Text style={styles.quantity}> {item.quantity}шт</Text> 
            <TouchableHighlight style={styles.button} >
                <Text style={styles.statusDig}  >Готово{item.statusDig}</Text> 
            </TouchableHighlight>
            </View>
            </TouchableHighlight>
        )
    } 

    const fild = props.route.params.title
    const clientName = props.route.params.clientName

    const plantOrders = []
   // let clientName
    
    dataOrders.filter(order => {     
        if (clientName == order.nameClient) {
            let plantPlace 
            for (let i = 0; i < order.orderItems.length; i++) {
                plantPlace = order.orderItems[i].placing           
                if (plantPlace == fild ) {           
                        return plantOrders.push(order.orderItems[i])
                    } 
           }     
        }
           
    })
   //console.log(dataOrders)


    return (
        <SafeAreaView>         
            <Text style={styles.text}> Замовлення {props.route.params.clientName} з поля {props.route.params.title} </Text>
            <FlatList              
            data={plantOrders}
            renderItem={renderPlants}
            keyExtractor={item => item.id.toString()}
            
            
            />
        </SafeAreaView>
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
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 14,
    },
    costLineWrapper: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        
                
    },
    plantName: {
        height: 50,
        width: 100,
        flex: 3,
        paddingLeft: 10,
        textAlignVertical: 'center',
        
    },
    orderItems: {
        height: 50,
        lineHeight: 50,
        width: 200,
        flex: 2,
    },
    button: {
        marginRight: 5,
        borderRadius: 3,
        textAlign: "center",
        backgroundColor: "green",
        minWidth: "10%",
        textAlignVertical: 'center',
        margin: 2

    },
    characteristics: {
        height: 50,
        flex: 3,
        textAlignVertical: 'center',

    },    
    quantity: {
        height: 50,
        flex: 1,
        textAlignVertical: 'center',

    },
    statusDig: {
        height: 50,
        flex: 2,
        textAlignVertical: 'center',
        fontSize: 12,
        margin: 5

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