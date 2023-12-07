import { BoxProps, Flex, Text } from '@chakra-ui/react'
import React, { FC, useEffect } from 'react'
type LikesNumberProps = {
  likeType?: string
  listOfLikes?: any[]
} & BoxProps
const LikesNumber: FC<LikesNumberProps> = ({
  likeType,
  listOfLikes,
  ...props
}) => {
  useEffect(() => {
    console.log(listOfLikes, 'listOfLike')
  }, [listOfLikes])
  return (
    <Flex
      bg="blackAlpha.700"
      color="white"
      display="none"
      visibility="hidden"
      left="0"
      noOfLines={5}
      p=".5rem"
      pb=".1rem"
      position="absolute"
      rounded={'md'}
      top="100%"
      w="max-content"
      zIndex={20}
      {...props}
    >
      <Text fontSize="sm">{likeType}</Text>
      {listOfLikes?.map((like) => (
        <Text key={like._id} fontSize="xs">
          {like.userName}
        </Text>
      ))}
    </Flex>
  )
}

export default LikesNumber
