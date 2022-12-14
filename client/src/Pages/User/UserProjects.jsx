import React from 'react'
import Navbar from '../../components/Navbar'
import CreateProjectModal from './CreateProjectModal';
import MiniProject from './MiniProject';
import { useState, useEffect } from 'react';


function UserProjects() {

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

  console.log(projects);
  
  const filteredProjects = projects?.filter(singleProj => singleProj.title.toLowerCase().includes(query.toLowerCase()))
  

  return (
    <div>
      <Navbar />
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
      <ul className="col col-xl-10 row ">
        {filteredProjects?.map((proj, index) => 
            <li className="col-sm " >
          <MiniProject proj={proj} user={user} setProjects={setProjects} />
          </li>
          )}
      </ul>
    </div>
  </div>
  </div>
  )
}

export default UserProjects