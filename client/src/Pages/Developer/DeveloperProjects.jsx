import React from 'react'
import DevNavBar from '../../components/DevNavBar';
import CreateProjectModal from '../User/CreateProjectModal';
import DevMiniProject from './DevMiniProject';
import { useState } from 'react';

function DeveloperProjects({user}) {

    const [query, setQuery] = useState("") 

const handleQuery = e => {
  setQuery(e.target.value)
}

console.log(user.projects);

const filteredProjects = user.projects?.filter(singleProj => singleProj.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <DevNavBar />
            <div class="input-group mb-2 justify-content-center mt-5">
              <div class="form-outline">
                <input onChange={handleQuery} placeholder='Search...' type="search" id="form1" class="form-control h-50 mt-5" />
                <label class="form-label" for="form1"></label>
              </div>
              <CreateProjectModal />
           </div>
      <div class="container border">
      <h1 className='mx-auto h3 pb-3'>{user.first_name}'s Projects</h1>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10 row ">
        {filteredProjects?.map(proj => 
          <DevMiniProject key={proj.id} proj={proj} user={user} />
          )}
      </div>
    </div>
  </div>
  </div>
  )
}

export default DeveloperProjects