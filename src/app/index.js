import React, { Component } from "react";
import { BackHandler } from "react-native";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import AppNavigator from "./router";
import getStore from "../store";

const addListener = createReduxBoundAddListener("root");

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

@connect(state => ({
    nav: state.nav
}))

class AppWithNavigationState extends Component {

    constructor(props) {
        super(props);
        this.state = { prevRoute: 'Splash' };
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener
                })}
            />
        );
    }
}

const store = getStore(navReducer);

export default App = () => {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}