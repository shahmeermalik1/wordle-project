import React, { useContext, useState } from 'react'
import AppContext from '../../Context'
import LetterBox from './LetterBox'
// start from 47 mins

function Grid(){

    const {keyUsed} = useContext(AppContext)
      const x = keyUsed[0].name 

    return (
   <>
    <div className="grid grid-cols-5 text-center place-items-stretch gap-4 m-10" >
    
    
        <div className=" "><LetterBox x={0} y={0} /></div>
        <div className=" "><LetterBox x={1} y={0} /></div>
        <div className=" "><LetterBox x={2} y={0} /></div>
        <div className=" "><LetterBox x={3} y={0} /></div>
        <div className=" "><LetterBox x={4} y={0} /></div>
        <div className=" "><LetterBox x={0} y={1} /></div>
        <div className=" "><LetterBox x={1} y={1} /></div>
        <div className=" "><LetterBox x={2} y={1} /></div>
        <div className=" "><LetterBox x={3} y={1} /></div>
        <div className=" "><LetterBox x={4} y={1} /></div>
        <div className=" "><LetterBox x={0} y={2} /></div>
        <div className=" "><LetterBox x={1} y={2} /></div>
        <div className=" "><LetterBox x={2} y={2} /></div>
        <div className=" "><LetterBox x={3} y={2} /></div>
        <div className=" "><LetterBox x={4} y={2} /></div>
        <div className=" "><LetterBox x={0} y={3} /></div>
        <div className=" "><LetterBox x={1} y={3} /></div>
        <div className=" "><LetterBox x={2} y={3} /></div>
        <div className=" "><LetterBox x={3} y={3} /></div>
        <div className=" "><LetterBox x={4} y={3} /></div>
        <div className=" "><LetterBox x={0} y={4} /></div>
        <div className=" "><LetterBox x={1} y={4} /></div>
        <div className=" "><LetterBox x={2} y={4} /></div>
        <div className=" "><LetterBox x={3} y={4} /></div>
        <div className=" "><LetterBox x={4} y={4} /></div>
        <div className=" "><LetterBox x={0} y={5} /></div>
        <div className=" "><LetterBox x={1} y={5} /></div>
        <div className=" "><LetterBox x={2} y={5} /></div>
        <div className=" "><LetterBox x={3} y={5} /></div>
        <div className=" "><LetterBox x={4} y={5} /></div>
        </div>

   </>
  )
}

export default Grid