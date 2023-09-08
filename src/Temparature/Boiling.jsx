import React from 'react'

function Boiling({celcious=0}) {

    if(celcious>100){
  return (
    <div>
        <p> The water will boil</p>
        </div>
  )
    } else{
        return (
    <div>
        <p> The water will not boil</p>
        </div>
   ) }
    
}

export default Boiling