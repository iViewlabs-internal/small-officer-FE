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

    // const [addUserData, setAddUserData] = useState({
    //   firstname : "",
    //   lastname : "",
    //   about : "",
    //   company : "",
    //   position : "",
    //   cityname : "",
    //   date : ""
    // })

    const displayData = data.filter((item : any, index : number) => index === +id)[0]


    console.log(displayData)
    // console.log(displayData.firstname + displayData.lastname)

    const date = new Date()

    // const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {

    //   const {name, value} = e.currentTarget
      
    //   setAddUserData(prevData => ({
    //     ...prevData,
    //     [name] : value
    //   }) )

    // }

    // console.log(displayData)

  return  (
    <div className='profile-page'>

        <div>
          <h4>Username</h4>
          <h5>{displayData.firstname} {displayData.lastname}</h5>
        </div>
        <div>
          <h4 className='about-data'>About</h4>
          <h5>{displayData.about}</h5>
        </div>
        <div>
          <h4>Company</h4>
          <h5>{displayData.company}</h5>
        </div>
        <div>
          <h4>Position</h4>
          <h5>{displayData.position}</h5>
        </div>
        <div>
          <h4>City Name</h4>
          <h5>{displayData.cityname}</h5>
        </div>
        <div>
          <h4>Joined Date</h4>
          <h5>{displayData.date}</h5>
        </div>

    </div>
  )
}

export default Profile
