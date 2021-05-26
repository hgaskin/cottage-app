import React, { useEffect, useState } from 'react'
import {Table, Thead, Tr, Td, Th, Tbody, Container, useColorMode} from '@chakra-ui/react';

function HoursOfOperation({hours}) {
   const [todaysDay, setTodaysDay] = useState("");

   const { colorMode } = useColorMode();

   useEffect(() => {
       mtwtfss();
   }, [todaysDay])

function mtwtfss() {
    let newDate = new Date();
    let dayofweek = newDate.getDay();

    return (
        setTodaysDay(dayofweek)
    );
}
    let newDate = new Date();
    let dayofweek = newDate.getDay();

    return (
        <Container minWidth="200px" minHeight="250px" boxShadow={'dark-lg'} mr={5} p={5} bg={colorMode === "light" ? "white" : "black"} border="lightblue solid" borderRadius="15">
        <Table size="md" colorScheme="telegram">
            <Thead>
                <Tr>
                <Th>Day</Th>
                <Th>Hours of Operation</Th>
                </Tr>
            </Thead>
                <Tbody>
                    <Tr fontWeight={dayofweek === 1 ? "bold" : "normal"}>
                        <Td fontSize={"1.25rem"}>Monday</Td>
                        <Td fontSize={"1.25rem"} isNumeric="true">{hours[1]}</Td>              
                    </Tr>
                    <Tr fontWeight={dayofweek === 2 ? "bold" : "normal"}>
                        <Td fontSize={"1.25rem"}>Tuesday</Td>
                        <Td fontSize={"1.25rem"} isNumeric="true">{hours[2]}</Td>
                    </Tr>
                    <Tr fontWeight={dayofweek === 3 ? "bold" : "normal"}>
                        <Td fontSize={"1.25rem"}>Wednesday</Td>
                        <Td fontSize={"1.25rem"} isNumeric="true">{hours[3]}</Td>
                    </Tr>
                    <Tr fontWeight={dayofweek === 4 ? "bold" : "normal"}>
                        <Td fontSize={"1.25rem"}>Thursday</Td>
                        <Td fontSize={"1.25rem"} isNumeric="true">{hours[4]}</Td>
                    </Tr>
                    <Tr fontWeight={dayofweek === 5 ? "bold" : "normal"}>
                        <Td fontSize={"1.25rem"}>Friday</Td>
                        <Td fontSize={"1.25rem"} isNumeric="true">{hours[5]}</Td>
                    </Tr>
                    <Tr fontWeight={dayofweek === 6 ? "bold" : "normal"}>
                        <Td fontSize={"1.25rem"} >Saturday</Td>
                        <Td fontSize={"1.25rem"} isNumeric="true">{hours[6]}</Td>
                    </Tr>
                    <Tr fontWeight={dayofweek === 0 ? "bold" : "normal"}>
                        <Td fontSize={"1.25rem"}>Sunday</Td>
                        <Td fontSize={"1.25rem"} isNumeric="true">{hours[0]}</Td>
                    </Tr>
                </Tbody>
            </Table>
            </Container>
    )
}

export default HoursOfOperation;
