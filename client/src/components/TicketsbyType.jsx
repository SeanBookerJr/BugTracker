import React from 'react'
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';

function TicketsbyType({user}) {

let data = [
    ["Type of Bug", "amount"]
]

let bugsByType = []

user.tickets?.forEach(ticket => {
    bugsByType.push(ticket.type_of)
});

const createTally = bugsByType => {
    const tally = {}

    bugsByType?.forEach(type_of =>{
        tally[type_of] = tally[type_of] ? tally[type_of] + 1 : 1
    })
    return tally
}

const typeOfTally = createTally(bugsByType)


data.push(["performance", typeOfTally.performance])
data.push(["security", typeOfTally.security])
data.push(["functional", typeOfTally.functional])
data.push(["usability", typeOfTally.usability])
data.push(["syntax", typeOfTally.syntax])
data.push(["compatability", typeOfTally.compatability])


  return (
    <div>
        <Chart 
        chartType="PieChart"
        data={data}
        width={"100%"}
        height={"400px"}
        />
    </div>
  )
}

export default TicketsbyType