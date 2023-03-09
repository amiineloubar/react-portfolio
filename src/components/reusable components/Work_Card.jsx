import React from 'react'

function WorkCard(props) {
  return (
      <div className="card">
      <img className="card-img-top" loading="lazy" src={props.src} alt={props.title} />
          <div className="card-body">
        <h5 className="card-title fs-5 fw-bold">{props.title}</h5>
            <p className="card-text text-black-50 fs-6">{props.description}</p>
          </div>
      </div>
  )
}

export default WorkCard