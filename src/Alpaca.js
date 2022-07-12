import React, { useState } from 'react'
import Title from './Title/Title'
import AlpacaButton from './AlpacaButton'
import AlpacaImgPart from './AlpacaImgPart'
import './Alpaca.css'
const Alpaca = props => {
  const [accessory, setAccessory] = useState('Hair')
  console.log('The accessory selected is: ' + accessory)
  const [hair, setHair] = useState({
    partId: 'hair',
    style: 'custom-alp',
    src: './images/alpaca/hair/default.png',
    alt: 'default'
  })
  const [ears, setEars] = useState({
    partId: 'ears',
    style: 'custom-alp',
    src: './images/alpaca/ears/default.png',
    alt: 'default ears'
  })
  const [eyes, setEyes] = useState({
    partId: 'eyes',
    style: 'custom-alp',
    src: './images/alpaca/eyes/default.png',
    alt: 'default eyes'
  })

  const [mouth, setMouth] = useState({
    partId: 'mouth',
    style: 'custom-alp',
    src: './images/alpaca/mouth/default.png',
    alt: 'default mouth'
  })
  const [neck, setNeck] = useState({
    partId: 'neck',
    style: 'custom-alp',
    src: './images/alpaca/neck/default.png',
    alt: 'default neck'
  })

  const [leg, setLeg] = useState({
    partId: 'leg',
    style: 'custom-alp',
    src: './images/alpaca/leg/bubble-tea.png',
    alt: 'default leg'
  })
  const [accessories, setAccessories] = useState({
    partId: 'accessories',
    style: 'custom-alp',
    src: './images/alpaca/accessories/earings.png',
    alt: 'default accessories'
  })
  const [background, setBackground] = useState({
    partId: 'background',
    style: 'custom-alp',
    src: './images/alpaca/backgrounds/blue50.png',
    alt: 'default background'
  })
  const [nose, setNose] = useState({
    partId: 'nose',
    style: 'custom-alp',
    src: './images/alpaca/nose.png',
    alt: 'default nose'
  })

  const [alpacaParts, setAlpacaParts] = useState([
    hair,
    ears,
    eyes,
    mouth,
    neck,
    leg,
    accessories,
    background,
    nose
  ])
  const updateAlpaca = () => {
    setAlpacaParts([
      hair,
      ears,
      eyes,
      mouth,
      neck,
      leg,
      accessories,
      background,
      nose
    ])
  }

  const styleAccessory = ({ text }) => {
    setAccessory(text)
  }
  const chooseAccessory = ({ partId, style, src, alt }) => {
    // console.log(currentAccessory)
    setAccessories({ partId: partId, style: style, src: src, alt: alt })
    console.log(accessories)
    updateAlpaca()
  }
  return (
    <div className='alpaca-container'>
      <Title title='Alpaca Generator' className='alpaca-title' />
      <div className='alpaca-main'>
        <div className='alpaca-preview'>
          {alpacaParts.map(({ partId, style, src, alt }, index) => {
            return (
              <AlpacaImgPart
                key={partId}
                partId={partId}
                style={style}
                src={src}
                alt={alt}
              />
            )
          })}
          {/* 
          <img
          ></img>
          
          */}
        </div>
        <div className='alpaca-ui-buttons'>
          <h3 className='test-h3'>Accessorize the alpaca's</h3>
          <div className='alpaca-ui-section'>
            {props.data.alpacaAccessories.map(({ text }, index) => {
              return (
                <AlpacaButton
                  text={text}
                  key={index}
                  onClick={styleAccessory}
                  toggledState={accessory}
                />
              )
            })}
          </div>
          <h3 className='test-h3'>Style</h3>
          <div className='alpaca-ui-section'>
            {props.data.alpacaStyle[accessory].map(
              ({ partId, style, text, src, alt }, index) => {
                return (
                  <AlpacaButton
                    partId={partId}
                    text={text}
                    src={src}
                    key={index}
                    alt={alt}
                    style={style}
                    // toggledState={''}
                    onClick={chooseAccessory}
                  />
                )
              }
            )}
          </div>
        </div>
      </div>
      <div className='alpaca-footer'>
        <AlpacaButton text='Random' />
        <AlpacaButton text='Download' />
      </div>
    </div>
  )
}

export default Alpaca
