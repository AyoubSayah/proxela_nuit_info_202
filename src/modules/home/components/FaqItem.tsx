import { Card, Img, Skeleton, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLazyGetImageQuery } from '../slices/landingAsyncSlice'

const FaqItem = ({ data, isVisible }: any) => {

  return (
    <Card
      bg="white"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      height="31rem"
      mx={{ base: 'auto', md: '1rem' }}
      p="1rem"
      rounded="lg"
      w="19rem"
      transition="all 0.3s ease-in-out"
      _hover={{
        border: '4px solid ',
        borderColor: 'primary.500',
        transform: 'scale(1.05)',
      }}
    >
     
        <Img
          alt={data.title}
          objectFit="cover"
          rounded="lg"
          src={data.image}
          w="full"
          minH="18rem"
          maxH="18rem"
        />

      <Text fontSize="lg" fontWeight="bold" mt="1rem" noOfLines={3}>
        {data?.title}
      </Text>
      <Text noOfLines={3}>{data?.description}</Text>
      <Text as="a" color="blue.500" href={data?.link} target="_blank">
        Discover details
      </Text>
    </Card>
  )
}

export default FaqItem
