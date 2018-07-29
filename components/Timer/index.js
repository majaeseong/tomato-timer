import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators } from '../../reducer';
import Timer from './presenter';

function mapStateToProps(state){
    const{isPlaying,elapsedTime,maxTime} = state;
    return{
        isPlaying,elapsedTime,maxTime
    }
}

function mapDispatchToProps(dispatch){
                //action to Reducer  
    return{
        timerStart :  bindActionCreators(actionCreators.timerStart,dispatch),
        timerRestart : bindActionCreators(actionCreators.timerRestart, dispatch),
        addSecond : bindActionCreators(actionCreators.addSecond, dispatch )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);