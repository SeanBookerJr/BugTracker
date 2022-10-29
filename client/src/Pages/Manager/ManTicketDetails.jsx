import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ManNavBar from '../../components/ManNavBar';

function ManTicketDetails() {
    const user = JSON.parse(localStorage.getItem("user"))
    let params = useParams()

    const [ticket, setTicket] = useState([])
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState('')
    const [newStatus, setNewStatus] = useState('')
    const [newPriority, setNewPriority] = useState('')
    const [newTypeOf, setNewTypeOf] = useState('')
    const [newDeveloper, setNewDeveloper] = useState('')
    const [ticMan, setTicMan] = useState([])
    const [ticDev, setTicDev] = useState([])
    const [ticComments, setTicComments] = useState([])
    const reload=()=>window.location.reload();

    useEffect(() => {
        fetch(`/ticket/details/${params.id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
         setTicket(data)
         setTicMan(data.manager)
         setTicDev(data.developer)
         setNewStatus(data.status)
         setNewPriority(data.priority)
        })
     }, [])

     useEffect(() => {
        fetch(`/ticket/comments/${params.id}`)
        .then(res => res.json())
        .then(comments => {
            console.log(comments)
        setTicComments(comments)
        })
     }, [])
     

     console.log(ticket.comments);

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
     console.log(newStatus);
     const statusGroup = ["open", "ongoing", "resolved"]

     function handleNewPriority(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("priority", newPriority)

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

     function handleNewTypeOf(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("type_of", newTypeOf)

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

     const typeOfGroup = ["performance", "security", "functional", "usability", "syntax", "compatability"]

     function handleNewDeveloper(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("developer_id", newDeveloper.slice(-2))

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
     const handleCommentChange = e => setMessage(e.target.value)
     const handleStatusChange = e => setNewStatus(e.target.value)
     const handlePriorityChange = e => setNewPriority(e.target.value)
     const handleTypeOfChange = e => setNewTypeOf(e.target.value)
     const handleDeveloperChange = e => setNewDeveloper(e.target.value)

     console.log(newDeveloper.slice(-2));

  return (
    <div>
        <ManNavBar />
        <div className='container'>
            <div className='row pt-4 mt-5'>
                <div className='card mx-auto shadow mt-5' style={{width: 600}}>
                    <div className='card-header'><strong>Ticket Details</strong></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item pb-4"><strong>Title:</strong> {ticket.title}</li>
                        <li className="list-group-item pb-4"><strong>Description:</strong> {ticket.description}</li>
                        <li className="list-group-item pb-4"><strong>Assigned Developer:</strong> {ticDev.first_name} {ticDev.last_name}
                        <form onSubmit={handleNewDeveloper} className='form-group w-75 mt-3'>
                            <p>Re-assign Developer</p>
                            <select onClick={handleDeveloperChange} className='border rounded w-50 mb-4' type="search">
                              {user.developers?.map(d => {
                                  return(
                                    <option>{d.first_name} {d.last_name} {d.id}</option>
                                  )
                              })}
                            </select>
                            <button type='submit' className='btn btn-outline-primary rounded ms-2' style={{width: 105}}>Submit</button>
                        </form>
                        </li>
                        <li className="list-group-item pb-4"><strong>Priority:</strong> {ticket.priority}
                        <form onSubmit={handleNewPriority} className='form-group w-75 mt-3'>
                            <p>Update Priority</p>
                            <select onChange={handlePriorityChange} className='border rounded w-50 mb-4' type="search">
                                <option>high</option>
                                <option>medium</option>
                                <option>low</option>
                            </select>
                            <button type='submit' className='btn btn-outline-primary rounded ms-2' style={{width: 105}}>Submit</button>
                        </form>
                        </li>
                        <li className="list-group-item pb-4"><strong>Status:</strong> {ticket.status}
                        <form onSubmit={handleNewStatus} className='form-group w-75 mt-3'>
                            <p>Update Status</p>
                            <select onChange={handleStatusChange} value={newStatus} className='border rounded w-50 mb-4' type="search">
                                {statusGroup?.map(s => {
                                    return(
                                        <option>{s}</option>
                                    )
                                })}
                            </select>
                            <button type='submit' className='btn btn-outline-primary rounded ms-2' style={{width: 105}}>Submit</button>
                        </form>
                        </li>
                        <li className="list-group-item pb-4"><strong>Type of Bug:</strong> {ticket.type_of}
                        <form onSubmit={handleNewTypeOf} className='form-group w-75 mt-3'>
                            <p>Update Bug Type</p>
                            <select onChange={handleTypeOfChange} value={newTypeOf} className='border rounded w-50 mb-4' type="search">
                                {typeOfGroup?.map(t => {
                                    return(
                                        <option>{t}</option>
                                    )
                                })}
                            </select>
                            <button type='submit' className='btn btn-outline-primary rounded ms-2' style={{width: 105}}>Submit</button>
                        </form>
                        </li>
                        {/* <li className="list-group-item pb-4"><strong>Assigned Developer:</strong> {ticket.developer}</li> */}
                    </ul>
                </div>
                <div className='card mx-auto shadow mt-5' style={{width: 600}}>
                    <div className='card-header'>
                       <strong>Ticket Comments</strong>
                       <strong className='float-right'>Time Created</strong>
                    </div>
                    <ul className="list-group list-group-flush">
                        {ticComments?.map(c => {
                            return(
                                <li className="list-group-item pb-4"><strong>{c.commentable.first_name} {c.commentable.last_name} ({c.commentable_type})</strong> {c.message} <p className='float-right'>{c.created_at}</p></li>
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

export default ManTicketDetails