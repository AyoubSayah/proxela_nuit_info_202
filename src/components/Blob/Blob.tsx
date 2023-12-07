import { Box, BoxProps, Icon, keyframes } from '@chakra-ui/react'
import { FC } from 'react'
const rotateBlob = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}
 `

const Blob: FC<BoxProps> = (props) => {
  const animationRotateBlob = rotateBlob + ' 10s  linear infinite'

  return (
    <Box
      animation={animationRotateBlob}
      fill="primary.300"
      w="18rem"
      height="18rem"
      {...props}
    >
      <Icon viewBox="0 0 317.5 353.7" w="full" h="full">
        <path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z" />
      </Icon>
    </Box>
  )
}

export default Blob
