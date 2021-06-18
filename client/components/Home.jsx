import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Home () {
  const audio = new Audio('/soundEffects/101-opening.mp3')

  return (
    <>
      <div>
        <img onClick={() => { audio.play() }} className= "flex flex-col mx-auto items-center w-1/2 h-1/2" src="/images/pallet-town.png" alt='Home'/>
      </div>
      <div className= "flex flex-col mx-auto items-center p-4">
        <Link to = {'/explore'}>
          <Button onClick={ () => { audio.pause() } }className={'flex justify-center'} animated label="Leave home" />
        </Link>
      </div>

    </>
  )
}
export default Home
