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
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'
import { AiOutlineComment, AiOutlineSend } from 'react-icons/ai'
import { useIfInView } from '../../../../utils/hooks/isInView'
import { checkRtl } from '../../../../utils/utils'
import {
  useLazyGetImageQuery,
  useLazyGetImageProfileQuery,
} from '../../../home/slices/landingAsyncSlice'
import { useGetPostQuery } from '../../slices/PostSlice'
import CommentList from './CommentList'
import Like from './Like'
import ListOfLikes from './ListOfLikes'
interface PostProps {
  post: any
}
const Post: FC<PostProps> = ({ post }) => {
  const [show, setShow] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState(false)

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

  return (
    <Box
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      p="1rem"
      background="white"
      w="36rem"
      maxW="100%"
      rounded="lg"
      textTransform="capitalize"
      ref={refImage}
    >
      <Flex alignItems="center" gap=".5rem" mb="1rem">
        {' '}
        <Avatar
          name={post.userName}
          src={errorProfile ? post?.userName : profileImage}
        />
        <Flex flexDir="column">
          <Text fontWeight="bold" my="0">
            {post.userName}
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
      <ListOfLikes postId={post?._id} />
      <Flex mt="1rem">
        <Like postId={post?._id} />
        <Divider
          orientation="vertical"
          ml="auto"
          borderWidth="2px"
          height="2.5rem"
          size="20px"
        />
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
          onClick={handleTogleComment}
        >
          <Icon as={AiOutlineComment} w="1.5rem" h="1.5rem" />{' '}
          <Text fontWeight="semibold">Comment</Text>
        </Center>
      </Flex>
      <Collapse in={showComment}>
        <Flex alignItems="center" mt="1rem" gap=".5rem">
          <InputGroup mx=".2rem">
            <InputLeftElement>
              <Avatar name="ayoub sayah" size="sm" />{' '}
            </InputLeftElement>
            <Input placeholder="write your comment" rounded="full" />

            <InputRightElement display="flex" alignItems="center">
              <Icon as={AiOutlineSend} cursor="pointer" m="auto" mt=".7rem" />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <CommentList />
      </Collapse>
    </Box>
  )
}

export default Post
