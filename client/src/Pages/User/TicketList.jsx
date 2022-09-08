import React from 'react'

function TicketList({t}) {
  return (
    <div>
        <li class="list-group-item">{t.title}</li>
    </div>
  )
}

export default TicketList