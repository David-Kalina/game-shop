import { Directus } from '@directus/sdk'
import ItemType from '../types/Item'

const directus = new Directus('https://nsjezvl3.directus.app')

directus.auth.login({
  email: 'kalinadavid404@gmail.com',
  password: process.env.DIRECTUS_PASSWORD as string,
})

export const getItems = async (page: number = 1, limit = 25) => {
  const items = (await directus.items('items').readByQuery({ page, limit }))
    .data

  return items as ItemType[]
}

export const getPages = async () => {
  const pages = (await directus.items('items').readByQuery({ limit: -1 })).data
  return pages as ItemType[]
}

export const getItemsByQuery = async (query: string) => {
  const items = (await directus.items('items').readByQuery({ search: query }))
    .data
  return items as ItemType[]
}
