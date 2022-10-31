import React from 'react'
import { useNavigate } from 'react-router-dom'

const InfoPage = () => {

  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/community/addInfo')} >info</button>
    </div>
  )
}

export default InfoPage
