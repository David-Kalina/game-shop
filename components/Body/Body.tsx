import { Flex, SimpleGrid } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import ItemType from '../../types/Item'
import Item from '../Item'
import Pagination from '../Pagination'

function Body({
  items,
  totalItems,
}: {
  items: ItemType[]
  totalItems: number
}) {
  const { asPath } = useRouter()

  const currentPage = Number(asPath.split('/').pop())

  return (
    <>
      <SimpleGrid
        spacing={10}
        width="100%"
        textAlign="center"
        mt="100px"
        minChildWidth="220px"
        px="2rem"
        py="1rem"
      >
        {items.map(item => (
          <Item key={item.id} details={item} />
        ))}
      </SimpleGrid>
      <Pagination currentPage={currentPage} totalPages={totalItems / 25} />
    </>
  )
}

export default Body
