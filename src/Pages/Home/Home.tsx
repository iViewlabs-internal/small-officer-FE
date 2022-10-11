import React from 'react';
import { FaArrowAltCircleUp, FaArrowCircleLeft, FaCalendar, FaGripLines, FaLocationArrow, FaWifi } from 'react-icons/fa';
import InvoicedRevenue from './Graph/InvoicedRevenue';
import NewUsers, { ChartSecond } from './Graph/NewUsers';
import OverView from './Graph/OverView';
import ResourceBooking from './Graph/ResourceBooking';
import Revenue from './Graph/Revenue';
import RevenueBreakdown from './Graph/RevenueBreakdown';
import './home.css';

const Home = () => {
  
  return (
    <div className='home'>



    <div className='overview-newUsers' >
      <h3>Analytics</h3>
      <p>Make data driven decisions using these reports</p>
      <div>
        <div className='overview'>
          <h5 className='bg-white' >Overview</h5>
          <div className='d-flex bg-white '>
            <div className='bg-white'>
              <h6 className='bg-white'>Subscribers</h6>
              <p className='bg-white'>786</p>
            </div>
            <div className='bg-white'>
              <h6 className='bg-white' >Total Revenue</h6>
              <p className='bg-white'>1253215 $</p>
            </div>
          </div>
          <hr />
          <div className='overview-graph'>
            <OverView />
          </div>
        </div>

        <div className='newusers' >
          <h4 className='bg-white' >New users</h4>
          <div>
            <p className='bg-white' >New users this week</p>
            <div>
              <div className='bg-white'>
                <h4 className='bg-white'>18 324</h4>
                <p className='text-success bg-white ' >+17.98%</p>
              </div>
              <div className='bg-white newuser-first-chart '><ResourceBooking /></div>
            </div>
          </div>
          <hr />
          <div>
            <p className='bg-white'>New users this month</p>
              <div>
                <div className='bg-white'>
                  <h4 className='bg-white'>182 578</h4>
                  <p className='text-success bg-white' >+24.98%</p>
                </div>
                <div className='bg-white newuser-sec-chart' ><ChartSecond /></div>
              </div>
          </div>
          <hr />
          <div>
            <p className='bg-white'>New users this year</p>
              <div>
                <div className='bg-white'>
                <h4 className='bg-white' >24 182 579</h4>
                <p className='text-success bg-white'>+39.52%</p>
                </div>
                <div className='bg-white newuser-first-chart'><ResourceBooking /></div>
              </div>
          </div>
          <hr />
          <div>
            <p className='bg-white'>Returning users</p>
              <div>
                <div className='bg-white'>
                <h4 className='bg-white'>82 578</h4>
                <p className='text-danger bg-white' >+26.47%</p>
                </div>
                <div className='bg-white newuser-sec-chart' ><ChartSecond /></div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <hr className='horizontal-line' />

    <div className='resourceBooking'>
      <h4>Resource Booking</h4>
        <div>
          <div className='resourceBooking-One'>
            <ResourceBooking />
          </div>
          <div className='resourceBooking-Two' >
            <ResourceBooking />
          </div>
        </div>
    </div>

    <hr className='horizontal-line' />

    <div className='revenue'>
      <h4>Revenue</h4>
      <div>
        <div className='revenue-card' >
          <div className='bg-white'>
            <p className='bg-white'>Invoiced revenue</p>
            <h4 className='bg-white'>8215 $</h4>
          </div>
          <div>
            <Revenue />
            <p className='text-success'>+ 10.21%</p>
          </div>
        </div>
        <div className='revenue-card'>
          <div className='bg-white'>
              <p>Forecasted plan revenue</p>
              <h4>8051 $</h4>
            </div>
            <div>
              <Revenue />
              <p className='text-danger'>+ 5.05%</p>
            </div>
          </div>
        <div className='revenue-card'>
          <div>
              <p>Revenue growth</p>
              <h4>30051 $</h4>
            </div>
            <div>
              <Revenue />
              <p className='text-success'>+ 21.16%</p>
            </div>
          </div>
        <div className='revenue-card'>
          <div>
              <h4>Show more</h4>
            </div>
            <div>
              <Revenue />
              <p className='text-danger'>+ 5.05%</p>
            </div>
          </div>
      </div>
    </div>

    <hr className='horizontal-line' />

    <div className='invoicedRevenue'>
      <h4>Invoiced Revenue</h4>
      <div className='invoiceRevenue-specs'>

        <div>
            <FaGripLines className='invoice-icon' /> 
            <p>Primary location is any </p>
        </div>

        <div>
            <FaArrowAltCircleUp className='invoice-icon' /> 
            <p>Frequency is any</p>
        </div>

        <div>
            <FaCalendar className='invoice-icon' /> 
            <p>Due date is March 1, 2022 - April 1, 2022</p>
        </div>
        
      </div>
      <div className='invoice-chart' >
        <InvoicedRevenue />
      </div>
    </div>

    <hr className='horizontal-line' />

    <div className='revenueBreakDownPlan'>
      <h4>Revenue breakdown plan</h4>
      <div className='invoiceRevenue-specs'>

        <div>
            <FaLocationArrow className='invoice-icon' /> 
            <p>Primary location is any </p>
        </div>

        <div>
            <FaArrowAltCircleUp className='invoice-icon' /> 
            <p>Frequency is any</p>
        </div>

        <div>
            <FaCalendar className='invoice-icon' /> 
            <p>Due date is March 1, 2022 - April 1, 2022</p>
        </div>
        <div>
          <FaGripLines className='invoice-icon' />
          <p>Plan is any</p>
        </div>
        
      </div>
      <div className='revenueBreakdown-chart' >
        <RevenueBreakdown />
      </div>
    </div>














      {/* <div className='graph-upper-section' >
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
      </div> */}
    </div>
  )
}

export default Home