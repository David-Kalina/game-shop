import { Flex } from '@chakra-ui/layout'
import ItemType from '../types/Item'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

function Layout({
  items,
  totalItems,
}: {
  items: ItemType[]
  totalItems: number
}) {
  return (
    <Flex
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Header />
      <Body totalItems={totalItems} items={items} />
      <Footer />
    </Flex>
  )
}

export default Layout
