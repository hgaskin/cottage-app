import React, { useState, useEffect } from 'react';
import { Heading, ListItem, List, ListIcon, Divider, Badge, VStack, Container, useColorMode } from '@chakra-ui/react';
import { MdCheckCircle } from "react-icons/md";

import HoursOfOperation from "./HoursOfOperation";

function GarbageDevilsElbow() {
    const [season, setSeason] = useState('');
    const [today, setToday] = useState('loading...');

    const { colorMode } = useColorMode();

    useEffect(() => {
        whatSeasonAreWeIn();
    }, [season])

   const springDaysOfOperation = {
       0 : "9:00am - 7:00pm",
       1 : "CLOSED",
       2 : "CLOSED",
       3 : "CLOSED",
       4 : "CLOSED",
       5 : "CLOSED",
       6 : "CLOSED",
   }

   const summerDaysOfOperation = {
    0 : "8:30am - 7:00pm",
    1 : "8:30am - 7:00pm",
    2 : "CLOSED",
    3 : "8:30am - 7:00pm",
    4 : "CLOSED",
    5 : "8:30am - 7:00pm",
    6 : "8:30am - 7:00pm",
   }
   
   const fallDaysOfOperation = {
    0 : "9:00am - 4:30pm",
    1 : "CLOSED",
    2 : "CLOSED",
    3 : "9:00am - 4:30pm",
    4 : "CLOSED",
    5 : "CLOSED",
    6 : "CLOSED",
}

// -------- this function gets the season data ------- //
function whatSeasonAreWeIn() {
    let newDate = new Date();
    let date = newDate.getDate();
    // let year = newDate.getFullYear();
    // let dayofweek = newDate.getDay();
    let month = newDate.getMonth();

    if (month === 4 && date >= 9) {
        console.log("Spring: May 9th to May 31st!");
        setSeason('Spring');
    } else if (month >= 5 && month <= 8 && date <= 29){
        console.log("Summer: June 1st to September 29th!");
        setSeason('Summer');
    } else if (month >= 9 && date >= 3 && date <= 11){
        console.log("Fall: October 3rd to October 11th!");
        setSeason('Fall');
    } else {
        console.log("Offseason - J.Cole");
        setSeason('OffSeason');
    }

};


// ------------- this function gets the season schedule data ---------- //
    function WhatIsThisSeasonsSchedule({season}) {
        let newDate = new Date();
        let dayofweek = newDate.getDay();
        let season1 = season;

        if (season1 === 'Spring') {
            console.log(springDaysOfOperation[dayofweek]);
            setToday(springDaysOfOperation[dayofweek]);
        } else if (season1 === 'Summer') {
            console.log(summerDaysOfOperation);
            setToday(summerDaysOfOperation[dayofweek]);
        } else if (season1 === 'Fall') {
            console.log(fallDaysOfOperation);
            setToday(fallDaysOfOperation[dayofweek]);
        } else {
            console.log('OffSeason');
            setToday('OffSeason');
        }

        return (
            <div>
                <Badge variant="solid" fontSize="lg" colorScheme={today === "CLOSED" ? "red" : "green"}>{today}</Badge>
            </div>
        )
    }

    function hoursOfOperation() {
        let season2 = season;

        if (season2 === 'Spring') {
            return springDaysOfOperation;
        } else if (season2 === 'Summer') {
            return summerDaysOfOperation;
        } else if (season2 === 'Fall') {
            return fallDaysOfOperation;
        } else {
            return "OffSeason";
        }

    }



    return (
        <Container mb={150}>
            <VStack spacing={5}>
            <Heading>Devil's Elbow Garbage</Heading>
           <WhatIsThisSeasonsSchedule season={season}/>

            
                <HoursOfOperation hours={hoursOfOperation()} />
            
            <Divider margin={10} width={250} opacity={0.8} borderBottomWidth={"3px"}/>

            
            <Container minWidth="200px" minHeight="250px" boxShadow={'dark-lg'} mr={5} p={5} bg={colorMode === "light" ? "white" : "black"} border="lightblue solid" borderRadius="15">
                <Heading size={"sm"} textAlign="center">Items Accepted:</Heading>

                <List spacing={2} textAlign="left">
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    household garbage
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    blue box fibres and containers
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    large household items e.g. furniture, appliances
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    dock structures, dismantled and cut into manageable sized pieces
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    re-use items
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    scrap metal
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    single use batteries and cell phones
                </ListItem>
                </List>
                </Container>
            </VStack>
            </Container>
        
    )
}

export default GarbageDevilsElbow;
