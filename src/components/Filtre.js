import React, { useState } from 'react'

export default function Filtre({onChange}) {
  const [filtre, setFiltre]=useState('');
  const search = (event) => {
    
    setFiltre(event.target.value);
    onChange(filtre);    
    
}

  return (
    
      <div className="input-group mb-5">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Filtre</span>
  </div>
  <input type="text" placeholder="Search..." value={filtre} onChange={search}  className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
</div>
    
  )
}
