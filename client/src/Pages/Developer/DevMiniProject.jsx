import React from 'react'
import { useNavigate } from 'react-router-dom';

function DevMiniProject({proj, user}) {
    let navigate = useNavigate()

    function handleDetailsClick() {
        navigate(`/DevProjectDetails/${proj.id}`)
      }
  return (
    <div className="card mb-4 mx-auto shadow p-3 bg-white rounded" style={{width: 450}} >
    <div className="card-body p-4">
        <h3 className="mb-3"><strong>{proj.title}</strong></h3>
        <p className="small mb-0"><i className="far fa-star fa-lg"></i> <span className="mx-2">|</span> Developer : 
        <strong> {user.first_name} {user.last_name}</strong></p>
        <div className="d-flex justify-content-start align-items-center">
        <p className="mb-0 text-uppercase"><i className="fas fa-cog me-2"></i>
        <span className="text-muted small">{proj.description}</span></p>
        </div>
        <a href="#!">
        </a>
        <button style={{width: 100}} onClick={() => handleDetailsClick()} type="button" className="btn btn-outline-dark btn-sm float-right">
            <i className="fas fa-plus"></i> Details
         </button>
    </div>
 </div>
  )
}

export default DevMiniProject