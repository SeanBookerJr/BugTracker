import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateAccount({user, setUser}) {

    let navigate = useNavigate()

const [accountType, setAccountType] = useState('Customer')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [errors, setErrors] = useState('')


function handleFormSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    formData.append("first_name", firstName)
    formData.append("last_name", lastName)
    formData.append("email", email)
    formData.append("account_type", accountType)


    if(accountType === "Customer")  {
    fetch('/users', {
        method: 'POST',
          body: formData
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    console.log(data)
                    setErrors([])
                    setUser(data)
                    navigate('/CustomerDashboard')
                })
            } else {
                res.json()
                .then(({errors}) => setErrors(errors))
            }
        })
    }

    if(accountType === "Developer") {
        fetch('/developers', {
            method: 'POST',
            body: formData
        })
        .then( res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    console.log(data)
                    setErrors([])
                    setUser(data)
                    navigate('/DeveloperDashboard')
                })
            } else {
                res.json()
                .then(({errors}) => res.json(errors))
            }
        })
        .catch(err=>console.log(err))
    }

    if(accountType === "Manager") {
        fetch('/managers', {
            method: 'POST',
            body: formData
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    console.log(data)
                    setErrors([])
                    setUser(data)
                    navigate('/ManagerDashboard')
                })
            }
        })
    }

    if(accountType === "Admin") {
        fetch('/managers', {
            method: 'POST',
            body: formData
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    console.log(data)
                    setErrors([])
                    setUser(data)
                    navigate('/AdminDashboard')
                })
            }
        })
    }
}

const handleFirstNameChange = e => {
    setFirstName(e.target.value)
}
const handleLastNameChange = e => {
    setLastName(e.target.value)
}
const handleEmailChange = e => {
    setEmail(e.target.value)
}
const handleUsernameChange = e => {
    setUsername(e.target.value)
}
const handlePasswordChange = e => {
    setPassword(e.target.value)
}

const handleAccountTypeChange = e => {
    setAccountType(e.target.value)
}

  return (
    <div className='col-md-6 off-md-3'>
        <form onSubmit={handleFormSubmit} action='' className='mt-5 border p-4 bg-light shadow'>
        <h4 className="mb-5 text">Create New Account</h4>
        
        <div className="form-group">
        <label className="form-label" htmlFor="account-type"> Select Account Type:</label>
        <select onChange={handleAccountTypeChange} value={accountType} className='form-select' id='select-account'>
            <option>Customer</option>
            <option>Developer</option>
            <option>Manager</option>
            <option>Admin</option>
        </select>
        </div>
        <br />
        <div className="mb-3">
        <label className="form-label" htmlFor="fName"> First Name:</label>
            <input onChange={handleFirstNameChange} type="name" className='form-control' id='fname' value={firstName} placeholder='First Name' required/>
         </div>   

         <div className="mb-3">
        <label className="form-label" htmlFor="lName"> Last Name:</label>
            <input onChange={handleLastNameChange} type="name" className='form-control' id='lname' value={lastName} placeholder='Last Name' required/>
         </div>

         <div className="mb-3">
        <label className="form-label" htmlFor="email"> Email:</label>
            <input onChange={handleEmailChange} type="email" className='form-control' id='email' value={email} placeholder='E-mail' required/>
         </div>

         <div className="mb-3">
        <label className="form-label" htmlFor="username"> Username:</label>
            <input onChange={handleUsernameChange} type="username" className='form-control' id='username' value={username} placeholder='Username' required/>
         </div>

         <div className="mb-3">
        <label className="form-label" htmlFor="password"> Password:</label>
            <input onChange={handlePasswordChange} type="password" className='form-control' id='password' value={password} placeholder='Password' required/>
         </div>

         <button className='submit-signup-button' type='submit'>Sign up</button>

        </form>
    </div>
  )
}

export default CreateAccount