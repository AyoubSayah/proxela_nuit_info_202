import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from '@chakra-ui/react'

const SecurityQuestion = ({ isOpen, onClose, onSubmit, data }) => {
  const [securityQuestion, setSecurityQuestion] = useState('')

  const handleInputChange = (e) => {
    setSecurityQuestion(e.target.value)
  }

  const handleSubmit = () => {
    onSubmit(securityQuestion)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Security Question</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Type your security question"
            value={data}
            disabled
          />

          <Input placeholder="Type your answer" onChange={handleInputChange} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SecurityQuestion
