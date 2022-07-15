import React, { useEffect } from 'react'
const AlpacaButton = props => {
  console.log(props.styleSelected)

  return (
    <div
      className={`alpaca-btn ${
        props.toggledState == props.text ? 'toggle-alpaca-btn' : ' '
      } ${props.styleSelected ? 'toggle-alpaca-btn' : ' '}`}
      onClick={e => {
        props.onClick(props, e)
      }}
    >
      {props.text}
    </div>
  )
}

export default AlpacaButton
