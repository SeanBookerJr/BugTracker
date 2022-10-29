import React from 'react'
import ManNavBar from '../../components/ManNavBar'
import EditManProfile from './EditManProfile'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ManagerProfile({setUser}) {
    const user = JSON.parse(localStorage.getItem("user"))

    let navigate = useNavigate()
    
    function handleLogout(e) {
        fetch('/logout', {
          method: 'DELETE'
        })
        setUser({})
        navigate('/')
    }

<<<<<<< HEAD
    console.log(user);

=======
>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56
  return (
    <div>
        <ManNavBar />
        <div className="row mt-5"> 
             <div className="col-lg-4 mx-auto pt-5">
                 <div className="card mb-4"> 
                     <div className="card-body text-center"> 
                        <h5 className="my-3"><strong>{user.first_name} {user.last_name}</strong></h5>
                        <p className="text-muted mb-1">{user.account_type}</p>
                        <div className='row'>
                        <EditManProfile user={user} />
                        <button className='btn btn-outline-primary mx-auto mt-3' style={{width: 100}} onClick={handleLogout}>Logout</button>
                        </div>
                        <div className="d-flex justify-content-center mb-2">

                        </div>
                     </div>
                 </div>
             </div>
        </div>
        <div className="col-lg-8 mx-auto " style={{width: 460}}> 
             <div className="card mb-4 ">
                     <div className="card-body"> 
                     <ul className="list-group list-group-flush">
                          
                            <p className="list-group-item pb-4"><strong>Full Name :</strong> {user.first_name} {user.last_name} </p>

                             <p className="list-group-item pb-4"><strong>Email :</strong> {user.email}</p>
                                    
                             <p className="list-group-item pb-4"><strong>Username :</strong> {user.username}</p>

                             <p className="list-group-item pb-4"><strong>Account Type :</strong> {user.account_type}</p>

<<<<<<< HEAD
                             <p className="list-group-item pb-4"><strong>Your Developers :</strong>
                             {user.developers?.map(d => { 
                                 return(
                                        <li>ID #{d.id}: {d.first_name} {d.last_name} </li>
                             )
                             })}
                             </p>

=======
>>>>>>> c1bdfcf381bc3a9039f48c4f4c559d74e95ead56
                        </ul>
                 </div>
                                 
             </div>
         </div>
     </div>
  )
}

export default ManagerProfile