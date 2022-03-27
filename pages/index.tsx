import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'
import { getItems } from '../directus'

export const getStaticProps: GetStaticProps = async () => {
  const items = await getItems()

  return {
    props: {
      items,
    },
  }
}

const Home = ({ items }: { items: any[] }) => {
  return <Layout items={items} />
}

export default Home
