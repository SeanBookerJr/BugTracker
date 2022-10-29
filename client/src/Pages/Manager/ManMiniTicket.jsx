import React from 'react'
import { useNavigate } from 'react-router-dom'

function ManMiniTicket({ticket, setTickets, params}) {
    let navigate = useNavigate()
    const reload=()=>window.location.reload();


    function handleButtonCLick() {
       navigate(`/ManTicketDetails/${ticket.id}`)
    }

    function handleUpdatedTickets(e) {
      fetch(`/project/alltickets/${params.id}`)
   .then(res => res.json())
   .then(data => {
    if (data) {console.log(data);
      setTickets(data.tickets)}
   })
    }

    function deleteTicketClick(e){
      fetch(`/tickets/${ticket.id}`, {
         method: 'DELETE',
         headers: {
            'Content-type':'application/json'
         }
       })
       .then(res => {
         if (res.ok) {
             res.json()
             .then(data => {
                console.log(data);
             })
         }
     })
    }

    function handleDeleteStuff(e) {
       deleteTicketClick()
       handleUpdatedTickets()
    }

  return (
    <div className="card mb-4 mx-auto shadow p-3 bg-white rounded" style={{width: 450}} >
    <div className="card-body p-4">
        <h3 className="mb-3"><strong>{ticket.title}</strong></h3>
        <p className="small mb-0"><i className="far fa-star fa-lg"></i> <span className="mx-2">|</span>
        <strong> {ticket.description}</strong></p>
        <div className="d-flex justify-content-start align-items-center">
        <p className="mb-0 text-uppercase"><i className="fas fa-cog me-2"></i>
        <span className="text-muted small"> Priority: <strong>{ticket.priority}</strong></span></p>
        </div>
        <a href="#!">
        </a>
        <button onClick={handleButtonCLick} style={{width: 100}}  type="button" className="btn btn-outline-dark btn-sm float-right">
            <i className="fas fa-plus"></i> Details
         </button>
         <button onClick={handleDeleteStuff} className="btn btn-outline-dark btn-sm float-right mr-2" style={{width: 100}}>Delete</button>
    </div>
 </div>
  )
}

export default ManMiniTicket