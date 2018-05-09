import React from 'react';
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag';

class OrderComplete extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackToHomepage = this.handleBackToHomepage.bind(this);
    this.state = {
      deliveryTime: 'X:XX'
    };
  }
  render() {
    let rows;
    if(!this.props.data.loading) {
      console.log(this.props.data.getOrder[0]);
      rows = this.props.data.getOrder.map(order => {
      return <OrderRow key = {order.id} data = {order}/>
      })
    }
    return(
      <div>
        <h1>Thank You! Your Order has been Submitted.</h1>
          <h2>It will arrive at { this.state.deliveryTime }</h2>
          <table>
            <thead>
              <tr id="header">
                <th>Order ID</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Store Name</th>
                <th>Time</th>
              </tr>
          </thead>
            < tbody > 
              { rows } 
            < /tbody>
        </table>
        <button onClick={this.handleBackToHomepage} type="button">Back to Homepage</button>
      </div>
    );
  }
  
  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading) {
      this.setState({ deliveryTime: nextProps.data.getOrder[nextProps.data.getOrder.length - 1].Time });
    }

    return null;
  };

  handleBackToHomepage(){
    this.props.history.push("/profile");
  };

}

const OrderRow = (orders) => {
  return (
    <tr>
      <td>
        { orders.data.id }
      </td>
      <td>
        { "$" + orders.data.Price }
      </td>
      <td>
        { orders.data.Quantity }
      </td>
      <td>
        { orders.data.StoreName }
      </td>
      <td>
        { orders.data.Time }
      </td>
    </tr>
  );
}
export default graphql(
  gql`
    query 
      {   
        getOrder
         { 
          id
          Price
          Quantity
          StoreName
          Time
          Username
        }
      }
  `,
  { 
    pollInterval: 50
  }
)(OrderComplete);