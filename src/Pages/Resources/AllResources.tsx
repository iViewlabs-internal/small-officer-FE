import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addUsers } from '../../Redux/Actions/Pages'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import '../Profile/profile.css'
// import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom'
import './resources.css'
import { TableContainer } from '../../Common/TableContainer'

let PageSize = 10;

const AllResources = () => {

    const [resources, setResources] = useState([])

    const navigate = useNavigate()

    const api = process.env.REACT_APP_API_URL

    const fetchResourceData = async () => {
        axios.get(api + '/AddResource')
        .then(res => setResources(res.data))
        .catch(err => console.log(err))
    }

    console.log(resources)

    useEffect( () => {
        fetchResourceData()
    },[])

    const columns = ["name", "type", "location", "personcapacity"]

  return (
    <div className='users'>

        <div className='add-users' >
            <h4>All Resources</h4>
            <button className='btn bg-primary text-white addResource-btn' onClick={() => navigate('/resources/addResources')} > + Add Resource</button>
        </div>

        <div className='add-users-section' >
        {/* <table className='users-table' >
            <thead>
                <tr className='resource-headers'>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Capacity</th>
                </tr>
            </thead>
            <tbody>
                {
                    resources.map((item : any, index : number) => {
                        return (
                            <>
                            <tr className='resource-headers'>
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
                }
            </tbody>
        </table> */}

{
    <TableContainer columns={columns} data={resources} />
}

        </div>

    </div>
  )
}


export default AllResources
