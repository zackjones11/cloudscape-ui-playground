import { getRandomQuote } from './get-random-quote'

describe('get-random-quote', () => {
  test('that the data is mapped correctly', async () => {
    const data = await getRandomQuote()

    const expected = {
      _id: expect.any(String),
      author: expect.any(String),
      authorSlug: expect.any(String),
      content: expect.any(String),
      dateAdded: expect.any(String),
      dateModified: expect.any(String),
      length: expect.any(Number),
      tags: expect.any(Array)
    }

    expect(data).toEqual(expected)
  })
})