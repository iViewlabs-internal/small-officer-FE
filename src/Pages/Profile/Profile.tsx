import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import User from './User'
import axios from 'axios'
import { api } from '../../Api/sourceApi'
import { useAppSelector } from '../../Redux/hook'

const Profile = () => {

    const param : any = useParams()

    const store = useAppSelector(state => state)

   const data = store.PagesReducer.addUsers

   console.log(data)

    console.log(param.id)
    const id = param.id

    const [addUserData, setAddUserData] = useState({
      firstname : "",
      lastname : "",
      about : "",
      company : "",
      position : "",
      cityname : "",
      data : ""
    })

    const displayData = data.filter((item : any, index : number) => index === +id)[0]


    console.log(displayData.firstname + displayData.lastname)

    const date = new Date()

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {

      const {name, value} = e.currentTarget
      
      setAddUserData(prevData => ({
        ...prevData,
        [name] : value
      }) )

    }

    console.log(addUserData)

  return  (
    <div>

        

    </div>
  )
}

export default Profile
