import React from 'react'

const Cards = ({imgsrc, title}) => {
  return (
    <div>
       <div className="col">
    		<div className="card" style={{width: "14rem"}}>
			  <img src={imgsrc} alt='imgs' className="card-img-top" />
			  <div className="card-body">
			  	<h5>{title}</h5>
			    <p className="card-text">
			    	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			    	tempor incididunt ut labore et dolore magna aliqua.
			    </p>
			    
			  </div>
			</div>
			</div>
    </div>
  )
}

export default Cards
