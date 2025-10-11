import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile-pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_pic} alt="" />
        <h1><span>I'm Khelif Abdellah,</span> frontend developer based in ALGERIA.</h1>
        <p>I am a frontend developer from Bouira, Algeria with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
          </div>
          <div className="hero-resume">My Reasume</div>
        </div>
    </div>
  )
}

export default Hero