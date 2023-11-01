import './Trip.css'
import './Trip.jsx'
import React from 'react'

function TripData(props) {
  return (
    <>
        <div className="t-card">
            <div className="t-image">
                <img src= {props.image} alt="trip image"  />
            </div>    
            <h3>{props.heading}</h3>
            <p>{props.para}</p>
        </div> 
    </>
  )
}

export default TripData
