import { Button } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

function Pagination({ currentPage, totalPages }: PaginationProps) {
  const { push, asPath } = useRouter()

  const pageName = asPath.split('/')[1]

  return (
    <HStack>
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1
        const isCurrent = page === currentPage
        const isDisabled = page > totalPages

        return (
          <Button
            key={page}
            disabled={isDisabled}
            onClick={() => {
              if (!isDisabled) {
                push(`/${pageName}/page/${page}`)
              }
            }}
            variant={isCurrent ? 'outline' : 'ghost'}
            color={isCurrent ? 'blue.500' : 'gray.500'}
            fontWeight={isCurrent ? 'bold' : 'normal'}
            fontSize={isCurrent ? 'lg' : 'md'}
            mx={1}
          >
            {page}
          </Button>
        )
      })}
    </HStack>
  )
}

export default Pagination
