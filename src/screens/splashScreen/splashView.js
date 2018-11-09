import React, {Component} from 'react';
import {Image, Text, View} from "react-native";
import styles from './splashStyle';

export default class SplashView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/img/logo.png')} style={styles.image}/>
                <Text style={{textAlign: 'center'}} >{'\n'}present{'\n\n'}</Text>
                <Text style={styles.text} >Campus Life</Text>
            </View>
        );
    }
};


