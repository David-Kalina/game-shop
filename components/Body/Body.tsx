import { SimpleGrid } from '@chakra-ui/layout'
import ItemType from '../../types/Item'
import Item from '../Item'

function Body({ items }: { items: ItemType[] }) {
  return (
    <SimpleGrid
      spacing={10}
      textAlign="center"
      mt="100px"
      minChildWidth="220px"
      px="2rem"
      py="1rem"
    >
      {items.map(item => (
        <Item key={item.sku} details={item} />
      ))}
    </SimpleGrid>
  )
}

export default Body
