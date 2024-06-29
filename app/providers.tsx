'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { headingTheme } from '../components/Heading'

const theme = extendTheme({
  components: {
      Heading: headingTheme,
      Modal: {
        baseStyle: {
          dialogContainer: {
            px: 4,
        },
      },
    }
  }
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}