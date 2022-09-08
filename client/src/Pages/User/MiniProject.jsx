import React from 'react'
import { useNavigate } from 'react-router-dom';

function MiniProject({proj, user}) {
    let navigate = useNavigate()

    function handleDetailsClick() {
        navigate(`/ProjectDetails/${proj.id}`)
      }

  return ( 
         <div class="card mb-4 mx-auto shadow p-3 bg-white rounded" style={{width: 450}} >
            <div class="card-body p-4">
                <h3 class="mb-3"><strong>{proj.title}</strong></h3>
                <p class="small mb-0"><i class="far fa-star fa-lg"></i> <span class="mx-2">|</span> Created by
                <strong> {user.first_name} {user.last_name}</strong></p>
                <div class="d-flex justify-content-start align-items-center">
                <p class="mb-0 text-uppercase"><i class="fas fa-cog me-2"></i>
                <span class="text-muted small">{proj.description}</span></p>
                </div>
                <a href="#!">
                </a>
                <button style={{width: 100}} onClick={() => handleDetailsClick()} type="button" class="btn btn-outline-dark btn-sm float-right">
                    <i class="fas fa-plus"></i> Details
                 </button>
            </div>
         </div>
  )
}

export default MiniProject