import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../Api/sourceApi'
import { addUsers } from '../../Redux/Actions/Pages'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import '../Profile/profile.css'
// import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom'
import './resources.css'
import Pagination from '../../components/Pagination/Pagination'
import '../../components/Pagination/pagination.scss'

let PageSize = 10;

const ResourceTypes = () => {

    const [resources, setResources] = useState([])

    const navigate = useNavigate()


    const fetchResourceData = async () => {
        axios.get(api + '/AddType')
        .then(res => setResources(res.data))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        fetchResourceData()
    },[])

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return resources.slice(firstPageIndex, lastPageIndex);
    }, [resources, currentPage]);
  

  return (

    <div>
    <div className='users'>

        <div className='add-users' >
            <h4>Resource Types</h4>
            <button className='btn bg-primary add-resource-type-btn' onClick={() => navigate('/resources/addResourceTypes')} > + Add Type</button>
        </div>

        <div className='add-users-section' >
        <table className='users-table' >
            <thead>
                <tr className='resource-type-headers'>
                    <th>Type</th>
                    <th>Repeat booking</th>
                    <th>Mintime</th>
                    <th>Cancle Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentTableData.map((item : any, index : number) => {
                        return (
                            <>
                            <tr className='resource-type-headers'>
                                {/* <td><input type='checkbox' className='user-checkbox'/></td> */}
                                <td className='user-name'>{item.type}</td>
                                <td>{item.repeatbooking}</td>
                                <td>{item.mintime}</td>
                                <td>{item.cancletime}</td>
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

    <div>
    <Pagination
    className="pagination-bar"
    currentPage={currentPage}
    totalCount={resources.length}
    pageSize={PageSize}
    onPageChange={(page : number) => setCurrentPage(page)}
  />
    </div>

    </div>
    
  )
}


export default ResourceTypes

