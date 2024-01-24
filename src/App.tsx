import { QueryClient, QueryClientProvider } from 'react-query'
import { Container, SpaceBetween } from '@cloudscape-design/components'

import { RandomQuote, DogBreedsAutosuggest } from './components'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SpaceBetween size='m'>
        <Container>
          <RandomQuote />
        </Container>

        <Container>
          <DogBreedsAutosuggest />
        </Container>
      </SpaceBetween>
    </QueryClientProvider>
  )
}

export default App
