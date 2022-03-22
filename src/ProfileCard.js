import React from 'react'
import writer from './writers'

export const ProfileCard = () => {
  return (
    <div className="card">
    <img src={`./img/${writer.avatar}.png`} width="100%" height="300px" alt="" />  
      <div className="textGroup">
        <h3>{writer.name}</h3>
        <p>{writer.email}</p>
        <p>{writer.phone}</p>
      </div>
    </div> 
  )
}
