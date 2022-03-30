import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { getItemsByQuery } from '../directus'
import ItemType from '../types/Item'

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context

  console.log(query.query)

  return {
    props: {
      query,
    },
  }
}

const Page = ({ query }: { query: string }) => {
  console.log(query)

  return 'hi'
}

export default Page
