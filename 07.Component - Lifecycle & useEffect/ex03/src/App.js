import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
                <Clock
                    title={`ex03: Clock Component I:`}
                    hours={'00'}
                    minutes={'00'}
                    seconds={'00'} />
        )
    
    }
}