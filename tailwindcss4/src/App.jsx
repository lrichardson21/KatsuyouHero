import { useState } from 'react'
import './App.css'
import './index.css'

import Settings from './Components/Settings'
import Logo from './Components/Logo'

const Question = ({ kanji, furigana }) => {
  return(
    <div className='flex flex-col items-center'>
      <p className='text-center'>{furigana}</p>
      <h2 className='text-5xl'>{kanji}</h2>
    </div>
  )
}

const Form = ({ conjugation }) => {
  return(
    <div>
      <h2>{conjugation}</h2>
    </div>
  )
}


function App() {
  return (
    <body className='App flex-auto'>
      <Logo></Logo>
      <div className='transform'>
        <Settings></Settings>
    
        <Question kanji="見る" furigana="みる"/>

      </div>
      

    </body>
  )
}

export default App
