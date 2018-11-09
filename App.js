import React, {Component} from 'react';
import SplashScreen from "./src/screens/splashScreen/splashView";
import Navigation from './src/config/router/routerContainer';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './src/reducers/reducer';
import { createLogger} from 'redux-logger'


const client = axios.create({
    baseURL: 'http://192.168.1.23:8000',
    responseType: 'json'
});

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client), logger));

type Props = {};
export default class App extends Component<Props> {

    constructor() {
        super();
        this.state = {screen: <SplashScreen/>}
    }

    render() {
        return (
            <Provider store={store}>
                {this.state.screen}
            </Provider>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => (
                {screen: <Navigation/>}
            ))
        }, 100)
    };
}
