import React from 'react';
import { Touchable } from 'react-native';
import {View, Text, StyleSheet} from 'react-native'

const Tasks = (props) => {

    return (
        <View style={styles.items}>

            <View style={styles.itemLeft}>

                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}> {props.text} </Text>

            </View>

            <View style={style.circular}></View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        aligniteams: 'center',
        justifyContent: 'space-between',
        marginBottom: 20, 
      },
    
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flewWrap: 'wrap',
      },
    
    square: {
        width: 24,
        heaight: 24,
        backgroundColor: '55BCF6',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
      },
    
    itemText: {
        maxWidth: '80%',
      },
    
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
      },
    

});

export default Tasks;