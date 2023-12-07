import {
  Avatar,
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  Icon,
  Input,
  Text,
  Textarea,
  useOutsideClick,
} from '@chakra-ui/react'
import EmojiPicker from 'emoji-picker-react'

import React, { useState } from 'react'
import { AiFillFileImage, AiFillSmile } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import {
  openModalInfo,
  openModalSuccess,
} from '../../../../layout/sharedSlice/sharedSlice'
import {
  useAddImageMutation,
  useAddNewPostMutation,
} from '../../slices/PostSlice'
const NewPost = () => {
  const [showEmoji, setShowEmoji] = useState(false)
  const [text, setText] = useState('')
  const ref = React.useRef<any>()
  const [upload] = useAddImageMutation()
  const [addPost, result] = useAddNewPostMutation()
  const refText = React.useRef<any>()
  const [image, setImage] = useState()
  const dispatch = useDispatch()
  const imageUrl = 'http://151.80.123.208:3010/images/'
  useOutsideClick({
    ref,
    handler: () => setShowEmoji(false),
  })
  const onSubmit = async () => {
    if (image) {
      const form = new FormData()
      console.log(image)

      form.append('file', image)

      upload(form)
        .unwrap()
        .then((data) => {
          addPost({
            image: imageUrl + data.fileName,
            content: text,
            userNAme: 'Ahmed hedi',
          })
            .unwrap()
            .then((data) => {
              if (data.status === 'sent to Admin') {
                dispatch(
                  openModalSuccess({
                    message: 'Your post has been sent to Admin for approval',
                  })
                )
                setImage(null)
                setText('')
              }
            })
        })
    } else if (text) {
      addPost({ content: text, userNAme: '' })
        .unwrap()
        .then((data) => {
          if (data.status === 'sent to Admin') {
            dispatch(
              openModalSuccess({
                message: 'Your post has been sent to Admin for approval',
              })
            )
            setText('')
          }
        })
    }
  }

  return (
    <Box
      alignSelf="self-start"
      background="white"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      p="1rem"
      rounded="lg"
      w="full"
    >
      <Box w="full">
        <Flex alignItems="baseline" gap=".5rem" w="full">
          <Avatar name="Ayoub Sayah" />
          <Textarea
            ref={refText}
            defaultValue={text}
            placeholder="What do u have in Mind?"
            w="full"
            onChange={(e) => setText(e.target.value)}
          />
        </Flex>
      </Box>
      <Divider my="1rem" />
      <Flex justifyContent="space-between">
        <Flex
          _hover={{ background: 'gray.200' }}
          alignItems="center"
          as={'label'}
          cursor="pointer"
          gap=".5rem"
          htmlFor="upload-image"
          justifyContent="center"
          mx="auto"
          p="1rem"
          rounded="lg"
          w="full"
        >
          <Icon as={AiFillFileImage} color="red.500" h="1.5rem" w="1.5rem" />
          <Text fontWeight="bold">Upload Pictures</Text>
          <Input
            display="none"
            id="upload-image"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0])
            }}
          />
        </Flex>

        <Flex
          _hover={{ background: 'gray.200' }}
          alignItems="center"
          cursor="pointer"
          gap=".5rem"
          justifyContent="center"
          mx="auto"
          p="1rem"
          pos="relative"
          rounded="lg"
          w="full"
          onClick={() => setShowEmoji(true)}
        >
          <Icon as={AiFillSmile} color="blue.500" h="1.5rem" w="1.5rem" />
          <Text fontWeight="bold">Emojies</Text>

          {
            <Box
              ref={ref}
              display={showEmoji ? 'block' : 'none'}
              pos="absolute"
              top="100%"
              zIndex={15}
            >
              <EmojiPicker
                categories={[
                  {
                    category: 'suggested',
                    name: 'Recently Used',
                  },
                  { category: 'smileys_people', name: 'Faces...' },
                  { category: 'flags', name: 'flags' },
                ]}
                lazyLoadEmojis={true}
                previewConfig={{
                  showPreview: false,
                  defaultCaption: '',
                }}
                searchDisabled={true}
                skinTonesDisabled={true}
                onEmojiClick={(event, emojiObject) => {
                  console.log('emoji', event)
                  console.log(event.emoji, 'emojiiiiiiiii')

                  if (event.emoji === '🫠') {
                    return
                  }
                  setText(`${text}${event.emoji}`)
                  refText.current.value = `${text}${event.emoji}`
                  console.log('emoj', emojiObject)
                }}
              />
            </Box>
          }
        </Flex>
      </Flex>
      <Button
        ml="auto"
        display="block"
        mt="2rem"
        colorScheme="primary"
        onClick={onSubmit}
      >
        Ajouter
      </Button>
    </Box>
  )
}

export default NewPost
