import React from 'react'
import { useState } from 'react';
import ManNavBar from '../../components/ManNavBar';
import { useNavigate } from 'react-router-dom';
import ManTicketSend from './ManTicketSend';

function ManagerTickets() {
  const user = JSON.parse(localStorage.getItem("user"))
  const [query, setQuery] = useState("")

  const filteredTickets = user.tickets?.filter(singleProj => singleProj.title.toLowerCase().includes(query.toLowerCase()))

  const handleQuery = e => {
    setQuery(e.target.value)
  }

  

  console.log(filteredTickets);

  return (
    <div>
    <ManNavBar />
          <div className="input-group mb-2 justify-content-center mt-5">
            <div className="form-outline mt-5">
              <input onChange={handleQuery} placeholder='Search...' type="search" id="form1" className="form-control" />
              <label className="form-label" for="form1"></label>
            </div>
    </div>
    <div className="container  h-100 border">
      <h1 className='mx-auto h3 pb-3'>{user.first_name}'s Tickets</h1>
  <div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col col-xl-10 row ">
      {filteredTickets?.map(t => {
        return(
          <div className="col-sm"> 
      <div className="card mb-4 shadow" >
        <div className="card-body p-4">
          <h3 className="mb-3">{t.title}</h3>
          <p className="small mb-0"><i className="far fa-star fa-lg"></i> <span className="mx-2">|</span> Created by
            <strong> {t.user.first_name} {t.user.last_name}</strong></p>
          <div className="d-flex justify-content-start align-items-center">
            <p className="mb-0 text-uppercase"><i className="fas fa-cog me-2"></i> <span
                className="text-muted small">{t.priority}</span></p>
            <p className="mb-0 text-uppercase"><i className="fas fa-link ms-4 me-2"></i> <span
                className="text-muted small">{t.type_of}</span></p>
            <p className="mb-0 text-uppercase"><i className="fas fa-ellipsis-h ms-4 me-2"></i> <span
                className="text-muted small">{t.status}</span>
              <span className="ms-3 me-4">|</span></p>
            <a href="#!">
            </a>
          </div>
          <ManTicketSend key={t.id} ticket={t} />
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

export default ManagerTickets