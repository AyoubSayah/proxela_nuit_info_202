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
        Convaincue par Pierre KNEIP (1944-1995), alors responsable bénévole de
        la permanence téléphonique de AIDES Ile-de-France, l’AFLS a voulu, à
        l’instar de ce qui se faisait déjà dans plusieurs pays d’Europe,{' '}
      </Text>
      <Flex justifyContent="center" flexWrap="wrap" mt="3rem">
        <AvatarProgress avatarUrl={fontdateur} size="12rem" />
      </Flex>
    </ChakraDiv>
  )
}

export default DevTeam
