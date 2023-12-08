/* eslint-disable */

import { Box, chakra, Flex, shouldForwardProp, Text } from '@chakra-ui/react'
import React from 'react'
import feryel from '../../../assets/team/feryel.jpg'
import ayoub from '../../../assets/team/ayoub.png'
import mahmoud from '../../../assets/team/mahmoud.jpg'
import yassine from '../../../assets/team/yassine.jpg'
import elbou from '../../../assets/team/elbou.jpg'
import houssem from '../../../assets/team/houssem.jpg'
import haroon from '../../../assets/team/haroon.jpg'
import fontdateur from '../../../assets/landing/fondateur.png'

import { shuffleArray } from '../../../utils/utils'
import UseInView from '../../../utils/hooks/UseInView'
import { motion, isValidMotionProp } from 'framer-motion'
import AvatarProgress from '../../../components/avatar/Avatar'
const DevTeam = () => {
  const devs = [feryel, ayoub, mahmoud, yassine, elbou, houssem, haroon]
  const { ref, controls } = UseInView()

  const ChakraDiv = chakra(motion.section, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  return (
    <ChakraDiv
      initial={{ y: 400, opacity: 0 }}
      ref={ref}
      animate={controls}
      zIndex={15}
      position="relative"
      mb="18rem"
    >
      <Text
        as="h2"
        fontWeight="extrabold"
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        mt="19rem"
        textAlign="center"
        textTransform="capitalize"
        maxW={{ base: '100%', md: '50rem' }}
        mx="auto"
      >
        Le fondateur de l'Association
      </Text>
      <Text
        fontSize={{ base: 'lg', md: '2xl' }}
        maxW={{ base: '100%', md: '45rem' }}
        mx="auto"
        textAlign="center"
        textTransform="capitalize"
        mt="1rem"
      >
Le Réseau Action Climat – France a été créé en 1996, à l'initiative de France Nature Environnement (FNE) et de WWF, Greenpeace et les Amis de la Terre, membres du Réseau Action Climat International (Climate Action Network International – CAN-International), pour en faire le réseau français d'associations spécialiste ...
      </Text>
      <Flex justifyContent="center" flexWrap="wrap" mt="3rem">
        <AvatarProgress avatarUrl={""} size="12rem" />
      </Flex>
    </ChakraDiv>
  )
}

export default DevTeam
