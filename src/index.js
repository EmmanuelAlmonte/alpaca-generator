import React from 'react'
import * as ReactDOM from 'react-dom/client'
import Alpaca from './Alpaca'
import data from './data'
const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)
root.render(
  <Alpaca data={data}/>
)