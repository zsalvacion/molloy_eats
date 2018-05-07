import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag';

class Orders extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username:'',
          password:''
        };
    }


    render() {
        return (
            <div>
                 <table>
            <thead>
              <tr id="header">
                <th>Store Name</th>
                <th>Total</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Egg Or Egg White</td>
                <td><input type="number" name="qnty1EggOrEggWhite" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.95</td>
              </tr>
            </tbody>
          </table>
            </div>
        )
    }

}

export default graphql(
  gql`
    mutation getOrder($Username: String!, $Password: String!) {
      getOrder(Username: $Username, Password: $Password) {
        id
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      getOrder: ( Username, Password ) => mutate({ variables: {Username, Password} }),
    }),
  },
)(Orders);