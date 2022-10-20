import Head from 'next/head'
import Image from 'next/image'
import LetterBox from '../src/components/LetterBox'
import styles from '../styles/Home.module.css'
import Keyboard from '../src/components/Keyboard'
import Grid from "../src/components/Grid"

export default function Home() {
  return (
    <>
    
    <div className="container my-20 mx-auto ">
    <Grid></Grid>
      <Keyboard></Keyboard>
    </div>
    </>
  )
}
