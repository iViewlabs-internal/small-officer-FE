import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../Api/sourceApi'
import { addUsers } from '../../Redux/Actions/Pages'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import './profile.css'

const User = () => {

    // const [users, setUsers] = useState([])
    const dispatch = useAppDispatch()

    const store = useAppSelector(state => state)
    console.log(store)

    const users = store.PagesReducer.addUsers

    console.log(users)


    const fetchUsersData = async () => {
        axios.get(api + '/addUser')
        .then(res => dispatch(addUsers(res.data)))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        fetchUsersData()
    },[])

    // console.log(users)

  return (
    <div>
      <table>
        <thead>
            <tr className='user-headers'>
                <th><input type='checkbox'/></th>
                <th>Name</th>
                <th>Primary Location</th>
                <th>Status</th>
                <th>Joined</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((item : any, index : any) => {
                    return (
                        <>
                        <tr className='user-headers'>
                            <td><input type='checkbox'/></td>
                            <td className='user-name'><Link to={`/user/${index}`}>{item.firstname} {item.lastname}</Link></td>
                            <td>Ahmedabad</td>
                            <td className='text-success' >Active</td>
                            <td>{item.date}</td>
                        </tr>
                        <hr />
                        </>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default User
function dispatch(data: any): any {
    throw new Error('Function not implemented.')
}

