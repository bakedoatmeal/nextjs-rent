import {gql} from 'apollo-server-micro'
import { makeSchema } from 'nexus'
import {join} from 'path'
import * as types from './types'

export const schema = makeSchema({
  types, 
  outputs: {
    typegen: join(process.cwd(), 'node_modules', '@types', 'nexus-typegen', 'index.d.ts'),
    schema: join(process.cwd(), 'graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'graphql', 'context.ts'),
  },
})

// export const typeDefs = gql`
//   type RentLog {
//     id: String
//     name: String
//     email: String
//     rentalType: String
//     rentalSize: String
//     address: String
//     year: Int
//     rent: Int
//     user: User
//     userId: String
//   }

//   type User {
//     id: String
//     name: String
//     email: String
//     role: String
//     rentLogs: [RentLog]
//   }

//   type Query {
//     rentLogs: [RentLog]!
//   }

//   type Mutation {
//     createRentLog(name: String!, email: String!, rentalType: String!, rentalSize: String!, address: String!, year: Int!, rent: Int!): RentLog!
//     deleteRentLog(id: String!): RentLog!
//     updateRentLog(name: String!, email: String!, rentalType: String!, rentalSize: String!, address: String!, year: Int!, rent: Int!): RentLog!
//   }

// `;