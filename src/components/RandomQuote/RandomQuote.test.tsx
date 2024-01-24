import { QueryClient, QueryClientProvider } from 'react-query'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RandomQuote } from './RandomQuote'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false }
  }
})

const user = userEvent.setup()

describe('RandomQuote', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <RandomQuote />
      </QueryClientProvider>
    )
  })

  test('button shows correct text', () => {
    const button = screen.queryByRole('button', { name: 'Quote of the day' })
    
    expect(button).toBeInTheDocument()
  })

  test('clicking the button shows a quote', async () => {
    const button = screen.getByRole('button', { name: 'Quote of the day' })

    await user.click(button)

    const quoteContainer = screen.getByLabelText('Quote')

    expect(quoteContainer.textContent).toStrictEqual(expect.any(String))
    expect(quoteContainer.textContent).not.toBe('')
  })

  test('clicking the button again triggers another quote to be fetched', async () => {
    const button = screen.getByRole('button', { name: 'Quote of the day' })

    await user.click(button)

    const firstQuoteContainer = screen.getByLabelText('Quote')
    const firstQuote = firstQuoteContainer.textContent

    await user.click(button)

    const secondQuoteContainer = screen.getByLabelText('Quote')
    const secondQuote = secondQuoteContainer.textContent

    expect(secondQuote).not.toBe(firstQuote)
  })
})