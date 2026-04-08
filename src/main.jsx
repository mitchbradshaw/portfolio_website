import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import App from './App.jsx'
import { system } from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <App />
        </ThemeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
)
