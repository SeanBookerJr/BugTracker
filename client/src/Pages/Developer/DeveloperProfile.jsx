import React from 'react'
import Navbar from '../../components/Navbar'
import EditProfile from '../User/EditProfile'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DeveloperProfile({user, setUser}) {

    let navigate = useNavigate()
    
    function handleLogout(e) {
        fetch('/logout', {
          method: 'DELETE'
        })
        setUser({})
        navigate('/')
    }

  return (
    <div>
        <Navbar />
        <div class="row mt-5"> 
             <div class="col-lg-4 mx-auto pt-5">
                 <div class="card mb-4"> 
                     <div class="card-body text-center"> 
                        <h5 class="my-3"><strong>{user.first_name} {user.last_name}</strong></h5>
                        <p class="text-muted mb-1">{user.account_type}</p>
                        <div className='row'>
                        <EditProfile user={user} />
                        <button className='btn btn-outline-primary mx-auto mt-3' style={{width: 100}} onClick={handleLogout}>Logout</button>
                        </div>
                        <div class="d-flex justify-content-center mb-2">

                        </div>
                     </div>
                 </div>
             </div>
        </div>
        <div class="col-lg-8 mx-auto " style={{width: 460}}> 
             <div class="card mb-4 ">
                     <div class="card-body"> 
                     <ul class="list-group list-group-flush">
                          
                            <p class="list-group-item pb-4"><strong>Full Name :</strong> {user.first_name} {user.last_name} </p>

                             <p class="list-group-item pb-4"><strong>Email :</strong> {user.email}</p>
                                    
                             <p class="list-group-item pb-4"><strong>Username :</strong> {user.username}</p>

                             <p class="list-group-item pb-4"><strong>Account Type :</strong> {user.account_type}</p>

                        </ul>
                 </div>
                                 
             </div>
         </div>
     </div>
  )
}

export default DeveloperProfile