import { Box, BoxProps, Icon, keyframes } from '@chakra-ui/react'
import { FC } from 'react'
const rotateBlob = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}`
const BlobSmall: FC<BoxProps> = (props) => {
  const animationRotateBlob = rotateBlob + ' 10s  linear infinite'

  return (
    <Box
      animation={animationRotateBlob}
      fill="primary.300"
      w="10rem"
      h="10rem"
      {...props}
    >
      {' '}
      <Icon w="full" h="full" viewBox="0 0 425.9 377">
        <path d="M389.3 42c39.8 40.8 47.5 116.3 21.3 165.4-26.1 49.1-86 71.8-145.9 104.3-59.8 32.5-119.6 74.8-168.9 63.4C46.5 363.7 7.6 298.5 1 235.7-5.5 173 20.3 112.5 59.8 71.9 99.3 31.2 152.4 10.2 215 2.8 277.5-4.7 349.5 1.2 389.3 42z"></path>
      </Icon>
    </Box>
  )
}

export default BlobSmall