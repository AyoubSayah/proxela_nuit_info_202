import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export const theme = extendTheme({
  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: '"Open Sans", sans-serif',
  },
  colors,
  styles: {
    global: {
      html: {
        fontSize: '14px',
        webkitUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      },
      input: {
        _focusVisible: {
          borderColor: 'primary.500 !important',
          boxShadow: '0 0 0 1px var(--chakra-colors-primary-500) !important',
        },
      },
      textarea: {
        _focusVisible: {
          borderColor: 'primary.500 !important',
          boxShadow: '0 0 0 1px var(--chakra-colors-primary-500) !important',
        },
      },
      select: {
        _focusVisible: {
          borderColor: 'primary.500 !important',
          boxShadow: '0 0 0 1px var(--chakra-colors-primary-500) !important',
        },
      },
      body: {},

      '&::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
        height: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'primary.500',
        borderRadius: '24px',
      },
    },
  },
})
