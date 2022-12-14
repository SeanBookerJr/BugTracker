import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'



function Index({setUser}) {

  const { setAuth } = useContext(AuthContext)

  let navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  

function handleCreateAccountButton(e) {
  navigate('./CreateAccount')
}

function handleSignInButton(e) {
  e.preventDefault();

  fetch('/login', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json',
      'Accepts' : 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => {
    if(res.ok) {
      res.json()
      .then(data => {
        console.log(data)
        if(data.account_type === "User") {
          setErrors('')
          setUser(data)
          navigate('./CustomerDashboard')
        }
        else if (data.account_type === "Developer") {
          setErrors('')
          setUser(data)
          navigate('./DeveloperDashboard')
        }
        else if (data.account_type === "Manager") {
          setErrors('')
          setUser(data)
          navigate('./ManagerDashboard')
        }
        else if (data.account_type === "Admin") {
          setErrors('')
          setUser(data)
          navigate('./AdminDashboard')
        }
      })
    }
  })
}


const handleUsernameChange = e => setUsername(e.target.value)
const handlePasswordChange = e => setPassword(e.target.value)

  return (
    <div>
        <section className="vh-100">
  <div className="container py-5 h-100">
  <h1 className='display-6 pb-2'><strong>Bug Tracker</strong></h1>
      <h2>Track your issues and resolve them</h2>
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone"></img>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form className='sign-up-form'>
          <h1 className='h4 pb-2'>Sign In</h1>
          <div className="form-outline mb-4">
            <input onChange={handleUsernameChange} type="username" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Username</label>
          </div>

          <div className="form-outline mb-4">
            <input onChange={handlePasswordChange} type="password" id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>
         
          <div className='button-holder'>
          <button type="submit" onClick={handleSignInButton} className="sign-in-button">Sign in</button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <div className='button-holder'>
          <button className="create-account" onClick={handleCreateAccountButton}>Create New Account</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Index