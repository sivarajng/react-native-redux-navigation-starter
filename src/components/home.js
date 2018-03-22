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
    View
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

class Home extends Component {

    static navigationOptions = {
        title: 'HOME',
    };

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    This is {this.props.title}
        </Text>
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
});


export default connect(
    state => ({
        title: state.AppData.title,
    }),
    dispatch => bindActionCreators(actions, dispatch)
    // dispatch => Object.assign({ dispatch }, bindActionCreators(actions, dispatch))
)(Home);