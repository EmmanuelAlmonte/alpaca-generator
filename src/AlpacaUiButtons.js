import React, { useState } from 'react'
import AlpacaButton from './AlpacaButton'

const AlpacaUiButtons = props => {
  return (
    <>
      {props.data.alpacaAccessories.map(({ text }, index) => {
        return <AlpacaButton text={text} key={index} />
      })}
    </>
  )
}
