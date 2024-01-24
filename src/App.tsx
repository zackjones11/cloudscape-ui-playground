import { AppLayout, Container, ContentLayout, Header, SpaceBetween, Toggle } from '@cloudscape-design/components'

import { RandomQuote, DogBreedsAutosuggest } from './components'
import { useMode } from './hooks'

const App = () => {
  const { isDarkMode, toggleMode } = useMode()

  return (
    <AppLayout
      navigationHide
      toolsHide
      content={
        <ContentLayout
          header={
            <SpaceBetween size="m">
              <Header variant="h1" description="A simple playground for me to try out different elements of Cloudscape Design System">
                Cloudscape Playground
              </Header>

              <Toggle checked={isDarkMode} onChange={toggleMode}>
                Dark mode
              </Toggle>
            </SpaceBetween>
          }
        >
          <SpaceBetween size='m'>
            <Container>
              <RandomQuote />
            </Container>

            <Container>
              <DogBreedsAutosuggest />
            </Container>
          </SpaceBetween>
        </ContentLayout>
      }
    />
  )
}

export default App
