import React from 'react'
import { useNavigate } from 'react-router-dom'

function MiniTicket({ticket}) {

   let navigate = useNavigate()

   function handleButtonCLick() {
      navigate(`/TicketDetails/${ticket.id}`)
   }

  return (
         <div class="card mb-4 mx-auto shadow p-3 bg-white rounded" style={{width: 450}} >
            <div class="card-body p-4">
                <h3 class="mb-3"><strong>{ticket.title}</strong></h3>
                <p class="small mb-0"><i class="far fa-star fa-lg"></i> <span class="mx-2">|</span>
                <strong> {ticket.title} {ticket.description}</strong></p>
                <div class="d-flex justify-content-start align-items-center">
                <p class="mb-0 text-uppercase"><i class="fas fa-cog me-2"></i>
                <span class="text-muted small"> Priority: <strong>{ticket.priority}</strong></span></p>
                </div>
                <a href="#!">
                </a>
                <button onClick={handleButtonCLick} style={{width: 100}}  type="button" class="btn btn-outline-dark btn-sm float-right">
                    <i class="fas fa-plus"></i> Details
                 </button>
            </div>
         </div>
  )
}

export default MiniTicket