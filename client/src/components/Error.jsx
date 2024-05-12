import React from 'react'
// import {VStack, FormControl, FormLabel} from '@chakra-ui/react';
export default function Error({ code }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw', 
            height: '100vh', 
          }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin : '10vh 10vw',
                height : '90vh',
                width : '90vw',
                padding : '10vh 10vw',
                backgroundColor : 'white'
            }}>
            <h1 style={{fontSize : '80px'}}>Error {code}</h1>
            <p>Oops! Something went wrong. Please try again later.</p>
            </div>
        </div>
    )
}
