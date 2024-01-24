import { QueryClient, QueryClientProvider } from 'react-query'

import { RandomQuote } from './components'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RandomQuote />
    </QueryClientProvider>
  )
}

export default App
