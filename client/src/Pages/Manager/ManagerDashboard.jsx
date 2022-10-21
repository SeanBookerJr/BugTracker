import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ManNavBar from '../../components/ManNavBar';
import Piechart from '../../components/Piechart';
import TicketsbyStatus from '../../components/TicketsbyStatus';
import TicketsbyType from '../../components/TicketsbyType';
import { DashboardPagination } from '../../components/DashboardPagination';


function ManagerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"))

  console.log(user);

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  

  const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = user.tickets?.slice(indexOfFirstPost, indexOfLastPost)

const paginate = (pageNumber) => setCurrentPage(pageNumber)


  let navigate = useNavigate()

  const manName = user.first_name + " " + user.last_name

  return (
    <div>
      <div className='conatiner w-100 pb-5 mt-5'>
      <ManNavBar />
     <h1 className='mb-1 display-6'> {user.first_name}'s Dashboard </h1> 
      <div class="row d-flex mx-auto h-100 border" style={{width: 1000}}>
  <div class="col-sm-6 p-5">
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title"><strong>Tickets by Type</strong></h5>
       {user && <TicketsbyType user={user}/>}
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-5 ">
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title"><strong>Tickets by priority</strong></h5>
        {user &&  <Piechart user={user}/>}
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-5">
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title"><strong>Tickets by Status</strong></h5>
        {user && <TicketsbyStatus user={user}/>}
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-5">
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title"><strong>All Tickets</strong></h5>
        <ul class="list-group list-group-flush pagination p-3">
          {currentPosts?.map(t => {
            return(
              <li class="list-group-item"><strong>{t.title}</strong> <p className='float-right'> {t.status}</p></li>
          )})}
        </ul>
        <div>
        <DashboardPagination postsPerPage={postsPerPage} totalPosts={user.tickets?.length} paginate={paginate}/>
        </div>
      </div>
    </div>
  </div>

  </div>
</div>
    </div>
  )
}

export default ManagerDashboard