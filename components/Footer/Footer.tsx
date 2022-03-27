import { GridItem, SimpleGrid } from '@chakra-ui/layout'

function Footer() {
  return (
    <SimpleGrid minChildWidth="100px" px="2rem" py="1rem" width="100%">
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
    </SimpleGrid>
  )
}

export default Footer
