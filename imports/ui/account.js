import React, { Component, PropTypes } from 'react';

export default class Account extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{"Username: " + this.props.account.username + " " + "Password: " + this.props.account.password}</div>
        )
    }
}

// Post requires props with a post attribute with a content attribute of type string
Account.propTypes = {
    account: PropTypes.shape({
        username: PropTypes.string
    }).isRequired
};
