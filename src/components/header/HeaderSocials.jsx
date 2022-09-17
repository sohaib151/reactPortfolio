import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillDribbbleCircle} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a target="_blank" rel='noopener noreferrer' href='https://linkedin.com' ><BsLinkedin/> </a>
        <a target="_blank" rel='noopener noreferrer' href='https://github.com' ><BsGithub/> </a>
        <a target="_blank" rel='noopener noreferrer' href='https://dribble.com' ><AiFillDribbbleCircle/> </a>
    </div>
  )
}

export default HeaderSocials