import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import TodaysDate from '../TodaysDate/TodaysDate';



function NavBar() {

        const { colorMode } = useColorMode();

    return (
        <Flex p={2} bg={colorMode === "light" ? "white" : "black"} alignItems="center">
                <Image filter={colorMode === "light" ? "none" : "invert(1)"} ml={10} boxSize="75px" color="inverse" src="https://dcassetcdn.com/design_img/2306814/617327/617327_12260572_2306814_071bd951_thumbnail.png" />
            <Box p={2}>
                <Heading size="md">
                    <Link to="/">Consolation Island App </Link>
                </Heading>
                <TodaysDate />
            </Box>
            <Spacer />
            <Box p={2}>
                <Button colorScheme="facebook" mr={5} >
                    <Link to="/">Home </Link>
                </Button>
                <Button colorScheme="facebook" mr={5}>
                    <Link to="/garbage">Garbage </Link>
                </Button>
                <Button colorScheme="facebook" mr={5}>
                    <Link to="/weather">Weather </Link>
                </Button>
                <Button colorScheme="facebook" mr={5}>
                    <Link to="/chores">Chores </Link>
                </Button>
            <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
            
        </Flex>
    )
}

export default NavBar;
