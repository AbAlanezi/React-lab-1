import React from 'react'

interface TypServices {
    service: string,
    price: number
}

function Services(props: TypServices) {
  return (
    <div className='cards'>
            <div>
      <div className="cards">
      <div className="card">
        <div className="card-body">

          <h5 className="card-title">{props.service}</h5>
          <p className="card-text">
               {props.price}
          </p>
        </div>
      </div>
      
      
    </div>

        </div>
    </div>
  )
}

export default Services
