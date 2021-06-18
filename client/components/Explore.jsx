import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import pokemon from '../../data/pokemon'

function Explore(props) {
  // const pokemonGenerator = pokemon[Math.floor(Math.random() * pokemon.length)]

  const [pokemonGenerator, setPokemon] = useState(pokemon[Math.floor(Math.random() * pokemon.length)])
  const [imageDisplay, setImageDisplay] = useState("/images/pokemon-fr-battle-ed-static.jpg")
  const [showScan, setScan] = useState(null)

  const exploreAudio = new Audio('/soundEffects/106-road.mp3')
  const whoAudio = new Audio('/soundEffects/Whothat.mp3')
  function startGif() {
    setImageDisplay("/images/pokemon-fr-battle-ed.gif")
  }

  function findPokemon() {
    let randomPokemon = Math.floor(Math.random() * 5) + 1
    console.log(randomPokemon)
    if (randomPokemon === 1) {
      setTimeout(displayPokemon, 2000)

    }
    else if (randomPokemon === 2) {
      setTimeout(displayPokemon, 4000)

    }
    else if (randomPokemon === 3) {
      setTimeout(displayPokemon, 8000)

    }
    else if (randomPokemon === 4) {
      setTimeout(displayPokemon, 11000)

    }
    else if (randomPokemon === 5) {
      setTimeout(displayPokemon, 13000)

    }
    setScan(null)
  }

  function displayPokemon() {
    console.log(pokemonGenerator.image)
    console.log(pokemonGenerator.name)

    setImageDisplay("/images/pokemon/" + pokemonGenerator.image)
    setScan(true)

    exploreAudio.pause()
    whoAudio.play()

  }
  return (
    <div className="flex flex-col mx-auto items-center">
      <Button label="Explore" animated onClick={() => { { exploreAudio.play() } startGif(); findPokemon() }} />
      <br />
      <img width="600px" height="600px" id="staticToGif" src={imageDisplay} alt="" />
      <br />

      {
        showScan && <Link to={`/Scan`}>
          <Button onClick={() => { props.callback(pokemonGenerator); console.log('here'); }} className={'flex justify-center'} animated label="Scan" />
        </Link>
      }
    </div>
  )
}




export default Explore