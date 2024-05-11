import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const submitHandler = () => {

    }
    return (

        <VStack>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </FormControl>


            <FormControl id='Password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup >
                    <Input type={show ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <InputRightElement>
                        <Button marginRight={10} size='m' p='10px 5px' onClick={(e) => { setShow(!show) }}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </ FormControl>
            <Button
                colorScheme='blue'
                width='100%'
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Login
            </Button>
        </VStack>

    )
}
