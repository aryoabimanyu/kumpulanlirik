import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { StackActions } from '@react-navigation/native';
import {set} from 'react-native-reanimated'

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={};
}

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'));
        }, 2000);
    }

    render() {
        return (

            <View style={{flex: 1, }}>
                <ImageBackground source={require('../img/abimanew_.png')} style={{ flex: 1, }}>
            </ImageBackground>
            </View>
            
    
     )
    }
}
    
export default SplashScreen;
    //home
