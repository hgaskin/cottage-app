import { Box, Heading, VStack } from '@chakra-ui/layout';
import React from 'react';

function Chores() {
    return (
        <div>
            <Box>
                <VStack spacing={5}>
                    <Heading>Cotty Chores</Heading>
                </VStack>
            </Box>  
        </div>
    )
}

export default Chores;
