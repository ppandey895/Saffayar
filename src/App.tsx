import { useState, useEffect, useRef } from 'react';
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
import { HamburgerIcon } from '@chakra-ui/icons';
import './App.css';

function App() {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const serviceRef = useRef(null);
  const projectRef = useRef(null);
  
  const handleServiceRef = () => {
    window.scrollTo({
      top: serviceRef.current.offsetTop,
      behavior: "smooth"
    });
  }

  const handleProjectRef = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <Flex className="App" flexDir='column' alignItems='center'>
      <Flex flexDir='row' alignItems='center' gap='40vw' justifyContent='space-between' py='4'>
        <Text fontSize='3xl' fontWeight='500' color='#aaa' textAlign='center'>SAFFAYAR</Text>
        <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton pr='0' pl='3' borderRadius='10vw' isActive={isOpen} as={Button} leftIcon={<HamburgerIcon/>}>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleProjectRef}>Projects</MenuItem>
              <MenuItem onClick={handleServiceRef}>Services</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      </Flex>

      <Divider mb='10' style={{opacity: '0'}}/>

      <Flex maxW='80vw' flexDir={isLargerThan700 ? 'row' : 'column'} p='10' h='80%' alignItems='center' justifyContent='center' gap='10'>
        <Flex alignItems='center' flexDir='column'>
          <Text p='3' color='whiteAlpha.800' fontWeight='300' textAlign='center'>
          We are <span className='highlight'>Saffayar</span> and our aim is to digitalize your business. Just contact us and we will be more than happy to serve you. Have a great day!
          </Text>
          <Button>Get Started!</Button>
        </Flex>
        <Box width={isLargerThan700 ? '800px' : '300px'} boxShadow='0 0 30px rgba(0,0,0,0.3)' mt='2' mb='5'>
          <Image borderRadius='3xl' src={workImage} />
        </Box>
      </Flex>

      <Text color='white' fontSize='3xl' mb='4'>Services</Text>

      <Flex ref={serviceRef} gap='4' alignItems='center' justifyContent='space-evenly' mb='20' w='80vw' flexWrap='wrap'>
        <Flex boxShadow='lg' borderRadius='xl' style={{transition: 'background ease 0.5s, transform ease 0.5s'}} _hover={{background: 'white', transform: 'scale(1.2)'}} padding='8' maxW='200px' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.800'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>Website Creation</Text>
          <Text fontSize='xs' textAlign='center' color='blackAlpha.800'>
          Our website creation service includes everything you need to get started, including domain registration, website design, content creation, and ongoing maintenance and support.
          </Text>
        </Flex>
        <Flex boxShadow='lg' borderRadius='xl' style={{transition: 'background ease 0.5s, transform ease 0.5s'}} _hover={{background: 'white', transform: 'scale(1.2)'}} maxW='200px' p='8' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.800'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>SEO Optimization</Text>
          <Text fontSize='xs' textAlign='center' color='blackAlpha.800'>
            We use the latest technologies and best practices to ensure your website is fast, responsive, and optimized for search engines.
          </Text>
        </Flex>
        <Flex boxShadow='lg' borderRadius='xl' style={{transition: 'background ease 0.5s, transform ease 0.5s'}} _hover={{background: 'white', transform: 'scale(1.2)'}} p='8' maxW='200px' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.800'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>Website Hosting</Text>
          <Text fontSize='xs' textAlign='center' color='blackAlpha.800'>
            Our web hosting service is designed to be reliable, secure, and easy to use. We offer a range of hosting plans to meet your needs, whether you're running a small blog or a large ecommerce site.
          </Text>
        </Flex>
      </Flex>

      <Text ref={projectRef} color='white' fontSize='3xl' mb='4'>Projects</Text>
    </Flex>
  )
}

export default App;
