import { Box, BoxProps, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { memo } from 'react'

const BackgrounDiv = () => {
  const ChakraBox = motion<Omit<BoxProps, 'transition'>>(Box)

  return (
    <Box
      backgroundAttachment="fixed"
      display="flex"
      justifyContent="space-between"
      zIndex="5"
      position="fixed"
      w="100%"
      h="100%"
      overflow="hidden"
    >
      <ChakraBox
        alignItems="center"
        background="primary.500"
        display="flex"
        height="100px"
        justifyContent="center"
        zIndex="10"
        padding="2"
        width="100px"
        animate={{
          x: [0, 150, 200, 100, 0],
          y: [0, 150, -100, 0],
        }}
        rounded="full"
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <ChakraBox
        alignItems="center"
        background="primary.500"
        display="flex"
        height="80px"
        justifyContent="center"
        padding="2"
        rounded="full"
        width="80px"
        animate={{
          x: [0, -50, -100, -300, 0],
          y: [0, 450, -50, 0],
        }}
        transition={{
          duration: 9,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <ChakraBox
        alignItems="center"
        background="primary.500"
        display="flex"
        height="100px"
        zIndex="5"
        justifyContent="center"
        padding="2"
        rounded="full"
        width="100px"
        animate={{
          x: [0, -300, -200, -400, 0],
          y: [0, 250, -100, 0],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <ChakraBox
        alignItems="center"
        background="primary.500"
        display="flex"
        initial={{ y: 500 }}
        height="100px"
        justifyContent="center"
        padding="2"
        rounded="full"
        width="100px"
        animate={{
          x: [0, -300, -200, -400, 0],
          y: [500, 250, -100, 500],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <ChakraBox
        alignItems="center"
        background="primary.500"
        display="flex"
        initial={{ y: 600, x: 100 }}
        height="30px"
        justifyContent="center"
        padding="2"
        zIndex="5"
        rounded="full"
        width="30px"
        animate={{
          x: [100, -300, -200, -400, 100],
          y: [600, 250, -100, 600],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </Box>
  )
}

export default memo(BackgrounDiv)
