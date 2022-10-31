import React, { useState } from 'react'
import { FaGripHorizontal, FaLocationArrow, FaSearchLocation } from 'react-icons/fa';
import './calender.css'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker';

const locales = {
    'en-US' : require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title : "Big Meeting",
        allDay : true,
        start : new Date(2022,6,0),
        end : new Date(2022,6,0)
    },
    {
        title : "Vacation",
        start : new Date(2022,6,0),
        end : new Date(2022,6,0)
    },
    {
        title : "Conference",
        start : new Date(2022,6,0),
        end : new Date(2022,6,0)
    }
]

const Calender = () => {


  return (
   <div className='calender' >
        {/* <div className='calender-specs' >
            <div>
                <FaSearchLocation  className='specs-icon' />
                <p>hjdhjhdjhdjhhjd</p>
            </div>
            <div>
                <FaGripHorizontal  className='specs-icon' />
                <p>dhjdhjhhh</p>
            </div>
            <div>
                <FaGripHorizontal  className='specs-icon' />
                <p>dhdjdjhj</p>
            </div>
            <div>
                <FaGripHorizontal  className='specs-icon' />
                <p>dmdkdmdmdm</p>
            </div>
        </div> */}


                {/* calender */}

            <Calender localizer={localizer} events={events} 
            startAccessor='start' endAccessor='end' style={{height : 500, margin : '50px'}}  />


   </div>
  )
}

export default Calender
