
import { Student } from './connectors';
import { Store } from './connectors';
import { Item } from './connectors';
import { Order } from './connectors';

// create the resolve functions for the available GraphQL queries
export default resolvers = {

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
        createStudent(StudentName){
            return Student.set(StudentName);
        }
    }
};
