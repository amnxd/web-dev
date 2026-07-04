import React from 'react'
import App from '../App'

const Card = ({user}) => {
  return (
      <div className='card mx-20 h-100 w-80 bg-amber-50'>
        Name = {user.name}<br />Age = {user.age}<br />Gender = {user.gender}

      </div>

  )
}

export default Card