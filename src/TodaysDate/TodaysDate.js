import React, { useState, useEffect } from 'react';
import { Text } from "@chakra-ui/react"

function TodaysDate() {
    const [calendarWeekday, setCalendarWeekday] = useState('');
    const [calendarDay, setCalendarDay] = useState('');
    const [calendarMonth, setCalendarMonth] = useState('');
    const [calendarYear, setCalendarYear] = useState('');

    useEffect(() => {
        getFullDate()
    });

    const weekdayNames = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
    };

    const monthNames = {
        0 : "January",
        1 : "February",
        2 : "March",
        3 : "April",
        4 : "May",
        5 : "June",
        6 : "July",
        7 : "August",
        8 : "September",
        9 : "October", 
        10 : "November",
        11 : "December"
    }

    function getFullDate() {
        let newDate = new Date()
        let date = newDate.getDate();
        let year = newDate.getFullYear();
        let dayofweek = newDate.getDay();
        let month = newDate.getMonth();

        setCalendarWeekday(weekdayNames[dayofweek]);
        setCalendarDay(date);
        setCalendarMonth(monthNames[month]);
        setCalendarYear(year);

    };
        
        return (
            <div>
                <Text>{calendarWeekday}</Text>
                <p>{calendarMonth} {calendarDay}, {calendarYear} </p>
            </div>
        )
    }

export default TodaysDate;
