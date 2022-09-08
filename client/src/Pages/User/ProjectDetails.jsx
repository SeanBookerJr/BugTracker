import React from 'react'
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MiniTicket from './MiniTicket';
import TicketList from './TicketList';
import { Pagination } from '../../components/Pagination';
import EditProject from './EditProject';

function ProjectDetails({user}) {
  let navigate = useNavigate()
  let params = useParams()

  const [proj, setProj] = useState({})
  const [man, setMan] = useState([])
  const [tickets, setTickets] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)


useEffect(() => {
   fetch(`/project/alltickets/${params.id}`)
   .then(res => res.json())
   .then(data => {
     console.log(data);
    setProj(data)
    setMan(data.manager)
    setTickets(data.tickets)
   })
}, [])

const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = tickets?.slice(indexOfFirstPost, indexOfLastPost)

// const lengthOfPosts = Object.keys(currentPosts).length

console.log(tickets);

const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className='conatiner'>
      <Navbar />
      <div className='row pt-4'>
      <div class="card w-50 mx-auto h-50">
        <div class="card-header">
          Project Details
         </div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"><strong>Title: </strong>{proj.title}</p>
              <p><strong>Description: </strong>{proj.description}</p>          
                  <p><strong>Manager: </strong>{man.first_name} {man.last_name}</p>
                  
              {/* <button class="btn btn-primary btn-sm mt-3 float-right"style={{width: 100}}>Edit</button> */}
              <EditProject params={params}/>
         </div>
      </div>
      <div class="card mb-5 mx-auto h-25" style={{width: 400}}>
              <div class="card-header">
                All {proj.title}'s Tickets
              </div>
              <ul class="list-group list-group-flush pagination p-3">
                {currentPosts?.map(t => {
                    return(
                  <TicketList key={t.id} t={t} />
                )})}
              </ul>
              <Pagination postsPerPage={postsPerPage} totalPosts={tickets.length} paginate={paginate}/>
            </div>
            </div>
      <div  class="container py-5 h-100 border mt-1">
        <div>
        </div>
          <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-xl-10 row ">
                {proj.tickets?.map(ticket => 
                  <MiniTicket key={ticket.id} ticket={ticket}/>)}
              </div>
          </div>
      </div>

    </div>
  )
}

export default ProjectDetails