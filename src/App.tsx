import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubProvider } from './providers'
import { Router } from './routes'
import { defaultTheme, GlobalStyles, ResetStyles } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetStyles />
      <GlobalStyles />

      <BrowserRouter>
        <GithubProvider>
          <Router />
        </GithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
