import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Button from '../Button';

function timeFormat(time){
    let min = Math.floor(time/60);
    time = time - min*60;
    let sec = parseInt(time%60,10);
    return `${min<10? `0${min}` : min}:${sec<10?`0${sec}`:sec}`
}

class Timer extends Component{
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if(currentProps.isPlaying===false && nextProps.isPlaying===true){
            const timerInterval = setInterval(()=>{
                currentProps.addSecond()
            },1000);
            this.setState({
                timerInterval
            })
        }else if(currentProps.isPlaying===true && nextProps.isPlaying===false){
            clearInterval(this.state.timerInterval);
        }
    }

    render(){
        const {isPlaying,elapsedTime,maxTime,timerStart,timerRestart,addSecond } = this.props;
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/> 
                <View style={styles.upper}>
                    <Text style={styles.timer}>{timeFormat(maxTime-elapsedTime)}</Text>
                </View>
                
                <View style={styles.lower}>
                    {isPlaying ? 
                        <Button iconName={"stop-circle"} onPress={timerRestart}/>
                        : 
                        <Button iconName={"play-circle"} onPress={timerStart}/>
                    }
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