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
        if(data.account_type === "Customer") {
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
        <section class="vh-100">
  <div class="container py-5 h-100">
  <h1 className='display-6 pb-2'><strong>Bug Tracker</strong></h1>
      <h2>Track your issues and resolve them</h2>
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone"></img>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form className='sign-up-form'>
          <h1 className='h4 pb-2'>Sign In</h1>
          <div class="form-outline mb-4">
            <input onChange={handleUsernameChange} type="username" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Username</label>
          </div>

          <div class="form-outline mb-4">
            <input onChange={handlePasswordChange} type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>
         
          <div className='button-holder'>
          <button type="submit" onClick={handleSignInButton} class="sign-in-button">Sign in</button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <div className='button-holder'>
          <button class="create-account" onClick={handleCreateAccountButton}>Create New Account</button>
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