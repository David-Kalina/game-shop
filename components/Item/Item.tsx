import { Flex, Text, VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Item from '../../types/Item'

function Item({ details }: { details: Item }) {
  return (
    <VStack align="stretch">
      <Image
        src={details.image}
        alt={details.name}
        width="100%"
        objectFit="fill"
        height="200px"
      />
      <Flex justifyContent="space-between">
        <Text fontSize="xs">{details.name}</Text>
        <Box>
          <Text textAlign="right" fontSize="xs">
            ${details.price}
          </Text>
          <Text fontSize="xs">{details.inventory} in stock</Text>
        </Box>
      </Flex>
    </VStack>
  )
}

export default Item
