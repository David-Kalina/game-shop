import { Directus } from '@directus/sdk'

const directus = new Directus('https://nsjezvl3.directus.app')

directus.auth.login({
  email: 'kalinadavid404@gmail.com',
  password: process.env.DIRECTUS_PASSWORD as string,
})

export const getItems = async () => {
  const items = (await directus.items('items').readByQuery()).data

  return items
}
