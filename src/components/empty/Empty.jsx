import React from 'react'
import { useNavigate } from 'react-router-dom'

const Empty = ({title, url}) => {
    const navigate =  useNavigate()
  return (
    <>
        <div className="container text-center flex flex-col items-center">
            <img className='w-60' src={url} alt="" />
            <h2>{title}</h2>
            <button onClick={()=> navigate("/")}>Home</button>
        </div>
    </>
  )
}

export default Empty