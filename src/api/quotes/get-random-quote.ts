import { Quote } from './types'

export const GET_RANDOM_QUOTE_KEY = 'quotes/random'
export const GET_RANDOM_QUOTE_ENDPOINT = 'https://api.quotable.io/quotes/random'

export const getRandomQuote = async (): Promise<Quote> => {
  const response = await fetch(GET_RANDOM_QUOTE_ENDPOINT)
  const [quote]: Quote[] = await response.json()

  return quote
}