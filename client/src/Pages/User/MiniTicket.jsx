import React from 'react'
import { useNavigate } from 'react-router-dom'

<<<<<<< HEAD
function MiniTicket({ticket, params, setTickets}) {
=======
function MiniTicket({ticket}) {
>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56

   let navigate = useNavigate()

   const reload=()=>window.location.reload();

   function handleButtonCLick() {
      navigate(`/TicketDetails/${ticket.id}`)
   }

<<<<<<< HEAD
   function deleteTicketClick(e){
      fetch(`/tickets/${ticket.id}`, {
=======
   function handleDelete(e) {
      e.preventDefault()

         fetch(`/tickets/${ticket.id}`, {
>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56
         method: 'DELETE',
         headers: {
            'Content-type':'application/json'
         }
<<<<<<< HEAD
       })
       .then(res => {
=======
      })
      .then(res => {
>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56
         if (res.ok) {
             res.json()
             .then(data => {
                console.log(data);
<<<<<<< HEAD
             })
         }
     })
    }

   function handleUpdatedTickets(e) {
      fetch(`/project/alltickets/${params.id}`)
   .then(res => res.json())
   .then(data => {
    if (data) {console.log(data);
      setTickets(data.tickets)}
   })
    }

    function handleDeleteStuff(e) {
      deleteTicketClick()
      handleUpdatedTickets()
=======
                 reload()
             })
         }
     })

>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56
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
<<<<<<< HEAD
                 <button onClick={handleDeleteStuff} type="button" className="btn btn-outline-dark btn-sm float-right w-25 me-2"><i className="fas fa-plus"></i>Delete</button>
=======
                 <button onClick={handleDelete} type="button" className="btn btn-outline-dark btn-sm float-right w-25 me-2"><i className="fas fa-plus"></i>Delete</button>
>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56
            </div>
         </div>
  )
}

export default MiniTicket