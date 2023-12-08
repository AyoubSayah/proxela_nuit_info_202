import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../components/logo/Logo'
import LogoSIS from '../../components/logo/LogoSIS'

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="primary.500"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap="2rem"
      py="4rem"
      zIndex={14}
      position="relative"
    >
      <Text
        fontWeight="bold"
        fontSize="xl"
        color="white"
        textTransform="capitalize"
      >
        Proudly made with Care by our team
      </Text>
        <LogoSIS h="8rem" w="8rem" objectFit="cover" />
      
      <Text fontSize="2xl" fontWeight="extrabold" color="white">
     CLIMAT WARNING
      </Text>
    </Box>
  )
}

export default Footer
