const { faker } = require('@faker-js/faker')
const { writeFile } = require('fs')

const seedData = () => {
  const items = []

  for (let i = 0; i < 500; i++) {
    items.push({
      sku: faker.datatype.number({ min: 1, max: 500 }),
      name: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(),
      inventory: faker.datatype.number({ min: 0, max: 100 }),
    })
  }

  writeFile('seedData.json', JSON.stringify(items), err => {
    if (err) {
      console.log(err)
    } else {
      console.log('Seed data written to file')
    }
  })
}

seedData()
