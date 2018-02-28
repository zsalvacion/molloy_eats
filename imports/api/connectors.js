import Sequelize from 'sequelize';

// create the connection
const db = new Sequelize('molloyeats', "root", "password", {
    host: 'localhost',
    dialect: 'mysql'
});

// define the model
const StudentModel = db.define('student', {
    StudentName: { 
        type: Sequelize.STRING,
        set(name) {
            this.setDataValue('StudentName', name);
        }
    },
    StudentPhone: { type: Sequelize.STRING }
}, {
    timestamps: false
});

const StoreModel = db.define('store', {
    StoreName: { type: Sequelize.STRING },
    StoreLocation: { type: Sequelize.STRING }
}, {
    timestamps: false
});

const ItemModel = db.define('item', {
    ItemDescription: { type: Sequelize.STRING },
    StoreName: { type: Sequelize.STRING },
    Price: { type: Sequelize.INTEGER }
}, {
    timestamps: false
});

const OrderModel = db.define('order', {
    Price: { type: Sequelize.INTEGER },
    Quantity: { type: Sequelize.INTEGER },
    PaymentMethod: { type: Sequelize.STRING },
    StudentID: { type: Sequelize.INTEGER },
    StoreName: { type: Sequelize.STRING },
    Time: { type: Sequelize.STRING },
    ItemID: { type: Sequelize.INTEGER }
}, {
    timestamps: false
});

// create the table if it doesn't exist yet
db.sync();

// export Post
const Student = db.models.student;
const Store = db.models.store;
const Item = db.models.item;
const Order = db.models.order;
export { Student };
export { Store };
export { Item };
export { Order };
