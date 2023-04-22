import { useState, useEffect, useRef } from 'react';
import workImage from './work.png';
import { 
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Divider,
  List,
  ListItem,
  ListIcon,
  Text,
  Image,
  Box,
  useMediaQuery
 } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsCheck, BsCheckCircleFill } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';
import './App.css';

function App() {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const serviceRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  
  const handleServiceRef = () => {
    window.scrollTo({
      top: serviceRef.current?.offsetTop,
      behavior: "smooth"
    });
  }

  const handlePlansRef = () => {
    window.scrollTo({
      top: plansRef.current?.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <Flex className="App" flexDir='column' alignItems='center'>
      <Flex flexDir='row' alignItems='center' justifyContent='space-between' py='4' width='80vw'>
        <Text fontSize='3xl' fontWeight='500' color='#aaa' textAlign='center'>JUGANNU</Text>
        <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton pr='0' pl='3' borderRadius='10vw' isActive={isOpen} as={Button} leftIcon={<HamburgerIcon/>}>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handlePlansRef}>Our Plans</MenuItem>
              <MenuItem onClick={handleServiceRef}>Services</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      </Flex>

      <Divider mb='10' style={{opacity: '0'}}/>

      <Flex maxW='80vw' flexDir={isLargerThan700 ? 'row' : 'column'} p='10' h='80%' alignItems='center' justifyContent='center' gap='10'>
        <Flex alignItems={isLargerThan700 ? 'flex-start' : 'center'} flexDir='column' width={isLargerThan700 ? '600px' : ''}>
          <Heading p='3' textAlign={isLargerThan700 ? 'left' : 'center'} color='whiteAlpha.800' fontWeight='500' size='xl'>
            Get a Website Ready<br /> for your Business <br />@ just ₹799
          </Heading>
          <Text p='3' color='whiteAlpha.800' fontWeight='300' textAlign={isLargerThan700 ? 'left' : 'center'}>
            Welcome to Saffayar web creation service! We specialize in building beautiful and functional websites for businesses of all sizes.
          </Text>
          <a href='#'><Button>Get Started! <AiOutlineWhatsApp style={{paddingLeft: '0.4rem', fontSize: '1.5rem'}} /></Button></a>
        </Flex>
        <Box width={isLargerThan700 ? '400px' : '300px'} boxShadow='0 0 30px rgba(0,0,0,0.3)' mt='2' mb='5' borderRadius='50vw'>
          <Image src={workImage} borderRadius='50vw'/>
        </Box>
      </Flex>

      <Text ref={plansRef} color='white' fontSize='3xl' mb='4'>Our Plans</Text>

      <Flex gap='4' alignItems='stretch' justifyContent='space-evenly' mb='20' w='80vw' flexWrap='wrap'>
        <Flex boxShadow='lg' borderRadius='xl' padding='8' maxW='300px' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.900'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>Basic Plan</Text>
          <Heading className='highlight'>₹799</Heading>
          <List my='8'>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' />
              Delivery in 2 weeks
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' /> 
              Web Hosting
            </ListItem>
            <ListItem>
              <ListIcon as={IoIosCloseCircle} color='red.500' /> 
              Custom Design
            </ListItem>
            <ListItem>
              <ListIcon as={IoIosCloseCircle} color='red.500' /> 
              Payment Gateway
            </ListItem>
            <ListItem>
              <ListIcon as={IoIosCloseCircle} color='red.500' /> 
              SEO Optimization
            </ListItem>
          </List>
          <Button colorScheme='yellow' mt='3'>Select Basic</Button>
        </Flex>
        <Flex boxShadow='lg' borderRadius='xl' maxW='300px' p='8' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.900'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>Standard Plan</Text>
          <Heading className='highlight'>₹1999</Heading>
          <List my='8'>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' />
              Delivery in 2 weeks
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' /> 
              Web Hosting
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' /> 
              Custom Design
            </ListItem>
            <ListItem>
              <ListIcon as={IoIosCloseCircle} color='red.500' /> 
              Payment Gateway
            </ListItem>
            <ListItem>
              <ListIcon as={IoIosCloseCircle} color='red.500' /> 
              SEO Optimization
            </ListItem>
          </List>
          <Button colorScheme='yellow' mt='3'>Select Standard</Button>
        </Flex>
        <Flex boxShadow='lg' borderRadius='xl' p='8' maxW='300px' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.900'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>Premium Plan</Text>
          <Heading className='highlight'>₹4999</Heading>
          <List my='8'>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' />
              Delivery in a WEEK
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' /> 
              Web Hosting
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' /> 
              Custom Design
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' /> 
              Payment Gateway
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircleFill} color='green.500' /> 
              SEO Optimization
            </ListItem>
          </List>
          <Button colorScheme='yellow' mt='3'>Select Premium</Button>
        </Flex>
      </Flex>

      <Text color='white' fontSize='3xl' mb='4'>Services</Text>

      <Flex ref={serviceRef} gap='4' alignItems='center' justifyContent='space-evenly' mb='20' w='80vw' flexWrap='wrap'>
        <Flex boxShadow='lg' borderRadius='xl' style={{transition: 'background ease 0.5s, transform ease 0.5s'}} _hover={{background: 'white', transform: 'scale(1.1)'}} padding='8' maxW='200px' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.800'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>Website Creation</Text>
          <Text fontSize='xs' textAlign='center' color='blackAlpha.800'>
          Our website creation service includes everything you need to get started, including domain registration, website design, content creation, and ongoing maintenance and support.
          </Text>
        </Flex>
        <Flex boxShadow='lg' borderRadius='xl' style={{transition: 'background ease 0.5s, transform ease 0.5s'}} _hover={{background: 'white', transform: 'scale(1.1)'}} maxW='200px' p='8' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.800'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>SEO Optimization</Text>
          <Text fontSize='xs' textAlign='center' color='blackAlpha.800'>
            We use the latest technologies and best practices to ensure your website is fast, responsive, and optimized for search engines.
          </Text>
        </Flex>
        <Flex boxShadow='lg' borderRadius='xl' style={{transition: 'background ease 0.5s, transform ease 0.5s'}} _hover={{background: 'white', transform: 'scale(1.1)'}} p='8' maxW='200px' flexDir='column' alignItems='center' justifyContent='center' background='whiteAlpha.800'>
          <Text fontSize='xl' textAlign='center' fontStyle='bold' mb='4'>Website Hosting</Text>
          <Text fontSize='xs' textAlign='center' color='blackAlpha.800'>
            Our web hosting service is designed to be reliable, secure, and easy to use. We offer a range of hosting plans to meet your needs, whether you're running a small blog or a large ecommerce site.
          </Text>
        </Flex>
      </Flex>

    </Flex>
  )
}

export default App;
