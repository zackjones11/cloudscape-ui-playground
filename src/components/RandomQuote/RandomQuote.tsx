import { Alert, Button, SpaceBetween } from '@cloudscape-design/components'
import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'

import { GET_RANDOM_QUOTE_KEY, getRandomQuote } from '~/api/quotes'

export const RandomQuote = () => {
  const [shouldFetch, setShouldFetch] = useState(false)

  const { data, refetch, isFetching } = useQuery(
    GET_RANDOM_QUOTE_KEY, 
    getRandomQuote, 
    { enabled: shouldFetch }
  )

  const handleClick = useCallback(() => {
    // If we already have fetched a quote, refetch
    if (shouldFetch) {
      refetch()
      return
    }

    // Otherwise enable the query
    setShouldFetch(true)
  }, [shouldFetch, refetch])

  return (
    <>
      <SpaceBetween size='s'>
        <Button onClick={handleClick} loading={isFetching}>Quote of the day</Button>

        {!isFetching && data?.content && 
          <Alert>
            <span aria-label="Quote">{data.content}</span>
          </Alert> 
        }
      </SpaceBetween>
    </>
  )
}