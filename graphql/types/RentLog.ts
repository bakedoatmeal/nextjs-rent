// /graphql/types/Link.ts
import { objectType, extendType, nonNull, stringArg, intArg } from 'nexus'
import { User } from './User'

export const RentLog = objectType({
  name: 'RentLog',
  definition(t) {
    t.string('id')
    t.string('address')
    t.int('year')
    t.int('rent')
    t.string('rentalType')
    t.string('rentalSize')
  },
})

export const RentLogQuery = extendType({
  type: 'Query', 
  definition(t) {
    t.nonNull.list.field('rentLogs', {
      type: 'RentLog',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.rentLog.findMany()
      },
    })
  }
})

export const createRentLogMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createRentLog', {
      type: RentLog,
      args: {
        address: nonNull(stringArg()),
        rentalType: nonNull(stringArg()),
        rentalSize: nonNull(stringArg()),
        year: nonNull(intArg()),
        rent: nonNull(intArg())
      },
      async resolve(_parent, args, ctx) {

        if (!ctx.user) {
          throw new Error(`You need to be logged in to perform an action`)
        }

        const rentLog = {
          address: args.address,
          rentalType: args.rentalType,
          rentalSize: args.rentalSize,
          year: args.year,
          rent: args.rent,
        }

        return await ctx.prisma.rentLog.create({
          data: rentLog,
        })
      },
    })
  }
})