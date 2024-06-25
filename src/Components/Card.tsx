import { ChakraProvider, Box, Input, Button } from "@chakra-ui/react"
import { login } from "../services/login"


export const Card = () => {
    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
                    <h1>Faça o login</h1>
                    <Input placeholder='email' />
                    <Input placeholder='password' />
                    <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                        Button
                    </Button>
                </Box>
            </Box>
        </ChakraProvider>
    )
}