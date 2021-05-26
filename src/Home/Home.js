import { useColorMode } from '@chakra-ui/color-mode';
import { Container, Heading, VStack } from '@chakra-ui/layout';
import React from 'react';


function Home() {

    const { colorMode } = useColorMode();

    return (
        <div>
            
                
                <VStack spacing={5}>
                    <Heading>Home Page</Heading>
                    <Container opacity="0.5" minWidth="200px" minHeight="250px" boxShadow={'dark-lg'} mr={5} p={5} bg={colorMode === "light" ? "white" : "black"} border="lightblue solid" borderRadius="15">
                      
                    </Container>

                </VStack>
           
        </div>
    )
}

export default Home;
