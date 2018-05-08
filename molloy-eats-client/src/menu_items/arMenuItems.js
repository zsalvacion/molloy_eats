var arMenuItems = {

	CheeseOmelet: {price: 2.25, id: 3, qnty: 0},
	WesternOmelet: {price: 4.25, id: 4, qnty: 0},

	Bacon: {price: 1.50, id: 7, qnty: 0},
	Sausage: {price: 1.25, id: 8, qnty: 0},
	Ham: {price: 1.25, id: 9, qnty: 0},
	HomeFries: {price: 1.75, id: 10, qnty: 0},
	HashBrown: {price: 1.75, id: 11, qnty: 0},

	Bagel: {price: 1.75, id: 12, qnty: 0},
	Wrap: {price: 1.25, id: 13, qnty: 0},
	Toast1: {price: 0.65, id: 14, qnty: 0},
	Toast2: {price: 1.25, id: 15, qnty: 0},

	Peppers: {price: 0.65, id: 16, qnty: 0},
	Broccoli: {price: 0.65, id: 17, qnty: 0},
	Mushrooms: {price: 0.65, id: 18, qnty: 0},
	Spinach: {price: 0.65, id: 19, qnty: 0},
	Tomato: {price: 0.65, id: 20, qnty: 0},
	Onion: {price: 0.65, id: 21, qnty: 0},

	CheeseAmerican: {price: 0.65, id: 22, qnty: 0},
	CheeseSwiss: {price: 0.65, id: 23, qnty: 0},
	CheeseMozzarella: {price: 0.65, id: 24, qnty: 0},
	CheesePepperJack: {price: 0.65, id: 25, qnty: 0},
	CheeseCheddar: {price: 0.65, id: 26, qnty: 0},
	CheeseProvolone: {price: 0.65, id: 27, qnty: 0},
	//Burger Items
	SingleBurger: {price: 3.99, id: 28, qnty: 0},
	DoubleBurger: {price: 5.99, id: 29, qnty: 0},
	TripleBurger: {price: 6.99, id: 30, qnty: 0},
	GrilledChickenBurger: {price: 5.99, id: 31, qnty: 0},
	TurkeyBurger: {price: 4.25, id: 32, qnty: 0},
	VeganBurger: {price: 4.45, id: 33, qnty: 0},
	GrilledCheese: {price: 3.45, id: 34, qnty: 0},
	//Grill Items
	CheeseQuesadilla: {price: 6.15, id: 35, qnty: 0},
	ChickenQuesadilla: {price: 6.65, id: 36, qnty: 0},
	ChickenTenders: {price: 5.15, id: 37, qnty: 0},
	MozzarellaMezzaluna: {price: 4.00, id: 38, qnty: 0},

	OnionRings: {price: 2.99, id: 39, qnty: 0},
	SmallFries: {price: 2.09, id: 40, qnty: 0},
	LargeFries: {price: 2.79, id: 41, qnty: 0},
	SmallSweetPotatoFries: {price: 2.49, id: 42, qnty: 0},
	LargeSweetPotatoFries: {price: 3.19, id: 43, qnty: 0},
	//On-the-Go Items
	CedarCreek: {price: 5.40, id: 44, qnty: 0},
	CheeseDippers: {price: 1.00, id: 45, qnty: 0},
	ChobaniYogurt: {price: 3.65, id: 46, qnty: 0},
	ChobaniFlip: {price: 3.65, id: 47, qnty: 0},
	DippinStix: {price: 2.15, id: 48, qnty: 0},
	GuacamoleCup: {price: 3.35, id: 49, qnty: 0},
	HummusCup: {price: 3.35, id: 50, qnty: 0},
	KozyShack: {price: 1.29, id: 51, qnty: 0},
	TunatoGo: {price: 3.99, id: 52, qnty: 0},
	UncrustablePBJ: {price: 2.15, id: 53, qnty: 0},

	Coke: {price: 2.00, id: 54, qnty: 0},
	DrPepper: {price: 2.00, id: 55, qnty: 0},
	DasaniWater: {price: 3.25, id: 56, qnty: 0},
	Sprite: {price: 2.00, id: 57, qnty: 0},
	VitaminWater: {price: 3.25, id: 58, qnty: 0},
	Fuze: {price: 3.25, id: 59, qnty: 0},

	calculateTotalQuantity() {
	    var totalQuantity = 0;
	    for (var prop in arMenuItems) {
	      if (arMenuItems.hasOwnProperty(prop) && !isNaN(arMenuItems[prop].qnty)) {
	      }
	    }
	    return totalQuantity;

	  	var totalPrice = 0;
	  	for (var prop in arMenuItems) {
	  	  if (arMenuItems.hasOwnProperty(prop) && !isNaN(arMenuItems[prop].qnty)) {
	  	      totalPrice += arMenuItems[prop].qnty * arMenuItems[prop].price;
	  	  }
	    }
	    return totalPrice;
  }
}

export default arMenuItems;
