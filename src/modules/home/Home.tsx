/* eslint-disable */

import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  ImageProps,
  Img,
  shouldForwardProp,
  Text,
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import coverPicture from '../../assets/landing/cover.svg'
import bottomNavbarImage from '../../assets/landing/navbar.png'
import AnimatedText from './components/AnimatedText'
import Canvas from './components/Canvas'
import CanvasLine from './components/CanvasAnimation2'
import CanvasBackground from './components/CanvasBackground'
import CarouselNews from './components/CarouselNews'
import DevTeam from './components/DevTeam'
import FaqQuestions from './components/FaqQuestions'
import Services from './components/Services'

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  // const ChakraImage = chakra(motion.img, {
  //   /**
  //    * Allow motion props and non-Chakra props to be forwarded.
  //    */
  //   shouldForwardProp: (prop) =>
  //     isValidMotionProp(prop) || shouldForwardProp(prop),
  // })
    const ChakraImage = motion<Omit<ImageProps, 'transition'>>(Image)
  return (
    <Box ref={containerRef}>
      <Canvas ElementRef={containerRef} />
      <Flex
        h="calc(100vh - 7rem)"
        w="100%"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="15"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        flexDirection={{ base: 'row-reverse', md: 'row' }}
      >
        <Flex
          flexDirection="column"
          mx="auto"
          mt="-5rem"
          gap=".5rem"
          order={{ base: 2, md: 'unset' }}
        >
          <AnimatedText
            as="h1"
            fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
            fontWeight="bold"
            color="primary.700"
            textAlign="left"
            maxW="30rem"
            letterSpacing={'.2rem'}
            text="Sida  Info  Service"
          />

          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            textAlign="left"
            maxW="30rem"
          >
             Info Service a été créée en 1990 au plus fort de l’épidémie de
            
          </Text>
          <Text maxW="30rem">
            Depuis sa fondation, SIS Association s’est inscrite dans la
            promotion de la santé sexuelle parce que convaincue que la vie
            sexuelle de chaque personne est un espace intime
          </Text>
          <Flex gap=".5rem" mt="1rem">
            <Link to="/auth/register">
              <Button
                color="white"
                colorScheme="primary"
                size={{ base: 'md', md: 'lg' }}
              >
                Rejoindre Nous
              </Button>
            </Link>
            <Link to={'/contactus'}>
              <Button size="lg">Contact Us</Button>
            </Link>
          </Flex>
        </Flex>
        <Box flexBasis="50%">
          <ChakraImage
            animate={{
              y: 20,
            }}
            src={coverPicture}
            alt="cocver"
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        </Box>
      </Flex>
      <Img
        height="5rem"
        mt="-2rem"
        position="absolute"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-6"
      />
      <Services />
      <Img
        height="5rem"
        mt="4rem"
        position="absolute"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-6"
      />
      <CarouselNews />
      <Img
        height="5rem"
        mt="3rem"
        position="absolute"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-6"
      />
      <FaqQuestions />
      <Img
        height="5rem"
        mt="3rem"
        position="absolute"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-6"
      />
      <DevTeam />
    </Box>
  )
}

export default Home
