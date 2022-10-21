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



  <div className="  letter  border-[1px] text-3xl place-items-center h-20" id={letterCheck}>
      <div className="letter1 p-5 text-white rounded-md">
      {letter}
      

      </div>
    </div>

    
    
    </>
  )
}

export default LetterBox