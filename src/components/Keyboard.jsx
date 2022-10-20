import React from 'react'
import Letter from './Letter'

function Keyboard() {
 
  const line1 = ["q","w","e","r","r","t","y","u","i","o","p"]
  const line2 = ["a","s","d","f","g","h","j","k","l"]
  const line3 = ["Enter","z","x","c","v","b","n","m","Delete"]
 
  return (
   
   
   <>
   <div className="keyboard my-10">
    <div className="container-fluid text-center">
      <div className="grid grid-cols-11">
   {line1.map((key) =>(
    <Letter value={key}></Letter>
   ))}
    </div>
    </div>

    <div className="container-fluid text-center">
      <div className="grid grid-cols-9">
   {line2.map((key) =>(
    <Letter value={key} key={key}></Letter>
   ))}
    </div>
    </div>

    <div className="container-fluid text-center ">
      <div className="grid grid-cols-9">
   {line3.map((key) =>(
    <Letter value={key}></Letter>
   ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default Keyboard