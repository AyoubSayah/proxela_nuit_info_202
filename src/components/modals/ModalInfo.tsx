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
  closeModalInfo,
  selectMessageInfo,
  selectModalInfo,
} from '../../layout/sharedSlice/sharedSlice'
import { AiFillInfoCircle } from 'react-icons/ai'

const InfoModal: FunctionComponent = () => {
  const dispatch = useDispatch()
  const messageInfo: string = useSelector(selectMessageInfo) ?? ''
  const isModalShow: boolean = useSelector(selectModalInfo)
  console.log('isModalShow', isModalShow)

  return (
    <Modal
      isOpen={isModalShow}
      onClose={() => dispatch(closeModalInfo())}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody maxW={'400px'}>
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            p="4rem"
            gap="1rem"
          >
            <Icon
              as={AiFillInfoCircle}
              display="block"
              color="blue.500"
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
export default InfoModal
