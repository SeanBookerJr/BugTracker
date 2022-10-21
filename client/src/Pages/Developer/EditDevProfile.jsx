import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditDevProfile({user}) {
    const [show, setShow] = useState(false)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const reload=()=>window.location.reload();

    function handleProfileUpdate(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("first_name", firstName)
        formData.append("last_name", lastName)
        formData.append("username", username)
        formData.append("email", email)

        fetch(`/developers/${user.id}`, {
            method: 'PATCH',
              body: formData
            })
            .then(res => {
                if (res.ok) {
                    res.json()
                    .then(data => {
                        console.log(data)
                        setShow(false)
                        setUsername(data.username)
                        setFirstName(data.first_name)
                        setLastName(data.last_name)
                        setEmail(data.email)
                        reload()
                        
                    })
                }
            })

      
          }


    const handleFirstNameChange = e => {
        setFirstName(e.target.value)
    }

   const handleLastNameChange = e => {
        setLastName(e.target.value)
    }

   const handleUsernameChange = e => {
        setUsername(e.target.value)
    }

   const handleEmailChange = e => {
        setEmail(e.target.value)
    }

  return (
    <div>
         <Button className='btn btn-outline-primary' style={{width: 100}} onClick={handleShow}>
                <p>Edit</p>
        </Button>

        <Modal show={show} onHide={handleClose} centered style={{ textAlign: 'center' }} > 

<Modal.Header closeButton>
    <Modal.Title>Update Profile</Modal.Title>
</Modal.Header>
<Modal.Body>
    <div>
        <form onSubmit={handleProfileUpdate}>
            <label className='form-label'></label>
            <input onChange={handleFirstNameChange} type="text" className='modal-edit-control me-5 border border-dark rounded'
            placeholder={user.first_name}>
            </input>

            <label className='form-label'></label>
            <input onChange={handleLastNameChange} type="text" className='modal-edit-control border border-dark rounded'
            placeholder={user.last_name}>
            </input>

            <label className='form-label'></label>
            <input onChange={handleUsernameChange} type="text" className='modal-edit-control me-5 mt-5 border border-dark rounded'
            placeholder={user.username}>
            </input>

            <label className='form-label'></label>
            <input onChange={handleEmailChange} type="text" className='modal-edit-control border border-dark rounded'
            placeholder={user.email}>
            </input>

            <button className='btn btn-outline-primary mt-5 h-75' type='submit'>Update</button>
        </form>
    </div>
</Modal.Body>
</Modal>
    </div>
  )
}

export default EditDevProfile