import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'

function Layout() {
  return (
    <Flex
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>Header</Box>
      <Box>Body</Box>
      <Box>Footer</Box>
    </Flex>
  )
}

export default Layout
