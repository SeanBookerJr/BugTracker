import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function NotifModal() {
    const user = JSON.parse(localStorage.getItem("user"))
    const [show, setShow] = useState(false)
    const [notifs, setNotifs] = useState([])
    const [notifParams, setNotifParams] = useState([])

    let navigate = useNavigate()


    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    useEffect(() => {
        fetch(`/user/notifications/${user.id}`)
        .then(res => res.json())
        .then(data => {
            setNotifs(data)
            setNotifParams(data.recipient_id)
        })
     
    }, [user.id])
    const newArray = []
    const mapArray = []

    notifs?.forEach(function (e) {
        let x = e.params
        newArray.push(x)
    })

    newArray?.forEach(function (e) {
        let c = e.comment
        c.ticket = e.ticket.title
        //  c.user = e.user.username
        mapArray.push(c)
    })

    console.log(mapArray);
    console.log(new Date());
    
  return (
    <div className='dropdown'>
        <a class="dropdown-toggle" href="#" role="button" type='button' data-bs-toggle="dropdown" aria-expanded="false">
            <span class=" badge rounded-pill bg-danger">
            {mapArray.length >= 9 ? "9+" : mapArray.length} <i class="bi bi-suit-heart-fill"></i>
            </span>
            <ul className='dropdown-menu'>
                <li className='dropdown-iem m-2'>Notifications</li>
            {mapArray?.reverse().map(n => {
                    return(
                        <div>
                        <li> <a className='dropdown-item' onClick={() => navigate(`/TicketDetails/${n.ticket_id}`)}>{n.commentable_type} commented on {n.ticket}</a> </li>
                        </div>
                    )
                })}
            </ul>
            
            </a>
        
    </div>
  )
}

export default NotifModal