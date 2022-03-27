import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
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
      <Box flexGrow={1}>{children}</Box>
      <Box>Footer</Box>
    </Flex>
  )
}

export default Layout
