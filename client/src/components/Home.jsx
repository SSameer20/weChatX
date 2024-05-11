import React from 'react'
import { Text, Box, Container, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import Login from './Login'
import Register from './Register'

export default function Home() {
    return (
        <Container maxW='xl' centerContent>
            <Box
                d="flex"
                justifyContent='center'
                textAlign='center'
                p='3'
                bg='white'
                w='100%'
                m='40px 0 15px 0'
                borderRadius='lg'
                borderWidth='1px'

            >
                <Text fontSize='2xl' fontFamily='Open Sans'>weChat-X</Text>
            </Box >
            <Box bg='white'
                w='100%'
                p='4'
                borderRadius='lg'
                borderWidth='1px'>

                <Tabs variant='enclosed'>
                    <TabList mb='1em'>
                        <Tab>Login</Tab>
                        <Tab>Register</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {<Login/>}
                        </TabPanel>
                        <TabPanel>
                             {<Register/>}
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>
        </Container>
    )
}
