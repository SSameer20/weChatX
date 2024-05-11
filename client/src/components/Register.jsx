import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input,  InputGroup, InputRightElement, Button } from '@chakra-ui/react'

export default function
    () {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic, setPic] = useState('')
    const [show, setShow] = useState(false)
    const [confirmShow, setConfirmShow] = useState(false)

        const submitHandler = () => {

        }

        const postDetails = (pics) => {}

    return (
        <VStack>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </FormControl>

            <FormControl id='full-name'>
                <FormLabel>Full Name</FormLabel>
                <Input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} />
            </FormControl>

            <FormControl id='Password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup >
                    <Input type={show ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <InputRightElement>
                        <Button h='2rem' w='3.5rem' size='sm' p='5px' onClick={(e) => { setShow(!show) }}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

            </FormControl>
            <FormControl id='confirm-password'  isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup >
                <Input type={confirmShow ? 'text' : 'password'} value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    <InputRightElement>
                        <Button h='2rem' w='3.5rem' size='sm' p='5px' onClick={(e) => { setConfirmShow(!confirmShow) }}>
                            {confirmShow ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
               
            </FormControl>

            <FormControl id='picture'>
                <FormLabel>Picture</FormLabel>
                <Input type='file' 
                value={pic} onChange={(e) => { postDetails(e.target.files[0]) }} 
                accept='image/*'/>
            </FormControl>

            <Button
            colorScheme='blue'
            width='100%'
            style = {{marginTop : 15}}
            onClick={submitHandler}
            >
                Sign Up
            </Button>


        </VStack>
    )
}
