import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../Api/sourceApi'
import './plan.css'

const Plans = () => {

  const navigate = useNavigate()

  const [AddPlanData, setAddPlanData] = useState([])

  useEffect(() => {
    axios.get(api + '/AddPlan')
    .then(res => setAddPlanData(res.data))
    .catch(err => console.log(err))
  },[])

  console.log(AddPlanData)


  return (
    <div className='main-plan'>
      <div className='add-plans-btn'>
        <div>
          <h3>Plans</h3>
          <p>Set up recurring or one-time agreements between your organization and users.</p>
        </div>
        <button className='btn bg-primary adduser-btn' onClick={() => navigate('/addPlan')} > + Add Plan</button>
      </div>
      <div className='All-plan-cards'>
        {
      AddPlanData.map((item : any, index : number) => {
        return (
            <div className='plan-card'>
              <div className='type-plan'>
              <h3>{item.type}</h3>
              <p className='plan-description' >{item.description}</p>
              </div>
              <hr className='plan-hori-line' />
              <div className='resouce-access'>
              <h5>Resource/Access:</h5>
              <div className='resource-plan'>
                <h6>{item.resourcename}</h6>
                <h6 className='text-dark'>{item.frequency}</h6>
              </div>
              </div>
              <hr className='plan-hori-line' />
              <div className='price-plan'>
                <h5>Cost</h5>
                <h5>{item.price == 'Free'? 'Free' : item.price}</h5>
              </div>
              <hr className='plan-hori-line' />
              <div className='restrictions-plan'>
                <h5>Restrictions</h5>
                <p>None</p>
              </div>
              <hr className='plan-hori-line' />
              <div className='subscribers-plan'>
                <p>0 subscribers</p>
              </div>
            </div>
        )
      })

        }
      </div>

      {/* <div>
        <div>
          <h3>$18 Credit</h3>
          <p>$18 Credit to be applied to next booking</p>
        </div>
        <hr />
        <div>
          <h5>Resource/Access:</h5>
              <div>
                <h5>All spaces</h5>
                <h4>18 USD</h4>
              </div>
        </div>
        <hr />
        <div>
          <
        </div>
      </div> */}
    </div>
  )
}

export default Plans
