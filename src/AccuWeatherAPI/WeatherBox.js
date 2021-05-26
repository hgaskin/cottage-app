import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';


function WeatherBox({day, i}) {
    const { colorMode } = useColorMode();

    const weekdayNames = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
    };

    
        

    return (
        <div key={i}>
            <Box minWidth="200px" minHeight="250px" boxShadow={'dark-lg'} m={5} p={5} bg={colorMode === "light" ? "white" : "black"} border="lightblue solid" borderRadius="15">
                <Flex justifyContent="center">           
                    <Image  src={`https://developer.accuweather.com/sites/default/files/${(day.Day.Icon < 10 ? 0 : '')}${day.Day.Icon}-s.png`}/>      
                </Flex>

                <Heading size="md" textAlign="center">{weekdayNames[new Date(day.Date).getDay()]}</Heading>
                <Divider p={1}/>
               
                <Text size="sm" p={1}>{day.Day.IconPhrase}</Text>
                <Divider p={1}/>
                <Heading size="sm" p={1}>High: {day.Temperature.Maximum.Value} °C</Heading>
                <Divider p={1}/>
                <Heading size="sm" p={1}>Low: {day.Temperature.Minimum.Value} °C</Heading>
            </Box>
        </div>
    )
}

export default WeatherBox;
