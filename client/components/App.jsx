import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Explore from './Explore'
import Scan from './Scan'
import pokemons from '../../data/pokemon'

function App() {
  const [pokemon, setPokemon] = useState(pokemons[0])

  function getPokemon(pokemon) {
    console.log('callback')
    setPokemon(pokemon)
  }
  return (
    <>

      <hr />
      <div className="flex flex-col mx-auto items-center">
        <Header />
      </div>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/explore' render={() => <Explore callback={getPokemon} />} />
        <Route exact path='/scan' render={() => <Scan pokemon={pokemon} />} />

      </div>

    </>
  )
}
export default App

// onClick={() => { alert('ehhe') }}
