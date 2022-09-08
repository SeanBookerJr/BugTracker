import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Piechart from '../../components/Piechart';
import TicketsbyStatus from '../../components/TicketsbyStatus';
import TicketsbyType from '../../components/TicketsbyType';



function UserDashboard({user}) {


  let navigate = useNavigate()

  console.log(user.tickets);

  
  return (
    <div className='conatiner w-100 pb-5'>
      <Navbar />
     <h1 className='pb-3 display-6'> {user.first_name}'s Dashboard </h1> 
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
  </div>
</div>
  )
}

export default UserDashboard