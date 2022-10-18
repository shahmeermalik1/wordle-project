import Head from 'next/head'
import Image from 'next/image'
import LetterBox from '../src/components/LetterBox'
import styles from '../styles/Home.module.css'
import Keyboard from '../src/components/Keyboard'


export default function Home() {
  return (
    <>
    <div className="container w-2/4 my-20 mx-auto bg-gray-500">
      <LetterBox/>
      <Keyboard></Keyboard>
    </div>
    </>
  )
}
