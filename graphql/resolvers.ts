export const resolvers = {
  Query: {
    rentLogs: async (_parent, _args, context) => await context.prisma.rentLog.findMany(),
  }
}