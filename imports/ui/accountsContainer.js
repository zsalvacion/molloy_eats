import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Account from './account'

/**
 * This React component is responsible for querying Apollo for the posts
 * and passing the results to the child Post components for rendering
 */
class Accounts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let accounts = <div></div>
        if (this.props.data.accounts && this.props.data.accounts instanceof Array) {
            accounts = (
                <div>
                    {this.props.data.accounts.map(function(account) {
                        return <Account key={account.id} account={account} />;
                    })}
                </div>
            )
        }

        return accounts;
    }
}

// Posts requires props with a data attribute of an array of posts
Accounts.propTypes = {
    data: PropTypes.shape({
        accounts: PropTypes.array
    }).isRequired
};

// Define the graphql query to retrieve the posts and the desired attributes
const allAccounts = gql`
  query AccountsForDisplay {
    accounts {
      id,
      username,
      password
    }
  }
`;

// Use the graphql container to run the allPosts query and pass the results to PostsContainer
export default AccountsContainer = graphql(allAccounts, {
    options: {pollInterval: 5000}
})(Accounts);
