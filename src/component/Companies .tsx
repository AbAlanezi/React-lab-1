import React from 'react'

interface Companie{
    name: string,
    employees: number,
    founded: number
}

function Companies (props: Companie) {
  return (
    <div>
      <div >
      <div className="cards">
      <div className="card">
        <div className="card-body">

          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
               {props.employees}
          </p>
          <p className="card-text">
               {props.founded}
          </p>

        </div>
      </div>
      
      
    </div>

        </div>
    </div>
  )
}

export default Companies 
