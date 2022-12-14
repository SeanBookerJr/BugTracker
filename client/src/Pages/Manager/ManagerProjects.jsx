import React from 'react'
import ManNavBar from '../../components/ManNavBar';
import CreateProjectModal from '../User/CreateProjectModal';
import ManMiniProject from './ManMiniProject';
import { useState, useEffect } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function ManagerProjects() {
  const user = JSON.parse(localStorage.getItem("user"))

  const [query, setQuery] = useState("") 
  const [projects, setProjects] = useState([]) 

  useEffect(() => {
    fetch(`/user/allprojects/${user.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
     setProjects(data.projects)
    })
 }, [])

 const handleQuery = e => {
   setQuery(e.target.value)
  }
  
  const filteredProjects = projects?.filter(singleProj => singleProj.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
    <ManNavBar />
          <div className="input-group mb-2 justify-content-center mt-5">
            <div className="form-outline">
              <input onChange={handleQuery} placeholder='Search...' type="search" id="form1" className="form-control h-50 mt-5" />
              <label className="form-label" for="form1"></label>
            </div>
            <CreateProjectModal />
         </div>
    <div className="container border">
    <h1 className='mx-auto h3 pb-3'>{user.first_name}'s Projects</h1>
  <div className="row d-flex justify-content-center align-items-center h-100">
    <ul className="col col-xl-10 row " >
      {filteredProjects?.map((proj, index) => 
          <li className="col-sm ">
        <ManMiniProject proj={proj} user={user} />
        </li>
        )}
    </ul>
        
  </div>
</div>
</div>
  )
}

export default ManagerProjects