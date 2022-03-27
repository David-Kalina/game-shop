import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Header />
      <Body />
      <Footer />
    </Flex>
  )
}

export default Layout
