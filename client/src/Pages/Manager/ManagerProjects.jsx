import React from 'react'
import ManNavBar from '../../components/ManNavBar';
import CreateProjectModal from '../User/CreateProjectModal';
import ManMiniProject from './ManMiniProject';
import { useState, useEffect } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function ManagerProjects() {
  const user = JSON.parse(localStorage.getItem("user"))

  const [query, setQuery] = useState("") 

  
  const filteredProjects = user.projects?.filter(singleProj => singleProj.title.toLowerCase().includes(query.toLowerCase()))
  const [projects, setProjects] = useState(filteredProjects) 
  useEffect(() => {
    setProjects(filteredProjects)
  }, [])
  
  const handleQuery = e => {
    setQuery(e.target.value)
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return
    const items = Array.from(filteredProjects)
    const [reordereditem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reordereditem)
  
    setProjects(items)
  }
  

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
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={'projects'}>
        {(provided) => (
    <ul className="col col-xl-10 row " {...provided.droppableProps} ref={provided.innerRef} >
      {projects?.map((proj, index) => 
      <Draggable provided={provided} key={proj.id} draggableId={(proj.id).toString()} index={index} >
        {(provided) => (
          <li className="col-sm " {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
        <ManMiniProject proj={proj} user={user} />
        </li>
        )}
        </Draggable>        
        )}
        {provided.placeholder}
    </ul>
          
    )}
    </Droppable>
    </DragDropContext>
  </div>
</div>
</div>
  )
}

export default ManagerProjects