import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Box, Divider, Flex, Heading, HStack } from '@chakra-ui/layout';
import React from 'react';


function TodayForecast({day, i}) {
    const { colorMode } = useColorMode();


    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

// =========== gets todays time per mapped 'day' ============= //
 let todayTime= new Date(day.DateTime);
 console.log(todayTime);

    return (
        <div key={i}>
            <HStack pb={5}>
            <Box minWidth="150px" boxShadow={'dark-lg'} m={5} p={5} bg={colorMode === "light" ? "white" : "black"} border="lightblue solid" borderRadius="15">
            <Heading mb={1} size="md" textAlign="center">{formatAMPM(todayTime)}</Heading>
                <Divider p={1} />
                <Flex justifyContent="center">
                    <Box>
                        <Image src={`https://developer.accuweather.com/sites/default/files/${(day.WeatherIcon < 10 ? 0 : '')}${day.WeatherIcon}-s.png`}/> 
                    </Box>
                </Flex>

                
                <Heading textAlign="center" size="sm">{day.Temperature.Value}°C</Heading>
                
                
            
            </Box>
            </HStack>
        </div>
    )
}

export default TodayForecast;
