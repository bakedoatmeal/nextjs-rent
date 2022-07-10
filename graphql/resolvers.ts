import { argsToArgsConfig } from "graphql/type/definition"

export const resolvers = {
  Query: {
    rentLogs: async (_parent, _args, context) => await context.prisma.rentLog.findMany(),
  },
  Mutation: {
    createRentLog: async (_parent, args, context) => {
      return await context.prisma.rentLog.create({
        data: {
          name: args.name, 
          email: args.email, 
          rentalType: args.rentalType,
          rentalSize: args.rentalSize,
          year: args.year,
          rent: args.rent,
          address: args.address,
        }
      })
    }
  }
}