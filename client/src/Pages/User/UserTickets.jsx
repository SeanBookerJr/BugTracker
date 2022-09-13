import React from 'react'
import { useState } from 'react';
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import TicketSend from './TicketSend';

function UserTickets({user}) {


  console.log(user.tickets);

  const [query, setQuery] = useState("")

  const filteredTickets = user.tickets?.filter(singleProj => singleProj.title.toLowerCase().includes(query.toLowerCase()))

  const handleQuery = e => {
    setQuery(e.target.value)
  }

    console.log(user.tickets);
  return (
    <div>
    <Navbar />
          <div class="input-group mb-2 justify-content-center mt-5">
            <div class="form-outline mt-5">
              <input onChange={handleQuery} placeholder='Search...' type="search" id="form1" class="form-control" />
              <label class="form-label" for="form1"></label>
            </div>
    </div>
    <div class="container  h-100 border">
      <h1 className='mx-auto h3 pb-3'>{user.first_name}'s' Tickets</h1>
  <div class="row d-flex justify-content-center align-items-center h-100">
  <div class="col col-xl-10 row ">
      {filteredTickets?.map(t => {
        return(
          <div class="col-sm"> 
      <div class="card mb-4 shadow" >
        <div class="card-body p-4">
          <h3 class="mb-3">{t.title}</h3>
          <p class="small mb-0"><i class="far fa-star fa-lg"></i> <span class="mx-2">|</span> Created by
            <strong> {user.first_name} {user.last_name}</strong></p>
          <div class="d-flex justify-content-start align-items-center">
            <p class="mb-0 text-uppercase"><i class="fas fa-cog me-2"></i> <span
                class="text-muted small">{t.priority}</span></p>
            <p class="mb-0 text-uppercase"><i class="fas fa-link ms-4 me-2"></i> <span
                class="text-muted small">{t.type_of}</span></p>
            <p class="mb-0 text-uppercase"><i class="fas fa-ellipsis-h ms-4 me-2"></i> <span
                class="text-muted small">{t.status}</span>
              <span class="ms-3 me-4">|</span></p>
            <a href="#!">
            </a>
          </div>
          <TicketSend key={t.id} ticket={t} />
        </div>
      </div> 
      </div>
      )})}
    </div>
  </div>
  </div>
</div>
  )
}

export default UserTickets