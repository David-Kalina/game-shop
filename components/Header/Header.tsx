import { Stack, Text } from '@chakra-ui/layout'
import { SkeletonCircle } from '@chakra-ui/skeleton'
import React from 'react'

function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      px="2rem"
      py="1rem"
      position="fixed"
      top="0"
      left="0"
      width="100%"
    >
      <SkeletonCircle width="30px" />
      <Stack direction="row">
        <Text>Item</Text>
        <Text>Item</Text>
        <Text>Item</Text>
        <Text>Item</Text>
      </Stack>
    </Stack>
  )
}

export default Header
