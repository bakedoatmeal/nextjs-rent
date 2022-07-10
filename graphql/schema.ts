import {gql} from 'apollo-server-micro'

export const typeDefs = gql`
  type RentLog {
    id: String
    name: String
    email: String
    rentalType: String
    rentalSize: String
    address: String
    year: Int
    rent: Int
  }

  type Query {
    rentLogs: [RentLog]!
  }

  type Mutation {
    createRentLog(name: String!, email: String!, rentalType: String!, rentalSize: String!, address: String!, year: Int!, rent: Int!): RentLog!
    deleteRentLog(id: String!): RentLog!
    updateRentLog(name: String!, email: String!, rentalType: String!, rentalSize: String!, address: String!, year: Int!, rent: Int!): RentLog!
  }

`;