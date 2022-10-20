import { useState } from 'react'
import AppContext from '../Context'
import { initialGrid } from '../data'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const [gridOne, setGridOne] = useState(initialGrid)
  const [keyUsed , setKeyUsed] = useState([{}])
  const [position,setPosition] = useState(0)
  const [attempt, setAttempt] = useState(0)



  
  return(
    
    <AppContext.Provider
    value={{
      gridOne,
      setGridOne,
      keyUsed,
      setKeyUsed,
      position,
      setPosition,
      attempt,setAttempt
    }}>

      <Component {...pageProps} />
    </AppContext.Provider>
     


    
    
    ) 
}

export default MyApp
