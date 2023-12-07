import { Box, keyframes } from '@chakra-ui/react'
import React, { FC } from 'react'

const beat = keyframes`
50%{
transform:scale(0.75);
opacity:0.2;
}
100%{
  transform:scale(1);
  opacity:1;
  }
 `
type LoderProps = {
  backDrop?: boolean
}
const Loader: FC<LoderProps> = ({ backDrop = false }) => {
  const animation_1 = beat + ' 1s infinite linear'
  const animation_2 = beat + ' 0.5s infinite linear'
  const animation_3 = beat + ' 0.3s infinite linear'
  return (
    <Box
      alignItems="center"
      display="flex"
      h="full"
      justifyContent="center"
      position="fixed"
      w="full"
      zIndex={99}
    >
      {backDrop && (
        <Box
          bg="blackAlpha.200"
          h="full"
          position="fixed"
          w="full"
          zIndex={2}
        />
      )}{' '}
      <Box
        animation={animation_1}
        bg="primary.500"
        display="inline-block"
        h="1.3rem"
        rounded="full"
        w="1.3rem"
      />
      <Box
        animation={animation_2}
        bg="primary.500"
        display="inline-block"
        h="1.3rem"
        rounded="full"
        w="1.3rem"
      />
      <Box
        animation={animation_3}
        bg="primary.500"
        display="inline-block"
        h="1.3rem"
        rounded="full"
        w="1.3rem"
      />
    </Box>
  )
}

export default Loader
