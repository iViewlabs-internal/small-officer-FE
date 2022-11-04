import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../Api/sourceApi'
import { addUsers } from '../../Redux/Actions/Pages'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import '../Profile/profile.css'
// import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom'
import './resources.css'

let PageSize = 10;

const AllResources = () => {

    const [resources, setResources] = useState([])

    const navigate = useNavigate()


    const fetchResourceData = async () => {
        axios.get(api + '/AddResource')
        .then(res => setResources(res.data))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        fetchResourceData()
    },[])

  return (

    
    <div className='users'>

        <div className='add-users' >
            <h4>Users</h4>
            <button className='btn bg-primary addResource-btn' onClick={() => navigate('/resources/addResources')} > + Add Resource</button>
        </div>

        <div className='add-users-section' >
        <table className='users-table' >
            <thead>
                <tr className='resource-headers'>
                    {/* <th><input type='checkbox' className='user-checkbox'/></th> */}
                    <th>Name</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Booking Group</th>
                    <th>Capacity</th>
                </tr>
            </thead>
            <tbody>
                {
                    resources.map((item : any, index : number) => {
                        return (
                            <>
                            <tr className='resource-headers'>
                                {/* <td><input type='checkbox' className='user-checkbox'/></td> */}
                                <td className='user-name'>{item.name}</td>
                                <td>{item.type}</td>
                                <td className='text-success' >{item.location}</td>
                                <td>-</td>
                                <td>{item.personcapacity}</td>
                            </tr>
                            <hr />
                            </>
                        )
                    })
                    // :
                    // users.map((item : any, index : any) => {
                    //     return (
                    //         <>
                    //         <tr className='user-headers'>
                    //             {/* <td><input type='checkbox' className='user-checkbox'/></td> */}
                    //             <td className='user-name'><Link to={`/user/${index}`} className='user-name' >{item.firstname} {item.lastname}</Link></td>
                    //             <td>Ahmedabad</td>
                    //             <td className='text-success' >Active</td>
                    //             <td>{item.date}</td>
                    //         </tr>
                    //         <hr />
                    //         </>
                    //     )
                    // })
                    
                }
            </tbody>
        </table>
        </div>

    </div>
  )
}


export default AllResources
