import bcrypt from 'bcrypt';

import { Student } from './connectors';
import { Store } from './connectors';
import { Item } from './connectors';
import { Order } from './connectors';

// create the resolve functions for the available GraphQL queries
const resolvers = {

    Query: {
        getStudent(_, args){
            return Student.findAll({where: args});
        },
        getStore(_, args){
            return Store.findAll({where: args});
        },
        getItem(_, args){
            return Item.findAll({where: args});
        },
        getOrder(_, args){
            return Order.findAll({where: args});
        },
    },

    Mutation: {
        createStudent(_, args){
            return Student.create({StudentName: input.StudentName, StudentPhone: input.StudentPhone});
        },
        login(_, args){
            return Student.find({where: args});;
        },
        register(_, args){
            const hash = bcrypt.hashSync(args.Password, 10);
            return Student.create({StudentName: args.StudentName, Password: hash});
        }
    }
};

export default resolvers;