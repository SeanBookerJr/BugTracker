import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import DevNavBar from '../../components/DevNavBar';

function DevTicketDetails({user}) {

        let params = useParams()

        const [ticket, setTicket] = useState([])
        const [message, setMessage] = useState('')
        const [errors, setErrors] = useState('')
        const [newStatus, setNewStatus] = useState('')
        const [userMan, setUserMan] = useState([])
        const reload=()=>window.location.reload();

        useEffect(() => {
            fetch(`/ticket/details/${params.id}`)
            .then(res => res.json())
            .then(data => {
              console.log(data);
             setTicket(data)
             setUserMan(data.user)
            })
         }, [])

         console.log(userMan.manager);

         function handleNewComment(e) {
             e.preventDefault()

            const formData = new FormData()
            formData.append("message", message)
            formData.append("user_id", user.id)
            formData.append("ticket_id", params.id)
            formData.append("commentable_id", user.id)
            formData.append("commentable_type", user.account_type)
            
            fetch('/comments', {
                method: 'POST',
                  body: formData
                })
                .then(res => {
                    if (res.ok) {
                        res.json()
                        .then(data => {
                            console.log(data)

                        })
                    } else {
                        res.json()
                        .then(({errors}) => setErrors(errors))
                    }
                })
         }
         

         
         const handleCommentChange = e => setMessage(e.target.value)

         function handleNewStatus(e) {
            e.preventDefault()

            const formData = new FormData()
            formData.append("status", newStatus)

            fetch(`/tickets/${params.id}`, {
                method: 'PATCH',
                  body: formData
                })
                .then(res => {
                    if (res.ok) {
                        res.json()
                        .then(data => {
                            console.log(data)
                            reload()
                        })
                    } else {
                        res.json()
                        .then(({errors}) => setErrors(errors))
                    }
                })
         }

         const handleStatusChange = e => setNewStatus(e.target.value)


  return (
    <div>
        <DevNavBar />
        <div className='container'>
            <div className='row pt-4 mt-5'>
                <div className='card mx-auto shadow mt-5' style={{width: 600}}>
                    <div className='card-header'><strong>Ticket Details</strong></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item pb-4"><strong>Title:</strong> {ticket.title}</li>
                        <li className="list-group-item pb-4"><strong>Description:</strong> {ticket.description}</li>
                        <li className="list-group-item pb-4"><strong>Priority:</strong> {ticket.priority}</li>
                        <li className="list-group-item pb-4"><strong>status:</strong> {ticket.status}</li>
                        <li className="list-group-item pb-4"><strong>Type of Bug:</strong> {ticket.type_of}</li>
                        <form onSubmit={handleNewStatus} className='form-group w-75 mt-3'>
                            <p>Update Status</p>
                            <select onChange={handleStatusChange} value={newStatus} className='border rounded w-50 mb-4' type="search">
                                <option>resolved</option>
                                <option>in-progress</option>
                                <option>open</option>
                            </select>
                            <button type='submit' className='btn btn-outline-primary rounded ms-2' style={{width: 105}}>Submit</button>
                        </form>
                    </ul>
                </div>
                <div className='card mx-auto shadow mt-5' style={{width: 600}}>
                    <div className='card-header'>
                       <strong>Ticket Comments</strong>
                       <strong className='float-right'>Time Created</strong>
                    </div>
                    <ul className="list-group list-group-flush">
                        {ticket.comments?.map(c => {
                            return(
                                <li className="list-group-item pb-4"><strong>{user.first_name} ({user.account_type})</strong> {c.message} <p className='float-right'>{c.created_at}</p></li>
                            )})}
                    </ul>
                    <form onSubmit={handleNewComment} className='form-group w-75 mt-3'>
                        <p className='mb-2'><strong>Add a comment</strong></p>
                            <input onChange={handleCommentChange} className='border rounded w-50 mb-4' type="search"></input>
                            <button onClick={()=>reload()} type='submit' className='btn btn-outline-primary rounded ms-2' style={{width: 105}}>Submit</button>
                        </form>
                 </div>
                 <div className='card mx-auto shadow mt-5 mb-4' style={{width: 600}}>
                 <ul className="list-group list-group-flush">
                    <div className='card-header'><strong>Ticket History</strong></div>
                        <li className="list-group-item pb-4"><strong>Time created : </strong>{ticket.created_at}</li>
                        <li className="list-group-item pb-4"><strong>Time updated : </strong> {ticket.updated_at}</li>
                        <li className="list-group-item pb-4"><strong>Status :</strong> {ticket.status}</li>
                   </ul>   
                    </div>
            </div>
        </div>
    </div>
  )
}

export default DevTicketDetails