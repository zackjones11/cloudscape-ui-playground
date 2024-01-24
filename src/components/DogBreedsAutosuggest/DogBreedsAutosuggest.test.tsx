import { QueryClient, QueryClientProvider } from 'react-query'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DogBreedsAutosuggest } from './DogBreedsAutosuggest'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
})

const user = userEvent.setup()

describe('DogBreedsAutosuggest', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <DogBreedsAutosuggest />
      </QueryClientProvider>
    )
  })

  test('placeholder text is shown correctly', () => {
    const placeholder = screen.queryByPlaceholderText('Search all dog breeds')

    expect(placeholder).toBeInTheDocument()
  })

  test('all options are shown when clicking dropdown', async () => {
    const autosuggest = screen.getByRole('combobox')

    await user.click(autosuggest)

    const options = screen.getAllByRole('option')

    expect(options).toHaveLength(3)
  })

  test('that when clicking an option, the selected value is shown', async () => {
    const autosuggest = screen.getByRole('combobox')

    await user.click(autosuggest)

    const firstOption = screen.getAllByRole('option')[0]

    await user.click(firstOption)

    const breedName = screen.getByText('Selected Breed:').children[0].textContent
    
    expect(breedName?.length).greaterThan(1)
  })
})