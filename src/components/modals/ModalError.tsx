import {
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeModalError,
  selectMessageError,
  selectModalError,
} from '../../layout/sharedSlice/sharedSlice'
import { AiOutlineStop } from 'react-icons/ai'
import { FunctionComponent } from 'react'

const ErrorModal: FunctionComponent = () => {
  const dispatch = useDispatch()
  const messageInfo: string = useSelector(selectMessageError) ?? ''
  const isModalShow: boolean = useSelector(selectModalError)
  return (
    <Modal
      isOpen={isModalShow}
      onClose={() => dispatch(closeModalError())}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody maxW={'400px'}>
          <Flex
            flexDir="column"
            justifyContent="center"
            p="4rem"
            gap="1rem"
            alignItems="center"
          >
            <Icon
              as={AiOutlineStop}
              color="red.500"
              display="block"
              w="5rem"
              h="5rem"
            />
            <Text
              fontSize={19}
              fontWeight="bold"
              color="quaternary.500"
              align="center"
            >
              {messageInfo}
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export default ErrorModal
