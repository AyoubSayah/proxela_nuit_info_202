import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsEmojiLaughingFill } from 'react-icons/bs'
import { IoIosHeart, IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io'
import Pika from '../../../../components/pika/Pika'
import { useGetLikesQuery } from '../../slices/PostSlice'

import LikesNumber from './LikesNumber'
const listOfLikes = [
  {
    type: 'like',
    owner: 'ayoub sayah',
  },
  {
    type: 'like',
    owner: 'hedi sayah',
  },

  {
    type: 'love',
    owner: 'feryel zoghlami',
  },
  {
    type: 'laugh',
    owner: 'houssem gran',
  },
  {
    type: 'laugh',
    owner: 'yassine mrad',
  },
  {
    type: 'dislike',
    owner: 'takwa al Mekni',
  },
]
const ListOfLikes = ({ postId }: any) => {
  const { data } = useGetLikesQuery(postId)
  const [loveList, SetLoveList] = useState([])
  const [likeList, SetLikeList] = useState([])
  const [laughList, SetLaughList] = useState([])
  const [dislikeList, SetDislikeList] = useState([])
  useEffect(() => {
    console.log(data, 'data')

    SetLaughList(
      data?.response?.filter((like) => like.reactionType === 'laugh')
    )
    SetDislikeList(
      data?.response?.filter((like) => like.reactionType === 'dislike')
    )
    console.log('lovelist', loveList)

    SetLikeList(data?.response?.filter((like) => like.reactionType === 'like'))
    SetLoveList(data?.response?.filter((like) => like.reactionType === 'love'))
  }, [data?.response])
  return (
    <Flex alignItems="center" mt="1rem">
      {likeList?.length > 0 && (
        <Center
          bg="primary.500"
          h="1.5rem"
          pos={'relative'}
          role="group"
          cursor="pointer"
          rounded="full"
          w="1.5rem"
        >
          <Icon as={IoMdThumbsUp} color="white" h="1rem" w="1rem" />
          <LikesNumber
            _groupHover={{
              display: 'block',
              visibility: 'visible',
            }}
            display="none"
            likeType="Like"
            listOfLikes={likeList}
          />
        </Center>
      )}
      {loveList?.length > 0 && (
        <Center
          bg="red.500"
          h="1.5rem"
          ml="-.3rem"
          rounded="full"
          w="1.5rem"
          position="relative"
          role="group"
          cursor="pointer"
        >
          <Icon as={IoIosHeart} color="white" h="1rem" w="1rem" />
          <LikesNumber
            _groupHover={{
              display: 'block',
              visibility: 'visible',
            }}
            display="none"
            likeType="love"
            listOfLikes={loveList}
          />
        </Center>
      )}
      {laughList?.length > 0 && (
        <Box
          h="1.5rem"
          ml="-.3rem"
          w="1.5rem"
          role="group"
          cursor="pointer"
          position="relative"
        >
          <Pika h="100%" w="100%" />
          <LikesNumber
            _groupHover={{
              display: 'block',
              visibility: 'visible',
            }}
            display="none"
            likeType="laugh"
            listOfLikes={laughList}
          />
        </Box>
      )}
      {dislikeList?.length > 0 && (
        <Center
          bg="gray.700"
          h="1.5rem"
          ml="-.3rem"
          rounded="full"
          w="1.5rem"
          position="relative"
          role="group"
          cursor="pointer"
        >
          <Icon as={IoMdThumbsDown} color="white" h="1rem" w="1rem" />
          <LikesNumber
            _groupHover={{
              display: 'block',
              visibility: 'visible',
            }}
            display="none"
            likeType="dislike"
            listOfLikes={dislikeList}
          />
        </Center>
      )}
      <Text color="gray.500" fontSize="sm" ml=".5rem" textTransform="none">
        {data?.response?.length} Person reacted to this post
      </Text>
      <Text ml="auto" color="gray.500" fontSize="sm">
        0 Comment
      </Text>
    </Flex>
  )
}

export default ListOfLikes
