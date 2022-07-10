import { enumType, objectType } from 'nexus'
import { RentLog } from './RentLog'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('email')
    t.field('role', { type: Role })
  },
})

const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN'],
})