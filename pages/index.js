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

    const {randomWord} = useContext(AppContext)

    //selects the random word and saves it in the state
  useEffect(() => {
     randomWord(words)
  } , [])


  return (
    <>
    
    <div className="container my-20 mx-auto ">
    <Grid></Grid>
      <Keyboard></Keyboard>
    </div>
    </>
  )
}
