import React from 'react'

function TicketList({t}) {
  return (
    <div>
        <li class="list-group-item"><strong>{t.title}</strong> <p className='float-right'> {t.priority}</p></li>
    </div>
  )
}

export default TicketList