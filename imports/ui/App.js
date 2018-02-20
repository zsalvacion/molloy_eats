/**
 * The top level react component
 */
import React, { Component } from 'react';
import AccountsContainer from './accountsContainer'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AccountsContainer />
        )
    }
}
