import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Button from '../Button';

class Timer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <View style={styles.upper}>
                    <Text style={styles.timer}>24:00</Text>
                </View>
                
                <View style={styles.lower}>
                    <Button iconName={"play-circle"} onPress={()=>{alert('play')}}/>
                    <Button iconName={"stop-circle"} onPress={()=>{alert('stop')}}/>
                </View>
            </View>
        )
    }
}

export default Timer;

const styles=  StyleSheet.create({
    container:{
        backgroundColor:'#CE0B24',
        flex:1   
    },
    upper:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    lower:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    timer:{
        color:'white',
        fontSize:120,
        fontWeight:'100'
    }
})