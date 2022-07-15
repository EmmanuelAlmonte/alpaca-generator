import React, { useState, useEffect } from 'react'
import Title from './Title/Title'
import AlpacaButton from './AlpacaButton'
import AlpacaImgPart from './AlpacaImgPart'
import './Alpaca.css'

let counter = 0
let lastSelectedBtn
let styleSelected = false

const Alpaca = props => {
  const [accessory, setAccessory] = useState('Hair')
  const [btnClicked, setBtnClicked] = useState('toggle-alpaca-btn')
  const [hair, setHair] = useState({
    type: 'Hair',
    partId: 'hair',
    style: 'custom-alp',
    src: './images/alpaca/hair/default.png',
    alt: 'default'
  })
  const [ears, setEars] = useState({
    type: 'Ears',
    partId: 'ears',
    style: 'custom-alp',
    src: './images/alpaca/ears/default.png',
    alt: 'default ears'
  })
  const [eyes, setEyes] = useState({
    type: 'Eyes',
    partId: 'eyes',
    style: 'custom-alp',
    src: './images/alpaca/eyes/default.png',
    alt: 'default eyes'
  })

  const [mouth, setMouth] = useState({
    type: 'Mouth',
    partId: 'mouth',
    style: 'custom-alp',
    src: './images/alpaca/mouth/default.png',
    alt: 'default mouth'
  })
  const [neck, setNeck] = useState({
    type: 'Neck',
    partId: 'neck',
    style: 'custom-alp',
    src: './images/alpaca/neck/default.png',
    alt: 'default neck'
  })

  const [leg, setLeg] = useState({
    type: 'Leg',
    partId: 'leg',
    style: 'custom-alp',
    src: './images/alpaca/leg/default.png',
    alt: 'default leg'
  })
  const [accessories, setAccessories] = useState({
    type: 'Accessories',
    selected: true,
    partId: 'accessories',
    style: 'no-display',
    src: '',
    alt: 'default accessories'
  })
  const [background, setBackground] = useState({
    type: 'Backgrounds',
    partId: 'background',
    style: 'custom-alp',
    src: './images/alpaca/backgrounds/blue60.png',
    alt: 'default background'
  })
  const [nose, setNose] = useState({
    type: 'Nose',
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
  const chooseAccessory = ({ type, partId, style, src, alt }, e) => {
    // console.log(alpacaParts)
    // if (counter === 0) {
    //   lastSelectedBtn = e.target
    //   console.log(counter, lastSelectedBtn)
    //   e.target.classList.add('toggle-alpaca-btn')
    //   counter += 1
    // } else {
    //   console.log( counter, lastSelectedBtn)
    //   lastSelectedBtn.classList.remove('toggle-alpaca-btn')
    //   counter = 0
    // }
    // console.log(currentAccessory)
    switch (partId) {
      case 'hair':
        setHair({
          selected: true,
          partId: partId,
          style: style,
          src: src,
          alt: alt
        })
        break
      case 'ears':
        setEars({
          selected: true,
          partId: partId,
          style: style,
          src: src,
          alt: alt
        })
        break
      case 'eyes':
        setEyes({
          selected: true,
          partId: partId,
          style: style,
          src: src,
          alt: alt
        })
        break
      case 'mouth':
        setMouth({
          selected: true,
          partId: partId,
          style: style,
          src: src,
          alt: alt
        })
        break
      case 'neck':
        setNeck({
          selected: true,
          partId: partId,
          style: style,
          src: src,
          alt: alt
        })
        break
      case 'leg':
        setLeg({
          selected: true,
          partId: partId,
          style: style,
          src: src,
          alt: alt
        })
        break
      case 'accessories':
        setAccessories({
          selected: true,
          partId: partId,
          style: style,
          src: src,
          alt: alt
        })
        break
      case 'background':
        setBackground({
          selected: true,
          partId: partId,
          style: style,
          src: src,
          alt: alt
        })
        break
      default:
        console.log("Style choice Doesn't exist.")
    }
  }

  useEffect(() => {
    updateAlpaca()
  }, [hair, ears, eyes, mouth, neck, leg, accessories, background, nose])

  // useEffect(() => {
  //   if (props.currentAlpaca) {
  //     for (let x = 0; x < props.currentAlpaca.length; x++) {
  //       // styleSelected = false
  //       if (props.currentAlpaca[x].src === props.src) {
  //         styleSelected = props.src
  //         console.log(props.src, styleSelected)
  //       }
  //     }
  //   }
  //   return () => {
  //     styleSelected = false
  //   }
  // }, [props.currentAlpaca])

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
                  currentAlpaca={alpacaParts}
                  toggledState={accessory}
                  styleSelected={false}
                />
              )
            })}
          </div>
          <h3 className='test-h3'>Style</h3>
          <div className='alpaca-ui-section'>
            {props.data.alpacaStyle[accessory].map(
              ({ partId, style, text, src, alt }, index) => {
                let selectedBtn
                for(let x = 0; x < alpacaParts.length; x++) {
                  if(alpacaParts[x].src ==  src){
                    selectedBtn = true
                    // console.log(selectedBtn, 'toggle')
                  } 
                }
                return (
                  <AlpacaButton
                    partId={partId}
                    text={text}
                    src={src}
                    key={index}
                    alt={alt}
                    changeStyle={style}
                    currentAlpaca={'d'}
                    styleSelected={selectedBtn}
                    onClick={chooseAccessory}
                  />
                )
              }
            )}
          </div>
        </div>
      </div>
      <div className='alpaca-footer'>
        {/* <AlpacaButton text='Random' />
        <AlpacaButton text='Download' /> */}
      </div>
    </div>
  )
}

export default Alpaca
