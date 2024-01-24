import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('that the correct text is shwon', () => {
    const text = screen.queryByText('it works')
    expect(text).toBeInTheDocument()
  })
})