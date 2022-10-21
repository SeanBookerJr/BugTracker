import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Piechart from '../../components/Piechart';
import TicketsbyStatus from '../../components/TicketsbyStatus';
import TicketsbyType from '../../components/TicketsbyType';
import { DashboardPagination } from '../../components/DashboardPagination';




function UserDashboard({user}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = user.tickets?.slice(indexOfFirstPost, indexOfLastPost)

const paginate = (pageNumber) => setCurrentPage(pageNumber)


  let navigate = useNavigate()

  console.log(user.tickets);

  
  return (
    <div className='conatiner w-100 pb-5 mt-5'>
      <Navbar />
     <h1 className='pb-3 display-6'> {user.first_name}'s Dashboard </h1> 
      <div className="row d-flex mx-auto h-100 border" style={{width: 1000}}>
  <div className="col-sm-6 p-5">
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title"><strong>Tickets by Type</strong></h5>
       {user && <TicketsbyType user={user}/>}
      </div>
    </div>
  </div>
  <div className="col-sm-6 p-5 ">
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title"><strong>Tickets by priority</strong></h5>
        {user &&  <Piechart user={user}/>}
      </div>
    </div>
  </div>
  <div className="col-sm-6 p-5">
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title"><strong>Tickets by Status</strong></h5>
        {user && <TicketsbyStatus user={user}/>}
      </div>
    </div>
  </div>
  <div className="col-sm-6 p-5">
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title"><strong>All Tickets</strong></h5>
        <ul className="list-group list-group-flush pagination p-3">
          {currentPosts?.map(t => {
            return(
              <li className="list-group-item"><strong>{t.title}</strong> <p className='float-right'> {t.status}</p></li>
          )})}
        </ul>
        <DashboardPagination postsPerPage={postsPerPage} totalPosts={user.tickets?.length} paginate={paginate}/>
        {/* {user && <TicketsbyStatus user={user}/>} */}
      </div>
    </div>
  </div>

  </div>
</div>
  )
}

export default UserDashboard