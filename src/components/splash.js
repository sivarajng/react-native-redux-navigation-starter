/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class Splash extends Component {

    static navigationOptions = {
        title: 'SPLASH',
    };

    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        this.props.setDate('Home Screen');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    This is Splash Screen
        </Text>
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Home', {})}>
            <View>
                <Text style={styles.nav}>
                    Touch here to navigate to Home screen
                    
        </Text>
            </View>
        </TouchableWithoutFeedback>
                <Text style={styles.instructions}>
                To get started, edit src/components/splash.js
                    
        </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    nav: {
        textAlign: 'center',
        color: 'blue',
        fontSize:18,
        margin: 5,
        paddingBottom:18,
    },
});


export default connect(
    state => ({
        AppData: state.AppData,
    }),
    // dispatch => bindActionCreators(actions, dispatch)
        dispatch => Object.assign({ dispatch }, bindActionCreators(actions, dispatch))
)(Splash);