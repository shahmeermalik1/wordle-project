import Head from 'next/head'
import Image from 'next/image'
import LetterBox from '../src/components/LetterBox'
import styles from '../styles/Home.module.css'
import Keyboard from '../src/components/Keyboard'
import Grid from "../src/components/Grid"
import { useContext, useEffect } from 'react'
import AppContext from '../Context'
import { words } from '../words'

export default function Home() {

    const {randomWord, gridOne,attempt,checkWord} = useContext(AppContext)

    //selects the random word and saves it in the state
  useEffect(() => {
     randomWord(words)
  } , [])

  
  

  return (
    <>
    <div className="container-fluid w-100 text-center shadow-lg">
      <div className="text-white text-3xl py-4">
        WORDLE
      </div>
    </div>

    <div className="container w-2/4 mx-auto ">
    <Grid></Grid>
    </div>
    <div className="container w-2/3 mx-auto ">
      <Keyboard></Keyboard>
    </div>
    </>
  )
}
