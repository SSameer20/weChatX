import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useToast, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'


export default function
    () {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [show, setShow] = useState(false)
    const [confirmShow, setConfirmShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const toast = useToast();
    const navigate = useNavigate();



    const submitHandler = async () => {
        setLoading(true);
        if (!name || !email || !password) {
            toast({
                title: 'Please Fill All the fields',
                description: "Required to fill all the fields",
                status: 'error',
                duration: 4000,
                isClosable: true,
                position : 'top'
            })
            setLoading(false);
            return;

        }

        if (password !== confirmPassword) {
            toast({
                title: 'Password does not match',
                description: "Use Same password",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position : 'top'
            })
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers : {
                    "Content-type" : "application/json",
                },
            };
            
            const {data} = await axios.post(`http://localhost:3001/api/user`,{name, email, password}, config);
            toast({
                title: 'Registration Successful',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position : 'top'
            })
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate('/chat');
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response.data.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position : 'top'
            })
            setLoading(false);
            
        }

    }



    return (
        <VStack>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </FormControl>

            <FormControl id='full-name'>
                <FormLabel>Full Name</FormLabel>
                <Input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
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
            <FormControl id='confirm-password' isRequired>
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



            <Button
                colorScheme='blue'
                width='100%'
                style={{ marginTop: 15 }}
                isLoading={loading}
                onClick={submitHandler}
            >
                Sign Up
            </Button>


        </VStack>
    )
}
