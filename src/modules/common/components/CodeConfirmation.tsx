import React, { useEffect, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Spinner,
  Box,
  Text,
} from '@chakra-ui/react'
import {
  useConfirmCodeMutation,
  useResendCodeMutation,
} from '../../auth/slices/authSlice'
import { useNavigate } from 'react-router-dom'
const CodeConfirmation = ({ email, isOpen, onClose, isLoading, data }) => {
  const [
    confirmCode,
    {
      isLoading: isConfirming,
      isSuccess,
      isError,
      status,
      reset,
      data: confirmationData,
      error,
    },
  ] = useConfirmCodeMutation()

  const [
    resendCode,
    { isLoading: isResending, isSuccess: isResented, error: resendError },
  ] = useResendCodeMutation()
  const navigate = useNavigate()
  const [code, setCode] = useState('')

  console.log('status', error)

  useEffect(() => {
    if (isSuccess) {
      navigate('/auth/login')
      onClose()
      reset()
    }
  }, [isSuccess])

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose()
        setCode('')
      }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>verifier votre email pour le code</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={code}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log('event', e.target.value)
              setCode(e.target.value)
            }}
            placeholder="saisir votre code"
            required
          />
        </ModalBody>

        <ModalFooter>
          {error && error.data && error.data.status === 410 && (
            <Button
              colorScheme="red"
              isDisabled={isResented}
              mr={15}
              onClick={() => {
                resendCode({ email })
              }}
              isLoading={isResending}
            >
              Resend
            </Button>
          )}
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          {isConfirming ? (
            <Box>
              <Spinner />
            </Box>
          ) : (
            <Button
              isDisabled={
                error && error.data && error.data.status === 410 && !isResented
              }
              colorScheme="green"
              onClick={() => {
                confirmCode({
                  uuid: data?.token,
                  confirmationCode: code,
                })
              }}
            >
              Valider
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CodeConfirmation
