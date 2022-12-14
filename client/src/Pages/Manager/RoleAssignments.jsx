import React from 'react'
import ManNavBar from '../../components/ManNavBar'


function RoleAssignments() {
    const user = JSON.parse(localStorage.getItem("user"))

    console.log(user);

  return (
    <div className='container'>
        <ManNavBar />
        <div className='row p-5'>
            <div className='col'>
                <div className='card p-3 mt-5'>
                    <div className='card-header'> Your Developer personell
                    </div>
                    <div className='list-group m-2'>
                {user.developers?.map(d => {
                    return(
                        <li className='list-group-item'>{d.username}</li>
                    )
                })}
                      </div>
                      <div className='card-header mt-3'> Your Users
                    </div>
                    <div className='list-group m-2'>
                {user.users?.map(u => {
                    return(
                        <li className='list-group-item'>{u.first_name} {u.last_name}</li>
                    )
                })}
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoleAssignments