import React from 'react';
import '../css/bareburger.css';

class Bareburger extends React.Component{

  changeImg(){
      var i=0;
      var images=[];
      var time=5000;

      images[0]='img/slideshow_pic1.jpg';
      images[1]='img/slideshow_pic2.jpg';
      images[2]='img/slideshow_pic3.jpg';
      images[3]='img/slideshow_pic4.jpeg';
      images[4]='img/slideshow_pic5.jpg';
      document.slide.src=images[i];
      if(i<images.length-1)
      {
        i++;
      } else  {
        i=0;
      }
      setTimeout("changeImg()",time);
    }

  render() {
      return (
              <div>
                <head>
                  <link rel="stylesheet" type="text/css" href="../css/bareburger.css"/>
                  <meta charset="utf-8"/>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>MolloyEats | Bareburger</title>
                </head>
                <body>
                  <div id = "showcase">
                    <script>
                    window.onload=changeImg;
                  </script>
                <img name="slide" width="400" hheight="200>"﻿/>
                </div>
                  <h1>Main Menu</h1>
                    <img id="bareburger-logo" src={require("../images/bareburger-logo.jpg")} alt="Bareburger Logo"/> 

                    <nav className="topnav" id="myTopnav">
                          <a href="/profile">Home</a>
                          <a href="bareburger#food">Food</a>
                          <a href="bareburger#drinks">Drinks</a>
                          <a href="bareburger#shakes">Shakes</a>
                          <a href="javascript:void(0);" style={{fontSize:'15px'}} className="icon" onclick="myFunction()">&#9776;</a>
                    </nav>

                    <span id="nav_button" onclick="openNav()">Menu</span>
                    <div id="main">
                    <div className="section" id="food">  

                        <h1>Food</h1>
                        <h2>Burgers</h2>
                        <table border="1">
                          <tr>
                            <td><input type="checkbox"/>Be My Burger<p>Customize your own burger!!!</p></td>
                            <td>$8.90</td>
                          </tr>
                          
                          <tr>
                            <td><input type="checkbox"/>American<p>beef, american cheese, sweet pickles, tomatoes, red onions,green leaf, ketchup, stone ground mustard, brioche bun. Add black forest bacon +2.50 Sub for beyond burger +2.95 or impossible +3.95</p></td>
                            <td>$10.45</td>
                          </tr>

                          <tr>
                            <td><input type="checkbox"/>Buckaroo<p>beef, aged cheddar, smoked brisket, wild mushrooms, smoke sauce, brioche bun. Sub for beyond burger +2.95 or impossible+3.95</p></td>
                            <td>$13.95</td>
                          </tr>

                          <tr>
                            <td><input type="checkbox"/>Supreme<p>beef, american cheese, black forest bacon, onion rings, chopped fries, green leaf, special sauce, brioche bun. Sub for beyond burger +2.95 or impossible +3.95</p></td>
                            <td>$12.25</td> 
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Standard<p>beef, american cheese, caramelized onions, dill pickles, special sauce, brioche bun. Sub for beyond burger+2.95 or impossible +3.95</p></td>
                            <td>$9.95</td>  
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Flamin' Bacon<p>beef, american cheese, black forest bacon, pickled jalapeños, green leaf, habanero mayo, brioche bun. Sub for beyond burger +2.95 or impossible +3.95﻿</p></td>
                            <td>$12.95</td> 
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>El Matador<p>beef, queso fresco, guacamole, spicy pico de gallo, pickled jalapeños, green leaf, brioche bun. Sub for beyond burger+2.95 or impossible +3.95﻿</p></td>
                            <td>$12.25</td> 
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Impossible Burger<p>impossible burger, american cheese, caramelized onions, dill pickles, green leaf, special sauce, brioche bun</p></td>
                            <td>$13.95</td> 
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Blazin' Bison<p>bison, queso fundido, napa slaw, pickled jalapeños, green leaf, sriracha mayo, brioche bun</p></td>
                            <td>$14.95</td> 
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Paul Bunyan<p>bison, blue cheese, black forest bacon, bourbon pear jam, caramelized onions, sprout bun</p></td>
                            <td>$14.95</td> 
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>So Cal<p>turkey, aged cheddar, guacamole, pickled red onions, alfalfa, sprout bun</p></td>
                            <td>$10.95</td> 
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Farmstead<p>sweet potato, kale &amp; wild rice patty, hummus, tomatoes, baby kale, avocado basil dressing, collard green wrap</p></td>
                            <td>$9.95</td>  
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Guadalupe<p>black bean, roasted corn &amp; poblano patty, guacamole, pickled red onions, tomatoes, alfalfa, sprout bun</p></td>
                            <td>$9.95</td>  
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Thai Chia<p>quinoa, chia &amp; green pea patty, vegan american cheese, caramelized onions, wild mushrooms, baby spinach, 7 spice thai ketchup, sprout bun</p></td>
                            <td>$9.95</td>  
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Beyond Burger<p>beyond burger, vegan american cheese, sweet pickles, red onions, green leaf, vegan mayo, ketchup, sprout bun</p></td>
                            <td>$12.95</td> 
                          </tr>
                        </table>
                    
                        <h2>Wiches</h2>
                        <table border="1">
                          <tr>
                            <td><input type="checkbox"/>Sweeet Bird<p>buttermilk fried chicken, bourbon pear jam, green leaf, sticky sauce, stone ground mustard, brioche bun</p></td>
                            <td>$9.95</td>
                          </tr>
                            
                          <tr>
                            <td><input type="checkbox"/>Buttermilk Buffalo<p>buttermilk fried chicken, blue cheese sauce, green leaf, buffalo sauce, brioche bun</p></td> 
                            <td>$9.95</td>
                          </tr>

                          <tr>
                            <td><input type="checkbox"/>Triple Decker Sriracha<p>grilled lemon chicken, aged cheddar, pickled red onions, sweet pickles, green leaf, sriracha mayo, 8 grain toast</p></td>
                            <td>$11.95</td>
                          </tr>

                          <tr>
                            <td><input type="checkbox"/>California BLT<p>grilled lemon chicken, black forest bacon, avocado, alfalfa, tomatoes, mayo, 8 grain toast</p></td> 
                            <td>$12.95</td>
                          </tr>

                          <tr>
                            <td><input type="checkbox"/>Wham Bam Chicken Slam<p>buttermilk fried chicken, queso fundido, black forest bacon, wild mushrooms, green leaf, wham bam sauce, brioche bun</p></td> 
                            <td>$11.95</td>
                          </tr>
                        </table>
                        
                        <h2>Greens</h2>
                        <table border="1">
                          <tr>
                            <td><input type="checkbox"/>Side Kail Caesar<p>baby kale, little gems romaine, asiago, grape tomatoes, radish, caesar dressing</p></td>
                            <td>$5.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Side Hudson<p>baby spinach, blue cheese, turkey bacon, sunny side egg, avocado, grape tomatoes, red onions, buttermilk ranch</p></td>
                            <td>$6.25</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>Side Cali Fresh<p>baby kale, hummus, quinoa, grape tomatoes,radish, red onions, alfalfa, lemon tahini dressing</p></td>
                            <td>$6.25</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>Side Guapo Chop<p>little gems romaine, queso fresco,guacamole, spicy pico de gallo, pickled jalapeños, pickled red onions, tortilla chips, avocado basil dressing</p></td>
                            <td>$5.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Entree Kail Caesar<p>baby kale, little gems romaine, asiago, grape tomatoes, radish, caesar dressing</p></td>
                            <td>$10.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Entree Cali Fresh<p>baby kale, hummus, quinoa, grape tomatoes,radish, red onions, alfalfa, lemon tahini dressing</p></td>
                            <td>$11.95</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>Entree Guapo Chop<p>little gems romaine, queso fresco,guacamole, spicy pico de gallo, pickled jalapeños, pickled red onions, tortilla chips, avocado basil dressing</p></td>
                            <td>$10.95</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>Side Berry Blue<p>baby spinach,blue cheese, dried blueberries, candied pecans, apple cidar vinaigrette</p></td>
                            <td>$5.95</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>Entree Berry Blue<p>baby spinach,blue cheese, dried blueberries, candied pecans, apple cidar vinaigrette</p></td>
                            <td>$10.95</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>SIDE BABY GREEN SALAD</td>
                            <td>$4.25</td>
                          </tr>
                        </table>
                        
                        <h2>Sides</h2>
                        <table border="1">
                          <tr>
                            <td><input type="checkbox"/>SIDE ONION RINGS</td>
                            <td>$4.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>SIDE FRENCH FRIES</td>
                            <td>$3.95</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>SIDE SWEET FRIES</td>
                            <td>$5.25</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>SIDE RINGS &amp; FRIES</td>
                            <td>$5.25</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>SIDE RINGS &amp; SWEET FRIES</td>
                            <td>$6.25</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>SIDE FRENCH &amp; SWEET FRIES</td>
                            <td>$5.25</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>SIDE DILL PICKLES</td>
                            <td>$3.25</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>SIDE SWEET PICKLES</td>
                            <td>$3.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>SIDE NAPA SLAW</td>
                            <td>$3.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>SIDE BABY GREEN SALAD</td>
                            <td>$4.25</td>
                          </tr>
                        </table>
                        
                        <h2>Shares</h2>
                        <table border="1">
                          <tr>
                            <td><input type="checkbox"/>Share French Fries</td>
                            <td>$6.45</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Share Sweet Fries</td>
                            <td>$8.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Share Onion Rings</td>
                            <td>$8.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Share Onion Rings</td>
                            <td>$8.95</td>
                          </tr>

                          <tr>
                            <td><input type="checkbox"/>Share Rings &amp; Fries</td>
                            <td>$9.45</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Share Rings &amp; Sweet</td>
                            <td>$10.40</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Chicken Tenders</td>
                            <td>$11.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Share French &amp; Sweet</td>
                            <td>$8.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Crispy Brussels<p>asiago, lemon, sea salt</p></td>
                            <td>$8.95</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>Chicken Bites<p>blue cheese sauce, buttermilk fried chicken tossed in your choice of sauce</p></td>
                          <td>$9.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Macho Fries</td>
                          <td>$11.95</td>
                            </tr>
                          <tr>
                          <td><input type="checkbox"/>Fundito Fries</td>
                          <td>$9.95</td>
                            </tr>
                        </table>

                        <h2>Sweets</h2>
                        <table border="1">
                          <tr>
                          <td><input type="checkbox"/>Bare Sammie</td>
                          <td>$6.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Flourless Chocolate Cake</td>
                          <td>$7.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Root Beer Float</td>
                          <td>$6.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Vegan Carrot Cake</td>
                          <td>$7.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Chunkay Monkae</td>
                          <td>$9.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>S'mmmmores</td>
                          <td>$9.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Doogie Sundae</td>
                          <td>$9.99</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Copabanana (v)</td>
                          <td>$9.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Kid's Sundae</td>
                          <td>$4.75</td>
                            </tr>
                        </table>

                        <h2>Cubby Meal</h2>
                        <table border="1">
                          <tr>
                          <td><input type="checkbox"/>Grizzly (Burger)<p>kids cheeseburger beef, turkey, or sweet potato, kale &amp; wild rice v gf, american, brioche bun</p></td>
                          <td>$8.95</td>
                            </tr>
                            <tr>
                          <td><input type="checkbox"/>Koala (Hotdog)<p>all- beef hot dog, pretzel bun</p></td>
                          <td>$8.95</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox"/>Polar (Grilled Cheese)<p>american grilled cheese, brioche toast</p></td>
                          <td>$8.95</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox"/>Panda (Tender)<p>chicken tenders (3), buttermilk ranch</p></td>
                          <td>$8.95</td>
                            </tr>
                        </table>

                      
                    </div>
                    
                    <div className="section" id="drinks">  
                      <h1>Drinks</h1>
                        <h2>Beverages</h2>
                        <table border="1">
                          <tr>
                            <td><input type="checkbox"/>Arnold Palmer</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Raspberry Iced Tea</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Peach Iced Tea</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Hibiscus Iced Tea</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Classic Black Iced Tea</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Classic Lemonade</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Strawberry Lemonade</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Hot Water</td> 
                            <td>$0.00</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>OJ</td> 
                            <td>$3.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Apple Juice</td> 
                            <td>$3.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Tap Water</td> 
                            <td>$0.00</td>  
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Bottled Still Water</td> 
                            <td>$2.50</td>  
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Bottled Sparkling Water</td> 
                            <td>$2.50</td>  
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Decaf Coffee</td> 
                            <td>$2.95</td>  
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Decaf Coffee</td> 
                            <td>$2.95</td>  
                          </tr>
                        </table>
                        <h2>Chubby Drinks</h2>
                        <table border="1">
                          <tr>
                          <td><input type="checkbox"/>Cubby Apple Juice</td> 
                          <td>$1.95</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>Cubby Fruit Punch</td> 
                          <td>$1.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Cubby Milk</td>
                            <td>$1.95</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Cubby Choco Milk</td>
                            <td>$1.95</td>
                          </tr>
                        </table>
                        <h2>Soda / Bottle Soda</h2>
                        <table border="1">
                          <tr>
                          <td><input type="checkbox"/>Cola Bottle</td> 
                          <td>$3.20</td>
                          </tr>
                          <tr>
                          <td><input type="checkbox"/>Diet Cola Bottle</td> 
                          <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Root Beer Bottle</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Diet Root Beer Bottle</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Ginger Ale Bottle</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Lemon Lime Bottle</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Orange Bottle</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Black Cherry Bottle</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Red Birch Beer Bottle</td> 
                            <td>$3.20</td>
                          </tr>
                          <tr>
                            <td><input type="checkbox"/>Ginger Brew Bottle</td> 
                            <td>$3.20</td>
                          </tr>
                        </table>
                        </div>
                        <div className="shakes" id="shakes">
                          <h1>Shakes</h1>
                          <h2>Milkshakes</h2>
                          <table border="1">
                            <tr>
                              <td><input type="checkbox"/>BYO Shake 12oz</td> 
                              <td>$5.95</td>
                            </tr>
                            <tr>
                              <td><input type="checkbox"/>BYO Shake 16oz</td> 
                              <td>$7.95</td>
                            </tr>
                            <tr>
                              <td><input type="checkbox"/>Banana Foster 12oz<p>vanilla ice cream, banana, caramel sauce</p></td> 
                              <td>$6.95</td>
                            </tr>
                            <tr>
                              <td><input type="checkbox"/>Mexican Chocolate 12oz<p>chocolate ice cream, cayenne cinnamon spice, torched marshmallow</p></td> 
                              <td>$6.95</td>
                            </tr>
                            <tr>
                              <td><input type="checkbox"/>Black &amp; White 12oz<p>vanilla ice cream, chocolate ice cream, chocolate sauce</p></td> 
                              <td>$6.95</td>
                            </tr>
                          </table>
                          <h2>Vegan Shakes</h2>
                          <table border="1">
                            <tr>
                              <td><input type="checkbox"/>Cococado (v) 12oz<p>coconut ice cream, toasted coconut, avocado, lime</p></td> 
                              <td>$7.95</td>
                            </tr>
                            <tr>
                              <td><input type="checkbox"/>The Velvis (v) 12oz<p>coconut ice cream, banana, peanut butter, chocolate sauce, hemp milk</p></td>
                              <td>$7.95</td>
                            </tr>
                            <tr>
                              <td><input type="checkbox"/>Mint Cookies &amp; Cream (v) 12oz<p>coconut ice cream, newman chocolate o's, mint, hemp milk</p></td>
                              <td>$7.95</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </body>
                  </div>
      );
    }
}

export default Bareburger;