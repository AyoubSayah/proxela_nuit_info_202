import { FunctionComponent } from 'react'
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
  closeModalSuccess,
  selectMessageSucess,
  selectModalSucess,
} from '../../layout/sharedSlice/sharedSlice'
import { AiFillCheckCircle } from 'react-icons/ai'

const SuccessModal: FunctionComponent = () => {
  const dispatch = useDispatch()
  const messageInfo: string = useSelector(selectMessageSucess) ?? ''
  const isModalShow: boolean = useSelector(selectModalSucess)
  return (
    <Modal
      isOpen={isModalShow}
      onClose={() => dispatch(closeModalSuccess())}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody maxW={'400px'}>
          <Flex flexDir="column" justifyContent="center" p="4rem" gap="1rem" alignItems="center">
t            <Icon
              as={AiFillCheckCircle}
              color="teal.500"
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
export default SuccessModal
