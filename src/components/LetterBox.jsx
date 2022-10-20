import React, { useContext } from 'react'
import AppContext from '../../Context'


function LetterBox({x,y}) {

 const {gridOne ,word,letterState, setLetterState,attempt} = useContext(AppContext)
  const letter = gridOne[y][x]
  
  
  
    const correct = word[x] === letter;
  const almost = !correct && word.includes(letter)
  
  const letterCheck = attempt > y && (correct ? "correct" : almost ? "almost" : 'error')
  

  

  return (
    <>


    <div className="letter" id={letterCheck}>
      {letter}
    </div>
    
    </>
  )
}

export default LetterBox