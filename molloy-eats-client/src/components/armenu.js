import React from 'react';
import '../css/armenu-3.css';
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag';
import arMenuItems from '../menu_items/arMenuItems.js';

class ArMenu extends React.Component{

  constructor(props) {
      super(props);
      this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
      this.state = {       
        totalPrice: 0.00,
        totalQuantity: 0,
        deliveryTimeHrs: '1',
        deliveryTimeMins: '00',
        deliveryTimeAmOrPm: 'AM'
  }
}

  render() {
      return (
        <form>         
          <h1>Anselma Room</h1>
          <nav className="topnav" id="myTopnav">
            <a href="/profile">Home</a>
            <a href="armenu#breakfast">Breakfast</a>
            <a href="armenu#burgers">Burgers</a>
            <a href="armenu#specials">Specials</a>
            <a href="armenu#onthego">On-The-Go</a>
            <a href="javascript:void(0);" style={{fontSize:'15px'}} className="icon">&#9776;</a>
          </nav>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <div className="table-container">
                
          <h1 id="breakfast">Breakfast</h1>  
            <h2>Breakfast Deals</h2>
          
          <table>
            <thead>
              <tr id="header">
                <th>Estimate item</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Egg on a roll w/ bacon</td>
                <td><input type="number" name="OneEggOnARollWithBacon" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$2.99</td>
              </tr>
              <tr>
                <td>2 Eggs on a roll w/ bacon</td>
                <td><input type="number" name="TwoEggsOnARollWithBacon" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$3.89</td>
              </tr>
              <tr>
                <td>Cheese Omelet</td>
                <td><input type="number" name="CheeseOmelet" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$2.25</td>
              </tr>
              <tr>
                <td>Western Omelet</td>
                <td><input type="number" name="WesternOmelet" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$4.25</td>
              </tr>
            </tbody>
          </table>
          <h2>Create Your Own Breakfast</h2>
          <table>
            <thead>
              <tr id="header">
                <th>Main Item</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Egg Or Egg White</td>
                <td><input type="number" name="OneEggOrEggWhite" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.95</td>
              </tr>
              <tr>
                <td>2 Eggs Or Egg Whites</td>
                <td><input type="number" name="TwoEggsOrEggWhite" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.75</td>
              </tr>
              <tr>
                <td>Bacon (2 Slices)</td>
                <td><input type="number" name="Bacon" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.50</td>
              </tr>
              <tr>
                <td>Sausage</td>
                <td><input type="number" name="Sausage" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.25</td>
              </tr>
              <tr>
                <td>Ham</td>
                <td><input type="number" name="Ham" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.25</td>
              </tr>
              <tr>
                <td>Home Fries</td>
                <td><input type="number" name="HomeFries" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.75</td>
              </tr>
              <tr>
                <td>Hash Brown</td>
                <td><input type="number" name="HashBrown" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.75</td>
              </tr>
              <tr id="header">
            
                <th>Select Bread</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
             <tr>
                <td>Roll/Bagel</td>
                <td><input type="number" name="Bagel" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.75</td>
              </tr>
              <tr> 
                <td>Wrap</td>
                <td><input type="number" name="Wrap" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.25</td>
              </tr>
              <tr>
                <td>Toast (1 Slice)</td>
                <td><input type="number" name="Toast1" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Toast (2 Slices)</td>
                <td><input type="number" name="Toast2" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$1.25</td>
              </tr>
              <tr id="header">          
                <th>Select Toppings</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
              <tr>            
                <td>Peppers</td>
                <td><input type="number" name="Peppers" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>             
                <td>Broccoli</td>
                <td><input type="number" name="Broccoli" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>             
                <td>Mushrooms</td>
                <td><input type="number" name="Mushrooms" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>            
                <td>Spinach</td>
                <td><input type="number" name="Spinach" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>         
                <td>Tomato</td>
                <td><input type="number" name="Tomato" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>  
                <td>Onion</td>
                <td><input type="number" name="Onion" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr id="header">        
                <th>Select Cheese</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
              <tr>              
                <td>American</td>
                <td><input type="number" name="CheeseAmerican" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>              
                <td>Swiss</td>
                <td><input type="number" name="CheeseSwiss" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Mozzarella</td>
                <td><input type="number" name="CheeseMozzarella" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Pepper Jack</td>
                <td><input type="number" name="CheesePepperJack" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Cheddar</td>
                <td><input type="number" name="CheeseCheddar" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Provolone</td>
                <td><input type="number" name="CheeseProvolone" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$0.65</td>
              </tr>
            </tbody>
          </table>

            <h1 id="burgers">Burgers</h1>
            <h2>Burger Choice: Includes Lettuce, Tomato, &amp; Cheese</h2>
            <table>
              <thead>
                <tr id="header"> 
                <th>Select Item</th>
                <th>Quantity</th>
                <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
              
                <td>Single Burger</td>
                <td><input type="number" name="SingleBurger" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$3.99</td>
                </tr>
              <tr>
                
                <td>Double Burger</td>
                <td><input type="number" name="DoubleBurger" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$5.99</td>
              </tr>
              <tr>
             
                <td>Triple Burger</td>
                <td><input type="number" name="TripleBurger" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$6.99</td>
              </tr>
             <tr>
             
                <td>Grilled Chicken</td>
                <td><input type="number" name="GrilledChickenBurger" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$5.99</td>
              </tr>
             <tr>
             
                <td>Turkey Burger</td>
                <td><input type="number" name="TurkeyBurger" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$4.25</td>
              </tr>
             <tr>
            
                <td>Vegan Burger</td>
                <td><input type="number" name="VeganBurger" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$4.45</td>
              </tr>
              <tr>
             
                <td>Grilled Cheese</td>
                <td><input type="number" name="yGrilledCheese" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$3.45</td>
              </tr>
            </tbody>  
          </table>

            <h1 id="specials">Grill Specials</h1>
              <h2>Specials</h2>
            <table>
              <thead>
                <tr id="header">
               
                <th>Select Item</th>
                <th>Quantity</th>
                <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
               
                <td>Cheese Quesadilla</td>
                <td><input type="number" name="CheeseQuesadilla" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$6.15</td>
                </tr>
                <tr>
                
                <td>Chicken Quesadilla</td>
                <td><input type="number" name="ChickenQuesadilla" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$6.65</td>
                </tr>
                <tr>
              
                <td>Chicken Tenders (3 pcs.)</td>
                <td><input type="number" name="ChickenTenders" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$5.15</td>
                </tr>
                <tr>
             
                <td>Mozzarella Mezzaluna</td>
                <td><input type="number" name="MozzarellaMezzaluna" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$4.00</td>
                </tr>
              </tbody>  
            </table>

          <h2>Sides</h2>
          <table>
            <thead>
              <tr id="header">
            
                <th>Select Item</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
               
                <td>Onion Rings</td>
                <td><input type="number" name="OnionRings" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$2.99</td>
              </tr>
              <tr>
               
                <td>Small Fries</td>
                <td><input type="number" name="SmallFries" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$2.09</td>
              </tr>
              <tr>
                <td>Large Fries</td>
                <td><input type="number" name="LargeFries" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$2.79</td>
              </tr>
              <tr>
                <td>Small Sweet Potato Fries</td>
                <td><input type="number" name="SmallSweetPotatoFries" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$2.49</td>
              </tr>
            <tr>
            
                <td>Large Sweet Potato Fries</td>
                <td><input type="number" name="LargeSweetPotatoFries" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                <td>$3.19</td>
              </tr>
          </tbody>
        </table>

          <h1 id="onthego">On-The-Go</h1>
            <h2>Refridgerated Snacks</h2>
        <table>
          <thead>
            <tr id="header">
        
            <th>Select Item</th>
            <th>Quantity</th>
            <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>Cedar Creek</td>
              <td><input type="number" name="CedarCreek" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$5.40</td>
            </tr>
            <tr>
             
              <td>Cheese Dippers</td>
              <td><input type="number" name="CheeseDippers" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$1.00</td>
            </tr>
            <tr>

              <td>Chobani Yogurt</td>
              <td><input type="number" name="ChobaniYogurt" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$3.65</td>
            </tr>
            <tr>

              <td>Chobani Flip</td>
              <td><input type="number" name="ChobaniFlip" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$3.65</td>
            </tr>
            <tr>
             
              <td>Dippin Stix</td>
              <td><input type="number" name="DippinStix" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$2.15</td>
            </tr>
            <tr>
              
              <td>Guacamole Cup</td>
              <td><input type="number" name="GuacamoleCup" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$3.35</td>
            </tr>
            <tr>
              
              <td>Hummus Cup</td>
              <td><input type="number" name="HummusCup" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$3.35</td>
            </tr>
            <tr>

              <td>Kozy Shack</td>
              <td><input type="number" name="KozyShack" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$1.29</td>
            </tr> 
            <tr>

              <td>Tuna to Go</td>
              <td><input type="number" name="TunatoGo" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$3.99</td>
            </tr>
            <tr>
              
              <td>Uncrustable PB&amp;J</td>
              <td><input type="number" name="UncrustablePBJ" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
              <td>$2.15</td>
            </tr>
          </tbody>
        </table>

                <h2>Drinks</h2>
                <table>
                  <thead>
                    <tr id="header">
                      <th>Select Item</th>
                      <th>Quantity</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Coke</td>
                      <td><input type="number" name="Coke" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                      <td>$2.00</td>
                    </tr>
                    <tr> 
                      <td>Dr.Pepper</td>
                      <td><input type="number" name="DrPepper" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                      <td>$2.00</td>
                    </tr>
                    <tr>
                      <td>Dasani Water</td>
                      <td><input type="number" name="DasaniWater" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                      <td>$3.25</td>
                    </tr>
                    <tr>
                      <td>Sprite</td>
                      <td><input type="number" name="Sprite" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                      <td>$2.00</td>
                    </tr>
                    <tr>
                      <td>Vitamin Water</td>
                      <td><input type="number" name="VitaminWater" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                      <td>$3.25</td>
                    </tr>
                    <tr>
                      <td>Fuze</td>
                      <td><input type="number" name="Fuze" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                      <td>$3.25</td>
                    </tr>
                    <tr>
                     
                      <td>Powerade</td>
                      <td><input type="number" name="Powerade" onChange={(value) => this.onChangeQuantity(value)} min="0"/></td>
                      <td>$2.65</td>
                    </tr>
                  </tbody>
                </table>  
            </div>
            <p>Calculated Price: $<input type="number" name="price" id="price" value={this.state.totalPrice.toFixed(2)} readOnly/>
            Total Quantity: <input type="number" name="quantity" id="quantity" value={this.state.totalQuantity} readOnly/></p>
            <label>Select Desired Delivery Time</label>
            <select onChange={(value) => this.onChangeHr(value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>:
            <select onChange={(value) => this.onChangeMin(value)}>
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
            <select onChange={(value) => this.onChangeAMorPM(value)}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
            <br />
            <button onClick={this.handlePlaceOrder} type="button">Place Your Order</button>
          </form>
      );
    }
      componentDidMount(){
    document.title = "AR Menu"
  }

  onChangeQuantity(e) {
    arMenuItems[e.target.name].qnty = parseInt(e.target.value);
    this.setState({totalQuantity: arMenuItems.calculateTotalQuantity()});
    this.setState({totalPrice: arMenuItems.calculateTotalPrice()});
  }

  onChangeHr(e)
  {
    this.setState({deliveryTimeHrs: e.target.value});
  }

  onChangeMin(e)
  {
    this.setState({deliveryTimeMins: e.target.value});
  }

  onChangeAMorPM(e)
  {
    this.setState({deliveryTimeAmOrPm: e.target.value});
  }

  async handlePlaceOrder(){
    for (var prop in arMenuItems) {
      if (arMenuItems.hasOwnProperty(prop) && arMenuItems[prop].qnty > 0) {
          var deliverTime = this.state.deliveryTimeHrs + ":" + this.state.deliveryTimeMins + this.state.deliveryTimeAmOrPm;
          this.props.placeOrder("Anselma Room", arMenuItems[prop].price, arMenuItems[prop].qnty, arMenuItems[prop].id, deliverTime);
      }
    } 
    alert("Order Has Been Placed");
    this.props.history.push("/ordercomplete");
  };
}

export default graphql(
  gql`
    mutation placeOrder($StoreName: String!, $Price: Float!, $Quantity: Int! , $ItemID: Int!, $Time: String!) {
      placeOrder(StoreName: $StoreName, Price: $Price, Quantity: $Quantity, ItemID: $ItemID, Time: $Time) {
          ItemID
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      placeOrder: (StoreName, Price, Quantity, ItemID, Time) => mutate({ variables: {StoreName, Price, Quantity, ItemID, Time} }),
    }),
  },
)(ArMenu);
