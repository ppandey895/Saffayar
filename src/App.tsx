import { useState } from 'react';
import workImage from './work.jpg';

import { 
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Divider,
  Container,
  Text,
  Image,
  Box,
  useMediaQuery
 } from '@chakra-ui/react';

import './App.css';

function App() {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

  return (
    <Flex className="App" flexDir='column' alignItems='center'>
      <Flex flexDir='row' alignItems='center' gap='40vw' justifyContent='space-between' py='4'>
        <Text fontSize='3xl' fontWeight='500' color='#aaa' textAlign='center'>SAFFAYAR</Text>
        <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton borderRadius='10vw' isActive={isOpen} as={Button}>
              {isOpen ? 'Close' : 'Open'}
            </MenuButton>
            <MenuList>
              <MenuItem>Projects</MenuItem>
              <MenuItem>Services</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      </Flex>

      <Divider mb='10'/>

      <Flex maxW='80vw' flexDir={isLargerThan700 ? 'row' : 'column'} p='10' h='80%' alignItems='center' justifyContent='center' gap='10'>
        <Text px='10' color='whiteAlpha.800' fontWeight='300' textAlign='center'>
        We are <span className='highlight'>Saffayar</span> and our aim is to digitalize your business. Just contact us and we will be more than happy to serve you. Have a great day!
        </Text>
        <Box width={isLargerThan700 ? '800px' : '300px'} boxShadow='0 0 30px rgba(0,0,0,0.3)' mt='2' mb='5' filter='grayscale(80%)'>
          <Image borderRadius='3xl' src={workImage} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default App;
