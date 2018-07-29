import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

function Button({iconName, onPress}){
    return(
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} color="white" size={80} />
        </TouchableOpacity>
    )
}

Button.propTypes = {
    iconName:PropTypes.string.isRequired,
    onPress:PropTypes.func.isRequired
}

export default Button;