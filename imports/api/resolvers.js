
import { Account } from './connectors';

// create the resolve functions for the available GraphQL queries
export default resolvers = {

    Query: {
        accounts(_, args){
            return Account.findAll({where: args});
        },
    }
};
