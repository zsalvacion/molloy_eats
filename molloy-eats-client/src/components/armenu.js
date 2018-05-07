import React from 'react';
import '../css/armenu-3.css';
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag';

class ArMenu extends React.Component{

  constructor(props) {
      super(props);
      this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
      this.state = {

        qnty1EggOnARollWithBacon: 0,
        qnty2EggsOnARollWithBacon: 0,
        qntyCheeseOmelet: 0,
        qntyWesternOmelet: 0,

        qnty1EggOrEggWhite: 0,
        qnty2EggsOrEggWhite: 0,
        qntyBacon: 0,
        qntySausage: 0,
        qntyHam: 0,
        qntyHomeFries: 0,
        qntyHashBrown: 0,

        qntyBagel: 0,
        qntyWrap: 0,
        qntyToast1: 0,
        qntyToast2: 0,

        qntyPeppers: 0,
        qntyBroccoli: 0,
        qntyMushrooms: 0,
        qntySpinach: 0,
        qntyTomato: 0,
        qntyOnion: 0,

        qntyCheeseAmerican: 0,
        qntyCheeseSwiss: 0,
        qntyCheeseMozzarella: 0,
        qntyCheesePepperJack: 0,
        qntyCheeseCheddar: 0,
        qntyCheeseProvolone: 0,

        qntySingleBurger: 0,
        qntyDoubleBurger: 0,
        qntyTripleBurger: 0,
        qntyGrilledChickenBurger: 0,
        qntyTurkeyBurger: 0,
        qntyVeganBurger: 0,
        qntyGrilledCheese: 0,

        qntyCheeseQuesadilla: 0,
        qntyChickenQuesadilla: 0,
        qntyChickenTenders: 0,
        qntyMozzarellaMezzaluna: 0,

        qntyOnionRings: 0,
        qntySmallFries: 0,
        qntyLargeFries: 0,
        qntySmallSweetPotatoFries: 0,
        qntyLargeSweetPotatoFries: 0,

        qntyCedarCreek: 0,
        qntyCheeseDippers: 0,
        qntyChobaniYogurt: 0,
        qntyChobaniFlip: 0,
        qntyDippinStix: 0,
        qntyGuacamoleCup: 0,
        qntyHummusCup: 0,
        qntyKozyShack: 0,
        qntyTunatoGo: 0,
        qntyUncrustablePBJ: 0,

        qntyCoke: 0,
        qntyDrPepper: 0,
        qntyDasaniWater: 0,
        qntySprite: 0,
        qntyVitaminWater: 0,
        qntyFuze: 0,
        qntyPowerade: 0,
        
        totalPrice: 0.00,
        totalQuantity: 0
  }
}

  render() {
      return (
        <form>
          <img id="molloy-logo" src={require("../images/logo.jpg")} alt="Molloy Eats Logo"/>
          
          <h1>Anselma Room</h1>
          <nav className="topnav" id="myTopnav">
            <a href="/profile">Home</a>
            <a href="armenu-3.html#breakfast">Breakfast</a>
            <a href="armenu-3.html#burgers">Burgers</a>
            <a href="armenu-3.html#specials">Specials</a>
            <a href="armenu-3.html#onthego">On-The-Go</a>
            <a href="javascript:void(0);" style={{fontSize:'15px'}} className="icon">&#9776;</a>
          </nav>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <div className="table-container">
                
          <h1>Breakfast</h1>  
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
                <td><input type="number" name="qnty1EggOnARollWithBacon" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$2.99</td>
              </tr>
              <tr>
                <td>2 Eggs on a roll w/ bacon</td>
                <td><input type="number" name="qnty2EggsOnARollWithBacon" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$3.89</td>
              </tr>
              <tr>
                <td>Cheese Omelet</td>
                <td><input type="number" name="qntyCheeseOmelet" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$2.25</td>
              </tr>
              <tr>
                <td>Western Omelet</td>
                <td><input type="number" name="qntyWesternOmelet" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
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
                <td><input type="number" name="qnty1EggOrEggWhite" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.95</td>
              </tr>
              <tr>
                <td>2 Eggs Or Egg Whites</td>
                <td><input type="number" name="qnty2EggsOrEggWhite" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.75</td>
              </tr>
              <tr>
                <td>Bacon (2 Slices)</td>
                <td><input type="number" name="qntyBacon" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.50</td>
              </tr>
              <tr>
                <td>Sausage</td>
                <td><input type="number" name="qntySausage" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.25</td>
              </tr>
              <tr>
                <td>Ham</td>
                <td><input type="number" name="qntyHam" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.25</td>
              </tr>
              <tr>
                <td>Home Fries</td>
                <td><input type="number" name="qntyHomeFries" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.75</td>
              </tr>
              <tr>
                <td>Hash Brown</td>
                <td><input type="number" name="qntyHashBrown" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.75</td>
              </tr>
              <tr id="header">
            
                <th>Select Bread</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
             <tr>
                <td>Roll/Bagel</td>
                <td><input type="number" name="qntyBagel" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.75</td>
              </tr>
              <tr> 
                <td>Wrap</td>
                <td><input type="number" name="qntyWrap" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.25</td>
              </tr>
              <tr>
                <td>Toast (1 Slice)</td>
                <td><input type="number" name="qntyToast1" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Toast (2 Slices)</td>
                <td><input type="number" name="qntyToast2" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$1.25</td>
              </tr>
              <tr id="header">          
                <th>Select Toppings</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
              <tr>            
                <td>Peppers</td>
                <td><input type="number" name="qntyPeppers" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>             
                <td>Broccoli</td>
                <td><input type="number" name="qntyBroccoli" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>             
                <td>Mushrooms</td>
                <td><input type="number" name="qntyMushrooms" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>            
                <td>Spinach</td>
                <td><input type="number" name="qntySpinach" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>         
                <td>Tomato</td>
                <td><input type="number" name="qntyTomato" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>  
                <td>Onion</td>
                <td><input type="number" name="qntyOnion" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr id="header">        
                <th>Select Cheese</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
              <tr>              
                <td>American</td>
                <td><input type="number" name="qntyCheeseAmerican" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>              
                <td>Swiss</td>
                <td><input type="number" name="qntyCheeseSwiss" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Mozzarella</td>
                <td><input type="number" name="qntyCheeseMozzarella" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Pepper Jack</td>
                <td><input type="number" name="qntyCheesePepperJack" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Cheddar</td>
                <td><input type="number" name="qntyCheeseCheddar" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
              <tr>
                <td>Provolone</td>
                <td><input type="number" name="qntyCheeseProvolone" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$0.65</td>
              </tr>
            </tbody>
          </table>

            <h1>Burgers</h1>
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
                <td><input type="number" name="qntySingleBurger" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$3.99</td>
                </tr>
              <tr>
                
                <td>Double Burger</td>
                <td><input type="number" name="qntyDoubleBurger" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$5.99</td>
              </tr>
              <tr>
             
                <td>Triple Burger</td>
                <td><input type="number" name="qntyTripleBurger" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$6.99</td>
              </tr>
             <tr>
             
                <td>Grilled Chicken</td>
                <td><input type="number" name="qntyGrilledChickenBurger" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$5.99</td>
              </tr>
             <tr>
             
                <td>Turkey Burger</td>
                <td><input type="number" name="qntyTurkeyBurger" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$4.25</td>
              </tr>
             <tr>
            
                <td>Vegan Burger</td>
                <td><input type="number" name="qntyVeganBurger" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$4.45</td>
              </tr>
              <tr>
             
                <td>Grilled Cheese</td>
                <td><input type="number" name="qntyyGrilledCheese" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$3.45</td>
              </tr>
            </tbody>  
          </table>

            <h1>Grill Specials</h1>
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
                <td><input type="number" name="qntyCheeseQuesadilla" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$6.15</td>
                </tr>
                <tr>
                
                <td>Chicken Quesadilla</td>
                <td><input type="number" name="qntyChickenQuesadilla" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$6.65</td>
                </tr>
                <tr>
              
                <td>Chicken Tenders (3 pcs.)</td>
                <td><input type="number" name="qntyChickenTenders" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$5.15</td>
                </tr>
                <tr>
             
                <td>Mozzarella Mezzaluna</td>
                <td><input type="number" name="qntyMozzarellaMezzaluna" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
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
                <td><input type="number" name="qntyOnionRings" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$2.99</td>
              </tr>
              <tr>
               
                <td>Small Fries</td>
                <td><input type="number" name="qntySmallFries" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$2.09</td>
              </tr>
              <tr>
                <td>Large Fries</td>
                <td><input type="number" name="qntyLargeFries" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$2.79</td>
              </tr>
              <tr>
                <td>Small Sweet Potato Fries</td>
                <td><input type="number" name="qntySmallSweetPotatoFries" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$2.49</td>
              </tr>
            <tr>
            
                <td>Large Sweet Potato Fries</td>
                <td><input type="number" name="qntyLargeSweetPotatoFries" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                <td>$3.19</td>
              </tr>
          </tbody>
        </table>

          <h1>On-The-Go</h1>
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
              <td><input type="number" name="qntyCedarCreek" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$5.40</td>
            </tr>
            <tr>
             
              <td>Cheese Dippers</td>
              <td><input type="number" name="qntyCheeseDippers" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$1.00</td>
            </tr>
            <tr>

              <td>Chobani Yogurt</td>
              <td><input type="number" name="qntyChobaniYogurt" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$3.65</td>
            </tr>
            <tr>

              <td>Chobani Flip</td>
              <td><input type="number" name="qntyChobaniFlip" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$3.65</td>
            </tr>
            <tr>
             
              <td>Dippin Stix</td>
              <td><input type="number" name="qntyDippinStix" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$2.15</td>
            </tr>
            <tr>
              
              <td>Guacamole Cup</td>
              <td><input type="number" name="qntyGuacamoleCup" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$3.35</td>
            </tr>
            <tr>
              
              <td>Hummus Cup</td>
              <td><input type="number" name="qntyHummusCup" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$3.35</td>
            </tr>
            <tr>

              <td>Kozy Shack</td>
              <td><input type="number" name="qntyKozyShack" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$1.29</td>
            </tr> 
            <tr>

              <td>Tuna to Go</td>
              <td><input type="number" name="qntyTunatoGo" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
              <td>$3.99</td>
            </tr>
            <tr>
              
              <td>Uncrustable PB&amp;J</td>
              <td><input type="number" name="qntyUncrustablePBJ" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
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
                      <td><input type="number" name="qntyCoke" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                      <td>$2.00</td>
                    </tr>
                    <tr> 
                      <td>Dr.Pepper</td>
                      <td><input type="number" name="qntyDrPepper" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                      <td>$2.00</td>
                    </tr>
                    <tr>
                      <td>Dasani Water</td>
                      <td><input type="number" name="qntyDasaniWater" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                      <td>$3.25</td>
                    </tr>
                    <tr>
                      <td>Sprite</td>
                      <td><input type="number" name="qntySprite" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                      <td>$2.00</td>
                    </tr>
                    <tr>
                      <td>Vitamin Water</td>
                      <td><input type="number" name="qntyVitaminWater" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                      <td>$3.25</td>
                    </tr>
                    <tr>
                      <td>Fuze</td>
                      <td><input type="number" name="qntyFuze" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                      <td>$3.25</td>
                    </tr>
                    <tr>
                     
                      <td>Powerade</td>
                      <td><input type="number" name="qntyPowerade" onChange={(value) => this.onChangeQuantity(value)} defaultValue="0" min="0"/></td>
                      <td>$2.65</td>
                    </tr>
                  </tbody>
                </table>  
            </div>
            <p>Calculated Price: $<input type="number" name="price" id="price" value={this.state.totalPrice.toFixed(2)} defaultValue="0" readOnly/>
            Total Quantity: <input type="number" name="quantity" id="quantity" value={this.state.totalQuantity} defaultValue="0" readOnly/></p>

            <button onClick={this.handlePlaceOrder} type="button">Place Your Order</button>
          </form>
      );
    }
      componentDidMount(){
    document.title = "AR Menu"
  }
  async onChangeQuantity(e) {
    var quantityName = e.target.name;
    var quantityValue = parseInt(e.target.value);
    await this.setState({[quantityName]: quantityValue});
    var quantitySum = this.state.qnty1EggOnARollWithBacon + this.state.qnty2EggsOnARollWithBacon + this.state.qntyCheeseOmelet + this.state.qntyWesternOmelet +
                      this.state.qnty1EggOrEggWhite + this.state.qnty2EggsOrEggWhite + this.state.qntyBacon + this.state.qntySausage + this.state.qntyHam + this.state.qntyHomeFries +
                      this.state.qntyHashBrown + this.state.qntyBagel + this.state.qntyWrap + this.state.qntyToast1 + this.state.qntyToast2 + this.state.qntyPeppers + this.state.qntyBroccoli +
                      this.state.qntyMushrooms + this.state.qntySpinach + this.state.qntyTomato + this.state.qntyOnion + this.state.qntyCheeseAmerican + this.state.qntyCheeseSwiss +
                      this.state.qntyCheeseMozzarella + this.state.qntyCheesePepperJack + this.state.qntyCheeseCheddar + this.state.qntyCheeseProvolone +
                      this.state.qntySingleBurger + this.state.qntyDoubleBurger + this.state.qntyTripleBurger + this.state.qntyGrilledChickenBurger + this.state.qntyTurkeyBurger +
                      this.state.qntyVeganBurger + this.state.qntyGrilledCheese + this.state.qntyCheeseQuesadilla + this.state.qntyChickenQuesadilla + this.state.qntyChickenTenders +
                      this.state.qntyMozzarellaMezzaluna + this.state.qntyOnionRings + this.state.qntySmallFries + this.state.qntyLargeFries + this.state.qntySmallSweetPotatoFries +
                      this.state.qntyLargeSweetPotatoFries + this.state.qntyCedarCreek + this.state.qntyCheeseDippers + this.state.qntyChobaniYogurt + this.state.qntyChobaniFlip +
                      this.state.qntyDippinStix + this.state.qntyGuacamoleCup + this.state.qntyHummusCup + this.state.qntyKozyShack + this.state.qntyTunatoGo + this.state.qntyUncrustablePBJ +
                      this.state.qntyCoke + this.state.qntyDrPepper + this.state.qntyDasaniWater + this.state.qntySprite + this.state.qntyVitaminWater + this.state.qntyFuze + this.state.qntyPowerade;

    this.setState({totalQuantity: quantitySum});
    this.calulateTotal();
  }

  calulateTotal() {
    var totalBreakfast =  (this.state.qnty1EggOnARollWithBacon * price1EggOnARollWithBacon) +
                          (this.state.qnty2EggsOnARollWithBacon * price2EggsOnARollWithBacon) +
                          (this.state.qntyCheeseOmelet * priceCheeseOmelet) +
                          (this.state.qntyWesternOmelet * priceWesternOmelet) +
                          (this.state.qnty1EggOrEggWhite * price1EggOrEggWhite) +
                          (this.state.qnty2EggsOrEggWhite * price2EggsOrEggWhite) +
                          (this.state.qntyBacon * priceBacon) +
                          (this.state.qntySausage * priceSausage) +
                          (this.state.qntyHam * priceHam) +
                          (this.state.qntyHomeFries * priceHomeFries) +
                          (this.state.qntyHashBrown * priceHashBrown) +
                          (this.state.qntyBagel * priceBagel) +
                          (this.state.qntyWrap *  priceWrap) +
                          (this.state.qntyToast1 * priceToast1) +
                          (this.state.qntyToast2 * priceToast2) +
                          (this.state.qntyPeppers * pricePeppers) +
                          (this.state.qntyBroccoli * priceBroccoli) +
                          (this.state.qntyMushrooms * priceMushrooms) +
                          (this.state.qntySpinach * priceSpinach) +
                          (this.state.qntyTomato * priceTomato) +
                          (this.state.qntyOnion * priceOnion) +
                          (this.state.qntyCheeseAmerican * priceCheeseAmerican) +
                          (this.state.qntyCheeseSwiss * priceCheeseSwiss) +
                          (this.state.qntyCheeseMozzarella * priceCheeseMozzarella) +
                          (this.state.qntyCheesePepperJack * priceCheesePepperJack) +
                          (this.state.qntyCheeseCheddar * priceCheeseCheddar) +
                          (this.state.qntyCheeseProvolone * priceCheeseProvolone);

    var totalBurgers =  (this.state.qntySingleBurger * priceSingleBurger) +
                          (this.state.qntyDoubleBurger * priceDoubleBurger) +
                          (this.state.qntyTripleBurger * priceTripleBurger) +
                          (this.state.qntyGrilledChickenBurger * priceGrilledChickenBurger) +
                          (this.state.qntyTurkeyBurger * priceTurkeyBurger) +
                          (this.state.qntyVeganBurger * priceVeganBurger) +
                          (this.state.qntyGrilledCheese * priceGrilledCheese);

    var totalGrill =  (this.state.qntyCheeseQuesadilla * priceCheeseQuesadilla) +
                          (this.state.qntyChickenQuesadilla * priceChickenQuesadilla) +
                          (this.state.qntyChickenTenders * priceChickenTenders) +
                          (this.state.qntyMozzarellaMezzaluna * priceMozzarellaMezzaluna) +
                          (this.state.qntyOnionRings * priceOnionRings) +
                          (this.state.qntySmallFries * priceSmallFries) +
                          (this.state.qntyLargeFries * priceLargeFries) +
                          (this.state.qntySmallSweetPotatoFries * priceSmallSweetPotatoFries) +
                          (this.state.qntyLargeSweetPotatoFries * priceLargeSweetPotatoFries);

    var totalOnTheGo =  (this.state.qntyCedarCreek * priceCedarCreek) +
                          (this.state.qntyCheeseDippers * priceCheeseDippers) +
                          (this.state.qntyChobaniYogurt * priceChobaniYogurt) +
                          (this.state.qntyChobaniFlip * priceChobaniFlip) +
                          (this.state.qntyDippinStix * priceDippinStix) +
                          (this.state.qntyGuacamoleCup * priceGuacamoleCup) +
                          (this.state.qntyHummusCup * priceHummusCup) +
                          (this.state.qntyKozyShack * priceKozyShack) +
                          (this.state.qntyTunatoGo * priceTunatoGo) +
                          (this.state.qntyUncrustablePBJ * priceUncrustablePBJ) +
                          (this.state.qntyCoke * priceCoke) +
                          (this.state.qntyDrPepper *  priceDrPepper) +
                          (this.state.qntyDasaniWater * priceDasaniWater) +
                          (this.state.qntySprite * priceSprite) +
                          (this.state.qntyVitaminWater * priceVitaminWater) +
                          (this.state.qntyFuze * priceFuze) +
                          (this.state.qntyPowerade * pricePowerade);

    var priceSum = totalBreakfast + totalBurgers + totalGrill + totalOnTheGo;
    this.setState({totalPrice: priceSum});
  }

  async handlePlaceOrder(){
    var result = await this.props.placeOrder(this.state.totalPrice, this.state.totalQuantity); 
    alert("Order Has Been Placed"); 
  };
}

export default graphql(
  gql`
    mutation placeOrder($Price: Float!, $Quantity: Int!) {
      placeOrder(Price: $Price, Quantity: $Quantity) {
        token
        user
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      placeOrder: ( Price, Quantity ) => mutate({ variables: {Price, Quantity} }),
    }),
  },
)(ArMenu);

//Breakfast Items
const price1EggOnARollWithBacon = 2.99;
const price2EggsOnARollWithBacon = 3.89;
const priceCheeseOmelet = 2.25;
const priceWesternOmelet = 4.25;

const price1EggOrEggWhite = 0.95;
const price2EggsOrEggWhite = 1.75;
const priceBacon = 1.50;
const priceSausage = 1.25;
const priceHam = 1.25;
const priceHomeFries = 1.75;
const priceHashBrown = 1.75;

const priceBagel = 1.75;
const priceWrap = 1.25;
const priceToast1 = 0.65;
const priceToast2 = 1.25;

const pricePeppers = 0.65;
const priceBroccoli = 0.65;
const priceMushrooms = 0.65;
const priceSpinach = 0.65;
const priceTomato = 0.65;
const priceOnion = 0.65;

const priceCheeseAmerican = 0.65;
const priceCheeseSwiss = 0.65;
const priceCheeseMozzarella = 0.65;
const priceCheesePepperJack = 0.65;
const priceCheeseCheddar = 0.65;
const priceCheeseProvolone = 0.65;
//Burger Items
const priceSingleBurger = 3.99;
const priceDoubleBurger = 5.99;
const priceTripleBurger = 6.99;
const priceGrilledChickenBurger = 5.99;
const priceTurkeyBurger = 4.25;
const priceVeganBurger = 4.45;
const priceGrilledCheese = 3.45;
//Grill Items
const priceCheeseQuesadilla = 6.15;
const priceChickenQuesadilla = 6.65;
const priceChickenTenders = 5.15;
const priceMozzarellaMezzaluna = 4.00;

const priceOnionRings = 2.99;
const priceSmallFries = 2.09;
const priceLargeFries = 2.79;
const priceSmallSweetPotatoFries = 2.49;
const priceLargeSweetPotatoFries = 3.19;
//On-the-Go Items
const priceCedarCreek = 5.40;
const priceCheeseDippers = 1.00;
const priceChobaniYogurt = 3.65;
const priceChobaniFlip = 3.65;
const priceDippinStix = 2.15;
const priceGuacamoleCup = 3.35;
const priceHummusCup = 3.35;
const priceKozyShack = 1.29;
const priceTunatoGo = 3.99;
const priceUncrustablePBJ = 2.15;

const priceCoke = 2.00;
const priceDrPepper = 2.00;
const priceDasaniWater = 3.25;
const priceSprite = 2.00;
const priceVitaminWater = 3.25;
const priceFuze = 3.25;
const pricePowerade = 2.65;  