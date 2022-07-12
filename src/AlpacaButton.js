import React from 'react'

const AlpacaButton = props => {
  // console.log(props.text, props.toggledState)
  return (
    <div
      className={`alpaca-btn ${
        props.toggledState == props.text ? 'toggle-alpaca-btn' : ' '
      }`}
      onClick={e => {
        props.onClick(props)
      }}
    >
      {props.text}
    </div>
  )
}

export default AlpacaButton
