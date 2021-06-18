import React from 'react'
import colors from '../colors'

function Header () {
  return (
    <>
      <div className="flex justify-center container mx-auto">
        <div className="flex p-4 items-center">
          <img src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png" className="h-8 w-8" />
          <div style={{ color: colors.color }}>TEAM  BULBASAUR</div>
        </div>
      </div>

    </>
  )
}
export default Header
