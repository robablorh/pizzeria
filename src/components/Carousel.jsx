import React from 'react'

function Carousel() {
  return (
    <div className="container-fluid">
    <div className="row">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                  <div className="carousel-inner carousel-inner2">
                    <div className="carousel-item active">
                        <img src="images/p7.jpg" className="d-block w-100 caroimagess" alt="pizza"/>
                    </div>
                    <div className="carousel-item">
                      <img src="images/p10.jpg" className="d-block w-100" alt="pizza"/>
                    </div>
                    <div className="carousel-item">
                      <img src="images/p5.jpg" className="d-block w-100" alt="pizza"/>
                     </div> 
                
                   
                      
                     
                   </div>
                  </div>
    </div>
</div>

  )
}

export default Carousel
