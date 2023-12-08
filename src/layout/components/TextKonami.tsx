import { Box, Text } from "@chakra-ui/layout"

const TextKonami = () => {
    return (
        <Box rounded="full" position="fixed" className="animation-text"  display="flex" zIndex={99} justifyContent="center" alignItems="center" w="full" h="full" flexDirection="column">
            <Box p="2rem" bg="white" zIndex={99999} position={"relative"} rounded="full">
            <Text fontSize="7rem"  >CHEAT ACTIVATED</Text>
            <Text fontSize="5rem">you Broke the website</Text>
            </Box>
        </Box>
    )
}

export default TextKonami