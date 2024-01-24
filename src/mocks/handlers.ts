import { HttpResponse, http } from 'msw'
import { faker } from '@faker-js/faker'

import { GET_RANDOM_QUOTE_ENDPOINT } from '~/api/quotes'
import type { Quote } from '~/api/quotes/types'

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

export const restHandlers = [
  randomQuoteHandler
]