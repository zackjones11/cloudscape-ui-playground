import { DogBreed, DogBreedResponse } from './types'

export const GET_ALL_DOG_BREEDS = 'breeds/list/all'
export const GET_ALL_DOG_BREEDS_ENDPOINT = 'https://dog.ceo/api/breeds/list/all'

export const getAllDogBreeds = async (): Promise<DogBreed[]> => {
  const response = await fetch(GET_ALL_DOG_BREEDS_ENDPOINT)
  const { message }: DogBreedResponse = await response.json()

  if (!message) {
    return []
  }
  
  const dogBreeds: DogBreed[] = []

  Object.entries(message).forEach(([breed, subBreeds]) => {
    if (!subBreeds.length) {
      dogBreeds.push({ value: breed })
      return
    }

    const flatten = subBreeds.map(subBreed => ({ value: breed, description: subBreed }))
    dogBreeds.push(...flatten)
  })

  return dogBreeds
}