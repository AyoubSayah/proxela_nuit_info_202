/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import {
  Box,
  chakra,
  Flex,
  Icon,
  shouldForwardProp,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import { Navigation } from 'swiper'
import { motion, isValidMotionProp } from 'framer-motion'

import { useGetNewsQuery } from '../slices/landingAsyncSlice'
import UseInView from '../../../utils/hooks/UseInView'

import CarouselItem from './CarouselItem'
import faqs from '../Mock/faq'
import FaqItem from './FaqItem'

const FaqQuestions = () => {
  const [myFaqs, setFaqs] = React.useState([...faqs])
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const listOfSkeletons = [1, 2, 3, 4]
  const { ref, controls } = UseInView()

  const ChakraDiv = chakra(motion.section, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  return (
    <ChakraDiv
      animate={controls}
      initial={{ y: 400, opacity: 0 }}
      my="8rem"
      ref={ref}
      position="relative"
      zIndex={15}
    >
      <Text
        as="h2"
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        fontWeight="extrabold"
        maxW={{ base: '100%', md: '50rem' }}
        mt="20rem"
        mx="auto"
        textAlign="center"
        textTransform="capitalize"
      >
        QUESTIONS FRÉQUENTES VIH/SIDA{' '}
      </Text>

      <Box p="4rem">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          slidesPerView={4}
          watchSlidesProgress={true}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            320: { slidesPerView: 1 },
            680: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          //   sx={{ '.swiper-wrapper': { padding: '0 2rem;' } }}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          {myFaqs &&
            myFaqs.length > 0 &&
            myFaqs?.map((data: any) => (
              <SwiperSlide>
                {({ isVisible }) => (
                  <FaqItem key={data.title} data={data} isVisible={isVisible} />
                )}
              </SwiperSlide>
            ))}

          <Box
            ref={navigationNextRef}
            color="primary.500"
            cursor="pointer"
            height="3rem"
            pos="absolute"
            right="-.8rem"
            top="45%"
            transform="translateY(-50%)"
            width="3rem"
            zIndex={26}
          >
            <Icon fill="primary.500" h="full" viewBox="0 0 256 512" w="full">
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
            </Icon>
          </Box>
          <Box
            ref={navigationPrevRef}
            color="primary.500"
            cursor="pointer"
            height="3rem"
            left="0rem"
            pos="absolute"
            top="45%"
            transform="translateY(-50%)"
            width="3rem"
            zIndex={26}
          >
            <Icon fill="primary.500" h="full" viewBox="0 0 256 512" w="full">
              <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
            </Icon>
          </Box>
        </Swiper>
      </Box>
    </ChakraDiv>
  )
}

export default FaqQuestions
