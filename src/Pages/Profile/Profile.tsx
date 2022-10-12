import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import User from './User'
import axios from 'axios'
import { api } from '../../Api/sourceApi'
import { useAppSelector } from '../../Redux/hook'

const Profile = () => {

    const param = useParams()

    const store = useAppSelector(state => state)

   const data = store.PagesReducer.addUsers

   console.log(data)

    console.log(param)
  return (
    <div>
      <User />
      {
        
      }
    </div>
  )
}

export default Profile
