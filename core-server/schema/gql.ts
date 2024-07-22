import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Product {
    _id: ID!
    title: String!
    brief: String!
    price: Float!
    creator: User!
  }

  type Payment {
    _id: ID!
    name: String!
    email: String!
    mobile: String!
    amount: Float!
    product: String!
    userID: String!
    txnID: String!
    status: String!
    url: String!
  }

  input ProductInput {
    title: String!
    brief: String!
    price: Float!
  }

  input PaymentInput {
    product: String!
    txnID: String!
    userID: String!
    amount: Float!
    name: String!
    email: String!
    mobile: String!
    status: String
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    mobile: String!
    createdProducts: [Product!]
  }

  input UserInput {
    name: String!
    email: String!
    mobile: String!
  }

  type RootQuery {
    products: [Product!]!
    users: [User!]!
  }

  type RootMutation {
    createProduct(productInput: ProductInput): Product
    createUser(userInput: UserInput): User
    makePayment(paymentInput: PaymentInput): Payment
    initiateRefund(paymentID: ID!): Product!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export { typeDefs };
