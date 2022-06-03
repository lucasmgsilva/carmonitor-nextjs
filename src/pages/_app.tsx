import '../styles/globals.css'
import '../i18n'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box bgGradient="radial(#121738 0%, #110427 90%)" minH="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp