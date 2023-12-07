import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  keyframes,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdThumbsUp, IoMdThumbsDown, IoIosHeart } from 'react-icons/io'
import Pika from '../../../../components/pika/Pika'
import { useLikePostMutation } from '../../slices/PostSlice'
const goUp = keyframes`
0%{
transform:translateY(4rem);
opacity:0.2;
}
100%{
  transform:translateY(0);
  opacity:1;
  }
 `
const bounce = keyframes`
0%{
transform:translateY(5px);
}
40%{
  transform:translateY(-5px);
  }
70%{
    transform:translateY(0);
}
100%{
    transform:translateY(0);
}
 `
const scale = keyframes`
0%{
transform:scale(0.8);
}
40%{
  transform:scale(1.05);
  }
50%{
transform:scale(.8);
}  
70%{
    transform:scale(1);}
100%{

    transform:scale(1);}
 `

const Like = ({ postId }: any) => {
  const [showReactions, SetShowReaction] = useState(false)
  const [likeType, SetLikeType] = useState('')
  const [update, result] = useLikePostMutation()
  const animationUp = goUp + ' .3s ease-in-out '
  const animationBounce = bounce + ' 1s ease-in-out infinite  '
  const animationBounceOnce = bounce + ' 1s ease-in-out'

  const animationScale = scale + ' 1.3s ease-in-out infinite  '
  const animationScaleOnce = scale + ' 1s ease-in-out   '

  const handleLike = (type: string) => {
    if (type === likeType) {
      update({ reactionType: 'none', post: postId, userName: 'test' })
        .unwrap()
        .then(() => {
          SetLikeType('')
          SetShowReaction(false)
        })

      return
    }
    update({ reactionType: type, post: postId, userName: 'test' })
      .unwrap()
      .then(() => {
        SetLikeType(type)
        SetShowReaction(false)
      })
  }
  const getBackgroundColor = () => {
    if (likeType === 'like') {
      return 'primary.500'
    }
    if (likeType === 'love') {
      return 'red.500'
    }
    if (likeType === 'laugh') {
      return 'yellow.400'
    }
    if (likeType === 'dislike') {
      return 'gray.700'
    }
    return 'gray.100'
  }
  const getBackgroundHoverColor = () => {
    if (likeType === 'like') {
      return 'primary.600'
    }
    if (likeType === 'love') {
      return 'red.600'
    }
    if (likeType === 'laugh') {
      return 'yellow.500'
    }
    if (likeType === 'dislike') {
      return 'gray.600'
    }
    return 'gray.200'
  }
  const getIconAndText = () => {
    if (likeType === 'like') {
      return (
        <Flex
          alignItems="center"
          gap=".4rem"
          onClick={handleClick}
          w="full"
          justifyContent="center"
        >
          <Icon
            as={IoMdThumbsUp}
            animation={animationBounceOnce}
            w="1.5rem"
            h="1.5rem"
          />{' '}
          <Text fontWeight="semibold">Like</Text>{' '}
        </Flex>
      )
    }
    if (likeType === 'love') {
      return (
        <Flex
          alignItems="center"
          gap=".4rem"
          onClick={handleClick}
          w="full"
          justifyContent="center"
        >
          <Icon
            as={IoIosHeart}
            animation={animationScaleOnce}
            w="1.5rem"
            h="1.5rem"
          />{' '}
          <Text fontWeight="semibold">Love</Text>{' '}
        </Flex>
      )
    }
    if (likeType === 'laugh') {
      return (
        <Flex
          alignItems="center"
          gap=".4rem"
          onClick={handleClick}
          w="full"
          justifyContent="center"
        >
          <Pika animation={animationScaleOnce} w="1.5rem" h="1.5rem" />
          <Text fontWeight="semibold">Laugh</Text>{' '}
        </Flex>
      )
    }
    if (likeType === 'dislike') {
      return (
        <Flex
          alignItems="center"
          gap=".4rem"
          onClick={handleClick}
          w="full"
          justifyContent="center"
        >
          <Icon
            as={IoMdThumbsDown}
            animation={animationBounceOnce}
            w="1.5rem"
            h="1.5rem"
          />{' '}
          <Text fontWeight="semibold">Dislike</Text>{' '}
        </Flex>
      )
    }
    return (
      <Flex
        alignItems="center"
        gap=".4rem"
        onClick={handleClick}
        w="full"
        justifyContent="center"
      >
        <Icon as={IoMdThumbsUp} w="1.5rem" h="1.5rem" />{' '}
        <Text fontWeight="semibold">Like</Text>{' '}
      </Flex>
    )
  }
  const handleClick = () => {
    if (likeType === '') {
      SetLikeType('like')
      SetShowReaction(false)
      return
    }
    SetLikeType('')
    SetShowReaction(false)
  }
  return (
    <Center
      p=".5rem"
      flexBasis="50%"
      bg={getBackgroundColor()}
      color={likeType === '' ? 'gray.500' : 'white'}
      borderLeftRadius="lg"
      _hover={{ background: getBackgroundHoverColor() }}
      transition="all .3s"
      cursor="pointer"
      position="relative"
      onMouseEnter={() => SetShowReaction(true)}
      onMouseLeave={() => SetShowReaction(false)}
    >
      {getIconAndText()}
      {showReactions && (
        <Flex
          position="absolute"
          top="-3.7rem"
          left="0"
          height="3.7rem"
          minW="5rem"
          animation={animationUp}
          background="white"
          rounded="full"
          gap=".8rem"
          alignItems="center"
          boxShadow="md"
          px=".4rem"
        >
          <Center
            role="group"
            rounded="full"
            w="2.8rem"
            h="2.8rem"
            bg="primary.500"
            onClick={() => handleLike('like')}
          >
            <Icon
              w="2rem"
              color="white"
              h="2rem"
              animation={animationBounce}
              as={IoMdThumbsUp}
            />
          </Center>
          <Center
            rounded="full"
            w="2.8rem"
            h="2.8rem"
            bg="red.500"
            onClick={() => handleLike('love')}
          >
            <Icon
              w="2rem"
              h="2rem"
              color="white"
              as={IoIosHeart}
              animation={animationScale}
            />
          </Center>
          <Box onClick={() => handleLike('laugh')}>
            <Pika animation={animationScale} />
          </Box>
          <Center
            rounded="full"
            w="2.8rem"
            h="2.8rem"
            bg="gray.700"
            onClick={() => handleLike('dislike')}
          >
            <Icon
              w="2rem"
              h="2rem"
              color="white"
              as={IoMdThumbsDown}
              animation={animationBounce}
            />
          </Center>
        </Flex>
      )}
    </Center>
  )
}

export default Like
