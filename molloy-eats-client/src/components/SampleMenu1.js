import React from 'react';
import { Link } from 'react-router-dom';

class AR_Menu extends React.Component{

  render() {
      return (
        <div>
            <head>
              <title>AR Menu</title>
              <link type="text/css" rel="stylesheet" href="styles/armenu-3.css"></link>
              <script src="menu-3.js"></script>
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            </head>

            <body>
              <img id="molloy-logo" src="images/logo.jpg" alt="Molloy Eats Logo"/> 
              <h1>Anselma Room</h1>
              <nav>
                <ul id="nav-bar">
                  <li class="tab"><a href="armenu.html#breakfast">Breakfast</a></li>
                  <li class="tab"><a href="armenu.html#burgers">Burgers</a></li>
                  <li class="tab"><a href="armenu.html#specials">Specials</a></li>
                  <li class="tab"><a href="armenu.html#sandwich">Sandwiches</a></li>
                  <li class="tab"><a href="armenu.html#onthego">On-The-Go</a></li>
                </ul>

              </nav>
              <div id="mySidenav" class="sidenav">
                  <li><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a></li>
                  <li><a href="armenu-3.html#breakfast">Breakfast</a></li>
                  <li><a href="armenu-3.html#burgers">Burgers</a></li>
                  <li><a href="armenu-3.html#specials">Specials</a></li>
                  <li><a href="armenu-3.html#onthego">On-The-Go</a></li>
              </div>

              <div class="currentOrder">
                    <h3>Your Order</h3>
                    <div>
                    <p class="orderPreview"></p>
                    <ul id="list">
                    </ul>
                    </div>
                  </div>
              <span id="nav_button" onclick="openNav()">Menu</span>
              <div id="main">
                ...
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-8">
                    FORM STARTS HERE 
                    <form action="" method="get" id="myForm" name="myForm">
                      <h4>Menu</h4>
                      <div><p class="menuDownload"></p></div>
                      <div class="row">
                        <div class="col-md-12">
                          <hr/>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-5">
                          <fieldset class="form-group">
                            <label for="quantity">Quantity</label>
                            <input type="text" class="form-control" id="quantity" name="Quantity" value="1"></input>
                          </fieldset>
                        </div>
                        <div class="col-md-5">
                          <button id="orderWindow" type="Add" class="btn btn-primary orderButton">Add to Order</button>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <hr></hr> 
                        </div>
                      </div>

                      <fieldset class="form-group">
                        <label for="Name">Name</label>
                        <input type="text" class="form-control" id="name" required></input>
                      </fieldset>
                      <fieldset class="form-group">
                        <label for="InputEmail">Email address</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email, please"></input>
                        <small class="text-muted">Don't worry, no spam, just food related things.</small>
                      </fieldset>
                      <fieldset class="form-group">
                        <label for="Address">Address</label>
                        <input type="text" class="form-control" id="address"></input>
                      </fieldset>
                      <fieldset class="form-group">
                        <label for="PhoneNumber">Phone Number</label>
                        <input type="tel" class="form-control" id="phoneNumber"></input>
                      </fieldset> -->
                      <button id="deliverItButton" type="submit" class="btn btn-primary btn-lg btn-block">Delivery It!</button>
                    </form>
                  </div>
                  <div class="col-md-4">
                    <h3>Your Order</h3>
                    <div>
                    <p class="orderPreview"></p>
                    <ul id="list">
                    </ul>
                    </div>
                  </div>
                  -->
                </div>
                <div class="row">
                  <div class="col-md-12 text-center"><hr></hr><h4>Having trouble ordering? Email us at helpme@orderfoodeatfood.com</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <p>
                      <a href="www.facebook.com"><i class="fa fa-facebook-square fa-2x"></i></a>
                      <a href="www.twitter.com"><i class="fa fa-twitter fa-2x"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
          <div id="mySidenav" class="sidenav">
                  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="armenu-2.html#breakfast">Breakfast</a>
                <a href="armenu-2.html#burgers">Burgers</a>
                <a href="armenu-2.html#specials">Specials</a>
                <a href="armenu-2.html#sandwich">Sandwiches</a>
                <a href="armenu-2.html#onthego">On-The-Go</a>
          </div>
          <div class="section" id="breakfast">  
                
          <h1>Breakfast</h1>  
            <h2>Breakfast Deals</h2>
          <button id="sum" type="button">Calculate</button><br/>

          <table>
            <tr id="header">
              <th>Check it</th>
              <th>Estimate item</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td><input type="checkbox" name="chck" value="2.99" /></td>
              <td>1 Egg on a roll w/ bacon</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$2.99</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="3.89" /></td>
              <td>2 Eggs on a roll w/ bacon</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$3.89</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="2.25" /></td>
              <td>Cheese Omelet</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$2.25</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="4.25" /></td>
              <td>Western Omelet</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$4.25</td>
            </tr>
            </table>
          <h2>Create Your Own Breakfast</h2>
          <table>
            <tr>
              <tr id="header">
              <th>Check it</th>
              <th>Main Item</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td><input type="checkbox" name="chck" value="0.95" /></td>
              <td>1 Egg Or Egg White</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.95</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="1.75" /></td>
              <td>2 Eggs Or Egg Whites</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.75</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="1.50" /></td>
              <td>Bacon (2 Slices)</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.50</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="1.25" /></td>
              <td>Sausage</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.25</td>
            </tr>
          <tr>
              <td><input type="checkbox" name="chck" value="1.25" /></td>
              <td>Ham</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.25</td>
            </tr>
          <tr>
              <td><input type="checkbox" name="chck" value="1.75" /></td>
              <td>Home Fries</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.75</td>
            </tr>
          <tr>
              <td><input type="checkbox" name="chck" value="1.75" /></td>
              <td>Hash Brown</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.75</td>
            </tr>
            <tr id="header">
              <th>Check it</th>
              <th>Select Bread</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
           <tr>
              <td><input type="checkbox" name="chck" value="1.75" /></td>
              <td>Roll/Bagel</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.75</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="1.25" /></td>
              <td>Wrap</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.25</td>
            </tr>
            <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Toast (1 Slice)</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="1.25" /></td>
              <td>Toast (2 Slices)</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$1.25</td>
            </tr>
          <tr id="header">
              <th>Check it</th>
              <th>Select Toppings</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
          <tr>
              <td><input type="checkbox" name="chck" value="0.65" /></td>
              <td>Peppers</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Broccoli</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
            <tr>
            <td><input type="checkbox" class="chck" value="0.65"></input></td>
              <td>Mushrooms</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
           <tr>
           <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Spinach</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
          <tr>
           <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Tomato</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
          <tr>
           <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Onion</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
          <tr id="header">
              <th>Check it</th>
              <th>Select Cheese</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
          <tr>
              <td><input type="checkbox" name="chck" value="0.65" /></td>
              <td>American</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Swiss</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
            <tr>
            <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Mozzarella</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
           <tr>
           <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Pepper Jack</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
          <tr>
           <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Cheddar</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
          <tr>
           <td><input type="checkbox" class="chck" value="0.65" /></td>
              <td>Provolone</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$0.65</td>
            </tr>
            </table>
            <p>Calculated Price: $<input type="text" name="price" id="price" disabled /></p>

          </div>

          <div class="section" id="burgers">  
            <table>
            <h1>Burgers</h1>
              <h2>Burger Choice: Includes Lettuce, Tomato, &amp; Cheese</h2>
              <tr id="header">
              <th>Check it</th>
              <th>Select Item</th>
              <th>Quantity</th>
              <th>Cost</th>
              </tr>
              <tr>
              <td><input type="checkbox" name="chck" value="3.99" /></td>
              <td>Single Burger</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$3.99</td>
              </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="5.99" /></td>
              <td>Double Burger</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$5.99</td>
            </tr>
            <tr>
            <td><input type="checkbox" class="chck" value="6.99" /></td>
              <td>Triple Burger</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$6.99</td>
            </tr>
           <tr>
           <td><input type="checkbox" class="chck" value="5.99" /></td>
              <td>Grilled Chicken</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$5.99</td>
            </tr>
           <tr>
           <td><input type="checkbox" class="chck" value="4.25" /></td>
              <td>Turkey Burger</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$4.25</td>
            </tr>
           <tr>
           <td><input type="checkbox" class="chck" value="4.45" /></td>
              <td>Vegan Burger</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$4.45</td>
            </tr>
            <tr>
           <td><input type="checkbox" class="chck" value="3.45" /></td>
              <td>Grilled Cheese</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$3.45</td>
            </tr>
            
          </table>
          <p>Calculated Price: $<input type="text" name="price" id="price" disabled /></p>
          </div>

          <div class="section" id="specials"> 
            <table>
            <h1>Grill Specials</h1>
              <h2>Specials</h2>
              <tr id="header">
              <th>Check it</th>
              <th>Select Item</th>
              <th>Quantity</th>
              <th>Cost</th>
              </tr>
              <tr>
              <td><input type="checkbox" name="chck" value="6.15" /></td>
              <td>Cheese Quesadilla</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$6.15</td>
              </tr>
            <tr>
              <td><input type="checkbox" class="chck" value="6.65" /></td>
              <td>Chicken Quesadilla</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$6.65</td>
            </tr>
            <tr>
            <td><input type="checkbox" class="chck" value="5.15" /></td>
              <td>Chicken Tenders (3 pcs.)</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$5.15</td>
            </tr>
           <tr>
           <td><input type="checkbox" class="chck" value="4.00" /></td>
              <td>Mozzarella Mezzaluna</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$4.00</td>
            </tr>  
          </table>

          <h2>Sides</h2>
          <table>
          <tr>
              <tr id="header"/>
              <th>Check it</th>
              <th>Select Item</th>
              <th>Quantity</th>
              <th>Cost</th>
          </tr>
          <tr>
              <td><input type="checkbox" name="chck" value="2.99" /></td>
              <td>Onion Rings</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$2.99</td>
          </tr>
          <tr>
              <td><input type="checkbox" class="chck" value="2.09" /></td>
              <td>Small Fries</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$2.09</td>
          </tr>
          <tr>
              <td><input type="checkbox" class="chck" value="2.79" /></td>
              <td>Large Fries</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$2.79</td>
          </tr>
          <tr>
              <td><input type="checkbox" class="chck" value="2.49" /></td>
              <td>Small Sweet Potato Fries</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$2.49</td>
          </tr>
          <tr>
              <td><input type="checkbox" name="chck" value="3.19" /></td>
              <td>Large Sweet Potato Fries</td>
              <td><input type="text" name="qnty" value="1"></input></td>
              <td>$3.19</td>
          </tr>
          </table>

            
            <p>Calculated Price: $<input type="text" name="price" id="price" disabled /></p>
          </div>

          <div class="section" id="onthego">
            <h1>On-The-Go</h1>
              <h2>Refridgerated Snacks</h2>
                <table>
                  <tr>
                    <tr id="header"/>
                    <th>Check it</th>
                    <th>Select Item</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                  </tr>
                  <tr>
                    <td><input type="checkbox" name="chck" value="5.40" /></td>
                    <td>Cedar Creek</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$5.40</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="1.00" /></td>
                    <td>Cheese Dippers</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$1.00</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="3.65" /></td>
                    <td>Chobani Yogurt</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$3.65</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="3.65" /></td>
                    <td>Chobani Flip</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$3.65</td>
                  </tr>
                <tr>
                    <td><input type="checkbox" name="chck" value="2.15" /></td>
                    <td>Dippin Stix</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$2.15</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" name="chck" value="3.35" /></td>
                    <td>Guacamole Cup</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$3.35</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="3.35" /></td>
                    <td>Hummus Cup</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$3.35</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="1.29" /></td>
                    <td>Kozy Shack</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$1.29</td>
                  </tr>
                  <tr> 
                    <td><input type="checkbox" class="chck" value="3.99" /></td>
                    <td>Tuna to Go</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$3.99</td>
                  </tr>
                <tr>
                    <td><input type="checkbox" name="chck" value="2.15" /></td>
                    <td>Uncrustable PB&amp;J</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$2.15</td>
                  </tr>
                </table>

                <h2>Drinks</h2>
                <table>
                  <tr>
                    <tr id="header"/>
                    <th>Check it</th>
                    <th>Select Item</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                  </tr>
                  <tr>
                    <td><input type="checkbox" name="chck" value="2.00" /></td>
                    <td>Coke</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$2.00</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="2.00" /></td>
                    <td>Dr.Pepper</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$2.00</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="3.25" /></td>
                    <td>Dasani Water</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$3.25</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="2.00" /></td>
                    <td>Sprite</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$2.00</td>
                  </tr>
                <tr>
                    <td><input type="checkbox" name="chck" value="3.25" /></td>
                    <td>Vitamin Water</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$3.25</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" name="chck" value="3.25" /></td>
                    <td>Fuze</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$3.25</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="chck" value="2.65" /></td>
                    <td>Powerade</td>
                    <td><input type="text" name="qnty" value="1"></input></td>
                    <td>$2.65</td>
                  </tr>
                </table>  
              </div>
            </body>
          </div>
      );
    }
}

export default AR_Menu;