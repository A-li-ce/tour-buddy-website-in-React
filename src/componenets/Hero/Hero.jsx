import React from 'react'
import './Hero.css'
function Hero(props) {
  return (
    <>

      <div className={props.cName}>
         <img src={props.heroImg} alt="hero img" className='Img' />
      </div>

      <div className={props.textCls}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnCls}>{props.btnText}</a>
      </div>

    </>
  )
}

export default Hero
