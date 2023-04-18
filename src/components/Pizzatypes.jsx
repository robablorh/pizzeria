import React from 'react'
import Cards from './Cards'

const Pizzatypes = () => {
 let piz1="images/p3.jpg"
 let piz2="images/p7.jpg"
 let piz3="images/p4.jpg"
 let piz4="images/p8.jpg"
  return (
<div class="container pizzatypes">
    	<h3 className="text-center">PIZZA TYPES</h3>
    	<div className="row">
        <Cards imgsrc={piz1} title="Bossu Pizza"/>
        <Cards imgsrc={piz2} title="Sheep Pizza"/>
        <Cards imgsrc={piz3} title="Goat Pizza"/>
        <Cards imgsrc={piz4} title="Cow  Pizza"/>
        
    



        </div>
</div>
  )
}

export default Pizzatypes
