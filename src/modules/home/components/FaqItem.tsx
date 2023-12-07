import { Card, Img, Skeleton, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLazyGetImageQuery } from '../slices/landingAsyncSlice'

const FaqItem = ({ data, isVisible }: any) => {
  const [trigger, { isFetching, data: image }] = useLazyGetImageQuery()
  useEffect(() => {
    if (data?.image && isVisible && !image) {
      trigger({ url: data.image })
    }
  }, [isVisible])
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
      <Skeleton
        isLoaded={!isFetching && image != undefined}
        w="100%"
        display="flex"
        justifyContent="center"
      >
        <Img
          alt={data.title}
          objectFit="cover"
          rounded="lg"
          src={image}
          w="full"
          minH="18rem"
          maxH="18rem"
        />
      </Skeleton>

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
