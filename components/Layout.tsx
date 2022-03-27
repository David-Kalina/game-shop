import { Flex } from '@chakra-ui/layout'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

function Layout({ items }: { items: any[] }) {
  return (
    <Flex
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Header />
      <Body items={items} />
      <Footer />
    </Flex>
  )
}

export default Layout
