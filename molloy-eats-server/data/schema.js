import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `

type Student {
  StudentID: Int
  Username: String
  StudentPhone: String
  StudentEmail: String
  Password: String
}

type Store {
  StoreID: Int
  StoreName: String
  StoreLocation: String
}

type Item {
  ItemID: Int
  ItemDescription: String
  StoreName: String
  Price: Int
}

type Order {
  OrderID: Int
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
  getOrder(OrderID: Int): [Order]
}

type Mutation {
  createStudent(Username: String!, StudentPhone: String!): Student
  login(Username: String!, Password: String!): AuthPayload
  register(Username: String!, Password: String!): Student
  editStudentProfile(StudentPhone: String, StudentEmail: String): Student
  placeOrder(StoreName: String, Price: Float!, Quantity: Int!): Order
}

schema {
  query: Query
  mutation: Mutation
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
