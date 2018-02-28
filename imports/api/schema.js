export default typeDefs = [`
input StudentInput {
  StudentName: String
  StudentPhone: String
}

type Student {
  StudentID: Int
  StudentName: String
  StudentPhone: String
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
  Price: Int
  Quantity: Int
  PaymentMethod: String
  StudentID: Int
  StoreName: String
  Time: String
  ItemID: Int
}

type Query {
  getStudent(StudentName: String): [Student]
  getStore(StoreID: Int): [Store]
  getItem(ItemID: Int): [Item]
  getOrder(OrderID: Int): [Order]
}

type Mutation {
  createStudent(StudentName: String): Student
}

schema {
  query: Query
  mutation: Mutation
}
`];
