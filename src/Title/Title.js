import React from 'react'
import './title.css'
const notALink = 'not-a-link'

const Title = props => {
  return <h1 className={`text-center ${props.className}`}>{props.title}</h1>
}

export default Title
