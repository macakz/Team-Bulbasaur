import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import pokemons from '../../data/pokemon'

const Scan = (props) => {

  const defaultPokemon = pokemons[0]
  const [pokemon, setPokemon] = useState(props.pokemon ?? defaultPokemon)
  const num = pokemon.nationalPokedexNumber

  const sound = new Audio(`/soundEffects/pokemon/${num}.mp3`)
  sound.play()


  return (
    <div className="flex flex-col items-center m-2 md:m-20 mb-10">
      <div className="rounded-lg w-72 md:w-max bg-red-600 md:flex justify-center">
        <div className="w-64 h-10 bg-red-800">
          <p></p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start justify-center">
          <div className="flex flex-col items-center">
            <h3>{pokemon.name}</h3>
            <img onClick={() => { sound.play() }} src={"/images/pokemon/" + pokemon.image} alt="" className="w-64 h-64" />
            <h4>Pokedex# <strong>{pokemon.nationalPokedexNumber}</strong></h4>
          </div>
          <article className="mt-10">
            <table className="w-64">
              <thead>
                <tr><th>Stats</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>HP</td>
                  <td className="w-full text-right">{pokemon.hpStat}</td>
                </tr>

                <tr>
                  <td>Attack</td>
                  <td className="w-full text-right">{pokemon.attackStat}</td>
                </tr>

                <tr>
                  <td>Defense</td>
                  <td className="w-full text-right">{pokemon.defenseStat}</td>
                </tr>

                <tr>
                  <td>Speed</td>
                  <td className="w-full text-right">{pokemon.speedStat}</td>
                </tr>

                <tr>
                  <td>Special</td>
                  <td className="w-full text-right">{pokemon.specialStat}</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
        <aside className="mt-10 p-4 md:w-64">
          <p>
            {pokemon.description}
          </p>
        </aside>
      </div>
      <br />
      <Link to={`/`}>
        <Button className={'flex justify-center'} animated label="GO HOME" />
      </Link>
    </div>
  )

};


export default Scan