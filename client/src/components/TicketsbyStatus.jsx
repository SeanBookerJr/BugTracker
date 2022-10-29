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

<<<<<<< HEAD
    console.log(user.tickets);

=======
>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56
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
<<<<<<< HEAD
    data.push(["ongoing", ticketStatus.ongoing])

    console.log(ticketStatus.resolved);
=======
    data.push(["in-progress", ticketStatus.inprogress])
>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56

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