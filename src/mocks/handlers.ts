import { HttpResponse, http } from 'msw'
import { faker } from '@faker-js/faker'

import { GET_RANDOM_QUOTE_ENDPOINT } from '~/api/quotes'
import { GET_ALL_DOG_BREEDS_ENDPOINT } from '~/api/dog-breeds'
import type { Quote } from '~/api/quotes/types'
import type { DogBreedResponse } from '~/api/dog-breeds/types'

const randomQuoteHandler = http.get(GET_RANDOM_QUOTE_ENDPOINT, () => {
  const quote = {
    _id: faker.string.uuid(),
    content: faker.lorem.sentence(),
    author: faker.person.firstName(),
    tags: [],
    authorSlug: faker.person.firstName(),
    length: faker.number.int(),
    dateAdded: faker.date.anytime().toString(),
    dateModified: faker.date.anytime().toString()
  }

  return HttpResponse.json<Quote[]>([quote])
})

const allDogBreedsHandler = http.get(GET_ALL_DOG_BREEDS_ENDPOINT, () => 
  HttpResponse.json<DogBreedResponse>({
    message: {
      [faker.animal.dog()]: [faker.location.country(), faker.location.country()], 
      [faker.animal.dog()]: []
    }
  })
)

export const restHandlers = [
  randomQuoteHandler,
  allDogBreedsHandler,
]