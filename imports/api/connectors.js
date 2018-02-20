import Sequelize from 'sequelize';

// create the connection
const db = new Sequelize('userdata', "root", "password", {
    host: 'localhost',
    dialect: 'mysql'
});

// define the model
const AccountModel = db.define('account', {
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
}, {
    timestamps: false
});

// create the table if it doesn't exist yet
db.sync();

// export Post
const Account = db.models.account;
export { Account };
