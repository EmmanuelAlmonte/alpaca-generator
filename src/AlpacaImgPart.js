import React from 'react'

const AlpacaImgPart = ({ partId, style, src, alt }) => {
  // console.log(partId)
  return <img id={partId} className={style} src={src} alt={alt} />
}

export default AlpacaImgPart
