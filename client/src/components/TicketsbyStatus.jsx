import React from 'react'
import { Chart } from "react-google-charts";

function TicketsbyStatus({user}) {

    let data = [
        ["status", "amount"]
    ]

    let tickStatus = []

    user.tickets?.forEach(tick => {
        tickStatus.push(tick.status)
    });

    const tallyStatus = tickStatus => {
        const tally = {}

        tickStatus?.forEach(status => {
            tally[status] = tally[status] ? tally[status] + 1 : 1
        })

        return tally
    }

    const ticketStatus = tallyStatus(tickStatus)

    data.push(["open", ticketStatus.open])
    data.push(["resolved", ticketStatus.resolved])
    data.push(["in-progress", ticketStatus.inprogress])

  return (
    <div>
         <Chart 
        chartType="Bar"
        data={data}
        width={"100%"}
        height={"400px"}
        />
    </div>
  )
}

export default TicketsbyStatus