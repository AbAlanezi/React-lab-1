import React from 'react'

interface Programers{
    name: string,
    languages: string,
    experience: number,
    company: string
}
function Program(props: Programers) {
  return (
    <div>
        <div className='cards'>
      <div >
      <div className="cards">
      <div className="card">
        <div className="card-body">

          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
               {props.languages}
          </p>
          <p className="card-text">
               {props.experience}
          </p>
          <p className="card-text">
               {props.company}
          </p>

        </div>
      </div>
      
      
    </div>

        </div>
      </div>
    </div>
  )
}

export default Program
