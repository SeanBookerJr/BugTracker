import React from 'react'
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';

function Piechart({user}) {


    let data = [
        ["priority", "Amount"],
    ]
    
  let numOfPriorities = []

  user.tickets?.forEach(ticket => {
    numOfPriorities.push(ticket.priority)
  });


  const createTally = numOfPriorities => {
        const tally= {}

        numOfPriorities?.forEach(priority => {
            tally[priority] = tally[priority] ? tally[priority] + 1 : 1
            
        })
        return tally
  }

  const priorityTally = createTally(numOfPriorities)

  data.push(["High", priorityTally.high])
  data.push(["Medium", priorityTally.medium])
  data.push(["Low",priorityTally.low])
  
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

export default Piechart