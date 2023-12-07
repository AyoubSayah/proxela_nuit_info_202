import { Avatar, Box, Collapse, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLazyGetCommentsQuery } from '../../slices/PostSlice'
const ListComments = [
  {
    id: 1,
    name: 'Takwa al mekni',
    comment: 'yonnnnnnnnnn',
  },
  {
    id: 2,
    name: 'Houssem gran',
    comment: 'impossible',
  },
  {
    id: 3,
    name: 'Feryel Zoghlami',
    comment: 'Sayah',
  },

  {
    id: 4,
    name: 'Yassine mrad',
    comment: '*****',
  },
  {
    id: 5,
    name: 'Ayoub sayah',
    comment: 'crying :(',
  },
]

const CommentList = () => {
  const [show, setShow] = React.useState(false)
  const [trigger, result] = useLazyGetCommentsQuery()
  const handleToggle = () => setShow(!show)
  useEffect(() => {}, [])

  return (
    <Flex flexDirection="column" mt="1rem">
      {ListComments.length > 0 && (
        <Text
          _hover={{
            textDecoration: 'underline',
          }}
          color="blue.400"
          cursor="pointer"
          onClick={handleToggle}
        >
          {show ? 'Hide Comments' : 'Show Comments'}
        </Text>
      )}
      <Collapse in={show}>
        <Flex flexDirection="column" mt="1rem">
          {ListComments.map((data) => (
            <Flex alignItems="baseline" gap=".5rem" mb=".5rem" key={data.id}>
              <Avatar name={data.name} size="sm" />
              <Flex
                bg="gray.100"
                flexDir="column"
                p=".5rem"
                px="1rem"
                rounded="xl"
              >
                <Text fontSize="sm" fontWeight="bold">
                  {data.name}
                </Text>
                <Text fontSize="sm">{data.comment}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Collapse>
    </Flex>
  )
}

export default CommentList
