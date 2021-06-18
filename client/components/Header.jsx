import React from 'react'
import colors from '../colors'
import pokemons from '../../data/pokemon'

function Header () {
  return (
    <>
      <div className="flex justify-center container mx-auto">
        <div className="flex p-4 items-center">
          <img src={"/images/pokemon/" + "001.png"} className="h-8 w-8" />
          <div style={{ color: colors.color }}>TEAM  BULBASAUR</div>
        </div>
      </div>

    </>
  )
}
export default Header
