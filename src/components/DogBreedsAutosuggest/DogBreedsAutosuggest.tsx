import { Autosuggest, SpaceBetween, TextContent } from '@cloudscape-design/components'
import { useState } from 'react'
import { useQuery } from 'react-query'

import { GET_ALL_DOG_BREEDS, getAllDogBreeds } from '~/api/dog-breeds'

export const DogBreedsAutosuggest = () => {
  const [selected, setSelected] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  const { data: breeds } = useQuery(
    GET_ALL_DOG_BREEDS, 
    getAllDogBreeds, 
    { enabled: isOpen }
  )

  return (
    <SpaceBetween size='s'>
      <Autosuggest
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onChange={({ detail }) => setSelected(detail.value)}
        enteredTextLabel={(value) => `${value}`}
        value={selected}
        options={breeds}
        ariaLabel='Find a particular dog breed'
        placeholder='Search all dog breeds'
        empty='No dog breed found'
      />

      {selected ? (
        <TextContent>
          Selected Breed: <span>{selected}</span>
        </TextContent>
      ) : null}
    </SpaceBetween>
  )
}