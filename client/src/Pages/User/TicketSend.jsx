import React from 'react'
import { useNavigate } from 'react-router-dom'

function TicketSend({ticket}) {

    let navigate = useNavigate()

  function handleButtonCLick() {
      navigate(`/TicketDetails/${ticket.id}`)
  }

  console.log(ticket);
  return (
    <div>
         <button onClick={handleButtonCLick} style={{width: 50}} type="button" class="btn btn-outline-dark btn-sm btn-floating float-right">
              <i class="fas fa-plus"></i> View
            </button>
    </div>
  )
}

export default TicketSend