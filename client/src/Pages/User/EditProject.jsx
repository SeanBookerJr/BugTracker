import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditProject({params}) {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const [descrip, setDescrip] = useState("")
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const reload=()=>window.location.reload();

    function handleProjectUpdate(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", descrip)

        fetch(`/projects/${params.id}`, {
            method: 'PATCH',
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

  return (
    <div>
         <Button className='btn btn-outline-primary ms-5 h-75 float-right' style={{width: 150}} onClick={handleShow}>
                <p>Edit</p>
        </Button>

        <Modal show={show} onHide={handleClose} centered style={{ textAlign: 'center' }} > 

<Modal.Header closeButton>
    <Modal.Title>Update Project</Modal.Title>
</Modal.Header>
<Modal.Body>
    <div>
        <form onSubmit={handleProjectUpdate}>
            <label className='form-label'></label>
            <input onChange={handleTitleChange} type="text" className='modal-edit-control me-5 border border-dark rounded'
            placeholder='Title'
            value={title}>
            </input>

            <label className='form-label'></label>
            <input onChange={handleDescripChange} type="text" className='modal-edit-control border border-dark rounded'
            placeholder='Description'
            value={descrip}>
            </input>

            <button className='btn btn-outline-primary mt-5 h-75' type='submit'>Update</button>
        </form>
    </div>
</Modal.Body>
</Modal>
    </div>
  )
}

export default EditProject