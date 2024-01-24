import { getAllDogBreeds } from './get-all-dog-breeds'

describe('get-all-dog-breeds', () => {
  test('that the data is mapped correctly', async () => {
    const data = await getAllDogBreeds()

    expect(data).toEqual([ 
      { 'value': expect.any(String), description: expect.any(String) },
      { 'value': expect.any(String), description: expect.any(String) },
      { 'value': expect.any(String) }
    ])
  })
})