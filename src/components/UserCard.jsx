
import React from 'react'
import {MdEmail} from "react-icons/md"
import { FaBuilding } from "react-icons/fa"

const UserCard = React.memo(({user}) => {
  return (
    <div className='card'>

  <h3>{user.name}</h3>
  <p><MdEmail style={{color: "#007bff"}} />
  <strong>Email:</strong>{user.email}</p>
  <p> <FaBuilding style={{color: "#555"}} /> 
  <strong>Company:</strong>{user.company.name}</p>
    </div>
  )
})

export default UserCard