import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddPlan from './AddPlan'
import './plan.css'

const Plans = () => {

  const navigate = useNavigate()
  return (
    <div className='main-plan'>
      <button onClick={() => navigate('/addPlan')} >Addplan</button>
    </div>
  )
}

export default Plans
