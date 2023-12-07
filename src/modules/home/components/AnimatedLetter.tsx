import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp, useAnimationControls } from 'framer-motion'
import React, { FC, useEffect, useState } from 'react'

interface AnimatedLetterProps {
  letter: string
  index: number
}
const AnimatedLetter: FC<AnimatedLetterProps> = ({ letter, index }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const ChakraBox = chakra(motion.span, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  const controls = useAnimationControls()
  useEffect(() => {
    animateLetter(index)
  }, [])
  const animateLetter = (index?: number) => {
    void controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4,.55,1)',
        'scale3d(.75,1.25,1)',
        'scale3d(1.25,.85,1)',
        'scale3d(.9,1.05,1)',
        'scale3d(1, 1, 1)',
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        delay: index != null ? index * 0.3 : 0,
      },
    })
  }

  return (
    <ChakraBox
      key={index}
      animate={controls}
      display="inline-block"
      mx="1px"
      onMouseOver={() => {
        if (!isPlaying) {
          animateLetter()
        }
      }}
      onAnimationComplete={() => {
        setIsPlaying(false)
      }}
      whileTap={{ scale: 0.9 }}
      cursor="pointer"
    >
      {letter}
    </ChakraBox>
  )
}

export default AnimatedLetter
