import { useEffect, useState } from 'react'
import AppContext from '../Context'
import { initialGrid } from '../data'
import '../styles/globals.css'
import { words } from '../words'



function MyApp({ Component, pageProps }) {
  
  const [gridOne, setGridOne] = useState(initialGrid)
  const [keyUsed , setKeyUsed] = useState([{}])
  const [position,setPosition] = useState(0)
  const [attempt, setAttempt] = useState(0)
  const [word,setWord] = useState('')
  const [letterState, setLetterState] =   useState('not-correct')

  function randomWord(words){
    const y = words.length
    const x = Math.floor(Math.random() * y)
    const chosenWord = words[x].toLowerCase()
    return (
      setWord(chosenWord)
    )
  }
 

  
  
  return(
    
    <AppContext.Provider
    value={{
      letterState,
      setLetterState,
      gridOne,
      setGridOne,
      keyUsed,
      setKeyUsed,
      position,
      setPosition,
      attempt,setAttempt,
      randomWord,
      word,
      setWord
    }}>

      <Component {...pageProps} />
    </AppContext.Provider>
     


    
    
    ) 
}

export default MyApp
