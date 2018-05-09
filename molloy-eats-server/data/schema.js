import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `

type Student {
  id: Int
  Username: String
  StudentPhone: String
  StudentEmail: String
  Password: String
}

type Store {
  id: Int
  StoreName: String
  StoreLocation: String
}

type Item {
  id: Int
  ItemDescription: String
  StoreName: String
  Price: Float
}

type Order {
  id: Int
  Price: Float
  Quantity: Int
  PaymentMethod: String
  Username: String
  StoreName: String
  Time: String
  ItemID: Int
}

type AuthPayload {
  token: String
  user: String
}

type Query {
  getStudent(Username: String): [Student]
  getStore(Username: String): [Store]
  getItem(ItemID: Int): [Item]
  getOrder(Username: String): [Order]
}

type Mutation {
  createStudent(Username: String!, StudentPhone: String!): Student
  login(Username: String!, Password: String!): AuthPayload
  register(Username: String!, Password: String!): Student
  editStudentProfile(StudentPhone: String, StudentEmail: String): Student
  placeOrder(StoreName: String!, Price: Float!, Quantity: Int! , ItemID: Int!, Time: String!): Order
  addItem(id: Int, ItemDescription: String!, StoreName: String!, Price: Float!): Item
}

schema {
  query: Query
  mutation: Mutation
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
