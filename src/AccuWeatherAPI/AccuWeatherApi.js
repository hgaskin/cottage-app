import React, {useState, useEffect} from 'react';
import { Container, Heading, HStack } from '@chakra-ui/react';
import axios from 'axios';
import WeatherBox from './WeatherBox';
import TodayForecast from './TodayForecast';


function AccuWeatherApi() {
     const [fiveDayForecast, setFiveDayForecast] = useState([]);
     const [todayForecast, setTodayForecast] = useState([]);


     useEffect( () => {
        getWeatherForecast();
        getTodayForecast();
    }, []);

        async function getWeatherForecast() {
            const weatherResponse = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/3556275', {
                params: {
                    'apikey': `6nE3gdRQJ1AGeUhmf8ojqsiXWPy2GAOJ`,
                    'metric': `true`,
                    }
                });

            console.log(weatherResponse.data.DailyForecasts)
            setFiveDayForecast(weatherResponse.data.DailyForecasts);
        }

        async function getTodayForecast() {
            const todayResponse = await axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/3556275', {
                params: {
                    'apikey': `6nE3gdRQJ1AGeUhmf8ojqsiXWPy2GAOJ`,
                    'metric': `true`,
                    }
                });

            console.log(todayResponse.data)
            setTodayForecast(todayResponse.data);
        }

        
        // ============= TODAY FORECAST MAP ============= //
        function mapTodayForecast() {
            let mappedTodayForecast = [...todayForecast];
            
          return mappedTodayForecast.map((day, i) => {
                return (  
                        <TodayForecast
                            day={day}
                            key={i}
                        />
                )
            })
        }

        // ============= FIVE DAY FORECAST MAP ============= //
        function mapFiveDayForecast() {
            let mappedFiveDayForecast = [...fiveDayForecast];
            
          return mappedFiveDayForecast.map((day, i) => {
                return (  
                        <WeatherBox
                            day={day}
                            key={i}
                        />
                )
            })
        }


    return (
        <>
            <Container maxW="container.lg">
                    <Heading>12 Hour Weather Forecast</Heading>  
                <HStack  overflow={"auto"} borderColor="white" p={10}>
                    {mapTodayForecast()}                   
                </HStack>
            </Container>

            <Container maxW="container.lg">              
                    <Heading>5 Day Weather Forecast</Heading>               
                <HStack  overflow="auto" borderColor="white" p={10}>
                    {mapFiveDayForecast()}                   
                </HStack>
            </Container>
        </>
    )
}

export default AccuWeatherApi;
