import React from 'react'

function Button(props) {
  return (
    <>
      <button onClick={props.onClick} className={`border-2 border-green-900 from-white ${props.animated && 'animate-pulse'} bg-gradient-to-r to-red-500 px-4 py-2 text-green-900`}>{props.label.toUpperCase()}</button>
    </>
  )
}

export default Button


