import React from 'react'

export default function Country(props) {
  return (
  
            <div className='col-md-2 shadow-box border mb-3 ' >
            <img  className='img-fluid rounded ' src={props.country.flag} alt="gg" />
            <div className='text-center'>
                <h3>{props.country.name}</h3>
                <h4>
                {props.country.capital}
                </h4>
            </div>
            </div>
    
  )
}
