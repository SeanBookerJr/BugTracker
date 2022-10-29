import React from 'react'
import DevNavBar from '../../components/DevNavBar';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DevMiniTicket from './DevMiniTicket';
import TicketList from '../User/TicketList';
import { Pagination } from '../../components/Pagination';
import EditProject from '../User/EditProject';
import NewTicketModal from '../User/NewTicketModal';

function DevProjectDetails() {
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
    <div><div className='container mt-5'>
    <DevNavBar />
    <div className='row pt-4'>
    <div className="card w-50 mx-auto h-50 mt-5">
      <div className="card-header">
        <strong>Project Details</strong>
       </div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text mb-2"><strong>Title: </strong>{proj.title}</p>
            <p className="card-text mb-2"><strong>Description : </strong>{proj.description}</p>          
                <p className="card-text mb-2"><strong>Assigned Manager : </strong>{man.first_name} {man.last_name}</p>
                <p className="card-text mb-2"><strong>Customer : </strong>{proj.user.first_name} {proj.user.last_name}</p>
                <p className="card-text mb-2"><strong>Created : </strong>{proj.created_at}</p>
                <p className="card-text mb-2"><strong>Last Updated :</strong>{proj.updated_at}</p>
                
            {/* <button className="btn btn-primary btn-sm mt-3 float-right"style={{width: 100}}>Edit</button> */}
            <EditProject params={params}/>
            <NewTicketModal params={params}/>
       </div>
    </div>
    <div className="card mb-5 mx-auto h-25 mt-5" style={{width: 400}}>
            <div className="card-header">
              <strong>All {proj.title}'s Tickets</strong>
              <p className='float-right'><strong>Priority</strong></p>
            </div>
            <ul className="list-group list-group-flush pagination p-3">
              {currentPosts?.map(t => {
                  return(
                <TicketList key={t.id} t={t} />
              )})}
            </ul>
            <Pagination postsPerPage={postsPerPage} totalPosts={tickets.length} paginate={paginate}/>
          </div>
          </div>
    <div  className="container py-5 h-100 border mt-1">
      <div>
      </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10 row ">
              {tickets?.map(ticket => 
                <DevMiniTicket key={ticket.id} ticket={ticket}/>)}
            </div>
        </div>
    </div>

  </div></div>
  )
}

export default DevProjectDetails