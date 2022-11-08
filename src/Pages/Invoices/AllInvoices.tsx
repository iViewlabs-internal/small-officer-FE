import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addUsers } from '../../Redux/Actions/Pages'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import '../Profile/profile.css'
// import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom'
import '../Resources/resources.css'
import { TableContainer } from '../../Common/TableContainer'

let PageSize = 4;

const AllInvoices = () => {

    const [invoices, setInvoices] = useState([])

    const navigate = useNavigate()

    const api = process.env.REACT_APP_JSON_API

    const fetchInvoiceData = async () => { 
        axios.get(api + '/Invoices')
        .then(res => setInvoices(res.data))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        fetchInvoiceData()
    },[])

    const columns = ["Total", "Status", "DueDate", "User"]

  return (
    <div className='users'>

    <div className='add-users' >
        <h4>All Invoices</h4>
        <button className='btn bg-primary text-white addResource-btn'> Download</button>
    </div>

    <div className='add-users-section' >
    {/* <table className='users-table' >
        <thead>
            <tr className='resource-headers'>
                <th>Total</th>
                <th>Status</th>
                <th>Due date</th>
                <th>User/Team</th>
            </tr>
        </thead>
        <tbody>
            {
                invoices.map((item : any, index : number) => {
                    return (
                        <div key={item.id}>
                        <tr className='resource-headers'>
                            <td className='user-name'>{item.total}</td>
                            <td className='text-success'>{item.Status}</td>
                            <td >{item.DueDate}</td>
                            <td>{item.User}</td>
                        </tr>
                        <hr />
                        </div>
                    )
                })
            }
        </tbody>
    </table> */}

            {
              <TableContainer columns={columns} data={invoices} />
            }
    </div>

</div>
  )
}


export default AllInvoices
