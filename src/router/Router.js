import { useColorMode } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccuWeatherApi from '../AccuWeatherAPI/AccuWeatherApi';
import Chores from '../Chores/Chores';
import GarbageDevilsElbow from '../GarbageDevilsElbow/GarbageDevilsElbow';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';




// browserrouter links to other pages =========
function Router() {

    const { colorMode } = useColorMode();

    return (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Box pt={10}
                backgroundImage={colorMode === "dark" && "url('https://www.discovermuskoka.ca/content/uploads/georgian-bay.jpg')"}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundAttachment="scroll"
                overflow="auto"

                
                //backgroundRepeat="no-repeat"
                height={"100vh"}>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/garbage">
                <GarbageDevilsElbow />
            </Route>
            <Route path="/weather">
                <AccuWeatherApi />
            </Route>
            <Route path="/chores">
                <Chores />
            </Route>
            </Box>
        </Switch>
    </BrowserRouter>
    )
}

export default Router;