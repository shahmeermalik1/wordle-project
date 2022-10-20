import React, { useContext } from 'react'
import AppContext from '../../Context'


function LetterBox({x,y}) {

 const {gridOne} = useContext(AppContext)
  const letter = gridOne[y][x]
  return (
    <>
    <div className="letter">
      {letter}
    </div>
    
    </>
  )
}

export default LetterBox