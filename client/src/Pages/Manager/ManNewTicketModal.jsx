import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ManNewTicketModal({params, man}) {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const [typeOf, setTypeOf] = useState("")
    const [priority, setPriority] = useState("")
    const [descrip, setDescrip] = useState("")
    const [assignDev, setAssignDev] = useState("")
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const reload=()=>window.location.reload();


    function handleNewTicket(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", descrip)
        formData.append("type_of", typeOf)
        formData.append("priority", priority)
        formData.append("project_id", params.id)
        formData.append("status", "open")
        formData.append("developer_id", assignDev.slice(-2))

        fetch('/tickets', {
            method: 'POST',
              body: formData
            })
            .then(res => {
                if (res.ok) {
                    res.json()
                    .then(data => {
                        console.log(data)
                        setShow(false)
                        reload()
                    })
                }
            })

      
          }


    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

   const handleDescripChange = e => {
        setDescrip(e.target.value)
    }

   const handleTypeOfChange = e => {
        setTypeOf(e.target.value)
    }

   const handlePriorityChange = e => {
        setPriority(e.target.value)
    }

    const handleDeveloperChange = e=> {
        setAssignDev(e.target.value)
    }

console.log(assignDev);

  return (
    <div>
    <Button className='btn btn-outline-primary ms-5 h-75 float-right' style={{width: 150}} onClick={handleShow}>
           <p>Add Ticket</p>
   </Button>

   <Modal show={show} onHide={handleClose} centered style={{ textAlign: 'center' }} > 

<Modal.Header closeButton>
<Modal.Title>Create Ticket</Modal.Title>
</Modal.Header>
<Modal.Body>
<div className='container border p-4'>
    <div className='d-flex flex-column'>
   <form onSubmit={handleNewTicket}>
       <label className='form-label p-4 ms-5'><strong>Title</strong></label>
       <input onChange={handleTitleChange} type="text" className='modal-edit-control border border-dark rounded me-5 ms-4'
       placeholder='Title'
       value={title} required>
       </input>

       <label className='form-label p-4 ms-4'><strong>Description</strong></label>
       <input onChange={handleDescripChange} type="text" className='modal-edit-control border border-dark rounded me-5'
       placeholder='Description'
       value={descrip} required>
       </input>

       <label className='form-label p-4'><strong>Type of Bug</strong></label>
       <select onChange={handleTypeOfChange} type="text" className='form-select-sm mt-3 border me-5' style={{width: 150}}
       placeholder='Type of Bug'
       value={typeOf} required>
           <option>Performance</option>
           <option>Security</option>
           <option>Functional</option>
           <option>Usability</option>
           <option>Syntax</option>
           <option>Compatability</option>
       </select>

       <label className='form-label p-4'><strong>Priority</strong></label>
       <select onChange={handlePriorityChange} type="text" className='form-select-sm mb-3 border' style={{width: 150}}
       placeholder='priority'
       value={priority} required>
           <option>Low</option>
           <option>Medium</option>
           <option>High</option>
       </select>

       <label className='form-label p-4 '><strong>Assign Developer</strong></label>
       <select onClick={handleDeveloperChange} type="text" className='form-select-sm mb-3 border' style={{width: 150}}
       placeholder='Developer'
        required>
           {man.developers?.map(d => {
               return(
                   <option>{d.first_name} {d.last_name} {d.id}</option>
               )
           })}
       </select>

       <button className='btn btn-outline-primary mt-2 h-75' type='submit'>Confirm Ticket</button>
   </form>
   </div>
</div>
</Modal.Body>
</Modal>
</div>
  )
}

export default ManNewTicketModal