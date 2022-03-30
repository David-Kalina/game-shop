import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useRouter } from 'next/router'
import React from 'react'

import { FaSearch } from 'react-icons/fa'

function Search() {
  const [query, setQuery] = React.useState('')

  const { push, reload } = useRouter()

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      push('/search', {
        query: {
          query,
        },
      })
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase())
  }

  return (
    <InputGroup onKeyDown={onKeyDown}>
      <Input onChange={onChange} type="text" placeholder="search" />
      <InputRightElement>
        <Icon as={FaSearch} />
      </InputRightElement>
    </InputGroup>
  )
}

export default Search
