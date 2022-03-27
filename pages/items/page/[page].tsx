import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../../components/Layout'
import { getItems, getPages } from '../../../directus'
import ItemType from '../../../types/Item'

export const getStaticPaths = async () => {
  const itemCount = 25

  const allItems = await getPages()

  const pages = allItems.length / itemCount

  const paths = Array.from({ length: pages }, (_, i) => ({
    params: { page: String(i + 1) },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.page) {
    const items = await getItems(Number(params.page))

    const totalItems = (await getPages()).length

    return {
      props: {
        items,
        totalItems,
      },
    }
  }

  return {
    props: {
      items: [],
      totalItems: 0,
    },
  }
}

const Page = ({
  items,
  totalItems,
}: {
  items: ItemType[]
  totalItems: number
}) => {
  return <Layout totalItems={totalItems} items={items} />
}

export default Page
