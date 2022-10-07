import React from 'react';
import Graph from './Graph';
import { Chart } from './Graph';
import './home.css';

const Home = () => {
  
  return (
    <div className='home'>
      <div className='graph-upper-section' >
        <div className='graph' >
          <p>Overviews</p>   
          <Graph />
        </div>
        <div className='newUsers' >
          <p>New users</p>
        </div>
      </div>
      <div className='graph-down-section'>
        <p>Resource Booking</p>
        <div className='resource-booking' >
          <div className='first-resouce' >
              <Chart />
          </div>
          <div className='second-resource'>
              <Chart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home