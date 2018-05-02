import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import cors from 'cors';
import passport from 'passport';

const GRAPHQL_PORT = process.env.PORT || 5000;

const graphQLServer = express();

//graphQLServer.use(passport.initialize());
graphQLServer.use(cors());
graphQLServer.use('/graphql', 
	bodyParser.json(), 
	graphqlExpress(req => {
		return { 
			schema,
			context: {
				authorization: req.header('authorization'),
			},
		}; 
	}),
);
graphQLServer.use('/', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
