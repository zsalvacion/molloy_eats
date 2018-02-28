import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import Login from '/imports/components/Login';
import Register from '/imports/components/Register'

Meteor.startup(() => {
	render(<Login />, document.getElementById('login'))
});

