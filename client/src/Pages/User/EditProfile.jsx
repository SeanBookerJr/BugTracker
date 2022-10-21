import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditProfile() {
    const user = JSON.parse(localStorage.getItem("user"))

    const [show, setShow] = useState(false)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const reload=()=>window.location.reload();

    const handleProfileUpdate = (e) => {
        e.preventDefault();

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username,
                email,

              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
            .then((res) => res.json())
            .then((updatedInfo) => {
              
              setFirstName(updatedInfo.first_name)
              setLastName(updatedInfo.last_name)
              setUsername(updatedInfo.username)
              setEmail(updatedInfo.email)
              reload()
            });
      
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

        <Modal show={show} centered style={{ textAlign: 'center' }} > 

<Modal.Header closeButton>
    <Modal.Title>Update Profile</Modal.Title>
</Modal.Header>
<Modal.Body>
    <div className='container border p-4'>
        <div className='d-flex flex-column'>
        <form onSubmit={handleProfileUpdate}>
            <label className='p-4'><strong>First Name</strong></label>
            <input onChange={handleFirstNameChange} type="text" className='modal-edit-control border border-dark rounded'
            placeholder={user.first_name}>
            </input>

            <label className='p-4'><strong>Last Name</strong></label>
            <input onChange={handleLastNameChange} type="text" className='modal-edit-control border border-dark rounded'
            placeholder={user.last_name}>
            </input>

            <label className='p-4 ms-4'><strong>Username</strong></label>
            <input onChange={handleUsernameChange} type="text" className='modal-edit-control border border-dark rounded me-4'
            placeholder={user.username}>
            </input>

            <label className='p-4 ms-2'><strong>Email</strong></label>
            <input onChange={handleEmailChange} type="text" className='modal-edit-control border border-dark rounded ms-4'
            placeholder={user.email}>
            </input>

            <button className='btn btn-outline-primary mt-5 h-75' type='submit'>Update</button>
        </form>
        </div>
    </div>
</Modal.Body>
</Modal>
    </div>
  )
}

export default EditProfile