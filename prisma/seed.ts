// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.rentLog.create({
    data: {
      name: `Jane`,
      email: `jane@hotmail.com`, 
      rentalType: 'APARTMENT',
      rentalSize: 'THREEANDAHALF',
      address: '4057 Avenue Van Horne',
      year: 2020,
      rent: 2000,
      userId: ''
    },
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })