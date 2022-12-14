import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotifModal from './NotifModal'

function ManNavBar() {

    let navigate = useNavigate()

    return (
  
  <nav className='fixed-top'>
  <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3 shadow p-3">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/ManagerDashboard">
          Bug Tracker
        </a>
        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
          <span className="block relative w-6 h-px rounded-sm bg-white"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>
      </div>
      <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/ManagerProfile">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/ManagerProjects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/ManTickets">
                Tickets
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/RoleAssignments">
                Role Assignments
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white">
              <NotifModal/>
              </a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  </nav>
    )
  }
export default ManNavBar