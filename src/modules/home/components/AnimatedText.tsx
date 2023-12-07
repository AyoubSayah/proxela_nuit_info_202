import { Box, BoxProps, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp, useAnimationControls } from 'framer-motion'
import React, { FC, useState } from 'react'

import AnimatedLetter from './AnimatedLetter'
type AnimatedTextProps = {
  text: string
} & BoxProps
const AnimatedText: FC<AnimatedTextProps> = ({ text, ...props }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const ChakraBox = chakra(motion.span, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  const letters = text.split('')
  const controls = useAnimationControls()

  return (
    <Box {...props}>
      {letters.map((letter, index) => (
        <AnimatedLetter key={index} index={index} letter={letter} />
      ))}
    </Box>
  )
}

export default AnimatedText
