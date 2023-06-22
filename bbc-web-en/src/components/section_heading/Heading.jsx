import React from 'react'
import './Heading.css'

const Heading = ({ title, type }) => {
  return (
    <div className={`heading ${type}`}>
        {type==="left"?  <div></div> : <></>}
        <h1> {title}</h1>
        {type==="right"?  <div></div> : <></>}
    </div>
  )
}

export default Heading