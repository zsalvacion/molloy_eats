export default typeDefs = [`
type Account {
  id: Int
  username: String
  password: String
}

type Query {
  accounts(id: Int): [Account]
}

schema {
  query: Query
}
`];
