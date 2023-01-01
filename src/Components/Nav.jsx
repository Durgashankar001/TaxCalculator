import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate  = useNavigate()
  return (
    <div>
        <div className='nav'>
            <h1 onClick={()=>navigate("/")}>TekMentors</h1>
            <div>
            <h2 onClick={()=>navigate("/")}>Problem One</h2>
            <h2 onClick={()=>navigate("/second")}>Problem Two</h2>
            </div>
        </div>
    </div>
  )
}

export default Nav