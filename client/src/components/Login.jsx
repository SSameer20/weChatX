import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: 'All Fields are required',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:3001/api/user/login',
        { email, password },
        config
      );

      toast({
        title: 'Login Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate('/chat');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response.data.message || 'Login failed.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      setLoading(false);
    }
  };

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
      </FormControl>
      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading} // Corrected typo (curly braces)
      >
        Login
      </Button>
    </VStack>
  );
}
