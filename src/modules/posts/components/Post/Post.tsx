import {
  Avatar,
  Box,
  Center,
  Collapse,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'
import {
  AiOutlineComment,
  AiOutlineSend,
  AiTwotoneLike,
  AiTwotoneDislike,
} from 'react-icons/ai'
import { useIfInView } from '../../../../utils/hooks/isInView'
import { checkRtl } from '../../../../utils/utils'
import {
  useLazyGetImageQuery,
  useLazyGetImageProfileQuery,
} from '../../../home/slices/landingAsyncSlice'
import { useGetPostQuery, useVotePostMutation } from '../../slices/PostSlice'
import CommentList from './CommentList'
import Like from './Like'
import ListOfLikes from './ListOfLikes'
interface PostProps {
  post: any
}
const Post: FC<PostProps> = ({ post }) => {
  const [show, setShow] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState(false)
  const [votePost, { isLoading, isSuccess }] = useVotePostMutation()
  const refDiv = React.useRef<any>()
  const refImage = React.useRef<any>()
  const [showComment, setShowComment] = React.useState(false)
  const [trigger, { isFetching, data: image, error }] = useLazyGetImageQuery()
  const [triggerProfile, { data: profileImage, error: errorProfile }] =
    useLazyGetImageProfileQuery()
  // useIfInView({id:refDiv.current,trigger,url:post?.image})

  const handleTogleComment = () => setShowComment(!showComment)
  const handleToggle = () => setShow(!show)
  useEffect(() => {
    if (post?.image || post?.user?.image) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting
          if (intersecting) {
            if (post?.image) {
              trigger({ url: post.image })
            }
            if (post?.user?.image) {
              triggerProfile({ url: post?.user?.image })
            }
            observer.unobserve(entry.target)
          }
        })
      })
      observer.observe(refImage.current)
    }
    if (checkRtl(post?.content)) {
      refDiv.current.style.textAlign = 'right'
    }
    if (refDiv.current.scrollHeight > 45) {
      setContentHeight(true)
    }
  }, [])

  const votePostHandler = (postId, status) => {
    votePost({
      postId,
      status,
    })
      .unwrap()
      .then((data) => {
        console.log('postId', data)
      })
  }

  return (
    <Box
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      p="1rem"
      background={
        post.upvote === post.downVote
          ? 'yellow.100'
          : post.upvote > post.downVote
          ? 'green.100'
          : 'red.100'
      }
      w="36rem"
      maxW="100%"
      rounded="lg"
      textTransform="capitalize"
      ref={refImage}
    >
      <Flex alignItems="center" gap=".5rem" mb="1rem">
        {' '}
        <Avatar
          name={post.user?.firstName}
          src={errorProfile ? post.user?.firstName : profileImage}
        />
        <Flex flexDir="column">
          <Text fontWeight="bold" my="0">
            {post.user?.firstName + ' ' + post.user?.firstName}
          </Text>
          <Text fontSize="sm" my="0">
            2 December 2022
          </Text>
        </Flex>
      </Flex>
      <Collapse startingHeight={40} ref={refDiv} in={show}>
        {post?.content}
      </Collapse>
      {contentHeight && (
        <Text
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
          color="blue.500"
          onClick={handleToggle}
        >
          {show ? 'Show Less' : 'Show More'}
        </Text>
      )}
      {post.image && (
        <Skeleton
          isLoaded={(!isFetching && image != undefined) || error}
          w="100%"
          display="flex"
          justifyContent="center"
        >
          <Box
            w="35rem"
            h="35rem"
            mt="1rem"
            maxW="100%"
            maxH="100%"
            background="gray.200"
            rounded="md"
          >
            <Image
              h="100%"
              objectFit="contain"
              src={error ? post?.image : image}
              w="100%"
            />
          </Box>
        </Skeleton>
      )}
      <Flex mt="1rem" gap={5}>
        <Center
          p=".5rem"
          flexBasis="50%"
          bg="gray.100"
          borderRightRadius="lg"
          _hover={{ background: 'gray.200' }}
          transition="all .3s"
          cursor="pointer"
          color="gray.500"
          gap=".4rem"
          onClick={() => {
            votePostHandler(post._id, 'up')
          }}
        >
          <Icon as={AiTwotoneLike} w="1.5rem" h="1.5rem" color={'green.300'} />{' '}
          <Text fontWeight="semibold" color={'green.300'}>
            UP VOTE
          </Text>
          <Text fontWeight={'bold'} fontSize={30} color={'green.500'}>
            {post.upvote}
          </Text>
        </Center>
        {isLoading && <Spinner />}
        <Center
          p=".5rem"
          flexBasis="50%"
          bg="gray.100"
          borderRightRadius="lg"
          _hover={{ background: 'gray.200' }}
          transition="all .3s"
          cursor="pointer"
          color="gray.500"
          gap=".4rem"
          onClick={() => {
            votePostHandler(post._id, 'down')
          }}
        >
          <Icon as={AiTwotoneDislike} w="1.5rem" h="1.5rem" color={'red'} />

          <Text fontWeight="semibold" color={'red'}>
            DOWN VOTE
          </Text>
          <Text fontWeight={'bold'} fontSize={30} color={'red.500'}>
            {post.downVote}
          </Text>
        </Center>
      </Flex>
    </Box>
  )
}

export default Post
