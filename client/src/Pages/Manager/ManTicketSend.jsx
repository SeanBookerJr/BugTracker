import React from 'react'
import { useNavigate } from 'react-router-dom'

function ManTicketSend({ticket}) {

    let navigate = useNavigate()

  function handleButtonCLick() {
      navigate(`/ManTicketDetails/${ticket.id}`)
  }
  return (
    <div>
         <button onClick={handleButtonCLick} style={{width: 50}} type="button" className="btn btn-outline-dark btn-sm btn-floating float-right">
              <i className="fas fa-plus"></i> View
            </button>
    </div>
  )
}

export default ManTicketSend